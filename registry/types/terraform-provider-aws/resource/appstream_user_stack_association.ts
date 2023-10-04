export interface AppstreamUserStackAssociation {
    resource: Resource[];
}

export interface Resource {
    appstream_user_stack_association: AppstreamUserStackAssociationClass;
}

export interface AppstreamUserStackAssociationClass {
    /** (Required) Authentication type for the user. */
    authentication_type:      any;
    /** (Optional) Whether a welcome email is sent to a user after the user is created in the user pool. */
    send_email_notification?: any;
}