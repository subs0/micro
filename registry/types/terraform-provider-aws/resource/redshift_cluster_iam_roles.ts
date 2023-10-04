export interface RedshiftClusterIamRoles {
    resource: Resource[];
}

export interface Resource {
    redshift_cluster_iam_roles: RedshiftClusterIamRolesClass;
}

export interface RedshiftClusterIamRolesClass {
    /** (Required) The name of the Redshift Cluster IAM Roles. */
    cluster_identifier:    any;
    /** (Optional) A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time. */
    iam_role_arns?:        any;
    /** (Optional) The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created. */
    default_iam_role_arn?: any;
}