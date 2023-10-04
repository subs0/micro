export interface GuarddutyInviteAccepter {
    resource: Resource[];
}

export interface Resource {
    guardduty_invite_accepter: GuarddutyInviteAccepterClass;
}

export interface GuarddutyInviteAccepterClass {
    /** (Required) The detector ID of the member GuardDuty account. */
    detector_id:       any;
    /** (Required) AWS account ID for primary account. */
    master_account_id: any;
}