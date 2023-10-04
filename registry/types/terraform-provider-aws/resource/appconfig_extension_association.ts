export interface AppconfigExtensionAssociation {
    resource: Resource[];
}

export interface Resource {
    appconfig_extension_association: AppconfigExtensionAssociationClass;
}

export interface AppconfigExtensionAssociationClass {
    /** (Required) The ARN of the extension defined in the association. */
    extension_arn: any;
    /** (Optional) The ARN of the application, configuration profile, or environment to associate with the extension. */
    resource_arn?: any;
    /** (Optional) The parameter names and values defined for the association. */
    parameters?:   any;
}