export interface IotRoleAlias {
    resource: Resource[];
}

export interface Resource {
    iot_role_alias: IotRoleAliasClass;
}

export interface IotRoleAliasClass {
    /** (Required) The name of the role alias. */
    alias:                any;
    /** (Required) The identity of the role to which the alias refers. */
    role_arn:             any;
    /** (Optional) The duration of the credential, in seconds. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 900 seconds (15 minutes) to 43200 seconds (12 hours). */
    credential_duration?: any;
}