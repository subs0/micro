export interface GlueSchema {
    resource: Resource[];
}

export interface Resource {
    glue_schema: GlueSchemaClass;
}

export interface GlueSchemaClass {
    /** (Required) The ARN of the Glue Registry to create the schema in. */
    registry_arn:      any;
    /** (Required) The data format of the schema definition. Valid values are `AVRO`, `JSON` and `PROTOBUF`. */
    data_format:       any;
    /** (Required) The compatibility mode of the schema. Values values are: `NONE`, `DISABLED`, `BACKWARD`, `BACKWARD_ALL`, `FORWARD`, `FORWARD_ALL`, `FULL`, and `FULL_ALL`. */
    compatibility:     any;
    /** (Required) The schema definition using the `data_format` setting for `schema_name`. */
    schema_definition: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}