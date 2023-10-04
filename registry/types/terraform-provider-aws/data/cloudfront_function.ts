export interface CloudfrontFunction {
    data: Datum[];
}

export interface Datum {
    cloudfront_function: CloudfrontFunctionClass;
}

export interface CloudfrontFunctionClass {
    /** (Required) Name of the CloudFront function. */
    name:  any;
    /** (Required) Function’s stage, either `DEVELOPMENT` or `LIVE`. */
    stage: any;
}