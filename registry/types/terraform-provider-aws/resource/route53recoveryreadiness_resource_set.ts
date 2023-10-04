export interface Route53RecoveryreadinessResourceSet {
    resource: Resource[];
}

export interface Resource {
    route53recoveryreadiness_resource_set: Route53RecoveryreadinessResourceSetClass;
}

export interface Route53RecoveryreadinessResourceSetClass {
    /** (Required) Unique name describing the resource set. */
    resource_set_name:    any;
    /** (Required) Type of the resources in the resource set. */
    resource_set_type:    any;
    resources?:           Resources;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Required if `resource_arn` is not set) Component for DNS/Routing Control Readiness Checks. */
    dns_target_resource?: DNSTargetResource;
    /** (Optional) Target resource the R53 record specified with the above params points to. */
    target_resource?:     TargetResource;
    /** (Optional) NLB resource a DNS Target Resource points to. Required if `r53_resource` is not set. */
    nlb_resource?:        NlbResource;
    /** (Optional) Route53 resource a DNS Target Resource record points to. */
    r53_resource?:        R53Resource;
}

export interface DNSTargetResource {
    /** (Optional) Domain name that is targeted. */
    domain_name:     any;
    /** (Optional) Hosted Zone ARN that contains the DNS record with the provided name of target resource. */
    hosted_zone_arn: any;
    /** (Optional) Resource record set ID that is targeted. */
    record_set_id:   any;
    /** (Optional) Type of DNS Record of target resource. */
    record_type:     any;
    /** (Optional) Target resource the R53 record specified with the above params points to. */
    target_resource: any;
}

export interface NlbResource {
    /** (Required) NLB resource ARN. */
    arn: any;
}

export interface R53Resource {
    /** (Optional) Domain name that is targeted. */
    domain_name:   any;
    /** (Optional) Resource record set ID that is targeted. */
    record_set_id: any;
}

export interface Resources {
    /** (Required if `resource_arn` is not set) Component for DNS/Routing Control Readiness Checks. */
    dns_target_resource: any;
    /** (Optional) Recovery group ARN or cell ARN that contains this resource set. */
    readiness_scopes:    any;
    /** (Required if `dns_target_resource` is not set) ARN of the resource. */
    resource_arn:        any;
}

export interface TargetResource {
    /** (Optional) NLB resource a DNS Target Resource points to. Required if `r53_resource` is not set. */
    nlb_resource: any;
    /** (Optional) Route53 resource a DNS Target Resource record points to. */
    r53_resource: any;
}