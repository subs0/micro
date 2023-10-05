import fs from 'fs'
import {
    nn_h2,
    nn_h3,
    tick_group,
    headRx,
    required,
    flip_inverted_optionality_tags,
    replace_em_dashes,
} from './regex'

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
) => {
    if (step === seps.length) return md
    const parts = md.split(seps[step])
    //console.log({ step, parts })
    const results = parts.reduce((a, c) => {
        const heading = c.match(headRx)
        if (!heading) return a
        const dashd = replace_em_dashes(c)
        const body = flip_inverted_optionality_tags(dashd.replace(headRx, ''))
        const has_kv = body.match(tick_group)
        if (has_kv) {
            //console.log('has_kv:', heading[1])
            const rxKVgroups = [...body.matchAll(tick_group)]
            // log out the group keys and values
            const details = recursivePropCapture(body, arg, attr, step + 1)
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
            return { ...a, [heading[1]]: recursivePropCapture(body, arg, attr, step + 1, seps) }
        }
    }, {})
    return results
}

/**
 * grabs the value for the key and if any nested key:value pairs match root
 * key:value pairs, they are removed from the root object
 */
export const separateAttrsArgsAndDedupProps = (
    payload: object,
    arg = 'Argument Reference',
    attr = 'Attribute Reference'
) => {
    const args: object = payload[arg]
    const attrs: object = payload[attr]
    const deduper = (target: object) =>
        Object.entries(target).reduce((a, c, i, d) => {
            const [k, v] = c
            if (typeof v !== 'object') {
                const objVals: object[] = d.filter(([_k, _v]) => typeof _v === 'object')
                const hasMatchKV = objVals.some(
                    /**
                     * test if value of any config block objects containing the
                     * same key mostly matches the value of a key at the root
                     */ // @ts-ignore
                    ([blockKey, obj]) =>
                        obj[k] &&
                        typeof obj[k] === 'string' &&
                        obj[k].slice(0, 50) === v.slice(0, 50)
                )
                //console.log({ hasMatchKV, objVals })
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
