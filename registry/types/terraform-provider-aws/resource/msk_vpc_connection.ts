export interface MskVpcConnection {
    resource: Resource[];
}

export interface Resource {
    msk_vpc_connection: MskVpcConnectionClass;
}

export interface MskVpcConnectionClass {
    /** (Required) The authentication type for the client VPC connection. Specify one of these auth type strings: SASL_IAM, SASL_SCRAM, or TLS. */
    authentication:     any;
    /** (Required) The list of subnets in the client VPC to connect to. */
    client_subnets:     any;
    /** (Required) The security groups to attach to the ENIs for the broker nodes. */
    security_groups:    any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
    /** (Required) The Amazon Resource Name (ARN) of the cluster. */
    target_cluster_arn: any;
    /** (Required) The VPC ID of the remote client. */
    vpc_id:             any;
}