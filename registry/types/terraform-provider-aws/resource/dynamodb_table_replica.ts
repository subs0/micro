export interface DynamodbTableReplica {
    resource: Resource[];
}

export interface Resource {
    dynamodb_table_replica: DynamodbTableReplicaClass;
}

export interface DynamodbTableReplicaClass {
    /** (Required) ARN of the _main_ or global table which this resource will replicate. */
    global_table_arn:        any;
    /** (Optional, Forces new resource) ARN of the CMK that should be used for the AWS KMS encryption. This argument should only be used if the key is different from the default KMS-managed DynamoDB key, `alias/aws/dynamodb`. **Note:** This attribute will _not_ be populated with the ARN of _default_ keys. */
    kms_key_arn?:            any;
    /** (Optional) Whether to enable Point In Time Recovery for the replica. Default is `false`. */
    point_in_time_recovery?: any;
    /** (Optional, Forces new resource) Storage class of the table replica. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`. If not used, the table replica will use the same class as the global table. */
    table_class_override?:   any;
    /** (Optional) Map of tags to populate on the created table. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
}