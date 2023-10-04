export interface LambdaAlias {
    data: Datum[];
}

export interface Datum {
    lambda_alias: LambdaAliasClass;
}

export interface LambdaAliasClass {
    /** (Required) Name of the aliased Lambda function. */
    function_name: any;
    /** (Required) Name of the Lambda alias. */
    name:          any;
}