import { Provider, Terraform, NestedObject, AWS } from './types'
import { isPlainObject, isArray, isString, isNumber } from '@thi.ng/checks'
import { isEmpty } from './utils/index'
import { writeFileSync } from 'fs'
import { getInUnsafe, setIn, setInUnsafe } from '@thi.ng/paths'

// replaces a number surrounded by periods .0. with a number surrounded by brackets [0]
const bracketRegex = /\.\d+\./g
// function that replaces any internal .0. with [0]. to allow for terraform interpolation
const bracketifyTF = (str: string) =>
    str.replace(bracketRegex, (match) => `[${match.slice(1, -1)}].`)
const bracketify = (str: string) => str.replace(bracketRegex, (match) => `[${match.slice(1, -1)}]`)

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

const warn = (path: string[]) => {
    const reminder = '🔥 Dependency missing. Could be a missing export (-->)'
    const trouble = '🔥 or a mispelled root key/id in a provisioning function.'
    const problems = [reminder, trouble]
    console.warn(`${problems.join('\n')}\nRequired by:${JSON.stringify(stub(path), null, 4)}`)
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
//const access = `\${${basePath}.${accessPath}${key}}`
//const fixed = bracketifyTF(access)
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
        const access = `\${${basePath}.${scoped}}`
        const fixed = bracketifyTF(access)
        return fixed
    } else {
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

const GLOBALS = ['null_resource', 'external']
const STUBBIES = ['aws_region', 'aws_caller_identity', 'aws_ecr_authorization_token']

interface Fold {
    target: any
    path?: any
    /** e.g., 'aws' */
    provider?: string
    refs?: boolean
    out?: NestedObject
}
const fold = ({ target, provider, path = [], refs = false, out = {} }: Fold) => {
    if (!target || isNumber(target)) {
        return target
    }
    if (refs) {
        // return
        if (isString(target)) {
            if (target.startsWith('-->')) {
                return exportArrow(target, path, provider)
            } else {
                return target
            }
        } else if (isArray(target)) {
            return target.map((x, i) => fold({ target: x, provider, path: [...path, i], refs }))
        } else if (isPlainObject(target)) {
            return Object.entries(target).reduce((a, c) => {
                const [k, v] = c
                return { ...a, [k]: fold({ target: v, provider, path: [...path, k], refs }) }
            }, {})
        } else {
            //console.log(`REF passed through: ${target}`)
            return target
        }
    } else {
        const [x, y, resource, type, ...decendants] = path
        if (!type) {
            // mutate
            if (ROOT_MEMBERS.includes(y)) {
                out = setInUnsafe(out, [y], target) //
            } else {
                // defer setting into root until the paths are resolved
                Object.entries(target).forEach((c) => {
                    const [k, v] = c
                    const lens = [...path, k]
                    const result = fold({ target: v, provider, path: lens, out })
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
                } else if (target === 'undefined' || target === 'null') {
                    // TODO: warn on missing dependencies
                    return warn(path), target
                } else {
                    return target
                }
            } else if (isPlainObject(target)) {
                const pv = provider
                const STUBBY_STUBS = STUBBIES.map((x) => x.replace(`${pv}_`, ''))
                const scoped = `${!GLOBALS.includes(type) && pv ? pv + '_' : ''}${type}`
                if (decendants.length) {
                    // return
                    // once decendants are present, we can return the object
                    const result = Object.entries(target).reduce((a, c) => {
                        const [k, v] = c
                        // at this point, the path has fulfilled it's purpose
                        const result = fold({ target: v, provider, path })
                        return setInUnsafe(a, [k], result)
                    }, {})
                    if (isEmpty(result)) {
                        console.log(`empty object found at path: ${path}`)
                        return // SKIP IT
                    } else {
                        return result
                    }
                } else if (STUBBY_STUBS.includes(type)) {
                    // mutate
                    const injection = [resource, scoped]
                    out = setInUnsafe(out, injection, {}) //
                } else {
                    // mutate
                    const ns = `${x}_${y}`
                    const injection = [resource, scoped, ns]
                    Object.entries(target).forEach((c) => {
                        const [k, v] = c
                        const lens = [...path, k]
                        const result = fold({ target: v, provider, path: lens })
                        out = setInUnsafe(out, [...injection, k], result)
                    })
                }
            } else if (isArray(target)) {
                // return
                return target.map((x) => fold({ target: x, provider, path, out }))
            } else {
                // return
                //console.log(`passthrough in fold function at path: ${path}: ${target}`)
                return target
            }
        }
        // final return
        return out
    }
}

// regular expression that matches 'resource'|'data' followed by .*.*
const resourceRegex = /(resource|data)\.(\w*).(\w*)/
const TEST_STR_resourceRegex = '${resource.aws_sns_topic.topic_sns.arn}'
const TEST_resourceRegex = TEST_STR_resourceRegex.match(resourceRegex) //?

export const namespace = (target, path: any[] = [], out = {}) => {
    if (!target || isNumber(target)) return target
    const [x, y, resource, type, name] = path
    if (!type) {
        if (ROOT_MEMBERS.includes(resource)) {
            const existing = getInUnsafe(out, [resource])
            const merged = (existing && merge(target, existing)) || target
            console.log({ [resource]: merged })
            out = setInUnsafe(out, [resource], merged) //
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
        const ns = `${x}_${y}`
        if (isString(target)) {
            // return
            if (PIVOT_POINTS.some((x) => target.includes(x))) {
                const [_, _pivot, _type, _name] = target.match(resourceRegex) || []
                if (!_name) return target
                return target.replace(_name, `${ns}_${_name}`)
            } else {
                return target
            }
        } else if (isPlainObject(target)) {
            if (STUBBIES.includes(type)) {
                // mutate
                const injection = [resource, type]
                out = setInUnsafe(out, injection, target) //
            } else if (name) {
                // return
                return Object.entries(target).reduce((a, c) => {
                    const [k, v] = c
                    const lens = [...path, k]
                    const result = namespace(v, lens, out)
                    return setInUnsafe(a, [k], result)
                }, {})
            } else {
                const injection = [resource, type]
                // mutate
                Object.entries(target).forEach((c) => {
                    const [k, v] = c
                    const lens = [...path, k]
                    const result = namespace(v, lens, out)
                    out = setInUnsafe(out, [...injection, `${ns}_${k}`], result)
                })
            }
        } else if (isArray(target)) {
            // return
            return target.map((x) => namespace(x, path, out))
        } else {
            // return
            //console.log(`passthrough in namespace function at path: ${path}: ${target}`)
            return target
        }
    }
    return out
}

// TEST 🤔
const TEST_TARGET_modulator = {
    ms1: {
        lambda_creds: {
            data: {
                iam_policy_document: {
                    statement: {
                        effect: 'Allow',
                        actions: ['sts:AssumeRole'],
                        principals: {
                            identifiers: ['lambda.amazonaws.com', 'apigateway.amazonaws.com'],
                            type: 'Service',
                        },
                    },
                    json: '${data.aws_iam_policy_document.ms1_lambda_creds.json}',
                },
            },
        },
        lambda_role: {
            resource: {
                iam_role: {
                    name: '${resource.aws_iam_role.ms1_lambda_role.name}',
                    tags: {
                        BroughtToYouBy: '@-0/micro',
                        Moms: 'Spaghetti',
                    },
                    arn: '${resource.aws_iam_role.ms1_lambda_role.arn}',
                },
            },
        },
        bucket: {
            resource: {
                s3_bucket: {
                    bucket: '${resource.aws_s3_bucket.ms1_bucket.bucket}',
                    tags: {
                        BroughtToYouBy: '@-0/micro',
                        Moms: 'Spaghetti',
                    },
                },
            },
        },
        bucket_access_creds: {
            data: {
                iam_policy_document: {
                    statement: [],
                    json: '${data.aws_iam_policy_document.ms1_bucket_access_creds.json}',
                },
            },
        },
        bucket_cors: {
            resource: {
                s3_bucket_cors_configuration: {
                    cors_rule: {
                        allowed_methods: ['POST', 'GET', 'HEAD', 'DELETE', 'PUT'],
                        allowed_origins: ['*'],
                        allowed_headers: ['*'],
                        expose_headers: ['ETag'],
                        max_age_seconds: 3000,
                    },
                },
            },
        },
        bucket_policy: {
            resource: {
                s3_bucket_policy: {},
            },
        },
        cloudwatch: {
            resource: {
                cloudwatch_log_group: {
                    name: '/aws/lambda/throwaway-test-123-log-group',
                    retention_in_days: 7,
                    tags: {
                        BroughtToYouBy: '@-0/micro',
                        Moms: 'Spaghetti',
                    },
                    arn: '${resource.aws_cloudwatch_log_group.ms1_cloudwatch.arn}',
                },
            },
        },
        lambda_access_creds: {
            data: {
                iam_policy_document: {
                    statement: [],
                    json: '${data.aws_iam_policy_document.ms1_lambda_access_creds.json}',
                },
            },
        },
        lambda_policy: {
            resource: {
                iam_policy: {
                    name: '${resource.aws_iam_policy.ms1_lambda_policy.name}',
                    tags: {
                        BroughtToYouBy: '@-0/micro',
                        Moms: 'Spaghetti',
                    },
                    arn: '${resource.aws_iam_policy.ms1_lambda_policy.arn}',
                },
            },
        },
        lambda_policy_attachment: {
            resource: {
                iam_role_policy_attachment: {},
            },
        },
        lambda: {
            resource: {
                lambda_function: {
                    runtime: 'python3.8',
                    handler: 'handler.handler',
                    package_type: 'Zip',
                    function_name: '${resource.aws_lambda_function.ms1_lambda.function_name}',
                    environment: {
                        variables: {
                            SNS_MESSAGE_ATTRS:
                                '{"type":{"DataType":"String","StringValue":"audio"}}',
                        },
                    },
                    filename: '${path.root}/lambdas/template/zipped/handler.py.zip',
                    tags: {
                        BroughtToYouBy: '@-0/micro',
                        Moms: 'Spaghetti',
                    },
                    arn: '${resource.aws_lambda_function.ms1_lambda.arn}',
                    invoke_arn: '${resource.aws_lambda_function.ms1_lambda.invoke_arn}',
                },
            },
        },
        sns_invoke_cred: {
            resource: {
                lambda_permission: {
                    statement_id: 'AllowExecutionFromSNS',
                    action: 'lambda:InvokeFunction',
                    principal: 'sns.amazonaws.com',
                },
            },
        },
        subscription: {
            resource: {
                sns_topic_subscription: {
                    protocol: 'lambda',
                    filter_policy: '{"type":["video"]}',
                    filter_policy_scope: 'MessageAttributes',
                    arn: '${resource.aws_sns_topic_subscription.ms1_subscription.arn}',
                },
            },
        },
        ...TEST_SOURCE_merge,
    },
}
const TEST_OUTPUT_modulator = fold({
    target: TEST_TARGET_modulator,
    provider: 'aws',
    refs: false,
})
const TEST_JSON_modulator = JSON.stringify(TEST_OUTPUT_modulator, null, 4)
const TEST_modulator =
    TEST_JSON_modulator ===
    JSON.stringify(setIn(TEST_TARGET_modulator, TEST_PATH_exportArrow, TEST_OUTPUT_exportArrow)) //?

const TEST_DATA_namespace = {
    bleep: {
        bloop: TEST_OUTPUT_modulator,
        beep: TEST_OUTPUT_modulator,
    },
    ferp: {
        bloop: TEST_OUTPUT_modulator,
        beep: TEST_OUTPUT_modulator,
    },
}
const TEST_OUTPUT_namespace = namespace(TEST_DATA_namespace)
const TEST_JSON_namespace = JSON.stringify(TEST_OUTPUT_namespace, null, 4) //?

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
        const ref = fn(...args)
        //console.log({ ref })
        const refs = fold({ target: ref, provider, path: [key], refs: true })
        const obj = { [key]: fn(...args, refs) }
        //console.log({ obj })
        const out = fold({ target: obj, provider, refs: false })
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
