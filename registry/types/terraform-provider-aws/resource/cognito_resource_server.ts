export interface CognitoResourceServer {
    resource: Resource[];
}

export interface Resource {
    cognito_resource_server: CognitoResourceServerClass;
}

export interface CognitoResourceServerClass {
    /** (Required) An identifier for the resource server. */
    identifier:        any;
    /** (Required) A name for the resource server. */
    name:              any;
    /** (Optional) A list of [Authorization Scope](#authorization-scope). */
    scope?:            any;
    /** (Required) The scope name. */
    scope_name:        any;
    /** (Required) The scope description. */
    scope_description: any;
}