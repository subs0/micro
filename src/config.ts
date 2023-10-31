import { Provider, Terraform, NestedObject } from './types'
import { isPlainObject, isArray, isString } from '@thi.ng/checks'
import { isEmpty } from './utils/index'
import { writeFileSync } from 'fs'

// regex that replaces a number surrounded by periods .0. with a number surrounded by brackets [0]
const bracketRegex = /\.\d+\./g
// function that replaces any internal .0. with [0]. to allow for terraform interpolation
const bracketifyTF = (str: string) =>
    str.replace(bracketRegex, (match) => `[${match.slice(1, -1)}].`)
const bracketify = (str: string) => str.replace(bracketRegex, (match) => `[${match.slice(1, -1)}]`)

/**
 * produces terraform string templates for exported (--> prefixed) values
 * recursively
 */
const exporter = (
    target: object,
    scoped: string,
    pivot: string,
    type: string,
    path: string[] | any = []
): NestedObject | string => {
    const basePath = `${pivot}.${type}.${scoped}`
    const accessPath = path.length ? path.join('.') + '.' : ''
    const stringTemplate = (v: string, path: any[] = []) => {
        const key = path.slice(-1)[0]
        const access = `\${${basePath}.${accessPath}${key}}`
        const fixed = bracketifyTF(access)
        const [head, tail] = bracketify(accessPath).split('[')
        //const tolist = `\${tolist(${basePath}.${head})[${tail}.${k}}`
        if (v.startsWith('-->*')) {
            // [1] tolist alternative for set unpacking a single item - from apparentlymart
            const one = `\${one(${basePath}.${head})${tail.replace(/\d]/, '')}.${key}}`
            return one
        } else if (v.startsWith('-->')) {
            return fixed
        } else {
            return v
        }
    }
    if (isString(target)) return stringTemplate(target, path)
    if (!isPlainObject(target)) return target as NestedObject
    return Object.entries(target).reduce((a, c) => {
        const [k, v] = c
        if (isString(v)) {
            return { ...a, [k]: stringTemplate(v, [...path, k]) }
        } else if (isPlainObject(v)) {
            return { ...a, [k]: exporter(v, scoped, pivot, type, [...path, k]) }
        } else if (isArray(v)) {
            return {
                ...a,
                [k]: v.map((x, i) => exporter(x, scoped, pivot, type, [...path, k, i])),
            }
        } else {
            //console.log(`passthrough in exporter function...`)
            //console.log({ k, v, type, pivot, scoped })
            return { ...a, [k]: v }
        }
    }, {})
}
/**
 * recursive function that takes a path of strings or numbers
 * and returns an object with nested objects and arrays
 *
 **/
const stub = (path: any[]) => {
    const [head, ...tail] = path
    if (tail && tail.length) {
        if (isString(head)) return { [head]: stub(tail) }
        else {
            // create an array of dummy objects leading up to the index
            const dummyArray = Array(head).fill({}) || []
            return [...dummyArray, stub(tail)]
        }
    } else {
        if (isString(head)) return { [head]: '🔥' }
        else return [...Array(head).fill('...'), '🔥']
    }
}
const stringTemplate = (v: string, scoped) => {
    if (v.startsWith('-->')) {
        const cleaned = v.replace(/-->\*?/, '')
        if (cleaned === '') {
            return null
        } else {
            return cleaned
        }
    } else if (v.includes('$SCOPE')) {
        const replaced = v.replace('$SCOPE', scoped)
        return replaced
    } else {
        return v
    }
}
const warn = (path: string[]) => {
    const reminder = '🔥 Dependency missing. Could be a missing export (-->)'
    const trouble = '🔥 or a mispelled root key/id in a provisioning function.'
    const problems = [reminder, trouble]
    console.warn(`${problems.join('\n')}\nRequired by:${JSON.stringify(stub(path), null, 4)}`)
}
/**
 * cleans out any export-specific values (--> prefixed) recursively and warns
 * the user if they forgot to export a value using the --> prefix
 */
const exportFinalizer = (target: object, path, scoped): NestedObject | any => {
    if (isString(target)) return stringTemplate(target, scoped)
    if (!isPlainObject(target)) return target as NestedObject
    return Object.entries(target).reduce((a, c) => {
        const [k, v] = c
        if (v === '-->') return a
        if (v === undefined || v === null) return warn([...path, k]), a
        if (isString(v)) {
            if (v === 'undefined' || v === 'null') return warn([...path, k]), a
            return {
                ...a,
                [k]: stringTemplate(v, scoped),
            }
        } else if (isPlainObject(v)) {
            return { ...a, [k]: exportFinalizer(v, [...path, k], scoped) }
        } else if (isArray(v)) {
            //console.log(`array found for ${k}: ${JSON.stringify(v)}`)
            return {
                ...a,
                [k]: v.map((x, i) => exportFinalizer(x, [...path, k, i], scoped)),
            }
        } else {
            return { ...a, [k]: v }
        }
    }, {})
}

/**
 * flattens modules into a single object, with unique keys created by
 * joining nested key identifiers until the function reaches a pivot point
 * (resource or data) and then prepending the module name to the key ("_").
 */
export const flattenPreservingPaths = (
    obj: object,
    provider = 'aws', // FIXME: adds this to everything, even things you may not want
    path: any[] = [],
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
            const parent_path = path.slice(0, -1)
            const parent_scope = parent_path.join('_')
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
                              [scoped]: exportFinalizer(target, [key, raw_type], parent_scope),
                          },
                      },
                  }
        } else if (isPlainObject(val)) {
            return {
                ...a,
                ...flattenPreservingPaths(val, provider, [...path, key], a, refs),
            }
        } else if (isArray(val)) {
            return {
                ...a,
                [key]: val.map((x, i) =>
                    flattenPreservingPaths(x, provider, [...path, key, i], {}, refs)
                ),
            }
        } else {
            return { ...a, [key]: val }
        }
    }, acc)
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

    return (...args: [FnParams<T[keyof T]>[0], ...Partial<FnParams<T[keyof T]>>[]]) => {
        const ref = { [key]: fn(...args) }
        const refs = flattenPreservingPaths(ref, provider, [], {}, true)
        const obj = { [key]: fn(...args, refs) }
        const out = flattenPreservingPaths(obj, provider, [], {}, false)
        return [out, refs] as [FnReturn<T[keyof T]>, FnReturn<T[keyof T]>]
    }
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
                // don't duplicate providers
                continue
            }
            if (Array.isArray(val)) {
                // clean out arrays with empty contents
                const filtered = val.filter((x) => !isEmpty(x))
                if (!filtered.length) continue
                else {
                    result[key] = result[key] || []
                    result[key].push(...filtered)
                }
            } else if (typeof val === 'object') {
                result[key] = deepMerge(result[key] || {}, val)
            } else {
                result[key] = val
            }
        }
    }
    return result
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

/**
 * References:
 *
 * [1]: https://discuss.hashicorp.com/t/error-accessing-set-values-using-the-terraform-json-syntax/59493/3
 */
