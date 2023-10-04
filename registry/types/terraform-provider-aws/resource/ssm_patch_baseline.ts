export interface SsmPatchBaseline {
    resource: Resource[];
}

export interface Resource {
    ssm_patch_baseline: SsmPatchBaselineClass;
}

export interface SsmPatchBaselineClass {
    /** (Required) The name specified to identify the patch source. */
    name:                                  any;
    /** (Optional) The description of the patch baseline. */
    description?:                          any;
    /** (Optional) The operating system the patch baseline applies to. */
    operating_system?:                     any;
    /** (Optional) The compliance level for approved patches. */
    approved_patches_compliance_level?:    any;
    /** (Optional) A list of explicitly approved patches for the baseline. */
    approved_patches?:                     any;
    /** (Optional) A list of rejected patches. */
    rejected_patches?:                     any;
    /** (Optional) A set of global filters used to exclude patches from the baseline. */
    global_filter?:                        any;
    /** (Optional) A set of rules used to include patches in the baseline. */
    approval_rule?:                        any;
    /** (Optional) Configuration block with alternate sources for patches. */
    source?:                               any;
    /** (Optional) The action for Patch Manager to take on patches included in the `rejected_patches` list. */
    rejected_patches_action?:              any;
    /** (Optional) Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. */
    approved_patches_enable_non_security?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
    /** (Optional) The number of days after the release date of each patch matched by the rule the patch is marked as approved in the patch baseline. */
    approve_after_days?:                   any;
    /** (Optional) The cutoff date for auto approval of released patches. */
    approve_until_date?:                   any;
    /** (Required) The patch filter group that defines the criteria for the rule. */
    patch_filter:                          any;
    /** (Optional) The compliance level for patches approved by this rule. */
    compliance_level?:                     any;
    /** (Optional) Boolean enabling the application of non-security updates. */
    enable_non_security?:                  any;
    /** (Required) The value of the yum repo configuration. */
    configuration:                         any;
    /** (Required) The specific operating system versions a patch repository applies to, such as `"Ubuntu16.04"`, `"AmazonLinux2016.09"`, `"RedhatEnterpriseLinux7.2"` or `"Suse12.7"`. */
    products:                              any;
}