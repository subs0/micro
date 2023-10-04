export interface StoragegatewayGateway {
    resource: Resource[];
}

export interface Resource {
    storagegateway_gateway: StoragegatewayGatewayClass;
}

export interface StoragegatewayGatewayClass {
    /** (Required) Name of the gateway. */
    gateway_name:                                 any;
    /** (Required) Time zone for the gateway. The time zone is of the format "GMT", "GMT-hr:mm", or "GMT+hr:mm". For example, `GMT-4:00` indicates the time is 4 hours behind GMT. The time zone is used, for example, for scheduling snapshots and your gateway's maintenance schedule. */
    gateway_timezone:                             any;
    /** (Optional) Gateway activation key during resource creation. Conflicts with `gateway_ip_address`. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html). */
    activation_key?:                              any;
    /** (Optional) The average download bandwidth rate limit in bits per second. This is supported for the `CACHED`, `STORED`, and `VTL` gateway types. */
    average_download_rate_limit_in_bits_per_sec?: any;
    /** (Optional) The average upload bandwidth rate limit in bits per second. This is supported for the `CACHED`, `STORED`, and `VTL` gateway types. */
    average_upload_rate_limit_in_bits_per_sec?:   any;
    /** (Optional) Gateway IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. Gateway must be accessible on port 80 from where Terraform is running. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html). */
    gateway_ip_address?:                          any;
    /** (Optional) Type of the gateway. The default value is `STORED`. Valid values: `CACHED`, `FILE_FSX_SMB`, `FILE_S3`, `STORED`, `VTL`. */
    gateway_type?:                                any;
    /** (Optional) VPC endpoint address to be used when activating your gateway. This should be used when your instance is in a private subnet. Requires HTTP access from client computer running terraform. More info on what ports are required by your VPC Endpoint Security group in [Activating a Gateway in a Virtual Private Cloud](https://docs.aws.amazon.com/storagegateway/latest/userguide/gateway-private-link.html). */
    gateway_vpc_endpoint?:                        any;
    /** (Optional) The Amazon Resource Name (ARN) of the Amazon CloudWatch log group to use to monitor and log events in the gateway. */
    cloudwatch_log_group_arn?:                    any;
    maintenance_start_time?:                      MaintenanceStartTime;
    /** (Optional) Type of medium changer to use for tape gateway. Terraform cannot detect drift of this argument. Valid values: `STK-L700`, `AWS-Gateway-VTL`, `IBM-03584L32-0402`. */
    medium_changer_type?:                         any;
    smb_active_directory_settings?:               SMBActiveDirectorySettings;
    /** (Optional) Guest password for Server Message Block (SMB) file shares. Only valid for `FILE_S3` and `FILE_FSX_SMB` gateway types. Must be set before creating `GuestAccess` authentication SMB file shares. Terraform can only detect drift of the existence of a guest password, not its actual value from the gateway. Terraform can however update the password with changing the argument. */
    smb_guest_password?:                          any;
    /** (Optional) Specifies the type of security strategy. Valid values are: `ClientSpecified`, `MandatorySigning`, and `MandatoryEncryption`. See [Setting a Security Level for Your Gateway](https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-gateway-file.html#security-strategy) for more information. */
    smb_security_strategy?:                       any;
    /** (Optional) Specifies whether the shares on this gateway appear when listing shares. */
    smb_file_share_visibility?:                   any;
    /** (Optional) Type of tape drive to use for tape gateway. Terraform cannot detect drift of this argument. Valid values: `IBM-ULT3580-TD5`. */
    tape_drive_type?:                             any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                        any;
}

export interface MaintenanceStartTime {
    /** (Optional) The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month and 28 represents the last day of the month. */
    day_of_month:   any;
    /** (Optional) The day of the week component of the maintenance start time week represented as an ordinal number from 0 to 6, where 0 represents Sunday and 6 Saturday. */
    day_of_week:    any;
    /** (Required) The hour component of the maintenance start time represented as _hh_, where _hh_ is the hour (00 to 23). The hour of the day is in the time zone of the gateway. */
    hour_of_day:    any;
    /** (Required) The minute component of the maintenance start time represented as _mm_, where _mm_ is the minute (00 to 59). The minute of the hour is in the time zone of the gateway. */
    minute_of_hour: any;
}

export interface SMBActiveDirectorySettings {
    /** (Required) The name of the domain that you want the gateway to join. */
    domain_name:         any;
    /** (Required) The password of the user who has permission to add the gateway to the Active Directory domain. */
    password:            any;
    /** (Required) The user name of user who has permission to add the gateway to the Active Directory domain. */
    username:            any;
    /** (Optional) Specifies the time in seconds, in which the JoinDomain operation must complete. The default is `20` seconds. */
    timeout_in_seconds:  any;
    /** (Optional) The organizational unit (OU) is a container in an Active Directory that can hold users, groups, */
    organizational_unit: any;
    /** (Optional) List of IPv4 addresses, NetBIOS names, or host names of your domain server. */
    domain_controllers:  any;
}