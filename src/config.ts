import { Provider, Terraform, NestedObject, AWS } from './types'
import { isPlainObject, isArray, isString, isNumber } from '@thi.ng/checks'
import { isEmpty } from './utils/index'
import { writeFileSync } from 'fs'
import { getInUnsafe, setIn, setInUnsafe } from '@thi.ng/paths'

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
    const PIVOT_POINTS = ['resource', 'data']
    return Object.entries(obj).reduce((a, c) => {
        const [key, val] = c
        if (PIVOT_POINTS.includes(key)) {
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

//  888-~88e  e88~~8e  Y88b    e    /
//  888  888 d888  88b  Y88b  d8b  /
//  888  888 8888__888   Y888/Y88b/
//  888  888 Y888    ,    Y8/  Y8/
//  888  888  "88___/      Y    Y

type FnParams<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never
type FnReturn<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

const PIVOT_POINTS = ['resource', 'data']
const ROOT_MEMBERS = ['provider', 'terraform']

const beforeAfter = (array, idx) => [array.slice(0, idx), array.slice(idx)]

/**
 * only works for number-indexed dependencies (arrays ≠ TF sets)
 * currently, only 0-indexed dependencies are supported (see TODO below)
 */
const exportArrow = (target, path, provider) => {
    const pivotIdx = path.findIndex((x) => PIVOT_POINTS.includes(x))
    const [before, after] = beforeAfter(path, pivotIdx)
    const namespace = before.join('_')
    const [pivot, type, ...decendants] = after
    const basePath = `${pivot}.${provider && provider + '_'}${type}`
    const scoped = `${namespace}.${decendants.join('.')}`
    if (target.startsWith('-->*')) {
        const [head, tail] = bracketify(scoped).split('[')
        //console.log({ head, tail })
        // TODO if index !== 0, we should use list
        //const tolist = `\${tolist(...)[${tail}}`
        const one = `\${one(${basePath}.${head})${tail && tail.replace(/\d]/, '.')}}`
        return one
    } else if (target.startsWith('-->')) {
    }
}

// TEST 🤔
const TEST_PATH_exportArrow = [
    'api',
    'cert',
    'test1',
    'resource',
    'acm_certificate',
    'domain_validation_options',
    0,
    'resource_record_type',
]
const TEST_OUTPUT_exportArrow =
    '${one(resource.aws_acm_certificate.api_cert_test1.domain_validation_options).resource_record_type}'
const TEST_exportArrow =
    TEST_OUTPUT_exportArrow === exportArrow('-->*', TEST_PATH_exportArrow, 'aws') //

const clean = (target) => {
    if (!target) {
        return null
    } else if (isEmpty(target)) {
        return null
    } else if (isArray(target)) {
        // if members of the array terminate in null/undefined values, return empy array
        return target.reduce((a, c) => {
            if (clean(c)) {
                return [...a, clean(c)]
            } else {
                return a
            }
        }, [])
    } else if (isPlainObject(target)) {
        // if values of the object terminate in null/undefined values, return empty object
        if (isEmpty(target)) {
            return null
        }
        return Object.entries(target).reduce((a, c) => {
            const [k, v] = c
            if (clean(v)) {
                return { ...a, [k]: clean(v) }
            } else {
                return a
            }
        }, {})
    } else {
        return target
    }
}

// TEST 🤔
const TEST_TARGET_clean = {
    api: {
        cert: {
            array: [
                {
                    resource_record_type: null,
                    another_thing: 'hello',
                },
                null,
            ],
            something_else: '',
            yet_another_thing: {
                key: null,
            },
        },
        finally: {},
    },
}

const TEST_OUTPUT_clean = JSON.stringify({ api: { cert: { array: [{ another_thing: 'hello' }] } } })
const TEST_INPUT_clean = clean(TEST_TARGET_clean)
const TEST_clean = TEST_OUTPUT_clean === JSON.stringify(TEST_INPUT_clean) //

/**
 * recursively deep merge for any nested objects or arrays that share the same
 * structure. Arrays are concatenated, objects are merged.
 *
 * FIXME ingnore parent paths to ROOT_MEMBERS (spread into root)
 */
const merge = (target, existing) => {
    if (!existing || isEmpty(existing)) return target
    if (isPlainObject(target) && isPlainObject(existing)) {
        return Object.entries(existing).reduce((a, c) => {
            const [k, v] = c
            if (isPlainObject(v)) {
                return { ...a, [k]: merge(a[k], v) }
            } else if (isArray(v)) {
                return { ...a, [k]: [...a[k], ...v] }
            } else {
                return { ...a, [k]: v }
            }
        }, target)
    } else if (isArray(target) && isArray(existing)) {
        return [...target, ...existing]
    } else {
        return target
    }
}

// TEST 🤔
const TEST_TARGET_merge = {
    provider: [
        {
            docker: {
                registry: '',
            },
        },
    ],
}
const TEST_SOURCE_merge = {
    provider: [
        {
            aws: {
                something: '',
            },
        },
    ],
}

const TEST_merge = merge(TEST_TARGET_merge, TEST_SOURCE_merge) //

const lenser = (path, k, provider) => {
    const [type, ...inverted_path] = path.slice().reverse()
    const namespace = inverted_path.reverse().join('_')
    const resource = provider ? `${provider}_${k}` : k
    return [type, resource, namespace]
}

// TEST 🤔
const TEST_PATH_lenser = ['api', 'cert', 'resource']
const TEST_KEY_lenser = 'acm_certificate'
const TEST_lenser = lenser(TEST_PATH_lenser, TEST_KEY_lenser, 'aws') //

interface Modulator {
    target: any
    path?: any
    /** e.g., 'aws' */
    provider?: string
    refs?: boolean
    out?: NestedObject
}
const modulator = ({ target, provider, path = [], refs = false, out = {} }: Modulator) => {
    if (!target || isNumber(target)) {
        return target
    }
    if (refs) {
        if (isString(target)) {
            if (target.startsWith('-->')) {
                return exportArrow(target, path, provider)
            } else {
                return target
            }
        } else if (isArray(target)) {
            return target.map((x, i) =>
                modulator({ target: x, provider, path: [...path, i], refs })
            )
        } else if (target && isPlainObject(target)) {
            return Object.entries(target).reduce((a, c) => {
                const [k, v] = c
                return { ...a, [k]: modulator({ target: v, provider, path: [...path, k], refs }) }
            }, {})
        } else {
            return target
        }
    } else {
        /**
         * TODO:
         * - restart path after pivot point is reached
         */
        const last_crumb = path.slice(-1)[0]
        if (isString(target)) {
            console.log(`string found: ${target}`)
            if (target.startsWith('-->')) {
                const cleaned = target.replace(/-->\*?/, '')
                if (cleaned === '') {
                    return null
                } else {
                    return cleaned
                }
            } else if (target.includes('$SCOPE')) {
                // TODO: handle `depends_on` meta argument (no template strings)
                const replaced = target.replace('$SCOPE', path.join('_'))
                return replaced
            }
        } else if (PIVOT_POINTS.includes(last_crumb)) {
            Object.entries(target).forEach((c) => {
                const [k, v] = c
                // [type, resource, namespace]
                const lens = lenser(path, k, provider) //?
                const leaf = modulator({
                    target: v,
                    provider,
                    path: lens,
                })
                out = setInUnsafe(out, lens, leaf) //?
            })
        } else if (ROOT_MEMBERS.includes(last_crumb)) {
            const existing = getInUnsafe(out, [last_crumb]) //?
            console.log({ target, last_crumb })
            const merged = (existing && merge(target, existing)) || target //?
            out = setInUnsafe(out, [last_crumb], merged)
        } else if (isArray(target)) {
            out = setInUnsafe(out, path, target)
        } else if (isPlainObject(target)) {
            // if the first member of the path is a pivot point
            if (PIVOT_POINTS.includes(path[0])) {
                // this is a continuation
                return Object.entries(target).reduce((a, c) => {
                    const [k, v] = c
                    return {
                        ...a,
                        [k]: modulator({
                            target: v,
                            provider,
                        }),
                    }
                }, {})
            } else {
                // this is before the pivot point is reached
                // 🔥 CRITICAL CONDITION
                Object.entries(target).forEach((c) => {
                    const [k, v] = c
                    const stub = modulator({ target: v, provider, path: [...path, k], out })
                    out = setInUnsafe(out, [], stub)
                })
            }
        } else {
            return target //?
        }
        return out
        //return clean(out)
    }
}

// TEST 🤔
const TEST_TARGET_modulator = {
    api: {
        resource: {
            acm_certificate: {
                domain_validation_options: [
                    {
                        resource_record_type: '-->*',
                    },
                ],
            },
        },
        cert: {
            test1: {
                resource: {
                    acm_certificate: {
                        domain_validation_options: [
                            {
                                resource_record_type: '-->*',
                            },
                        ],
                    },
                },
            },
        },
        ...TEST_SOURCE_merge,
    },
}
const TEST_OUTPUT_modulator = modulator({
    target: TEST_TARGET_modulator,
    provider: 'aws',
    refs: false,
})
const TEST_JSON_modulator = JSON.stringify(TEST_OUTPUT_modulator, null, 4) //?
const TEST_modulator =
    TEST_JSON_modulator ===
    JSON.stringify(setIn(TEST_TARGET_modulator, TEST_PATH_exportArrow, TEST_OUTPUT_exportArrow)) //?

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
