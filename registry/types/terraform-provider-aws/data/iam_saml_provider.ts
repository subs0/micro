export interface IamSamlProvider {
    data: Datum[];
}

export interface Datum {
    iam_saml_provider: IamSamlProviderClass;
}

export interface IamSamlProviderClass {
    /** (Required) ARN assigned by AWS for the provider. */
    arn: any;
}