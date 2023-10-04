export interface IotThingType {
    resource: Resource[];
}

export interface Resource {
    iot_thing_type: IotThingTypeClass;
}

export interface IotThingTypeClass {
    /** (Required, Forces New Resource) The name of the thing type. */
    name?:                  any;
    /** (Optional, Defaults to false) Whether the thing type is deprecated. If true, no new things could be associated with this type. */
    deprecated?:            any;
    /** (Optional), Configuration block that can contain the following properties of the thing type: */
    properties?:            any;
    /** (Optional, Forces New Resource) The description of the thing type. */
    description?:           any;
    /** (Optional, Forces New Resource) A list of searchable thing attribute names. */
    searchable_attributes?: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
}