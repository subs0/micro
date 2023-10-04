export interface IamAccountAlias {
    resource: Resource[];
}

export interface Resource {
    iam_account_alias: IamAccountAliasClass;
}

export interface IamAccountAliasClass {
    /** (Required) The account alias */
    account_alias: any;
}