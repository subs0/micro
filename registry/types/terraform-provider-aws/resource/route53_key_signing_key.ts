export interface Route53KeySigningKey {
    resource: Resource[];
}

export interface Resource {
    route53_key_signing_key: Route53KeySigningKeyClass;
}

export interface Route53KeySigningKeyClass {
    /** (Required) Identifier of the Route 53 Hosted Zone. */
    hosted_zone_id:             any;
    /** (Required) Amazon Resource Name (ARN) of the Key Management Service (KMS) Key. This must be unique for each key-signing key (KSK) in a single hosted zone. This key must be in the `us-east-1` Region and meet certain requirements, which are described in the [Route 53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec-cmk-requirements.html) and [Route 53 API Reference](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateKeySigningKey.html). */
    key_management_service_arn: any;
    /** (Required) Name of the key-signing key (KSK). Must be unique for each key-singing key in the same hosted zone. */
    name:                       any;
    /** (Optional) Status of the key-signing key (KSK). Valid values: `ACTIVE`, `INACTIVE`. Defaults to `ACTIVE`. */
    status?:                    any;
}