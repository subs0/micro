export interface IamGroup {
    data: Datum[];
}

export interface Datum {
    iam_group: IamGroupClass;
}

export interface IamGroupClass {
    /** (Required) Friendly IAM group name to match. */
    group_name: any;
}