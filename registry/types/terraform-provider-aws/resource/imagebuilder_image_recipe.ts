export interface ImagebuilderImageRecipe {
    resource: Resource[];
}

export interface Resource {
    imagebuilder_image_recipe: ImagebuilderImageRecipeClass;
}

export interface ImagebuilderImageRecipeClass {
    component?:             Component;
    /** The image recipe uses this image as a base from which to build your customized image. The value can be the base image ARN or an AMI ID. */
    parent_image?:          any;
    /** The semantic version of the image recipe, which specifies the version in the following format, with numeric values in each position to indicate a specific version: major.minor.patch. For example: 1.0.0. */
    version?:               any;
    block_device_mapping?:  BlockDeviceMapping;
    /** Description of the image recipe. */
    description?:           any;
    systems_manager_agent?: SystemsManagerAgent;
    /** Key-value map of resource tags for the image recipe. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** The working directory to be used during build and test workflows. */
    working_directory?:     any;
    /** (Optional) Configuration block(s) for parameters to configure the component. Detailed below. */
    parameter?:             Parameter;
}

export interface BlockDeviceMapping {
    /** Name of the device. For example, `/dev/sda` or `/dev/xvdb`. */
    device_name:           any;
    /** Configuration block with Elastic Block Storage (EBS) block device mapping settings. Detailed below. */
    ebs:                   any;
    /** Set to `true` to remove a mapping from the parent image. */
    no_device:             any;
    /** Virtual device name. For example, `ephemeral0`. Instance store volumes are numbered starting from 0. */
    virtual_name:          any;
    /** Whether to delete the volume on termination. Defaults to unset, which is the value inherited from the parent image. */
    delete_on_termination: any;
    /** Whether to encrypt the volume. Defaults to unset, which is the value inherited from the parent image. */
    encrypted:             any;
    /** Number of Input/Output (I/O) operations per second to provision for an `io1` or `io2` volume. */
    iops:                  any;
    /** Amazon Resource Name (ARN) of the Key Management Service (KMS) Key for encryption. */
    kms_key_id:            any;
    /** Identifier of the EC2 Volume Snapshot. */
    snapshot_id:           any;
    /** For GP3 volumes only. The throughput in MiB/s that the volume supports. */
    throughput:            any;
    /** Size of the volume, in GiB. */
    volume_size:           any;
    /** Type of the volume. For example, `gp2` or `io2`. */
    volume_type:           any;
}

export interface Component {
    /** (Required) Amazon Resource Name (ARN) of the Image Builder Component to associate. */
    component_arn: any;
    /** (Optional) Configuration block(s) for parameters to configure the component. Detailed below. */
    parameter:     any;
}

export interface Parameter {
    /** The name of the component parameter. */
    name:  any;
    /** The value for the named component parameter. */
    value: any;
}

export interface SystemsManagerAgent {
    /** Whether to remove the Systems Manager Agent after the image has been built. Defaults to `false`. */
    uninstall_after_build: any;
}