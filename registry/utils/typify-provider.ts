import fs from 'fs'
import { quicktype, InputData, jsonInputForTargetLanguage } from 'quicktype-core'
import { saveJsonDocForRootSpec } from './parse-root-provider'
import { typeLinesAugmenter } from './decorate-types'
import { md2json } from './md2json'


export const cleanKey = (str: string) => str.trim().replace(/\s|-/g, '_').replace('!', '')

type NestedObject = { [key: string]: NestedObject | string }

/**
 * Recursively cleans keys of an object
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

const hasBangs = (str: string) => str.includes('!')
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
        if (hasBangs(k)) {
            if (typeof v === 'object') {
                return {
                    ...a,
                    ...(!isEmpty(isolateRequiredProps(v))
                        ? { [cleanKey(k)]: isolateRequiredProps(v) }
                        : {}),
                }
            } else if (typeof v === 'string') {
                return { ...a, [cleanKey(k)]: v }
            } else return a
        } else return a
    }, {})
    return required
}

/*
const target_id = '3198562'
const test_file = fs.readFileSync(`registry/docs/terraform-provider-aws/${target_id}.json`, 'utf8')
const test_payload = JSON.parse(test_file)
const test_md = test_payload['data']['attributes']['content']
const test_json = md2json(test_md)
const isolated = isolateRequiredProps(test_json["args"])
console.log('isolated:', isolated)
*/

interface ProviderJson {
    data: object
    resource: object
}
const getSamplesFromProviderForQT = async (
    provider = 'terraform-provider-aws',
    refresh = false,
    path = 'registry/json'
) => {
    const jsonPath = `${path}/${provider}`
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
    refresh = false,
    jsonPath = 'registry/json',
    typePath = 'registry/types'
) => {
    const typesPath = `${typePath}/${provider}/types.ts`
    if (!refresh && fs.existsSync(typesPath)) {
        return fs.readFileSync(typesPath, 'utf8').split('\n')
    }
    const sampleFiles = await getSamplesFromProviderForQT(provider, refresh, jsonPath)
    console.log('Sample count:', sampleFiles.length)
    const typeLines = await getQtTypesFromProviderSamples(sampleFiles, provider)
    // write them to disk
    fs.writeFileSync(typesPath, typeLines.join('\n'))
    return typeLines
}

// 🏃 🏃 🏃 PRIMARY COMPILER 🏃 🏃 🏃 TODO: convert to node (npm) script
export const compileTypes = async (
    provider = 'terraform-provider-aws',
    refresh = false,
    typePath = 'registry/types'
) => {
    console.log('Generating JSON from Docs for:', provider)
    const jsonDocs = (await saveJsonDocForRootSpec(provider, refresh).then((x) => {
        console.log(`DATA      : ${Object.keys(x['data']).length}`)
        console.log(`RESOURCES : ${Object.keys(x['resource']).length}`)
        return x
    })) as object
    const json = mergeArgsAttrsAndClean(jsonDocs)
    console.log('Generating Types from JSON for:', provider)
    const typelines = await generateTypesForProvider(provider, refresh)
    const augmentedLines = typeLinesAugmenter(typelines, json).join('\n')
    const augmentedPath = `${typePath}/${provider}.ts`
    console.log('Augmenting Types for:', provider)
    fs.writeFileSync(augmentedPath, augmentedLines)
    console.log('Done.')
}
// COMPLETE TEST
compileTypes('terraform-provider-aws', true)//?
