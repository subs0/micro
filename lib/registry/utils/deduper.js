"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deduper = void 0;
const checks_1 = require("@thi.ng/checks");
const paths_1 = require("@thi.ng/paths");
const constants_1 = require("./constants");
/*
Deduplication Cases:
1. a nested reference needs to lookup a more shallow definition with a redundant
   reference to the same definition at progressively shallower levels:
    - depth x+2: key: (optional) see [below](#key)  // lookup
    - depth x+1: key: { def1: "...", def2: "..." }  // grab and assign to x+2
    - depth x+0: key: (optional) see [below](#key)  // redundant (omit)
2. a nested reference with a redundant reference at a shallower level:
    - depth x+1: key: (optional) no links here!     // keep this here
    - depth x+0: key: (optional) no links here!     // redundant (omit)
3. an incedentally included shallow reference at the root level:
    - depth x+0: key: (optional) see [below](#key)  // redundant (omit)
*/
/**
 * for linked entries, this function recursively looks up the path (until
 * reaching the root) to find the definition of the linked entry. Once found,
 * the the definition - and paths made redundant thereby - are returned.
 */
const librarian = (input = {}, path = [], query = '', match = null, aisles = []) => {
    const [key, ...parent] = [...path].reverse();
    if (!parent.length)
        return [match, aisles];
    const [_, ...grandparent] = parent;
    const stack = [...grandparent.reverse(), key];
    const DICT = (0, paths_1.getInUnsafe)(input, stack);
    if ((0, checks_1.isPlainObject)(DICT)) {
        if (!(0, constants_1.isEmpty)(DICT) && !match) {
            // 🥇 first found DICT wins (assumed closest to the reference)
            // assign DICT to match and add path to cleanup list
            return librarian(input, stack, query, DICT, [...aisles, stack]);
        }
        else if (match) {
            const [key1, val1] = Object.entries(DICT)[0];
            const [key2, val2] = Object.entries(match)[0];
            if (key1 === key2 && val1 === val2) {
                // add to cleanup list
                return librarian(input, stack, query, match, [...aisles, stack]);
            }
            else {
                // no match, keep looking
                return librarian(input, stack, query, match, aisles);
            }
        }
        else {
            // no match, keep looking
            return librarian(input, stack, query, match, aisles);
        }
    }
    else if (typeof DICT === 'string' && DICT.slice(0, 50) === query.slice(0, 50)) {
        // add to cleanup list
        return librarian(input, stack, query, match, [...aisles, stack]);
    }
    else {
        // no match, keep looking
        return librarian(input, stack, query, match, aisles);
    }
};
/**
 * for (un)linked entries, this function recursively looks up the path (until
 * reaching the root) to find any redundant references to the entry. Once found,
 * the path to the redundant reference is included in a list to be deleted.
 */
const inspect = (input = {}, match = {}, path = [], flagged = []) => {
    const [key, ...parent] = [...path].reverse();
    if (!parent.length)
        return flagged;
    const { val, type } = match;
    const [_, ...grandparent] = parent;
    const hall = [...grandparent.reverse(), key];
    const def_obj = (0, paths_1.getInUnsafe)(input, hall);
    if (def_obj) {
        switch (type) {
            case 'link':
            case 'string':
                // check if the strings appear to be the same
                if (typeof def_obj === 'string' && def_obj.slice(0, 50) === val.slice(0, 50)) {
                    return inspect(input, match, hall, [...flagged, hall]);
                }
                break;
            case 'object':
                // check if the objects appear to be the same
                if ((0, checks_1.isPlainObject)(def_obj) && !(0, constants_1.isEmpty)(def_obj)) {
                    const [key1, val1] = Object.entries(val)[0];
                    const [key2, val2] = Object.entries(def_obj)[0];
                    if (key1 === key2 && val1 === val2) {
                        return inspect(input, match, hall, [...flagged, hall]);
                    }
                }
                break;
            default:
                console.error(`inspect needs direction for type ${type}`);
                return inspect(input, match, hall, flagged);
        }
        return inspect(input, match, hall, flagged);
    }
    else {
        return inspect(input, match, hall, flagged);
    }
};
const kabobbed = (k) => k.toLowerCase().replace(/ |_/g, '-');
const isLinked = (key, val) => {
    if (key.length > 50)
        return false;
    const kabob = kabobbed(key.replace('!', ''));
    // use regex to test inclusion of kabob or "detailed below"
    const linked = val.includes(`#${kabob}`) || val.match(/(detailed|documented) below/i);
    return linked ? true : false;
};
/**
 * Recursively traverses a nested object, looking for:
 * - duplicate definitions for the same key
 * - linked references to other definitions of the same key
 *
 * It then removes any redundant references and returns the deduped object.
 */
