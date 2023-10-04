export interface DaxCluster {
    resource: Resource[];
}

export interface Resource {
    dax_cluster: DaxClusterClass;
}

export interface DaxClusterClass {
    /** (Required) A valid Amazon Resource Name (ARN) that identifies */
    iam_role_arn:            any;
    /** (Optional) List of Availability Zones in which the */
    availability_zones?:     any;
    /** (Optional) Encrypt at rest options */
    server_side_encryption?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
    /** (Optional) Whether to enable encryption at rest. Defaults to `false`. */
    enabled?:                any;
}