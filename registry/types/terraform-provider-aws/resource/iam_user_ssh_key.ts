export interface IamUserSSHKey {
    resource: Resource[];
}

export interface Resource {
    iam_user_ssh_key: IamUserSSHKeyClass;
}

export interface IamUserSSHKeyClass {
    /** (Required) The name of the IAM user to associate the SSH public key with. */
    username:   any;
    /** (Required) Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`. */
    encoding:   any;
    /** (Required) The SSH public key. The public key must be encoded in ssh-rsa format or PEM format. */
    public_key: any;
    /** (Optional) The status to assign to the SSH public key. Active means the key can be used for authentication with an AWS CodeCommit repository. Inactive means the key cannot be used. Default is `active`. */
    status?:    any;
}