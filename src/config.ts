import { Provider, Terraform, NestedObject } from './types'
import { isPlainObject, isObject, isArray, isString } from '@thi.ng/checks'
import { isEmpty } from './utils/index'
import { writeFileSync } from 'fs'
import { getIn } from '@thi.ng/paths'
import { EquivMap } from '@thi.ng/associative'

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
            const one = `\${one(${basePath}.${head})${tail && tail.replace(/\d]/, '')}.${key}}`
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
                [k]: [
                    ...(a[k] || []),
                    ...v.map((x, i) => exportFinalizer(x, [...path, k], scoped)),
                ],
            }
        } else {
            return { ...a, [k]: v }
        }
    }, {})
}

const pivotPoints = ['resource', 'data']
const rootPoints = ['provider', 'terraform']

/**
 * flattens modules into a single object, with unique keys created by
 * joining nested key identifiers until the function reaches a pivot point
 * (resource or data) and then prepending the module name to the key ("_").
 */
const flattenPreservingPaths = (
    obj: object,
    provider = 'aws', // FIXME: adds this to everything, even things you may not want
    path: any[] = [],
    acc = {},
    refs = false
) => {
    if (!isPlainObject(obj)) return obj
    return Object.entries(obj).reduce((acc, cur) => {
        const [key, val] = cur
        if (pivotPoints.includes(key)) {
            return Object.entries(val).reduce((a, c) => {
                const [k, v] = c as [string, object]
                const scoped = path.join('_')
                const scope = path.slice(-1)[0]
                const type = `${provider ? provider + '_' : ''}${k}`
                const parent_path = path.slice(0, -1)
                const parent_scope = parent_path.join('_')
                return refs
                    ? {
                          ...a,
                          [scope]: {
                              ...a[scope],
                              [key]: {
                                  ...(a[scope] && a[scope][key]),
                                  [k]: exporter(v, scoped, key, type),
                              },
                          },
                      }
                    : {
                          ...a,
                          [key]: {
                              ...a[key],
                              [type]: {
                                  ...(a[key] && a[key][type]),
                                  [scoped]: exportFinalizer(v, [key, k], parent_scope),
                              },
                          },
                      }
            }, acc)
        } else if (isPlainObject(val)) {
            return {
                ...acc,
                ...flattenPreservingPaths(val, provider, [...path, key], acc, refs),
            }
        } else if (isArray(val)) {
            // FIXME
            /**
             * "provider": [
             *   {
             *     "address": "${data.aws_caller_identity.docker_auth.account_id}.dkr.ecr.${data.aws_region.docker_auth.name}.amazonaws.com",
             *     "username": "${data.aws_ecr_authorization_token.docker_auth.user_name}",
             *     "password": "${data.aws_ecr_authorization_token.docker_auth.password}"
             *   }
             * ]
             */
            return {
                ...acc,
                [key]: [
                    ...(acc[key] || []),
                    ...val.map((x) =>
                        flattenPreservingPaths(x, provider, [...path, key], acc, refs)
                    ),
                ],
            }
        } else {
            return { ...acc, [key]: val }
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

const isRef = (str) => pivotPoints.map((x) => `${x}.`).some((x) => str.includes(x))

const test =
    '${one(resource.aws_acm_certificate.api_cert_test1.domain_validation_options).resource_record_name}'
const test2 = '${data.aws_iam_policy_document.ms1_lambda_access_creds.json}'

const test3 =
    '{"docker_pip_cache":null,"docker_build_root":"${path.root}/src/docker","docker_file":"Dockerfile","docker_image":"${data.aws_caller_identity.docker_auth.account_id}.dkr.ecr.${data.aws_region.docker_auth.name}.amazonaws.com/throwaway-test-123/test1:throwaway-test-123","with_ssh_agent":false,"docker_additional_options":[],"docker_entrypoint":null}'
/**
 * function that looks for matches to either the funcRegex or templateRx and
 * returns them as an array
 *
 * uses regular expression that matches everything between ${ and } or ( and )
 * and filters out any matches that contain the other
 *
 * e.g., "${data.aws_iam_policy_document.ms1_lambda_access_creds.json}" =>
 * "data.aws_iam_policy_document.ms1_lambda_access_creds.json"
 * "${one(resource.aws_acm_certificate.api_cert_test1.domain_validation_options).resource_record_name}"
 * => "resource.aws_acm_certificate.api_cert_test1.domain_validation_options"
 */
const grabRefs = (str: string) => {
    const funcRegex = /(?<=\().*?(?=\))/g
    const templateRx = /(?<=\${).*?(?=\})/g
    const funcs = str.match(funcRegex) || []
    const templates = str.match(templateRx) || []
    const filtered = templates.filter((x) => !funcs.some((y) => x.includes(y)))
    const results = [...funcs, ...filtered]
    const paths = results.map((x) => x.split('.').slice(0, 3)).filter((x) => x.length === 3)
    //console.log({ paths })
    return paths
}

grabRefs(test3) //?

/*
FIXME
{"docker_pip_cache":null,"docker_build_root":"${path.root}/src/docker","docker_file":"Dockerfile","docker_image":"${data.aws_caller_identity.micro_Docker_micro_Docker_docker_auth.account_id}.dkr.ecr.${data.aws_region.docker_auth.name}.amazonaws.com/throwaway-test-123/test1:throwaway-test-123","with_ssh_agent":false,"docker_additional_options":[],"docker_entrypoint":null} 
*/

const replaceTemplated = (val, path: any[] = [], ready = false) => {
    if (isString(val)) {
        if (isRef(val)) {
            const refs = grabRefs(val)
            refs.forEach((coll) => {
                const idx = path.findIndex((x) => pivotPoints.includes(x))
                const trimmed = path.slice(0, idx)
                const ns = trimmed.join('_')
                const asis = coll.pop()
                const namespaced = ns + '_' + asis
                val = val.replace(asis, namespaced)
            })
            return val
        } else {
            return val
        }
    } else if (isPlainObject(val)) {
        return Object.entries(val).reduce((acc, cur) => {
            const [type, cand] = cur
            return { ...acc, [type]: replaceTemplated(cand, [...path, type], ready) }
        }, {})
    } else if (isArray(val)) {
        return val.map((x) => replaceTemplated(x, path, ready))
    } else {
        //console.log(`passthrough in replaceTemplated function: ${val}`)
        return val
    }
}

/**
 * two-pass namespacer:
 * 1. get all the existing namespaced keys and store them in a dictionary with
 *    the original key as the value and the path [] to and including namespaced
 *    key as the value
 *    - renames the actual key in place
 *    - returns two objects: the updated object and the dictionary
 * 2. use the dictionary to update the template strings in the object
 *    - pass in the dictionary and the object
 *    - for each template string that contains a ref:
 *      -
 */
/*

*/
//        return {
//            ...a,
//            [type]: {
//                ...a[type],
//                [scoped]: {
//                    ...(a[type] && a[type][scoped]),
//                    ...replaceTemplated(payload, [...path, type], acc, true),
//                },
//            },
//        }
const rescope = (obj: object, path: any[] = [], ready = false) => {
    if (!isPlainObject(obj)) return obj
    return Object.entries(obj).reduce((acc, cur) => {
        const [type, cand] = cur
        if (pivotPoints.includes(type)) {
            return Object.entries(cand).reduce((a, c) => {
                const [k, v] = c as [string, object]
                //console.log({ k, v })
                return {
                    ...a,
                    [type]: {
                        ...a[type],
                        [k]: {
                            ...(a[type] && a[type][k]),
                            ...rescope(v, path, true),
                        },
                    },
                }
            }, acc)
        } else {
            if (ready) {
                return {
                    ...acc,
                    [[...path, type].join('_')]: rescope(cand, [], ready),
                }
            } else {
                return {
                    ...acc,
                    ...rescope(cand, [...path, type], ready),
                }
            }
        }
    }, {})
}

const folder = (obj) => {
    const templatesCorrected = replaceTemplated(obj)
    const result = rescope(templatesCorrected)
    return result
}

/**
 * Fix the deepMerge function so that it that takes an arbitrary number of
 * objects and deeply merges them into a single object. If only a single object
 * is provided, it is returned as-is. If an object's value is an array, the
 * array is concatenated with the array of the same key in the result object. If
 * an object's value is an object, the object is deeply merged with the object
 * of the same key in the result object. If an object's value is a primitive, it
 * is assigned to the result object.
 */

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
    return (obj) => {
        //const merged = flatten({ ...obj, ...providerWrapped })
        const merged = { ...obj, ...providerWrapped }
        const folded = folder(merged)
        const out = JSON.stringify(folded, null, 2)
        writeFileSync(outputFile, out)
        return folded
    }
}

/**
 * References:
 *
 * [1]: https://discuss.hashicorp.com/t/error-accessing-set-values-using-the-terraform-json-syntax/59493/3
 */
