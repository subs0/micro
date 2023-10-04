export interface StoragegatewaySMBFileShare {
    resource: Resource[];
}

export interface Resource {
    storagegateway_smb_file_share: StoragegatewaySMBFileShareClass;
}

export interface StoragegatewaySMBFileShareClass {
    /** (Required) Amazon Resource Name (ARN) of the file gateway. */
    gateway_arn:               any;
    /** (Required) The ARN of the backed storage used for storing file data. */
    location_arn:              any;
    /** (Optional) The DNS name of the VPC endpoint for S3 private link. */
    vpc_endpoint_dns_name?:    any;
    /** (Optional) The region of the S3 buck used by the file share. Required when specifying a `vpc_endpoint_dns_name`. */
    bucket_region?:            any;
    /** (Required) The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage. */
    role_arn:                  any;
    /** (Optional) A list of users in the Active Directory that have admin access to the file share. Only valid if `authentication` is set to `ActiveDirectory`. */
    admin_user_list?:          any;
    /** (Optional) The authentication method that users use to access the file share. Defaults to `ActiveDirectory`. Valid values: `ActiveDirectory`, `GuestAccess`. */
    authentication?:           any;
    /** (Optional) The Amazon Resource Name (ARN) of the CloudWatch Log Group used for the audit logs. */
    audit_destination_arn?:    any;
    /** (Optional) The default [storage class](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-DefaultStorageClass) for objects put into an Amazon S3 bucket by the file gateway. Defaults to `S3_STANDARD`. */
    default_storage_class?:    any;
    /** (Optional) The name of the file share. Must be set if an S3 prefix name is set in `location_arn`. */
    file_share_name?:          any;
    /** (Optional) Boolean value that enables guessing of the MIME type for uploaded objects based on file extensions. Defaults to `true`. */
    guess_mime_type_enabled?:  any;
    /** (Optional) A list of users in the Active Directory that are not allowed to access the file share. Only valid if `authentication` is set to `ActiveDirectory`. */
    invalid_user_list?:        any;
    /** (Optional) Boolean value if `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Defaults to `false`. */
    kms_encrypted?:            any;
    /** (Optional) Amazon Resource Name (ARN) for KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is true. */
    kms_key_arn?:              any;
    /** (Optional) Access Control List permission for S3 objects. Defaults to `private`. */
    object_acl?:               any;
    /** (Optional) Boolean to indicate Opportunistic lock (oplock) status. Defaults to `true`. */
    oplocks_enabled?:          any;
    cache_attributes?:         CacheAttributes;
    /** (Optional) Boolean to indicate write status of file share. File share does not accept writes if `true`. Defaults to `false`. */
    read_only?:                any;
    /** (Optional) Boolean who pays the cost of the request and the data download from the Amazon S3 bucket. Set this value to `true` if you want the requester to pay instead of the bucket owner. Defaults to `false`. */
    requester_pays?:           any;
    /** (Optional) Set this value to `true` to enable ACL (access control list) on the SMB fileshare. Set it to `false` to map file and directory permissions to the POSIX permissions. This setting applies only to `ActiveDirectory` authentication type. */
    smb_acl_enabled?:          any;
    /** (Optional) The case of an object name in an Amazon S3 bucket. For `ClientSpecified`, the client determines the case sensitivity. For `CaseSensitive`, the gateway determines the case sensitivity. The default value is `ClientSpecified`. */
    case_sensitivity?:         any;
    /** (Optional) A list of users in the Active Directory that are allowed to access the file share. If you need to specify an Active directory group, add '@' before the name of the group. It will be set on Allowed group in AWS console. Only valid if `authentication` is set to `ActiveDirectory`. */
    valid_user_list?:          any;
    /** (Optional) The files and folders on this share will only be visible to users with read access. Default value is `false`. */
    access_based_enumeration?: any;
    /** (Optional) The notification policy of the file share. For more information see the [AWS Documentation](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-NotificationPolicy). Default value is `{}`. */
    notification_policy?:      any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
}

export interface CacheAttributes {
    /** (Optional) Refreshes a file share's cache by using Time To Live (TTL). */
    cache_stale_timeout_in_seconds: any;
}