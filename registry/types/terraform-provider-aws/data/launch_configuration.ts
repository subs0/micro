export interface LaunchConfiguration {
    data: Datum[];
}

export interface Datum {
    launch_configuration: LaunchConfigurationClass;
}

export interface LaunchConfigurationClass {
    /** (Required) Name of the launch configuration. */
    name: any;
}