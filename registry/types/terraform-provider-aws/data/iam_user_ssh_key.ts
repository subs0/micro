export interface IamUserSSHKey {
    data: Datum[];
}

export interface Datum {
    iam_user_ssh_key: IamUserSSHKeyClass;
}

export interface IamUserSSHKeyClass {
    /** (Required) Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use `SSH`. To retrieve the public key in PEM format, use `PEM`. */
    encoding:          any;
    /** (Required) Unique identifier for the SSH public key. */
    ssh_public_key_id: any;
    /** (Required) Name of the IAM user associated with the SSH public key. */
    username:          any;
}