export interface RDSClusterRoleAssociation {
    resource: Resource[];
}

export interface Resource {
    rds_cluster_role_association: RDSClusterRoleAssociationClass;
}

export interface RDSClusterRoleAssociationClass {
    /** (Required) DB Cluster Identifier to associate with the IAM Role. */
    db_cluster_identifier: any;
    /** (Required) Name of the feature for association. This can be found in the AWS documentation relevant to the integration or a full list is available in the `SupportedFeatureNames` list returned by [AWS CLI rds describe-db-engine-versions](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-engine-versions.html). */
    feature_name:          any;
    /** (Required) Amazon Resource Name (ARN) of the IAM Role to associate with the DB Cluster. */
    role_arn:              any;
}