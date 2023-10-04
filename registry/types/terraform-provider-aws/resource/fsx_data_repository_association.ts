export interface FsxDataRepositoryAssociation {
    resource: Resource[];
}

export interface Resource {
    fsx_data_repository_association: FsxDataRepositoryAssociationClass;
}

export interface FsxDataRepositoryAssociationClass {
    /** (Optional) Set to true to run an import data repository task to import metadata from the data repository to the file system after the data repository association is created. Defaults to `false`. */
    batch_import_meta_data_on_create?: any;
    /** (Required) The path to the Amazon S3 data repository that will be linked to the file system. The path must be an S3 bucket s3://myBucket/myPrefix/. This path specifies where in the S3 data repository files will be imported from or exported to. The same S3 bucket cannot be linked more than once to the same file system. */
    data_repository_path:              any;
    /** (Required) The ID of the Amazon FSx file system to on which to create a data repository association. */
    file_system_id:                    any;
    /** (Required) A path on the file system that points to a high-level directory (such as `/ns1/`) or subdirectory (such as `/ns1/subdir/`) that will be mapped 1-1 with `data_repository_path`. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path `/ns1/`, then you cannot link another data repository with file system path `/ns1/ns2`. This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory. */
    file_system_path:                  any;
    /** (Optional) For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. */
    imported_file_chunk_size?:         any;
    /** (Optional) See the [`s3` configuration](#s3-arguments) block. Max of 1. */
    s3?:                               any;
    /** (Optional) Set to true to delete files from the file system upon deleting this data repository association. Defaults to `false`. */
    delete_data_in_filesystem?:        any;
    /** (Optional) A map of tags to assign to the data repository association. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                             any;
    /** (Optional) Specifies the type of updated objects that will be automatically exported from your file system to the linked S3 bucket. See the [`events` configuration](#events-arguments) block. */
    auto_export_policy?:               any;
    /** (Optional) Specifies the type of updated objects that will be automatically imported from the linked S3 bucket to your file system. See the [`events` configuration](#events-arguments) block. */
    auto_import_policy?:               any;
    /** (Optional) A list of file event types to automatically export to your linked S3 bucket or import from the linked S3 bucket. Valid values are `NEW`, `CHANGED`, `DELETED`. Max of 3. */
    events?:                           any;
}