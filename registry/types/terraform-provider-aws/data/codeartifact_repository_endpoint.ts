export interface CodeartifactRepositoryEndpoint {
    data: Datum[];
}

export interface Datum {
    codeartifact_repository_endpoint: CodeartifactRepositoryEndpointClass;
}

export interface CodeartifactRepositoryEndpointClass {
    /** (Required) Name of the domain that contains the repository. */
    domain:        any;
    /** (Required) Name of the repository. */
    repository:    any;
    /** (Required) Which endpoint of a repository to return. A repository has one endpoint for each package format: `npm`, `pypi`, `maven`, and `nuget`. */
    format:        any;
    /** (Optional) Account number of the AWS account that owns the domain. */
    domain_owner?: any;
}