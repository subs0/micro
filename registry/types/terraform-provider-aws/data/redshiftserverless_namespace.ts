export interface RedshiftserverlessNamespace {
    data: Datum[];
}

export interface Datum {
    redshiftserverless_namespace: RedshiftserverlessNamespaceClass;
}

export interface RedshiftserverlessNamespaceClass {
    /** (Required) The name of the namespace. */
    namespace_name: any;
}