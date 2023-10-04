export interface CognitoUserPools {
    data: Datum[];
}

export interface Datum {
    cognito_user_pools: CognitoUserPoolsClass;
}

export interface CognitoUserPoolsClass {
    /** (Required) Name of the cognito user pools. Name is not a unique attribute for cognito user pool, so multiple pools might be returned with given name. If the pool name is expected to be unique, you can reference the pool id via ```tolist(data.aws_cognito_user_pools.selected.ids)[0]``` */
    name: any;
}