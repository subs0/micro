export interface DirectoryServiceSharedDirectory {
    resource: Resource[];
}

export interface Resource {
    directory_service_shared_directory: DirectoryServiceSharedDirectoryClass;
}

export interface DirectoryServiceSharedDirectoryClass {
    /** (Required) Identifier of the Managed Microsoft AD directory that you want to share with other accounts. */
    directory_id: any;
    /** (Required) Identifier for the directory consumer account with whom the directory is to be shared. See below. */
    target:       any;
    /** (Optional) Method used when sharing a directory. Valid values are `ORGANIZATIONS` and `HANDSHAKE`. Default is `HANDSHAKE`. */
    method?:      any;
    /** (Optional, Sensitive) Message sent by the directory owner to the directory consumer to help the directory consumer administrator determine whether to approve or reject the share invitation. */
    notes?:       any;
    /** (Required) Identifier of the directory consumer account. */
    id:           any;
    /** (Optional) Type of identifier to be used in the `id` field. Valid value is `ACCOUNT`. Default is `ACCOUNT`. */
    type?:        any;
}