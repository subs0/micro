import fs from 'fs'
import { isolateAttrsAndDedup, recursiveCapture, md2json } from '../registry/utils/md2json'
import {
    quicktype,
    InputData,
    jsonInputForTargetLanguage,
    JSONSchemaInput,
    FetchingJSONSchemaStore,
} from 'quicktype-core'

import { required, optional } from '../registry/utils/regex'
const test_md = fs.readFileSync('./repl/aws_lambda_function.md', 'utf8')

// test for empty object
const isEmpty = (obj) => obj.constructor === Object && Object.keys(obj).length === 0

// 🔥 rewrite this 🔥
//const test_json = fs.readFileSync('./repl/aws_lambda_function.json', 'utf8')

const test_json = recursiveCapture(test_md)

const better_json = isolateAttrsAndDedup(test_json)

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

const hairCut = (obj) =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        if (typeof v === 'object') {
            return { ...a, [cutBang(k)]: hairCut(v) }
        } else if (typeof v === 'string') {
            return { ...a, [cutBang(k)]: v }
        } else return a
    }, {})

const test2 = isoReqdArgs(better_json)

const genTypeTree = (md, type, category = 'resource') => {
    const json = recursiveCapture(md)
    const allProps = isolateAttrsAndDedup(json)
    const bangArgs = allProps['args']
    const cleanArgs = hairCut(bangArgs)
    const reqArgs = isoReqdArgs(bangArgs)
    const reqAttrs = allProps['attrs']
    return { [category]: [{ [type]: cleanArgs }, { [type]: reqArgs }] }
}

const test3 = genTypeTree(test_md, 'aws_lambda_function') //?

const grabLines = (lines: string[]) => {
    let procede = true
    const firstNonComment = lines.findIndex((l) => !l.startsWith('//'))
    const todo = lines.slice(firstNonComment + 1)
    return todo.reduce(
        (a, c) => {
            if (procede) {
                if (c.startsWith('//')) {
                    procede = false
                    return a
                } else return [...a, c]
            } else return a
        },
        ['']
    )
}

async function quicktypeJSON(jsonString, typeName = 'typeName', targetLanguage = 'typescript') {
    const jsonInput = jsonInputForTargetLanguage(targetLanguage)

    // We could add multiple samples for the same desired
    // type, or many sources for other types. Here we're
    // just making one type from one piece of sample JSON.
    await jsonInput.addSource({
        name: typeName,
        samples: [jsonString],
    })

    const inputData = new InputData()
    inputData.addInput(jsonInput)

    const { lines } = await quicktype({
        inputData,
        lang: targetLanguage,
    })

    return grabLines(lines)
}

//quicktypeJSON(JSON.stringify(test3), "aws_lambda_function").then(console.log) //?