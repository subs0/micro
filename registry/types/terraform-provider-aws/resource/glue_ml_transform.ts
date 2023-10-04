export interface GlueMlTransform {
    resource: Resource[];
}

export interface Resource {
    glue_ml_transform: GlueMlTransformClass;
}

export interface GlueMlTransformClass {
    input_record_tables: InputRecordTables;
    parameters:          Parameters;
    /** (Optional) The version of glue to use, for example "1.0". For information about available versions, see the [AWS Glue Release Notes](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html). */
    glue_version?:       any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Optional) The type of predefined worker that is allocated when an ML Transform runs. Accepts a value of `Standard`, `G.1X`, or `G.2X`. Required with `number_of_workers`. */
    worker_type?:        any;
    /** (Optional) The number of workers of a defined `worker_type` that are allocated when an ML Transform runs. Required with `worker_type`. */
    number_of_workers?:  any;
}

export interface InputRecordTables {
    /** (Required) A database name in the AWS Glue Data Catalog. */
    database_name: any;
    /** (Required) A table name in the AWS Glue Data Catalog. */
    table_name:    any;
    /** (Optional) A unique identifier for the AWS Glue Data Catalog. */
    catalog_id?:   any;
}

export interface Parameters {
    /** (Required) The type of machine learning transform. For information about the types of machine learning transforms, see [Creating Machine Learning Transforms](http://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html). */
    transform_type:              any;
    /** (Required) The parameters for the find matches algorithm. see [Find Matches Parameters](#find_matches_parameters). */
    find_matches_parameters:     any;
    /** (Optional) The value that is selected when tuning your transform for a balance between accuracy and cost. */
    accuracy_cost_trade_off?:    any;
    /** (Optional) The value to switch on or off to force the output to match the provided labels from users. */
    enforce_provided_labels?:    any;
    /** (Optional) The value selected when tuning your transform for a balance between precision and recall. */
    precision_recall_trade_off?: any;
    /** (Optional) The name of a column that uniquely identifies rows in the source table. */
    primary_key_column_name?:    any;
}