export interface CloudtrailServiceAccount {
    data: Datum[];
}

export interface Datum {
    cloudtrail_service_account: CloudtrailServiceAccountClass;
}

export interface CloudtrailServiceAccountClass {
    /** (Optional) Name of the region whose AWS CloudTrail account ID is desired. */
    region?: any;
}