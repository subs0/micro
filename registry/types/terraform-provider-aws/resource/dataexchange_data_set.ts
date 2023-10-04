export interface DataexchangeDataSet {
    resource: Resource[];
}

export interface Resource {
    dataexchange_data_set: DataexchangeDataSetClass;
}

export interface DataexchangeDataSetClass {
    /** (Required) The type of asset that is added to a data set. Valid values are: `S3_SNAPSHOT`, `REDSHIFT_DATA_SHARE`, and `API_GATEWAY_API`. */
    asset_type:  any;
    /** (Required) A description for the data set. */
    description: any;
    /** (Required) The name of the data set. */
    name:        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:       any;
}