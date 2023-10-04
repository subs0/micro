export interface TransferSSHKey {
    resource: Resource[];
}

export interface Resource {
    transfer_ssh_key: TransferSSHKeyClass;
}

export interface TransferSSHKeyClass {
    /** (Requirement) The Server ID of the Transfer Server (e.g., `s-12345678`) */
    server_id?: any;
    /** (Requirement) The name of the user account that is assigned to one or more servers. */
    user_name?: any;
    /** (Requirement) The public key portion of an SSH key pair. */
    body?:      any;
}