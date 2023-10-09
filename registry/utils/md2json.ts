import fs from 'fs'
import {
    nn_h2,
    nn_h3,
    tick_group,
    headRx,
    required,
    flip_bad_opt_flags,
    replace_em_dashes,
} from './regex'

type NestedObject = { [key: string]: NestedObject | string }

/**
 * a recursive reduce function that produces a nested object from markdown,
 * where keys are the headings of each partitioned section of the markdown file,
 * and the values are another object with the next heading as the key. At each
 * point test if tick_group has some results. If so, they produce nested keys
 * within the current object, and the value is the description of the variable.
 */
export const recursivePropCapture = (
    md: string,
    arg = 'Argument Reference',
    attr = 'Attribute Reference',
    step = 0,
    seps = [nn_h2, nn_h3]
): NestedObject | any => {
    if (step === seps.length) return md
    const parts = md.split(seps[step])
    //console.log({ step, parts })
    const results = parts.reduce((a, c) => {
        const heading = c.match(headRx)
        if (!heading) return a
        const dashd = replace_em_dashes(c)
        const repairedFlags = flip_bad_opt_flags(dashd.replace(headRx, '')) as string
        const has_kv = repairedFlags.match(tick_group)
        if (has_kv) {
            const rxKVgroups = [...repairedFlags.matchAll(tick_group)]
            // 🐛 log out the group keys and values
            //rxKVgroups.forEach((group) => {
            //    console.log('group caught:\n', group[0], 'key:\n', group[1], 'value:\n', group[2])
            //})
            const deets = recursivePropCapture(repairedFlags, arg, attr, step + 1)
            const details = typeof deets === 'object' ? deets : {}
            const vars = rxKVgroups.reduce(
                (spec, group) => ({
                    ...spec,
                    // add bang `!` to required keys
                    [required.test(group[2]) ? `${group[1]}!` : group[1]]: details[group[1]]
                        ? details[group[1]]
                        : group[2],
                }),
                {}
            )
            return { ...a, [heading[1]]: vars }
        } else {
            // skip References without tick_groups
            if (heading[1] === arg || heading[1] === attr) return a
            return {
                ...a,
                [heading[1]]: recursivePropCapture(repairedFlags, arg, attr, step + 1, seps),
            }
        }
    }, {})
    return results
}

/**
 * grabs the value for the key and if any nested key:value pairs match root
 * key:value pairs, they are removed from the root object
 */
export const separateAttrsArgsAndDedupProps = (
    payload: { [key: string]: any },
    arg = 'Argument Reference',
    attr = 'Attribute Reference'
) => {
    const args = payload[arg]
    const attrs = payload[attr]
    const deduper = (target: object) =>
        Object.entries(target).reduce((a, c, i, d) => {
            const [k, v] = c
            if (typeof v !== 'object') {
                const objVals = d.filter(([_k, _v]) => typeof _v === 'object')
                /**
                 * test if value of any config block object - containing the
                 * same key - mostly matches the value of a key at the root
                 */
                const hasMatchKV = objVals.some(
                    ([_, obj]) =>
                        obj[k] &&
                        typeof obj[k] === 'string' &&
                        // TODO: use obj[k].includes(v) instead?
                        obj[k].slice(0, 50) === v.slice(0, 50)
                )
                return hasMatchKV ? a : { ...a, [k]: v }
            } else {
                return { ...a, [k]: v }
            }
        }, {})
    const dedupedArgs = (args && deduper(args)) || {}
    const dedupedAttrs = (attrs && deduper(attrs)) || {}
    return {
        args: dedupedArgs,
        attrs: dedupedAttrs,
    }
}
/*
// 🐛 DEBUG a given doc by id 🐛
const debug_id = '3198562'
const test_json_w_md = fs.readFileSync(
    `registry/docs/terraform-provider-aws/${debug_id}.json`,
    'utf8'
)
const props = recursivePropCapture(JSON.parse(test_json_w_md)['data']['attributes']['content'])

const isolated = separateAttrsArgsAndDedupProps(props) //?
*/

export const md2json = (md: string, arg = 'Argument Reference', attr = 'Attribute Reference') => {
    const payload = recursivePropCapture(md, arg)
    //console.log({ payload })
    const specs = separateAttrsArgsAndDedupProps(payload, arg, attr)
    return specs
}
