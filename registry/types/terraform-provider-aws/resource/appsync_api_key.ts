export interface AppsyncAPIKey {
    resource: Resource[];
}

export interface Resource {
    appsync_api_key: AppsyncAPIKeyClass;
}

export interface AppsyncAPIKeyClass {
    /** (Required) ID of the associated AppSync API */
    api_id:       any;
    /** (Optional) API key description. Defaults to "Managed by Terraform". */
    description?: any;
    /** (Optional) RFC3339 string representation of the expiry date. Rounded down to nearest hour. By default, it is 7 days from the date of creation. */
    expires?:     any;
}