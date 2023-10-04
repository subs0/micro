export interface DynamodbTag {
    resource: Resource[];
}

export interface Resource {
    dynamodb_tag: DynamodbTagClass;
}

export interface DynamodbTagClass {
    /** (Required) Amazon Resource Name (ARN) of the DynamoDB resource to tag. */
    resource_arn: any;
    /** (Required) Tag name. */
    key:          any;
    /** (Required) Tag value. */
    value:        any;
}