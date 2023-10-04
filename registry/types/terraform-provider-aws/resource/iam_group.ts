export interface IamGroup {
    resource: Resource[];
}

export interface Resource {
    iam_group: IamGroupClass;
}

export interface IamGroupClass {
    /** (Required) The group's name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. Group names are not distinguished by case. For example, you cannot create groups named both "ADMINS" and "admins". */
    name:  any;
    /** (Optional, default "/") Path in which to create the group. */
    path?: any;
}