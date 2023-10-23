import { AWS05200 as AWS } from '../registry/index';
type AWSData = NonNullable<AWS['data']>;
type IamPolicyDocument = NonNullable<AWSData['iam_policy_document']>;
type Statement = NonNullable<IamPolicyDocument['statement']>;
interface Statements extends Statement {
    [index: number]: Statement;
}
interface IamPolicyDocs extends IamPolicyDocument {
    statement: Statement | Statements;
}
interface AWSDataColls extends AWSData {
    iam_policy_document: IamPolicyDocs;
}
interface AWSColl extends AWS {
    data: AWSDataColls;
}
export declare const microServiceModule: ({ name, file_path, handler, env_vars, filter_policy, }: {
    name?: string | undefined;
    file_path?: string | undefined;
    handler?: string | undefined;
    env_vars?: {} | undefined;
    filter_policy?: {} | undefined;
}, my: {
    [key: string]: AWS;
}) => {
    lambda_policy_doc: AWSColl;
    topic: AWS;
    s3: AWS;
    lambda_role: AWS;
    lambda: AWS;
    subscription: AWS;
};
export {};
//# sourceMappingURL=module.d.ts.map