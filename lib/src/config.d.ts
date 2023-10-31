import { Provider, Terraform, NestedObject } from './types';
/**
 * flattens modules into a single object, with unique keys created by
 * joining nested key identifiers until the function reaches a pivot point
 * (resource or data) and then prepending the module name to the key ("_").
 */
export declare const flattenPreservingPaths: (obj: object, provider?: string, path?: any[], acc?: NestedObject, refs?: boolean) => object;
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
}>(obj: T, provider?: string) => (args_0: FnParams<T[keyof T]>[0], ...args_1: Partial<FnParams<T[keyof T]>>[]) => [FnReturn<T[keyof T]>, FnReturn<T[keyof T]>];
/**
 * Takes a provider and a terraform configuration and returns a compiler function
 */
export declare const config: (provider: Provider[] | Provider, terraform: Terraform, outputFile: string) => (...objs: any[]) => {};
export {};
/**
 * References:
 *
 * [1]: https://discuss.hashicorp.com/t/error-accessing-set-values-using-the-terraform-json-syntax/59493/3
 */
//# sourceMappingURL=config.d.ts.map