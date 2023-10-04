export interface MskServerlessCluster {
    resource: Resource[];
}

export interface Resource {
    msk_serverless_cluster: MskServerlessClusterClass;
}

export interface MskServerlessClusterClass {
    /** (Required) Specifies client authentication information for the serverless cluster. See below. */
    client_authentication: any;
    /** (Required) The name of the serverless cluster. */
    cluster_name:          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                 any;
    /** (Required) VPC configuration information. See below. */
    vpc_config:            any;
    /** (Required) Details for client authentication using SASL. See below. */
    sasl:                  any;
    /** (Required) Details for client authentication using IAM. See below. */
    iam:                   any;
    /** (Required) Whether SASL/IAM authentication is enabled or not. */
    enabled:               any;
    /** (Optional) Specifies up to five security groups that control inbound and outbound traffic for the serverless cluster. */
    security_group_ids?:   any;
    /** (Required) A list of subnets in at least two different Availability Zones that host your client applications. */
    subnet_ids:            any;
}