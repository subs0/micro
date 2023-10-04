export interface RolesanywhereProfile {
    resource: Resource[];
}

export interface Resource {
    rolesanywhere_profile: RolesanywhereProfileClass;
}

export interface RolesanywhereProfileClass {
    /** (Optional) The number of seconds the vended session credentials are valid for. Defaults to 3600. */
    duration_seconds?:            any;
    /** (Optional) Whether or not the Profile is enabled. */
    enabled?:                     any;
    /** (Optional) A list of managed policy ARNs that apply to the vended session credentials. */
    managed_policy_arns?:         any;
    /** (Required) The name of the Profile. */
    name:                         any;
    /** (Optional) Specifies whether instance properties are required in [CreateSession](https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html) requests with this profile. */
    require_instance_properties?: any;
    /** (Required) A list of IAM roles that this profile can assume */
    role_arns:                    any;
    /** (Optional) A session policy that applies to the trust boundary of the vended session credentials. */
    session_policy?:              any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
}