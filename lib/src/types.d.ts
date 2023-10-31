import { AWS05200 } from 'registry';
type AwsVersion = AWS05200;
export declare const flag: {
    BroughtToYouBy: string;
};
export type NestedObject = {
    [key: string]: NestedObject;
};
export interface Provider {
    [key: string]: {
        region: string;
        profile?: string;
        alias?: string;
    };
}
export interface Terraform {
    required_providers: {
        [key: string]: {
            source: string;
            version: string;
        };
    };
}
/**
 * The following type customizations provide an example of how to modify a block
 * to allow for Array values in addition to default interfaces...
 *
 * reference blog [1]
 */
type Data = NonNullable<AwsVersion['data']>;
type IamPolicyDoc = NonNullable<Data['iam_policy_document']>;
export type Statement = NonNullable<IamPolicyDoc['statement']>;
export interface Statements extends Statement {
    [index: number]: Statement;
}
interface IamPolicyDocs extends IamPolicyDoc {
    statement?: Statement | Statements;
}
export interface Datums extends Data {
    iam_policy_document?: IamPolicyDocs;
}
type Resource = NonNullable<AwsVersion['resource']>;
type AcmCertificate = NonNullable<Resource['acm_certificate']>;
type DomainValidationOptions = NonNullable<AcmCertificate['domain_validation_options']>;
interface ValidationOptions extends DomainValidationOptions {
    [index: number]: DomainValidationOptions;
}
interface AcmCertificates extends AcmCertificate {
    domain_validation_options?: DomainValidationOptions | ValidationOptions;
}
type ApiGw2DomainName = NonNullable<Resource['apigatewayv2_domain_name']>;
type DomainNameConfiguration = NonNullable<ApiGw2DomainName['domain_name_configuration']>;
interface DomainNameConfigurations extends DomainNameConfiguration {
    [index: number]: DomainNameConfiguration;
}
interface ApiGw2DomainNames extends ApiGw2DomainName {
    domain_name_configuration: DomainNameConfigurations | DomainNameConfiguration;
}
export interface Resources extends Resource {
    acm_certificate?: AcmCertificates;
    apigatewayv2_domain_name?: ApiGw2DomainNames;
}
export interface AWS extends AwsVersion {
    data?: Datums;
    resource?: Resources;
}
export {};
//# sourceMappingURL=types.d.ts.map