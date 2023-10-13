import fs from 'fs'
import { quicktype, InputData, jsonInputForTargetLanguage } from 'quicktype-core'
import { saveJsonDocForRootSpec } from './parse-root-provider'
import { typeLinesAugmenter } from './decorate-types'
import { isPlainObject } from '@thi.ng/checks'
import { EquivMap } from '@thi.ng/associative'
import { getInUnsafe, setIn, setInUnsafe } from '@thi.ng/paths'

export const cleanKey = (str: string) => str.trim().replace(/\s|-/g, '_').replace('!', '')

type NestedObject = { [key: string]: NestedObject | string }

/**
 * Recursively cleans keys of an object, removing any bangs and fixing malformed
 * keys (spaces, dashes, etc.)
 */
export const keyCleaner = (obj: object): NestedObject =>
    Object.entries(obj).reduce((a, c) => {
        const [k, v] = c
        if (typeof v === 'object') {
            return { ...a, [cleanKey(k)]: keyCleaner(v) }
        } else if (typeof v === 'string') {
            return { ...a, [cleanKey(k)]: v }
        } else return a
    }, {})

/**
 * Merges args and attrs into a single object under each resource/data key
 * and trims bangs from the any keys with them
 */
export const mergeArgsAttrsAndClean = (jsonDoc: object) => {
    return Object.entries(jsonDoc).reduce((a, c) => {
        const [k, v] = c as [string, object] // data: {}
        const entries = Object.entries(v).reduce((a, c) => {
            const [k, v] = c // cloudwatch_log_groups: {}
            const { args, attrs } = v
            return { ...a, [k]: keyCleaner({ ...args, ...attrs }) }
        }, {})
        return { ...a, [k]: entries }
    }, {})
}

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
 */
export const isolateRequiredProps = (args: object): NestedObject => {
    const required = Object.entries(args).reduce((a, c) => {
        const [k, v] = c
        if (isRequired(k)) {
            if (typeof v === 'object') {
                // required object, recurse
                return {
                    ...a,
                    ...(!isEmpty(isolateRequiredProps(v))
                        ? { [cleanKey(k)]: isolateRequiredProps(v) }
                        : {}),
                }
            } else if (typeof v === 'string') {
                // required, include string value in object
                return { ...a, [cleanKey(k)]: v }
            } else {
                /**
                 * not required, thus **omitted** from the object
                 * NOTE: this will require another pass deeper into the object
                 * to gather required properties from nested objects 📌 📦
                 */
                return a
            }
        } else return a
    }, {})
    return required
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
const isolated = isolateRequiredProps(test_json['args'])
//console.log('isolated:', isolated)
*/

interface Resource {
    args: object
    attrs: object
}

interface ProviderJson {
    data: { [key: string]: Resource }
    resource: { [key: string]: Resource }
}
/**
 * Generates 4 sample JSON payloads for a given provider. The shape of the payloads
 * is as follows:
 * 0. empty object
 * 1. empty data and resource objects
 * 2. data and resource objects with only required properties
 * 3. data and resource objects with all properties
 *
 * These payloads are tailored to provision the proper typescript interfaces with
 * correct optional properties per the terraform JSON spec.
 *
 * TODO: will need additional samples for additional levels of optionality 😦
 */
const getSamplesFromProviderForQT = async (
    provider = 'terraform-provider-aws',
    version = '43475',
    refresh = false,
    path = 'registry/json'
) => {
    const jsonPath = `${path}/${provider}/${version}`
    const samplesPaths = [0, 1, 2, 3].map((x) => `${jsonPath}/sample${x}.json`)
    const samplesExist = samplesPaths.map((x) => fs.existsSync(x))
    if (!refresh && samplesExist.every((x) => x)) {
        const samples = samplesPaths.map((x) => fs.readFileSync(x, 'utf8'))
        return samples
    } else {
        const required = (cat: object) =>
            Object.entries(cat).reduce((a, c) => {
                const [k, v] = c
                const { args } = v
                if (!args || isEmpty(args)) {
                    console.log(`No Argument Reference found for ${k}`)
                    return a
                }
                return { ...a, [k]: isolateRequiredProps(args) }
            }, {})
        const complete = (cat: object) =>
            Object.entries(cat).reduce((a, c) => {
                const [k, v] = c
                const { args, attrs } = v
                return { ...a, [k]: keyCleaner({ ...args, ...attrs }) }
            }, {})

        const inputJson = JSON.parse(fs.readFileSync(`${jsonPath}.json`, 'utf8'))
        const { data, resource } = inputJson as ProviderJson
        const sample0 = {}
        const sample1 = { data: {}, resource: {} }
        const sample2 = { data: required(data), resource: required(resource) }
        const sample3 = { data: complete(data), resource: complete(resource) }
        const allSamples = [sample0, sample1, sample2, sample3]

        if (!fs.existsSync(jsonPath)) {
            fs.mkdirSync(jsonPath)
        }
        allSamples.forEach((x, i) => fs.writeFileSync(samplesPaths[i], JSON.stringify(x, null, 4)))
        return allSamples.map((x) => JSON.stringify(x))
    }
}

/**
 * improving on the function above, this function generates samples from a single, deeply nested
 * json object, wherein required keys at each level are paired with an object that contains only
 * the required keys at that level. This is done recursively until the entire object is traversed.
 *
 * @example
 * ```
 * sample 0: {}
 * sample 1: {
 *      data: {},
 *      resource: {}
 *  }
 * sample 2: {
 *      data: { req: { req: "" } },
 *      resource: { req: { req: "" } }
 *  }
 * sample 3: {
 *      data: { req: { req: "", opt: "" }, opt: { req: "" } },
 *      resource: { req: { req: "" , opt: "" }, opt: { req: "" } }
 *  }
 * sample n: {
 *      data: { req: { req: "", opt: "" }, opt: { req: "" , opt: { req: { req: "" } } } ...n },
 *      resource: { req: { req: "" , opt: "" }, opt: { req: "" , opt: { req: { req: "" } } ...n }
 *  }
 *
 * if a child key of an object is required, it should appear in the object
 * when then parent is present. if a child key is optional, it should only
 *```
 */

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
export const isolateRequiredArgs = (
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
                // required object, recurse
                return {
                    ...a,
                    [cleanKey(key)]: isolateRequiredArgs(val, max_depth, depth + 1),
                }
            } else {
                // required, include string value in object
                return { ...a, [cleanKey(key)]: val }
            }
        } else {
            // not required, thus **omitted** from the object
            return {
                ...a,
                ...isolateRequiredArgs({ [`${key}!`]: val }, max_depth, depth + 1),
            }
        }
    }, output)
}

