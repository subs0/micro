export interface Route53RecoveryreadinessReadinessCheck {
    resource: Resource[];
}

export interface Resource {
    route53recoveryreadiness_readiness_check: Route53RecoveryreadinessReadinessCheckClass;
}

export interface Route53RecoveryreadinessReadinessCheckClass {
    /** (Required) Unique name describing the readiness check. */
    readiness_check_name: any;
    /** (Required) Name describing the resource set that will be monitored for readiness. */
    resource_set_name:    any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
}