export interface DynamodbTable {
    data: Datum[];
}

export interface Datum {
    dynamodb_table: DynamodbTableClass;
}

export interface DynamodbTableClass {
    /** (Required) Name of the DynamoDB table. */
    name: any;
}