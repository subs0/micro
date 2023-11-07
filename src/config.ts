import { NestedObject } from './types'
import { isPlainObject, isArray, isString, isNumber } from '@thi.ng/checks'
import { isEmpty } from './utils/index'
import { getInUnsafe, setInUnsafe } from '@thi.ng/paths'

const PIVOT_POINTS = ['resource', 'data', 'locals']
const ROOT_MEMBERS = ['provider', 'terraform']
const GLOBALS = ['null_resource', 'external', 'local_file', 'random_pet']

/**
 * recursive function that takes a path of strings or numbers
 * and returns an object with nested objects and arrays
 *
 **/
const unfold = (path: any[]) => {
    const [head, ...tail] = path
    if (tail && tail.length) {
        if (isString(head)) return { [head]: unfold(tail) }
        else {
            // create an array of dummy objects leading up to the index
            const dummyArray = Array(head).fill({}) || []
            return [...dummyArray, unfold(tail)]
        }
    } else {
        if (isString(head)) return { [head]: '🔥' }
        else return [...Array(head).fill('...'), '🔥']
    }
}

/**
 * TODO:
 *
 * Add warning for missing dependencies
 */
const warn = (path: string[]) => {
    const reminder = '🔥 Dependency missing. Could be a missing export (-->)'
    const trouble = '🔥 or a mispelled root key/id in a provisioning function.'
    const problems = [reminder, trouble]
    console.warn(`${problems.join('\n')}\nRequired by:${JSON.stringify(unfold(path), null, 4)}`)
}

/**
 * exports any reference prepended with `-->` or `-->*`
 * - `-->` exports the value of the reference in basic terraform syntax
 * - `-->*` exports the value of the reference in terraform syntax wrapped in a `one` function
 *
 * TODO:
 * add `-->**` for list references
 */
