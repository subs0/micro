import { writeFileSync } from 'fs';
import { isPlainObject, isArray, isString } from '@thi.ng/checks';
// regex that replaces a number surrounded by periods .0. with a number surrounded by brackets [0]
const bracketRegex = /\.\d+\./g;
// function that replaces any internal .0. with [0]. to allow for terraform interpolation
const bracketifyTF = (str) => str.replace(bracketRegex, (match) => `[${match.slice(1, -1)}].`);
const bracketify = (str) => str.replace(bracketRegex, (match) => `[${match.slice(1, -1)}]`);
/**
 * produces terraform string templates for exported (--> prefixed) values
 * recursively
 */
const exporter = (obj, scoped, pivot, type, path = []) => Object.entries(obj).reduce((a, c) => {
    const [k, v] = c;
    const basePath = `${pivot}.${type}.${scoped}`;
    const accessPath = path.length ? path.join('.') + '.' : '';
    const access = `\${${basePath}.${accessPath}${k}}`;
    const fixed = bracketifyTF(access);
    const [head, tail] = bracketify(accessPath).split('[');
    const tolist = `\${tolist(${basePath}.${head})[${tail}.${k}}`;
    if (isString(v)) {
        if (v.startsWith('-->*')) {
            // [1] tolist alternative for set unpacking a single item - from apparentlymart
            const one = `\${one(${basePath}.${head})${tail.replace(/\d]/, '')}.${k}}`;
            return { ...a, [k]: one };
        }
        else if (v.startsWith('-->')) {
            return { ...a, [k]: fixed };
        }
        else {
            return { ...a, [k]: v };
        }
    }
    else if (isPlainObject(v)) {
        return { ...a, [k]: exporter(v, scoped, pivot, type, [...path, k]) };
    }
    else if (isArray(v)) {
        return {
            ...a,
            [k]: v.map((x, i) => {
                if (isString(x) && x.startsWith('-->')) {
                    return bracketify(`${access}[${i}]`);
                }
                else if (isPlainObject(x)) {
                    return exporter(x, scoped, pivot, type, [...path, k, i]);
                }
                return x;
            }),
        };
    }
    else {
        //console.log(`passthrough in exporter function...`)
        //console.log({ k, v, type, pivot, scoped })
        return { ...a, [k]: v };
    }
}, {});
/**
 * recursive function that takes a path of strings or numbers
 * and returns an object with nested objects and arrays
 *
 **/
const pathObjectifier = (path) => {
    const [head, ...tail] = path;
    if (tail && tail.length) {
        if (isString(head))
            return { [head]: pathObjectifier(tail) };
        else {
            // create an array of dummy objects leading up to the index
            const dummyArray = (head && Array(head - 1).fill({})) || [];
            return [...dummyArray, pathObjectifier(tail)];
        }
    }
    else {
        if (isString(head))
            return { [head]: '🔥' };
        else
            return [...Array(head).fill('...'), '🔥'];
    }
};
/**
 * cleans out any export-specific values (--> prefixed) recursively and warns
 * the user if they forgot to export a value using the --> prefix
 */
const exportFinalizer = (obj, path) => {
    const warn = (path) => {
        const reminder = '\n🔥 Upstream export (-->) missing. Required by:';
        console.warn(`${reminder}\n${JSON.stringify(pathObjectifier(path), null, 4)}`);
        //console.log(JSON.stringify(path))
    };
    return Object.entries(obj).reduce((a, c) => {
        const [k, v] = c;
        if (v === '-->')
            return a;
        if (v === 'undefined' || v === 'null')
            warn([...path, k]);
        if (isString(v) && v.startsWith('-->')) {
            const cleaned = v.replace(/-->\*?/, '');
            if (cleaned === '') {
                return a;
            }
            else {
                return { ...a, [k]: cleaned };
            }
        }
        else if (isPlainObject(v)) {
            return { ...a, [k]: exportFinalizer(v, [...path, k]) };
        }
        else if (isArray(v)) {
            //console.log(`array found for ${k}: ${JSON.stringify(v)}`)
            return {
                ...a,
                [k]: v.map((x, i) => {
                    if (x == 'undefined' || x == 'null')
                        warn([...path, k, i]);
                    if (isPlainObject(x))
                        return exportFinalizer(x, [...path, k, i]);
                    else
                        return x;
                }),
            };
        }
        else {
            return { ...a, [k]: v };
        }
    }, {});
};
/**
 * flattens modules into a single object, with unique keys created by
 * joining nested key identifiers until the function reaches a pivot point
 * (resource or data) and then prepending the module name to the key ("_").
 */
