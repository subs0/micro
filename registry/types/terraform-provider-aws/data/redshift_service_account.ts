export interface RedshiftServiceAccount {
    data: Datum[];
}

export interface Datum {
    redshift_service_account: RedshiftServiceAccountClass;
}

export interface RedshiftServiceAccountClass {
    /** (Optional) Name of the region whose AWS Redshift account ID is desired. */
    region?: any;
}