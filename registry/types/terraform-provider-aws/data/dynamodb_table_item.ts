export interface DynamodbTableItem {
    data: Datum[];
}

export interface Datum {
    dynamodb_table_item: DynamodbTableItemClass;
}

export interface DynamodbTableItemClass {
    /** (Required) The name of the table containing the requested item. */
    table_name:                 any;
    /** (Required) A map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve. */
    key:                        any;
    /** (Optional) - One or more substitution tokens for attribute names in an expression. Use the `#` character in an expression to dereference an attribute name. */
    expression_attribute_name?: any;
    /** (Optional) A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. */
    projection_expression?:     any;
}