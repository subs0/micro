export interface IamRolePolicyAttachment {
    resource: Resource[];
}

export interface Resource {
    iam_role_policy_attachment: IamRolePolicyAttachmentClass;
}

export interface IamRolePolicyAttachmentClass {
    "This resource supports the following arguments:"?: any;
}