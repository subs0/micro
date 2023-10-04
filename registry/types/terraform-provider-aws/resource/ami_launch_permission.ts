export interface AmiLaunchPermission {
    resource: Resource[];
}

export interface Resource {
    ami_launch_permission: AmiLaunchPermissionClass;
}

export interface AmiLaunchPermissionClass {
    /** (Optional) AWS account ID for the launch permission. */
    account_id?:              any;
    /** (Optional) Name of the group for the launch permission. Valid values: `"all"`. */
    group?:                   any;
    /** (Required) ID of the AMI. */
    image_id:                 any;
    /** (Optional) ARN of an organization for the launch permission. */
    organization_arn?:        any;
    /** (Optional) ARN of an organizational unit for the launch permission. */
    organizational_unit_arn?: any;
}