export interface GlueCatalogTable {
    data: Datum[];
}

export interface Datum {
    glue_catalog_table: GlueCatalogTableClass;
}

export interface GlueCatalogTableClass {
    /** (Required) Name of the table. */
    name:            any;
    /** (Required) Name of the metadata database where the table metadata resides. */
    database_name:   any;
    /** (Optional) ID of the Glue Catalog and database where the table metadata resides. If omitted, this defaults to the current AWS Account ID. */
    catalog_id?:     any;
    /** (Optional) The transaction ID at which to read the table contents. */
    transaction_id?: any;
}