export interface CognitoIdentityPool {
    resource: Resource[];
}

export interface Resource {
    cognito_identity_pool: CognitoIdentityPoolClass;
}

export interface CognitoIdentityPoolClass {
    /** (Optional) A map of tags to assign to the Identity Pool. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
}