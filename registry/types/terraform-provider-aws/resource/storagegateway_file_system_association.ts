export interface StoragegatewayFileSystemAssociation {
    resource: Resource[];
}

export interface Resource {
    storagegateway_file_system_association: StoragegatewayFileSystemAssociationClass;
}

export interface StoragegatewayFileSystemAssociationClass {
    /** (Required) The Amazon Resource Name (ARN) of the gateway. */
    gateway_arn:            any;
    /** (Required) The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with the FSx File Gateway. */
    location_arn:           any;
    /** (Required) The user name of the user credential that has permission to access the root share of the Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user group. */
    username:               any;
    /** (Required, sensitive) The password of the user credential. */
    password?:              any;
    /** (Optional) The Amazon Resource Name (ARN) of the storage used for the audit logs. */
    audit_destination_arn?: any;
    cache_attributes?:      CacheAttributes;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
}

export interface CacheAttributes {
    /** (Optional) Refreshes a file share's cache by using Time To Live (TTL). */
    cache_stale_timeout_in_seconds: any;
}