export interface QuicksightGroup {
    resource: Resource[];
}

export interface Resource {
    quicksight_group: QuicksightGroupClass;
}

export interface QuicksightGroupClass {
    /** (Required) A name for the group. */
    group_name:      any;
    /** (Optional) The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account. */
    aws_account_id?: any;
    /** (Optional) A description for the group. */
    description?:    any;
    /** (Optional) The namespace. Currently, you should set this to `default`. */
    namespace?:      any;
}