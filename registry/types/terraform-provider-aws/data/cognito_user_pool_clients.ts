export interface CognitoUserPoolClients {
    data: Datum[];
}

export interface Datum {
    cognito_user_pool_clients: CognitoUserPoolClientsClass;
}

export interface CognitoUserPoolClientsClass {
    /** (Required) Cognito user pool ID. */
    user_pool_id: any;
}