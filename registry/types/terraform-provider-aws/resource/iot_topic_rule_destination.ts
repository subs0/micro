export interface IotTopicRuleDestination {
    resource: Resource[];
}

export interface Resource {
    iot_topic_rule_destination: IotTopicRuleDestinationClass;
}

export interface IotTopicRuleDestinationClass {
    /** (Optional) Whether or not to enable the destination. Default: `true`. */
    enabled?:          any;
    /** (Required) Configuration of the virtual private cloud (VPC) connection. For more info, see the [AWS documentation](https://docs.aws.amazon.com/iot/latest/developerguide/vpc-rule-action.html). */
    vpc_configuration: any;
    /** (Required) The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs). */
    role_arn:          any;
    /** (Optional) The security groups of the VPC destination. */
    security_groups?:  any;
    /** (Required) The subnet IDs of the VPC destination. */
    subnet_ids:        any;
    /** (Required) The ID of the VPC. */
    vpc_id:            any;
}