export interface SecurityhubInviteAccepter {
    resource: Resource[];
}

export interface Resource {
    securityhub_invite_accepter: SecurityhubInviteAccepterClass;
}

export interface SecurityhubInviteAccepterClass {
    /** (Required) The account ID of the master Security Hub account whose invitation you're accepting. */
    master_id: any;
}