export interface CodebuildSourceCredential {
    resource: Resource[];
}

export interface Resource {
    codebuild_source_credential: CodebuildSourceCredentialClass;
}

export interface CodebuildSourceCredentialClass {
    /** (Required) The type of authentication used to connect to a GitHub, GitHub Enterprise, or Bitbucket repository. An OAUTH connection is not supported by the API. */
    auth_type:   any;
    /** (Required) The source provider used for this project. */
    server_type: any;
    /** (Required) For `GitHub` or `GitHub Enterprise`, this is the personal access token. For `Bitbucket`, this is the app password. */
    token:       any;
    /** (Optional) The Bitbucket username when the authType is `BASIC_AUTH`. This parameter is not valid for other types of source providers or connections. */
    user_name?:  any;
}