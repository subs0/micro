"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.md2json = exports.separateAttrsArgsAndDedupProps = exports.recursivePropCapture = void 0;
const regex_1 = require("./regex");
const deduper_1 = require("./deduper");
const key_rx = /`([^`]+?)`/g;
const pluckFirstCoded = (str) => {
    const [k] = str.match(key_rx) || [];
    const clean = k && k.replace(/`/g, '');
    return clean;
};
const snake_case_key = (k) => {
    const plucked = pluckFirstCoded(k);
    const replaced = k.toLowerCase().replace(/ /g, '_');
    return plucked || replaced;
};
const cleanHeading = (obj) => {
    if (typeof obj === 'object') {
        return Object.entries(obj).reduce((a, c) => {
            const [k, v] = c;
            return { ...a, [snake_case_key(k)]: v };
        }, {});
    }
    else {
        return {};
    }
};
const snakeCaseMatches = (groups) => {
    return groups.map((g) => {
        const [_, k, v] = g;
        return [_, snake_case_key(k), v];
    });
};
/**
 * a recursive reduce function that produces a nested object from markdown,
 * where keys are the headings of each partitioned section of the markdown file,
 * and the values are another object with the next heading as the key. At each
 * point test if tick_group has some results. If so, they produce nested keys
 * within the current object, and the value is the description of the variable.
 *
 */
const recursivePropCapture = (md, arg = 'Argument Reference', attr = 'Attribute Reference', step = 0, seps = [regex_1.nn_h2, regex_1.nn_h3, regex_1.nn_h4, regex_1.nn_h5]) => {
    if (step === seps.length)
        return md;
    const parts = md.split(seps[step]);
    //if (step > 2) console.log(`step: ${step}, ${seps[step]} parts: ${parts}`)
    const results = parts.reduce((a, c) => {
        const heading = c.match(regex_1.head_rx);
        if (!heading)
            return a;
        const chunk = (0, regex_1.cleanBody)(c.replace(regex_1.head_rx, '')); //
        const has_kv = chunk.match(regex_1.tick_group); //
        if (has_kv) {
            const key_val_matches = [...chunk.matchAll(regex_1.tick_group)]; //
            const kvs = snakeCaseMatches(key_val_matches);
            const section = (0, exports.recursivePropCapture)(chunk, arg, attr, step + 1);
            /**
             * FIXME
             * (e.g., repl/xf-assets.ts - e.g., `kms_secret`)
             * Currently, some pages have H4/5 headed sections that are not
             * nested under the H3 section. This is a problem because the
             * recursivePropCapture function assumes that the H3 section is
             * the parent of the H4/5 sections. This is not always the case.
             * The solution is to check if the H3 section has a key:value
             * pair where the val `isLinked` and the key matches the H4/5
             * defined in a section below. This needs to be done when both
             * are presently in scope.
             * I.e., at a previous `step` (w/a previous `sep`) in the
             * `recursivePropCapture` function because it will not be caught
             * by the [`librarian`], due to it not existing within the lineage
             * of the current section.
             *
             * [`librarian`]: ./deduper.ts
             */
            const nested = cleanHeading(section); //
            const vars = kvs.reduce((acc, [_, key, val]) => ({
                ...acc,
                [regex_1.required.test(val) ? `${key}!` : key]: nested[key] ? nested[key] : val.trim(),
            }), {}); //
            return { ...a, [heading[1]]: vars };
        }
        else {
            if (heading[1] === arg || heading[1] === attr)
                return a;
            return {
                ...a,
                [heading[1]]: (0, exports.recursivePropCapture)(chunk, arg, attr, step + 1),
            };
        }
    }, {});
    return results;
};
exports.recursivePropCapture = recursivePropCapture;
/**
 * grabs the value for the key and if any nested key:value pairs match root
 * key:value pairs, they are removed from the root object
 */
const separateAttrsArgsAndDedupProps = (payload, arg = 'Argument Reference', attr = 'Attribute Reference') => {
    const deduped = (0, deduper_1.deduper)(payload);
    if (deduped) {
        const args = deduped[arg];
        const attrs = deduped[attr];
        return {
            args,
            attrs,
        };
    }
    else {
        return {
            args: payload[arg],
            attrs: payload[attr],
        };
    }
};
exports.separateAttrsArgsAndDedupProps = separateAttrsArgsAndDedupProps;
const md2json = (md, arg = 'Argument Reference', attr = 'Attribute Reference') => {
    const payload = (0, exports.recursivePropCapture)(md, arg);
    const specs = (0, exports.separateAttrsArgsAndDedupProps)(payload, arg, attr);
    return specs;
};
exports.md2json = md2json;
// 🐛 DEBUG a given doc by id 🐛
//const v = '5.20.0'
//const debug_id = '3225195' // dynamodb_table // '3225992' // vpc //'3225778' s3_bucket // '3225836' // '3225480' // '3224533' // '3226064' // '3198562'
//const test_json_w_md = readFileSync(
//    `registry/docs/terraform-provider-aws/${v}/${debug_id}.json`,
//    'utf8'
//)
//const props = recursivePropCapture(JSON.parse(test_json_w_md)['data']['attributes']['content'])
//const isolated = separateAttrsArgsAndDedupProps(props)
//JSON.stringify(isolated, null, 4) //?
//# sourceMappingURL=md2json.js.map