export interface IamUser {
    data: Datum[];
}

export interface Datum {
    iam_user: IamUserClass;
}

export interface IamUserClass {
    /** (Required) Friendly IAM user name to match. */
    user_name: any;
}