export interface GlueCatalogDatabase {
    resource: Resource[];
}

export interface Resource {
    glue_catalog_database: GlueCatalogDatabaseClass;
}

export interface GlueCatalogDatabaseClass {
    /** (Required) ID of the Data Catalog in which the database resides. */
    catalog_id?:                      any;
    create_table_default_permission?: CreateTableDefaultPermission;
    /** (Optional) Description of the database. */
    description?:                     any;
    /** (Optional) Location of the database (for example, an HDFS path). */
    location_uri?:                    any;
    /** (Required) Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character. */
    name:                             any;
    /** (Optional) List of key-value pairs that define parameters and properties of the database. */
    parameters?:                      any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
    target_database?:                 TargetDatabase;
}

export interface CreateTableDefaultPermission {
    /** (Optional) The permissions that are granted to the principal. */
    permissions:                    any;
    /** (Optional) The principal who is granted permissions.. See [`principal`](#principal) below. */
    principal:                      any;
    /** (Optional) An identifier for the Lake Formation principal. */
    data_lake_principal_identifier: any;
}

export interface TargetDatabase {
    /** (Required) ID of the Data Catalog in which the database resides. */
    catalog_id:    any;
    /** (Required) Name of the catalog database. */
    database_name: any;
    /** (Optional) Region of the target database. */
    region:        any;
}