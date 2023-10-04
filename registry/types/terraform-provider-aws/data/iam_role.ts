export interface IamRole {
    data: Datum[];
}

export interface Datum {
    iam_role: IamRoleClass;
}

export interface IamRoleClass {
    /** (Required) Friendly IAM role name to match. */
    name: any;
}