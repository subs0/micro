import fs from 'fs'
import {
    nn_h2,
    nn_h3,
    nn_h4,
    nn_h5,
    tick_group,
    head_rx,
    cleanBody,
    optional,
    required,
} from './regex'
import { deduper } from './deduper'
import { Resource, versions } from './constants'

type NestedObject = { [key: string]: NestedObject | string }

const key_rx = /`([^`]+?)`/g
const pluckFirstCoded = (str: string) => {
    const [k] = str.match(key_rx) || []
    const clean = k && k.replace(/`/g, '')
    return clean
}

const snake_case_key = (k: string) => {
    const plucked = pluckFirstCoded(k)
    const replaced = k.toLowerCase().replace(/ /g, '_')
    return plucked || replaced
}

const cleanHeading = (obj: object | string): { [key: string]: string } => {
    if (typeof obj === 'object') {
        return Object.entries(obj).reduce((a, c) => {
            const [k, v] = c
            return { ...a, [snake_case_key(k)]: v }
        }, {})
    } else {
        return {}
    }
}

const snakeCaseMatches = (groups: RegExpMatchArray[]): string[][] => {
    return groups.map((g) => {
        const [_, k, v] = g
        return [_, snake_case_key(k), v]
    })
}

/**
 * a recursive reduce function that produces a nested object from markdown,
 * where keys are the headings of each partitioned section of the markdown file,
 * and the values are another object with the next heading as the key. At each
 * point test if tick_group has some results. If so, they produce nested keys
 * within the current object, and the value is the description of the variable.
 *
 */
export const recursivePropCapture = (
    md: string,
    arg = 'Argument Reference',
    attr = 'Attribute Reference',
    step = 0,
    seps = [nn_h2, nn_h3, nn_h4, nn_h5]
): NestedObject | any => {
    if (step === seps.length) return md
    const parts = md.split(seps[step])
    //if (step > 2) console.log(`step: ${step}, ${seps[step]} parts: ${parts}`)
    const results = parts.reduce((a, c) => {
        const heading = c.match(head_rx)
        if (!heading) return a
        const chunk = cleanBody(c.replace(head_rx, '')) as string //
        const has_kv = chunk.match(tick_group) //
        if (has_kv) {
            const key_val_matches = [...chunk.matchAll(tick_group)]
            const kvs = snakeCaseMatches(key_val_matches)
            const section = recursivePropCapture(chunk, arg, attr, step + 1)
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
            const nested = cleanHeading(section) //
            const vars = kvs.reduce(
                (acc, [_, key, val]) => ({
                    ...acc,
                    [required.test(val) ? `${key}!` : key]: nested[key] ? nested[key] : val,
                }),
                {}
            ) //
            return { ...a, [heading[1]]: vars }
        } else {
            if (heading[1] === arg || heading[1] === attr) return a
            return {
                ...a,
                [heading[1]]: recursivePropCapture(chunk, arg, attr, step + 1),
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
    const deduped = deduper(payload)
    if (deduped) {
        const args = deduped[arg]
        const attrs = deduped[attr]
        return {
            args,
            attrs,
        }
    } else {
        return {
            args: payload[arg],
            attrs: payload[attr],
        }
    }
}

export const md2json = (
    md: string,
    arg = 'Argument Reference',
    attr = 'Attribute Reference'
): Resource => {
    const payload = recursivePropCapture(md, arg)
    //console.log({ payload })
    const specs = separateAttrsArgsAndDedupProps(payload, arg, attr)
    return specs
}

// 🐛 DEBUG a given doc by id 🐛
//const v = '5.20.0'
//const debug_id = '3225836' // '3225480' // '3224533' // '3226064' // '3225778' // '3198562'

//const test_json_w_md = fs.readFileSync(
//    `registry/docs/terraform-provider-aws/${versions['terraform-provider-aws'][v]}/${debug_id}.json`,
//    'utf8'
//)
//const props = recursivePropCapture(JSON.parse(test_json_w_md)['data']['attributes']['content']) //?
//const isolated = separateAttrsArgsAndDedupProps(props)
//JSON.stringify(isolated, null, 4)
