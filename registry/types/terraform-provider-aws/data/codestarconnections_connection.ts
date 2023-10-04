export interface CodestarconnectionsConnection {
    data: Datum[];
}

export interface Datum {
    codestarconnections_connection: CodestarconnectionsConnectionClass;
}

export interface CodestarconnectionsConnectionClass {
    /** (Optional) CodeStar Connection ARN. */
    arn?:  any;
    /** (Optional) CodeStar Connection name. */
    name?: any;
}