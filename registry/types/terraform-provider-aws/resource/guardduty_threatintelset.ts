export interface GuarddutyThreatintelset {
    resource: Resource[];
}

export interface Resource {
    guardduty_threatintelset: GuarddutyThreatintelsetClass;
}

export interface GuarddutyThreatintelsetClass {
    /** (Required) Specifies whether GuardDuty is to start using the uploaded ThreatIntelSet. */
    activate:    any;
    /** (Required) The detector ID of the GuardDuty. */
    detector_id: any;
    /** (Required) The format of the file that contains the ThreatIntelSet. Valid values: `TXT` | `STIX` | `OTX_CSV` | `ALIEN_VAULT` | `PROOF_POINT` | `FIRE_EYE` */
    format:      any;
    /** (Required) The URI of the file that contains the ThreatIntelSet. */
    location:    any;
    /** (Required) The friendly name to identify the ThreatIntelSet. */
    name:        any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:       any;
}