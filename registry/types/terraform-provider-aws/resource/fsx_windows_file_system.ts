export interface FsxWindowsFileSystem {
    resource: Resource[];
}

export interface Resource {
    fsx_windows_file_system: FsxWindowsFileSystemClass;
}

export interface FsxWindowsFileSystemClass {
    /** (Required) A list of IDs for the subnets that the file system will be accessible from. To specify more than a single subnet set `deployment_type` to `MULTI_AZ_1`. */
    subnet_ids:                              any;
    /** (Required) Throughput (megabytes per second) of the file system in power of 2 increments. Minimum of `8` and maximum of `2048`. */
    throughput_capacity:                     any;
    /** (Optional) The ID for an existing Microsoft Active Directory instance that the file system should join when it's created. Cannot be specified with `self_managed_active_directory`. */
    active_directory_id?:                    any;
    /** (Optional) An array DNS alias names that you want to associate with the Amazon FSx file system.  For more information, see [Working with DNS Aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html) */
    aliases?:                                any;
    /** (Optional) The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system. See [Audit Log Configuration](#audit-log-configuration) below. */
    audit_log_configuration?:                any;
    /** (Optional) The number of days to retain automatic backups. Minimum of `0` and maximum of `90`. Defaults to `7`. Set to `0` to disable. */
    automatic_backup_retention_days?:        any;
    /** (Optional) The ID of the source backup to create the filesystem from. */
    backup_id?:                              any;
    /** (Optional) A boolean flag indicating whether tags on the file system should be copied to backups. Defaults to `false`. */
    copy_tags_to_backups?:                   any;
    /** (Optional) The preferred time (in `HH:MM` format) to take daily automatic backups, in the UTC time zone. */
    daily_automatic_backup_start_time?:      any;
    /** (Optional) Specifies the file system deployment type, valid values are `MULTI_AZ_1`, `SINGLE_AZ_1` and `SINGLE_AZ_2`. Default value is `SINGLE_AZ_1`. */
    deployment_type?:                        any;
    /** (Optional) The SSD IOPS configuration for the Amazon FSx for Windows File Server file system. See [Disk Iops Configuration](#disk-iops-configuration) below. */
    disk_iops_configuration?:                any;
    /** (Optional) ARN for the KMS Key to encrypt the file system at rest. Defaults to an AWS managed KMS Key. */
    kms_key_id?:                             any;
    /** (Optional) Specifies the subnet in which you want the preferred file server to be located. Required for when deployment type is `MULTI_AZ_1`. */
    preferred_subnet_id?:                    any;
    /** (Optional) A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces. */
    security_group_ids?:                     any;
    /** (Optional) Configuration block that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. Cannot be specified with `active_directory_id`. See [Self-Managed Active Directory](#self-managed-active-directory) below. */
    self_managed_active_directory?:          any;
    /** (Optional) When enabled, will skip the default final backup taken when the file system is deleted. This configuration must be applied separately before attempting to delete the resource to have the desired behavior. Defaults to `false`. */
    skip_final_backup?:                      any;
    /** (Optional) A map of tags to assign to the file system. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                   any;
    /** (Optional) Storage capacity (GiB) of the file system. Minimum of 32 and maximum of 65536. If the storage type is set to `HDD` the minimum value is 2000. Required when not creating filesystem for a backup. */
    storage_capacity?:                       any;
    /** (Optional) Specifies the storage type, Valid values are `SSD` and `HDD`. `HDD` is supported on `SINGLE_AZ_2` and `MULTI_AZ_1` Windows file system deployment types. Default value is `SSD`. */
    storage_type?:                           any;
    /** (Optional) The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone. */
    weekly_maintenance_start_time?:          any;
    /** (Optional) - The total number of SSD IOPS provisioned for the file system. */
    iops?:                                   any;
    /** (Optional) - Specifies whether the number of IOPS for the file system is using the system. Valid values are `AUTOMATIC` and `USER_PROVISIONED`. Default value is `AUTOMATIC`. */
    mode?:                                   any;
    /** (Required) A list of up to two IP addresses of DNS servers or domain controllers in the self-managed AD directory. The IP addresses need to be either in the same VPC CIDR range as the file system or in the private IP version 4 (IPv4) address ranges as specified in [RFC 1918](https://tools.ietf.org/html/rfc1918). */
    dns_ips:                                 any;
    /** (Required) The fully qualified domain name of the self-managed AD directory. For example, `corp.example.com`. */
    domain_name:                             any;
    /** (Required) The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. */
    password:                                any;
    /** (Required) The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. */
    username:                                any;
    /** (Optional) The name of the domain group whose members are granted administrative privileges for the file system. Administrative privileges include taking ownership of files and folders, and setting audit controls (audit ACLs) on files and folders. The group that you specify must already exist in your domain. Defaults to `Domain Admins`. */
    file_system_administrators_group?:       any;
    /** (Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory that the Windows File Server instance will join. For example, `OU=FSx,DC=yourdomain,DC=corp,DC=com`. Only accepts OU as the direct parent of the file system. If none is provided, the FSx file system is created in the default location of your self-managed AD directory. To learn more, see [RFC 2253](https://tools.ietf.org/html/rfc2253). */
    organizational_unit_distinguished_name?: any;
    /** (Optional) The Amazon Resource Name (ARN) for the destination of the audit logs. The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis Data Firehose delivery stream ARN. Can be specified when `file_access_audit_log_level` and `file_share_access_audit_log_level` are not set to `DISABLED`. The name of the Amazon CloudWatch Logs log group must begin with the `/aws/fsx` prefix. The name of the Amazon Kinesis Data Firehouse delivery stream must begin with the `aws-fsx` prefix. If you do not provide a destination in `audit_log_destionation`, Amazon FSx will create and use a log stream in the CloudWatch Logs /aws/fsx/windows log group. */
    audit_log_destination?:                  any;
    /** (Optional) Sets which attempt type is logged by Amazon FSx for file and folder accesses. Valid values are `SUCCESS_ONLY`, `FAILURE_ONLY`, `SUCCESS_AND_FAILURE`, and `DISABLED`. Default value is `DISABLED`. */
    file_access_audit_log_level?:            any;
    /** (Optional) Sets which attempt type is logged by Amazon FSx for file share accesses. Valid values are `SUCCESS_ONLY`, `FAILURE_ONLY`, `SUCCESS_AND_FAILURE`, and `DISABLED`. Default value is `DISABLED`. */
    file_share_access_audit_log_level?:      any;
}