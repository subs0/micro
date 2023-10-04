export interface SnsPlatformApplication {
    resource: Resource[];
}

export interface Resource {
    sns_platform_application: SnsPlatformApplicationClass;
}

export interface SnsPlatformApplicationClass {
    /** (Required) The friendly name for the SNS platform application */
    name:                              any;
    /** (Required) The platform that the app is registered with. See [Platform][1] for supported platforms. */
    platform:                          any;
    /** (Required) Application Platform credential. See [Credential][1] for type of credential required for platform. The value of this attribute when stored into the Terraform state is only a hash of the real value, so therefore it is not practical to use this as an attribute for other resources. */
    platform_credential:               any;
    /** (Optional) The ARN of the SNS Topic triggered when a delivery to any of the platform endpoints associated with your platform application encounters a permanent failure. */
    event_delivery_failure_topic_arn?: any;
    /** (Optional) The ARN of the SNS Topic triggered when a new platform endpoint is added to your platform application. */
    event_endpoint_created_topic_arn?: any;
    /** (Optional) The ARN of the SNS Topic triggered when an existing platform endpoint is deleted from your platform application. */
    event_endpoint_deleted_topic_arn?: any;
    /** (Optional) The ARN of the SNS Topic triggered when an existing platform endpoint is changed from your platform application. */
    event_endpoint_updated_topic_arn?: any;
    /** (Optional) The IAM role ARN permitted to receive failure feedback for this application and give SNS write access to use CloudWatch logs on your behalf. */
    failure_feedback_role_arn?:        any;
    /** (Optional) Application Platform principal. See [Principal][2] for type of principal required for platform. The value of this attribute when stored into the Terraform state is only a hash of the real value, so therefore it is not practical to use this as an attribute for other resources. */
    platform_principal?:               any;
    /** (Optional) The IAM role ARN permitted to receive success feedback for this application and give SNS write access to use CloudWatch logs on your behalf. */
    success_feedback_role_arn?:        any;
    /** (Optional) The sample rate percentage (0-100) of successfully delivered messages. */
    success_feedback_sample_rate?:     any;
    /** (Required) The identifier that's assigned to your Apple developer account team. Must be 10 alphanumeric characters. */
    apple_platform_team_id:            any;
    /** (Required) The bundle identifier that's assigned to your iOS app. May only include alphanumeric characters, hyphens (-), and periods (.). */
    apple_platform_bundle_id:          any;
}