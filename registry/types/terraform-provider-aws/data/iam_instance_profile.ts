export interface IamInstanceProfile {
    data: Datum[];
}

export interface Datum {
    iam_instance_profile: IamInstanceProfileClass;
}

export interface IamInstanceProfileClass {
    /** (Required) Friendly IAM instance profile name to match. */
    name: any;
}