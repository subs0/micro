export interface CloudhsmV2Cluster {
    resource: Resource[];
}

export interface Resource {
    cloudhsm_v2_cluster: CloudhsmV2ClusterClass;
}

export interface CloudhsmV2ClusterClass {
    /** (Optional) ID of Cloud HSM v2 cluster backup to be restored. */
    source_backup_identifier?: any;
    /** (Required) The type of HSM module in the cluster. Currently, only `hsm1.medium` is supported. */
    hsm_type:                  any;
    /** (Required) The IDs of subnets in which cluster will operate. */
    subnet_ids:                any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
}