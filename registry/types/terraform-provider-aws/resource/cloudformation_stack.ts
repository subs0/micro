export interface CloudformationStack {
    resource: Resource[];
}

export interface Resource {
    cloudformation_stack: CloudformationStackClass;
}

export interface CloudformationStackClass {
    /** (Required) Stack name. */
    name:                any;
    /** (Optional) Structure containing the template body (max size: 51,200 bytes). */
    template_body?:      any;
    /** (Optional) Location of a file containing the template body (max size: 460,800 bytes). */
    template_url?:       any;
    /** (Optional) A list of capabilities. */
    capabilities?:       any;
    /** (Optional) Set to true to disable rollback of the stack if stack creation failed. */
    disable_rollback?:   any;
    /** (Optional) A list of SNS topic ARNs to publish stack related events. */
    notification_arns?:  any;
    /** (Optional) Action to be taken if stack creation fails. This must be */
    on_failure?:         any;
    /** (Optional) A map of Parameter structures that specify input parameters for the stack. */
    parameters?:         any;
    /** (Optional) Structure containing the stack policy body. */
    policy_body?:        any;
    /** (Optional) Location of a file containing the stack policy. */
    policy_url?:         any;
    /** (Optional) Map of resource tags to associate with this stack. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Optional) The ARN of an IAM role that AWS CloudFormation assumes to create the stack. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials. */
    iam_role_arn?:       any;
    /** (Optional) The amount of time that can pass before the stack status becomes `CREATE_FAILED`. */
    timeout_in_minutes?: any;
}