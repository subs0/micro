import { AWS05200 } from '../registry';
type AwsVersion = AWS05200;
export declare const PIVOT_POINTS: string[];
export declare const ROOT_MEMBERS: string[];
export declare const GLOBALS: string[];
export interface SharedResource {
    name: string;
    lambda: string;
    ref: string;
    type: string;
    actions: string[];
    role_arn?: string;
    filter_policy?: object;
    message_attrs?: object;
    retention_in_days?: number;
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[] ? RecursivePartial<U>[] : T[P] extends object | undefined ? RecursivePartial<T[P]> : T[P];
};
export declare const flag: {
    BroughtToYouBy: string;
};
export type NestedObject = {
    [key: string]: NestedObject;
};
export interface IProvider {
    provider: {
        [key: string]: {
            region: string;
            profile?: string;
            alias?: string;
        };
    };
}
export interface ITerraform {
    terraform: {
        required_providers: {
            [key: string]: {
                source: string;
                version: string;
            };
        };
    };
}
export interface AWS extends AwsVersion {
    data?: Datums;
    resource?: Resources;
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
    external?: RecursivePartial<typeof externalEx>;
    export?: string;
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
    local_file?: Partial<typeof localFileEx>;
    null_resource?: RecursivePartial<typeof nullResourceEx>;
    export?: string;
    random_pet?: {
        id: string;
    };
}
declare const externalEx: {
    program: string[];
    query: {
        paths: string;
        docker: string | null;
        artifacts_dir: string;
        runtime: string;
        source_path: string;
        hash_extra: string;
        hash_extra_paths: string;
        recreate_missing_package: boolean;
    };
    result: {
        build_plan: string;
        build_plan_filename: string;
        filename: string;
        timestamp: string;
    };
};
declare const localFileEx: {
    content: string;
    filename: string;
    directory_permission: string;
    file_permission: string;
};
declare const nullResourceEx: {
    triggers: {
        filename: string;
        timestamp: string;
    };
    provisioner: {
        'local-exec': {
            interpreter: string[];
            command: string;
        };
    };
    depends_on: string[];
};
export {};
//# sourceMappingURL=constants.d.ts.map