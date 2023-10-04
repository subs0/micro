export interface EmrStudio {
    resource: Resource[];
}

export interface Resource {
    emr_studio: EmrStudioClass;
}

export interface EmrStudioClass {
    /** (Required) The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files. */
    default_s3_location:             any;
    /** (Required) A descriptive name for the Amazon EMR Studio. */
    name:                            any;
    /** (Required) The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by `vpc_id`. */
    engine_security_group_id:        any;
    /** (Required) The IAM role that the Amazon EMR Studio assumes. The service role provides a way for Amazon EMR Studio to interoperate with other Amazon Web Services services. */
    service_role:                    any;
    /** (Required) A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by `vpc_id`. Studio users can create a Workspace in any of the specified subnets. */
    subnet_ids:                      any;
    /** (Required) The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio. */
    vpc_id:                          any;
    /** (Required) The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by `vpc_id`. */
    workspace_security_group_id:     any;
    /** (Optional) A detailed description of the Amazon EMR Studio. */
    description?:                    any;
    /** (Optional) The authentication endpoint of your identity provider (IdP). Specify this value when you use IAM authentication and want to let federated users log in to a Studio with the Studio URL and credentials from your IdP. Amazon EMR Studio redirects users to this endpoint to enter credentials. */
    idp_auth_url?:                   any;
    /** (Optional) The name that your identity provider (IdP) uses for its RelayState parameter. For example, RelayState or TargetSource. Specify this value when you use IAM authentication and want to let federated users log in to a Studio using the Studio URL. The RelayState parameter differs by IdP. */
    idp_relay_state_parameter_name?: any;
    /** (Optional) list of tags to apply to the EMR Cluster. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Optional) - The IAM user role that users and groups assume when logged in to an Amazon EMR Studio. Only specify a User Role when you use Amazon Web Services SSO authentication. The permissions attached to the User Role can be scoped down for each user or group using session policies. */
    user_role?:                      any;
}