export interface SecurityGroup {
    resource: Resource[];
}

export interface Resource {
    security_group: SecurityGroupClass;
}

export interface SecurityGroupClass {
    egress?:                 Gress;
    ingress?:                Gress;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:            any;
    /** (Optional, Forces new resource) Name of the security group. If omitted, Terraform will assign a random, unique name. */
    name?:                   any;
    /** (Optional) Instruct Terraform to revoke all of the Security Groups attached ingress and egress rules before deleting the rule itself. This is normally not needed, however certain AWS services such as Elastic Map Reduce may automatically add required rules to security groups used with the service, and those rules may contain a cyclic dependency that prevent the security groups from being destroyed without removing the dependency first. Default `false`. */
    revoke_rules_on_delete?: any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
    /** (Optional, Forces new resource) VPC ID. Defaults to the region's default VPC. */
    vpc_id?:                 any;
}

export interface Gress {
    /** (Required) Start port (or ICMP type number if protocol is `icmp` or `icmpv6`). */
    from_port:        any;
    /** (Required) End range port (or ICMP code if protocol is `icmp`). */
    to_port:          any;
    /** (Optional) List of CIDR blocks. */
    cidr_blocks:      any;
    /** (Optional) Description of this ingress rule. */
    description:      any;
    /** (Optional) List of IPv6 CIDR blocks. */
    ipv6_cidr_blocks: any;
    /** (Optional) List of Prefix List IDs. */
    prefix_list_ids:  any;
    /** (Required) Protocol. If you select a protocol of `-1` (semantically equivalent to `all`, which is not a valid value here), you must specify a `from_port` and `to_port` equal to 0.  The supported values are defined in the `IpProtocol` argument on the [IpPermission](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IpPermission.html) API reference. This argument is normalized to a lowercase value to match the AWS API requirement when using with Terraform 0.12.x and above, please make sure that the value of the protocol is specified as lowercase when using with older version of Terraform to avoid an issue during upgrade. */
    protocol:         any;
    /** (Optional) List of security groups. A group name can be used relative to the default VPC. Otherwise, group ID. */
    security_groups:  any;
    /** (Optional) Whether the security group itself will be added as a source to this ingress rule. */
    self:             any;
}