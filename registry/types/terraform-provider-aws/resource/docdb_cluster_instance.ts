export interface DocdbClusterInstance {
    resource: Resource[];
}

export interface Resource {
    docdb_cluster_instance: DocdbClusterInstanceClass;
}

export interface DocdbClusterInstanceClass {
    /** (Optional) Specifies whether any database modifications */
    apply_immediately?:               any;
    /** (Optional) This parameter does not apply to Amazon DocumentDB. Amazon DocumentDB does not perform minor version upgrades regardless of the value set (see [docs](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBInstance.html)). Default `true`. */
    auto_minor_version_upgrade?:      any;
    /** (Optional, Computed) The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_CreateDBInstance.html) about the details. */
    availability_zone?:               any;
    /** (Required) The identifier of the [`aws_docdb_cluster`](/docs/providers/aws/r/docdb_cluster.html) in which to launch this instance. */
    cluster_identifier:               any;
    /** (Optional) A value that indicates whether to enable Performance Insights for the DB Instance. Default `false`. See [docs] (https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html) about the details. */
    enable_performance_insights?:     any;
    /** (Optional) The name of the database engine to be used for the DocumentDB instance. Defaults to `docdb`. Valid Values: `docdb`. */
    engine?:                          any;
    /** (Optional, Forces new resource) The identifier for the DocumentDB instance, if omitted, Terraform will assign a random, unique identifier. */
    identifier?:                      any;
    /** (Optional, Forces new resource) Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`. */
    identifier_prefix?:               any;
    /** (Required) The instance class to use. For details on CPU and memory, see [Scaling for DocumentDB Instances][2]. */
    instance_class:                   any;
    /** (Optional) The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. If you do not specify a value for PerformanceInsightsKMSKeyId, then Amazon DocumentDB uses your default KMS key. */
    performance_insights_kms_key_id?: any;
    /** (Optional) The window to perform maintenance in. */
    preferred_maintenance_window?:    any;
    /** (Optional) Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer. */
    promotion_tier?:                  any;
    /** (Optional) A map of tags to assign to the instance. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
}