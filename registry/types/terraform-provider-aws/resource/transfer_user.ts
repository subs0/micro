export interface TransferUser {
    resource: Resource[];
}

export interface Resource {
    transfer_user: TransferUserClass;
}

export interface TransferUserClass {
    /** (Required) The Server ID of the Transfer Server (e.g., `s-12345678`) */
    server_id:                any;
    /** (Required) The name used for log in to your SFTP server. */
    user_name:                any;
    /** (Optional) The landing directory (folder) for a user when they log in to the server using their SFTP client.  It should begin with a `/`.  The first item in the path is the name of the home bucket (accessible as `${Transfer:HomeBucket}` in the policy) and the rest is the home directory (accessible as `${Transfer:HomeDirectory}` in the policy). For example, `/example-bucket-1234/username` would set the home bucket to `example-bucket-1234` and the home directory to `username`. */
    home_directory?:          any;
    /** (Optional) Logical directory mappings that specify what S3 paths and keys should be visible to your user and how you want to make them visible. See [Home Directory Mappings](#home-directory-mappings) below. */
    home_directory_mappings?: any;
    /** (Optional) The type of landing directory (folder) you mapped for your users' home directory. Valid values are `PATH` and `LOGICAL`. */
    home_directory_type?:     any;
    /** (Optional) An IAM JSON policy document that scopes down user access to portions of their Amazon S3 bucket. IAM variables you can use inside this policy include `${Transfer:UserName}`, `${Transfer:HomeDirectory}`, and `${Transfer:HomeBucket}`. Since the IAM variable syntax matches Terraform's interpolation syntax, they must be escaped inside Terraform configuration strings (`$${Transfer:UserName}`).  These are evaluated on-the-fly when navigating the bucket. */
    policy?:                  any;
    /** (Optional) Specifies the full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. See [Posix Profile](#posix-profile) below. */
    posix_profile?:           any;
    /** (Required) Amazon Resource Name (ARN) of an IAM role that allows the service to control your user’s access to your Amazon S3 bucket. */
    role:                     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
    /** (Required) Represents an entry and a target. */
    entry:                    any;
    /** (Required) Represents the map target. */
    target:                   any;
    /** (Required) The POSIX group ID used for all EFS operations by this user. */
    gid:                      any;
    /** (Required) The POSIX user ID used for all EFS operations by this user. */
    uid:                      any;
    /** (Optional) The secondary POSIX group IDs used for all EFS operations by this user. */
    secondary_gids?:          any;
}