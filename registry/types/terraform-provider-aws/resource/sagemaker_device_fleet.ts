export interface SagemakerDeviceFleet {
    resource: Resource[];
}

export interface Resource {
    sagemaker_device_fleet: SagemakerDeviceFleetClass;
}

export interface SagemakerDeviceFleetClass {
    /** (Required) The name of the Device Fleet (must be unique). */
    device_fleet_name:      any;
    /** (Required) The Amazon Resource Name (ARN) that has access to AWS Internet of Things (IoT). */
    role_arn:               any;
    /** (Required) Specifies details about the repository. see [Output Config](#output-config) details below. */
    output_config:          any;
    /** (Optional) A description of the fleet. */
    description?:           any;
    /** (Optional) Whether to create an AWS IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-{DeviceFleetName}". */
    enable_iot_role_alias?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Required) The Amazon Simple Storage (S3) bucker URI. */
    s3_output_location:     any;
    /** (Optional) The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume after compilation job. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. */
    kms_key_id?:            any;
}