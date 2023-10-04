export interface RbinRule {
    resource: Resource[];
}

export interface Resource {
    rbin_rule: RbinRuleClass;
}

export interface RbinRuleClass {
    /** (Required) The resource type to be retained by the retention rule. Valid values are `EBS_SNAPSHOT` and `EC2_IMAGE`. */
    resource_type:       any;
    retention_period:    RetentionPeriod;
    /** (Optional) The retention rule description. */
    description?:        any;
    resource_tags?:      ResourceTags;
    lock_configuration?: LockConfiguration;
    /** (Required) Information about the retention rule unlock delay. See [`unlock_delay`](#unlock_delay) below. */
    unlock_delay:        UnlockDelay;
}

export interface LockConfiguration {
    /** (Required) Information about the retention rule unlock delay. See [`unlock_delay`](#unlock_delay) below. */
    unlock_delay: any;
}

export interface ResourceTags {
    /** (Required) The tag key. */
    resource_tag_key:   any;
    /** (Optional) The tag value. */
    resource_tag_value: any;
}

export interface RetentionPeriod {
    /** (Required) The unit of time in which the retention period is measured. Currently, only DAYS is supported. */
    retention_period_unit:  any;
    /** (Required) The period value for which the retention rule is to retain resources. The period is measured using the unit specified for RetentionPeriodUnit. */
    retention_period_value: any;
}

export interface UnlockDelay {
    /** (Required) The unit of time in which to measure the unlock delay. Currently, the unlock delay can be measure only in days. */
    unlock_delay_unit:  any;
    /** (Required) The unlock delay period, measured in the unit specified for UnlockDelayUnit. */
    unlock_delay_value: any;
}