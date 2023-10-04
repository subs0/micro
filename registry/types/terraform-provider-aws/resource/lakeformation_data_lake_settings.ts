export interface LakeformationDataLakeSettings {
    resource: Resource[];
}

export interface Resource {
    lakeformation_data_lake_settings: LakeformationDataLakeSettingsClass;
}

export interface LakeformationDataLakeSettingsClass {
    create_database_default_permissions?: CreateEDefaultPermissions;
    create_table_default_permissions?:    CreateEDefaultPermissions;
    /** (Optional) Whether to allow Amazon EMR clusters to access data managed by Lake Formation. */
    allow_external_data_filtering?:       any;
    /** (Optional) A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering. */
    external_data_filtering_allow_list?:  any;
    /** (Optional) Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it. */
    authorized_session_tag_value_list?:   any;
}

export interface CreateEDefaultPermissions {
    /** (Optional) List of permissions that are granted to the principal. Valid values may include `ALL`, `SELECT`, `ALTER`, `DROP`, `DELETE`, `INSERT`, and `DESCRIBE`. For more details, see [Lake Formation Permissions Reference](https://docs.aws.amazon.com/lake-formation/latest/dg/lf-permissions-reference.html). */
    permissions: any;
    /** (Optional) Principal who is granted permissions. To enforce metadata and underlying data access control only by IAM on new databases and tables set `principal` to `IAM_ALLOWED_PRINCIPALS` and `permissions` to `["ALL"]`. */
    principal:   any;
}