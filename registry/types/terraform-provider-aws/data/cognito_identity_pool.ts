export interface CognitoIdentityPool {
    data: Datum[];
}

export interface Datum {
    cognito_identity_pool: CognitoIdentityPoolClass;
}

export interface CognitoIdentityPoolClass {
    /** (Required)  The Cognito Identity Pool name. */
    identity_pool_name: any;
}