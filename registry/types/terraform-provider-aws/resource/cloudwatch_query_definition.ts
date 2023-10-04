export interface CloudwatchQueryDefinition {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_query_definition: CloudwatchQueryDefinitionClass;
}

export interface CloudwatchQueryDefinitionClass {
    /** (Required) The name of the query. */
    name:             any;
    query_any:     string;
    /** (Optional) Specific log groups to use with the query. */
    log_group_names?: any;
}