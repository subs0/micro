export interface AppconfigDeployment {
    resource: Resource[];
}

export interface Resource {
    appconfig_deployment: AppconfigDeploymentClass;
}

export interface AppconfigDeploymentClass {
    /** (Required, Forces new resource) Application ID. Must be between 4 and 7 characters in length. */
    application_id?:           any;
    /** (Required, Forces new resource) Configuration profile ID. Must be between 4 and 7 characters in length. */
    configuration_profile_id?: any;
    /** (Required, Forces new resource) Configuration version to deploy. Can be at most 1024 characters. */
    configuration_version?:    any;
    /** (Required, Forces new resource) Deployment strategy ID or name of a predefined deployment strategy. See [Predefined Deployment Strategies](https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-deployment-strategy.html#appconfig-creating-deployment-strategy-predefined) for more details. */
    deployment_strategy_id?:   any;
    /** (Optional, Forces new resource) Description of the deployment. Can be at most 1024 characters. */
    description?:              any;
    /** (Required, Forces new resource) Environment ID. Must be between 4 and 7 characters in length. */
    environment_id?:           any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
}