const exportArrow = ({ target, path, provider, globals }) => {
    globals = [...new Set([...globals, ...GLOBALS])]
    const numbered = /\.\d+\./g
    // replaces a numbered index .0. w/the number surrounded by brackets and a trailing dot [0].
    const bracketify = (str: string) => str.replace(numbered, (match) => `[${match.slice(1, -1)}].`)
    const beforeAfter = (array, idx) => [array.slice(0, idx), array.slice(idx)]
    const pivotIdx = path.findIndex((x) => PIVOT_POINTS.includes(x))
    const [before, after] = beforeAfter(path, pivotIdx)
    const namespace = before.join('_')
    const [pivot, type, ...decendants] = after
    const basePath = `${pivot}.${globals.includes(type) ? '' : provider + '_'}${type}`
    const scoped = `${namespace}.${decendants.join('.')}`
    if (target.startsWith('-->*')) {
        //console.log(`exportArrow for ${target} at path:\n ${JSON.stringify(path)}`)
        //console.log({ head, tail, one })
        const [head, tail] = bracketify(scoped).split('[')
        const one = `\${one(${basePath}.${head})${tail && tail.replace(/\d]/, '')}}`
        return one
    } else if (target.startsWith('-->')) {
        const access = `\${${basePath}.${scoped}}`
        const fixed = bracketify(access)
        return fixed
    } else {
        // TODO if index !== 0, we should use list
        //const tolist = `\${tolist(...)[${tail}}`
        return target
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

//const STUBBIES = ['aws_region', 'aws_caller_identity', 'aws_ecr_authorization_token']

/**
 * recursive function that traverses a nested object or array and removes any
 * null or undefined values and any resulting empty arrays or objects
 */
const clean = (target) => {
    if (target === null) {
        return
    } else if (isArray(target)) {
        // if members of the array terminate in null/undefined values, return empy array
        const result = target.reduce((a, c) => {
            if (clean(c)) {
                return [...a, clean(c)]
            } else {
                return a
            }
        }, [])
        if (isEmpty(result)) {
            //console.log(`skipping ${JSON.stringify(result)} in clean`)
            return
        } else {
            return result
        }
    } else if (isPlainObject(target)) {
        // if values of the object terminate in null/undefined values, return empty object
        const result = Object.entries(target).reduce((a, c) => {
            const [k, v] = c
            if (clean(v) !== undefined) {
                return { ...a, [k]: clean(v) }
            } else {
                //console.log(`skipping ${clean(v)} in clean`)
                return a
            }
        }, {})
        if (isEmpty(result)) {
            return
        } else {
            return result
        }
    } else {
        return target
    }
}

interface Fold {
    target: any
    path?: any
    /** e.g., 'aws' */
    provider?: string
    refs?: boolean
    out?: NestedObject
    globals?: string[]
}
/**
 * recursive function that takes a nested terraform configuration object and
 * returns
 * 1. an object with all references resolved
 *    (for local value extraction - refs === true)
 * 2. the configuration object transformed into terraform-json-compliant syntax
 *    (refs === false)
 */
const fold = ({ target, provider, path = [], refs = false, out = {}, globals = [] }: Fold) => {
    if (target === null) {
        //console.warn(`as is return in fold at path \n${JSON.stringify(path)}: \n${target}`)
        return
    }
    if (!path.length) {
        globals = [...new Set([...globals, ...GLOBALS])]
    }
    if (refs) {
        // return
        if (isString(target)) {
            if (target.startsWith('-->')) {
                return exportArrow({ target, path, provider, globals })
            } else {
                return target
            }
        } else if (isArray(target)) {
            return target.map((x, i) =>
                fold({ target: x, path: [...path, i], provider, refs, globals })
            )
        } else if (isPlainObject(target)) {
            return Object.entries(target).reduce((a, c) => {
                const [k, v] = c
                return {
                    ...a,
                    [k]: fold({ target: v, path: [...path, k], provider, refs, globals }),
                }
            }, {})
        } else {
            //console.warn(`passthrough ref in fold at path \n${JSON.stringify(path)}: \n${target}`)
            return target
        }
    } else {
        const [x, y, resource, type, ...decendants] = path
        if (type === undefined) {
            // mutate
            if (ROOT_MEMBERS.includes(y)) {
                out = setInUnsafe(out, [y], target) //
            } else {
                // defer setting into root until the paths are resolved
                Object.entries(target).forEach(([k, v]) => {
                    const result = fold({ target: v, provider, path: [...path, k], out, globals })
                    out = setInUnsafe(out, [], result)
                })
            }
        } else {
            if (isString(target)) {
                // return
                if (target.startsWith('-->')) {
                    const cleaned = target.replace(/-->\*?/, '')
                    if (cleaned === '') {
                        return // SKIP IT
                    } else {
                        return cleaned
                    }
                } else if (target.includes('$SCOPE')) {
                    // TODO: handle `depends_on` meta argument (no template strings)
                    const replaced = target.replace('$SCOPE', path.join('_'))
                    return replaced
                } else {
                    return target
                }
            } else if (isPlainObject(target)) {
                const pv = provider
                const scoped = `${!globals.includes(type) && pv ? pv + '_' : ''}${type}`
                if (decendants.length) {
                    // return
                    // once decendants are present, we can return the object
                    const result = Object.entries(target).reduce((a, [k, v]) => {
                        const result = fold({ target: v, provider, path: [...path, k], globals })
                        return setInUnsafe(a, [k], clean(result))
                    }, {})
                    return clean(result)
                } else {
                    // mutate
                    const ns = `${x}_${y}`
                    const injection = [resource, scoped, ns]
                    Object.entries(target).forEach(([k, v]) => {
                        const result = fold({ target: v, provider, path: [...path, k], globals })
                        out = setInUnsafe(out, [...injection, k], clean(result))
                    })
                }
            } else if (isArray(target)) {
                // return
                return target.map((x, i) =>
                    fold({ target: x, provider, path: [...path, i], globals })
                )
            } else {
                // return
                return target
            }
        }
        // final return
        return out
    }
}

// regular expression that matches 'resource'|'data' followed by .*.*
const resourceRegex = /(resource|data)\.(\w*).(\w*)/g
const TEST_STR_resourceRegex = '${resource.aws_sns_topic.topic_sns.arn}'
const TEST_resourceRegex = TEST_STR_resourceRegex.match(resourceRegex) //

/**
 * updates any resource or data references in a string to prepend the namespace
 * in the proper location within the string
 *
 * @example
 * ```ts
 * const TEST_STR_updateNamespace = '${resource.aws_sns_topic.topic_sns.arn}'
 * updateNamespace(TEST_STR_updateNamespace, 'test')
 * // => returns '${resource.aws_sns_topic.test_topic_sns.arn}'
 * ```
 */
const updateNamespace = (str, ns) => {
    const matches = [...str.matchAll(resourceRegex)] || []
    matches.forEach((c) => {
        const [_full, _pivot, _type, _name] = c
        const previous = _name.split('_')[0]
        if (previous === ns) {
            console.log(`already updated ${_full} in updateNamespace for namespace: ${ns}`)
        } else {
            str = str.replaceAll(_full, `${_pivot}.${_type}.${ns}_${_name}`)
        }
    })
    return str
}

/**
 * recursive merger that takes a target object or array and
 * - if both target and existing are objects, for the same key, recursively merge
 * - if both target and existing are arrays, concat
 */
const merge = (target, existing) => {
    if (isArray(target) && isArray(existing)) {
        return [...target, ...existing]
    } else if (isPlainObject(target) && isPlainObject(existing)) {
        const out = {}
        const keys = [...new Set([...Object.keys(target), ...Object.keys(existing)])]
        keys.forEach((k) => {
            const result = merge(target[k], existing[k])
            out[k] = result
        })
        return out
    } else {
        return target
    }
}

/**
 * recursive function that takes a nested object or array and
 * - if the value is a string, updates any resource or data references to
 *   prepend the namespace
 */
const deepNamespace = (target, ns) => {
    if (!target || isNumber(target)) return target
    //console.log({ target, ns })
    if (isString(target)) {
        const updated = updateNamespace(target, ns)
        return updated
    } else if (isPlainObject(target)) {
        return Object.entries(target).reduce((a, [k, v]) => {
            const result = deepNamespace(v, ns)
            return setInUnsafe(a, [k], result)
        }, {})
    } else if (isArray(target)) {
        return target.map((x, i) => deepNamespace(x, ns))
    } else {
        return target
    }
}

/**
 * recursive function that takes a nested object or array and
 * - if the value is a string, updates any resource or data references to
 *   prepend the namespace
 * - if the value is an object, and the key is a resource or data reference,
 *   prepends the namespace to the child keys
 */
export const namespace = (target, path: any[] = [], out = {}) => {
    if (!target || isNumber(target)) return target
    const [ns, ___, resource, type, name] = path

    if (!type) {
        if (ROOT_MEMBERS.includes(resource)) {
            const existing = getInUnsafe(out, [resource])
            const merged = (existing && merge(target, existing)) || target
            //console.log({ [resource]: merged })
            out = setInUnsafe(out, [resource], deepNamespace(merged, ns)) //
        } else {
            //console.log(`!type and NOT ROOT_MEMBER: ${JSON.stringify(path)}`)
            Object.entries(target).forEach((c) => {
                const [k, v] = c
                const lens = [...path, k]
                const result = namespace(v, lens, out)
                out = setInUnsafe(out, [], result)
            })
        }
    } else {
        if (isString(target)) {
            // return
            if (PIVOT_POINTS.some((x) => target.includes(x))) {
                return updateNamespace(target, ns)
            } else {
                return target
            }
        } else if (isPlainObject(target)) {
            const injection = [resource, type]
            if (name) {
                // return
                return Object.entries(target).reduce((a, [k, v]) => {
                    const result = namespace(v, [...path, k], out)
                    return setInUnsafe(a, [k], result)
                }, {})
            } else {
                // mutate
                Object.entries(target).forEach(([k, v]) => {
                    const result = namespace(v, [...path, k], out)
                    out = setInUnsafe(out, [...injection, `${ns}_${k}`], result)
                })
            }
        } else if (isArray(target)) {
            // return
            return target.map((x, i) => namespace(x, [...path, i], out))
        } else {
            // return
            //console.log(`passthrough in namespace function at path: ${path}: ${target}`)
            return target
        }
    }
    return out
}

//const TEST_OUTPUT_modulator = fold({
//    target: TEST_TARGET_modulator,
//    provider: 'aws',
//    refs: false,
//})
//const TEST_JSON_modulator = JSON.stringify(TEST_OUTPUT_modulator, null, 4)
//const TEST_modulator =
//    TEST_JSON_modulator ===
//    JSON.stringify(setIn(TEST_TARGET_modulator, TEST_PATH_exportArrow, TEST_OUTPUT_exportArrow)) //?

//const TEST_DATA_namespace = {
//    bleep: {
//        bloop: TEST_OUTPUT_modulator,
//        beep: TEST_OUTPUT_modulator,
//    },
//    ferp: {
//        bloop: TEST_OUTPUT_modulator,
//        beep: TEST_OUTPUT_modulator,
//    },
//}
//const TEST_OUTPUT_namespace = namespace(TEST_DATA_namespace)
//const TEST_JSON_namespace = JSON.stringify(TEST_OUTPUT_namespace, null, 4) //?

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
    globals: string[] = [],
    provider = 'aws'
) => {
    const [key, fn] = Object.entries(obj)[0]

    return (...args: [FnParams<T[keyof T]>[0], ...Partial<FnParams<T[keyof T]>>[]]) => {
        const ref = fn(...args)
        //console.log({ ref })
        const refs = fold({ target: ref, provider, path: [key], refs: true, globals })
        const obj = { [key]: fn(...args, refs) }
        //console.log({ obj })
        const out = fold({ target: obj, provider, refs: false, globals })
        return [out, refs] as [FnReturn<T[keyof T]>, FnReturn<T[keyof T]>]
    }
}

/**
 * References:
 *
 * [1]: https://discuss.hashicorp.com/t/error-accessing-set-values-using-the-terraform-json-syntax/59493/3
 */
