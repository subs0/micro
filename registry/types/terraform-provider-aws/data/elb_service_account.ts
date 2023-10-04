export interface ElbServiceAccount {
    data: Datum[];
}

export interface Datum {
    elb_service_account: ElbServiceAccountClass;
}

export interface ElbServiceAccountClass {
    /** (Optional) Name of the region whose AWS ELB account ID is desired. */
    region?: any;
}