const recursivelyGenerateSamplesForQT = (
    input: ProviderJson | object = {},
    max_depth = 1, // for each iteration, set until completely traversed
    depth = 0,
    output = {}
) => {
    if (depth === 0) {
        //const { data, resource } = input
        // combine all attrs and args into a single object
        input = Object.entries(input).reduce((a, c) => {
            const [category, resources] = c as [string, Resource]
            return {
                ...a,
                [category]: Object.entries(resources).reduce((a, c) => {
                    const [resource, { args, attrs }] = c
                    return { ...a, [resource]: { ...args, ...attrs } }
                }, {}),
            }
        }, {})
    }
    //console.log(input)
    const results = isolateRequiredArgs(input, max_depth)
    return results
}

const testJSON = fs.readFileSync('registry/json/terraform-provider-aws/43475.json', 'utf8')
const json = JSON.parse(testJSON)
//TODO: check size (once over 3 - 2 and 3 are the same) of string to know when
// to stop (same size as last iteration): while (string.length !== lastString.length && iteration > 3)
const result = recursivelyGenerateSamplesForQT(json, 13) //?
const string = JSON.stringify(result).length //?

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
        inputData,
        lang: targetLanguage,
        alphabetizeProperties: false,
        indentation: ' '.repeat(indent),
        checkProvenance: true,
        combineClasses: false,
        //debugPrintGatherNames: true,
        //debugPrintGraph: true,
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

export const generateTypesForProvider = async (
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
    const sampleFiles = await getSamplesFromProviderForQT(provider, version, refresh, jsonPath)
    console.log(`\n Generating ${sampleFiles.length} samples for quicktype...\n`)
    const typeLines = await getQtTypesFromProviderSamples(sampleFiles, provider)
    fs.writeFileSync(typesPath, typeLines.join('\n'))
    return typeLines
}

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
    const jsonDocs = (await saveJsonDocForRootSpec(provider, version, refresh, reload, skips).then(
        (x) => {
            console.log(`DATA      : ${Object.keys(x['data']).length}`)
            console.log(`RESOURCES : ${Object.keys(x['resource']).length}`)
            return x
        }
    )) as object
    const json = mergeArgsAttrsAndClean(jsonDocs)
    console.log(`\nGenerating Types from JSON for: ${provider}\n`)
    const typelines = await generateTypesForProvider(provider, version, refresh)
    const augmentedLines = typeLinesAugmenter(typelines, json).join('\n')
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

//compileTypes('terraform-provider-aws', versions["5.19.0"], true)//?
