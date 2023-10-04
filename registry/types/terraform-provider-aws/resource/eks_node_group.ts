export interface EksNodeGroup {
    resource: Resource[];
}

export interface Resource {
    eks_node_group: EksNodeGroupClass;
}

export interface EksNodeGroupClass {
    /** (Required) Configuration block with scaling settings. See [`scaling_config`](#scaling_config-configuration-block) below for details. */
    scaling_config:              any;
    /** (Optional) Type of Amazon Machine Image (AMI) associated with the EKS Node Group. See the [AWS documentation](https://docs.aws.amazon.com/eks/latest/APIReference/API_Nodegroup.html#AmazonEKS-Type-Nodegroup-amiType) for valid values. Terraform will only perform drift detection if a configuration value is provided. */
    ami_type?:                   any;
    /** (Optional) Type of capacity associated with the EKS Node Group. Valid values: `ON_DEMAND`, `SPOT`. Terraform will only perform drift detection if a configuration value is provided. */
    capacity_type?:              any;
    /** (Optional) Disk size in GiB for worker nodes. Defaults to `50` for Windows, `20` all other node groups. Terraform will only perform drift detection if a configuration value is provided. */
    disk_size?:                  any;
    /** (Optional) Force version update if existing pods are unable to be drained due to a pod disruption budget issue. */
    force_update_version?:       any;
    /** (Optional) List of instance types associated with the EKS Node Group. Defaults to `["t3.medium"]`. Terraform will only perform drift detection if a configuration value is provided. */
    instance_types?:             any;
    /** (Optional) Key-value map of Kubernetes labels. Only labels that are applied with the EKS API are managed by this argument. Other Kubernetes labels applied to the EKS Node Group will not be managed. */
    labels?:                     any;
    /** (Optional) Configuration block with Launch Template settings. See [`launch_template`](#launch_template-configuration-block) below for details. */
    launch_template?:            any;
    /** (Optional) Configuration block with remote access settings. See [`remote_access`](#remote_access-configuration-block) below for details. */
    remote_access?:              any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
    /** (Optional) The Kubernetes taints to be applied to the nodes in the node group. Maximum of 50 taints per node group. See [taint](#taint-configuration-block) below for details. */
    taint?:                      any;
    /** (Optional) Configuration block with update settings. See [`update_config`](#update_config-configuration-block) below for details. */
    update_config?:              any;
    /** (Optional) Identifier of the EC2 Launch Template. Conflicts with `name`. */
    id?:                         any;
    /** (Optional) Name of the EC2 Launch Template. Conflicts with `id`. */
    name?:                       any;
    /** (Required) EC2 Launch Template version number. While the API accepts values like `$Default` and `$Latest`, the API will convert the value to the associated version number (e.g., `1`) on read and Terraform will show a difference on next plan. Using the `default_version` or `latest_version` attribute of the `aws_launch_template` resource or data source is recommended for this argument. */
    version:                     any;
    /** (Optional) EC2 Key Pair name that provides access for remote communication with the worker nodes in the EKS Node Group. If you specify this configuration, but do not specify `source_security_group_ids` when you create an EKS Node Group, either port 3389 for Windows, or port 22 for all other operating systems is opened on the worker nodes to the Internet (0.0.0.0/0). For Windows nodes, this will allow you to use RDP, for all others this allows you to SSH into the worker nodes. */
    ec2_ssh_key?:                any;
    /** (Optional) Set of EC2 Security Group IDs to allow SSH access (port 22) from on the worker nodes. If you specify `ec2_ssh_key`, but do not specify this configuration when you create an EKS Node Group, port 22 on the worker nodes is opened to the Internet (0.0.0.0/0). */
    source_security_group_ids?:  any;
    /** (Required) Desired number of worker nodes. */
    desired_size:                any;
    /** (Required) Maximum number of worker nodes. */
    max_size:                    any;
    /** (Required) Minimum number of worker nodes. */
    min_size:                    any;
    /** (Required) The key of the taint. Maximum length of 63. */
    key:                         any;
    /** (Optional) The value of the taint. Maximum length of 63. */
    value?:                      any;
    /** (Required) The effect of the taint. Valid values: `NO_SCHEDULE`, `NO_EXECUTE`, `PREFER_NO_SCHEDULE`. */
    effect:                      any;
    /** (Optional) Desired max number of unavailable worker nodes during node group update. */
    max_unavailable?:            any;
    /** (Optional) Desired max percentage of unavailable worker nodes during node group update. */
    max_unavailable_percentage?: any;
}