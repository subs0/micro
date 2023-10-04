export interface S3BucketCorsConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_cors_configuration: S3BucketCorsConfigurationClass;
}

export interface S3BucketCorsConfigurationClass {
    /** (Required, Forces new resource) Name of the bucket. */
    bucket?:                any;
    /** (Optional, Forces new resource) Account ID of the expected bucket owner. */
    expected_bucket_owner?: any;
    cors_rule:              CorsRule;
}

export interface CorsRule {
    /** (Optional) Set of Headers that are specified in the `Access-Control-Request-Headers` header. */
    allowed_headers?: any;
    /** (Required) Set of HTTP methods that you allow the origin to execute. Valid values are `GET`, `PUT`, `HEAD`, `POST`, and `DELETE`. */
    allowed_methods:  any;
    /** (Required) Set of origins you want customers to be able to access the bucket from. */
    allowed_origins:  any;
    /** (Optional) Set of headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object). */
    expose_headers?:  any;
    /** (Optional) Unique identifier for the rule. The value cannot be longer than 255 characters. */
    id?:              any;
    /** (Optional) Time in seconds that your browser is to cache the preflight response for the specified resource. */
    max_age_seconds?: any;
}