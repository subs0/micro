export interface NeptuneEngineVersion {
    data: Datum[];
}

export interface Datum {
    neptune_engine_version: NeptuneEngineVersionClass;
}

export interface NeptuneEngineVersionClass {
    /** (Optional) DB engine. (Default: `neptune`) */
    engine?:                 any;
    /** (Optional) Name of a specific DB parameter group family. An example parameter group family is `neptune1`. */
    parameter_group_family?: any;
    /** (Optional) Ordered list of preferred engine versions. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned. If both the `version` and `preferred_versions` arguments are not configured, the data source will return the default version for the engine. */
    preferred_versions?:     any;
    /** (Optional) Version of the DB engine. For example, `1.0.1.0`, `1.0.2.2`, and `1.0.3.0`. If both the `version` and `preferred_versions` arguments are not configured, the data source will return the default version for the engine. */
    version?:                any;
}