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
        } else if (isArray(v)) {
            //console.log(`array found for ${k}: ${JSON.stringify(v)}`)
            return { ...a, [k]: v.map((x) => (isPlainObject(x) ? exportCleaner(x) : x)) }
        } else {
            return { ...a, [k]: v }
        }
    }, {})

// regex that replaces a number surrounded by periods .0. with a number surrounded by brackets [0]
const bracketRegex = /\.\d+\./g
// function that replaces any internal .0. with [0]
const bracketify = (str: string) => str.replace(bracketRegex, (match) => `[${match.slice(1, -1)}].`)
/**
 * produces terraform string templates for exported (--> prefixed) values
 * recursively
 */
const exporter = (
    obj: object,
    scoped: string,
    pivot: string,
    type: string,
    path: string[] | any = []
): NestedObject =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        if (isString(v) && v.startsWith('-->')) {
            return {
                ...a,
                [k]: bracketify(
                    `\${${pivot}.${type}.${scoped}.${path.length ? path.join('.') + '.' : ''}${k}}`
                ),
            }
        } else if (isPlainObject(v)) {
            return { ...a, [k]: exporter(v, scoped, pivot, type, [...path, k]) }
        } else if (isArray(v)) {
            return {
                ...a,
                [k]: v.map((x, i) =>
                    isPlainObject(x) ? exporter(x, scoped, pivot, type, [...path, k, i]) : x
                ),
            }
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

export const parseFirstArgObj = (fn: any) => {
    const args = fn.toString().match(/\(([^)]*)\)/)[1]
    let obj
    try {
        // grab the first object using regex
        obj = args.match(/{[\s\S]*(?=,\s{0,10}my)/)[0]
    } catch (e) {
        console.error(`Ensure the second argument to your module is named "my"`)
        return {}
    }
    // replace = with :
    const replaced = obj.replace(/ ?={1}/g, ':')
    // count the number of opening {
    const openers = replaced.match(/{/g)
    // count the number of closing }
    const closers = replaced.match(/}/g)
    // if the number of opening { is greater than the number of closing }
    // we need to add the difference to the end of the string
    const diff = openers.length - closers.length
    const add = Array(diff).fill('}')
    const final = replaced + add.join('')
    // replace single quotes with double quotes
    const double = final.replace(/'/g, '"')
    // wrap any symbol keys with quotes
    const stringed = double.replace(/([a-zA-Z0-9|_]+?):/g, '"$1":')
    return JSON.parse(stringed)
}

type FnParams<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never
type FnReturn<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

/**
 *
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
    const defaultArg = parseFirstArgObj(fn)
    const ref = { [key]: fn(defaultArg) }
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
