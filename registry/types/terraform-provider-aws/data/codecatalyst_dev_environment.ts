export interface CodecatalystDevEnvironment {
    data: Datum[];
}

export interface Datum {
    codecatalyst_dev_environment: CodecatalystDevEnvironmentClass;
}

export interface CodecatalystDevEnvironmentClass {
    /** - (Required) The system-generated unique ID of the Dev Environment for which you want to view information. To retrieve a list of Dev Environment IDs, use [ListDevEnvironments](https://docs.aws.amazon.com/codecatalyst/latest/APIReference/API_ListDevEnvironments.html). */
    env_id:       any;
    /** (Required) The name of the project in the space. */
    project_name: any;
    /** (Required) The name of the space. */
    space_name:   any;
}