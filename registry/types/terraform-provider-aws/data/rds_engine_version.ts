export interface RDSEngineVersion {
    data: Datum[];
}

export interface Datum {
    rds_engine_version: RDSEngineVersionClass;
}

export interface RDSEngineVersionClass {
    /** (Required) DB engine. Engine values include `aurora`, `aurora-mysql`, `aurora-postgresql`, `docdb`, `mariadb`, `mysql`, `neptune`, `oracle-ee`, `oracle-se`, `oracle-se1`, `oracle-se2`, `postgres`, `sqlserver-ee`, `sqlserver-ex`, `sqlserver-se`, and `sqlserver-web`. */
    engine:                  any;
    /** (Optional) When set to `true`, the default version for the specified `engine` or combination of `engine` and major `version` will be returned. Can be used to limit responses to a single version when they would otherwise fail for returning multiple versions. */
    default_only?:           any;
    /** (Optional) One or more name/value pairs to filter off of. There are several valid keys; for a full reference, check out [describe-db-engine-versions in the AWS CLI reference](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/rds/describe-db-engine-versions.html). */
    filter?:                 any;
    /** (Optional) When set to `true`, the specified `version` or member of `preferred_versions` will be returned even if it is `deprecated`. Otherwise, only `available` versions will be returned. */
    include_all?:            any;
    /** (Optional) Name of a specific DB parameter group family. Examples of parameter group families are `mysql8.0`, `mariadb10.4`, and `postgres12`. */
    parameter_group_family?: any;
    /** (Optional) Ordered list of preferred engine versions. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned. If both the `version` and `preferred_versions` arguments are not configured, the data source will return the default version for the engine. */
    preferred_versions?:     any;
    /** (Optional) Version of the DB engine. For example, `5.7.22`, `10.1.34`, and `12.3`. If both the `version` and `preferred_versions` arguments are not configured, the data source will return the default version for the engine. */
    version?:                any;
}