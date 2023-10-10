import fs from 'fs'
import {
    nn_h2,
    nn_h3,
    nn_h4,
    tick_group,
    headRx,
    required,
    deprecated,
    clean_flags,
    replace_em_dashes,
} from './regex'
import { isPlainObject } from '@thi.ng/checks'

type NestedObject = { [key: string]: NestedObject | string }
const shrink = (k) => k.toLowerCase().replace(/ /g, '_')
const shrinkDetails = (obj: object | string): { [key: string]: string } => {
    if (typeof obj === 'object') {
        return Object.entries(obj).reduce((a, c) => {
            const [k, v] = c
            if (deprecated.test(v)) return a
            return { ...a, [shrink(k)]: v }
        }, {})
    } else {
        return {}
    }
}

const shrinkWrap = (groups: RegExpMatchArray[]): string[][] => {
    return groups.map((g) => {
        const [_, k, v] = g
        return [_, shrink(k), v]
    })
}
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
    seps = [nn_h2, nn_h3, nn_h4]
): NestedObject | any => {
    if (step === seps.length) return md
    const parts = md.split(seps[step])
    //console.log({ step, parts })
    const results = parts.reduce((a, c) => {
        const heading = c.match(headRx)
        if (!heading) return a
        const repaired = clean_flags(c.replace(headRx, '')) as string
        const has_kv = repaired.match(tick_group)
        if (has_kv) {
            const rxKVgroups = [...repaired.matchAll(tick_group)]
            const shrank = shrinkWrap(rxKVgroups)
            // 🐛 log out the group keys and values
            //shrank.forEach((group) => {
            //    console.log('GROUP CAUGHT: \nkey:\n', group[1], '\nvalue:\n', group[2])
            //})
            const nested = recursivePropCapture(repaired, arg, attr, step + 1)
            const details = shrinkDetails(nested)
            //console.log({ shrank })
            //console.log({ details })
            //const details = typeof shrunk === 'object' ? shrunk : {}
            const vars = shrank.reduce(
                (spec, gr) => ({
                    ...spec,
                    //...(deprecated.test(gr[2])
                    //    ? {}
                    //    : {
                    // add bang `!` to required keys
                    [required.test(gr[2]) ? `${gr[1]}!` : gr[1]]: details[gr[1]]
                        ? details[gr[1]]
                        : gr[2],
                    //  }),
                }),
                {}
            )
            return { ...a, [heading[1]]: vars }
        } else {
            // skip References without tick_groups
            if (heading[1] === arg || heading[1] === attr) return a
            return {
                ...a,
                [heading[1]]: recursivePropCapture(repaired, arg, attr, step + 1, seps),
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
            if (typeof v === 'string') {
                const blocks = d.filter(([_k, _v]) => isPlainObject(_v))
                //console.log({ blocks })
                /**
                 * test if value of any config block object - containing the
                 * same key - mostly matches the value of a key at the root
                 */
                //const hasMatchKV =
                return blocks.some(
                    ([key, obj]) =>
                        obj[k] &&
                        typeof obj[k] === 'string' &&
                        obj[k].slice(0, 50) === v.slice(0, 50)
                    //|| (isPlainObject(obj[k]) &&
                    // TODO: add recursive check (currently only checks one level deep)
                )
                    ? a
                    : { ...a, [k]: v }
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

const versions = {
    '5.19.0': '43126',
    '5.20.0': '43475',
}

const v = '5.20.0'
// 🐛 DEBUG a given doc by id 🐛
const debug_id = '3225778' // '3198562'

const test_json_w_md = fs.readFileSync(
    `registry/docs/terraform-provider-aws/${versions[v]}/${debug_id}.json`,
    'utf8'
)

const props = recursivePropCapture(JSON.parse(test_json_w_md)['data']['attributes']['content'])
//console.log({ props })

const isolated = separateAttrsArgsAndDedupProps(props) //?
/*
*/

export const md2json = (md: string, arg = 'Argument Reference', attr = 'Attribute Reference') => {
    const payload = recursivePropCapture(md, arg)
    //console.log({ payload })
    const specs = separateAttrsArgsAndDedupProps(payload, arg, attr)
    return specs
}
