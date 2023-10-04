export interface DynamodbContributorInsights {
    resource: Resource[];
}

export interface Resource {
    dynamodb_contributor_insights: DynamodbContributorInsightsClass;
}

export interface DynamodbContributorInsightsClass {
    /** (Required) The name of the table to enable contributor insights */
    table_name:  any;
    /** (Optional) The global secondary index name */
    index_name?: any;
}