export interface MskconnectConnector {
    resource: Resource[];
}

export interface Resource {
    mskconnect_connector: MskconnectConnectorClass;
}

export interface MskconnectConnectorClass {
    /** (Required) Information about the capacity allocated to the connector. See below. */
    capacity:                            any;
    /** (Required) A map of keys to values that represent the configuration for the connector. */
    connector_configuration:             any;
    /** (Optional) A summary description of the connector. */
    description?:                        any;
    /** (Required) Specifies which Apache Kafka cluster to connect to. See below. */
    kafka_cluster:                       any;
    /** (Required) Details of the client authentication used by the Apache Kafka cluster. See below. */
    kafka_cluster_client_authentication: any;
    /** (Required) Details of encryption in transit to the Apache Kafka cluster. See below. */
    kafka_cluster_encryption_in_transit: any;
    /** (Required) The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins. */
    kafkaconnect_version:                any;
    /** (Optional) Details about log delivery. See below. */
    log_delivery?:                       any;
    /** (Required) The name of the connector. */
    name:                                any;
    /** (Required) Specifies which plugins to use for the connector. See below. */
    plugin:                              any;
    /** (Required) The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket. */
    service_execution_role_arn:          any;
    /** (Optional) Specifies which worker configuration to use with the connector. See below. */
    worker_configuration?:               any;
    /** (Optional) Information about the auto scaling parameters for the connector. See below. */
    autoscaling?:                        any;
    /** (Optional) Details about a fixed capacity allocated to a connector. See below. */
    provisioned_capacity?:               any;
    /** (Required) The maximum number of workers allocated to the connector. */
    max_worker_count:                    any;
    /** (Optional) The number of microcontroller units (MCUs) allocated to each connector worker. Valid values: `1`, `2`, `4`, `8`. The default value is `1`. */
    mcu_count?:                          any;
    /** (Required) The minimum number of workers allocated to the connector. */
    min_worker_count:                    any;
    /** (Optional) The scale-in policy for the connector. See below. */
    scale_in_policy?:                    any;
    /** (Optional) The scale-out policy for the connector. See below. */
    scale_out_policy?:                   any;
    /** (Required) The CPU utilization percentage threshold at which you want connector scale out to be triggered. */
    cpu_utilization_percentage:          any;
    /** (Required) The number of workers that are allocated to the connector. */
    worker_count:                        any;
    /** (Required) The Apache Kafka cluster to which the connector is connected. */
    apache_kafka_cluster:                any;
    /** (Required) The bootstrap servers of the cluster. */
    bootstrap_servers:                   any;
    /** (Required) Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster. */
    vpc:                                 any;
    /** (Required) The security groups for the connector. */
    security_groups:                     any;
    /** (Required) The subnets for the connector. */
    subnets:                             any;
    /** (Optional) The type of client authentication used to connect to the Apache Kafka cluster. Valid values: `IAM`, `NONE`. A value of `NONE` means that no client authentication is used. The default value is `NONE`. */
    authentication_type?:                any;
    /** (Optional) The type of encryption in transit to the Apache Kafka cluster. Valid values: `PLAINTEXT`, `TLS`. The default values is `PLAINTEXT`. */
    encryption_type?:                    any;
    /** (Required) The workers can send worker logs to different destination types. This configuration specifies the details of these destinations. See below. */
    worker_log_delivery:                 any;
    /** (Optional) Details about delivering logs to Amazon CloudWatch Logs. See below. */
    cloudwatch_logs?:                    any;
    /** (Optional) Details about delivering logs to Amazon Kinesis Data Firehose. See below. */
    firehose?:                           any;
    /** (Optional) Details about delivering logs to Amazon S3. See below. */
    s3?:                                 any;
    /** (Required) Specifies whether connector logs get sent to the specified Amazon S3 destination. */
    enabled:                             any;
    /** (Required) The name of the CloudWatch log group that is the destination for log delivery. */
    log_group:                           any;
    /** (Optional) The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery. */
    delivery_stream?:                    any;
    /** (Optional) The name of the S3 bucket that is the destination for log delivery. */
    bucket?:                             any;
    /** (Optional) The S3 prefix that is the destination for log delivery. */
    prefix?:                             any;
    /** (Required) Details about a custom plugin. See below. */
    custom_plugin:                       any;
    /** (Required) The Amazon Resource Name (ARN) of the worker configuration. */
    arn:                                 any;
    /** (Required) The revision of the worker configuration. */
    revision:                            any;
}