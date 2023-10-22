import { promises } from 'fs'
import { isPlainObject, isArray, isFunction, isString } from '@thi.ng/checks'
type NestedObject = { [key: string]: NestedObject }

/**
 * recursively stringifies any thunks anywhere within an object
 */
const exportCleaner = (obj: object): NestedObject =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        if (v === '-->') {
            return a
        } else if (isPlainObject(v)) {
            return { ...a, [k]: exportCleaner(v) }
        } else {
            return { ...a, [k]: v }
        }
    }, {})

/**
 * recursively stringifies any thunks anywhere within an object
 */
const exporter = (obj: object, scoped: string, pivot: string, type: string): NestedObject =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        if (v === '-->') {
            //console.log({ k, v, type, pivot, scoped })
            return { ...a, [k]: `\${${pivot}.${type}.${scoped}.${k}}` }
        } else if (isPlainObject(v)) {
            return { ...a, [k]: exporter(v, scoped, pivot, type) }
        } else {
            // if the value is a string that matches its parent's key, it's a
            // self-reference and should be omitted from the output
            return { ...a, [k]: v }
        }
    }, {})

/**
 * flattens modules into a single object, with unique keys created by
 * joining nested key identifiers until the function reaches a pivot point
 * (resource or data) and then prepending the module name to the key ("_").
 */
export const flattenPreservingPaths = (
    obj: object,
    provider = 'aws', // FIXME: adds this to everything, even things you may not want
    path: string[] = [],
    acc: NestedObject = {},
    refs = false
): object => {
    const pivotPoints = ['resource', 'data']
    return Object.entries(obj).reduce((a, c) => {
        const [key, val] = c
        if (pivotPoints.includes(key)) {
            const target = Object.values(val)[0] as object // { [key]: {...} }
            const raw_type = Object.keys(val)[0] // e.g., lambda_function
            const type = `${provider}_${raw_type}`
            const scoped = path.join('_')
            const scope = path.slice(-1)[0]
            return refs
                ? {
                      ...a,
                      [scope]: {
                          ...a[scope],
                          [key]: {
                              ...(a[scope] && a[scope][key]),
                              [raw_type]: exporter(target, scoped, key, type),
                          },
                      },
                  }
                : {
                      ...a,
                      [key]: {
                          ...a[key],
                          [type]: {
                              ...(a[key] && a[key][type]),
                              [scoped]: exportCleaner(target),
                          },
                      },
                  }
        } else {
            return {
                ...a,
                ...flattenPreservingPaths(val, provider, [...path, key], a, refs),
            }
        }
    }, acc)
}

export interface Provider {
    [key: string]: {
        region: string
        profile?: string
        alias?: string
    }
}

export interface Terraform {
    required_providers: {
        [key: string]: {
            source: string
            version: string
        }
    }
}
/**
 * Takes a provider and a terraform configuration and returns a compiler function
 */
export const config = (
    provider: Provider[] | Provider,
    terraform: Terraform,
    outputFile: string
) => {
    if (!isArray(provider)) {
        provider = [provider]
    }
    const _provider = Object.keys(provider[0])[0]
    const providerWrapped = {
        provider,
        terraform,
    }
    return (obj: { [key: string]: Function }) => {
        const [key, fn] = Object.entries(obj)[0]
        const ref = { [key]: fn({}) }
        const refs = flattenPreservingPaths(ref, _provider, [], {}, true)
        //console.log(JSON.stringify(refs, null, 4))
        return (...args) => {
            const obj = { [key]: fn(...args, refs) }
            const flattened = flattenPreservingPaths(obj, _provider, [], {}, false)
            const out = { ...flattened, ...providerWrapped }
            const json = JSON.stringify(out, null, 4)
            promises.writeFile(outputFile, json).then(() => {
                console.log(`\n📦 compiled to ${outputFile}`)
            })
            return json
        }
    }
}
