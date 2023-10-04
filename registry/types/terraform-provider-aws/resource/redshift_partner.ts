export interface RedshiftPartner {
    resource: Resource[];
}

export interface Resource {
    redshift_partner: RedshiftPartnerClass;
}

export interface RedshiftPartnerClass {
    /** (Required) The Amazon Web Services account ID that owns the cluster. */
    account_id:         any;
    /** (Required) The cluster identifier of the cluster that receives data from the partner. */
    cluster_identifier: any;
    /** (Required) The name of the database that receives data from the partner. */
    database_name:      any;
    /** (Required) The name of the partner that is authorized to send data. */
    partner_name:       any;
}