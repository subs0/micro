/**
 * recursive merger that takes a target object or array and
 * - if both target and existing are objects, for the same key, recursively merge
 * - if both target and existing are arrays, concat
 */
export declare const merge: (target: any, existing: any) => any;
/**
 * recursive function that takes a nested object or array and
 * - if the value is a string, updates any resource or data references to
 *   prepend the namespace
 * - if the value is an object, and the key is a resource or data reference,
 *   prepends the namespace to the child keys
 */
export declare const namespace: (target: any, path?: any[], out?: {}) => any;
type FnParams<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
type FnReturn<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;
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
export declare const modulate: <T extends {
    [key: string]: (...args: any[]) => any;
}>(obj: T, globals?: string[], provider?: string) => (args_0: FnParams<T[keyof T]>[0], ...args_1: Partial<FnParams<T[keyof T]>>[]) => [FnReturn<T[keyof T]>, FnReturn<T[keyof T]>];
export {};
/**
 * References:
 *
 * [1]: https://discuss.hashicorp.com/t/error-accessing-set-values-using-the-terraform-json-syntax/59493/3
 */
//# sourceMappingURL=config.d.ts.map