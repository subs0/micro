export interface KmsAlias {
    data: Datum[];
}

export interface Datum {
    kms_alias: KmsAliasClass;
}

export interface KmsAliasClass {
    /** (Required) Display name of the alias. The name must start with the word "alias" followed by a forward slash (alias/) */
    name: any;
}