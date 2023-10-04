export interface DBProxy {
    data: Datum[];
}

export interface Datum {
    db_proxy: DBProxyClass;
}

export interface DBProxyClass {
    /** (Required) Name of the DB proxy. */
    name: any;
}