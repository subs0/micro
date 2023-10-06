import { ts_interface_prop_K_V_groups } from './regex'
import { getInUnsafe } from '@thi.ng/paths'
// testing
import { typeLines, test_dict, test_json } from '../../repl/typelines-test'
/**
 * Quicktype produces code along with type definitions. This function grabs only
 * the type definitions from the output by:
 * 1. targetting the lines starting after the last line that starts with '//'
 * 2. keeps following lines that don't start with '//' (first section = types)
 * 3. stops at the first line that follows the kept lines that starts with '//'
 */
const pullTypeLines = (lines: string[]) => {
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

/**
 * Iterates through the type lines and adds comments from the JSON payload.
 * Keeps track of the current interface name as a cursor into a dict, whose
 * values are arrays of keys that lead to the property in the JSON payload.
 * These values are aggregated as we traverse the type lines.
 *
 * checks:
 * - if the line starts with export, it's an interface definition
 * - if the line starts with 4 spaces, it's a property (key - value pair)
 *      - if the value is a string, it's terminal (add comment above line)
 */
export const typeLinesAugmenter = (typeLines: string[], json: {}, indent = 4): string[] => {
    const lines = pullTypeLines(typeLines)
    let dict = {}
    let here = ''
    // @ts-ignore
    return lines.reduce((a, c) => {
        if (c.trim() === '') return [...a, c]
        if (c.startsWith('export')) {
            // lookup the value in the dict
            const interface_name = /export interface (\w+)/
            const groups = c.match(interface_name)
            const [_, Interface] = groups ? [...groups] : []
            if (Interface) {
                here = Interface
                return [...a, c]
            } else {
                console.log('No Interface found for `export`:', c)
                return [...a, c]
            }
        } else if (c.startsWith(' '.repeat(indent))) {
            const groups = c.match(ts_interface_prop_K_V_groups)
            const [key, value] = groups ? [...groups].slice(1) : []
            if (key && value) {
                if (value === 'string') {
                    // done; lookup in json doc and inject comment
                    const path = [...(dict[here] || []), key.trim()]
                    const target = getInUnsafe(json, path)
                    const comment =
                        (target && target.replace(/\n/g, ' ').trim()) || 'Docs Not Found'
                    //const value = 'PLACEHOLDER UNTIL JSDOC XFMR'
                    if (value) {
                        return [
                            ...a,
                            `${' '.repeat(indent)}/** ${comment} */`,
                            c.replace('string', 'any'),
                        ]
                    }
                } else {
                    // value is an interface
                    dict[value] = [...(dict[here] || []), key.trim()]
                    return [...a, c]
                }
            } else {
                console.log(`Couldn't find key (${key}) and/or value (${value}) in line: ${c}`)
                return [...a, c]
            }
        } else return [...a, c]
    }, [] as string[])
}

// TEST:
//const test = typeLinesAugmenter(typeLines, test_json) //?
// TODO:
//const escapedTfTemplateEx = (name) => `\${data.lambda_function.${name}.function_arn}`
//console.log(escapedTfTemplateEx('name')) //? => works
