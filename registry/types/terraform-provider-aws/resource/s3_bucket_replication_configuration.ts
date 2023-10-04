export interface S3BucketReplicationConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_replication_configuration: S3BucketReplicationConfigurationClass;
}

export interface S3BucketReplicationConfigurationClass {
    /** (Required) ARN of the IAM role for Amazon S3 to assume when replicating the objects. */
    role:                         any;
    rule:                         Rule;
    /** (Optional) Token to allow replication to be enabled on an Object Lock-enabled bucket. You must contact AWS support for the bucket's "Object Lock token". */
    token?:                       any;
    /** (Optional) Whether delete markers are replicated. This argument is only valid with V2 replication configurations (i.e., when `filter` is used)[documented below](#delete_marker_replication). */
    delete_marker_replication?:   DeleteMarkerReplication;
    /** (Required) Specifies the destination for the rule. [See below](#destination). */
    destination:                  Destination;
    /** (Optional) Replicate existing objects in the source bucket according to the rule configurations. [See below](#existing_object_replication). */
    existing_object_replication?: DeleteMarkerReplication;
    /** (Optional, Conflicts with `prefix`) Filter that identifies subset of objects to which the replication rule applies. [See below](#filter). If not specified, the `rule` will default to using `prefix`. */
    filter?:                      Filter;
    /** (Optional) Specifies special object selection criteria. [See below](#source_selection_criteria). */
    source_selection_criteria?:   SourceSelectionCriteria;
    /** (Optional) Configuration block that specifies the overrides to use for object owners on replication. [See below](#access_control_translation). Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object. Must be used in conjunction with `account` owner override configuration. */
    access_control_translation?:  AccessControlTranslation;
    /** (Optional) Configuration block that provides information about encryption. [See below](#encryption_configuration). If `source_selection_criteria` is specified, you must specify this element. */
    encryption_configuration?:    EncryptionConfiguration;
    /** (Optional) Configuration block that specifies replication metrics-related settings enabling replication metrics and events. [See below](#metrics). */
    metrics?:                     Metrics;
    /** (Optional) Configuration block that specifies S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. [See below](#replication_time). Replication Time Control must be used in conjunction with `metrics`. */
    replication_time?:            ReplicationTime;
    /** (Optional) Configuration block that specifies the time threshold for emitting the `s3:Replication:OperationMissedThreshold` event. [See below](#event_threshold). */
    event_threshold?:             EventThreshold;
    /** (Required) Configuration block specifying the time by which replication should be complete for all objects and operations on objects. [See below](#time). */
    time:                         EventThreshold;
    /** (Optional) Configuration block for specifying rule filters. This element is required only if you specify more than one filter. See [and](#and) below for more details. */
    and?:                         And;
    /** (Optional) Configuration block for specifying a tag key and value. [See below](#tag). */
    tag?:                         Tag;
    /** (Optional) Configuration block that you can specify for selections for modifications on replicas. Amazon S3 doesn't replicate replica modifications by default. In the latest version of replication configuration (when `filter` is specified), you can specify this element and set the status to `Enabled` to replicate modifications on replicas. */
    replica_modifications?:       DeleteMarkerReplication;
    /** (Optional) Configuration block for filter information for the selection of Amazon S3 objects encrypted with AWS KMS. If specified, `replica_kms_key_id` in `destination` `encryption_configuration` must be specified as well. */
    sse_kms_encrypted_objects?:   DeleteMarkerReplication;
}

export interface AccessControlTranslation {
    /** (Required) Specifies the replica ownership. For default and valid values, see [PUT bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) in the Amazon S3 API Reference. Valid values: `Destination`. */
    owner: any;
}

export interface And {
    /** (Optional) Object key name prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length. */
    prefix: any;
    /** (Optional, Required if `prefix` is configured) Map of tags (key and value pairs) that identifies a subset of objects to which the rule applies. The rule applies only to objects having all the tags in its tagset. */
    tags:   any;
}

export interface DeleteMarkerReplication {
    /** (Required) Status of the rule. Either `"Enabled"` or `"Disabled"`. The rule is ignored if status is not "Enabled". */
    status: any;
}

