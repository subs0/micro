export interface WorklinkWebsiteCertificateAuthorityAssociation {
    resource: Resource[];
}

export interface Resource {
    worklink_website_certificate_authority_association: WorklinkWebsiteCertificateAuthorityAssociationClass;
}

export interface WorklinkWebsiteCertificateAuthorityAssociationClass {
    /** (Required, ForceNew) The ARN of the fleet. */
    fleet_arn?:    any;
    /** (Required, ForceNew) The root certificate of the Certificate Authority. */
    certificate?:  any;
    /** (Optional, ForceNew) The certificate name to display. */
    display_name?: any;
}