export interface EFSFileSystemPolicy {
    resource: Resource[];
}

export interface Resource {
    efs_file_system_policy: EFSFileSystemPolicyClass;
}

export interface EFSFileSystemPolicyClass {
    /** (Required) The ID of the EFS file system. */
    file_system_id:                      any;
    /** (Required) The JSON formatted file system policy for the EFS file system. see [Docs](https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies) for more info. */
    policy:                              any;
    /** (Optional) A flag to indicate whether to bypass the `aws_efs_file_system_policy` lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request will be locked out from making future `PutFileSystemPolicy` requests on the file system. Set `bypass_policy_lockout_safety_check` to `true` only when you intend to prevent the principal that is making the request from making a subsequent `PutFileSystemPolicy` request on the file system. The default value is `false`. */
    bypass_policy_lockout_safety_check?: any;
}