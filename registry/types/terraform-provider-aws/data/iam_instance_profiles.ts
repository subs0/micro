export interface IamInstanceProfiles {
    data: Datum[];
}

export interface Datum {
    iam_instance_profiles: IamInstanceProfilesClass;
}

export interface IamInstanceProfilesClass {
    /** (Required) IAM role name. */
    role_name: any;
}