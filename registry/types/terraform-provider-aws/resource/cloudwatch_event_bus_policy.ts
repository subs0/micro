export interface CloudwatchEventBusPolicy {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_event_bus_policy: CloudwatchEventBusPolicyClass;
}

export interface CloudwatchEventBusPolicyClass {
    /** (Required) The text of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy:          any;
    /** (Optional) The name of the event bus to set the permissions on. */
    event_bus_name?: any;
}