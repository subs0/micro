export interface APIGatewayAccount {
    resource: Resource[];
}

export interface Resource {
    api_gateway_account: APIGatewayAccountClass;
}

export interface APIGatewayAccountClass {
    /** (Optional) ARN of an IAM role for CloudWatch (to allow logging & monitoring). See more [in AWS Docs](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-stage-settings.html#how-to-stage-settings-console). Logging & monitoring can be enabled/disabled and otherwise tuned on the API Gateway Stage level. */
    cloudwatch_role_arn?: any;
}