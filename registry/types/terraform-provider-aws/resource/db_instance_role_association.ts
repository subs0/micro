export interface DBInstanceRoleAssociation {
    resource: Resource[];
}

export interface Resource {
    db_instance_role_association: DBInstanceRoleAssociationClass;
}

export interface DBInstanceRoleAssociationClass {
    /** (Required) DB Instance Identifier to associate with the IAM Role. */
    db_instance_identifier: any;
    /** (Required) Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html). */
    feature_name:           any;
    /** (Required) Amazon Resource Name (ARN) of the IAM Role to associate with the DB Instance. */
    role_arn:               any;
}