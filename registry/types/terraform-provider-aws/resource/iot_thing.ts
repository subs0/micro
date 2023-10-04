export interface IotThing {
    resource: Resource[];
}

export interface Resource {
    iot_thing: IotThingClass;
}

export interface IotThingClass {
    /** (Required) The name of the thing. */
    name:             any;
    /** (Optional) Map of attributes of the thing. */
    attributes?:      any;
    /** (Optional) The thing type name. */
    thing_type_name?: any;
}