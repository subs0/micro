export interface NetworkfirewallFirewall {
    resource: Resource[];
}

export interface Resource {
    networkfirewall_firewall: NetworkfirewallFirewallClass;
}

export interface NetworkfirewallFirewallClass {
    /** (Optional) A boolean flag indicating whether it is possible to delete the firewall. Defaults to `false`. */
    delete_protection?:                 any;
    /** (Optional) A friendly description of the firewall. */
    description?:                       any;
    /** (Optional) KMS encryption configuration settings. See [Encryption Configuration](#encryption-configuration) below for details. */
    encryption_configuration?:          any;
    /** (Required) The Amazon Resource Name (ARN) of the VPC Firewall policy. */
    firewall_policy_arn:                any;
    /** (Option) A boolean flag indicating whether it is possible to change the associated firewall policy. Defaults to `false`. */
    firewall_policy_change_protection?: any;
    /** (Required, Forces new resource) A friendly name of the firewall. */
    name?:                              any;
    /** (Optional) A boolean flag indicating whether it is possible to change the associated subnet(s). Defaults to `false`. */
    subnet_change_protection?:          any;
    /** (Required) Set of configuration blocks describing the public subnets. Each subnet must belong to a different Availability Zone in the VPC. AWS Network Firewall creates a firewall endpoint in each subnet. See [Subnet Mapping](#subnet-mapping) below for details. */
    subnet_mapping:                     any;
    /** (Optional) Map of resource tags to associate with the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
    /** (Required, Forces new resource) The unique identifier of the VPC where AWS Network Firewall should create the firewall. */
    vpc_id?:                            any;
    /** (Optional) The ID of the customer managed key. You can use any of the [key identifiers](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) that KMS supports, unless you're using a key that's managed by another account. If you're using a key managed by another account, then specify the key ARN. */
    key_id?:                            any;
    /** (Required) The type of AWS KMS key to use for encryption of your Network Firewall resources. Valid values are `CUSTOMER_KMS` and `AWS_OWNED_KMS_KEY`. */
    type:                               any;
    /** (Optional) The subnet's IP address type. Valida values: `"DUALSTACK"`, `"IPV4"`. */
    ip_address_type?:                   any;
    /** (Required) The unique identifier for the subnet. */
    subnet_id:                          any;
}