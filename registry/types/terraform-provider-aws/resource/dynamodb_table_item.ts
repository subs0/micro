export interface DynamodbTableItem {
    resource: Resource[];
}

export interface Resource {
    dynamodb_table_item: DynamodbTableItemClass;
}

export interface DynamodbTableItemClass {
    /** (Required) Hash key to use for lookups and identification of the item */
    hash_key:   any;
    /** (Required) JSON representation of a map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item. */
    item:       any;
    /** (Optional) Range key to use for lookups and identification of the item. Required if there is range key defined in the table. */
    range_key?: any;
    /** (Required) Name of the table to contain the item. */
    table_name: any;
}