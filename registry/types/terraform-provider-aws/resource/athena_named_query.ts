export interface AthenaNamedQuery {
    resource: Resource[];
}

export interface Resource {
    athena_named_query: AthenaNamedQueryClass;
}

export interface AthenaNamedQueryClass {
    /** (Required) Plain language name for the query. Maximum length of 128. */
    name:         any;
    /** (Optional) Workgroup to which the query belongs. Defaults to `primary` */
    workgroup?:   any;
    /** (Required) Database to which the query belongs. */
    database:     any;
    /** (Required) Text of the query itself. In other words, all query statements. Maximum length of 262144. */
    query:        any;
    /** (Optional) Brief explanation of the query. Maximum length of 1024. */
    description?: any;
}