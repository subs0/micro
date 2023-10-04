export interface EksCluster {
    resource: Resource[];
}

export interface Resource {
    eks_cluster: EksClusterClass;
}

export interface EksClusterClass {
    /** (Required) ARN of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. Ensure the resource configuration includes explicit dependencies on the IAM Role permissions by adding [`depends_on`](https://www.terraform.io/docs/configuration/meta-arguments/depends_on.html) if using the [`aws_iam_role_policy` resource](/docs/providers/aws/r/iam_role_policy.html) or [`aws_iam_role_policy_attachment` resource](/docs/providers/aws/r/iam_role_policy_attachment.html), otherwise EKS cannot delete EKS managed EC2 infrastructure such as Security Groups on EKS Cluster deletion. */
    role_arn:                   any;
    /** (Required) Configuration block for the VPC associated with your cluster. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the Amazon EKS User Guide. Detailed below. Also contains attributes detailed in the Attributes section. */
    vpc_config:                 any;
    /** (Optional) List of the desired control plane logging to enable. For more information, see [Amazon EKS Control Plane Logging](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html). */
    enabled_cluster_log_types?: any;
    encryption_config?:         EncryptionConfig;
    kubernetes_network_config?: KubernetesNetworkConfig;
    outpost_config?:            OutpostConfig;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Optional) Whether the Amazon EKS private API server endpoint is enabled. Default is `false`. */
    endpoint_private_access?:   any;
    /** (Optional) Whether the Amazon EKS public API server endpoint is enabled. Default is `true`. */
    endpoint_public_access?:    any;
    /** (Optional) List of CIDR blocks. Indicates which CIDR blocks can access the Amazon EKS public API server endpoint when enabled. EKS defaults this to a list with `0.0.0.0/0`. Terraform will only perform drift detection of its value when present in a configuration. */
    public_access_cidrs?:       any;
}

export interface EncryptionConfig {
    /** (Required) Configuration block with provider for encryption. Detailed below. */
    provider:  any;
    /** (Required) List of strings with resources to be encrypted. Valid values: `secrets`. */
    resources: any;
    /** (Required) ARN of the Key Management Service (KMS) customer master key (CMK). The CMK must be symmetric, created in the same region as the cluster, and if the CMK was created in a different account, the user must have access to the CMK. For more information, see [Allowing Users in Other Accounts to Use a CMK in the AWS Key Management Service Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html). */
    key_arn:   any;
}

export interface KubernetesNetworkConfig {
    /** (Optional) The CIDR block to assign Kubernetes pod and service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. You can only specify a custom CIDR block when you create a cluster, changing this value will force a new cluster to be created. The block must meet the following requirements: */
    service_ipv4_cidr: any;
    /** (Optional) The IP family used to assign Kubernetes pod and service addresses. Valid values are `ipv4` (default) and `ipv6`. You can only specify an IP family when you create a cluster, changing this value will force a new cluster to be created. */
    ip_family:         any;
}

export interface OutpostConfig {
    /** (Required) The Amazon EC2 instance type that you want to use for your local Amazon EKS cluster on Outposts. The instance type that you specify is used for all Kubernetes control plane instances. The instance type can't be changed after cluster creation. Choose an instance type based on the number of nodes that your cluster will have. If your cluster will have: */
    control_plane_instance_type: any;
    /** (Optional) An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on AWS Outpost. */
    control_plane_placement:     any;
    /** (Required) The name of the placement group for the Kubernetes control plane instances. This setting can't be changed after cluster creation. */
    group_name:                  any;
    /** (Required) The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. This argument is a list of arns, but only a single Outpost ARN is supported currently. */
    outpost_arns:                any;
}