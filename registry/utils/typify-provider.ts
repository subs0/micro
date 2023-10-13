import fs from 'fs'
import { quicktype, InputData, jsonInputForTargetLanguage } from 'quicktype-core'
import { saveJsonDocForRootSpec } from './parse-root-provider'
import { typeLinesAugmenter } from './decorate-types'
import { NestedObject, ProviderJson, Resource, MergedJson } from './types'
import { isPlainObject } from '@thi.ng/checks'

export const cleanKey = (str: string) => str.trim().replace(/\s|-/g, '_').replace('!', '')

const isRequired = (str: string) => str.includes('!')
const isEmpty = (obj: object) => obj.constructor === Object && Object.keys(obj).length === 0

/**
 * Tailored to the input requirements of quicktype, this function removes all
 * optional properties from a JSON objection (denoted by a '!' on the key) and
 * returns a new object with only the required properties.
 *
 * This payload is paired with a payload containing all properties, and the
 * result allows quicktype to generate a typescript interface properly annotated
 * optional interface properties.
 * TODO: enable bridging between non and required properties 🌉
 */
export const triageQTSampleProps = (
    input: object,
    max_depth = 1,
    depth = 0,
    output = {}
): NestedObject => {
    if (depth === max_depth) return output
    return Object.entries(input).reduce((a, c, i, d) => {
        const [key, val] = c
        if (isRequired(key)) {
            if (isPlainObject(val)) {
                // required, add key to accumulator and recurse over object
                return {
                    ...a,
                    [cleanKey(key)]: triageQTSampleProps(val, max_depth, depth + 1),
                }
            } else {
                // required, include string value in current accumulator
                return { ...a, [cleanKey(key)]: val }
            }
        } else {
            /**
             * postpone processing (add bang to key == required) entry until next
             * iteration of recursion. Keep position by spreading into root of
             * accumulator at this level.
             */
            return {
                ...a,
                ...triageQTSampleProps({ [`${key}!`]: val }, max_depth, depth + 1),
            }
        }
    }, output)
}
/*
const version = '43475'
const target_id = '3225778' // '3225390'
const test_file = fs.readFileSync(
    `registry/docs/terraform-provider-aws/${version}/${target_id}.json`,
    'utf8'
)
const test_payload = JSON.parse(test_file)
const test_md = test_payload['data']['attributes']['content']
const test_json = md2json(test_md)
const isolated = triageQTSampleProps(test_json['args'])
//console.log('isolated:', isolated)
*/

/**
 * Generates 4 sample JSON payloads for a given provider. The shape of the payloads
 * is as follows:
 * sample 0: {}
 * sample 1 & 2: {
 *      data: {},
 *      resource: {}
 *  }
 * sample 3: {
 *      data: { req: { req: "" } },
 *      resource: { req: { req: "" } }
 *  }
 * sample ...: {
 *      data: { req: { req: "", opt: "" }, opt: { req: "" } },
 *      resource: { req: { req: "" , opt: "" }, opt: { req: "" } }
 *  }
 * sample n: {
 *      data: {
 *          req: { req: "", opt: "" },
 *          opt: { req: "" , opt: { req: { req: "" } } },
 *          ...n
 *      },
 *      resource: {
 *          req: { req: "" , opt: "" },
 *          opt: { req: "" , opt: { req: { req: "" } },
 *          ...n
 *      }
 *  }
 *
 * if a child key of an object is required, it should appear in the object
 * when then parent is present.
 *
 * These payloads are tailored to provision the proper typescript interfaces
 * with correct optional properties per the terraform JSON spec.
 *
 *
 * Generates samples from a single, deeply nested json object, wherein required
 * keys at each level are paired with an object that contains only the required
 * keys at that level. This is done recursively until the entire object is
 * traversed.
 */
const recursivelyGenerateSamplesForQT = (
    merged: MergedJson | object = {},
    provider = 'terraform-provider-aws',
    version = '43475',
    path = 'registry/json'
) => {
    const jsonPath = `${path}/${provider}/${version}`

    let depth = 0
    let sample = triageQTSampleProps(merged, depth)
    let samples = [sample]
    while (
        depth <= 4 ||
        (depth > 4 &&
            JSON.stringify(samples[depth]).length <
                JSON.stringify(triageQTSampleProps(merged, depth + 1)).length)
    ) {
        depth++
        const s = triageQTSampleProps(merged, depth)
        samples.push(s)
    }
    if (!fs.existsSync(jsonPath)) {
        fs.mkdirSync(jsonPath)
    }
    const JSON_samples = samples.map((x) => JSON.stringify(x, null, 4))
    const out = JSON_samples.map((x, i) => {
        const previousJSON = !!i ? fs.readFileSync(`${jsonPath}/sample${i - 1}.json`, 'utf8') : ''
        if (x === previousJSON) x = ''
        fs.writeFileSync(`${jsonPath}/sample${i}.json`, x)
        return x
    })
    return out.filter((x) => !!x)
}

const getQtTypesFromProviderSamples = async (
    samples: string[],
    provider = 'terraform-provider-aws',
    targetLanguage = 'typescript',
    indent = 4
) => {
    const jsonInput = jsonInputForTargetLanguage(targetLanguage)
    await jsonInput.addSource({
        name: provider,
        samples,
        description:
            'Comprehensive Types for the [AWS Terraform Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)',
    })
    const inputData = new InputData()
    inputData.addInput(jsonInput)
    const { lines, ...rest } = await quicktype({
        //debugPrintGatherNames: true,
        //debugPrintGraph: true,
        inputData,
        lang: targetLanguage,
        alphabetizeProperties: false,
        indentation: ' '.repeat(indent),
        checkProvenance: true,
        combineClasses: false,
        inferEnums: false,
        allPropertiesOptional: false,
        inferBooleanStrings: false,
        inferDateTimes: false,
        inferIntegerStrings: false,
        inferMaps: false,
        inferUuids: false,
    })
    //console.log('rest:', rest)
    return lines
}

