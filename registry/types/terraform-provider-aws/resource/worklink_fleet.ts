export interface WorklinkFleet {
    resource: Resource[];
}

export interface Resource {
    worklink_fleet: WorklinkFleetClass;
}

export interface WorklinkFleetClass {
    /** (Required) A region-unique name for the AMI. */
    name:                            any;
    /** (Optional) The ARN of the Amazon Kinesis data stream that receives the audit events. Kinesis data stream name must begin with `"AmazonWorkLink-"`. */
    audit_stream_arn?:               any;
    /** (Optional) The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates. */
    device_ca_certificate?:          any;
    /** (Optional) Provide this to allow manage the identity provider configuration for the fleet. Fields documented below. */
    identity_provider?:              any;
    /** (Optional) The name of the fleet. */
    display_name?:                   any;
    /** (Optional) Provide this to allow manage the company network configuration for the fleet. Fields documented below. */
    network?:                        any;
    /** (Optional) The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. Defaults to `true`. */
    optimize_for_end_user_location?: any;
    /** (Required) The VPC ID with connectivity to associated websites. */
    vpc_id:                          any;
    /** (Required) A list of subnet IDs used for X-ENI connections from Amazon WorkLink rendering containers. */
    subnet_ids:                      any;
    /** (Required) A list of security group IDs associated with access to the provided subnets. */
    security_group_ids:              any;
    /** (Required) The type of identity provider. */
    type:                            any;
    /** (Required) The SAML metadata document provided by the customer’s identity provider. */
    saml_metadata:                   any;
}