export interface IotPolicyAttachment {
    resource: Resource[];
}

export interface Resource {
    iot_policy_attachment: IotPolicyAttachmentClass;
}

export interface IotPolicyAttachmentClass {
    /** (Required) The name of the policy to attach. */
    policy: any;
    /** (Required) The identity to which the policy is attached. */
    target: any;
}