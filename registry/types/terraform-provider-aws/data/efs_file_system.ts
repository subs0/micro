export interface EFSFileSystem {
    data: Datum[];
}

export interface Datum {
    efs_file_system: EFSFileSystemClass;
}

export interface EFSFileSystemClass {
    /** (Optional) ID that identifies the file system (e.g., fs-ccfc0d65). */
    file_system_id?: any;
    /** (Optional) Restricts the list to the file system with this creation token. */
    creation_token?: any;
    /** (Optional) Restricts the list to the file system with these tags. */
    tags?:           any;
}