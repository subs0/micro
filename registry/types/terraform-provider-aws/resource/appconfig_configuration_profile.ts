export interface AppconfigConfigurationProfile {
    resource: Resource[];
}

export interface Resource {
    appconfig_configuration_profile: AppconfigConfigurationProfileClass;
}

export interface AppconfigConfigurationProfileClass {
    /** (Required, Forces new resource) Application ID. Must be between 4 and 7 characters in length. */
    application_id?:     any;
    /** (Required, Forces new resource) URI to locate the configuration. You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object. For the hosted configuration store, specify `hosted`. For an SSM document, specify either the document name in the format `ssm-document://<Document_name>` or the ARN. For a parameter, specify either the parameter name in the format `ssm-parameter://<Parameter_name>` or the ARN. For an Amazon S3 object, specify the URI in the following format: `s3://<bucket>/<objectKey>`. */
    location_uri?:       any;
    /** (Required) Name for the configuration profile. Must be between 1 and 64 characters in length. */
    name:                any;
    /** (Optional) Description of the configuration profile. Can be at most 1024 characters. */
    description?:        any;
    /** (Optional) ARN of an IAM role with permission to access the configuration at the specified `location_uri`. A retrieval role ARN is not required for configurations stored in the AWS AppConfig `hosted` configuration store. It is required for all other sources that store your configuration. */
    retrieval_role_arn?: any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Optional) Type of validator. Valid values: `JSON_SCHEMA` and `LAMBDA`. */
    type?:               any;
    /** (Optional) Set of methods for validating the configuration. Maximum of 2. See [Validator](#validator) below for more details. */
    validator?:          any;
    /** (Optional, Required when `type` is `LAMBDA`) Either the JSON Schema content or the ARN of an AWS Lambda function. */
    content?:            any;
}