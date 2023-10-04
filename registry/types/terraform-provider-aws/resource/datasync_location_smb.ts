export interface DatasyncLocationSMB {
    resource: Resource[];
}

export interface Resource {
    datasync_location_smb: DatasyncLocationSMBClass;
}

export interface DatasyncLocationSMBClass {
    /** (Required) A list of DataSync Agent ARNs with which this location will be associated. */
    agent_arns:      any;
    /** (Optional) The name of the Windows domain the SMB server belongs to. */
    domain?:         any;
    /** (Optional) Configuration block containing mount options used by DataSync to access the SMB Server. Can be `AUTOMATIC`, `SMB2`, or `SMB3`. */
    mount_options?:  any;
    /** (Required) The password of the user who can mount the share and has file permissions in the SMB. */
    password:        any;
    /** (Required) Specifies the IP address or DNS name of the SMB server. The DataSync Agent(s) use this to mount the SMB share. */
    server_hostname: any;
    /** (Required) Subdirectory to perform actions as source or destination. Should be exported by the NFS server. */
    subdirectory:    any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
    /** (Required) The user who can mount the share and has file and folder permissions in the SMB share. */
    user:            any;
    /** (Optional) The specific SMB version that you want DataSync to use for mounting your SMB share. Valid values: `AUTOMATIC`, `SMB2`, and `SMB3`. Default: `AUTOMATIC` */
    version?:        any;
}