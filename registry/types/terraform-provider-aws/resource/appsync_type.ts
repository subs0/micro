export interface AppsyncType {
    resource: Resource[];
}

export interface Resource {
    appsync_type: AppsyncTypeClass;
}

export interface AppsyncTypeClass {
    /** (Required) GraphQL API ID. */
    api_id:     any;
    /** (Required) The type format: `SDL` or `JSON`. */
    format:     any;
    /** (Required) The type definition. */
    definition: any;
}