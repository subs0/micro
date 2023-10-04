export interface IamUserPolicyAttachment {
    resource: Resource[];
}

export interface Resource {
    iam_user_policy_attachment: IamUserPolicyAttachmentClass;
}

export interface IamUserPolicyAttachmentClass {
    "This resource supports the following arguments:"?: any;
}