export interface IotThingGroup {
    resource: Resource[];
}

export interface Resource {
    iot_thing_group: IotThingGroupClass;
}

export interface IotThingGroupClass {
    /** (Required) The name of the Thing Group. */
    name:               any;
    /** (Optional) The name of the parent Thing Group. */
    parent_group_name?: any;
    /** (Optional) The Thing Group properties. Defined below. */
    properties?:        any;
    /** (Optional) Key-value mapping of resource tags */
    tags?:              any;
    /** (Optional) The Thing Group attributes. Defined below. */
    attribute_payload?: any;
    /** (Optional) A description of the Thing Group. */
    description?:       any;
    /** (Optional) Key-value map. */
    attributes?:        any;
}