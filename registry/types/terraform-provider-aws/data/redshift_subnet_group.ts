export interface RedshiftSubnetGroup {
    data: Datum[];
}

export interface Datum {
    redshift_subnet_group: RedshiftSubnetGroupClass;
}

export interface RedshiftSubnetGroupClass {
    /** (Required) Name of the cluster subnet group for which information is requested. */
    name: any;
}