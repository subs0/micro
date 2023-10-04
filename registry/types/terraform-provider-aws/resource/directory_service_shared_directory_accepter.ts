export interface DirectoryServiceSharedDirectoryAccepter {
    resource: Resource[];
}

export interface Resource {
    directory_service_shared_directory_accepter: DirectoryServiceSharedDirectoryAccepterClass;
}

export interface DirectoryServiceSharedDirectoryAccepterClass {
    /** (Required) Identifier of the directory that is stored in the directory consumer account that corresponds to the shared directory in the owner account. */
    shared_directory_id: any;
}