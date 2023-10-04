export interface DocdbEngineVersion {
    data: Datum[];
}

export interface Datum {
    docdb_engine_version: DocdbEngineVersionClass;
}

export interface DocdbEngineVersionClass {
    /** (Optional) DB engine. (Default: `docdb`) */
    engine?:                 any;
    /** (Optional) Name of a specific DB parameter group family. An example parameter group family is `docdb3.6`. */
    parameter_group_family?: any;
    /** (Optional) Ordered list of preferred engine versions. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned. If both the `version` and `preferred_versions` arguments are not configured, the data source will return the default version for the engine. */
    preferred_versions?:     any;
    /** (Optional) Version of the DB engine. For example, `3.6.0`. If `version` and `preferred_versions` are not set, the data source will provide information for the AWS-defined default version. If both the `version` and `preferred_versions` arguments are not configured, the data source will return the default version for the engine. */
    version?:                any;
}