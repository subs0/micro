import { AWS05200 } from 'registry';
export type AWS = AWS05200;
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
type Data = NonNullable<AWS['data']>;
type IamPolicyDoc = NonNullable<Data['iam_policy_document']>;
export type Statement = NonNullable<IamPolicyDoc['statement']>;
export interface Statements extends Statement {
    [index: number]: Statement;
}
interface IamPolicyDocs extends IamPolicyDoc {
    statement?: Statement | Statements;
}
export interface DataColls extends Data {
    iam_policy_document?: IamPolicyDocs;
}
type Resource = NonNullable<AWS['resource']>;
type AcmCertificate = NonNullable<Resource['acm_certificate']>;
type DomainValidationOptions = NonNullable<AcmCertificate['domain_validation_options']>;
interface ValidationOptions extends DomainValidationOptions {
    [index: number]: DomainValidationOptions;
}
interface AcmCertificates extends AcmCertificate {
    domain_validation_options?: DomainValidationOptions | ValidationOptions;
}
export interface ResourceColls extends Resource {
    acm_certificate?: AcmCertificates;
}
export interface AWSColls extends AWS {
    data?: DataColls;
    resource?: ResourceColls;
}
export {};
//# sourceMappingURL=constants.d.ts.map