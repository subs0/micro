export interface Macie2InvitationAccepter {
    resource: Resource[];
}

export interface Resource {
    macie2_invitation_accepter: Macie2InvitationAccepterClass;
}

export interface Macie2InvitationAccepterClass {
    /** (Required) The AWS account ID for the account that sent the invitation. */
    administrator_account_id: any;
}