export interface CognitoUserPoolClient {
    data: Datum[];
}

export interface Datum {
    cognito_user_pool_client: CognitoUserPoolClientClass;
}

export interface CognitoUserPoolClientClass {
    /** (Required) Client Id of the user pool. */
    client_id:    any;
    /** (Required) User pool the client belongs to. */
    user_pool_id: any;
}