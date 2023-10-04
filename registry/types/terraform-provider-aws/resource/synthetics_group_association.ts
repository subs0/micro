export interface SyntheticsGroupAssociation {
    resource: Resource[];
}

export interface Resource {
    synthetics_group_association: SyntheticsGroupAssociationClass;
}

export interface SyntheticsGroupAssociationClass {
    /** (Required) Name of the group that the canary will be associated with. */
    group_name: any;
    /** (Required) ARN of the canary. */
    canary_arn: any;
}