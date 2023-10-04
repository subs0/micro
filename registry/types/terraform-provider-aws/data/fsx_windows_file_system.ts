export interface FsxWindowsFileSystem {
    data: Datum[];
}

export interface Datum {
    fsx_windows_file_system: FsxWindowsFileSystemClass;
}

export interface FsxWindowsFileSystemClass {
    /** (Required) Identifier of the file system (e.g. `fs-12345678`). */
    id: any;
}