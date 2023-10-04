export interface IamGroupPolicyAttachment {
    resource: Resource[];
}

export interface Resource {
    iam_group_policy_attachment: IamGroupPolicyAttachmentClass;
}

export interface IamGroupPolicyAttachmentClass {
    "This resource supports the following arguments:"?: any;
}