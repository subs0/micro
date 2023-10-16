import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { quicktype, InputData, jsonInputForTargetLanguage } from 'quicktype-core';
import { saveJsonDocForRootSpec } from './parse-root-provider';
import { typeLinesAugmenter } from './decorate-types';
import { isRequired, VERSIONS } from './constants';
import { isPlainObject } from '@thi.ng/checks';
export const cleanKey = (str) => str.trim().replace(/\s|-/g, '_').replace('!', '');
/**
 * Tailored to the input requirements of quicktype, this function removes all
 * optional properties from a JSON objection (denoted by a '!' on the key) and
 * returns a new object with only the required properties.
 *
 * This payload is paired with a payload containing all properties, and the
 * result allows quicktype to generate a typescript interface properly annotated
 * optional interface properties.
 */
export const triageQTSampleProps = (input, max_depth = 1, depth = 0, output = {}) => {
    if (depth === max_depth) {
        //console.log(`max depth reached: ${max_depth}`)
        return output;
    }
    return Object.entries(input).reduce((a, c, i, d) => {
        const [key, val] = c;
        if (isRequired(key)) {
            if (isPlainObject(val)) {
                // required, add key to accumulator and recurse over object
                return {
                    ...a,
                    [cleanKey(key)]: triageQTSampleProps(val, max_depth, depth + 1),
                };
            }
            else {
                // required, include string value in current accumulator
                return { ...a, [cleanKey(key)]: val };
            }
        }
        else {
            /**
             * postpone processing (add bang to key == required) entry until next
             * iteration of recursion. Keep position by spreading into root of
             * accumulator at this level.
             */
            return {
                ...a,
                ...triageQTSampleProps({ [`${key}!`]: val }, max_depth, depth + 1),
            };
        }
    }, output);
};
/**
 * Generates samples from a single, deeply nested json object, wherein required
 * keys at each level are paired with an object that contains only the required
 * keys at that level. This is done recursively until the entire object is
 * traversed.
 * The shape of the payloads can be visualized as follows:
 * ```
 * sample 0: {}
 *
 * //duplicates happen when there are no required keys at that depth (skipped)
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
 *```
 * if a child key of an object is required, it must appear in the object
 * when then parent is present for quicktype to infer the type optionality
 *
 * These payloads are tailored to provision the proper typescript interfaces
 * with correct optional properties per the terraform JSON spec.
 *
 */
const recursivelyGenerateSamplesForQT = (merged = {}, provider = 'terraform-provider-aws', version = '43475', path = 'registry/json') => {
    const jsonPath = `${path}/${provider}/${version}`;
    let max_depth = 1;
    let sample = triageQTSampleProps(merged, max_depth);
    let samples = [sample];
    // skip even numbers (presents required children with parent)
    while (JSON.stringify(samples[(max_depth + 1) / 2 - 1]).length <
        JSON.stringify(triageQTSampleProps(merged, max_depth + 2)).length) {
        max_depth = max_depth + 2;
        const s = triageQTSampleProps(merged, max_depth);
        samples.push(s);
    }
    if (!existsSync(jsonPath)) {
        mkdirSync(jsonPath);
    }
    const JSON_samples = samples.map((x) => JSON.stringify(x, null, 4));
    const out = JSON_samples.map((x, i) => {
        writeFileSync(`${jsonPath}/sample${i}.json`, x);
        return x;
    });
    return out;
};
/**
 * Generates typescript interfaces from a list of JSON samples using the
 * quicktype library.
 */
const getQtTypesFromProviderSamples = async (samples, provider = 'terraform-provider-aws', targetLanguage = 'typescript', indent = 4) => {
    const jsonInput = jsonInputForTargetLanguage(targetLanguage);
    await jsonInput.addSource({
        name: provider,
        samples,
        description: '(Almost) Comprehensive Types for the [AWS Terraform Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)',
    });
    const inputData = new InputData();
    inputData.addInput(jsonInput);
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
    });
    //console.log('rest:', rest)
    return lines;
};
export const generateInterfacesForProvider = async (merged, provider = 'terraform-provider-aws', version = '43475', refresh = false, jsonPath = 'registry/json', typePath = 'registry/types') => {
    const typesPath = `${typePath}/${provider}/${version}/types.ts`;
    if (!refresh && existsSync(typesPath)) {
        return readFileSync(typesPath, 'utf8').split('\n');
    }
    // ensure directory exists
    const dir = `${typePath}/${provider}/${version}`;
    if (!existsSync(dir))
        mkdirSync(dir, { recursive: true });
    const samples = await recursivelyGenerateSamplesForQT(merged, provider, version, jsonPath);
    console.log(`\n Generating ${samples.length} samples for quicktype...\n`);
    const interfaces = await getQtTypesFromProviderSamples(samples, provider);
    writeFileSync(typesPath, interfaces.join('\n'));
    return interfaces;
};
/**
 * Takes JSON, which contains a nested object of resources and their attributes
 * and arguments, and returns the same object, but with the arguments and
 * attributes merged into a single object for each resource.
 */
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
/**
 * status quo trampoline function
 */
