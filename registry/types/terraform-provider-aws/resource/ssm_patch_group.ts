export interface SsmPatchGroup {
    resource: Resource[];
}

export interface Resource {
    ssm_patch_group: SsmPatchGroupClass;
}

export interface SsmPatchGroupClass {
    /** (Required) The ID of the patch baseline to register the patch group with. */
    baseline_id: any;
    /** (Required) The name of the patch group that should be registered with the patch baseline. */
    patch_group: any;
}