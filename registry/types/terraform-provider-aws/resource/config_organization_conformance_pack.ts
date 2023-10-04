export interface ConfigOrganizationConformancePack {
    resource: Resource[];
}

export interface Resource {
    config_organization_conformance_pack: ConfigOrganizationConformancePackClass;
}

export interface ConfigOrganizationConformancePackClass {
    /** (Required, Forces new resource) The name of the organization conformance pack. Must begin with a letter and contain from 1 to 128 alphanumeric characters and hyphens. */
    name?:                   any;
    /** (Optional) Amazon S3 bucket where AWS Config stores conformance pack templates. Delivery bucket must begin with `awsconfigconforms` prefix. Maximum length of 63. */
    delivery_s3_bucket?:     any;
    /** (Optional) The prefix for the Amazon S3 bucket. Maximum length of 1024. */
    delivery_s3_key_prefix?: any;
    /** (Optional) Set of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. Maximum of 1000 accounts. */
    excluded_accounts?:      any;
    /** (Optional) Set of configuration blocks describing input parameters passed to the conformance pack template. Documented below. When configured, the parameters must also be included in the `template_body` or in the template stored in Amazon S3 if using `template_s3_uri`. */
    input_parameter?:        any;
    /** (Optional, Conflicts with `template_s3_uri`) A string containing full conformance pack template body. Maximum length of 51200. Drift detection is not possible with this argument. */
    template_body?:          any;
    /** (Optional, Conflicts with `template_body`) Location of file, e.g., `s3://bucketname/prefix`, containing the template body. The uri must point to the conformance pack template that is located in an Amazon S3 bucket in the same region as the conformance pack. Maximum length of 1024. Drift detection is not possible with this argument. */
    template_s3_uri?:        any;
    /** (Required) The input key. */
    parameter_name:          any;
    /** (Required) The input value. */
    parameter_value:         any;
}