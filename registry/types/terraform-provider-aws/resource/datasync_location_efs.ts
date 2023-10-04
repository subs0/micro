export interface DatasyncLocationEFS {
    resource: Resource[];
}

export interface Resource {
    datasync_location_efs: DatasyncLocationEFSClass;
}

export interface DatasyncLocationEFSClass {
    /** (Optional) Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to access the Amazon EFS file system. */
    access_point_arn?:            any;
    /** (Required) Configuration block containing EC2 configurations for connecting to the EFS File System. */
    ec2_config:                   any;
    /** (Required) Amazon Resource Name (ARN) of EFS File System. */
    efs_file_system_arn:          any;
    /** (Optional)  Specifies an Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system. */
    file_system_access_role_arn?: any;
    /** (Optional) Specifies whether you want DataSync to use TLS encryption when transferring data to or from your Amazon EFS file system. Valid values are `NONE` and `TLS1_2`. */
    in_transit_encryption?:       any;
    /** (Optional) Subdirectory to perform actions as source or destination. Default `/`. */
    subdirectory?:                any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
    /** (Required) List of Amazon Resource Names (ARNs) of the EC2 Security Groups that are associated with the EFS Mount Target. */
    security_group_arns:          any;
    /** (Required) Amazon Resource Name (ARN) of the EC2 Subnet that is associated with the EFS Mount Target. */
    subnet_arn:                   any;
}