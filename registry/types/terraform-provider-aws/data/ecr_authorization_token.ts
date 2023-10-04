export interface EcrAuthorizationToken {
    data: Datum[];
}

export interface Datum {
    ecr_authorization_token: EcrAuthorizationTokenClass;
}

export interface EcrAuthorizationTokenClass {
    /** (Optional) AWS account ID of the ECR Repository. If not specified the default account is assumed. */
    registry_id?: any;
}