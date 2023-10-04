export interface ConfigConfigurationRecorder {
    resource: Resource[];
}

export interface Resource {
    config_configuration_recorder: ConfigConfigurationRecorderClass;
}

export interface ConfigConfigurationRecorderClass {
    /** (Optional) The name of the recorder. Defaults to `default`. Changing it recreates the resource. */
    name?:                          any;
    /** (Required) Amazon Resource Name (ARN) of the IAM role. Used to make read or write requests to the delivery channel and to describe the AWS resources associated with the account. See [AWS Docs](http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) for more details. */
    role_arn:                       any;
    /** (Optional) Recording group - see below. */
    recording_group?:               any;
    /** (Optional) Specifies whether AWS Config records configuration changes for every supported type of regional resource (which includes any new type that will become supported in the future). Conflicts with `resource_types`. Defaults to `true`. */
    all_supported?:                 any;
    /** (Optional) An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.To use this option, you must set the useOnly field of RecordingStrategy to `EXCLUSION_BY_RESOURCE_TYPES` Requires `all_supported = false`. Conflicts with `resource_types`. */
    exclusion_by_resource_types?:   any;
    /** (Optional) Specifies whether AWS Config includes all supported types of _global resources_ with the resources that it records. Requires `all_supported = true`. Conflicts with `resource_types`. */
    include_global_resource_types?: any;
    /** (Optional) Recording Strategy - see below.. */
    recording_strategy?:            any;
    /** (Optional) A list that specifies the types of AWS resources for which AWS Config records configuration changes (for example, `AWS::EC2::Instance` or `AWS::CloudTrail::Trail`). See [relevant part of AWS Docs](http://docs.aws.amazon.com/config/latest/APIReference/API_ResourceIdentifier.html#config-Type-ResourceIdentifier-resourceType) for available types. In order to use this attribute, `all_supported` must be set to false. */
    resource_types?:                any;
    " use_only"?:                   any;
}