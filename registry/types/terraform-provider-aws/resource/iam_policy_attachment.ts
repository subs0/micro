export interface IamPolicyAttachment {
    resource: Resource[];
}

export interface Resource {
    iam_policy_attachment: IamPolicyAttachmentClass;
}

export interface IamPolicyAttachmentClass {
    "This resource supports the following arguments:"?: any;
}