export interface IamRoles {
    data: Datum[];
}

export interface Datum {
    iam_roles: IamRolesClass;
}

export interface IamRolesClass {
    /** (Optional) Regex string to apply to the IAM roles list returned by AWS. This allows more advanced filtering not supported from the AWS API. This filtering is done locally on what AWS returns, and could have a performance impact if the result is large. Combine this with other options to narrow down the list AWS returns. */
    name_regex?:  any;
    /** (Optional) Path prefix for filtering the results. For example, the prefix `/application_abc/component_xyz/` gets all roles whose path starts with `/application_abc/component_xyz/`. If it is not included, it defaults to a slash (`/`), listing all roles. For more details, check out [list-roles in the AWS CLI reference][1]. */
    path_prefix?: any;
}