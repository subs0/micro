export interface RDSGlobalCluster {
    resource: Resource[];
}

export interface Resource {
    rds_global_cluster: RDSGlobalClusterClass;
}

export interface RDSGlobalClusterClass {
    /** (Required, Forces new resources) Global cluster identifier. */
    global_cluster_identifier?:    any;
    /** (Optional, Forces new resources) Name for an automatically created database on cluster creation. */
    database_name?:                any;
    /** (Optional) If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`. */
    deletion_protection?:          any;
    /** (Optional, Forces new resources) Name of the database engine to be used for this DB cluster. Terraform will only perform drift detection if a configuration value is provided. Valid values: `aurora`, `aurora-mysql`, `aurora-postgresql`. Defaults to `aurora`. Conflicts with `source_db_cluster_identifier`. */
    engine?:                       any;
    /** (Optional) Engine version of the Aurora global database. The `engine`, `engine_version`, and `instance_class` (on the `aws_rds_cluster_instance`) must together support global databases. See [Using Amazon Aurora global databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) for more information. By upgrading the engine version, Terraform will upgrade cluster members. **NOTE:** To avoid an `inconsistent final plan` error while upgrading, use the `lifecycle` `ignore_changes` for `engine_version` meta argument on the associated `aws_rds_cluster` resource as shown above in [Upgrading Engine Versions](#upgrading-engine-versions) example. */
    engine_version?:               any;
    /** (Optional) Enable to remove DB Cluster members from Global Cluster on destroy. Required with `source_db_cluster_identifier`. */
    force_destroy?:                any;
    /** (Optional) Amazon Resource Name (ARN) to use as the primary DB Cluster of the Global Cluster on creation. Terraform cannot perform drift detection of this value. */
    source_db_cluster_identifier?: any;
    /** (Optional, Forces new resources) Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. Terraform will only perform drift detection if a configuration value is provided. */
    storage_encrypted?:            any;
}