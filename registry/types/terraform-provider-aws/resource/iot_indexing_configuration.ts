export interface IotIndexingConfiguration {
    resource: Resource[];
}

export interface Resource {
    iot_indexing_configuration: IotIndexingConfigurationClass;
}

export interface IotIndexingConfigurationClass {
    thing_group_indexing_configuration?: ThingGroupIndexingConfiguration;
    thing_indexing_configuration?:       ThingIndexingConfiguration;
    /** (Optional) The name of the field. */
    name?:                               any;
    /** (Optional) The data type of the field. Valid values: `Number`, `String`, `Boolean`. */
    type?:                               any;
}

export interface ThingGroupIndexingConfiguration {
    /** (Optional) Contains custom field names and their data type. See below. */
    custom_field:              any;
    /** (Optional) Contains fields that are indexed and whose types are already known by the Fleet Indexing service. See below. */
    managed_field:             any;
    /** (Required) Thing group indexing mode. Valid values: `OFF`, `ON`. */
    thing_group_indexing_mode: any;
}

export interface ThingIndexingConfiguration {
    /** (Optional) Contains custom field names and their data type. See below. */
    custom_field:                     any;
    /** (Optional) Device Defender indexing mode. Valid values: `VIOLATIONS`, `OFF`. Default: `OFF`. */
    device_defender_indexing_mode:    any;
    /** (Optional) Contains fields that are indexed and whose types are already known by the Fleet Indexing service. See below. */
    managed_field:                    any;
    /** (Optional) [Named shadow](https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html) indexing mode. Valid values: `ON`, `OFF`. Default: `OFF`. */
    named_shadow_indexing_mode:       any;
    /** (Optional) Thing connectivity indexing mode. Valid values: `STATUS`, `OFF`. Default: `OFF`. */
    thing_connectivity_indexing_mode: any;
    /** (Required) Thing indexing mode. Valid values: `REGISTRY`, `REGISTRY_AND_SHADOW`, `OFF`. */
    thing_indexing_mode:              any;
}