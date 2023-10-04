export interface Macie2ClassificationJob {
    resource: Resource[];
}

export interface Resource {
    macie2_classification_job: Macie2ClassificationJobClass;
}

export interface Macie2ClassificationJobClass {
    /**  (Optional) The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value for the `job_type` property to `ONE_TIME`. (documented below) */
    schedule_frequency?:         any;
    /**  (Optional) The custom data identifiers to use for data analysis and classification. */
    custom_data_identifier_ids?: any;
    /**  (Optional) The sampling depth, as a percentage, to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects. */
    sampling_percentage?:        any;
    /**  (Optional) A custom name for the job. The name can contain as many as 500 characters. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:                       any;
    /**  (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:                any;
    /**  (Optional) A custom description of the job. The description can contain as many as 200 characters. */
    description?:                any;
    /**  (Optional) Specifies whether to analyze all existing, eligible objects immediately after the job is created. */
    initial_run?:                any;
    /**  (Required) The schedule for running the job. Valid values are: `ONE_TIME` - Run the job only once. If you specify this value, don't specify a value for the `schedule_frequency` property. `SCHEDULED` - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the `schedule_frequency` property to define the recurrence pattern for the job. */
    job_type:                    any;
    /**  (Optional) The S3 buckets that contain the objects to analyze, and the scope of that analysis. (documented below) */
    s3_job_definition?:          any;
    /**  (Optional) A map of key-value pairs that specifies the tags to associate with the job. A job can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters. */
    tags?:                       any;
    /**  (Optional) The status for the job. Valid values are: `CANCELLED`, `RUNNING` and `USER_PAUSED` */
    job_status?:                 any;
    /**  (Optional) Specifies a daily recurrence pattern for running the job. */
    daily_schedule?:             any;
    /**  (Optional) Specifies a weekly recurrence pattern for running the job. */
    weekly_schedule?:            any;
    /**  (Optional) Specifies a monthly recurrence pattern for running the job. */
    monthly_schedule?:           any;
    /** (Optional) The property- and tag-based conditions that determine which S3 buckets to include or exclude from the analysis. Conflicts with `bucket_definitions`. (documented below) */
    bucket_criteria?:            any;
    /**  (Optional) An array of objects, one for each AWS account that owns buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for the account. Conflicts with `bucket_criteria`. (documented below) */
    bucket_definitions?:         any;
    /**  (Optional) The property- and tag-based conditions that determine which objects to include or exclude from the analysis. (documented below) */
    scoping?:                    any;
    /**  (Optional) The property- or tag-based conditions that determine which objects to exclude from the analysis. (documented below) */
    excludes?:                   any;
    /**  (Optional) The property- or tag-based conditions that determine which objects to include in the analysis. (documented below) */
    includes?:                   any;
    /**  (Optional) An array of conditions, one for each condition that determines which objects to include or exclude from the job. (documented below) */
    and?:                        any;
    /**  (Optional) A property-based condition that defines a property, operator, and one or more values for including or excluding an S3 buckets from the job. (documented below) */
    simple_criterion?:           any;
    /**  (Optional) A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding an S3 buckets from the job. (documented below) */
    tag_criterion?:              any;
    /**  (Required) The operator to use in the condition. Valid combination and values are available in the [AWS Documentation](https://docs.aws.amazon.com/macie/latest/APIReference/jobs.html#jobs-model-jobcomparator) */
    comparator:                  any;
    /**  (Required) The tag key to use in the condition. The only valid value is `TAG`. */
    key:                         any;
    /**  (Required) An array that lists the values to use in the condition. Valid combination of values are available in the [AWS Documentation](https://docs.aws.amazon.com/macie/latest/APIReference/jobs.html#jobs-model-simplecriterionforjob) */
    values:                      any;
    /**  (Required) The  tag key and value pairs to use in the condition. One or more blocks are allowed. (documented below) */
    tag_values:                  any;
    /** (Required) The tag value. */
    value:                       any;
    /**  (Required) The unique identifier for the AWS account that owns the buckets. */
    account_id:                  any;
    /**  (Required) An array that lists the names of the buckets. */
    buckets:                     any;
    /**  (Optional) A property-based condition that defines a property, operator, and one or more values for including or excluding an object from the job. (documented below) */
    simple_scope_term?:          any;
    /**  (Optional) A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding an object from the job. (documented below) */
    tag_scope_term?:             any;
    /**  (Required) The type of object to apply the condition to. The only valid value is `S3_OBJECT`. */
    target:                      any;
}