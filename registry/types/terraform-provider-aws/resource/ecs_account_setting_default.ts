export interface EcsAccountSettingDefault {
    resource: Resource[];
}

export interface Resource {
    ecs_account_setting_default: EcsAccountSettingDefaultClass;
}

export interface EcsAccountSettingDefaultClass {
    /** (Required) Name of the account setting to set. Valid values are `serviceLongArnFormat`, `taskLongArnFormat`, `containerInstanceLongArnFormat`, `awsvpcTrunking` and `containerInsights`. */
    name:  any;
    /** (Required) State of the setting. Valid values are `enabled` and `disabled`. */
    value: any;
}