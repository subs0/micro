export interface ShieldProtectionHealthCheckAssociation {
    resource: Resource[];
}

export interface Resource {
    shield_protection_health_check_association: ShieldProtectionHealthCheckAssociationClass;
}

export interface ShieldProtectionHealthCheckAssociationClass {
    /** (Required) The ARN (Amazon Resource Name) of the Route53 Health Check resource which will be associated to the protected resource. */
    health_check_arn:     any;
    /** (Required) The ID of the protected resource. */
    shield_protection_id: any;
}