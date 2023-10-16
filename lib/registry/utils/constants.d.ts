export type NestedObject = {
    [key: string]: NestedObject | string;
};
export interface Resource {
    args: NestedObject;
    attrs: NestedObject;
}
export interface ProviderJson {
    data: {
        [key: string]: Resource;
    };
    resource: {
        [key: string]: Resource;
    };
}
export interface MergedJson {
    data: {
        [key: string]: NestedObject;
    };
    resource: {
        [key: string]: NestedObject;
    };
}
export type TFJsonDocPayload = {
    attributes: {
        category: string;
        title: string;
        slug: string;
    };
    links: {
        self: string;
    };
};
export declare enum Category {
    'resources' = "resources",
    'data-sources' = "data-sources",
    'guides' = "guides",
    'overview' = "overview",
    'resource' = "resource",
    'data' = "data"
}
export declare const isRequired: (str: string) => boolean;
export declare const isEmpty: (obj: object) => boolean;
/**
 * new versions can be found by looking in the 'network' tab in the browser
 * inspector when visiting the terraform registry page for a provider and
 * search (ctrl + f) for 'include=provider.'
 */
export declare const VERSIONS: {
    [key: string]: {
        [key: string]: string;
    };
};
//# sourceMappingURL=constants.d.ts.map