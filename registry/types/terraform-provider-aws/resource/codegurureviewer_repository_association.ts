export interface CodegurureviewerRepositoryAssociation {
    resource: Resource[];
}

export interface Resource {
    codegurureviewer_repository_association: CodegurureviewerRepositoryAssociationClass;
}

export interface CodegurureviewerRepositoryAssociationClass {
    /** (Required) An object describing the repository to associate. Valid values: `bitbucket`, `codecommit`, `github_enterprise_server`, or `s3_bucket`. Block is documented below. Note: for repositories that leverage CodeStar connections (ex. `bitbucket`, `github_enterprise_server`) the connection must be in `Available` status prior to creating this resource. */
    repository:       any;
    /** (Optional) An object describing the KMS key to asssociate. Block is documented below. */
    kms_key_details?: any;
}