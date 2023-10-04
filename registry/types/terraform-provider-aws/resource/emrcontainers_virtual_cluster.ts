export interface EmrcontainersVirtualCluster {
    resource: Resource[];
}

export interface Resource {
    emrcontainers_virtual_cluster: EmrcontainersVirtualClusterClass;
}

export interface EmrcontainersVirtualClusterClass {
    /** (Required) Configuration block for the container provider associated with your cluster. */
    container_provider: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
    /** The name of the container provider that is running your EMR Containers cluster */
    id?:                any;
    /** Nested list containing information about the configuration of the container provider */
    info?:              any;
    /** Nested list containing EKS-specific information about the cluster where the EMR Containers cluster is running */
    eks_info?:          any;
    /** The namespace where the EMR Containers cluster is running */
    namespace?:         any;
    /** The type of the container provider */
    type?:              any;
}