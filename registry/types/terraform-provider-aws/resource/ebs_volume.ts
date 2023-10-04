export interface EbsVolume {
    resource: Resource[];
}

export interface Resource {
    ebs_volume: EbsVolumeClass;
}

export interface EbsVolumeClass {
    /** (Required) The AZ where the EBS volume will exist. */
    availability_zone:     any;
    /** (Optional) If true, the disk will be encrypted. */
    encrypted?:            any;
    /** (Optional) If true, snapshot will be created before volume deletion. Any tags on the volume will be migrated to the snapshot. By default set to false */
    final_snapshot?:       any;
    /** (Optional) The amount of IOPS to provision for the disk. Only valid for `type` of `io1`, `io2` or `gp3`. */
    iops?:                 any;
    /** (Optional) Specifies whether to enable Amazon EBS Multi-Attach. Multi-Attach is supported on `io1` and `io2` volumes. */
    multi_attach_enabled?: any;
    /** (Optional) The size of the drive in GiBs. */
    size?:                 any;
    /** (Optional) The Amazon Resource Name (ARN) of the Outpost. */
    outpost_arn?:          any;
    /** (Optional) The type of EBS volume. Can be `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1` or `st1` (Default: `gp2`). */
    type?:                 any;
    /** (Optional) The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true. Note: Terraform must be running with credentials which have the `GenerateDataKeyWithoutPlaintext` permission on the specified KMS key as required by the [EBS KMS CMK volume provisioning process](https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html#ebs-cmk) to prevent a volume from being created and almost immediately deleted. */
    kms_key_id?:           any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                 any;
    /** (Optional) The throughput that the volume supports, in MiB/s. Only valid for `type` of `gp3`. */
    throughput?:           any;
}