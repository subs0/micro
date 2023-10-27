import { AWS, AWSColls } from '../constants';
export declare const lambda_invoke_cred: ({ function_name, source_arn, principal, statement_id, }: {
    function_name: any;
    source_arn: any;
    principal?: string | undefined;
    statement_id?: string | undefined;
}) => AWS;
interface SNSTopic {
    /** SNS Topic ARN */
    topic_arn: string;
    /** The name cannot start with `AWS.` or `Amazon.` See [DOCS](https://docs.aws.amazon.com/sns/latest/dg/sns-publishing.html) for more... */
    message_attrs?: object;
    filter_policy?: object;
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
export declare const micro: ({ name, file_path, handler, env_vars, sns, tags, }: Lambda, my: {
    [key: string]: import("../../registry").AWS05200;
}) => {
    sns_invoke_cred?: import("../../registry").AWS05200 | undefined;
    subscription?: import("../../registry").AWS05200 | undefined;
    lambda_creds: import("../../registry").AWS05200;
    cloudwatch: import("../../registry").AWS05200;
    lambda_policy: import("../../registry").AWS05200;
    lambda_role: import("../../registry").AWS05200;
    lambda_policy_attachment: import("../../registry").AWS05200;
    s3: import("../../registry").AWS05200;
    lambda: import("../../registry").AWS05200;
    lambda_access_creds: AWSColls;
};
export {};
//# sourceMappingURL=lambda.d.ts.map