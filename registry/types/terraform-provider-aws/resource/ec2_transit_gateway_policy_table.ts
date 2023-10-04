export interface Ec2TransitGatewayPolicyTable {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_policy_table: Ec2TransitGatewayPolicyTableClass;
}

export interface Ec2TransitGatewayPolicyTableClass {
    /** (Required) EC2 Transit Gateway identifier. */
    transit_gateway_id: any;
    /** (Optional) Key-value tags for the EC2 Transit Gateway Policy Table. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}