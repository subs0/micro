export interface DetectiveInvitationAccepter {
    resource: Resource[];
}

export interface Resource {
    detective_invitation_accepter: DetectiveInvitationAccepterClass;
}

export interface DetectiveInvitationAccepterClass {
    /** (Required) ARN of the behavior graph that the member account is accepting the invitation for. */
    graph_arn: any;
}