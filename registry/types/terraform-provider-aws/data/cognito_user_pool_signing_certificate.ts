export interface CognitoUserPoolSigningCertificate {
    data: Datum[];
}

export interface Datum {
    cognito_user_pool_signing_certificate: CognitoUserPoolSigningCertificateClass;
}

export interface CognitoUserPoolSigningCertificateClass {
    /** (Required) Cognito user pool ID. */
    user_pool_id: any;
}