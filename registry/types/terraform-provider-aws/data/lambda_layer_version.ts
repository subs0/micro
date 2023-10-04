export interface LambdaLayerVersion {
    data: Datum[];
}

export interface Datum {
    lambda_layer_version: LambdaLayerVersionClass;
}

export interface LambdaLayerVersionClass {
    /** (Required) Name of the lambda layer. */
    layer_name: any;
    /** (Optional) Specific layer version. Conflicts with `compatible_runtime` and `compatible_architecture`. If omitted, the latest available layer version will be used. */
    version?:   any;
}