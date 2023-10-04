export interface SfnActivity {
    resource: Resource[];
}

export interface Resource {
    sfn_activity: SfnActivityClass;
}

export interface SfnActivityClass {
    /** (Required) The name of the activity to create. */
    name:  any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
}