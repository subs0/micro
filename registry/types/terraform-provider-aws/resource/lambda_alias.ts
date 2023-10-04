export interface LambdaAlias {
    resource: Resource[];
}

export interface Resource {
    lambda_alias: LambdaAliasClass;
}

export interface LambdaAliasClass {
    /** (Required) Name for the alias you are creating. Pattern: `(?!^[0-9]+$)([a-zA-Z0-9-_]+)` */
    name:                        any;
    /** (Optional) Description of the alias. */
    description?:                any;
    /** (Required) Lambda Function name or ARN. */
    function_name:               any;
    /** (Required) Lambda function version for which you are creating the alias. Pattern: `(\$LATEST|[0-9]+)`. */
    function_version:            any;
    /** (Optional) The Lambda alias' route configuration settings. Fields documented below */
    routing_config?:             any;
    /** (Optional) A map that defines the proportion of events that should be sent to different versions of a lambda function. */
    additional_version_weights?: any;
}