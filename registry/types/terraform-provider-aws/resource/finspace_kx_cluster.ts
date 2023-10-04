export interface FinspaceKxCluster {
    resource: Resource[];
}

export interface Resource {
    finspace_kx_cluster: FinspaceKxClusterClass;
}

export interface FinspaceKxClusterClass {
    /** (Required) The number of availability zones you want to assign per cluster. This can be one of the following: */
    az_mode:                         any;
    capacity_configuration:          CapacityConfiguration;
    /** (Required) Unique identifier for the KX environment. */
    environment_id:                  any;
    /** (Required) Unique name for the cluster that you want to create. */
    name:                            any;
    /** (Required) Version of FinSpace Managed kdb to run. */
    release_label:                   any;
    vpc_configuration:               VpcConfiguration;
    auto_scaling_configuration?:     AutoScalingConfiguration;
    /** (Optional) The availability zone identifiers for the requested regions. Required when `az_mode` is set to SINGLE. */
    availability_zone_id?:           any;
    /** (Optional) Configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. See [cache_storage_configuration](#cache_storage_configuration). */
    cache_storage_configurations?:   any;
    code?:                           Code;
    /** (Optional) List of key-value pairs to make available inside the cluster. */
    command_line_arguments?:         any;
    database?:                       Database;
    /** (Optional) Description of the cluster. */
    description?:                    any;
    /** (Optional) An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster. */
    execution_role?:                 any;
    /** (Optional) Path to Q program that will be run at launch of a cluster. This is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q. */
    initialization_script?:          any;
    savedown_storage_configuration?: SavedownStorageConfiguration;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
}

export interface AutoScalingConfiguration {
    /** (Required) Metric your cluster will track in order to scale in and out. For example, CPU_UTILIZATION_PERCENTAGE is the average CPU usage across all nodes in a cluster. */
    auto_scaling_metric:        any;
    /** (Required) Lowest number of nodes to scale. Must be at least 1 and less than the `max_node_count`. If nodes in cluster belong to multiple availability zones, then `min_node_count` must be at least 3. */
    min_node_count:             any;
    /** (Required) Highest number of nodes to scale. Cannot be greater than 5 */
    max_node_count:             any;
    /** (Required) Desired value of chosen `auto_scaling_metric`. When metric drops below this value, cluster will scale in. When metric goes above this value, cluster will scale out. Can be set between 0 and 100 percent. */
    metric_target:              any;
    /** (Required) Duration in seconds that FinSpace will wait after a scale in event before initiating another scaling event. */
    scale_in_cooldown_seconds:  any;
    /** (Required) Duration in seconds that FinSpace will wait after a scale out event before initiating another scaling event. */
    scale_out_cooldown_seconds: any;
}

export interface CapacityConfiguration {
    /** (Required) Determines the hardware of the host computer used for your cluster instance. Each node type offers different memory and storage capabilities. Choose a node type based on the requirements of the application or software that you plan to run on your instance. */
    node_type:  any;
    /** (Required) Number of instances running in a cluster. Must be at least 1 and at most 5. */
    node_count: any;
}

export interface Code {
    /** (Required) Unique name for the S3 bucket. */
    s3_bucket:         any;
    /** (Required) Full S3 path (excluding bucket) to the .zip file that contains the code to be loaded onto the cluster when it’s started. */
    s3_key:            any;
    /** (Optional) Version of an S3 Object. */
    s3_object_version: any;
}

export interface Database {
    /** (Required) Name of the KX database. */
    database_name:        any;
    /** (Optional) Configuration details for the disk cache to increase performance reading from a KX database mounted to the cluster. See [cache_configurations](#cache_configurations). */
    cache_configurations: any;
    /** (Optional) A unique identifier of the changeset that is associated with the cluster. */
    changeset_id:         any;
    /** (Required) Type of disk cache. */
    cache_type:           any;
    /** (Optional) Paths within the database to cache. */
    db_paths:             any;
}

export interface SavedownStorageConfiguration {
    /** (Required) Type of writeable storage space for temporarily storing your savedown data. The valid values are: */
    type: any;
    /** (Required) Size of temporary storage in gigabytes. Must be between 10 and 16000. */
    size: any;
}

export interface VpcConfiguration {
    /** (Required) Identifier of the VPC endpoint */
    vpc_id:             any;
    /** (Required) Unique identifier of the VPC security group applied to the VPC endpoint ENI for the cluster. */
    security_group_ids: any;
    /** (Required) IP address type for cluster network configuration parameters. The following type is available: IP_V4 - IP address version 4. */
    ip_address_type:    any;
}