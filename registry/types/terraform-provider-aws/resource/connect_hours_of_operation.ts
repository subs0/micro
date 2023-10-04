export interface ConnectHoursOfOperation {
    resource: Resource[];
}

export interface Resource {
    connect_hours_of_operation: ConnectHoursOfOperationClass;
}

export interface ConnectHoursOfOperationClass {
    /** (Required) One or more config blocks which define the configuration information for the hours of operation: day, start time, and end time . Config blocks are documented below. */
    config:       any;
    /** (Optional) Specifies the description of the Hours of Operation. */
    description?: any;
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:  any;
    /** (Required) Specifies the name of the Hours of Operation. */
    name:         any;
    /** (Optional) Tags to apply to the Hours of Operation. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
    /** (Required) Specifies the time zone of the Hours of Operation. */
    time_zone:    any;
    /** (Required) Specifies the day that the hours of operation applies to. */
    day:          any;
    /** (Required) A end time block specifies the time that your contact center closes. The `end_time` is documented below. */
    end_time:     any;
    /** (Required) A start time block specifies the time that your contact center opens. The `start_time` is documented below. */
    start_time:   any;
    /** (Required) Specifies the hour of opening. */
    hours:        any;
    /** (Required) Specifies the minute of opening. */
    minutes:      any;
}