export interface DatasyncLocationFsxOntapFileSystem {
    resource: Resource[];
}

export interface Resource {
    datasync_location_fsx_ontap_file_system: DatasyncLocationFsxOntapFileSystemClass;
}

export interface DatasyncLocationFsxOntapFileSystemClass {
    /** (Required) The data transfer protocol that DataSync uses to access your Amazon FSx file system. See [Protocol](#protocol) below. */
    protocol:                    any;
    /** (Required) The security groups that provide access to your file system's preferred subnet. The security groups must allow outbbound traffic on the following ports (depending on the protocol you use): */
    security_group_arns:         any;
    /** (Required) The ARN of the SVM in your file system where you want to copy data to of from. */
    storage_virtual_machine_arn: any;
    /** (Optional) Path to the file share in the SVM where you'll copy your data. You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares) (e.g. `/vol1`, `/vol1/tree1`, `share1`). */
    subdirectory?:               any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
    /** Network File System (NFS) protocol that DataSync uses to access your FSx ONTAP file system. See [NFS](#nfs) below. */
    nfs?:                        any;
    /** Server Message Block (SMB) protocol that DataSync uses to access your FSx ONTAP file system. See [SMB] (#smb) below. */
    smb?:                        any;
    /** (Required) Mount options that are available for DataSync to access an NFS location. See [NFS Mount Options](#nfs-mount-options) below. */
    mount_options:               any;
    /** (Optional) SMB version that you want DataSync to use for mounting your SMB share. Valid values: `AUTOMATIC`, `SMB3`, `SMB2` `SMB2_0`. Default: `AUTOMATIC` */
    version?:                    any;
    /** Fully qualified domain name of the Microsoft Active Directory (AD) that your storage virtual machine belongs to. */
    domain?:                     any;
    /** Password of a user who has permission to access your SVM. */
    password?:                   any;
    /** Username that can mount the location and access the files, folders, and metadata that you need in the SVM. */
    user?:                       any;
}