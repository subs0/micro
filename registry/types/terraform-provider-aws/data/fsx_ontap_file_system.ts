export interface FsxOntapFileSystem {
    data: Datum[];
}

export interface Datum {
    fsx_ontap_file_system: FsxOntapFileSystemClass;
}

export interface FsxOntapFileSystemClass {
    /** (Required) Identifier of the file system (e.g. `fs-12345678`). */
    id: any;
}