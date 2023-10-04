export interface Ec2ClientVPNEndpoint {
    resource: Resource[];
}

export interface Resource {
    ec2_client_vpn_endpoint: Ec2ClientVPNEndpointClass;
}

export interface Ec2ClientVPNEndpointClass {
    /** (Required) Information about the authentication method to be used to authenticate clients. */
    authentication_options:          any;
    /** (Required) The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. The CIDR block should be /22 or greater. */
    client_cidr_block:               any;
    /** (Optional) The options for managing connection authorization for new client connections. */
    client_connect_options?:         any;
    /** (Optional) Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established. */
    client_login_banner_options?:    any;
    /** (Required) Information about the client connection logging options. */
    connection_log_options:          any;
    /** (Optional) A brief description of the Client VPN endpoint. */
    description?:                    any;
    /** (Optional) Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address of the connecting device is used. */
    dns_servers?:                    any;
    /** (Optional) The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups. */
    security_group_ids?:             any;
    /** (Optional) Specify whether to enable the self-service portal for the Client VPN endpoint. Values can be `enabled` or `disabled`. Default value is `disabled`. */
    self_service_portal?:            any;
    /** (Required) The ARN of the ACM server certificate. */
    server_certificate_arn:          any;
    /** (Optional) The maximum session duration is a trigger by which end-users are required to re-authenticate prior to establishing a VPN session. Default value is `24` - Valid values: `8 | 10 | 12 | 24` */
    session_timeout_hours?:          any;
    /** (Optional) Indicates whether split-tunnel is enabled on VPN endpoint. Default value is `false`. */
    split_tunnel?:                   any;
    /** (Optional) A mapping of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Optional) The transport protocol to be used by the VPN session. Default value is `udp`. */
    transport_protocol?:             any;
    /** (Optional) The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied. */
    vpc_id?:                         any;
    /** (Optional) The port number for the Client VPN endpoint. Valid values are `443` and `1194`. Default value is `443`. */
    vpn_port?:                       any;
    /** (Optional) The ID of the Active Directory to be used for authentication if type is `directory-service-authentication`. */
    active_directory_id?:            any;
    /** (Optional) The ARN of the client certificate. The certificate must be signed by a certificate authority (CA) and it must be provisioned in AWS Certificate Manager (ACM). Only necessary when type is set to `certificate-authentication`. */
    root_certificate_chain_arn?:     any;
    /** (Optional) The ARN of the IAM SAML identity provider if type is `federated-authentication`. */
    saml_provider_arn?:              any;
    /** (Optional) The ARN of the IAM SAML identity provider for the self service portal if type is `federated-authentication`. */
    self_service_saml_provider_arn?: any;
    /** (Required) The type of client authentication to be used. Specify `certificate-authentication` to use certificate-based authentication, `directory-service-authentication` to use Active Directory authentication, or `federated-authentication` to use Federated Authentication via SAML 2.0. */
    type:                            any;
    /** (Required) Indicates whether connection logging is enabled. */
    enabled:                         any;
    /** (Optional) The Amazon Resource Name (ARN) of the Lambda function used for connection authorization. */
    lambda_function_arn?:            any;
    /** (Optional) Customizable text that will be displayed in a banner on AWS provided clients when a VPN session is established. UTF-8 encoded characters only. Maximum of 1400 characters. */
    banner_text?:                    any;
    /** (Optional) The name of the CloudWatch Logs log group. */
    cloudwatch_log_group?:           any;
    /** (Optional) The name of the CloudWatch Logs log stream to which the connection data is published. */
    cloudwatch_log_stream?:          any;
}