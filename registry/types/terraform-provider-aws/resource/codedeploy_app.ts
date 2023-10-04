export interface CodedeployApp {
    resource: Resource[];
}

export interface Resource {
    codedeploy_app: CodedeployAppClass;
}

export interface CodedeployAppClass {
    /** (Required) The name of the application. */
    name:              any;
    /** (Optional) The compute platform can either be `ECS`, `Lambda`, or `Server`. Default is `Server`. */
    compute_platform?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}