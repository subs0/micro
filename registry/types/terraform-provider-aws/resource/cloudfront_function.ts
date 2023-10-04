export interface CloudfrontFunction {
    resource: Resource[];
}

export interface Resource {
    cloudfront_function: CloudfrontFunctionClass;
}

export interface CloudfrontFunctionClass {
    /** (Required) Unique name for your CloudFront Function. */
    name:     any;
    /** (Required) Source code of the function */
    code:     any;
    /** (Required) Identifier of the function's runtime. Currently only `cloudfront-js-1.0` is valid. */
    runtime:  any;
    /** (Optional) Comment. */
    comment?: any;
    /** (Optional) Whether to publish creation/change as Live CloudFront Function Version. Defaults to `true`. */
    publish?: any;
}