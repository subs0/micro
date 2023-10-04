export interface CloudfrontDistribution {
    resource: Resource[];
}

export interface Resource {
    cloudfront_distribution: CloudfrontDistributionClass;
}

export interface CloudfrontDistributionClass {
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** The [CloudFront custom origin](#custom-origin-config-arguments) configuration information. If an S3 origin is required, use `origin_access_control_id` or `s3_origin_config` instead. */
    custom_origin_config?:           any;
    /** (Optional) [CloudFront Origin Shield](#origin-shield-arguments) configuration information. Using Origin Shield can help reduce the load on your origin. For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the Amazon CloudFront Developer Guide. */
    origin_shield?:                  any;
    /** (Optional) [CloudFront S3 origin](#s3-origin-config-arguments) configuration information. If a custom origin is required, use `custom_origin_config` instead. */
    s3_origin_config?:               any;
    /** (Optional) The Custom KeepAlive timeout, in seconds. By default, AWS enforces an upper limit of `60`. But you can request an [increase](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout). Defaults to `5`. */
    origin_keepalive_timeout?:       any;
    /** (Optional) The Custom Read timeout, in seconds. By default, AWS enforces an upper limit of `60`. But you can request an [increase](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout). Defaults to `30`. */
    origin_read_timeout?:            any;
    /** ARN of the [AWS Certificate Manager][6] certificate that you wish to use with this distribution. Specify this, `cloudfront_default_certificate`, or `iam_certificate_id`.  The ACM certificate must be in  US-EAST-1. */
    acm_certificate_arn?:            any;
    /** `true` if you want viewers to use HTTPS to request your objects and you're using the CloudFront domain name for your distribution. Specify this, `acm_certificate_arn`, or `iam_certificate_id`. */
    cloudfront_default_certificate?: any;
    /** IAM certificate identifier of the custom viewer certificate for this distribution if you are using a custom domain. Specify this, `acm_certificate_arn`, or `cloudfront_default_certificate`. */
    iam_certificate_id?:             any;
    /** Minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections. Can only be set if `cloudfront_default_certificate = false`. See all possible values in [this](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html) table under "Security policy." Some examples include: `TLSv1.2_2019` and `TLSv1.2_2021`. Default: `TLSv1`. **NOTE**: If you are using a custom certificate (specified with `acm_certificate_arn` or `iam_certificate_id`), and have specified `sni-only` in `ssl_support_method`, `TLSv1` or later must be specified. If you have specified `vip` in `ssl_support_method`, only `SSLv3` or `TLSv1` can be specified. If you have specified `cloudfront_default_certificate`, `TLSv1` must be specified. */
    minimum_protocol_version?:       any;
    /** How you want CloudFront to serve HTTPS requests. One of `vip` or `sni-only`. Required if you specify `acm_certificate_arn` or `iam_certificate_id`. **NOTE:** `vip` causes CloudFront to use a dedicated IP address and may incur extra charges. */
    ssl_support_method?:             any;
}