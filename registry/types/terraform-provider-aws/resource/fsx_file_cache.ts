export interface FsxFileCache {
    resource: Resource[];
}

export interface Resource {
    fsx_file_cache: FsxFileCacheClass;
}

export interface FsxFileCacheClass {
    /** The type of cache that you're creating. The only supported value is `LUSTRE`. */
    file_cache_type?:                           any;
    /** The version for the type of cache that you're creating. The only supported value is `2.12`. */
    file_cache_type_version?:                   any;
    /** (Required) The storage capacity of the Lustre MDT (Metadata Target) storage volume in gibibytes (GiB). The only supported value is `2400` GiB. */
    storage_capacity:                           any;
    /** A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID. */
    subnet_ids?:                                any;
    /** A boolean flag indicating whether tags for the cache should be copied to data repository associations. This value defaults to false. */
    copy_tags_to_data_repository_associations?: any;
    /** See the [`data_repository_association` configuration](#data-repository-association-arguments) block. Max of 8. */
    data_repository_association?:               any;
    /** Specifies the ID of the AWS Key Management Service (AWS KMS) key to use for encrypting data on an Amazon File Cache. If a KmsKeyId isn't specified, the Amazon FSx-managed AWS KMS key for your account is used. */
    kms_key_id?:                                any;
    /** See the [`lustre_configuration`](#lustre-configuration-arguments) block. Required when `file_cache_type` is `LUSTRE`. */
    lustre_configuration?:                      any;
    /** A list of IDs specifying the security groups to apply to all network interfaces created for Amazon File Cache access. */
    security_group_ids?:                        any;
    /** (Optional) A map of tags to assign to the file cache. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                      any;
    /** (Required) A path on the cache that points to a high-level directory (such as /ns1/) or subdirectory (such as /ns1/subdir/) that will be mapped 1-1 with DataRepositoryPath. The leading forward slash in the name is required. Two data repository associations cannot have overlapping cache paths. For example, if a data repository is associated with cache path /ns1/, then you cannot link another data repository with cache path /ns1/ns2. This path specifies where in your cache files will be exported from. This cache directory can be linked to only one data repository, and no data repository other can be linked to the directory. Note: The cache path can only be set to root (/) on an NFS DRA when DataRepositorySubdirectories is specified. If you specify root (/) as the cache path, you can create only one DRA on the cache. The cache path cannot be set to root (/) for an S3 DRA. */
    file_cache_path:                            any;
    /** (Optional) The path to the S3 or NFS data repository that links to the cache. */
    data_repository_path?:                      any;
    /** (Optional) A list of NFS Exports that will be linked with this data repository association. The Export paths are in the format /exportpath1. To use this parameter, you must configure DataRepositoryPath as the domain name of the NFS file system. The NFS file system domain name in effect is the root of the subdirectories. Note that DataRepositorySubdirectories is not supported for S3 data repositories. Max of 500. */
    data_repository_subdirectories?:            any;
    /** (Optional) - (Optional) See the [`nfs` configuration](#nfs-arguments) block. */
    nfs?:                                       any;
    /** (Required) - The version of the NFS (Network File System) protocol of the NFS data repository. The only supported value is NFS3, which indicates that the data repository must support the NFSv3 protocol. The only supported value is `NFS3`. */
    version:                                    any;
    /** (Optional) - A list of up to 2 IP addresses of DNS servers used to resolve the NFS file system domain name. The provided IP addresses can either be the IP addresses of a DNS forwarder or resolver that the customer manages and runs inside the customer VPC, or the IP addresses of the on-premises DNS servers. */
    dns_ips?:                                   any;
    /** (Required) Specifies the cache deployment type. The only supported value is `CACHE_1`. */
    deployment_type:                            any;
    /** (Required) The configuration for a Lustre MDT (Metadata Target) storage volume. See the [`metadata_configuration`](#metadata-configuration-arguments) block. */
    metadata_configuration:                     any;
    /** (Required) Provisions the amount of read and write throughput for each 1 tebibyte (TiB) of cache storage capacity, in MB/s/TiB. The only supported value is `1000`. */
    per_unit_storage_throughput:                any;
    /** (Optional) A recurring weekly time, in the format `D:HH:MM`. `D` is the day of the week, for which `1` represents Monday and `7` represents Sunday. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, 1:05:00 specifies maintenance at 5 AM Monday. See the [ISO week date](https://en.wikipedia.org/wiki/ISO_week_date) for more information. */
    weekly_maintenance_start_time?:             any;
}