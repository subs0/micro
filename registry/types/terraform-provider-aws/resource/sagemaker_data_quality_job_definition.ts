export interface SagemakerDataQualityJobDefinition {
    resource: Resource[];
}

export interface Resource {
    sagemaker_data_quality_job_definition: SagemakerDataQualityJobDefinitionClass;
}

export interface SagemakerDataQualityJobDefinitionClass {
    data_quality_app_specification: DataQualityAppSpecification;
    data_quality_baseline_config?:  DataQualityBaselineConfig;
    data_quality_job_input:         DataQualityJobInput;
    data_quality_job_output_config: DataQualityJobOutputConfig;
    job_resources:                  JobResources;
    /** (Optional) The name of the data quality job definition. If omitted, Terraform will assign a random, unique name. */
    name?:                          any;
    network_config?:                NetworkConfig;
    /** (Required) The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf. */
    role_arn:                       any;
    stopping_condition?:            StoppingCondition;
    /** (Optional) A mapping of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
}

export interface DataQualityAppSpecification {
    /** (Optional) Sets the environment variables in the container that the monitoring job runs. A list of key value pairs. */
    environment?:                         any;
    /** (Required) The container image that the data quality monitoring job runs. */
    image_uri:                            any;
    /** (Optional) An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers. */
    post_analytics_processor_source_uri?: any;
    /** (Optional) An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers. */
    record_preprocessor_source_uri?:      any;
}

export interface DataQualityBaselineConfig {
    /** (Optional) The constraints resource for a monitoring job. Fields are documented below. */
    constraints_resource: any;
    /** (Optional) The statistics resource for a monitoring job. Fields are documented below. */
    statistics_resource:  any;
    /** (Required) A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. */
    s3_uri:               any;
}

export interface DataQualityJobInput {
    /** (Optional) Input object for the batch transform job. Fields are documented below. */
    batch_transform_input?:           any;
    /** (Optional) Input object for the endpoint. Fields are documented below. */
    endpoint_input?:                  any;
    /** (Required) The Amazon S3 location being used to capture the data. */
    data_captured_destination_s3_uri: any;
    /** (Required) The dataset format for your batch transform job. Fields are documented below. */
    dataset_format:                   any;
    /** (Optional) The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data. Defaults to `/opt/ml/processing/output`. */
    local_path?:                      any;
    /** (Optional) Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defaults to `FullyReplicated`. Valid values are `FullyReplicated` or `ShardedByS3Key` */
    s3_data_distribution_type?:       any;
    /** (Optional) Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.  Valid values are `Pipe` or `File` */
    s3_input_mode?:                   any;
    /** (Optional) The CSV dataset used in the monitoring job. Fields are documented below. */
    csv?:                             any;
    /** (Optional) The JSON dataset used in the monitoring job. Fields are documented below. */
    json?:                            any;
    /** (Optional) Indicates if the CSV data has a header. */
    header?:                          any;
    /** (Optional) Indicates if the file should be read as a json object per line. */
    line?:                            any;
    /** (Required) An endpoint in customer's account which has `data_capture_config` enabled. */
    endpoint_name:                    any;
}

export interface DataQualityJobOutputConfig {
    /** (Optional) The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. */
    kms_key_id?:        any;
    /** (Required) Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded. Fields are documented below. */
    monitoring_outputs: any;
    /** (Required) The Amazon S3 storage location where the results of a monitoring job are saved. Fields are documented below. */
    s3_output:          any;
    /** (Optional) The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data. Defaults to `/opt/ml/processing/output`. */
    local_path?:        any;
    /** (Optional) Whether to upload the results of the monitoring job continuously or after the job completes. Valid values are `Continuous` or `EndOfJob` */
    s3_upload_mode?:    any;
    /** (Required) A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. */
    s3_uri:             any;
}

export interface JobResources {
    /** (Required) The configuration for the cluster resources used to run the processing job. Fields are documented below. */
    cluster_config:     any;
    /** (Required) The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. */
    instance_count:     any;
    /** (Required) The ML compute instance type for the processing job. */
    instance_type:      any;
    /** (Optional) The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job. */
    volume_kms_key_id?: any;
    /** (Required) The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario. */
    volume_size_in_gb:  any;
}

export interface NetworkConfig {
    /** (Optional) Whether to encrypt all communications between the instances used for the monitoring jobs. Choose `true` to encrypt communications. Encryption provides greater security for distributed jobs, but the processing might take longer. */
    enable_inter_container_traffic_encryption: any;
    /** (Optional) Whether to allow inbound and outbound network calls to and from the containers used for the monitoring job. */
    enable_network_isolation:                  any;
    /** (Optional) Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. Fields are documented below. */
    vpc_config:                                any;
    /** (Required) The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the `subnets` field. */
    security_group_ids:                        any;
    /** (Required) The ID of the subnets in the VPC to which you want to connect your training job or model. */
    subnets:                                   any;
}

export interface StoppingCondition {
    /** (Required) The maximum runtime allowed in seconds. */
    max_runtime_in_seconds: any;
}