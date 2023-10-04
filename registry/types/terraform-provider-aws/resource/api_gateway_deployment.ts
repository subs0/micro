export interface APIGatewayDeployment {
    resource: Resource[];
}

export interface Resource {
    api_gateway_deployment: APIGatewayDeploymentClass;
}

export interface APIGatewayDeploymentClass {
    /** (Required) REST API identifier. */
    rest_api_id:        any;
    /** (Optional) Description of the deployment */
    description?:       any;
    /** (Optional) Name of the stage to create with this deployment. If the specified stage already exists, it will be updated to point to the new deployment. We recommend using the [`aws_api_gateway_stage` resource](api_gateway_stage.html) instead to manage stages. */
    stage_name?:        any;
    /** (Optional) Description to set on the stage managed by the `stage_name` argument. */
    stage_description?: any;
    /** (Optional) Map of arbitrary keys and values that, when changed, will trigger a redeployment. To force a redeployment without changing these keys/values, use the [`-replace` option](https://developer.hashicorp.com/terraform/cli/commands/plan#replace-address) with `terraform plan` or `terraform apply`. */
    triggers?:          any;
    /** (Optional) Map to set on the stage managed by the `stage_name` argument. */
    variables?:         any;
}