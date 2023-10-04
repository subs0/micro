export interface IamUsers {
    data: Datum[];
}

export interface Datum {
    iam_users: IamUsersClass;
}

export interface IamUsersClass {
    /** (Optional) Regex string to apply to the IAM users list returned by AWS. This allows more advanced filtering not supported from the AWS API. This filtering is done locally on what AWS returns, and could have a performance impact if the result is large. Combine this with other options to narrow down the list AWS returns. */
    name_regex?:  any;
    /** (Optional) Path prefix for filtering the results. For example, the prefix `/division_abc/subdivision_xyz/` gets all users whose path starts with `/division_abc/subdivision_xyz/`. If it is not included, it defaults to a slash (`/`), listing all users. For more details, check out [list-users in the AWS CLI reference][1]. */
    path_prefix?: any;
}