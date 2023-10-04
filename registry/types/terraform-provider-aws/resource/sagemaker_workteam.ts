export interface SagemakerWorkteam {
    resource: Resource[];
}

export interface Resource {
    sagemaker_workteam: SagemakerWorkteamClass;
}

export interface SagemakerWorkteamClass {
    /** (Required) A description of the work team. */
    description:                 any;
    /** (Required) The name of the Workteam (must be unique). */
    workforce_name:              any;
    /** (Required) The name of the workforce. */
    workteam_name:               any;
    /** (Required) A list of Member Definitions that contains objects that identify the workers that make up the work team. Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use `cognito_member_definition`. For workforces created using your own OIDC identity provider (IdP) use `oidc_member_definition`. Do not provide input for both of these parameters in a single request. see [Member Definition](#member-definition) details below. */
    member_definition:           any;
    /** (Optional) Configures notification of workers regarding available or expiring work items. see [Notification Configuration](#notification-configuration) details below. */
    notification_configuration?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
    /** (Optional) The Amazon Cognito user group that is part of the work team. See [Cognito Member Definition](#cognito-member-definition) details below. */
    cognito_member_definition?:  any;
    /** (Optional) A list user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. See [Cognito Member Definition](#oidc-member-definition) details below. */
    oidc_member_definition?:     any;
    /** (Required) An identifier for an application client. You must create the app client ID using Amazon Cognito. */
    client_id:                   any;
    /** (Required) An identifier for a user pool. The user pool must be in the same region as the service that you are calling. */
    user_pool:                   any;
    /** (Required) An identifier for a user group. */
    user_group:                  any;
    /** (Required) A list of comma separated strings that identifies user groups in your OIDC IdP. Each user group is made up of a group of private workers. */
    groups:                      any;
    /** (Required) The ARN for the SNS topic to which notifications should be published. */
    notification_topic_arn:      any;
}