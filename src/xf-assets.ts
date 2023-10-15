import fs from 'fs'
import { isPlainObject, isArray, isFunction, isString } from '@thi.ng/checks'
import { getInUnsafe } from '@thi.ng/paths'
type NestedObject = { [key: string]: NestedObject }

/**
 * takes a thunk:
 * - saves it
 * - executes it, grabbing the proper path
 * - returns the thunk, but with the proper reference
 * TODO: type output for IDE support... just use any in the meantime...
 */

const $ =
    (provider = 'aws') =>
    (path: string, fn: Function, ...args: any): any => {
        const executed = fn(...args)
        const name = Object.keys(executed)[0]
        const [category, type, ...rest] = path.split('.')
        return `\${${category}.${provider}_${type}.${name}.${rest.join('.')}}`
    }

export const aws_$ = $('aws')

const thunk_path_rx = /(?=:\.)?([a-zA-Z_$][0-9a-zA-Z_$]*)/g

/**
 * reorganizes a thunk value to be a terraform interpolator friendly string
 * @example:
 * - from: () => name.resource?.lambda_function?.arn
 * - to: ${resource.aws_lambda_function.name.arn}
 *
 */
const reorgThunk = (thunk: Function, parentPath: string[] = [], provider = 'aws') => {
    const str = thunk + ''
    const path: string[] = str.match(thunk_path_rx) || []
    const pivot = [path.indexOf('resource'), path.indexOf('data')].filter((x) => x !== -1)[0]
    const keyPath = path.slice(0, pivot)
    const assetPath = path.slice(pivot)
    const [category, type, ...rest] = assetPath
    const key = [...parentPath, ...keyPath].join('_')
    return `\${${[category, `${provider}_${type}`, key, ...rest].join('.')}}`
}

const reorgThink = (
    think: [key: string, thunk: Function],
    parentPath: string[] = [],
    provider = 'aws'
) => {
    const [_key, thunk] = think
    const str = thunk + ''
    const path: string[] = str.match(thunk_path_rx) || []
    const pivot = [path.indexOf('resource'), path.indexOf('data')].filter((x) => x !== -1)[0]
    const assetPath = path.slice(pivot)
    const [category, type, ...rest] = assetPath
    const key = [...parentPath, _key]
    return `\${${[category, `${provider}_${type}`, key, ...rest].join('.')}}`
}

/**
 * recursively stringifies any thunks anywhere within an object
 */
const thinker = (
    parentKey = '',
    obj: object,
    parentPath: string[] = [],
    provider = 'aws'
): NestedObject =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        //console.log({ k, v })
        if (isFunction(v)) {
            // if number of function args is zero (thunk):
            if (v.length === 0) {
                return { ...a, [k]: reorgThunk(v, parentPath, provider) }
            } else {
                const val = v()
                // TODO: create reorgThunk-like here
                return { ...a, [k]: reorgThink([val, v], parentPath, provider) }
            }
        } else if (isPlainObject(v)) {
            return { ...a, [k]: thinker(k, v, parentPath, provider) }
        } else {
            console.log(`string val: ${v} parent_key: ${parentKey}`)
            // if the value is a string that matches any of the parent keys,
            // it's a self-reference and should be ignored
            if (isString(v) && parentKey === v) {
                console.log(`is reference? ${isString(v) && parentKey === v}`)
                return a
            }
            return { ...a, [k]: v }
        }
    }, {})

enum PivotPoint {
    resource = 'resource',
    data = 'data',
}
/**
 * flattens modules into a single object, with unique keys created by
 * joining nested key identifiers until the function reaches a pivot point
 * (resource or data) and then prepending the module name to the key ("_").
 */
export const flattenPreservingKeyPaths = (
    parentKey = '',
    obj: object,
    provider = 'aws', // FIXME: adds this to everything, even things you may not want
    keyPath: string[] = [],
    acc: NestedObject = {}
): object => {
    const pivotPoints = ['resource', 'data']
    return Object.entries(obj).reduce((a, c) => {
        const [resource, v] = c
        if (pivotPoints.includes(resource)) {
            const path = keyPath.join('_')
            const target = Object.values(v)[0] as object // { [key]: {...} }
            const resource_type = Object.keys(v)[0] // lambda_function, api_gateway, etc.
            const key = `${provider}_${resource_type}`
            return {
                ...a,
                [resource]: {
                    ...a[resource],
                    [key]: {
                        ...(a[resource] && a[resource][key]),
                        [path]: thinker(parentKey, target, keyPath.slice(0, -1)),
                    },
                },
            }
        } else {
            return {
                ...a,
                ...flattenPreservingKeyPaths(resource, v, provider, [...keyPath, resource], a),
            }
        }
    }, acc)
}

export const compile = (obj: object, filePath: string, source = 'terraform-provider-aws') => {
    const prov = source.split('-').reverse()[0]
    const flattened = flattenPreservingKeyPaths('', obj, prov, [], {})
    // TODO: handle provider injection and provider name (source)
    // TODO: move to userland 🚀 👨
    const provider = {
        provider: [
            {
                aws: {
                    region: 'us-east-2',
                    profile: 'chopshop',
                },
            },
        ],
    }
    const out = { ...flattened, ...provider }
    const json = JSON.stringify(out, null, 4)
    fs.promises.writeFile(filePath, json).then(() => {
        console.log(`\n📦 compiled to ${filePath}`)
    })
    return json
}
