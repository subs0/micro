export interface RedshiftserverlessNamespace {
    resource: Resource[];
}

export interface Resource {
    redshiftserverless_namespace: RedshiftserverlessNamespaceClass;
}

export interface RedshiftserverlessNamespaceClass {
    /** (Optional) The password of the administrator for the first database created in the namespace. */
    admin_user_password?:  any;
    /** (Optional) The username of the administrator for the first database created in the namespace. */
    admin_username?:       any;
    /** (Optional) The name of the first database created in the namespace. */
    db_name?:              any;
    /** (Optional) The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace. When specifying `default_iam_role_arn`, it also must be part of `iam_roles`. */
    default_iam_role_arn?: any;
    /** (Optional) A list of IAM roles to associate with the namespace. */
    iam_roles?:            any;
    /** (Optional) The ARN of the Amazon Web Services Key Management Service key used to encrypt your data. */
    kms_key_id?:           any;
    /** (Optional) The types of logs the namespace can export. Available export types are `userlog`, `connectionlog`, and `useractivitylog`. */
    log_exports?:          any;
    /** (Required) The name of the namespace. */
    namespace_name:        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                 any;
}