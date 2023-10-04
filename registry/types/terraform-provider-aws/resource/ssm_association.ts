export interface SsmAssociation {
    resource: Resource[];
}

export interface Resource {
    ssm_association: SsmAssociationClass;
}

export interface SsmAssociationClass {
    /** (Required) The name of the SSM document to apply. */
    name:                              any;
    /** (Optional) By default, when you create a new or update associations, the system runs it immediately and then according to the schedule you specified. Enable this option if you do not want an association to run immediately after you create or update it. This parameter is not supported for rate expressions. Default: `false`. */
    apply_only_at_cron_interval?:      any;
    /** (Optional) The descriptive name for the association. */
    association_name?:                 any;
    /** (Optional) Specify the target for the association. This target is required for associations that use an `Automation` document and target resources by using rate controls. This should be set to the SSM document `parameter` that will define how your automation will branch out. */
    automation_target_parameter_name?: any;
    /** (Optional) The compliance severity for the association. Can be one of the following: `UNSPECIFIED`, `LOW`, `MEDIUM`, `HIGH` or `CRITICAL` */
    compliance_severity?:              any;
    /** (Optional) The document version you want to associate with the target(s). Can be a specific version or the default version. */
    document_version?:                 any;
    /** (Optional, **Deprecated**) The instance ID to apply an SSM document to. Use `targets` with key `InstanceIds` for document schema versions 2.0 and above. Use the `targets` attribute instead. */
    instance_id?:                      any;
    /** (Optional) The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. */
    max_concurrency?:                  any;
    /** (Optional) The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify a number, for example 10, or a percentage of the target set, for example 10%. If you specify a threshold of 3, the stop command is sent when the fourth error is returned. If you specify a threshold of 10% for 50 associations, the stop command is sent when the sixth error is returned. */
    max_errors?:                       any;
    /** (Optional) An output location block. Output Location is documented below. */
    output_location?:                  any;
    /** (Optional) A block of arbitrary string parameters to pass to the SSM document. */
    parameters?:                       any;
    /** (Optional) A [cron or rate expression](https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html) that specifies when the association runs. */
    schedule_expression?:              any;
    /** (Optional) The mode for generating association compliance. You can specify `AUTO` or `MANUAL`. */
    sync_compliance?:                  any;
    /** (Optional) A block containing the targets of the SSM association. Targets are documented below. AWS currently supports a maximum of 5 targets. */
    targets?:                          any;
    /** (Optional) The number of seconds to wait for the association status to be `Success`. If `Success` status is not reached within the given time, create opration will fail. */
    wait_for_success_timeout_seconds?: any;
    /** (Required) The S3 bucket name. */
    s3_bucket_name:                    any;
    /** (Optional) The S3 bucket prefix. Results stored in the root if not configured. */
    s3_key_prefix?:                    any;
    /** (Optional) The S3 bucket region. */
    s3_region?:                        any;
    /** (Required) Either `InstanceIds` or `tag:Tag Name` to specify an EC2 tag. */
    key:                               any;
    /** (Required) A list of instance IDs or tag values. AWS currently limits this list size to one value. */
    values:                            any;
}