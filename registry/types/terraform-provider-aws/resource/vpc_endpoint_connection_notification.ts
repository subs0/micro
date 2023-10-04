export interface VpcEndpointConnectionNotification {
    resource: Resource[];
}

export interface Resource {
    vpc_endpoint_connection_notification: VpcEndpointConnectionNotificationClass;
}

export interface VpcEndpointConnectionNotificationClass {
    /** (Optional) The ID of the VPC Endpoint Service to receive notifications for. */
    vpc_endpoint_service_id?:    any;
    /** (Optional) The ID of the VPC Endpoint to receive notifications for. */
    vpc_endpoint_id?:            any;
    /** (Required) The ARN of the SNS topic for the notifications. */
    connection_notification_arn: any;
    /** (Required) One or more endpoint [events](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html#API_CreateVpcEndpointConnectionNotification_RequestParameters) for which to receive notifications. */
    connection_events:           any;
}