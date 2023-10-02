import { nn_h2, nn_h3, tick_group, headRx, required, optional } from './regex'

/**
 * a recursive reduce function that produces a nested object from markdown,
 * where keys are the headings of each partitioned section of the markdown file,
 * and the values are another object with the next heading as the key. At each
 * point test if tick_group has some results. If so, they produce nested keys
 * within the current object, and the value is the description of the variable.
 */
export const recursiveCapture = (md, step = 0, seps = [nn_h2, nn_h3]) => {
    if (step === seps.length) return md
    const parts = md.split(seps[step])
    //console.log({ step, parts })
    const results = parts.reduce((a, c) => {
        const heading = c.match(headRx)
        if (!heading) return a
        const body = c.replace(headRx, '')
        const has_kv = body.match(tick_group)
        if (has_kv) {
            const rxKVgroups = [...body.matchAll(tick_group)]
            const details = recursiveCapture(body, step + 1)
            const vars = rxKVgroups.reduce(
                (spec, group) => ({
                    ...spec,
                    // add ! to required keys
                    [required.test(group[2]) ? `${group[1]}!` : group[1]]: details[group[1]]
                        ? details[group[1]]
                        : group[2],
                }),
                {}
            )
            return { ...a, [heading[1]]: vars }
        } else {
            return { ...a, [heading[1]]: recursiveCapture(body, step + 1, seps) }
        }
    }, {})
    return results
}

/**
 * grabs the value for the key and if any nested key:value pairs match root
 * key:value pairs, they are removed from the root object
 */
export const isolateAttrsAndDedup = (
    payload: object,
    arg = 'Argument Reference',
    attr = 'Attribute Reference'
) => {
    const args: object = payload[arg]
    const attrs: object = payload[attr]
    const deduper = (target) =>
        Object.entries(target).reduce((a, c, i, d) => {
            const [k, v] = c
            if (typeof v !== 'object') {
                // see if any of the nested keys match the root keys
                const objVals: object[] = d.filter((x) => typeof x[1] === 'object')
                const hasMatchKV = objVals.some((x) => x[1][k] && x[1][k] === v)
                return hasMatchKV ? a : { ...a, [k]: v }
            } else {
                return { ...a, [k]: v }
            }
        }, {})
    const dedupedArgs = deduper(args)
    const dedupedAttrs = deduper(attrs)
    return {
        args: dedupedArgs,
        attrs: dedupedAttrs,
    }
}

export const md2json = (md, arg = 'Argument Reference', attr = 'Attribute Reference') => {
    const payload = recursiveCapture(md)
    const specs = isolateAttrsAndDedup(payload, arg, attr)
    return specs
}
