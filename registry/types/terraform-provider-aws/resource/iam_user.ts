export interface IamUser {
    resource: Resource[];
}

export interface Resource {
    iam_user: IamUserClass;
}

export interface IamUserClass {
    /** (Required) The user's name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. User names are not distinguished by case. For example, you cannot create users named both "TESTUSER" and "testuser". */
    name:                  any;
    /** (Optional, default "/") Path in which to create the user. */
    path?:                 any;
    /** (Optional) The ARN of the policy that is used to set the permissions boundary for the user. */
    permissions_boundary?: any;
    /** (Optional, default false) When destroying this user, destroy even if it */
    force_destroy?:        any;
    /** Key-value map of tags for the IAM user. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                 any;
}