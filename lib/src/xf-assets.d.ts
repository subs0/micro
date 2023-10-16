type NestedObject = {
    [key: string]: NestedObject;
};
export declare const aws_$: (path: string, fn: Function, ...args: any) => any;
/**
 * flattens modules into a single object, with unique keys created by
 * joining nested key identifiers until the function reaches a pivot point
 * (resource or data) and then prepending the module name to the key ("_").
 */
export declare const flattenPreservingPaths: (parentKey: string | undefined, obj: object, provider?: string, keyPath?: string[], acc?: NestedObject) => object;
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
export declare const compile: (provider: Provider[] | Provider, terraform: Terraform) => (obj: object, filePath: string) => string;
export {};
//# sourceMappingURL=xf-assets.d.ts.map