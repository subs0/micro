export interface Ec2ClientVPNAuthorizationRule {
    resource: Resource[];
}

export interface Resource {
    ec2_client_vpn_authorization_rule: Ec2ClientVPNAuthorizationRuleClass;
}

export interface Ec2ClientVPNAuthorizationRuleClass {
    /** (Required) The ID of the Client VPN endpoint. */
    client_vpn_endpoint_id: any;
    /** (Required) The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies. */
    target_network_cidr:    any;
    /** (Optional) The ID of the group to which the authorization rule grants access. One of `access_group_id` or `authorize_all_groups` must be set. */
    access_group_id?:       any;
    /** (Optional) Indicates whether the authorization rule grants access to all clients. One of `access_group_id` or `authorize_all_groups` must be set. */
    authorize_all_groups?:  any;
    /** (Optional) A brief description of the authorization rule. */
    description?:           any;
}