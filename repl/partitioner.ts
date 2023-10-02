import fs from 'fs'
import { isolateAttrsAndDedup, recursiveCapture, md2json } from '../registry/utils/md2json'
import { required, optional } from '../registry/utils/regex'
const test_md = fs.readFileSync('./repl/aws_lambda_function.md', 'utf8')

// test for empty object
const isEmpty = (obj) => obj.constructor === Object && Object.keys(obj).length === 0

// 🔥 rewrite this 🔥
//const test_json = fs.readFileSync('./repl/aws_lambda_function.json', 'utf8')

const test_json = recursiveCapture(test_md)

const better_json = isolateAttrsAndDedup(test_json)
/*

input schema = {
    data: {
        required: "value",
        optional: "(Optional) value",
        has_child: {
            required: "value",
            optional: "(Optional) value"
        }
    },
    resource: {
        required: "value",
        optional: "(Optional) value",
        has_child: {
            required: "value",
            optional: "(Optional) value"
        }
    }
}

output schema = {
    arguments: [
        { 
            data: {
                required: "value",
                optional: "(Optional) value",
                has_child: {
                    required: "value",
                    optional: "(Optional) value"
                }
            },
            resource: {
                required: "value",
                optional: "(Optional) value", 
                has_child: {
                    required: "value",
                    optional: "(Optional) value"
                }
            }
        },
        {
            data: {
                required: "value",
                // missing optional key coerces type to optional
                has_child: {
                    required: "value",
                    // missing optional key coerces type to optional
                }
            },
            resource: {
                required: "value",
                // missing optional key coerces type to optional
                has_child: {
                    required: "value",
                    // missing optional key coerces type to optional
                }
            }
        }
    ],
    attributes: [
        {
            data: {
                ...everything in arguments plus...
                another_optional: "(Optional) value"
            }
        },
        { 
            data: {} // empty object coerces all data types to optional
        }
    ]
}
*/

const bang = (str) => str.includes('!')
const cutBang = (str) => str.replace('!', '')

const isoReqdArgs = (args) => {
    const optionalArgs = Object.entries(args).reduce((a, c) => {
        const [k, v] = c
        //console.log({ k, v })
        if (bang(k)) {
            if (typeof v === 'object') {
                return {
                    ...a,
                    ...(!isEmpty(isoReqdArgs(v)) ? { [cutBang(k)]: isoReqdArgs(v) } : {}),
                }
            } else if (typeof v === 'string') {
                return { ...a, [cutBang(k)]: v }
            } else return a
        } else return a
    }, {})
    return optionalArgs
}

const cutBangs = (obj) =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        if (typeof v === 'object') {
            return { ...a, [k]: cutBangs(v) }
        } else if (typeof v === 'string') {
            return { ...a, [cutBang(k)]: v }
        } else return a
    }, {})

const test2 = isoReqdArgs(better_json)

const genTypeTree = (json) => {
    const allProps = isolateAttrsAndDedup(json)
    const args = allProps['args']
    const cleanArgs = cutBangs(args)
    //console.log({ args })
    const reqArgs = isoReqdArgs(args)
    const reqAttrs = allProps['attrs']
    return {
        arguments: [cleanArgs, reqArgs],
        attributes: [reqAttrs, {}],
    }
}

const test3 = genTypeTree(test_json) //?
