export interface AcmpcaPermission {
    resource: Resource[];
}

export interface Resource {
    acmpca_permission: AcmpcaPermissionClass;
}

export interface AcmpcaPermissionClass {
    /** (Required) ARN of the CA that grants the permissions. */
    certificate_authority_arn: any;
    /** (Required) Actions that the specified AWS service principal can use. These include `IssueCertificate`, `GetCertificate`, and `ListPermissions`. Note that in order for ACM to automatically rotate certificates issued by a PCA, it must be granted permission on all 3 actions, as per the example above. */
    actions:                   any;
    /** (Required) AWS service or identity that receives the permission. At this time, the only valid principal is `acm.amazonaws.com`. */
    principal:                 any;
    /** (Optional) ID of the calling account */
    source_account?:           any;
}