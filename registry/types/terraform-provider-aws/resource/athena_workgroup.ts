export interface AthenaWorkgroup {
    resource: Resource[];
}

export interface Resource {
    athena_workgroup: AthenaWorkgroupClass;
}

export interface AthenaWorkgroupClass {
    /** (Required) Name of the workgroup. */
    name:                                any;
    /** (Optional) Configuration block with various settings for the workgroup. Documented below. */
    configuration?:                      any;
    /** (Optional) Description of the workgroup. */
    description?:                        any;
    /** (Optional) State of the workgroup. Valid values are `DISABLED` or `ENABLED`. Defaults to `ENABLED`. */
    state?:                              any;
    /** (Optional) Key-value map of resource tags for the workgroup. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
    /** (Optional) Option to delete the workgroup and its contents even if the workgroup contains any named queries. */
    force_destroy?:                      any;
    /** (Optional) Integer for the upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. Must be at least `10485760`. */
    bytes_scanned_cutoff_per_query?:     any;
    /** (Optional) Boolean whether the settings for the workgroup override client-side settings. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html). Defaults to `true`. */
    enforce_workgroup_configuration?:    any;
    /** (Optional) Configuration block for the Athena Engine Versioning. For more information, see [Athena Engine Versioning](https://docs.aws.amazon.com/athena/latest/ug/engine-versions.html). See [Engine Version](#engine-version) below. */
    engine_version?:                     any;
    /** (Optional) Role used in a notebook session for accessing the user's resources. */
    execution_role?:                     any;
    /** (Optional) Boolean whether Amazon CloudWatch metrics are enabled for the workgroup. Defaults to `true`. */
    publish_cloudwatch_metrics_enabled?: any;
    /** (Optional) Configuration block with result settings. See [Result Configuration](#result-configuration) below. */
    result_configuration?:               any;
    /** (Optional) If set to true , allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false , workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is false . For more information about Requester Pays buckets, see [Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) in the Amazon Simple Storage Service Developer Guide. */
    requester_pays_enabled?:             any;
    /** (Optional) Requested engine version. Defaults to `AUTO`. */
    selected_engine_version?:            any;
    /** (Optional) Configuration block with encryption settings. See [Encryption Configuration](#encryption-configuration) below. */
    encryption_configuration?:           any;
    /** (Optional) That an Amazon S3 canned ACL should be set to control ownership of stored query results. See [ACL Configuration](#acl-configuration) below. */
    acl_configuration?:                  any;
    /** (Optional) AWS account ID that you expect to be the owner of the Amazon S3 bucket. */
    expected_bucket_owner?:              any;
    /** (Optional) Location in Amazon S3 where your query results are stored, such as `s3://path/to/query/bucket/`. For more information, see [Queries and Query Result Files](https://docs.aws.amazon.com/athena/latest/ug/querying.html). */
    output_location?:                    any;
    /** (Required) Amazon S3 canned ACL that Athena should specify when storing query results. Valid value is `BUCKET_OWNER_FULL_CONTROL`. */
    s3_acl_option:                       any;
    /** (Required) Whether Amazon S3 server-side encryption with Amazon S3-managed keys (`SSE_S3`), server-side encryption with KMS-managed keys (`SSE_KMS`), or client-side encryption with KMS-managed keys (`CSE_KMS`) is used. If a query runs in a workgroup and the workgroup overrides client-side settings, then the workgroup's setting for encryption is used. It specifies whether query results must be encrypted, for all queries that run in this workgroup. */
    encryption_option:                   any;
    /** (Optional) For `SSE_KMS` and `CSE_KMS`, this is the KMS key ARN. */
    kms_key_arn?:                        any;
}