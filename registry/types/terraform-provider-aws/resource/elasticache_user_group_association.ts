export interface ElasticacheUserGroupAssociation {
    resource: Resource[];
}

export interface Resource {
    elasticache_user_group_association: ElasticacheUserGroupAssociationClass;
}

export interface ElasticacheUserGroupAssociationClass {
    /** (Required) ID of the user group. */
    user_group_id: any;
    /** (Required) ID of the user to associated with the user group. */
    user_id:       any;
}