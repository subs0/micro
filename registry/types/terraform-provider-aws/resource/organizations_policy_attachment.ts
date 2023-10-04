export interface OrganizationsPolicyAttachment {
    resource: Resource[];
}

export interface Resource {
    organizations_policy_attachment: OrganizationsPolicyAttachmentClass;
}

export interface OrganizationsPolicyAttachmentClass {
    /** (Required) The unique identifier (ID) of the policy that you want to attach to the target. */
    policy_id:     any;
    /** (Required) The unique identifier (ID) of the root, organizational unit, or account number that you want to attach the policy to. */
    target_id:     any;
    /** (Optional) If set to `true`, destroy will **not** detach the policy and instead just remove the resource from state. This can be useful in situations where the attachment must be preserved to meet the AWS minimum requirement of 1 attached policy. */
    skip_destroy?: any;
}