export interface DynamodbGlobalTable {
    resource: Resource[];
}

export interface Resource {
    dynamodb_global_table: DynamodbGlobalTableClass;
}

export interface DynamodbGlobalTableClass {
    /** (Required) The name of the global table. Must match underlying DynamoDB Table names in all regions. */
    name:        any;
    /** (Required) Underlying DynamoDB Table. At least 1 replica must be defined. See below. */
    replica:     any;
    /** (Required) AWS region name of replica DynamoDB TableE.g., `us-east-1` */
    region_name: any;
}