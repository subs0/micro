export interface BatchSchedulingPolicy {
    resource: Resource[];
}

export interface Resource {
    batch_scheduling_policy: BatchSchedulingPolicyClass;
}

export interface BatchSchedulingPolicyClass {
    /** (Optional) A fairshare policy block specifies the `compute_reservation`, `share_delay_seconds`, and `share_distribution` of the scheduling policy. The `fairshare_policy` block is documented below. */
    fairshare_policy?:    any;
    /** (Required) Specifies the name of the scheduling policy. */
    name:                 any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Optional) A value used to reserve some of the available maximum vCPU for fair share identifiers that have not yet been used. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html). */
    compute_reservation?: any;
    /** (Optional) The time period to use to calculate a fair share percentage for each fair share identifier in use, in seconds. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html). */
    share_delay_seconds?: any;
    /** (Optional) One or more share distribution blocks which define the weights for the fair share identifiers for the fair share policy. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html). The `share_distribution` block is documented below. */
    share_distribution?:  any;
    /** (Required) A fair share identifier or fair share identifier prefix. For more information, see [ShareAttributes](https://docs.aws.amazon.com/batch/latest/APIReference/API_ShareAttributes.html). */
    share_identifier:     any;
    /** (Optional) The weight factor for the fair share identifier. For more information, see [ShareAttributes](https://docs.aws.amazon.com/batch/latest/APIReference/API_ShareAttributes.html). */
    weight_factor?:       any;
}