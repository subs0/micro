export interface Apigatewayv2DomainName {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_domain_name: Apigatewayv2DomainNameClass;
}

export interface Apigatewayv2DomainNameClass {
    /** (Required) Domain name. Must be between 1 and 512 characters in length. */
    domain_name:                             any;
    /** (Required) Domain name configuration. See below. */
    domain_name_configuration:               any;
    /** (Optional) Mutual TLS authentication configuration for the domain name. */
    mutual_tls_authentication?:              any;
    /** (Optional) Map of tags to assign to the domain name. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                   any;
    /** (Required) ARN of an AWS-managed certificate that will be used by the endpoint for the domain name. AWS Certificate Manager is the only supported source. Use the [`aws_acm_certificate`](/docs/providers/aws/r/acm_certificate.html) resource to configure an ACM certificate. */
    certificate_arn:                         any;
    /** (Required) Endpoint type. Valid values: `REGIONAL`. */
    endpoint_type:                           any;
    /** (Computed) Amazon Route 53 Hosted Zone ID of the endpoint. */
    hosted_zone_id?:                         any;
    /** (Optional) ARN of the AWS-issued certificate used to validate custom domain ownership (when `certificate_arn` is issued via an ACM Private CA or `mutual_tls_authentication` is configured with an ACM-imported certificate.) */
    ownership_verification_certificate_arn?: any;
    /** (Required) Transport Layer Security (TLS) version of the [security policy](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-custom-domain-tls-version.html) for the domain name. Valid values: `TLS_1_2`. */
    security_policy:                         any;
    /** (Computed) Target domain name. */
    target_domain_name?:                     any;
    /** (Required) Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, `s3://bucket-name/key-name`. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. */
    truststore_uri:                          any;
    /** (Optional) Version of the S3 object that contains the truststore. To specify a version, you must have versioning enabled for the S3 bucket. */
    truststore_version?:                     any;
}