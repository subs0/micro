export interface Apigatewayv2Deployment {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_deployment: Apigatewayv2DeploymentClass;
}

export interface Apigatewayv2DeploymentClass {
    /** (Required) API identifier. */
    api_id:       any;
    /** (Optional) Description for the deployment resource. Must be less than or equal to 1024 characters in length. */
    description?: any;
    /** (Optional) Map of arbitrary keys and values that, when changed, will trigger a redeployment. To force a redeployment without changing these keys/values, use the [`terraform taint` command](https://www.terraform.io/docs/commands/taint.html). */
    triggers?:    any;
}