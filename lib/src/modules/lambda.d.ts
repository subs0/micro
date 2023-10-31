import { AWS } from '../types';
export declare const lambda_invoke_cred: ({ function_name, source_arn, principal, statement_id, }: {
    function_name: any;
    source_arn: any;
    principal?: string | undefined;
    statement_id?: string | undefined;
}) => AWS;
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
interface Lambda {
    name: string;
    file_path: string;
    handler: string;
    env_vars?: object;
    sns?: SNSTopicFlow;
    tags?: object;
}
/**
 * micro service module
 *
 * @param name - name of the micro service
 * @param subdomain - subdomain of the micro service
 * @param file_path - path to the lambda function zip file
 * @param handler - name of the lambda handler function
 * @param env_vars - environment variables for the lambda function
 * @param filter - filter policy for sns subscription
 * @param my - self reference for referencing other resources
 *
 * @returns - micro service module
 *
 * @example
 * ```ts
 * const module = modulate({ ms1: microServiceModule })
 * const output = module({ name: 'throwaway-test-123', subdomain: 'bloop' })
 * const compiler = config(provider, terraform, 'main.tf.json')
 * const compiled = compiler(output)
 * ```
 */
export declare const lambda: ({ name, file_path, handler, env_vars, tags, sns, }: Lambda, my: {
    [key: string]: AWS;
}) => {
    sns_invoke_cred?: AWS | undefined;
    subscription?: AWS | undefined;
    iam_policy_doc: AWS;
    lambda_role: AWS;
    bucket: AWS;
    bucket_access_creds: AWS;
    bucket_cors: AWS;
    bucket_policy: AWS;
    cloudwatch: AWS;
    lambda_access_creds: AWS;
    lambda_policy: AWS;
    lambda_policy_attachment: AWS;
    lambda: AWS;
};
export {};
//# sourceMappingURL=lambda.d.ts.map