import fs from 'fs'
import { TerraformProviderAws } from '../registry/index'

type NestedObject = { [key: string]: NestedObject }

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
    const localPath: string[] = str.match(thunk_path_rx) || []
    const index = [localPath.indexOf('resource'), localPath.indexOf('data')].filter(
        (x) => x !== -1
    )[0]
    const keyPath = localPath.slice(0, index)
    const assetPath = localPath.slice(index)
    const [category, type, ...rest] = assetPath
    const key = [...parentPath, ...keyPath].join('_')
    return `\${${[category, `${provider}_${type}`, key, ...rest].join('.')}}`
}

/**
 * recursively stringifies any thunks anywhere within an object
 */
const thunkStringifier = (obj: object, parentPath: string[] = [], provider = 'aws'): NestedObject =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        if (typeof v === 'function') {
            //console.log('thunk found:', v.name, k) // for thunks v.name === k
            return { ...a, [k]: reorgThunk(v, parentPath, provider) }
        } else if (typeof v === 'object') {
            return { ...a, [k]: thunkStringifier(v, parentPath) }
        } else {
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
    obj: object,
    provider = 'aws',
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
                        [path]: thunkStringifier(target, keyPath.slice(0, -1)),
                    },
                },
            }
        } else {
            return { ...a, ...flattenPreservingKeyPaths(v, provider, [...keyPath, resource], a) }
        }
    }, acc)
}

/**
 * Step 1: recurse through object and find thunks (TB stringified and xfd)
 * Step 2: transform objects to inject the asset name into their path at the right place
 * Step 3: test with `terraform plan`
 * Step 4: migrate some modules from terraform aws modules library
 *  - lambda
 *      - efs
 *      - env vars
 *  - api gw v2
 *  - s3
 *  - sns
 * Step 5: test with bundler (@-0/build-lambda-py)
 */

//FIXME: handle provider injection and provider name (source)
export const compile = (obj: object, filePath: string, source = 'terraform-provider-aws') => {
    const prov = source.split('-').reverse()[0]
    const flattened = flattenPreservingKeyPaths(obj, prov, [], {})
    const provider = {
        provider: [
            {
                aws: {
                    region: 'us-east-2',
                },
            },
        ],
    }
    const out = { ...flattened, ...provider }
    const json = JSON.stringify(out, null, 2)
    fs.writeFileSync(filePath, json)
    console.log('compile complete')
}