export interface Destination {
    /** (Optional) Configuration block that specifies the overrides to use for object owners on replication. [See below](#access_control_translation). Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object. Must be used in conjunction with `account` owner override configuration. */
    access_control_translation?: any;
    /** (Optional) Account ID to specify the replica ownership. Must be used in conjunction with `access_control_translation` override configuration. */
    account?:                    any;
    /** (Required) ARN of the bucket where you want Amazon S3 to store the results. */
    bucket:                      any;
    /** (Optional) Configuration block that provides information about encryption. [See below](#encryption_configuration). If `source_selection_criteria` is specified, you must specify this element. */
    encryption_configuration?:   any;
    /** (Optional) Configuration block that specifies replication metrics-related settings enabling replication metrics and events. [See below](#metrics). */
    metrics?:                    any;
    /** (Optional) Configuration block that specifies S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. [See below](#replication_time). Replication Time Control must be used in conjunction with `metrics`. */
    replication_time?:           any;
    /** (Optional) The [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Destination.html#AmazonS3-Type-Destination-StorageClass) used to store the object. By default, Amazon S3 uses the storage class of the source object to create the object replica. */
    storage_class?:              any;
}

export interface EncryptionConfiguration {
    /** (Required) ID (Key ARN or Alias ARN) of the customer managed AWS KMS key stored in AWS Key Management Service (KMS) for the destination bucket. */
    replica_kms_key_id: any;
}

export interface EventThreshold {
    /** (Required) Time in minutes. Valid values: `15`. */
    minutes: any;
}

export interface Filter {
    /** (Optional) Configuration block for specifying rule filters. This element is required only if you specify more than one filter. See [and](#and) below for more details. */
    and:    any;
    /** (Optional) Object key name prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length. */
    prefix: any;
    /** (Optional) Configuration block for specifying a tag key and value. [See below](#tag). */
    tag:    any;
}

export interface Metrics {
    /** (Optional) Configuration block that specifies the time threshold for emitting the `s3:Replication:OperationMissedThreshold` event. [See below](#event_threshold). */
    event_threshold: any;
    /** (Required) Status of the rule. Either `"Enabled"` or `"Disabled"`. The rule is ignored if status is not "Enabled". */
    status:          any;
}

export interface ReplicationTime {
    /** (Required) Status of the rule. Either `"Enabled"` or `"Disabled"`. The rule is ignored if status is not "Enabled". */
    status: any;
    /** (Required) Configuration block specifying the time by which replication should be complete for all objects and operations on objects. [See below](#time). */
    time:   any;
}

export interface Rule {
    /** (Optional) Whether delete markers are replicated. This argument is only valid with V2 replication configurations (i.e., when `filter` is used)[documented below](#delete_marker_replication). */
    delete_marker_replication?:   any;
    /** (Required) Specifies the destination for the rule. [See below](#destination). */
    destination:                  any;
    /** (Optional) Replicate existing objects in the source bucket according to the rule configurations. [See below](#existing_object_replication). */
    existing_object_replication?: any;
    /** (Optional, Conflicts with `prefix`) Filter that identifies subset of objects to which the replication rule applies. [See below](#filter). If not specified, the `rule` will default to using `prefix`. */
    filter?:                      any;
    /** (Optional) Unique identifier for the rule. Must be less than or equal to 255 characters in length. */
    id?:                          any;
    /** (Optional) Object key name prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length. */
    prefix?:                      any;
    /** (Optional) Priority associated with the rule. Priority should only be set if `filter` is configured. If not provided, defaults to `0`. Priority must be unique between multiple rules. */
    priority?:                    any;
    /** (Optional) Specifies special object selection criteria. [See below](#source_selection_criteria). */
    source_selection_criteria?:   any;
    /** (Required) Status of the rule. Either `"Enabled"` or `"Disabled"`. The rule is ignored if status is not "Enabled". */
    status:                       any;
}

export interface SourceSelectionCriteria {
    /** (Optional) Configuration block that you can specify for selections for modifications on replicas. Amazon S3 doesn't replicate replica modifications by default. In the latest version of replication configuration (when `filter` is specified), you can specify this element and set the status to `Enabled` to replicate modifications on replicas. */
    replica_modifications:     any;
    /** (Optional) Configuration block for filter information for the selection of Amazon S3 objects encrypted with AWS KMS. If specified, `replica_kms_key_id` in `destination` `encryption_configuration` must be specified as well. */
    sse_kms_encrypted_objects: any;
}

export interface Tag {
    /** (Required) Name of the object key. */
    key:   any;
    /** (Required) Value of the tag. */
    value: any;
}