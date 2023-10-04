export interface ShieldDrtAccessRoleArnAssociation {
    resource: Resource[];
}

export interface Resource {
    shield_drt_access_role_arn_association: ShieldDrtAccessRoleArnAssociationClass;
}

export interface ShieldDrtAccessRoleArnAssociationClass {
    /** (Required) The Amazon Resource Name (ARN) of the role the SRT will use to access your AWS account. Prior to making the AssociateDRTRole request, you must attach the `AWSShieldDRTAccessPolicy` managed policy to this role. */
    role_arn: any;
}