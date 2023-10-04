export interface LambdaInvocation {
    resource: Resource[];
}

export interface Resource {
    lambda_invocation: LambdaInvocationClass;
}

export interface LambdaInvocationClass {
    /** (Required) Name of the lambda function. */
    function_name:    any;
    /** (Required) JSON payload to the lambda function. */
    input:            any;
    /** (Optional) Lifecycle scope of the resource to manage. Valid values are `CREATE_ONLY` and `CRUD`. Defaults to `CREATE_ONLY`. `CREATE_ONLY` will invoke the function only on creation or replacement. `CRUD` will invoke the function on each lifecycle event, and augment the input JSON payload with additional lifecycle information. */
    lifecycle_scope?: any;
    /** (Optional) Qualifier (i.e., version) of the lambda function. Defaults to `$LATEST`. */
    qualifier?:       any;
    /** (Optional) The JSON key used to store lifecycle information in the input JSON payload. Defaults to `tf`. This additional key is only included when `lifecycle_scope` is set to `CRUD`. */
    terraform_key?:   any;
    /** (Optional) Map of arbitrary keys and values that, when changed, will trigger a re-invocation. To force a re-invocation without changing these keys/values, use the [`terraform taint` command](https://www.terraform.io/docs/commands/taint.html). */
    triggers?:        any;
}