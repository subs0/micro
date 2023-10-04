export interface APIGatewayDomainName {
    resource: Resource[];
}

export interface Resource {
    api_gateway_domain_name: APIGatewayDomainNameClass;
}

export interface APIGatewayDomainNameClass {
    /** (Required) Fully-qualified domain name to register. */
    domain_name:                             any;
    endpoint_configuration?:                 EndpointConfiguration;
    mutual_tls_authentication?:              MutualTLSAuthentication;
    /** (Optional) ARN of the AWS-issued certificate used to validate custom domain ownership (when `certificate_arn` is issued via an ACM Private CA or `mutual_tls_authentication` is configured with an ACM-imported certificate.) */
    ownership_verification_certificate_arn?: any;
    /** (Optional) Transport Layer Security (TLS) version + cipher suite for this DomainName. Valid values are `TLS_1_0` and `TLS_1_2`. Must be configured to perform drift detection. */
    security_policy?:                        any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                   any;
    /** (Optional) ARN for an AWS-managed certificate. AWS Certificate Manager is the only supported source. Used when an edge-optimized domain name is desired. Conflicts with `certificate_name`, `certificate_body`, `certificate_chain`, `certificate_private_key`, `regional_certificate_arn`, and `regional_certificate_name`. */
    certificate_arn?:                        any;
    /** (Optional) ARN for an AWS-managed certificate. AWS Certificate Manager is the only supported source. Used when a regional domain name is desired. Conflicts with `certificate_arn`, `certificate_name`, `certificate_body`, `certificate_chain`, and `certificate_private_key`. */
    regional_certificate_arn?:               any;
    /** (Optional) Certificate issued for the domain name being registered, in PEM format. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`. */
    certificate_body?:                       any;
    /** (Optional) Certificate for the CA that issued the certificate, along with any intermediate CA certificates required to create an unbroken chain to a certificate trusted by the intended API clients. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`. */
    certificate_chain?:                      any;
    /** (Optional) Unique name to use when registering this certificate as an IAM server certificate. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`. Required if `certificate_arn` is not set. */
    certificate_name?:                       any;
    /** (Optional) Private key associated with the domain certificate given in `certificate_body`. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`. */
    certificate_private_key?:                any;
    /** (Optional) User-friendly name of the certificate that will be used by regional endpoint for this domain name. Conflicts with `certificate_arn`, `certificate_name`, `certificate_body`, `certificate_chain`, and `certificate_private_key`. */
    regional_certificate_name?:              any;
}

export interface EndpointConfiguration {
    /** (Required) List of endpoint types. This resource currently only supports managing a single value. Valid values: `EDGE` or `REGIONAL`. If unspecified, defaults to `EDGE`. Must be declared as `REGIONAL` in non-Commercial partitions. Refer to the [documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/create-regional-api.html) for more information on the difference between edge-optimized and regional APIs. */
    types: any;
}

export interface MutualTLSAuthentication {
    /** (Required) Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, `s3://bucket-name/key-name`. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. */
    truststore_uri:     any;
    /** (Optional) Version of the S3 object that contains the truststore. To specify a version, you must have versioning enabled for the S3 bucket. */
    truststore_version: any;
}