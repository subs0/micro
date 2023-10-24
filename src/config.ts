import { writeFileSync } from 'fs'
import { isPlainObject, isArray, isFunction, isString } from '@thi.ng/checks'
type NestedObject = { [key: string]: NestedObject }

/**
 * cleans out any export-specific values (--> prefixed) recursively
 */
const exportCleaner = (obj: object): NestedObject =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        if (v === undefined || v === '-->') return a
        if (isString(v) && v.startsWith('-->')) {
            return { ...a, [k]: v.replace('-->', '') }
        } else if (isPlainObject(v)) {
            return { ...a, [k]: exportCleaner(v) }
        } else {
            return { ...a, [k]: v }
        }
    }, {})

/**
 * produces terraform string templates for exported (--> prefixed) values
 * recursively
 */
const exporter = (obj: object, scoped: string, pivot: string, type: string): NestedObject =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        if (isString(v) && v.startsWith('-->')) {
            return { ...a, [k]: `\${${pivot}.${type}.${scoped}.${k}}` }
        } else if (isPlainObject(v)) {
            return { ...a, [k]: exporter(v, scoped, pivot, type) }
        } else {
            //console.log(`passthrough in exporter function...`)
            //console.log({ k, v, type, pivot, scoped })
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

/**
 * deep merges arbitrary number of objects into one
 */
const deepMerge = (...objs) => {
    const result = {}
    for (const obj of objs) {
        for (const key in obj) {
            const val = obj[key]
            if (key === 'provider' && result[key] && 'alias' in val) {
                continue
            }
            if (Array.isArray(val)) {
                result[key] = result[key] || []
                result[key].push(...val)
            } else if (typeof val === 'object') {
                result[key] = deepMerge(result[key] || {}, val)
            } else {
                result[key] = val
            }
        }
    }
    return result
}

type FnParams<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never
type FnReturn<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

/**
 * Takes an object who's key provides a namespace for the module and value
 * is a function that takes two arguments:
 * 1. an options/configuration object to be passed to the module
 * 2. (optional) a reference to the outputs of the module (for cross-resource references)
 *
 * Returns a function that takes the same arguments as the module function
 * with the second argument applied
 */
export const modulate = <T extends { [key: string]: (...args: any[]) => any }>(
    obj: T,
    provider = 'aws'
) => {
    const [key, fn] = Object.entries(obj)[0]

    const ref = { [key]: fn({}) }
    const refs = flattenPreservingPaths(ref, provider, [], {}, true)

    return (...args: [FnParams<T[keyof T]>[0], ...Partial<FnParams<T[keyof T]>>[]]) => {
        const obj = { [key]: fn(...args, refs) }
        const out = flattenPreservingPaths(obj, provider, [], {}, false)
        return [out, refs] as [FnReturn<T[keyof T]>, FnReturn<T[keyof T]>]
    }
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
    const providerWrapped = {
        terraform,
        provider,
    }
    return (...objs) => {
        const merged = deepMerge(...objs, providerWrapped)
        const out = JSON.stringify(merged, null, 2)
        writeFileSync(outputFile, out)
        return merged
    }
}