export const flattenPreservingPaths = (obj, provider = 'aws', // FIXME: adds this to everything, even things you may not want
path = [], acc = {}, refs = false) => {
    const pivotPoints = ['resource', 'data'];
    return Object.entries(obj).reduce((a, c) => {
        const [key, val] = c;
        if (pivotPoints.includes(key)) {
            const target = Object.values(val)[0]; // { [key]: {...} }
            const raw_type = Object.keys(val)[0]; // e.g., lambda_function
            const type = `${provider}_${raw_type}`;
            const scoped = path.join('_');
            const scope = path.slice(-1)[0];
            return refs
                ? {
                    ...a,
                    [scope]: {
                        ...a[scope],
                        [key]: {
                            ...(a[scope] && a[scope][key]),
                            [raw_type]: exporter(target, scoped, key, type),
                        },
                    },
                }
                : {
                    ...a,
                    [key]: {
                        ...a[key],
                        [type]: {
                            ...(a[key] && a[key][type]),
                            [scoped]: exportFinalizer(target, [key, raw_type]),
                        },
                    },
                };
        }
        else {
            return {
                ...a,
                ...flattenPreservingPaths(val, provider, [...path, key], a, refs),
            };
        }
    }, acc);
};
/**
 *
 * Takes an object who's key provides a namespace for the module and value
 * is a function that takes two arguments:
 * 1. an options/configuration object to be passed to the module
 * 2. (optional) a reference to the outputs of the module (for cross-resource references)
 *
 * Returns a function that takes the same arguments as the module function
 * with the second argument applied
 */
export const modulate = (obj, provider = 'aws') => {
    const [key, fn] = Object.entries(obj)[0];
    return (...args) => {
        const ref = { [key]: fn(...args) };
        const refs = flattenPreservingPaths(ref, provider, [], {}, true);
        const obj = { [key]: fn(...args, refs) };
        const out = flattenPreservingPaths(obj, provider, [], {}, false);
        return [out, refs];
    };
};
const isEmpty = (x) => isPlainObject(x) && !Object.keys(x).length ? true : isArray(x) && !x.length ? true : false;
/**
 * deep merges arbitrary number of objects into one
 */
const deepMerge = (...objs) => {
    const result = {};
    for (const obj of objs) {
        for (const key in obj) {
            const val = obj[key];
            if (key === 'provider' && result[key] && 'alias' in val) {
                // don't duplicate providers
                continue;
            }
            if (Array.isArray(val)) {
                // clean out arrays with empty contents
                const filtered = val.filter((x) => !isEmpty(x));
                if (!filtered.length)
                    continue;
                else {
                    result[key] = result[key] || [];
                    result[key].push(...filtered);
                }
            }
            else if (typeof val === 'object') {
                result[key] = deepMerge(result[key] || {}, val);
            }
            else {
                result[key] = val;
            }
        }
    }
    return result;
};
/**
 * Takes a provider and a terraform configuration and returns a compiler function
 */
export const config = (provider, terraform, outputFile) => {
    if (!isArray(provider)) {
        provider = [provider];
    }
    const providerWrapped = {
        terraform,
        provider,
    };
    return (...objs) => {
        const merged = deepMerge(...objs, providerWrapped);
        const out = JSON.stringify(merged, null, 2);
        writeFileSync(outputFile, out);
        return merged;
    };
};
/**
 * References:
 *
 * [1]: https://discuss.hashicorp.com/t/error-accessing-set-values-using-the-terraform-json-syntax/59493/3
 */
//# sourceMappingURL=config.js.map