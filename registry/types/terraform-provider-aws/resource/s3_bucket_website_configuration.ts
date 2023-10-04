export interface S3BucketWebsiteConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_website_configuration: S3BucketWebsiteConfigurationClass;
}

export interface S3BucketWebsiteConfigurationClass {
    /** (Required, Forces new resource) Name of the bucket. */
    bucket?:                   any;
    error_document?:           ErrorDocument;
    /** (Optional, Forces new resource) Account ID of the expected bucket owner. */
    expected_bucket_owner?:    any;
    index_document?:           IndexDocument;
    redirect_all_requests_to?: RedirectAllRequestsTo;
    routing_rule?:             RoutingRule;
    /** (Optional, Conflicts with `routing_rule` and `redirect_all_requests_to`) JSON array containing [routing rules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html) */
    routing_rules?:            any;
    /** (Optional) Configuration block for describing a condition that must be met for the specified redirect to apply. [See below](#condition). */
    condition?:                Condition;
    /** (Required) Configuration block for redirect information. [See below](#redirect). */
    redirect?:                 Redirect;
}

export interface Condition {
    /** (Optional, Required if `key_prefix_equals` is not specified) HTTP error code when the redirect is applied. If specified with `key_prefix_equals`, then both must be true for the redirect to be applied. */
    http_error_code_returned_equals: any;
    /** (Optional, Required if `http_error_code_returned_equals` is not specified) Object key name prefix when the redirect is applied. If specified with `http_error_code_returned_equals`, then both must be true for the redirect to be applied. */
    key_prefix_equals:               any;
}

export interface ErrorDocument {
    /** (Required) Object key name to use when a 4XX class error occurs. */
    key: any;
}

export interface IndexDocument {
    /** (Required) Suffix that is appended to a request that is for a directory on the website endpoint. */
    suffix: any;
}

export interface Redirect {
    /** (Optional) Host name to use in the redirect request. */
    host_name:               any;
    /** (Optional) HTTP redirect code to use on the response. */
    http_redirect_code:      any;
    /** (Optional) Protocol to use when redirecting requests. The default is the protocol that is used in the original request. Valid values: `http`, `https`. */
    protocol:                any;
    /** (Optional, Conflicts with `replace_key_with`) Object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix `docs/` (objects in the `docs/` folder) to `documents/`, you can set a `condition` block with `key_prefix_equals` set to `docs/` and in the `redirect` set `replace_key_prefix_with` to `/documents`. */
    replace_key_prefix_with: any;
    /** (Optional, Conflicts with `replace_key_prefix_with`) Specific object key to use in the redirect request. For example, redirect request to `error.html`. */
    replace_key_with:        any;
}

export interface RedirectAllRequestsTo {
    /** (Optional) Host name to use in the redirect request. */
    host_name: any;
    /** (Optional) Protocol to use when redirecting requests. The default is the protocol that is used in the original request. Valid values: `http`, `https`. */
    protocol:  any;
}

export interface RoutingRule {
    /** (Optional) Configuration block for describing a condition that must be met for the specified redirect to apply. [See below](#condition). */
    condition: any;
    /** (Required) Configuration block for redirect information. [See below](#redirect). */
    redirect:  any;
}