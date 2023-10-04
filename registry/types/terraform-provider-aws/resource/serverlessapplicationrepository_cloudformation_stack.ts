export interface ServerlessapplicationrepositoryCloudformationStack {
    resource: Resource[];
}

export interface Resource {
    serverlessapplicationrepository_cloudformation_stack: ServerlessapplicationrepositoryCloudformationStackClass;
}

export interface ServerlessapplicationrepositoryCloudformationStackClass {
    /** (Required) The name of the stack to create. The resource deployed in AWS will be prefixed with `serverlessrepo-` */
    name:              any;
    /** (Required) The ARN of the application from the Serverless Application Repository. */
    application_id:    any;
    /** (Required) A list of capabilities. Valid values are `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_RESOURCE_POLICY`, or `CAPABILITY_AUTO_EXPAND` */
    capabilities:      any;
    /** (Optional) A map of Parameter structures that specify input parameters for the stack. */
    parameters?:       any;
    /** (Optional) The version of the application to deploy. If not supplied, deploys the latest version. */
    semantic_version?: any;
    /** (Optional) A list of tags to associate with this stack. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}