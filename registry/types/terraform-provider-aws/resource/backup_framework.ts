export interface BackupFramework {
    resource: Resource[];
}

export interface Resource {
    backup_framework: BackupFrameworkClass;
}

export interface BackupFrameworkClass {
    /** (Required) One or more control blocks that make up the framework. Each control in the list has a name, input parameters, and scope. Detailed below. */
    control:                    any;
    /** (Optional) The description of the framework with a maximum of 1,024 characters */
    description?:               any;
    /** (Required) The name of a control. This name is between 1 and 256 characters. */
    name:                       any;
    /** (Optional) The tag key-value pair applied to those AWS resources that you want to trigger an evaluation for a rule. A maximum of one key-value pair can be provided. */
    tags?:                      any;
    /** (Optional) One or more input parameter blocks. An example of a control with two parameters is: "backup plan frequency is at least daily and the retention period is at least 1 year". The first parameter is daily. The second parameter is 1 year. Detailed below. */
    input_parameter?:           any;
    /** (Optional) The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans. Detailed below. */
    scope?:                     any;
    /** (Optional) The value of parameter, for example, hourly. */
    value?:                     any;
    /** (Optional) The ID of the only AWS resource that you want your control scope to contain. Minimum number of 1 item. Maximum number of 100 items. */
    compliance_resource_ids?:   any;
    /** (Optional) Describes whether the control scope includes one or more types of resources, such as EFS or RDS. */
    compliance_resource_types?: any;
}