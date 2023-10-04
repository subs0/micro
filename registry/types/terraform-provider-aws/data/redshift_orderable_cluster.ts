export interface RedshiftOrderableCluster {
    data: Datum[];
}

export interface Datum {
    redshift_orderable_cluster: RedshiftOrderableClusterClass;
}

export interface RedshiftOrderableClusterClass {
    /** (Optional) Reshift Cluster typeE.g., `multi-node` or `single-node` */
    cluster_type?:         any;
    /** (Optional) Redshift Cluster versionE.g., `1.0` */
    cluster_version?:      any;
    /** (Optional) Redshift Cluster node typeE.g., `dc2.8xlarge` */
    node_type?:            any;
    /** (Optional) Ordered list of preferred Redshift Cluster node types. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned. */
    preferred_node_types?: any;
}