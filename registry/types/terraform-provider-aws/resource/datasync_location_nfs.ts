export interface DatasyncLocationNFS {
    resource: Resource[];
}

export interface Resource {
    datasync_location_nfs: DatasyncLocationNFSClass;
}

export interface DatasyncLocationNFSClass {
    /** (Optional) Configuration block containing mount options used by DataSync to access the NFS Server. */
    mount_options?:  any;
    /** (Required) Configuration block containing information for connecting to the NFS File System. */
    on_prem_config:  any;
    /** (Required) Specifies the IP address or DNS name of the NFS server. The DataSync Agent(s) use this to mount the NFS server. */
    server_hostname: any;
    /** (Required) Subdirectory to perform actions as source or destination. Should be exported by the NFS server. */
    subdirectory:    any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
    /** (Optional) The specific NFS version that you want DataSync to use for mounting your NFS share. Valid values: `AUTOMATIC`, `NFS3`, `NFS4_0` and `NFS4_1`. Default: `AUTOMATIC` */
    version?:        any;
    /** (Required) List of Amazon Resource Names (ARNs) of the DataSync Agents used to connect to the NFS server. */
    agent_arns:      any;
}