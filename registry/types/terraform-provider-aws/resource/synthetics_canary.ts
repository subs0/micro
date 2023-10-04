export interface SyntheticsCanary {
    resource: Resource[];
}

export interface Resource {
    synthetics_canary: SyntheticsCanaryClass;
}

export interface SyntheticsCanaryClass {
    /** (Required) Location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary. */
    artifact_s3_location:      any;
    /** (Required) ARN of the IAM role to be used to run the canary. see [AWS Docs](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateCanary.html#API_CreateCanary_RequestSyntax) for permissions needs for IAM Role. */
    execution_role_arn:        any;
    /** (Required) Entry point to use for the source code when running the canary. This value must end with the string `.handler` . */
    handler:                   any;
    /** (Required) Name for this canary. Has a maximum length of 21 characters. Valid characters are lowercase alphanumeric, hyphen, or underscore. */
    name:                      any;
    /** (Required) Runtime version to use for the canary. Versions change often so consult the [Amazon CloudWatch documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html) for the latest valid versions. Values include `syn-python-selenium-1.0`, `syn-nodejs-puppeteer-3.0`, `syn-nodejs-2.2`, `syn-nodejs-2.1`, `syn-nodejs-2.0`, and `syn-1.0`. */
    runtime_version:           any;
    schedule:                  Schedule;
    /** (Optional)  Specifies whether to also delete the Lambda functions and layers used by this canary. The default is `false`. */
    delete_lambda?:            any;
    vpc_config?:               VpcConfig;
    /** (Optional) Number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days. */
    failure_retention_period?: any;
    run_config?:               RunConfig;
    /** (Optional) Full bucket name which is used if your canary script is located in S3. The bucket must already exist. **Conflicts with `zip_file`.** */
    s3_bucket?:                any;
    /** (Optional) S3 key of your script. **Conflicts with `zip_file`.** */
    s3_key?:                   any;
    /** (Optional) S3 version ID of your script. **Conflicts with `zip_file`.** */
    s3_version?:               any;
    /** (Optional) Whether to run or stop the canary. */
    start_canary?:             any;
    /** (Optional) Number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days. */
    success_retention_period?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    artifact_config?:          ArtifactConfig;
    /** (Optional) ZIP file that contains the script, if you input your canary script directly into the canary instead of referring to an S3 location. It can be up to 225KB. **Conflicts with `s3_bucket`, `s3_key`, and `s3_version`.** */
    zip_file?:                 any;
    /** (Optional) Configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. See [S3 Encryption](#s3_encryption). */
    s3_encryption?:            S3Encryption;
}

export interface ArtifactConfig {
    /** (Optional) Configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. See [S3 Encryption](#s3_encryption). */
    s3_encryption: any;
}

export interface RunConfig {
    /** (Optional) Number of seconds the canary is allowed to run before it must stop. If you omit this field, the frequency of the canary is used, up to a maximum of 840 (14 minutes). */
    timeout_in_seconds:    any;
    /** (Optional) Maximum amount of memory available to the canary while it is running, in MB. The value you specify must be a multiple of 64. */
    memory_in_mb:          any;
    /** (Optional) Whether this canary is to use active AWS X-Ray tracing when it runs. You can enable active tracing only for canaries that use version syn-nodejs-2.0 or later for their canary runtime. */
    active_tracing:        any;
    /** (Optional) Map of environment variables that are accessible from the canary during execution. Please see [AWS Docs](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime) for variables reserved for Lambda. */
    environment_variables: any;
}

export interface S3Encryption {
    /** (Optional) The encryption method to use for artifacts created by this canary. Valid values are: `SSE_S3` and `SSE_KMS`. */
    encryption_mode: any;
    /** (Optional) The ARN of the customer-managed KMS key to use, if you specify `SSE_KMS` for `encryption_mode`. */
    kms_key_arn:     any;
}

export interface Schedule {
    /** (Required) Rate expression or cron expression that defines how often the canary is to run. For rate expression, the syntax is `rate(number unit)`. _unit_ can be `minute`, `minutes`, or `hour`. For cron expression, the syntax is `cron(expression)`. For more information about the syntax for cron expressions, see [Scheduling canary runs using cron](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html). */
    expression:           any;
    /** (Optional) Duration in seconds, for the canary to continue making regular runs according to the schedule in the Expression value. */
    duration_in_seconds?: any;
}

export interface VpcConfig {
    /** (Required) IDs of the subnets where this canary is to run. */
    subnet_ids:         any;
    /** (Required) IDs of the security groups for this canary. */
    security_group_ids: any;
}