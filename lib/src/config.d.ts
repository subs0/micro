type NestedObject = {
    [key: string]: NestedObject;
};
/**
 * flattens modules into a single object, with unique keys created by
 * joining nested key identifiers until the function reaches a pivot point
 * (resource or data) and then prepending the module name to the key ("_").
 */
export declare const flattenPreservingPaths: (obj: object, provider?: string, path?: string[], acc?: NestedObject, refs?: boolean) => object;
/**
 * Takes an object who's key provides a namespace for the module and value
 * is a function that takes two arguments:
 * 1. an options/configuration object to be passed to the module
 * 2. a reference to the outputs of the module (for cross-resource references)
 *
 * Returns a function that takes the same arguments as the module function
 * with the second argument applied
 */
export declare const modulate: (obj: {
    [key: string]: Function;
}, provider?: string) => (...args: any[]) => {};
export interface Provider {
    [key: string]: {
        region: string;
        profile?: string;
        alias?: string;
    };
}
export interface Terraform {
    required_providers: {
        [key: string]: {
            source: string;
            version: string;
        };
    };
}
/**
 * Takes a provider and a terraform configuration and returns a compiler function
 */
export declare const config: (provider: Provider[] | Provider, terraform: Terraform, outputFile: string) => (...objs: any[]) => {};
export {};
//# sourceMappingURL=config.d.ts.map