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
/**
 * cleans out any export-specific values (--> prefixed) recursively and warns
 * the user if they forgot to export a value using the --> prefix
 */
const exportFinalizer = (target: object, path, scoped): NestedObject | any => {
    //if (isString(target)) return stringTemplate(target, scoped)
    if (!isPlainObject(target)) return target as NestedObject
    return Object.entries(target).reduce((a, c) => {
        const [k, v] = c
        if (v === '-->') return a
        if (v === undefined || v === null) return warn([...path, k]), a
        if (isString(v)) {
            if (v === 'undefined' || v === 'null') return warn([...path, k]), a
            return {
                ...a,
                //[k]: stringTemplate(v, scoped),
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
            return target
        }
    } else {
        const [x, y, resource, type, ...decendants] = path
        if (!type) {
            if (ROOT_MEMBERS.includes(y)) {
                const existing = getInUnsafe(out, [y])
                const merged = (existing && merge(target, existing)) || target
                out = setInUnsafe(out, [y], merged) //
            } else {
                Object.entries(target).forEach((c) => {
                    const [k, v] = c
                    const lens = [...path, k]
                    const result = fold({ target: v, provider, path: lens, out })
                    out = setInUnsafe(out, [], result)
                })
            }
        } else {
            const ns = `${x}_${y}`
            const scoped = `${provider ? provider + '_' : ''}${type}`
            const injection = [resource, scoped, ns, ...decendants]
            if (isString(target)) {
                // no strings until decendants are present... return them
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
                } else {
                    return target
                }
            } else if (isPlainObject(target)) {
                if (decendants.length) {
                    // once decendants are present, we can return the object
                    return Object.entries(target).reduce((a, c) => {
                        const [k, v] = c
                        const lens = [...path, k]
                        const result = fold({ target: v, provider, path })
                        return setInUnsafe(a, [k], result)
                    }, {})
                } else {
                    Object.entries(target).forEach((c) => {
                        const [k, v] = c
                        const lens = [...path, k]
                        const result = fold({ target: v, provider, path: lens })
                        out = setInUnsafe(out, [...injection, k], result)
                    })
                }
            } else if (isArray(target)) {
                // no arrays until decendants are present... return them
                return target.map((x) => fold({ target: x, provider, path, out }))
            } else {
                console.log(`passthrough in fold function...`)
                return target
            }
        }
        return out
    }
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
        const ref = fn(...args)
        //console.log({ ref })
        const refs = fold({ target: ref, provider, refs: true })
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
