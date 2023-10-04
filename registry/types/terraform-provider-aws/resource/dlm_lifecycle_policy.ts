export interface DlmLifecyclePolicy {
    resource: Resource[];
}

export interface Resource {
    dlm_lifecycle_policy: DlmLifecyclePolicyClass;
}

export interface DlmLifecyclePolicyClass {
    /** (Required) A description for the DLM lifecycle policy. */
    description:              any;
    /** (Required) The ARN of an IAM role that is able to be assumed by the DLM service. */
    execution_role_arn:       any;
    /** (Required) See the [`policy_details` configuration](#policy-details-arguments) block. Max of 1. */
    policy_details:           any;
    /** (Optional) Whether the lifecycle policy should be enabled or disabled. `ENABLED` or `DISABLED` are valid values. Defaults to `ENABLED`. */
    state?:                   any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
    /** (Optional) The actions to be performed when the event-based policy is triggered. You can specify only one action per policy. This parameter is required for event-based policies only. If you are creating a snapshot or AMI policy, omit this parameter. See the [`action` configuration](#action-arguments) block. */
    action?:                  any;
    /** (Optional) The event that triggers the event-based policy. This parameter is required for event-based policies only. If you are creating a snapshot or AMI policy, omit this parameter. See the [`event_source` configuration](#event-source-arguments) block. */
    event_source?:            any;
    /** (Optional) A list of resource types that should be targeted by the lifecycle policy. Valid values are `VOLUME` and `INSTANCE`. */
    resource_types?:          any;
    /** (Optional) The location of the resources to backup. If the source resources are located in an AWS Region, specify `CLOUD`. If the source resources are located on an Outpost in your account, specify `OUTPOST`. If you specify `OUTPOST`, Amazon Data Lifecycle Manager backs up all resources of the specified type with matching target tags across all of the Outposts in your account. Valid values are `CLOUD` and `OUTPOST`. */
    resource_locations?:      any;
    /** (Optional) The valid target resource types and actions a policy can manage. Specify `EBS_SNAPSHOT_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify `IMAGE_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify `EVENT_BASED_POLICY` to create an event-based policy that performs specific actions when a defined event occurs in your AWS account. Default value is `EBS_SNAPSHOT_MANAGEMENT`. */
    policy_type?:             any;
    /** (Required) Information about the event. See the [`parameters` configuration](#event-source-parameters-arguments) block. */
    parameters:               any;
    /** (Optional) See the [`schedule` configuration](#schedule-arguments) block. */
    schedule?:                any;
    /** (Optional) The rule for copying shared snapshots across Regions. See the [`cross_region_copy` configuration](#action-cross-region-copy-rule-arguments) block. */
    cross_region_copy?:       any;
    /** (Required) A name for the schedule. */
    name:                     any;
    /** (Required) The encryption settings for the copied snapshot. See the [`encryption_configuration`](#encryption-configuration-arguments) block. Max of 1 per action. */
    encryption_configuration: any;
    /** (Required) The retention rule that indicates how long snapshot copies are to be retained in the destination Region. See the [`retain_rule`](#cross-region-copy-rule-retain-rule-arguments) block. Max of 1 per schedule. */
    retain_rule:              any;
    /** (Required) The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies. */
    target:                   any;
    /** (Optional) The Amazon Resource Name (ARN) of the AWS KMS customer master key (CMK) to use for EBS encryption. If this argument is not specified, the default KMS key for the account is used. */
    cmk_arn?:                 any;
    /** (Required) To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or if encryption by default is not enabled. */
    encrypted:                any;
    /** (Required) The source of the event. Currently only managed CloudWatch Events rules are supported. Valid values are `MANAGED_CWE`. */
    type:                     any;
    /** (Required) The snapshot description that can trigger the policy. The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account. */
    description_regex:        any;
    /** (Required) The type of event. Currently, only `shareSnapshot` events are supported. */
    event_type:               any;
    /** (Required) The IDs of the AWS accounts that can trigger policy by sharing snapshots with your account. The policy only runs if one of the specified AWS accounts shares a snapshot with your account. */
    snapshot_owner:           any;
    /** (Optional) Indicates whether to exclude the root volume from snapshots created using CreateSnapshots. The default is `false`. */
    exclude_boot_volume?:     any;
    /** (Optional) Applies to AMI lifecycle policies only. Indicates whether targeted instances are rebooted when the lifecycle policy runs. `true` indicates that targeted instances are not rebooted when the policy runs. `false` indicates that target instances are rebooted when the policy runs. The default is `true` (instances are not rebooted). */
    no_reboot?:               any;
    /** (Optional) Whether to copy all user-defined tags from the source snapshot to the cross-region snapshot copy. */
    copy_tags?:               any;
    /** (Required) See the [`create_rule`](#create-rule-arguments) block. Max of 1 per schedule. */
    create_rule:              any;
    /** (Required) See the [`deprecate_rule`](#deprecate-rule-arguments) block. Max of 1 per schedule. */
    deprecate_rule:           any;
    /** (Required) See the [`fast_restore_rule`](#fast-restore-rule-arguments) block. Max of 1 per schedule. */
    fast_restore_rule:        any;
    /** (Required) See the [`share_rule`](#share-rule-arguments) block. Max of 1 per schedule. */
    share_rule:               any;
    /** (Optional) A map of tag keys and their values. DLM lifecycle policies will already tag the snapshot with the tags on the volume. This configuration adds extra tags on top of these. */
    tags_to_add?:             any;
    /** (Optional) A map of tag keys and variable values, where the values are determined when the policy is executed. Only `$(instance-id)` or `$(timestamp)` are valid values. Can only be used when `resource_types` is `INSTANCE`. */
    variable_tags?:           any;
    /** (Optional) The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1 year. Conflicts with `interval`, `interval_unit`, and `times`. */
    cron_expression?:         any;
    /** (Required) The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days. */
    interval:                 any;
    /** (Required) The unit of time for time-based retention. Valid values: `DAYS`, `WEEKS`, `MONTHS`, or `YEARS`. */
    interval_unit:            any;
    /** (Optional) Specifies the destination for snapshots created by the policy. To create snapshots in the same Region as the source resource, specify `CLOUD`. To create snapshots on the same Outpost as the source resource, specify `OUTPOST_LOCAL`. If you omit this parameter, `CLOUD` is used by default. If the policy targets resources in an AWS Region, then you must create snapshots in the same Region as the source resource. If the policy targets resources on an Outpost, then you can create snapshots on the same Outpost as the source resource, or in the Region of that Outpost. Valid values are `CLOUD` and `OUTPOST_LOCAL`. */
    location?:                any;
    /** (Optional) A list of times in 24 hour clock format that sets when the lifecycle policy should be evaluated. Max of 1. Conflicts with `cron_expression`. Must be set if `interval` is set. */
    times?:                   any;
    /** (Optional) How many snapshots to keep. Must be an integer between `1` and `1000`. Conflicts with `interval` and `interval_unit`. */
    count?:                   any;
    /** (Required) The Availability Zones in which to enable fast snapshot restore. */
    availability_zones:       any;
    /** (Required) The IDs of the AWS accounts with which to share the snapshots. */
    target_accounts:          any;
}