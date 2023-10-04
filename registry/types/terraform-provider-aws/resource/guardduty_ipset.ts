export interface GuarddutyIpset {
    resource: Resource[];
}

export interface Resource {
    guardduty_ipset: GuarddutyIpsetClass;
}

export interface GuarddutyIpsetClass {
    /** (Required) Specifies whether GuardDuty is to start using the uploaded IPSet. */
    activate:    any;
    /** (Required) The detector ID of the GuardDuty. */
    detector_id: any;
    /** (Required) The format of the file that contains the IPSet. Valid values: `TXT` | `STIX` | `OTX_CSV` | `ALIEN_VAULT` | `PROOF_POINT` | `FIRE_EYE` */
    format:      any;
    /** (Required) The URI of the file that contains the IPSet. */
    location:    any;
    /** (Required) The friendly name to identify the IPSet. */
    name:        any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:       any;
}