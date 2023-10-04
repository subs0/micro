export interface AppstreamImageBuilder {
    resource: Resource[];
}

export interface Resource {
    appstream_image_builder: AppstreamImageBuilderClass;
}

export interface AppstreamImageBuilderClass {
    /** (Required) Instance type to use when launching the image builder. */
    instance_type:                           any;
    /** (Required) Unique name for the image builder. */
    name:                                    any;
    /** (Optional) Set of interface VPC endpoint (interface endpoint) objects. Maximum of 4. See below. */
    access_endpoint?:                        any;
    /** (Optional) Version of the AppStream 2.0 agent to use for this image builder. */
    appstream_agent_version?:                any;
    /** (Optional) Description to display. */
    description?:                            any;
    /** (Optional) Human-readable friendly name for the AppStream image builder. */
    display_name?:                           any;
    /** (Optional) Configuration block for the name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. See below. */
    domain_join_info?:                       any;
    /** (Optional) Enables or disables default internet access for the image builder. */
    enable_default_internet_access?:         any;
    /** (Optional) ARN of the IAM role to apply to the image builder. */
    iam_role_arn?:                           any;
    /** (Optional, Required if `image_name` not provided) ARN of the public, private, or shared image to use. */
    image_arn?:                              any;
    /** (Optional, Required if `image_arn` not provided) Name of the image used to create the image builder. */
    image_name?:                             any;
    /** (Optional) Configuration block for the VPC configuration for the image builder. See below. */
    vpc_config?:                             any;
    /** (Optional) Map of tags to assign to the instance. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                   any;
    /** (Required) Type of interface endpoint. */
    endpoint_type:                           any;
    /** (Optional) Identifier (ID) of the VPC in which the interface endpoint is used. */
    vpce_id?:                                any;
    /** (Optional) Fully qualified name of the directory (for example, corp.example.com). */
    directory_name?:                         any;
    /** (Optional) Distinguished name of the organizational unit for computer accounts. */
    organizational_unit_distinguished_name?: any;
    /** (Optional) Identifiers of the security groups for the image builder or image builder. */
    security_group_ids?:                     any;
    /** (Optional) Identifiers of the subnets to which a network interface is attached from the image builder instance or image builder instance. */
    subnet_ids?:                             any;
}