const butler = (input = {}, path = []) => {
    const focused = (0, paths_1.getInUnsafe)(input, path);
    Object.entries(focused).forEach((entry) => {
        const [key, val] = entry;
        const path_here = [...path, key];
        if (typeof val === 'string') {
            if (isLinked(key, val)) {
                /**
                 * Linked:
                 * 1. lookup the definition of the linked entry
                 * 2. assign the definition to the current entry
                 * 3. recursive lookup any redundant refs to the current entry
                 * 4. replace any redundant references with the empty object {}
                 */
                const [definition, aisles] = librarian(input, path_here, val);
                if (definition) {
                    input = (0, paths_1.setInUnsafe)(input, path_here, definition);
                    const halls = inspect(input, { val, type: 'link' }, path_here);
                    const todos = [...halls, ...aisles];
                    todos.forEach((hallway) => {
                        // breaks recursion if undefined     📌
                        input = (0, paths_1.setInUnsafe)(input, hallway, {});
                    });
                }
            }
            else {
                /**
                 * Unlinked:
                 * 1. recursive lookup any redundant refs to the current entry
                 * 2. delete any redundant refs (no recursive lookup needed)
                 */
                const halls = inspect(input, { val, type: 'string' }, path_here);
                halls.forEach((hallway) => {
                    input = (0, paths_1.deleteInUnsafe)(input, hallway);
                });
            }
        }
        else if ((0, checks_1.isPlainObject)(val)) {
            /**
             * Object:
             * 1. recursive lookup any redundant refs to the current entry
             * 2. replace any redundant references with the empty object {}
             * 3. recurse down into the object for further deduping
             */
            const [definition, aisles] = librarian(input, path_here);
            if (definition) {
                const halls = inspect(input, { val, type: 'object' }, path_here);
                const todos = [...halls, ...aisles];
                todos.forEach((hallway) => {
                    // breaks recursion if undefined     📌
                    input = (0, paths_1.setInUnsafe)(input, hallway, {});
                });
            }
            input = butler(input, path_here);
        }
        else {
            console.error(`butler needs direction for typeof ${key}: ${typeof val}`);
        }
    });
    return input;
};
/**
 * Three phase duduplicator:
 * 1. runs a recursive lookup for entries with definitions defined elsewhere in
 *    the document and replaces the entry with the definition. This step also
 *    includes deleting any redundant references to either the definition or
 *    other duplicated entries.
 * 2. a second pass of the same process as step 1, to account for newly nested
 *    definitions
 * 3. a final pass to remove any empty objects that were created in step 1,
 *    including the removal of linked references in the root (also due to the
 *    same issue requiring step 2)
 */
const deduper = (input = {}) => {
    try {
        const doubleButler = butler(butler(input));
        const clean = (obj = {}) => {
            Object.entries(obj).forEach(([key, val]) => {
                if ((0, checks_1.isPlainObject)(val)) {
                    if ((0, constants_1.isEmpty)(val)) {
                        delete obj[key];
                    }
                    else {
                        clean(val);
                    }
                }
                else if (typeof val === 'string' && isLinked(key, val)) {
                    delete obj[key];
                }
            });
            return obj;
        };
        return clean(doubleButler);
    }
    catch (e) {
        const subcategory = Object.keys(input)[0];
        const layout = Object.keys(input[subcategory])[0];
        if (!layout) {
            console.warn(`🔥 🧹 failed to dedup: ${subcategory}`);
            return null;
        }
        // @ts-ignore
        const page_title = Object.keys(input[subcategory][layout])[0];
        console.warn(`🔥 🧹 failed to DEDUP: ${page_title}`);
        return null;
    }
};
exports.deduper = deduper;
//# sourceMappingURL=deduper.js.map