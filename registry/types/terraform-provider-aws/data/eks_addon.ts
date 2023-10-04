export interface EksAddon {
    data: Datum[];
}

export interface Datum {
    eks_addon: EksAddonClass;
}

export interface EksAddonClass {
    "* `addon_name` – (Required) Name of the EKS add-on. The name must match one of"?: any;
}