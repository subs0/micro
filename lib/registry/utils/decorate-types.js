"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeLinesAugmenter = void 0;
const regex_1 = require("./regex");
const paths_1 = require("@thi.ng/paths");
// for testing:
//import { typeLines, test_json } from '../../repl/typelines-test.ts'
/**
 * Quicktype produces code along with type definitions. This function grabs only
 * the type definitions from the output by:
 * 1. targetting the lines starting after the last line that starts with '//'
 * 2. keeps following lines that don't start with '//' (first section = types)
 * 3. stops at the first line that follows the kept lines that starts with '//'
 */
const pullTypeLines = (lines) => {
    let procede = true;
    const firstNonComment = lines.findIndex((l) => !l.startsWith('//'));
    const todo = lines.slice(firstNonComment + 1);
    return todo.reduce((a, c) => {
        if (procede) {
            if (c.startsWith('//')) {
                procede = false;
                return a;
            }
            else
                return [...a, c];
        }
        else
            return a;
    }, []);
};
/**
 * Iterates through the type lines and adds comments from the JSON payload.
 * Keeps track of the current interface name as a cursor into a dict, whose
 * values are arrays of keys that lead to the property in the JSON payload.
 * These values are aggregated as we traverse the type lines.
 *
 * checks:
 * - if the line starts with export, it's an interface definition
 * - if the line starts with 4 spaces, it's a property (key - value pair)
 * - if the value is a string, it's terminal (add comment above line)
 */
const typeLinesAugmenter = (typeLines, json, indent = 4) => {
    const lines = pullTypeLines(typeLines);
    let dict = {};
    let scope = '';
    const augmentedLines = lines.reduce((a, c) => {
        if (c.trim() === '')
            return [...a, c];
        if (c.startsWith('export')) {
            // lookup the value in the dict
            const interface_name = /export interface (\w+)/;
            const groups = c.match(interface_name);
            const [_, name] = groups ? [...groups] : [];
            if (name) {
                scope = name;
                return [...a, c];
            }
            else {
                console.log('No Interface found for `export`:', c);
                return [...a, c];
            }
        }
        else if (c.startsWith(' '.repeat(indent))) {
            const groups = c.match(regex_1.ts_interface_prop_K_V_groups);
            const [key, value] = groups ? [...groups].slice(1) : [];
            if (key && value) {
                if (value === 'string') {
                    // done; lookup in json doc and inject comment
                    const path = [...(dict[scope] || []), key.trim()]; //?
                    const doc = (0, paths_1.getInUnsafe)(json, path); //?
                    const [root, type] = path;
                    const lookup = {
                        resource: 'resources',
                        data: 'data-sources',
                    }[root];
                    const attr = path.reverse()[0];
                    const href = `https://registry.terraform.io/providers/hashicorp/aws/latest/docs/${lookup}/${type}#${attr}`;
                    const comment = (doc && doc.replace(/\n/g, ' ').trim()) || 'Docs Not Found';
                    return [
                        ...a,
                        `${' '.repeat(indent)}/**[DOCS 🔗](${href}): ${comment} */`,
                        c.replace('string', 'any'),
                    ];
                }
                else {
                    // value is an interface
                    dict[value] = [...(dict[scope] || []), key.trim()];
                    return [...a, c];
                }
            }
            else {
                console.log(`Skipping non-conforming standard key in ${scope}: ${c}`);
                return a;
            }
        }
        else
            return [...a, c];
    }, []);
    return augmentedLines;
};
exports.typeLinesAugmenter = typeLinesAugmenter;
const merger = (input) => Object.entries(input).reduce((a, c) => {
    const [category, resources] = c;
    return {
        ...a,
        [category]: Object.entries(resources).reduce((a, c) => {
            const [resource, { args, attrs }] = c;
            return { ...a, [resource]: { ...args, ...attrs } };
        }, {}),
    };
}, {});
// TEST:
//const merged = merger(test_json)
//const test = typeLinesAugmenter(typeLines, merged) //?
//# sourceMappingURL=decorate-types.js.map