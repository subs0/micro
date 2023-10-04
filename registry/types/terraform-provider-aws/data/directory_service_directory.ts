export interface DirectoryServiceDirectory {
    data: Datum[];
}

export interface Datum {
    directory_service_directory: DirectoryServiceDirectoryClass;
}

export interface DirectoryServiceDirectoryClass {
    /** (Required) ID of the directory. */
    directory_id: any;
}