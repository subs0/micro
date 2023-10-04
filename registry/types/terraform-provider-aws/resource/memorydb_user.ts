export interface MemorydbUser {
    resource: Resource[];
}

export interface Resource {
    memorydb_user: MemorydbUserClass;
}

export interface MemorydbUserClass {
    access_any:       string;
    /** (Required) Denotes the user's authentication properties. Detailed below. */
    authentication_mode: any;
    /** (Required, Forces new resource) Name of the MemoryDB user. Up to 40 characters. */
    user_name?:          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Required) The set of passwords used for authentication. You can create up to two passwords for each user. */
    passwords:           any;
    /** (Required) Indicates whether the user requires a password to authenticate. Must be set to `password`. */
    type:                any;
}