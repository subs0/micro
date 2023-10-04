export interface AppconfigApplication {
    resource: Resource[];
}

export interface Resource {
    appconfig_application: AppconfigApplicationClass;
}

export interface AppconfigApplicationClass {
    /** (Required) Name for the application. Must be between 1 and 64 characters in length. */
    name:         any;
    /** (Optional) Description of the application. Can be at most 1024 characters. */
    description?: any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}