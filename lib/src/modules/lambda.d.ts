import { AWS, Omit } from '../constants';
export declare const lambdaInvokeCred: ({ function_name, source_arn, principal, statement_id, }: {
    function_name: any;
    source_arn: any;
    principal?: string | undefined;
    statement_id?: string | undefined;
}) => AWS;
interface LambdaFunction {
    name: string;
    /** can either be a path to a file or a reference to a docker image */
    file_path: string;
    /** environment variables to be added to lambda */
    env_vars?: object;
    /** Between 512 MB and 10,240 MB, in 1-MB increments */
    tmp_storage?: number;
    /** (<filename>.<function_name> of handler) if using Docker (container) Image, this should not be set */
    handler?: string;
    /** (e.g., 'python3.x' 'node18.x') if using Docker (container) Image, this should not be set */
    runtime?: string;
    /** lambda role ARN */
    role_arn?: string;
    /** name of cloudwatch log group */
    log_group_name?: string;
    /** available [x86_64, arm64] */
    architectures?: string[];
    /**
     * Lambda functions with memory configuration greater than 3GB are currently
     * unavailable for first time use in some regions... If you urgently
     * require to use your function with memory greater than 3GB, please provide
     * your account and region details so we can expedite access internally.
     *
     * Maximum = 10GB (available in major/select regions)
     *
     * Maximum = 3GB (available in all regions)
     *
     * [Reference](https://stackoverflow.com/questions/70943739/aws-lambda-memorysize-value-failed-to-satisfy-constraint)
     */
    memory_size?: number;
    /** max timeout = 900 seconds */
    timeout?: number;
    package_type?: string;
    tags?: object;
    depends_on?: string[];
}
interface MessageAttributes {
    /** key (name) can contain the following characters: A-Z, a-z, 0-9, underscore(_), hyphen(-), and period (.) */
    [key: string]: {
        /** Can be: 'String', 'Number', 'Binary', or 'String.Array' (which can contain strings, numbers, true, false, and null) */
        DataType: string;
        StringValue?: any[] | any;
    };
}
interface SNSTopic {
    /** SNS Topic ARN */
    topic_arn: string;
    /** Message Attribute keys (names) cannot start with `AWS.` or `Amazon.` See [Docs](https://docs.aws.amazon.com/sns/latest/dg/sns-publishing.html) for more info. */
    message_attrs?: MessageAttributes;
    /** See [Examples in Docs](https://docs.aws.amazon.com/sns/latest/dg/example-filter-policies.html) */
    filter_policy?: {
        [key: string]: any[];
    };
}
interface SNSTopicFlow {
    /** SNS Topic subscribed to */
    upstream?: SNSTopic;
    /** SNS Topic to publish to */
    downstream?: SNSTopic;
}
interface Output {
    policy_doc?: AWS;
    role?: AWS;
    bucket?: AWS;
    bucket_access_creds?: AWS;
    cloudwatch?: AWS;
    access_creds?: AWS;
    policy?: AWS;
    policy_attachment?: AWS;
    function?: AWS;
    sns_invoke_cred?: AWS;
    subscription?: AWS;
    pet?: AWS;
}
interface LambdaOmissions {
    package_type: string;
}
export interface ILambdaFn extends Omit<LambdaFunction, keyof LambdaOmissions> {
    /** settings to attach lambda to SNS Topic */
    sns?: SNSTopicFlow;
    /** whether or not to create dedicated s3 bucket for the lambda */
    bucket?: boolean;
}
/**
 * Lambda module
 */
export declare const Lambda: ({ name, runtime, handler, file_path, architectures, memory_size, timeout, env_vars, tags, depends_on, tmp_storage, bucket, sns, }: ILambdaFn, my: Output) => Output;
export declare const lambdaModule: (args_0: ILambdaFn, ...args_1: [(ILambdaFn | undefined)?, (Output | undefined)?][]) => [Output, Output];
export {};
//# sourceMappingURL=lambda.d.ts.map