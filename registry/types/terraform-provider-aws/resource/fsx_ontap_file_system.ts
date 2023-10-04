export interface FsxOntapFileSystem {
    resource: Resource[];
}

export interface Resource {
    fsx_ontap_file_system: FsxOntapFileSystemClass;
}

export interface FsxOntapFileSystemClass {
    /** (Optional) The storage capacity (GiB) of the file system. Valid values between `1024` and `196608`. */
    storage_capacity?:                  any;
    /** (Required) A list of IDs for the subnets that the file system will be accessible from. Upto 2 subnets can be provided. */
    subnet_ids:                         any;
    /** (Required) The ID for a subnet. A subnet is a range of IP addresses in your virtual private cloud (VPC). */
    preferred_subnet_id:                any;
    /** (Optional) A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces. */
    security_group_ids?:                any;
    /** (Optional) The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone. */
    weekly_maintenance_start_time?:     any;
    /** (Optional) - The filesystem deployment type. Supports `MULTI_AZ_1` and `SINGLE_AZ_1`. */
    deployment_type?:                   any;
    /** (Optional) ARN for the KMS Key to encrypt the file system at rest, Defaults to an AWS managed KMS Key. */
    kms_key_id?:                        any;
    /** (Optional) The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days. */
    automatic_backup_retention_days?:   any;
    /** (Optional) A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. Requires `automatic_backup_retention_days` to be set. */
    daily_automatic_backup_start_time?: any;
    /** (Optional) The SSD IOPS configuration for the Amazon FSx for NetApp ONTAP file system. See [Disk Iops Configuration](#disk-iops-configuration) below. */
    disk_iops_configuration?:           any;
    /** (Optional) Specifies the IP address range in which the endpoints to access your file system will be created. By default, Amazon FSx selects an unused IP address range for you from the 198.19.* range. */
    endpoint_ip_address_range?:         any;
    /** (Optional) - The filesystem storage type. defaults to `SSD`. */
    storage_type?:                      any;
    /** (Optional) The ONTAP administrative password for the fsxadmin user that you can use to administer your file system using the ONTAP CLI and REST API. */
    fsx_admin_password?:                any;
    /** (Optional) Specifies the VPC route tables in which your file system's endpoints will be created. You should specify all VPC route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table. */
    route_table_ids?:                   any;
    /** (Optional) A map of tags to assign to the file system. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
    /** (Required) Sets the throughput capacity (in MBps) for the file system that you're creating. Valid values are `128`, `256`, `512`, `1024`, `2048`, and `4096`. */
    throughput_capacity:                any;
    /** (Optional) - The total number of SSD IOPS provisioned for the file system. */
    iops?:                              any;
    /** (Optional) - Specifies whether the number of IOPS for the file system is using the system. Valid values are `AUTOMATIC` and `USER_PROVISIONED`. Default value is `AUTOMATIC`. */
    mode?:                              any;
}