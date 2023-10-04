export interface QuicksightIamPolicyAssignment {
    resource: Resource[];
}

export interface Resource {
    quicksight_iam_policy_assignment: QuicksightIamPolicyAssignmentClass;
}

export interface QuicksightIamPolicyAssignmentClass {
    /** (Required) Name of the assignment. */
    assignment_name:   any;
    /** (Required) Status of the assignment. Valid values are `ENABLED`, `DISABLED`, and `DRAFT`. */
    assignment_status: any;
    /** (Optional) AWS account ID. */
    aws_account_id?:   any;
    identities?:       Identities;
    /** (Optional) Namespace that contains the assignment. Defaults to `default`. */
    namespace?:        any;
    /** (Optional) ARN of the IAM policy to apply to the Amazon QuickSight users and groups specified in this assignment. */
    policy_arn?:       any;
}

export interface Identities {
    /** (Optional) Array of Quicksight group names to assign the policy to. */
    groups: any;
    /** (Optional) Array of Quicksight user names to assign the policy to. */
    user:   any;
}