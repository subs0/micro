export interface GlueConnection {
    data: Datum[];
}

export interface Datum {
    glue_connection: GlueConnectionClass;
}

export interface GlueConnectionClass {
    /** (Required) Concatenation of the catalog ID and connection name. For example, if your account ID is */
    id: any;
}