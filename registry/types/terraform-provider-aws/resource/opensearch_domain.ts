export interface OpensearchDomain {
    resource: Resource[];
}

export interface Resource {
    opensearch_domain: OpensearchDomainClass;
}

export interface OpensearchDomainClass {
    /** (Required) Name of the domain. */
    domain_name:                any;
    /** (Optional) IAM policy document specifying the access policies for the domain. */
    access_policies?:           any;
    /** (Optional) Key-value string pairs to specify advanced configuration options. Note that the values for these configuration options must be strings (wrapped in quotes) or they may be wrong and cause a perpetual diff, causing Terraform to want to recreate your OpenSearch domain on every apply. */
    advanced_options?:          any;
    advanced_security_options?: AdvancedSecurityOptions;
    auto_tune_options?:         AutoTuneOptions;
    cluster_config?:            ClusterConfig;
    cognito_options?:           CognitoOptions;
    domain_endpoint_options?:   DomainEndpointOptions;
    ebs_options?:               EbsOptions;
    /** (Optional) Either `Elasticsearch_X.Y` or `OpenSearch_X.Y` to specify the engine version for the Amazon OpenSearch Service domain. For example, `OpenSearch_1.0` or `Elasticsearch_7.9`. */
    engine_version?:            any;
    encrypt_at_rest?:           EncryptAtREST;
    log_publishing_options?:    LogPublishingOptions;
    node_to_node_encryption?:   NodeToNodeEncryption;
    snapshot_options?:          SnapshotOptions;
    software_update_options?:   SoftwareUpdateOptions;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    vpc_options?:               VpcOptions;
    off_peak_window_options?:   OffPeakWindowOptions;
}

export interface AdvancedSecurityOptions {
    /** (Optional) Whether Anonymous auth is enabled. Enables fine-grained access control on an existing domain. Ignored unless `advanced_security_options` are enabled. _Can only be enabled on an existing domain._ */
    anonymous_auth_enabled:         any;
    /** (Optional) Enabled disabled toggle for off-peak update window. */
    enabled:                        any;
    /** (Optional) Whether the internal user database is enabled. Default is `false`. */
    internal_user_database_enabled: any;
    /** (Optional) Configuration block for the main user. Detailed below. */
    master_user_options:            any;
    /** (Optional) ARN for the main user. Only specify if `internal_user_database_enabled` is not set or set to `false`. */
    master_user_arn:                any;
    /** (Optional) Main user's username, which is stored in the Amazon OpenSearch Service domain's internal database. Only specify if `internal_user_database_enabled` is set to `true`. */
    master_user_name:               any;
    /** (Optional) Main user's password, which is stored in the Amazon OpenSearch Service domain's internal database. Only specify if `internal_user_database_enabled` is set to `true`. */
    master_user_password:           any;
}

export interface AutoTuneOptions {
    /** (Required) Auto-Tune desired state for the domain. Valid values: `ENABLED` or `DISABLED`. */
    desired_state:                  any;
    /** (Required if `rollback_on_disable` is set to `DEFAULT_ROLLBACK`) Configuration block for Auto-Tune maintenance windows. Can be specified multiple times for each maintenance window. Detailed below. */
    maintenance_schedule:           any;
    /** (Optional) Whether to roll back to default Auto-Tune settings when disabling Auto-Tune. Valid values: `DEFAULT_ROLLBACK` or `NO_ROLLBACK`. */
    rollback_on_disable:            any;
    /** (Required) Date and time at which to start the Auto-Tune maintenance schedule in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8). */
    start_at:                       any;
    /** (Required) Configuration block for the duration of the Auto-Tune maintenance window. Detailed below. */
    duration:                       any;
    /** (Required) A cron expression specifying the recurrence pattern for an Auto-Tune maintenance schedule. */
    cron_expression_for_recurrence: any;
    /** (Required) An integer specifying the value of the duration of an Auto-Tune maintenance window. */
    value:                          any;
    /** (Required) Unit of time specifying the duration of an Auto-Tune maintenance window. Valid values: `HOURS`. */
    unit:                           any;
}

export interface ClusterConfig {
    /** (Optional) Configuration block containing cold storage configuration. Detailed below. */
    cold_storage_options:     any;
    /** (Optional) Number of dedicated main nodes in the cluster. */
    dedicated_master_count:   any;
    /** (Optional) Whether dedicated main nodes are enabled for the cluster. */
    dedicated_master_enabled: any;
    /** (Optional) Instance type of the dedicated main nodes in the cluster. */
    dedicated_master_type:    any;
    /** (Optional) Number of instances in the cluster. */
    instance_count:           any;
    /** (Optional) Instance type of data nodes in the cluster. */
    instance_type:            any;
    /** (Optional) Number of warm nodes in the cluster. Valid values are between `2` and `150`. `warm_count` can be only and must be set when `warm_enabled` is set to `true`. */
    warm_count:               any;
    /** (Optional) Whether to enable warm storage. */
    warm_enabled:             any;
    /** (Optional) Instance type for the OpenSearch cluster's warm nodes. Valid values are `ultrawarm1.medium.search`, `ultrawarm1.large.search` and `ultrawarm1.xlarge.search`. `warm_type` can be only and must be set when `warm_enabled` is set to `true`. */
    warm_type:                any;
    /** (Optional) Configuration block containing zone awareness settings. Detailed below. */
    zone_awareness_config:    any;
    /** (Optional) Whether zone awareness is enabled, set to `true` for multi-az deployment. To enable awareness with three Availability Zones, the `availability_zone_count` within the `zone_awareness_config` must be set to `3`. */
    zone_awareness_enabled:   any;
    /** (Optional) Enabled disabled toggle for off-peak update window. */
    enabled:                  any;
    /** (Optional) Number of Availability Zones for the domain to use with `zone_awareness_enabled`. Defaults to `2`. Valid values: `2` or `3`. */
    availability_zone_count:  any;
}

