export interface GrafanaRoleAssociation {
    resource: Resource[];
}

export interface Resource {
    grafana_role_association: GrafanaRoleAssociationClass;
}

export interface GrafanaRoleAssociationClass {
    /** (Required) The grafana role. Valid values can be found [here](https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateInstruction.html#ManagedGrafana-Type-UpdateInstruction-role). */
    role:         any;
    /** (Required) The workspace id. */
    workspace_id: any;
    /** (Optional) The AWS SSO group ids to be assigned the role given in `role`. */
    group_ids?:   any;
    /** (Optional) The AWS SSO user ids to be assigned the role given in `role`. */
    user_ids?:    any;
}