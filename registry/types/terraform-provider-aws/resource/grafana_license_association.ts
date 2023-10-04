export interface GrafanaLicenseAssociation {
    resource: Resource[];
}

export interface Resource {
    grafana_license_association: GrafanaLicenseAssociationClass;
}

export interface GrafanaLicenseAssociationClass {
    /** (Required) The type of license for the workspace license association. Valid values are `ENTERPRISE` and `ENTERPRISE_FREE_TRIAL`. */
    license_type: any;
    /** (Required) The workspace id. */
    workspace_id: any;
}