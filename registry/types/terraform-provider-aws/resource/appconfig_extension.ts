export interface AppconfigExtension {
    resource: Resource[];
}

export interface Resource {
    appconfig_extension: AppconfigExtensionClass;
}

export interface AppconfigExtensionClass {
    /** (Required) The parameter name. */
    name:         any;
    /** (Optional) Information about the parameter. */
    description?: any;
    /** (Required) The action points defined in the extension. [Detailed below](#action_point). */
    action_point: any;
    /** (Optional) The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the CreateExtensionAssociation API action. For Lambda extension actions, these parameters are included in the Lambda request object. [Detailed below](#parameter). */
    parameter?:   any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
    /** (Required) The point at which to perform the defined actions. Valid points are `PRE_CREATE_HOSTED_CONFIGURATION_VERSION`, `PRE_START_DEPLOYMENT`, `ON_DEPLOYMENT_START`, `ON_DEPLOYMENT_STEP`, `ON_DEPLOYMENT_BAKING`, `ON_DEPLOYMENT_COMPLETE`, `ON_DEPLOYMENT_ROLLED_BACK`. */
    point:        any;
    /** (Required) An action defines the tasks the extension performs during the AppConfig workflow. [Detailed below](#action). */
    action:       any;
    /** (Required) An Amazon Resource Name (ARN) for an Identity and Access Management assume role. */
    role_arn:     any;
    /** (Required) The extension URI associated to the action point in the extension definition. The URI can be an Amazon Resource Name (ARN) for one of the following: an Lambda function, an Amazon Simple Queue Service queue, an Amazon Simple Notification Service topic, or the Amazon EventBridge default event bus. */
    uri:          any;
    /** (Required) Determines if a parameter value must be specified in the extension association. */
    required:     any;
}