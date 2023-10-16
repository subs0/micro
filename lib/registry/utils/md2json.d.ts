import { Resource } from './constants';
type NestedObject = {
    [key: string]: NestedObject | string;
};
/**
 * a recursive reduce function that produces a nested object from markdown,
 * where keys are the headings of each partitioned section of the markdown file,
 * and the values are another object with the next heading as the key. At each
 * point test if tick_group has some results. If so, they produce nested keys
 * within the current object, and the value is the description of the variable.
 *
 */
export declare const recursivePropCapture: (md: string, arg?: string, attr?: string, step?: number, seps?: RegExp[]) => NestedObject | any;
/**
 * grabs the value for the key and if any nested key:value pairs match root
 * key:value pairs, they are removed from the root object
 */
export declare const separateAttrsArgsAndDedupProps: (payload: {
    [key: string]: any;
}, arg?: string, attr?: string) => {
    args: any;
    attrs: any;
};
export declare const md2json: (md: string, arg?: string, attr?: string) => Resource;
export {};
//# sourceMappingURL=md2json.d.ts.map