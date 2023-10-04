export interface CognitoIdentityPoolRolesAttachment {
    resource: Resource[];
}

export interface Resource {
    cognito_identity_pool_roles_attachment: CognitoIdentityPoolRolesAttachmentClass;
}

export interface CognitoIdentityPoolRolesAttachmentClass {
    "The Cognito Identity Pool Roles Attachment argument layout is a structure composed of several sub-resources - these resources are laid out below."?: any;
}