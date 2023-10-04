export interface EksAddonVersion {
    data: Datum[];
}

export interface Datum {
    eks_addon_version: EksAddonVersionClass;
}

export interface EksAddonVersionClass {
    /** (Optional) Determines if the most recent or default version of the addon should be returned. */
    most_recent?: any;
}