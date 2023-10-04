export interface DocdbGlobalCluster {
    resource: Resource[];
}

export interface Resource {
    docdb_global_cluster: DocdbGlobalClusterClass;
}

export interface DocdbGlobalClusterClass {
    /** (Required, Forces new resources) The global cluster identifier. */
    global_cluster_identifier?:    any;
    /** (Optional, Forces new resources) Name for an automatically created database on cluster creation. */
    database_name?:                any;
    /** (Optional) If the Global Cluster should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`. */
    deletion_protection?:          any;
    /** (Optional, Forces new resources) Name of the database engine to be used for this DB cluster. Terraform will only perform drift detection if a configuration value is provided. Current Valid values: `docdb`. Defaults to `docdb`. Conflicts with `source_db_cluster_identifier`. */
    engine?:                       any;
    /** (Optional) Engine version of the global database. Upgrading the engine version will result in all cluster members being immediately updated and will. */
    engine_version?:               any;
    /** (Optional) Amazon Resource Name (ARN) to use as the primary DB Cluster of the Global Cluster on creation. Terraform cannot perform drift detection of this value. */
    source_db_cluster_identifier?: any;
    /** (Optional, Forces new resources) Specifies whether the DB cluster is encrypted. The default is `false` unless `source_db_cluster_identifier` is specified and encrypted. Terraform will only perform drift detection if a configuration value is provided. */
    storage_encrypted?:            any;
}