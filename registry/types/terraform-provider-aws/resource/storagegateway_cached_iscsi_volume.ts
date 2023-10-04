export interface StoragegatewayCachedIscsiVolume {
    resource: Resource[];
}

export interface Resource {
    storagegateway_cached_iscsi_volume: StoragegatewayCachedIscsiVolumeClass;
}

export interface StoragegatewayCachedIscsiVolumeClass {
    /** (Required) The Amazon Resource Name (ARN) of the gateway. */
    gateway_arn:          any;
    /** (Required) The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. */
    network_interface_id: any;
    /** (Required) The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway. */
    target_name:          any;
    /** (Required) The size of the volume in bytes. */
    volume_size_in_bytes: any;
    /** (Optional) The snapshot ID of the snapshot to restore as the new cached volumeE.g., `snap-1122aabb`. */
    snapshot_id?:         any;
    /** (Optional) The ARN for an existing volume. Specifying this ARN makes the new volume into an exact copy of the specified existing volume's latest recovery point. The `volume_size_in_bytes` value for this new volume must be equal to or larger than the size of the existing volume, in bytes. */
    source_volume_arn?:   any;
    /** (Optional) Set to `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. */
    kms_encrypted?:       any;
    /** (Optional) The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. Is required when `kms_encrypted` is set. */
    kms_key?:             any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
}