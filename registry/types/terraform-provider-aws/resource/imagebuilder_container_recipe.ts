export interface ImagebuilderContainerRecipe {
    resource: Resource[];
}

export interface Resource {
    imagebuilder_container_recipe: ImagebuilderContainerRecipeClass;
}

export interface ImagebuilderContainerRecipeClass {
    component:                 Component;
    /** (Required) The type of the container to create. Valid values: `DOCKER`. */
    container_type:            any;
    /** (Optional) The description of the container recipe. */
    description?:              any;
    /** (Optional) The Dockerfile template used to build the image as an inline data blob. */
    dockerfile_template_data?: any;
    /** (Optional) The Amazon S3 URI for the Dockerfile that will be used to build the container image. */
    dockerfile_template_uri?:  any;
    instance_configuration?:   InstanceConfiguration;
    /** (Optional) Specifies the operating system platform when you use a custom base image. */
    platform_override?:        any;
    /** (Optional) Key-value map of resource tags for the container recipe. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    /** (Optional) The working directory to be used during build and test workflows. */
    working_directory?:        any;
    /** (Optional) Configuration block(s) for parameters to configure the component. Detailed below. */
    parameter?:                Parameter;
    /** (Required) The name of the container repository where the output container image is stored. This name is prefixed by the repository location. */
    repository_name:           any;
    /** (Required) The service in which this image is registered. Valid values: `ECR`. */
    service:                   any;
    /** (Optional) Configuration block(s) with block device mappings for the container recipe. Detailed below. */
    block_device_mapping?:     BlockDeviceMapping;
}

export interface BlockDeviceMapping {
    /** (Optional) Name of the device. For example, `/dev/sda` or `/dev/xvdb`. */
    device_name:           any;
    /** (Optional) Configuration block with Elastic Block Storage (EBS) block device mapping settings. Detailed below. */
    ebs:                   any;
    /** (Optional) Set to `true` to remove a mapping from the parent image. */
    no_device:             any;
    /** (Optional) Virtual device name. For example, `ephemeral0`. Instance store volumes are numbered starting from 0. */
    virtual_name:          any;
    /** (Optional) Whether to delete the volume on termination. Defaults to unset, which is the value inherited from the parent image. */
    delete_on_termination: any;
    /** (Optional) Whether to encrypt the volume. Defaults to unset, which is the value inherited from the parent image. */
    encrypted:             any;
    /** (Optional) Number of Input/Output (I/O) operations per second to provision for an `io1` or `io2` volume. */
    iops:                  any;
    /** (Optional) Amazon Resource Name (ARN) of the Key Management Service (KMS) Key for encryption. */
    kms_key_id:            any;
    /** (Optional) Identifier of the EC2 Volume Snapshot. */
    snapshot_id:           any;
    /** (Optional) For GP3 volumes only. The throughput in MiB/s that the volume supports. */
    throughput:            any;
    /** (Optional) Size of the volume, in GiB. */
    volume_size:           any;
    /** (Optional) Type of the volume. For example, `gp2` or `io2`. */
    volume_type:           any;
}

export interface Component {
    /** (Required) Amazon Resource Name (ARN) of the Image Builder Component to associate. */
    component_arn: any;
    /** (Optional) Configuration block(s) for parameters to configure the component. Detailed below. */
    parameter?:    any;
}

export interface InstanceConfiguration {
    /** (Optional) Configuration block(s) with block device mappings for the container recipe. Detailed below. */
    block_device_mapping: any;
    /** (Optional) The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image. */
    image:                any;
}

export interface Parameter {
    /** (Required) The name of the component parameter. */
    name:  any;
    /** (Required) The value for the named component parameter. */
    value: any;
}