export interface CognitoOptions {
    /** (Optional) Enabled disabled toggle for off-peak update window. */
    enabled:          any;
    /** (Required) ID of the Cognito Identity Pool to use. */
    identity_pool_id: any;
    /** (Required) ARN of the IAM role that has the AmazonOpenSearchServiceCognitoAccess policy attached. */
    role_arn:         any;
    /** (Required) ID of the Cognito User Pool to use. */
    user_pool_id:     any;
}

export interface DomainEndpointOptions {
    /** (Optional) ACM certificate ARN for your custom endpoint. */
    custom_endpoint_certificate_arn: any;
    /** (Optional) Whether to enable custom endpoint for the OpenSearch domain. */
    custom_endpoint_enabled:         any;
    /** (Optional) Fully qualified domain for your custom endpoint. */
    custom_endpoint:                 any;
    /** (Optional) Whether or not to require HTTPS. Defaults to `true`. */
    enforce_https:                   any;
    /** (Optional) Name of the TLS security policy that needs to be applied to the HTTPS endpoint. Valid values:  `Policy-Min-TLS-1-0-2019-07` and `Policy-Min-TLS-1-2-2019-07`. Terraform will only perform drift detection if a configuration value is provided. */
    tls_security_policy:             any;
}

export interface EbsOptions {
    /** (Required) Whether EBS volumes are attached to data nodes in the domain. */
    ebs_enabled: any;
    /** (Optional) Baseline input/output (I/O) performance of EBS volumes attached to data nodes. Applicable only for the GP3 and Provisioned IOPS EBS volume types. */
    iops:        any;
    /** (Required if `volume_type` is set to `gp3`) Specifies the throughput (in MiB/s) of the EBS volumes attached to data nodes. Applicable only for the gp3 volume type. */
    throughput:  any;
    /** (Required if `ebs_enabled` is set to `true`.) Size of EBS volumes attached to data nodes (in GiB). */
    volume_size: any;
    /** (Optional) Type of EBS volumes attached to data nodes. */
    volume_type: any;
}

export interface EncryptAtREST {
    /** (Optional) Enabled disabled toggle for off-peak update window. */
    enabled:    any;
    /** (Optional) KMS key ARN to encrypt the Elasticsearch domain with. If not specified then it defaults to using the `aws/es` service KMS key. Note that KMS will accept a KMS key ID but will return the key ARN. To prevent Terraform detecting unwanted changes, use the key ARN instead. */
    kms_key_id: any;
}

export interface LogPublishingOptions {
    /** (Required) ARN of the Cloudwatch log group to which log needs to be published. */
    cloudwatch_log_group_arn: any;
    /** (Optional) Enabled disabled toggle for off-peak update window. */
    enabled:                  any;
    /** (Required) Type of OpenSearch log. Valid values: `INDEX_SLOW_LOGS`, `SEARCH_SLOW_LOGS`, `ES_APPLICATION_LOGS`, `AUDIT_LOGS`. */
    log_type:                 any;
}

export interface NodeToNodeEncryption {
    /** (Optional) Enabled disabled toggle for off-peak update window. */
    enabled: any;
}

export interface OffPeakWindowOptions {
    /** (Optional) Enabled disabled toggle for off-peak update window. */
    enabled:           any;
    /** (Optional) */
    off_peak_window:   any;
    /** (Optional) 10h window for updates */
    window_start_time: any;
    /** (Required) Starting hour of the 10-hour window for updates */
    hours:             any;
    /** (Required) Starting minute of the 10-hour window for updates */
    minutes:           any;
}

export interface SnapshotOptions {
    /** (Required) Hour during which the service takes an automated daily snapshot of the indices in the domain. */
    automated_snapshot_start_hour: any;
}

export interface SoftwareUpdateOptions {
    /** (Optional) Whether automatic service software updates are enabled for the domain. Defaults to `false`. */
    auto_software_update_enabled: any;
}

export interface VpcOptions {
    /** (Optional) List of VPC Security Group IDs to be applied to the OpenSearch domain endpoints. If omitted, the default Security Group for the VPC will be used. */
    security_group_ids: any;
    /** (Required) List of VPC Subnet IDs for the OpenSearch domain endpoints to be created in. */
    subnet_ids:         any;
}