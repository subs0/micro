export interface IamOpenidConnectProvider {
    data: Datum[];
}

export interface Datum {
    iam_openid_connect_provider: IamOpenidConnectProviderClass;
}

export interface IamOpenidConnectProviderClass {
    /** (Optional) ARN of the OpenID Connect provider. */
    arn?: any;
    /** (Optional) URL of the OpenID Connect provider. */
    url?: any;
}