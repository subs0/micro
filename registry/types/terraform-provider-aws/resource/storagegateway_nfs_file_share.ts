export interface StoragegatewayNFSFileShare {
    resource: Resource[];
}

export interface Resource {
    storagegateway_nfs_file_share: StoragegatewayNFSFileShareClass;
}

export interface StoragegatewayNFSFileShareClass {
    /** (Required) The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. Set to `["0.0.0.0/0"]` to not limit access. Minimum 1 item. Maximum 100 items. */
    client_list:              any;
    /** (Required) Amazon Resource Name (ARN) of the file gateway. */
    gateway_arn:              any;
    /** (Required) The ARN of the backed storage used for storing file data. */
    location_arn:             any;
    /** (Optional) The DNS name of the VPC endpoint for S3 PrivateLink. */
    vpc_endpoint_dns_name?:   any;
    /** (Optional) The region of the S3 bucket used by the file share. Required when specifying `vpc_endpoint_dns_name`. */
    bucket_region?:           any;
    /** (Required) The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage. */
    role_arn:                 any;
    /** (Optional) The Amazon Resource Name (ARN) of the storage used for audit logs. */
    audit_destination_arn?:   any;
    /** (Optional) The default [storage class](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-DefaultStorageClass) for objects put into an Amazon S3 bucket by the file gateway. Defaults to `S3_STANDARD`. */
    default_storage_class?:   any;
    /** (Optional) Boolean value that enables guessing of the MIME type for uploaded objects based on file extensions. Defaults to `true`. */
    guess_mime_type_enabled?: any;
    /** (Optional) Boolean value if `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Defaults to `false`. */
    kms_encrypted?:           any;
    /** (Optional) Amazon Resource Name (ARN) for KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is true. */
    kms_key_arn?:             any;
    nfs_file_share_defaults?: NFSFileShareDefaults;
    cache_attributes?:        CacheAttributes;
    /** (Optional) Access Control List permission for S3 objects. Defaults to `private`. */
    object_acl?:              any;
    /** (Optional) Boolean to indicate write status of file share. File share does not accept writes if `true`. Defaults to `false`. */
    read_only?:               any;
    /** (Optional) Boolean who pays the cost of the request and the data download from the Amazon S3 bucket. Set this value to `true` if you want the requester to pay instead of the bucket owner. Defaults to `false`. */
    requester_pays?:          any;
    /** (Optional) Maps a user to anonymous user. Defaults to `RootSquash`. Valid values: `RootSquash` (only root is mapped to anonymous user), `NoSquash` (no one is mapped to anonymous user), `AllSquash` (everyone is mapped to anonymous user) */
    squash?:                  any;
    /** (Optional) The name of the file share. Must be set if an S3 prefix name is set in `location_arn`. */
    file_share_name?:         any;
    /** (Optional) The notification policy of the file share. For more information see the [AWS Documentation](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-NotificationPolicy). Default value is `{}`. */
    notification_policy?:     any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
}

export interface CacheAttributes {
    /** (Optional) Refreshes a file share's cache by using Time To Live (TTL). */
    cache_stale_timeout_in_seconds: any;
}

export interface NFSFileShareDefaults {
    /** (Optional) The Unix directory mode in the string form "nnnn". Defaults to `"0777"`. */
    directory_mode: any;
    /** (Optional) The Unix file mode in the string form "nnnn". Defaults to `"0666"`. */
    file_mode:      any;
    /** (Optional) The default group ID for the file share (unless the files have another group ID specified). Defaults to `65534` (`nfsnobody`). Valid values: `0` through `4294967294`. */
    group_id:       any;
    /** (Optional) The default owner ID for the file share (unless the files have another owner ID specified). Defaults to `65534` (`nfsnobody`). Valid values: `0` through `4294967294`. */
    owner_id:       any;
}