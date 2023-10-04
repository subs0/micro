export interface QuicksightFolderMembership {
    resource: Resource[];
}

export interface Resource {
    quicksight_folder_membership: QuicksightFolderMembershipClass;
}

export interface QuicksightFolderMembershipClass {
    /** (Required, Forces new resource) Identifier for the folder. */
    folder_id?:      any;
    /** (Required, Forces new resource) ID of the asset (the dashboard, analysis, or dataset). */
    member_id?:      any;
    /** (Required, Forces new resource) Type of the member. Valid values are `ANALYSIS`, `DASHBOARD`, and `DATASET`. */
    member_type?:    any;
    /** (Optional, Forces new resource) AWS account ID. */
    aws_account_id?: any;
}