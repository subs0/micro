export interface Ami {
    resource: Resource[];
}

export interface Resource {
    ami: AmiClass;
}

export interface AmiClass {
    /** (Required) Region-unique name for the AMI. */
    name:                    any;
    /** (Optional) Boot mode of the AMI. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the Amazon Elastic Compute Cloud User Guide. */
    boot_mode?:              any;
    /** (Optional) Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`) */
    deprecation_time?:       any;
    /** (Optional) Longer, human-readable description for the AMI. */
    description?:            any;
    /** (Optional) Whether enhanced networking with ENA is enabled. Defaults to `false`. */
    ena_support?:            any;
    /** (Optional) Name of the root device (for example, `/dev/sda1`, or `/dev/xvda`). */
    root_device_name?:       any;
    /** (Optional) Keyword to choose what virtualization mode created instances */
    virtualization_type?:    any;
    /** (Optional) Machine architecture for created instances. Defaults to "x86_64". */
    architecture?:           any;
    /** (Optional) Nested block describing an EBS block device that should be */
    ebs_block_device?:       any;
    /** (Optional) Nested block describing an ephemeral block device that */
    ephemeral_block_device?: any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
    /** (Optional) If the image is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the Amazon Elastic Compute Cloud User Guide. */
    tpm_support?:            any;
    /** (Optional) If EC2 instances started from this image should require the use of the Instance Metadata Service V2 (IMDSv2), set this argument to `v2.0`. For more information, see [Configure instance metadata options for new instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration). */
    imds_support?:           any;
    /** (Required) Path to an S3 object containing an image manifest, e.g., created */
    image_location:          any;
    /** (Required) ID of the kernel image (AKI) that will be used as the paravirtual */
    kernel_id:               any;
    /** (Optional) ID of an initrd image (ARI) that will be used when booting the */
    ramdisk_id?:             any;
    /** (Optional) When set to "simple" (the default), enables enhanced networking */
    sriov_net_support?:      any;
    /** (Required) Path at which the device is exposed to created instances. */
    device_name:             any;
    /** (Optional) Boolean controlling whether the EBS volumes created to */
    delete_on_termination?:  any;
    /** (Optional) Boolean controlling whether the created EBS volumes will be encrypted. Can't be used with `snapshot_id`. */
    encrypted?:              any;
    /** (Required only when `volume_type` is `io1` or `io2`) Number of I/O operations per second the */
    iops?:                   any;
    /** (Optional) ID of an EBS snapshot that will be used to initialize the created */
    snapshot_id?:            any;
    /** (Optional) Throughput that the EBS volume supports, in MiB/s. Only valid for `volume_type` of `gp3`. */
    throughput?:             any;
    /** (Required unless `snapshot_id` is set) Size of created volumes in GiB. */
    volume_size?:            any;
    /** (Optional) Type of EBS volume to create. Can be `standard`, `gp2`, `gp3`, `io1`, `io2`, `sc1` or `st1` (Default: `standard`). */
    volume_type?:            any;
    /** (Optional) ARN of the Outpost on which the snapshot is stored. */
    outpost_arn?:            any;
    /** (Required) Name for the ephemeral device, of the form "ephemeralN" where */
    virtual_name:            any;
}