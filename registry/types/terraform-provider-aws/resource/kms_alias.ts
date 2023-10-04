export interface KmsAlias {
    resource: Resource[];
}

export interface Resource {
    kms_alias: KmsAliasClass;
}

export interface KmsAliasClass {
    /** (Optional) The display name of the alias. The name must start with the word "alias" followed by a forward slash (alias/) */
    name?:         any;
    /** (Optional) Creates an unique alias beginning with the specified prefix. */
    name_prefix?:  any;
    /** (Required) Identifier for the key for which the alias is for, can be either an ARN or key_id. */
    target_key_id: any;
}