export interface SsmDefaultPatchBaseline {
    resource: Resource[];
}

export interface Resource {
    ssm_default_patch_baseline: SsmDefaultPatchBaselineClass;
}

export interface SsmDefaultPatchBaselineClass {
    /** (Required) ID of the patch baseline. */
    baseline_id:      any;
    /** (Required) The operating system the patch baseline applies to. */
    operating_system: any;
}