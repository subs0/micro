export interface StoragegatewayStoredIscsiVolume {
    resource: Resource[];
}

export interface Resource {
    storagegateway_stored_iscsi_volume: StoragegatewayStoredIscsiVolumeClass;
}

export interface StoragegatewayStoredIscsiVolumeClass {
    /** (Required) The Amazon Resource Name (ARN) of the gateway. */
    gateway_arn:            any;
    /** (Required) The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. */
    network_interface_id:   any;
    /** (Required) The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway. */
    target_name:            any;
    /** (Required) The unique identifier for the gateway local disk that is configured as a stored volume. */
    disk_id:                any;
    /** (Required) Specify this field as `true` if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume. */
    preserve_existing_data: any;
    /** (Optional) The snapshot ID of the snapshot to restore as the new stored volumeE.g., `snap-1122aabb`. */
    snapshot_id?:           any;
    /** (Optional) `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Optional. */
    kms_encrypted?:         any;
    /** (Optional) The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is `true`. */
    kms_key?:               any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
}