const trampoline = (fn) => (...args) => {
    let result = fn(...args);
    while (typeof result === 'function') {
        result = result();
    }
    return result;
};
/**
 * I only resorted to trampolining after blowing the stack with this function.
 * Recursively removes any bangs (!) from keys in a nested object.
 */
const barber = (merged) => {
    const cut = (entries, output = {}) => entries.length
        ? () => {
            const [cur, ...rest] = entries;
            const [key, val] = cur;
            if (isPlainObject(val)) {
                return cut(rest, {
                    ...output,
                    [cleanKey(key)]: barber(val),
                });
            }
            else {
                return cut(rest, { ...output, [cleanKey(key)]: val });
            }
        }
        : output;
    return trampoline(cut)(Object.entries(merged));
};
/**
 * digs into nested values of the provider json payload and - within each
 * resource/data object's `attrs` object - prepend "(Output Only)" to any
 * string values (recursive)
 */
const addOutputFlagToAttrs = (json, provider, version) => {
    const [p] = provider.split('-').reverse();
    const DocURL = (type, cat) => `https://registry.terraform.io/providers/hashicorp/${p}/${version}/docs/${type}/${cat}`;
    const addOutputFlag = (obj) => {
        const res = Object.entries(obj).reduce((a, c) => {
            const [k, v] = c;
            if (isPlainObject(v)) {
                return { ...a, [k]: addOutputFlag(v) };
            }
            else if (typeof v === 'string') {
                return { ...a, [k]: '(Output Only) ' + v };
            }
            else {
                console.warn(`addOutputFlag needs direction for type ${typeof v}`);
                return { ...a, [k]: v };
            }
        }, {});
        return res;
    };
    /**
     * TODO
     * consider adding "(Output Only)" to any string value that doesn't
     * have an (Optional) or (Required) flag... 🤔
     */
    const pluckAttrsAndAddOutputFlag = (key, obj, type) => {
        const _type = {
            data: 'data-sources',
            resource: 'resources',
        }[type] || '';
        const { args, attrs } = obj;
        if (!attrs) {
            console.log(`🧹 No Attributes: ${key}${' '.repeat(56 - key.length)}: ${DocURL(_type, key)}`);
            return obj;
        }
        return { args, attrs: addOutputFlag(attrs) };
    };
    const traverseResources = (obj, type) => Object.entries(obj).reduce((a, c) => {
        const [k, v] = c;
        return { ...a, [k]: pluckAttrsAndAddOutputFlag(k, v, type) };
    }, {});
    const { data, resource } = json;
    const augmented = {
        data: traverseResources(data, 'data'),
        resource: traverseResources(resource, 'resource'),
    };
    return augmented;
};
// 🏃 🏃 🏃 PRIMARY COMPILER 🏃 🏃 🏃 TODO: convert to node (npm) script
export const compileTypes = async (provider = 'terraform-provider-aws', version = '5.20.0', refresh = false, reload = false, typePath = 'registry/types') => {
    const v = VERSIONS[provider][version] || '43475';
    const skips = { '43475': ['3226064'], '43126': ['3199143'] }[v] || [];
    console.log(`\nGenerating JSON from Docs for: ${provider} ...\n`);
    const jsonDoc = await saveJsonDocForRootSpec(provider, version, refresh, reload, skips).then((x) => {
        console.log(`DATA      : ${Object.keys(x['data']).length}`);
        console.log(`RESOURCES : ${Object.keys(x['resource']).length}`);
        return x;
    });
    const flagged = addOutputFlagToAttrs(jsonDoc, provider, version);
    console.log(`\nGenerating Types from JSON for: ${provider}\n`);
    const merged = merger(flagged);
    const interfaces = await generateInterfacesForProvider(merged, provider, version, refresh);
    const cleancut = barber(merged); //?
    const augmentedLines = typeLinesAugmenter(interfaces, cleancut).join('\n');
    const augmentedPath = `${typePath}/${provider}/${version}.ts`;
    // ensure directory exists
    const dir = `${typePath}/${provider}`;
    if (!existsSync(dir))
        mkdirSync(dir, { recursive: true });
    console.log(`\nAugmenting Types for: ${provider} ...\n`);
    writeFileSync(augmentedPath, augmentedLines);
    console.log('🚀 DONE 🚀');
};
//compileTypes('terraform-provider-aws', '5.21.0', true)
//const version = '43475'
//const target_id = '3225778' // '3225390'
//const test_file = readFileSync(
//    `registry/docs/terraform-provider-aws/${version}/${target_id}.json`,
//    'utf8'
//)
//const test_payload = JSON.parse(test_file)
//const test_md = test_payload['data']['attributes']['content']
//const testJSON = readFileSync('registry/json/terraform-provider-aws/43475.json', 'utf8')
//const json = JSON.parse(testJSON)
//const merged = merger(json)
//const cleancut = barber(merged) //?
//const sample1 = JSON.parse(
//    readFileSync('registry/json/terraform-provider-aws/43475/sample13.json', 'utf8')
//)
//const sample2 = JSON.parse(
//    readFileSync('registry/json/terraform-provider-aws/43475/sample14.json', 'utf8')
//)
//const diff1 = diff(sample1, sample2)
//JSON.stringify(diff1, null, 4) //?
//# sourceMappingURL=typify-provider.js.map