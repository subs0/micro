export interface AcmpcaCertificateAuthority {
    resource: Resource[];
}

export interface Resource {
    acmpca_certificate_authority: AcmpcaCertificateAuthorityClass;
}

export interface AcmpcaCertificateAuthorityClass {
    certificate_authority_configuration: CertificateAuthorityConfiguration;
    revocation_configuration?:           RevocationConfiguration;
    /** (Optional) Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days. Defaults to `GENERAL_PURPOSE`. Valid values: `GENERAL_PURPOSE` and `SHORT_LIVED_CERTIFICATE`. */
    usage_mode?:                         any;
    /** (Optional) Key-value map of user-defined tags that are attached to the certificate authority. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
    /** (Optional) Type of the certificate authority. Defaults to `SUBORDINATE`. Valid values: `ROOT` and `SUBORDINATE`. */
    type?:                               any;
    /** (Optional) Cryptographic key management compliance standard used for handling CA keys. Defaults to `FIPS_140_2_LEVEL_3_OR_HIGHER`. Valid values: `FIPS_140_2_LEVEL_3_OR_HIGHER` and `FIPS_140_2_LEVEL_2_OR_HIGHER`. Supported standard for each region can be found in the [Storage and security compliance of AWS Private CA private keys Documentation](https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys). */
    key_storage_security_standard?:      any;
    /** (Optional) Number of days to make a CA restorable after it has been deleted, must be between 7 to 30 days, with default to 30 days. */
    permanent_deletion_time_in_days?:    any;
}

export interface CertificateAuthorityConfiguration {
    /** (Required) Type of the public key algorithm and size, in bits, of the key pair that your key pair creates when it issues a certificate. Valid values can be found in the [ACM PCA Documentation](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CertificateAuthorityConfiguration.html). */
    key_algorithm:                 any;
    /** (Required) Name of the algorithm your private CA uses to sign certificate requests. Valid values can be found in the [ACM PCA Documentation](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CertificateAuthorityConfiguration.html). */
    signing_algorithm:             any;
    /** (Required) Nested argument that contains X.500 distinguished name information. At least one nested attribute must be specified. */
    subject:                       any;
    /** (Optional) Fully qualified domain name (FQDN) associated with the certificate subject. Must be less than or equal to 64 characters in length. */
    common_name?:                  any;
    /** (Optional) Two digit code that specifies the country in which the certificate subject located. Must be less than or equal to 2 characters in length. */
    country?:                      any;
    /** (Optional) Disambiguating information for the certificate subject. Must be less than or equal to 64 characters in length. */
    distinguished_name_qualifier?: any;
    /** (Optional) Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third. Must be less than or equal to 3 characters in length. */
    generation_qualifier?:         any;
    /** (Optional) First name. Must be less than or equal to 16 characters in length. */
    given_name?:                   any;
    /** (Optional) Concatenation that typically contains the first letter of the `given_name`, the first letter of the middle name if one exists, and the first letter of the `surname`. Must be less than or equal to 5 characters in length. */
    initials?:                     any;
    /** (Optional) Locality (such as a city or town) in which the certificate subject is located. Must be less than or equal to 128 characters in length. */
    locality?:                     any;
    /** (Optional) Legal name of the organization with which the certificate subject is affiliated. Must be less than or equal to 64 characters in length. */
    organization?:                 any;
    /** (Optional) Subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated. Must be less than or equal to 64 characters in length. */
    organizational_unit?:          any;
    /** (Optional) Typically a shortened version of a longer `given_name`. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza. Must be less than or equal to 128 characters in length. */
    pseudonym?:                    any;
    /** (Optional) State in which the subject of the certificate is located. Must be less than or equal to 128 characters in length. */
    state?:                        any;
    /** (Optional) Family name. In the US and the UK for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first. Must be less than or equal to 40 characters in length. */
    surname?:                      any;
    /** (Optional) Title such as Mr. or Ms. which is pre-pended to the name to refer formally to the certificate subject. Must be less than or equal to 64 characters in length. */
    title?:                        any;
}

export interface RevocationConfiguration {
    /** (Optional) Nested argument containing configuration of the certificate revocation list (CRL), if any, maintained by the certificate authority. Defined below. */
    crl_configuration:  any;
    /** (Optional) Nested argument containing configuration of */
    ocsp_configuration: any;
    /** (Optional) Name inserted into the certificate CRL Distribution Points extension that enables the use of an alias for the CRL distribution point. Use this value if you don't want the name of your S3 bucket to be public. Must be less than or equal to 253 characters in length. */
    custom_cname:       any;
    /** (Required) Boolean value that specifies whether a custom OCSP responder is enabled. */
    enabled:            any;
    /** (Optional, Required if `enabled` is `true`) Number of days until a certificate expires. Must be between 1 and 5000. */
    expiration_in_days: any;
    /** (Optional, Required if `enabled` is `true`) Name of the S3 bucket that contains the CRL. If you do not provide a value for the `custom_cname` argument, the name of your S3 bucket is placed into the CRL Distribution Points extension of the issued certificate. You must specify a bucket policy that allows ACM PCA to write the CRL to your bucket. Must be between 3 and 255 characters in length. */
    s3_bucket_name:     any;
    /** (Optional) Determines whether the CRL will be publicly readable or privately held in the CRL Amazon S3 bucket. Defaults to `PUBLIC_READ`. */
    s3_object_acl:      any;
    /** (Optional) CNAME specifying a customized OCSP domain. Note: The value of the CNAME must not include a protocol prefix such as "http://" or "https://". */
    ocsp_custom_cname:  any;
}