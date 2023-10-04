export interface SsmPatchBaseline {
    data: Datum[];
}

export interface Datum {
    ssm_patch_baseline: SsmPatchBaselineClass;
}

export interface SsmPatchBaselineClass {
    /** (Required) Owner of the baseline. Valid values: `All`, `AWS`, `Self` (the current account). */
    owner:             any;
    /** (Optional) Filter results by the baseline name prefix. */
    name_prefix?:      any;
    /** (Optional) Filters the results against the baselines default_baseline field. */
    default_baseline?: any;
    /** (Optional) Specified OS for the baseline. Valid values: `AMAZON_LINUX`, `AMAZON_LINUX_2`, `UBUNTU`, `REDHAT_ENTERPRISE_LINUX`, `SUSE`, `CENTOS`, `ORACLE_LINUX`, `DEBIAN`, `MACOS`, `RASPBIAN` and `ROCKY_LINUX`. */
    operating_system?: any;
}