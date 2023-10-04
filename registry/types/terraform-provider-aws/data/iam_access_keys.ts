export interface IamAccessKeys {
    data: Datum[];
}

export interface Datum {
    iam_access_keys: IamAccessKeysClass;
}

export interface IamAccessKeysClass {
    /** (Required) Name of the IAM user associated with the access keys. */
    user: any;
}