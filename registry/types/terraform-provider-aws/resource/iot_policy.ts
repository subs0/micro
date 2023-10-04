export interface IotPolicy {
    resource: Resource[];
}

export interface Resource {
    iot_policy: IotPolicyClass;
}

export interface IotPolicyClass {
    /** (Required) The name of the policy. */
    name:   any;
    /** (Required) The policy document. This is a JSON formatted string. Use the [IoT Developer Guide](http://docs.aws.amazon.com/iot/latest/developerguide/iot-policies.html) for more information on IoT Policies. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy: any;
}