export const generateInterfacesForProvider = async (
    merged: MergedJson,
    provider = 'terraform-provider-aws',
    version = '43475',
    refresh = false,
    jsonPath = 'registry/json',
    typePath = 'registry/types'
) => {
    const typesPath = `${typePath}/${provider}/${version}/types.ts`
    if (!refresh && fs.existsSync(typesPath)) {
        return fs.readFileSync(typesPath, 'utf8').split('\n')
    }
    // ensure directory exists
    const dir = `${typePath}/${provider}/${version}`
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    const samples = await recursivelyGenerateSamplesForQT(merged, provider, version, jsonPath)
    console.log(`\n Generating ${samples.length} samples for quicktype...\n`)
    const interfaces = await getQtTypesFromProviderSamples(samples, provider)
    fs.writeFileSync(typesPath, interfaces.join('\n'))
    return interfaces
}

/**
 * Takes JSON, which contains a nested object of resources and their attributes
 * and arguments, and returns the same object, but with the arguments and
 * attributes merged into a single object for each resource.
 */
const merger = (input: ProviderJson): MergedJson =>
    Object.entries(input).reduce((a, c) => {
        const [category, resources] = c as [string, Resource]
        return {
            ...a,
            [category]: Object.entries(resources).reduce((a, c) => {
                const [resource, { args, attrs }] = c
                return { ...a, [resource]: { ...args, ...attrs } }
            }, {}),
        }
    }, {} as MergedJson)

const cut = (cur: [string, NestedObject], acc = {}): NestedObject => {
    const [key, val] = cur
    const trim = (obj: NestedObject): NestedObject =>
        Object.entries(val).reduce((a, c) => {
            const [key, val] = c
            if (isPlainObject(val)) {
                return { ...a, [cleanKey(key)]: trim(obj) }
            } else {
                return { ...a, [cleanKey(key)]: val }
            }
        }, {} as NestedObject)
    const res = isPlainObject(val) ? trim(val) : val
    return { ...acc, [cleanKey(key)]: res }
}

const trampoline =
    (fn: Function) =>
    (...args: any) => {
        let result = fn(...args)
        while (typeof result === 'function') {
            result = result()
        }
        return result
    }

const barber = (merged: object) => {
    const cut = (entries: [string, NestedObject | string][], output = {}) =>
        entries.length
            ? () => {
                  const [cur, ...rest] = entries
                  const [key, val] = cur
                  if (isPlainObject(val)) {
                      return cut(rest, {
                          ...output,
                          [cleanKey(key)]: barber(val),
                      })
                  } else {
                      return cut(rest, { ...output, [cleanKey(key)]: val })
                  }
              }
            : output

    return trampoline(cut)(Object.entries(merged))
}

//const testJSON = fs.readFileSync('registry/json/terraform-provider-aws/43475.json', 'utf8')
//const json = JSON.parse(testJSON)
//const merged = merger(json)
//const cleancut = barber(merged) //?

//const sample1 = JSON.parse(
//    fs.readFileSync('registry/json/terraform-provider-aws/43475/sample13.json', 'utf8')
//)
//const sample2 = JSON.parse(
//    fs.readFileSync('registry/json/terraform-provider-aws/43475/sample14.json', 'utf8')
//)

//const diff1 = diff(sample1, sample2)

//JSON.stringify(diff1, null, 4) //?

// 🏃 🏃 🏃 PRIMARY COMPILER 🏃 🏃 🏃 TODO: convert to node (npm) script
export const compileTypes = async (
    provider = 'terraform-provider-aws',
    version = '43475',
    refresh = false,
    reload = false,
    typePath = 'registry/types',
    skips = { '43475': ['3226064'], '43126': ['3199143'] }[version] || []
) => {
    console.log(`\nGenerating JSON from Docs for: ${provider} ...\n`)
    const jsonDoc = await saveJsonDocForRootSpec(provider, version, refresh, reload, skips).then(
        (x) => {
            console.log(`DATA      : ${Object.keys(x['data']).length}`)
            console.log(`RESOURCES : ${Object.keys(x['resource']).length}`)
            return x
        }
    )
    //const json = mergeArgsAttrsAndClean(jsonDoc)
    console.log(`\nGenerating Types from JSON for: ${provider}\n`)
    const merged = merger(jsonDoc)
    const interfaces = await generateInterfacesForProvider(merged, provider, version, refresh)

    const cleancut = barber(merged) //?

    const augmentedLines = typeLinesAugmenter(interfaces, cleancut).join('\n')
    const augmentedPath = `${typePath}/${provider}/${version}.ts`
    // ensure directory exists
    const dir = `${typePath}/${provider}`
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    console.log(`\nAugmenting Types for: ${provider} ...\n`)
    fs.writeFileSync(augmentedPath, augmentedLines)
    console.log('🚀 DONE 🚀')
}

const versions = {
    '5.19.0': '43126',
    '5.20.0': '43475',
}

compileTypes('terraform-provider-aws', versions['5.19.0'], true)
