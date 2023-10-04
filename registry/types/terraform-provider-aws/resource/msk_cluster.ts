export interface MskCluster {
    resource: Resource[];
}

export interface Resource {
    msk_cluster: MskClusterClass;
}

export interface MskClusterClass {
    /** (Required) Configuration block for the broker nodes of the Kafka cluster. */
    broker_node_group_info:          any;
    /** (Required) Name of the MSK cluster. */
    cluster_name:                    any;
    /** (Required) Specify the desired Kafka software version. */
    kafka_version:                   any;
    /** (Required) The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets. */
    number_of_broker_nodes:          any;
    /** (Optional) Includes all client authentication information for VPC connectivity. See below. */
    client_authentication?:          any;
    /** (Optional) Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below. */
    configuration_info?:             any;
    /** (Optional) Configuration block for specifying encryption. See below. */
    encryption_info?:                any;
    /** (Optional) Specify the desired enhanced MSK CloudWatch monitoring level. See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html) */
    enhanced_monitoring?:            any;
    /** (Optional) Configuration block for JMX and Node monitoring for the MSK cluster. See below. */
    open_monitoring?:                any;
    /** (Optional) Configuration block for streaming broker logs to Cloudwatch/S3/Kinesis Firehose. See below. */
    logging_info?:                   any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Required) A list of subnets to connect to in client VPC ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-prop-brokernodegroupinfo-clientsubnets)). */
    client_subnets:                  any;
    /** (Required) Specify the instance type to use for the kafka brokersE.g., kafka.m5.large. ([Pricing info](https://aws.amazon.com/msk/pricing/)) */
    instance_type:                   any;
    /** (Required) A list of the security groups to associate with the elastic network interfaces to control who can communicate with the cluster. */
    security_groups:                 any;
    /** (Optional) The distribution of broker nodes across availability zones ([documentation](https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#clusters-model-brokerazdistribution)). Currently the only valid value is `DEFAULT`. */
    az_distribution?:                any;
    /** (Optional) Information about the cluster access configuration. See below. For security reasons, you can't turn on public access while creating an MSK cluster. However, you can update an existing cluster to make it publicly accessible. You can also create a new cluster and then update it to make it publicly accessible ([documentation](https://docs.aws.amazon.com/msk/latest/developerguide/public-access.html)). */
    connectivity_info?:              any;
    /** (Optional) A block that contains information about storage volumes attached to MSK broker nodes. See below. */
    storage_info?:                   any;
    /** (Optional) Access control settings for brokers. See below. */
    public_access?:                  any;
    /** (Optional) VPC connectivity access control for brokers. See below. */
    vpc_connectivity?:               any;
    /** (Optional) Public access type. Valid values: `DISABLED`, `SERVICE_PROVIDED_EIPS`. */
    type?:                           any;
    /** (Optional) Configuration block for specifying SASL client authentication. See below. */
    sasl?:                           any;
    /** (Optional) Configuration block for specifying TLS client authentication. See below. */
    tls?:                            any;
    /** (Optional) Enables IAM client authentication. Defaults to `false`. */
    iam?:                            any;
    /** (Optional) Enables SCRAM client authentication via AWS Secrets Manager. Defaults to `false`. */
    scram?:                          any;
    /** (Optional) A block that contains EBS volume information. See below. */
    ebs_storage_info?:               any;
    /** (Optional) A block that contains EBS volume provisioned throughput information. To provision storage throughput, you must choose broker type kafka.m5.4xlarge or larger. See below. */
    provisioned_throughput?:         any;
    /** (Optional) The size in GiB of the EBS volume for the data drive on each broker node. Minimum value of `1` and maximum value of `16384`. */
    volume_size?:                    any;
    /** (Optional) Indicates whether you want to enable or disable streaming broker logs to S3. */
    enabled?:                        any;
    /** (Optional) Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second. The minimum value is `250`. The maximum value varies between broker type. You can refer to the valid values for the maximum volume throughput at the following [documentation on throughput bottlenecks](https://docs.aws.amazon.com/msk/latest/developerguide/msk-provision-throughput.html#throughput-bottlenecks) */
    volume_throughput?:              any;
    /** (Optional) Enables unauthenticated access. */
    unauthenticated?:                any;
    /** (Optional) List of ACM Certificate Authority Amazon Resource Names (ARNs). */
    certificate_authority_arns?:     any;
    /** (Required) Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster. */
    arn:                             any;
    /** (Required) Revision of the MSK Configuration to use in the cluster. */
    revision:                        any;
    /** (Optional) Configuration block to specify encryption in transit. See below. */
    encryption_in_transit?:          any;
    /** (Optional) You may specify a KMS key short ID or ARN (it will always output an ARN) to use for encrypting your data at rest.  If no key is specified, an AWS managed KMS ('aws/msk' managed service) key will be used for encrypting the data at rest. */
    encryption_at_rest_kms_key_arn?: any;
    /** (Optional) Encryption setting for data in transit between clients and brokers. Valid values: `TLS`, `TLS_PLAINTEXT`, and `PLAINTEXT`. Default value is `TLS`. */
    client_broker?:                  any;
    /** (Optional) Whether data communication among broker nodes is encrypted. Default value: `true`. */
    in_cluster?:                     any;
    /** (Required) Configuration block for Prometheus settings for open monitoring. See below. */
    prometheus:                      any;
    /** (Optional) Configuration block for JMX Exporter. See below. */
    jmx_exporter?:                   any;
    /** (Optional) Configuration block for Node Exporter. See below. */
    node_exporter?:                  any;
    /** (Required) Indicates whether you want to enable or disable the Node Exporter. */
    enabled_in_broker:               any;
    /** (Required) Configuration block for Broker Logs settings for logging info. See below. */
    broker_logs:                     any;
    /** (Optional) Name of the Cloudwatch Log Group to deliver logs to. */
    log_group?:                      any;
    /** (Optional) Name of the Kinesis Data Firehose delivery stream to deliver logs to. */
    delivery_stream?:                any;
    /** (Optional) Name of the S3 bucket to deliver logs to. */
    bucket?:                         any;
    /** (Optional) Prefix to append to the folder name. */
    prefix?:                         any;
}