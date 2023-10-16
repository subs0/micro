/**
 * (Almost) Comprehensive Types for the [AWS Terraform
 * Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
 */
export interface TerraformProviderAws {
    data?: Data;
    resource?: Resource;
}
export interface Data {
    networkmanager_links?: NetworkmanagerLinks;
    appconfig_environment?: DataAppconfigEnvironment;
    ce_cost_category?: DataCeCostCategory;
    cloudfront_realtime_log_config?: DataCloudfrontRealtimeLogConfig;
    organizations_policies?: OrganizationsPolicies;
    kendra_faq?: DataKendraFAQ;
    secretsmanager_secret?: DataSecretsmanagerSecret;
    storagegateway_local_disk?: StoragegatewayLocalDisk;
    elasticache_user?: DataElasticacheUser;
    mq_broker_instance_type_offerings?: MqBrokerInstanceTypeOfferings;
    oam_sink?: DataOamSink;
    cloudformation_type?: DataCloudformationType;
    ec2_local_gateway?: Ec2LocalGateway;
    launch_template?: DataLaunchTemplate;
    caller_identity?: CallerIdentity;
    connect_security_profile?: DataConnectSecurityProfile;
    iam_policy_document?: IamPolicyDocument;
    opensearchserverless_security_config?: DataOpensearchserverlessSecurityConfig;
    cloudwatch_log_data_protection_policy_document?: CloudwatchLogDataProtectionPolicyDocument;
    lb_listener?: DataLBListener;
    arn?: Arn;
    ssm_maintenance_windows?: Ec2TransitGatewayAttachments;
    organizations_organizational_unit_descendant_accounts?: OrganizationsOrganizationalUnitAccounts;
    connect_routing_profile?: DataConnectRoutingProfile;
    secretsmanager_random_password?: SecretsmanagerRandomPassword;
    iam_account_alias?: DataIamAccountAlias;
    memorydb_subnet_group?: DataMemorydbSubnetGroup;
    mskconnect_custom_plugin?: DataMskconnectCustomPlugin;
    ssmcontacts_contact?: SsmcontactsContact;
    ebs_encryption_by_default?: DataEbsEncryptionByDefault;
    ec2_transit_gateway_dx_gateway_attachment?: Ec2TransitGatewayDxGatewayAttachment;
    networkmanager_sites?: NetworkmanagerSites;
    iam_users?: Iam;
    sfn_alias?: DataSfnAlias;
    iam_session_context?: IamSessionContext;
    ec2_local_gateway_virtual_interface_groups?: Ec2LocalGatewayVirtualInterfaceGroups;
    neptune_engine_version?: NeptuneEngineVersion;
    iam_principal_policy_simulation?: IamPrincipalPolicySimulation;
    wafregional_ipset?: WafRateBasedRuleClass;
    ec2_serial_console_access?: DataEbsEncryptionByDefault;
    appmesh_virtual_router?: DataAppmeshVirtualRouter;
    cloudhsm_v2_cluster?: DataCloudhsmV2Cluster;
    cloudformation_stack?: DataCloudformationStack;
    networkmanager_device?: DataNetworkmanagerDevice;
    neptune_orderable_db_instance?: NeptuneOrderableDBInstance;
    secretsmanager_secret_version?: DataSecretsmanagerSecretVersion;
    redshift_cluster?: DataRedshiftCluster;
    ssmincidents_response_plan?: DataSsmincidentsResponsePlan;
    connect_lambda_function_association?: ConnectLambdaFunctionAssociation;
    apigatewayv2_apis?: Apigatewayv2Apis;
    dx_connection?: DataDxConnection;
    imagebuilder_distribution_configurations?: ImagebuilderDistributionConfigurations;
    apigatewayv2_api?: DataApigatewayv2API;
    cognito_user_pool_clients?: CognitoUserPoolClients;
    elb_service_account?: ServiceAccount;
    vpcs?: Ec2LocalGatewayRouteTablesClass;
    lb?: LBTargetGroupClass;
    db_event_categories?: DBEventCategories;
    imagebuilder_image?: DataImagebuilderImage;
    ec2_managed_prefix_list?: DataEc2ManagedPrefixList;
    mskconnect_connector?: DataMskconnectConnector;
    regions?: DataRegions;
    iam_group?: DataIamGroup;
    backup_report_plan?: DataBackupReportPlan;
    memorydb_acl?: DataMemorydbACL;
    redshift_subnet_group?: ElasticacheSubnetGroupClass;
    codestarconnections_connection?: DataCodestarconnectionsConnection;
    route53_traffic_policy_document?: Route53TrafficPolicyDocument;
    outposts_outpost_instance_type?: OutpostsOutpostInstanceType;
    ssmcontacts_contact_channel?: KmsSecretClass;
    vpc_ipam_preview_next_cidr?: VpcIPAMPreviewNextCIDR;
    eips?: Eips;
    ram_resource_share?: DataRAMResourceShare;
    acm_certificate?: DataACMCertificate;
    location_tracker?: DataLocationTracker;
    appmesh_gateway_route?: DataAppmeshGatewayRoute;
    lambda_invocation?: DataLambdaInvocation;
    redshift_cluster_credentials?: RedshiftClusterCredentials;
    route53_resolver_endpoint?: DataRoute53ResolverEndpoint;
    ebs_snapshot_ids?: EbsSnapshotIDS;
    ec2_instance_types?: Ec2InstanceTypes;
    ec2_network_insights_analysis?: DataEc2NetworkInsightsAnalysis;
    billing_service_account?: BillingServiceAccount;
    api_gateway_domain_name?: DataAPIGatewayDomainName;
    connect_instance_storage_config?: DataConnectInstanceStorageConfig;
    rds_clusters?: RDSClusters;
    elasticache_cluster?: DataElasticacheCluster;
    connect_prompt?: ConnectPrompt;
    iam_saml_provider?: DataIamSamlProvider;
    ssmcontacts_plan?: DataSsmcontactsPlan;
    appconfig_environments?: AppconfigEnvironments;
    default_tags?: DefaultTags;
    kendra_index?: DataKendraIndex;
    sesv2_dedicated_ip_pool?: DataSesv2DedicatedIPPool;
    dynamodb_table_item?: DataDynamodbTableItem;
    cloudwatch_event_source?: CloudwatchEventSource;
    s3_objects?: S3Objects;
    dx_locations?: DxLocations;
    organizations_organizational_units?: OrganizationsOrganizationalUnits;
    cloudtrail_service_account?: ServiceAccount;
    dms_certificate?: DataDmsCertificate;
    ec2_spot_price?: Ec2SpotPrice;
    ec2_local_gateway_route_tables?: Ec2LocalGatewayRouteTablesClass;
    directory_service_directory?: DataDirectoryServiceDirectory;
    canonical_user_id?: CanonicalUserID;
    connect_contact_flow_module?: DataConnectContactFlowModule;
    fsx_openzfs_snapshot?: DataFsxOpenzfsSnapshot;
    imagebuilder_component?: DataImagebuilderComponent;
    imagebuilder_distribution_configuration?: DataImagebuilderDistributionConfiguration;
    workspaces_image?: WorkspacesImage;
    iot_endpoint?: IotEndpoint;
    s3control_multi_region_access_point?: DataS3ControlMultiRegionAccessPoint;
    oam_links?: OamInks;
    apigatewayv2_export?: Apigatewayv2Export;
    ecs_cluster?: DataEcsCluster;
    kinesis_stream_consumer?: DataKinesisStreamConsumer;
    wafv2_regex_pattern_set?: DataWafv2RegexPatternSet;
    datapipeline_pipeline_definition?: DataDatapipelinePipelineDefinition;
    lakeformation_resource?: LakeformationResource;
    servicecatalog_portfolio_constraints?: ServicecatalogPortfolioConstraints;
    vpc_security_group_rules?: Subnets;
    redshift_service_account?: ServiceAccount;
    signer_signing_job?: DataSignerSigningJob;
    appintegrations_event_integration?: DataAppintegrationsEventIntegration;
    kendra_thesaurus?: DataKendraThesaurus;
    lex_slot_type?: DataLexSlotType;
    quicksight_data_set?: DataQuicksightDataSet;
    ses_domain_identity?: DataSesDomainIdentity;
    kms_secrets?: KmsSecrets;
    ec2_transit_gateway_vpc_attachment?: DataEc2TransitGatewayVpcAttachment;
    kms_alias?: DataKmsAlias;
    dms_replication_instance?: DataDmsReplicationInstance;
    imagebuilder_container_recipe?: DataImagebuilderContainerRecipe;
    waf_subscribed_rule_group?: WafSubscribedRuleGroup;
    ssm_parameters_by_path?: SsmParametersByPath;
    region?: DataRegion;
    cloudfront_origin_access_identity?: DataCloudfrontOriginAccessIdentity;
    servicecatalog_launch_paths?: ServicecatalogLaunchPaths;
    auditmanager_control?: Auditmanager;
    ec2_local_gateway_route_table?: Ec2LocalGatewayRouteTable;
    service_discovery_service?: DataServiceDiscoveryService;
    ssm_document?: DataSsmDocument;
    ec2_transit_gateway_connect_peer?: DataEc2TransitGatewayConnectPeer;
    imagebuilder_image_recipes?: Imagebuilder;
    outposts_assets?: OutpostsAssets;
    prometheus_workspace?: DataPrometheusWorkspace;
    ecr_image?: EcrImage;
    cloudformation_export?: CloudformationExport;
    db_cluster_snapshot?: DataDBClusterSnapshot;
    vpc_endpoint?: DataVpcEndpoint;
    sfn_state_machine?: DataSfnStateMachine;
    ec2_host?: DataEc2Host;
    prefix_list?: PrefixList;
    rds_certificate?: RDSCertificate;
    secretsmanager_secret_rotation?: DataSecretsmanagerSecretRotation;
    opensearchserverless_collection?: DataOpensearchserverlessCollection;
    outposts_outpost?: OutpostsOutpost;
    imagebuilder_image_pipeline?: DataImagebuilderImagePipeline;
    launch_configuration?: DataLaunchConfiguration;
    networkfirewall_firewall_policy?: DataNetworkfirewallFirewallPolicy;
    outposts_sites?: OutpostsSites;
    route53_zone?: DataRoute53Zone;
    appmesh_virtual_node?: AppmeshVirtual;
    vpc_endpoint_service?: DataVpcEndpointService;
    emrcontainers_virtual_cluster?: DataEmrcontainersVirtualCluster;
    mq_broker?: DataMqBroker;
    sagemaker_prebuilt_ecr_image?: SagemakerPrebuiltEcrImage;
    grafana_workspace?: DataGrafanaWorkspace;
    connect_user_hierarchy_group?: DataConnectUserHierarchyGroup;
    msk_configuration?: DataMskConfiguration;
    docdb_orderable_db_instance?: DocdbOrderableDBInstance;
    ec2_network_insights_path?: DataEc2NetworkInsightsPath;
    ecr_authorization_token?: EcrAuthorizationToken;
    lambda_functions?: LambdaFunctions;
    eks_clusters?: EksClusters;
    elastic_beanstalk_hosted_zone?: CloudfrontLogDeliveryCanonicalUserID;
    memorydb_parameter_group?: DataMemorydbParameterGroup;
    prometheus_workspaces?: PrometheusWorkspaces;
    ec2_public_ipv4_pool?: Ec2PublicIpv4Pool;
    vpclattice_service_network?: DataVpclatticeServiceNetwork;
    wafregional_web_acl?: WafRateBasedRuleClass;
    cloudwatch_log_groups?: CloudwatchLogGroups;
    imagebuilder_container_recipes?: Imagebuilder;
    kms_custom_key_store?: DataKmsCustomKeyStore;
    route53_resolver_rule?: DataRoute53ResolverRule;
    cur_report_definition?: DataCurReportDefinition;
    cloudfront_origin_request_policy?: DataCloudfrontOriginRequestPolicy;
    networkmanager_connections?: NetworkmanagerConnections;
    redshift_orderable_cluster?: RedshiftOrderableCluster;
    eks_addon_version?: EksAddonVersion;
    guardduty_finding_ids?: GuarddutyFindingIDS;
    licensemanager_received_licenses?: Licensemanager;
    ec2_transit_gateway_route_table?: DataEc2TransitGatewayRouteTable;
    ami_ids?: AmiIDS;
    connect_contact_flow?: DataConnectContactFlow;
    wafregional_rule?: WafRateBasedRuleClass;
    mskconnect_worker_configuration?: DataMskconnectWorkerConfiguration;
    qldb_ledger?: ElbClass;
    dx_location?: DxLocation;
    ssm_patch_baseline?: DataSsmPatchBaseline;
    lb_hosted_zone_id?: LBHostedZoneID;
    ec2_coip_pool?: Ec2CoipPool;
    kms_key?: DataKmsKey;
    cloudfront_cache_policy?: DataCloudfrontCachePolicy;
    ebs_default_kms_key?: DataEbsDefaultKmsKey;
    glue_data_catalog_encryption_settings?: DataGlueDataCatalogEncryptionSettings;
    msk_cluster?: DataMskCluster;
    opensearchserverless_vpc_endpoint?: DataOpensearchserverlessVpcEndpoint;
    quicksight_user?: DataQuicksightUser;
    workspaces_workspace?: DataWorkspacesWorkspace;
    cloudfront_log_delivery_canonical_user_id?: CloudfrontLogDeliveryCanonicalUserID;
    codecommit_approval_rule_template?: DataCodecommitApprovalRuleTemplate;
    wafregional_rate_based_rule?: WafRateBasedRuleClass;
    fsx_ontap_storage_virtual_machines?: FsxOntapStorageVirtualMachines;
    ses_active_receipt_rule_set?: SesActiveReceiptRuleSet;
    s3_object?: DataS3Object;
    identitystore_group?: DataIdentitystoreGroup;
    quicksight_theme?: DataQuicksightTheme;
    location_tracker_association?: LocationTrackerAssociation;
    route_tables?: NatGateways;
    s3_bucket?: DataS3Bucket;
    ec2_client_vpn_endpoint?: DataEc2ClientVPNEndpoint;
    lambda_code_signing_config?: DataLambdaCodeSigningConfig;
    backup_vault?: DataBackupVault;
    kinesis_firehose_delivery_stream?: KinesisFirehoseDeliveryStreamClass;
    glue_script?: GlueScript;
    route53_resolver_firewall_domain_list?: DataRoute53ResolverFirewallDomainList;
    partition?: Partition;
    vpc_peering_connections?: Ec2LocalGatewayRouteTablesClass;
    guardduty_detector?: DataGuarddutyDetector;
    servicecatalog_provisioning_artifacts?: ServicecatalogProvisioningArtifacts;
    connect_quick_connect?: DataConnectQuickConnect;
    ecs_service?: DataEcsService;
    kms_ciphertext?: DataKmsCiphertext;
    iam_access_keys?: IamAccessKeys;
    networkmanager_connection?: DataNetworkmanagerConnection;
    kendra_experience?: DataKendraExperience;
    imagebuilder_infrastructure_configuration?: DataImagebuilderInfrastructureConfiguration;
    quicksight_group?: DataQuicksightGroup;
    ecr_repository?: DataEcrRepository;
    appmesh_route?: DataAppmeshRoute;
    servicecatalog_portfolio?: DataServicecatalogPortfolio;
    cloudcontrolapi_resource?: DataCloudcontrolapiResource;
    api_gateway_export?: APIGatewayExport;
    inspector_rules_packages?: InspectorRulesPackages;
    networkmanager_core_network_policy_document?: NetworkmanagerCoreNetworkPolicyDocument;
    cloudwatch_event_bus?: KinesisFirehoseDeliveryStreamClass;
    db_proxy?: DataDBProxy;
    opensearchserverless_access_policy?: OpensearchserverlessAccessPolicy;
    ecrpublic_authorization_token?: EcrpublicAuthorizationToken;
    api_gateway_authorizers?: APIGatewayAuthorizers;
    security_group?: DataSecurityGroup;
    cloudwatch_event_connection?: DataCloudwatchEventConnection;
    dms_replication_subnet_group?: DataDmsReplicationSubnetGroup;
    route53_resolver_query_log_config?: DataRoute53ResolverQueryLogConfig;
    ssoadmin_instances?: SsoadminInstances;
    ec2_transit_gateway?: DataEc2TransitGateway;
    ec2_managed_prefix_lists?: Ec2LocalGatewayRouteTablesClass;
    waf_web_acl?: WafRateBasedRuleClass;
    codeartifact_authorization_token?: CodeartifactAuthorizationToken;
    fsx_ontap_file_system?: AwsAccountsClass;
    ec2_transit_gateway_multicast_domain?: DataEc2TransitGatewayMulticastDomain;
    vpc_peering_connection?: DataVpcPeeringConnection;
    appconfig_configuration_profiles?: AppconfigConfigurationProfiles;
    route53_resolver_firewall_rule_group_association?: DataRoute53ResolverFirewallRuleGroupAssociation;
    eks_cluster_auth?: EksClusterAuth;
    lex_intent?: DataLexIntent;
    secretsmanager_secrets?: ImagebuilderDistributionConfigurations;
    identitystore_user?: DataIdentitystoreUser;
    lex_bot?: DataLexBot;
    iam_policy?: DataIamPolicy;
    ssm_parameter?: DataSsmParameter;
    controltower_controls?: ControltowerControls;
    organizations_organizational_unit_child_accounts?: OrganizationsOrganizationalUnitAccounts;
    iam_user?: DataIamUser;
    key_pair?: DataKeyPair;
    eks_node_group?: DataEksNodeGroup;
    internet_gateway?: DataInternetGateway;
    api_gateway_authorizer?: DataAPIGatewayAuthorizer;
    rds_engine_version?: RDSEngineVersion;
    subnets?: Subnets;
    ec2_transit_gateway_peering_attachment?: DataEc2TransitGatewayPeeringAttachment;
    nat_gateways?: NatGateways;
    subnet?: DataSubnet;
    network_acls?: NatGateways;
    outposts_outpost_instance_types?: OutpostsOutpostInstanceTypes;
    lakeformation_data_lake_settings?: DataLakeformationDataLakeSettings;
    cloudwatch_log_group?: DataCloudwatchLogGroup;
    appmesh_mesh?: DataAppmeshMesh;
    outposts_site?: OutpostsSite;
    budgets_budget?: DataBudgetsBudget;
    iam_instance_profile?: DataIamInstanceProfile;
    kms_secret?: KmsSecretClass;
    vpclattice_resource_policy?: VpclatticeResourcePolicy;
    wafv2_ip_set?: DataWafv2IPSet;
    api_gateway_sdk?: APIGatewaySDK;
    elastic_beanstalk_solution_stack?: ElasticBeanstalkSolutionStack;
    lb_target_group?: LBTargetGroupClass;
    location_map?: DataLocationMap;
    ec2_transit_gateway_route_table_associations?: Ec2TransitGatewayRouteTableAtions;
    db_subnet_group?: DataDBSubnetGroup;
    route53_resolver_firewall_rule_group?: DataRoute53ResolverFirewallRuleGroup;
    iam_instance_profiles?: IamInstanceProfiles;
    pricing_product?: PricingProduct;
    acmpca_certificate?: DataAcmpcaCertificate;
    networkmanager_link?: DataNetworkmanagerLink;
    organizations_resource_tags?: OrganizationsResourceTags;
    ssm_instances?: Ec2TransitGatewayAttachments;
    ec2_instance_type_offering?: Ec2InstanceTypeOffering;
    batch_scheduling_policy?: DataBatchSchedulingPolicy;
    oam_sinks?: OamInks;
    sesv2_configuration_set?: DataSesv2ConfigurationSet;
    lambda_function_url?: DataLambdaFunctionURL;
    waf_ipset?: WafRateBasedRuleClass;
    outposts_asset?: OutpostsAsset;
    route53_resolver_firewall_config?: DataRoute53ResolverFirewallConfig;
    wafv2_web_acl?: Wafv2;
    servicequotas_service?: ServicequotasService;
    appmesh_virtual_gateway?: AppmeshVirtual;
    lambda_layer_version?: DataLambdaLayerVersion;
    ebs_volumes?: Ec2LocalGatewayRouteTablesClass;
    iam_openid_connect_provider?: DataIamOpenidConnectProvider;
    route_table?: DataRouteTable;
    waf_rule?: WafRateBasedRuleClass;
    ec2_transit_gateway_route_tables?: Ec2LocalGatewayRouteTablesClass;
    globalaccelerator_accelerator?: GlobalacceleratorAccelerator;
    ec2_transit_gateway_connect?: DataEc2TransitGatewayConnect;
    ec2_transit_gateway_vpc_attachments?: Ec2TransitGatewayAttachments;
    cloudfront_function?: DataCloudfrontFunction;
    kendra_query_suggestions_block_list?: DataKendraQuerySuggestionsBlockList;
    msk_vpc_connection?: DataMskVpcConnection;
    organizations_delegated_services?: OrganizationsDelegatedServices;
    service_discovery_http_namespace?: DataServiceDiscoveryHTTPNamespace;
    ec2_local_gateways?: Ec2LocalGatewayRouteTablesClass;
    workspaces_directory?: DataWorkspacesDirectory;
    availability_zone?: AvailabilityZone;
    batch_job_queue?: DataBatchJobQueue;
    ec2_transit_gateway_attachment?: Ec2TransitGatewayAttachment;
    elastic_beanstalk_application?: DataElasticBeanstalkApplication;
    signer_signing_profile?: DataSignerSigningProfile;
    s3_bucket_objects?: S3BucketObjects;
    ec2_transit_gateway_route_table_routes?: Ec2TransitGatewayRouteTableRoutes;
    lambda_function?: DataLambdaFunction;
    connect_user?: DataConnectUser;
    memorydb_user?: DataMemorydbUser;
    network_interfaces?: Ec2LocalGatewayRouteTablesClass;
    imagebuilder_image_pipelines?: ImagebuilderImagePipelines;
    db_instance?: DataDBInstance;
    efs_access_points?: EFSAccessPoints;
    eip?: DataEip;
    ip_ranges?: IPRanges;
    vpc_ipam_pool?: DataVpcIPAMPool;
    imagebuilder_components?: Imagebuilder;
    codecatalyst_dev_environment?: DataCodecatalystDevEnvironment;
    s3_bucket_object?: DataS3BucketObject;
    sfn_activity?: DataSfnActivity;
    globalaccelerator_custom_routing_accelerator?: GlobalacceleratorAccelerator;
    redshiftserverless_workgroup?: DataRedshiftserverlessWorkgroup;
    dx_gateway?: DataDxGateway;
    ebs_volume?: DataEbsVolume;
    ec2_transit_gateway_attachments?: Ec2TransitGatewayAttachments;
    organizations_policies_for_target?: OrganizationsPoliciesForTarget;
    sqs_queue?: DataSqsQueue;
    emr_release_labels?: EmrReleaseLabels;
    appmesh_virtual_service?: AppmeshVirtual;
    vpclattice_auth_policy?: DataVpclatticeAuthPolicy;
    elb?: ElbClass;
    ec2_instance_type?: Ec2InstanceType;
    imagebuilder_infrastructure_configurations?: ImagebuilderDistributionConfigurations;
    codeartifact_repository_endpoint?: CodeartifactRepositoryEndpoint;
    rds_orderable_db_instance?: RDSOrderableDBInstance;
    api_gateway_resource?: DataAPIGatewayResource;
    elasticsearch_domain?: DataElasticsearchDomain;
    transfer_server?: DataTransferServer;
    ecs_task_definition?: DataEcsTaskDefinition;
    vpclattice_service?: DataVpclatticeService;
    docdb_engine_version?: DocdbEngineVersion;
    elb_hosted_zone_id?: CloudfrontLogDeliveryCanonicalUserID;
    customer_gateway?: DataCustomerGateway;
    route53_resolver_rules?: Route53ResolverRules;
    kms_public_key?: KmsPublicKey;
    iam_server_certificate?: DataIamServerCertificate;
    instances?: Instances;
    lambda_alias?: DataLambdaAlias;
    memorydb_cluster?: DataMemorydbCluster;
    organizations_organizational_unit?: DataOrganizationsOrganizationalUnit;
    auditmanager_framework?: Auditmanager;
    connect_user_hierarchy_structure?: DataConnectUserHierarchyStructure;
    lex_bot_alias?: DataLexBotAlias;
    rds_reserved_instance_offering?: RDSReservedInstanceOffering;
    glue_connection?: DataGlueConnection;
    ssmincidents_replication_set?: DataSsmincidentsReplicationSet;
    networkfirewall_resource_policy?: NetworkfirewallResourcePolicy;
    serverlessapplicationrepository_application?: ServerlessapplicationrepositoryApplication;
    ses_email_identity?: DataSesEmailIdentity;
    cognito_identity_pool?: DataCognitoIdentityPool;
    connect_instance?: DataConnectInstance;
    location_tracker_associations?: LocationTrackerAssociations;
    api_gateway_vpc_link?: DataAPIGatewayVpcLink;
    ecr_pull_through_cache_rule?: KmsSecretClass;
    dms_endpoint?: DataDmsEndpoint;
    redshiftserverless_namespace?: DataRedshiftserverlessNamespace;
    networkmanager_site?: DataNetworkmanagerSite;
    appconfig_configuration_profile?: DataAppconfigConfigurationProfile;
    cognito_user_pool_client?: DataCognitoUserPoolClient;
    vpc_security_group_rule?: VpcSecurityGroupRule;
    vpc_ipam_pools?: VpcIPAMPools;
    nat_gateway?: DataNatGateway;
    organizations_delegated_administrators?: OrganizationsDelegatedAdministrators;
    ce_tags?: CeTags;
    dms_replication_task?: DataDmsReplicationTask;
    elasticache_subnet_group?: ElasticacheSubnetGroupClass;
    wafregional_subscribed_rule_group?: WafSubscribedRuleGroup;
    backup_plan?: DataBackupPlan;
    oam_link?: DataOamLink;
    memorydb_snapshot?: DataMemorydbSnapshot;
    route?: DataRoute;
    sqs_queues?: SqsQueues;
    ami?: DataAmi;
    licensemanager_grants?: Licensemanager;
    efs_mount_target?: DataEFSMountTarget;
    opensearch_domain?: DataOpensearchDomain;
    availability_zones?: DataAvailabilityZones;
    fsx_ontap_storage_virtual_machine?: DataFsxOntapStorageVirtualMachine;
    kinesis_stream?: DataKinesisStream;
    ebs_snapshot?: DataEbsSnapshot;
    cloudfront_distribution?: DataCloudfrontDistribution;
    connect_queue?: DataConnectQueue;
    cognito_user_pools?: CognitoUserPools;
    resourcegroupstaggingapi_resources?: ResourcegroupstaggingapiResources;
    vpc_dhcp_options?: DataVpcDHCPOptions;
    api_gateway_rest_api?: DataAPIGatewayRESTAPI;
    iam_role?: DataIamRole;
    route53_delegation_set?: DataRoute53DelegationSet;
    sesv2_email_identity?: DataSesv2EmailIdentity;
    vpclattice_listener?: DataVpclatticeListener;
    connect_bot_association?: DataConnectBotAssociation;
    dynamodb_table?: ElbClass;
    networkmanager_global_networks?: NetworkmanagerGlobalNetworks;
    batch_compute_environment?: DataBatchComputeEnvironment;
    licensemanager_received_license?: LicensemanagerReceivedLicense;
    autoscaling_group?: AutoscalingGroup;
    location_geofence_collection?: LocationGeofenceCollection;
    outposts_outposts?: OutpostsOutposts;
    networkmanager_global_network?: DataNetworkmanagerGlobalNetwork;
    workspaces_bundle?: WorkspacesBundle;
    service?: DataService;
    iam_roles?: Iam;
    ec2_public_ipv4_pools?: Ec2PublicIpv4Pools;
    eks_addon?: DataEksAddon;
    datapipeline_pipeline?: DataDatapipelinePipeline;
    elasticache_replication_group?: DataElasticacheReplicationGroup;
    ecs_container_definition?: EcsContainerDefinition;
    location_place_index?: DataLocationPlaceIndex;
    connect_vocabulary?: DataConnectVocabulary;
    msk_broker_nodes?: MskBrokerNodes;
    servicecatalog_product?: DataServicecatalogProduct;
    instance?: DataInstance;
    sfn_state_machine_versions?: SfnStateMachineVersions;
    autoscaling_groups?: AutoscalingGroups;
    ec2_instance_type_offerings?: Ec2InstanceTypeOfferings;
    imagebuilder_image_recipe?: DataImagebuilderImageRecipe;
    ivs_stream_key?: IvsStreamKey;
    ecs_task_execution?: EcsTaskExecution;
    organizations_policy?: DataOrganizationsPolicy;
    cognito_user_pool_signing_certificate?: CognitoUserPoolSigningCertificate;
    glue_catalog_table?: DataGlueCatalogTable;
    codecommit_repository?: DataCodecommitRepository;
    efs_file_system?: DataEFSFileSystem;
    ec2_transit_gateway_vpn_attachment?: Ec2TransitGatewayVPNAttachment;
    fsx_windows_file_system?: DataFsxWindowsFileSystem;
    servicecatalog_constraint?: DataServicecatalogConstraint;
    organizations_organization?: OrganizationsOrganization;
    route53_resolver_firewall_rules?: Route53ResolverFirewallRules;
    s3_account_public_access_block?: S3AccountPublicAccessBlock;
    security_groups?: SecurityGroups;
    redshiftserverless_credentials?: RedshiftserverlessCredentials;
    backup_framework?: DataBackupFramework;
    eks_node_groups?: EksNodeGroups;
    vpn_gateway?: DataVPNGateway;
    ec2_local_gateway_virtual_interface?: Ec2LocalGatewayVirtualInterface;
    acmpca_certificate_authority?: DataAcmpcaCertificateAuthority;
    rds_cluster?: DataRDSCluster;
    service_discovery_dns_namespace?: ServiceDiscoveryDNSNamespace;
    vpc_ipam_pool_cidrs?: VpcIPAMPoolCidrs;
    eks_cluster?: DataEksCluster;
    networkfirewall_firewall?: DataNetworkfirewallFirewall;
    ec2_coip_pools?: Ec2CoipPools;
    lbs?: Lbs;
    cloudfront_origin_access_identities?: CloudfrontOriginAccessIdentities;
    opensearchserverless_security_policy?: OpensearchserverlessSecurityPolicy;
    location_route_calculator?: DataLocationRouteCalculator;
    vpc?: DataVpc;
    db_instances?: DBInstances;
    efs_access_point?: DataEFSAccessPoint;
    networkmanager_devices?: NetworkmanagerDevices;
    wafv2_rule_group?: Wafv2;
    ssoadmin_permission_set?: DataSsoadminPermissionSet;
    msk_kafka_version?: MskKafkaVersion;
    network_interface?: DataNetworkInterface;
    connect_hours_of_operation?: DataConnectHoursOfOperation;
    iam_user_ssh_key?: DataIamUserSSHKey;
    ec2_local_gateway_virtual_interface_group?: Ec2LocalGatewayVirtualInterfaceGroup;
    sns_topic?: DataSnsTopic;
    s3_bucket_policy?: DataS3BucketPolicy;
    servicequotas_service_quota?: DataServicequotasServiceQuota;
    waf_rate_based_rule?: WafRateBasedRuleClass;
    backup_selection?: DataBackupSelection;
    lakeformation_permissions?: DataLakeformationPermissions;
    sesv2_email_identity_mail_from_attributes?: Sesv2EmailIdentityMailFromAttributes;
    dx_router_configuration?: DxRouterConfiguration;
    ec2_transit_gateway_route_table_propagations?: Ec2TransitGatewayRouteTableAtions;
    cloudfront_response_headers_policy?: DataCloudfrontResponseHeadersPolicy;
    db_snapshot?: DataDBSnapshot;
    api_gateway_api_key?: DataAPIGatewayAPIKey;
}
export interface DataACMCertificate {
    domain: string;
    key_types?: string;
    statuses?: string;
    types?: string;
    most_recent?: string;
    arn?: string;
    id?: string;
    status?: string;
    certificate?: string;
    certificate_chain?: string;
    tags?: string;
}
export interface DataAcmpcaCertificate {
    arn: string;
    certificate_authority_arn: string;
    certificate?: string;
    certificate_chain?: string;
}
export interface DataAcmpcaCertificateAuthority {
    arn: string;
    id?: string;
    certificate?: string;
    certificate_chain?: string;
    certificate_signing_request?: string;
    usage_mode?: string;
    not_after?: string;
    not_before?: string;
    revocation_configuration?: string;
    serial?: string;
    status?: string;
    tags?: string;
    type?: string;
}
export interface DataAmi {
    owners?: string;
    most_recent?: string;
    executable_users?: string;
    include_deprecated?: string;
    filter?: string;
    name_regex?: string;
    arn?: string;
    architecture?: string;
    boot_mode?: string;
    block_device_mappings?: string;
    device_name?: string;
    ebs?: string;
    delete_on_termination?: string;
    encrypted?: string;
    iops?: string;
    snapshot_id?: string;
    volume_size?: string;
    throughput?: string;
    volume_type?: string;
    no_device?: string;
    virtual_name?: string;
    creation_date?: string;
    deprecation_time?: string;
    description?: string;
    hypervisor?: string;
    image_id?: string;
    image_location?: string;
    image_owner_alias?: string;
    image_type?: string;
    imds_support?: string;
    kernel_id?: string;
    name?: string;
    owner_id?: string;
    platform?: string;
    product_codes?: string;
    public?: string;
    ramdisk_id?: string;
    root_device_name?: string;
    root_device_type?: string;
    root_snapshot_id?: string;
    sriov_net_support?: string;
    state?: string;
    state_reason?: string;
    tags?: string;
    tpm_support?: string;
    virtualization_type?: string;
    usage_operation?: string;
    platform_details?: string;
    ena_support?: string;
}
export interface AmiIDS {
    owners: string;
    executable_users?: string;
    filter?: string;
    name_regex?: string;
    sort_ascending?: string;
    include_deprecated?: string;
}
export interface DataAPIGatewayAPIKey {
    id: string;
    name?: string;
    value?: string;
    created_date?: string;
    last_updated_date?: string;
    customer_id?: string;
    description?: string;
    enabled?: string;
    tags?: string;
}
export interface DataAPIGatewayAuthorizer {
    authorizer_id: string;
    rest_api_id: string;
    arn?: string;
    authorizer_credentials?: string;
    authorizer_result_ttl_in_seconds?: string;
    authorizer_uri?: string;
    identity_source?: string;
    identity_validation_expression?: string;
    name?: string;
    provider_arns?: string;
    type?: string;
}
export interface APIGatewayAuthorizers {
    rest_api_id: string;
    ids?: string;
}
export interface DataAPIGatewayDomainName {
    domain_name: string;
    arn?: string;
    certificate_arn?: string;
    certificate_name?: string;
    certificate_upload_date?: string;
    cloudfront_domain_name?: string;
    cloudfront_zone_id?: string;
    endpoint_configuration?: string;
    types?: string;
    regional_certificate_arn?: string;
    regional_certificate_name?: string;
    regional_domain_name?: string;
    regional_zone_id?: string;
    security_policy?: string;
    tags?: string;
}
export interface APIGatewayExport {
    export_type: string;
    rest_api_id: string;
    stage_name: string;
    accepts?: string;
    parameters?: string;
    id?: string;
    body?: string;
    content_type?: string;
    content_disposition?: string;
}
export interface DataAPIGatewayResource {
    rest_api_id: string;
    path: string;
    id?: string;
    parent_id?: string;
    path_part?: string;
}
export interface DataAPIGatewayRESTAPI {
    name: string;
    api_key_source?: string;
    arn?: string;
    binary_media_types?: string;
    description?: string;
    endpoint_configuration?: string;
    execution_arn?: string;
    id?: string;
    minimum_compression_size?: string;
    policy?: string;
    root_resource_id?: string;
    tags?: string;
}
export interface APIGatewaySDK {
    rest_api_id: string;
    stage_name: string;
    sdk_type: string;
    parameters?: string;
    id?: string;
    body?: string;
    content_type?: string;
    content_disposition?: string;
}
export interface DataAPIGatewayVpcLink {
    name: string;
    id?: string;
    description?: string;
    status?: string;
    status_message?: string;
    target_arns?: string;
    tags?: string;
}
export interface DataApigatewayv2API {
    api_id: string;
    api_endpoint?: string;
    api_key_selection_expression?: string;
    arn?: string;
    cors_configuration?: string;
    description?: string;
    disable_execute_api_endpoint?: string;
    execution_arn?: string;
    name?: string;
    protocol_type?: string;
    route_selection_expression?: string;
    tags?: string;
    version?: string;
    allow_credentials?: string;
    allow_headers?: string;
    allow_methods?: string;
    allow_origins?: string;
    expose_headers?: string;
    max_age?: string;
}
export interface Apigatewayv2Apis {
    name?: string;
    protocol_type?: string;
    tags?: string;
    ids?: string;
}
export interface Apigatewayv2Export {
    api_id: string;
    specification: string;
    output_type: string;
    export_version?: string;
    include_extensions?: string;
    stage_name?: string;
    id?: string;
    body?: string;
}
export interface DataAppconfigConfigurationProfile {
    application_id: string;
    configuration_profile_id: string;
    arn?: string;
    description?: string;
    id?: string;
    location_uri?: string;
    name?: string;
    retrieval_role_arn?: string;
    tags?: string;
    validator?: string;
    content?: string;
    type?: string;
}
export interface AppconfigConfigurationProfiles {
    application_id: string;
    configuration_profile_ids?: string;
}
export interface DataAppconfigEnvironment {
    application_id: string;
    environment_id: string;
    arn?: string;
    name?: string;
    description?: string;
    monitor?: string;
    alarm_arn?: string;
    alarm_role_arn?: string;
    state?: string;
    tags?: string;
}
export interface AppconfigEnvironments {
    application_id: string;
    environment_ids?: string;
}
export interface DataAppintegrationsEventIntegration {
    name: string;
    arn?: string;
    description?: string;
    eventbridge_bus?: string;
    id?: string;
    tags?: string;
    source?: string;
}
export interface DataAppmeshGatewayRoute {
    name: string;
    mesh_name: string;
    virtual_gateway_name: string;
    mesh_owner?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags?: string;
}
export interface DataAppmeshMesh {
    name: string;
    mesh_owner?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags?: string;
}
export interface DataAppmeshRoute {
    name: string;
    mesh_name: string;
    virtual_router_name: string;
    mesh_owner?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags?: string;
}
export interface AppmeshVirtual {
    name: string;
    mesh_name: string;
    mesh_owner?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags?: string;
}
export interface DataAppmeshVirtualRouter {
    name: string;
    mesh_name: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags?: string;
}
export interface Arn {
    arn: string;
    partition?: string;
    service?: string;
    region?: string;
    account?: string;
    resource?: string;
}
export interface Auditmanager {
    name: string;
    type: string;
}
export interface AutoscalingGroup {
    name?: string;
    arn?: string;
    availability_zones?: string;
    default_cool_down?: string;
    desired_capacity?: string;
    desired_capacity_type?: string;
    enabled_metrics?: string;
    health_check_grace_period?: string;
    health_check_type?: string;
    id?: string;
    launch_configuration?: string;
    launch_template?: string;
    version?: string;
    load_balancers?: string;
    max_instance_lifetime?: string;
    max_size?: string;
    min_size?: string;
    mixed_instances_policy?: string;
    instances_distribution?: string;
    on_demand_allocation_strategy?: string;
    on_demand_base_capacity?: string;
    spot_allocation_strategy?: string;
    spot_instance_pools?: string;
    spot_max_price?: string;
    launch_template_specification?: string;
    launch_template_id?: string;
    launch_template_name?: string;
    override?: string;
    instance_requirements?: string;
    min?: string;
    max?: string;
    accelerator_manufacturers?: string;
    accelerator_names?: string;
    accelerator_total_memory_mib?: string;
    accelerator_types?: string;
    allowed_instance_types?: string;
    bare_metal?: string;
    baseline_ebs_bandwidth_mbps?: string;
    burstable_performance?: string;
    cpu_manufacturers?: string;
    excluded_instance_types?: string;
    instance_generations?: string;
    local_storage?: string;
    local_storage_types?: string;
    memory_gib_per_vcpu?: string;
    memory_mib?: string;
    network_bandwidth_gbps?: string;
    network_interface_count?: string;
    on_demand_max_price_percentage_over_lowest_price?: string;
    require_hibernate_support?: string;
    spot_max_price_percentage_over_lowest_price?: string;
    total_local_storage_gb?: string;
    vcpu_count?: string;
    instance_type?: string;
    weighted_capacity?: string;
    placement_group?: string;
    predicted_capacity?: string;
    service_linked_role_arn?: string;
    status?: string;
    suspended_processes?: string;
    tag?: string;
    key?: string;
    value?: string;
    propagate_at_launch?: string;
    target_group_arns?: string;
    termination_policies?: string;
    traffic_source?: string;
    identifier?: string;
    type?: string;
    vpc_zone_identifier?: string;
    warm_pool?: string;
    instance_reuse_policy?: string;
    reuse_on_scale_in?: string;
    max_group_prepared_policy?: string;
    pool_state?: string;
    warm_pool_size?: string;
}
export interface AutoscalingGroups {
    name: string;
    values: string;
    names?: string;
    filter?: string;
    arns?: string;
    id?: string;
}
export interface AvailabilityZone {
    name: string;
    values: string;
    all_availability_zones?: string;
    state?: string;
    zone_id?: string;
    group_name?: string;
    name_suffix?: string;
    network_border_group?: string;
    opt_in_status?: string;
    parent_zone_id?: string;
    parent_zone_name?: string;
    region?: string;
    zone_type?: string;
}
export interface DataAvailabilityZones {
    name: string;
    values: string;
    all_availability_zones?: string;
    exclude_names?: string;
    exclude_zone_ids?: string;
    state?: string;
    group_names?: string;
    id?: string;
    names?: string;
    zone_ids?: string;
}
export interface DataBackupFramework {
    name: string;
    arn?: string;
    creation_time?: string;
    deployment_status?: string;
    description?: string;
    id?: string;
    status?: string;
    tags?: string;
    value?: string;
    compliance_resource_ids?: string;
    compliance_resource_types?: string;
}
export interface DataBackupPlan {
    plan_id: string;
    arn?: string;
    name?: string;
    tags?: string;
    version?: string;
}
export interface DataBackupReportPlan {
    name: string;
    arn?: string;
    creation_time?: string;
    deployment_status?: string;
    description?: string;
    id?: string;
    tags?: string;
    formats?: string;
    s3_bucket_name?: string;
    s3_key_prefix?: string;
    accounts?: string;
    framework_arns?: string;
    number_of_frameworks?: string;
    organization_units?: string;
    regions?: string;
    report_template?: string;
}
export interface DataBackupSelection {
    plan_id: string;
    selection_id: string;
    name?: string;
    iam_role_arn?: string;
    resources?: string;
}
export interface DataBackupVault {
    name: string;
    arn?: string;
    kms_key_arn?: string;
    recovery_points?: string;
    tags?: string;
}
export interface DataBatchComputeEnvironment {
    compute_environment_name: string;
    arn?: string;
    ecs_cluster_arn?: string;
    service_role?: string;
    type?: string;
    status?: string;
    status_reason?: string;
    state?: string;
    tags?: string;
}
export interface DataBatchJobQueue {
    name: string;
    arn?: string;
    scheduling_policy_arn?: string;
    status?: string;
    status_reason?: string;
    state?: string;
    tags?: string;
    priority?: string;
    compute_environment_order?: string;
}
export interface DataBatchSchedulingPolicy {
    arn: string;
    name?: string;
    tags?: string;
    compute_reservation?: string;
    share_delay_seconds?: string;
    share_identifier?: string;
    weight_factor?: string;
}
export interface BillingServiceAccount {
    id?: string;
    arn?: string;
}
export interface DataBudgetsBudget {
    comparison_operator: string;
    threshold: string;
    threshold_type: string;
    notification_type: string;
    amount: string;
    start_time: string;
    unit: string;
    name?: string;
    account_id?: string;
    name_prefix?: string;
    auto_adjust_data?: AutoAdjustData;
    budget_exceeded?: string;
    budget_limit?: string;
    budget_type?: string;
    calculated_spend?: string;
    cost_filter?: CostFilter;
    cost_types?: CostTypes;
    notification?: string;
    planned_limit?: string;
    time_period_end?: string;
    time_period_start?: string;
    time_unit?: string;
    subscriber_email_addresses?: string;
    subscriber_sns_topic_arns?: string;
}
export interface AutoAdjustData {
    auto_adjust_type: string;
    historical_options?: HistoricalOptions;
    last_auto_adjust_time?: string;
}
export interface HistoricalOptions {
    budget_adjustment_period: string;
    lookback_available_periods?: string;
}
export interface CostFilter {
    instancetype?: string;
}
export interface CostTypes {
    include_credit?: string;
    include_discount?: string;
    include_other_subscription?: string;
    include_recurring?: string;
    include_refund?: string;
    include_subscription?: string;
    include_support?: string;
    include_tax?: string;
    include_upfront?: string;
    use_amortized?: string;
    use_blended?: string;
}
export interface CallerIdentity {
    account_id?: string;
    arn?: string;
    id?: string;
    user_id?: string;
}
export interface CanonicalUserID {
    id?: string;
    display_name?: string;
}
export interface DataCeCostCategory {
    cost_category_arn: string;
    arn?: string;
    default_value?: string;
    effective_end?: string;
    effective_start?: string;
    id?: string;
    rule?: CeCostCategoryRule;
    rule_version?: string;
    split_charge_rule?: PurpleSplitChargeRule;
    tags?: CostCategory;
    inherited_value?: InheritedValue;
    value?: string;
    cost_category?: CostCategory;
    dimension?: CostCategory;
    values?: string;
    parameter?: CeCostCategoryParameter;
}
export interface CostCategory {
    key?: string;
    match_options?: string;
    values?: string;
}
export interface InheritedValue {
    dimension_key?: string;
    dimension_name?: string;
}
export interface CeCostCategoryParameter {
    type?: string;
    values?: string;
}
export interface CeCostCategoryRule {
    and?: string;
    cost_category?: string;
    dimension?: string;
    not?: string;
    or?: string;
    tags?: string;
}
export interface PurpleSplitChargeRule {
    method?: string;
    parameter?: string;
    source?: string;
    targets?: string;
}
export interface CeTags {
    time_period: TimePeriod;
    end: string;
    filter?: CeTagsFilter;
    search_string?: string;
    sort_by?: SortBy;
    tag_key?: string;
    cost_category?: CostCategory;
    dimension?: CostCategory;
    tag?: CostCategory;
    values?: string;
    id?: string;
    tags?: string;
}
export interface CeTagsFilter {
    and?: string;
    cost_category?: string;
    dimension?: string;
    not?: string;
    or?: string;
    tag?: string;
}
export interface SortBy {
    key: string;
    sort_order?: string;
}
export interface TimePeriod {
    start?: string;
    end?: string;
}
export interface DataCloudcontrolapiResource {
    identifier: string;
    type_name: string;
    role_arn?: string;
    type_version_id?: string;
    properties?: string;
}
export interface CloudformationExport {
    name: string;
    value?: string;
    exporting_stack_id?: string;
}
export interface DataCloudformationStack {
    name: string;
    capabilities?: string;
    description?: string;
    disable_rollback?: string;
    notification_arns?: string;
    outputs?: string;
    parameters?: string;
    tags?: string;
    template_body?: string;
    iam_role_arn?: string;
    timeout_in_minutes?: string;
}
export interface DataCloudformationType {
    arn?: string;
    type?: string;
    type_name?: string;
    version_id?: string;
    default_version_id?: string;
    deprecated_status?: string;
    description?: string;
    documentation_url?: string;
    execution_role_arn?: string;
    is_default_version?: string;
    logging_config?: string;
    log_group_name?: string;
    log_role_arn?: string;
    provisioning_type?: string;
    schema?: string;
    source_url?: string;
    visibility?: string;
}
export interface DataCloudfrontCachePolicy {
    name?: string;
    id?: string;
    etag?: string;
    min_ttl?: string;
    max_ttl?: string;
    default_ttl?: string;
    comment?: string;
    parameters_in_cache_key_and_forwarded_to_origin?: PurpleParametersInCacheKeyAndForwardedToOrigin;
    query_string_behavior?: string;
    query_strings?: string;
    items?: Items;
}
export interface Items {
    items?: string;
}
export interface PurpleParametersInCacheKeyAndForwardedToOrigin {
    cookies_config?: PurpleCookiesConfig;
    headers_config?: PurpleHeadersConfig;
    query_strings_config?: string;
    enable_accept_encoding_brotli?: string;
    enable_accept_encoding_gzip?: string;
}
export interface PurpleCookiesConfig {
    cookie_behavior?: string;
    cookies?: string;
}
export interface PurpleHeadersConfig {
    header_behavior?: string;
    headers?: string;
}
export interface DataCloudfrontDistribution {
    id?: string;
    aliases?: string;
    arn?: string;
    status?: string;
    domain_name?: string;
    last_modified_time?: string;
    in_progress_validation_batches?: string;
    etag?: string;
    hosted_zone_id?: string;
    web_acl_id?: string;
}
export interface DataCloudfrontFunction {
    name: string;
    stage: string;
    arn?: string;
    code?: string;
    comment?: string;
    etag?: string;
    last_modified_time?: string;
    runtime?: string;
    status?: string;
}
export interface CloudfrontLogDeliveryCanonicalUserID {
    region?: string;
    id?: string;
}
export interface CloudfrontOriginAccessIdentities {
    comments?: string;
    iam_arns?: string;
    ids?: string;
    s3_canonical_user_ids?: string;
}
export interface DataCloudfrontOriginAccessIdentity {
    id: string;
    caller_reference?: string;
    cloudfront_access_identity_path?: string;
    comment?: string;
    etag?: string;
    iam_arn?: string;
    s3_canonical_user_id?: string;
}
export interface DataCloudfrontOriginRequestPolicy {
    name?: string;
    id?: string;
    comment?: string;
    etag?: string;
    query_strings_config?: string;
}
export interface DataCloudfrontRealtimeLogConfig {
    name: string;
    endpoint: string;
    fields: string;
    sampling_rate: string;
    kinesis_stream_config: string;
    stream_type: string;
    role_arn: string;
    stream_arn: string;
    arn?: string;
}
export interface DataCloudfrontResponseHeadersPolicy {
    name?: string;
    id?: string;
    comment?: string;
    etag?: string;
    cors_config?: PurpleCorsConfig;
    custom_headers_config?: string;
    remove_headers_config?: string;
    security_headers_config?: PurpleSecurityHeadersConfig;
    server_timing_headers_config?: PurpleServerTimingHeadersConfig;
    header?: string;
    value?: string;
}
export interface PurpleCorsConfig {
    access_control_allow_credentials?: string;
    access_control_allow_headers?: string;
    access_control_allow_methods?: string;
    access_control_allow_origins?: string;
    access_control_expose_headers?: string;
    access_control_max_age_sec?: string;
}
export interface PurpleSecurityHeadersConfig {
    content_security_policy?: CloudfrontResponseHeadersPolicyContentSecurityPolicy;
    content_type_options?: PurpleContentTypeOptions;
    frame_options?: PurpleFrameOptions;
    referrer_policy?: CloudfrontResponseHeadersPolicyReferrerPolicy;
    strict_transport_security?: PurpleStrictTransportSecurity;
    xss_protection?: PurpleXSSProtection;
}
export interface CloudfrontResponseHeadersPolicyContentSecurityPolicy {
    content_security_policy?: string;
    override?: string;
}
export interface PurpleContentTypeOptions {
    override?: string;
}
export interface PurpleFrameOptions {
    frame_option?: string;
    override?: string;
}
export interface CloudfrontResponseHeadersPolicyReferrerPolicy {
    referrer_policy?: string;
    override?: string;
}
export interface PurpleStrictTransportSecurity {
    access_control_max_age_sec?: string;
    include_subdomains?: string;
    override?: string;
    preload?: string;
}
export interface PurpleXSSProtection {
    mode_block?: string;
    override?: string;
    protection?: string;
    report_uri?: string;
}
export interface PurpleServerTimingHeadersConfig {
    enabled?: string;
    sampling_rate?: string;
}
export interface DataCloudhsmV2Cluster {
    cluster_id: string;
    cluster_state?: string;
    vpc_id?: string;
    security_group_id?: string;
    subnet_ids?: string;
    cluster_certificates?: string;
}
export interface ServiceAccount {
    region?: string;
    id?: string;
    arn?: string;
}
export interface KinesisFirehoseDeliveryStreamClass {
    name: string;
    arn?: string;
}
export interface DataCloudwatchEventConnection {
    name?: string;
    arn?: string;
    secret_arn?: string;
    authorization_type?: string;
}
export interface CloudwatchEventSource {
    name_prefix?: string;
    arn?: string;
    created_by?: string;
    name?: string;
    state?: string;
}
export interface CloudwatchLogDataProtectionPolicyDocument {
    name: string;
    statement: string;
    data_identifiers: string;
    operation: string;
    findings_destination: string;
    log_group: string;
    delivery_stream: string;
    bucket: string;
    mask_config: string;
    description?: string;
    version?: string;
    sid?: string;
    audit?: string;
    deidentify?: string;
    cloudwatch_logs?: string;
    firehose?: string;
    s3?: string;
    json?: string;
}
export interface DataCloudwatchLogGroup {
    name: string;
    arn?: string;
    creation_time?: string;
    retention_in_days?: string;
    kms_key_id?: string;
    tags?: string;
}
export interface CloudwatchLogGroups {
    log_group_name_prefix?: string;
    arns?: string;
    log_group_names?: string;
}
export interface CodeartifactAuthorizationToken {
    domain: string;
    domain_owner?: string;
    duration_seconds?: string;
    authorization_token?: string;
    expiration?: string;
}
export interface CodeartifactRepositoryEndpoint {
    domain: string;
    repository: string;
    format: string;
    domain_owner?: string;
    repository_endpoint?: string;
}
export interface DataCodecatalystDevEnvironment {
    env_id: string;
    project_name: string;
    space_name: string;
    alias?: string;
    creator_id?: string;
    ides?: string;
    inactivity_timeout_minutes?: string;
    instance_type?: string;
    last_updated_time?: string;
    persistent_storage?: string;
    repositories?: string;
    status?: string;
    status_reason?: string;
}
export interface DataCodecommitApprovalRuleTemplate {
    name: string;
    approval_rule_template_id?: string;
    content?: string;
    creation_date?: string;
    description?: string;
    last_modified_date?: string;
    last_modified_user?: string;
    rule_content_sha256?: string;
}
export interface DataCodecommitRepository {
    repository_name: string;
    repository_id?: string;
    arn?: string;
    clone_url_http?: string;
    clone_url_ssh?: string;
}
export interface DataCodestarconnectionsConnection {
    arn?: string;
    name?: string;
    connection_status?: string;
    id?: string;
    host_arn?: string;
    provider_type?: string;
    tags?: string;
}
export interface DataCognitoIdentityPool {
    identity_pool_name: string;
    id?: string;
    arn?: string;
    allow_unauthenticated_identities?: string;
    allow_classic_flow?: string;
    developer_provider_name?: string;
    cognito_identity_providers?: string;
    openid_connect_provider_arns?: string;
    saml_provider_arns?: string;
    supported_login_providers?: string;
    tags?: string;
}
export interface DataCognitoUserPoolClient {
    client_id: string;
    user_pool_id: string;
    access_token_validity?: string;
    allowed_oauth_flows_user_pool_client?: string;
    allowed_oauth_flows?: string;
    allowed_oauth_scopes?: string;
    analytics_configuration?: AnalyticsConfiguration;
    callback_urls?: string;
    client_secret?: string;
    default_redirect_uri?: string;
    enable_token_revocation?: string;
    explicit_auth_flows?: string;
    generate_secret?: string;
    id_token_validity?: string;
    logout_urls?: string;
    prevent_user_existence_errors?: string;
    read_attributes?: string;
    refresh_token_validity?: string;
    supported_identity_providers?: string;
    token_validity_units?: TokenValidityUnits;
    write_attributes?: string;
}
export interface AnalyticsConfiguration {
    application_arn?: string;
    application_id?: string;
    external_id?: string;
    role_arn?: string;
    user_data_shared?: string;
}
export interface TokenValidityUnits {
    access_token?: string;
    id_token?: string;
    refresh_token?: string;
}
export interface CognitoUserPoolClients {
    user_pool_id: string;
    client_ids?: string;
    client_names?: string;
}
export interface CognitoUserPoolSigningCertificate {
    user_pool_id: string;
    certificate?: string;
}
export interface CognitoUserPools {
    name: string;
    ids?: string;
    arns?: string;
}
export interface DataConnectBotAssociation {
    instance_id: string;
    lex_bot: ConnectBotAssociationLexBot;
}
export interface ConnectBotAssociationLexBot {
    name?: string;
    lex_region?: string;
}
export interface DataConnectContactFlow {
    instance_id: string;
    contact_flow_id?: string;
    name?: string;
    arn?: string;
    content?: string;
    description?: string;
    tags?: string;
    type?: string;
}
export interface DataConnectContactFlowModule {
    instance_id: string;
    contact_flow_module_id?: string;
    name?: string;
    arn?: string;
    content?: string;
    description?: string;
    tags?: string;
    state?: string;
    status?: string;
}
export interface DataConnectHoursOfOperation {
    instance_id: string;
    hours_of_operation_id?: string;
    name?: string;
    arn?: string;
    description?: string;
    tags?: string;
    time_zone?: string;
    day?: string;
    hours?: string;
    minutes?: string;
}
export interface DataConnectInstance {
    instance_id?: string;
    instance_alias?: string;
    created_time?: string;
    arn?: string;
    identity_management_type?: string;
    inbound_calls_enabled?: string;
    outbound_calls_enabled?: string;
    early_media_enabled?: string;
    contact_flow_logs_enabled?: string;
    contact_lens_enabled?: string;
    auto_resolve_best_voices?: string;
    multi_party_conference_enabled?: string;
    use_custom_tts_voices?: string;
    status?: string;
    service_role?: string;
}
export interface DataConnectInstanceStorageConfig {
    association_id: string;
    instance_id: string;
    resource_type: string;
    id?: string;
    storage_config?: PurpleStorageConfig;
}
export interface PurpleStorageConfig {
    kinesis_firehose_config?: PurpleKinesisFirehoseConfig;
    kinesis_stream_config?: PurpleKinesisStreamConfig;
    kinesis_video_stream_config?: PurpleKinesisVideoStreamConfig;
    s3_config?: PurpleS3Config;
    storage_type?: string;
}
export interface PurpleKinesisFirehoseConfig {
    firehose_arn?: string;
}
export interface PurpleKinesisStreamConfig {
    stream_arn?: string;
}
export interface PurpleKinesisVideoStreamConfig {
    encryption_config?: KinesisVideoStreamConfigEncryptionConfig;
    prefix?: string;
    retention_period_hours?: string;
}
export interface KinesisVideoStreamConfigEncryptionConfig {
    encryption_type?: string;
    key_id?: string;
}
export interface PurpleS3Config {
    bucket_name?: string;
    bucket_prefix?: string;
}
export interface ConnectLambdaFunctionAssociation {
    function_arn: string;
    instance_id: string;
    id?: string;
}
export interface ConnectPrompt {
    instance_id: string;
    name: string;
    arn?: string;
    prompt_id?: string;
}
export interface DataConnectQueue {
    instance_id: string;
    queue_id?: string;
    name?: string;
    arn?: string;
    description?: string;
    hours_of_operation_id?: string;
    id?: string;
    max_contacts?: string;
    status?: string;
    tags?: string;
    outbound_caller_id_name?: string;
    outbound_caller_id_number_id?: string;
    outbound_flow_id?: string;
}
export interface DataConnectQuickConnect {
    instance_id: string;
    quick_connect_id?: string;
    name?: string;
    arn?: string;
    description?: string;
    id?: string;
    tags?: string;
    quick_connect_type?: string;
    phone_number?: string;
    contact_flow_id?: string;
    queue_id?: string;
    user_id?: string;
}
export interface DataConnectRoutingProfile {
    instance_id?: string;
    name?: string;
    routing_profile_id?: string;
    arn?: string;
    default_outbound_queue_id?: string;
    description?: string;
    id?: string;
    tags?: string;
    channel?: string;
    concurrency?: string;
    delay?: string;
    priority?: string;
    queue_arn?: string;
    queue_id?: string;
    queue_name?: string;
}
export interface DataConnectSecurityProfile {
    instance_id: string;
    security_profile_id?: string;
    name?: string;
    arn?: string;
    description?: string;
    id?: string;
    organization_resource_id?: string;
    permissions?: string;
    tags?: string;
}
export interface DataConnectUser {
    instance_id: string;
    name?: string;
    user_id?: string;
    arn?: string;
    directory_user_id?: string;
    hierarchy_group_id?: string;
    id?: string;
    identity_info?: IdentityInfo;
    phone_config?: PhoneConfig;
    routing_profile_id?: string;
    security_profile_ids?: string;
    tags?: string;
    last_name?: string;
}
export interface IdentityInfo {
    email?: string;
    first_name?: string;
    last_name?: string;
}
export interface PhoneConfig {
    after_contact_work_time_limit?: string;
    auto_accept?: string;
    desk_phone_number?: string;
    phone_type?: string;
}
export interface DataConnectUserHierarchyGroup {
    instance_id: string;
    hierarchy_group_id?: string;
    name?: string;
    arn?: string;
    level_id?: string;
    id?: string;
    tags?: string;
    level_one?: string;
    level_two?: string;
    level_three?: string;
    level_four?: string;
    level_five?: string;
}
export interface DataConnectUserHierarchyStructure {
    instance_id: string;
    level_one?: string;
    level_two?: string;
    level_three?: string;
    level_four?: string;
    level_five?: string;
    arn?: string;
    id?: string;
    name?: string;
}
export interface DataConnectVocabulary {
    instance_id: string;
    name?: string;
    vocabulary_id?: string;
    arn?: string;
    content?: string;
    failure_reason?: string;
    id?: string;
    language_code?: string;
    last_modified_time?: string;
    state?: string;
    tags?: string;
}
export interface ControltowerControls {
    target_identifier: string;
    enabled_controls?: string;
}
export interface DataCurReportDefinition {
    report_name: string;
    time_unit?: string;
    format?: string;
    compression?: string;
    additional_schema_elements?: string;
    s3_bucket?: string;
    s3_prefix?: string;
    s3_region?: string;
    additional_artifacts?: string;
    refresh_closed_reports?: string;
    report_versioning?: string;
}
export interface DataCustomerGateway {
    id?: string;
    filter?: string;
    arn?: string;
    bgp_asn?: string;
    certificate_arn?: string;
    device_name?: string;
    ip_address?: string;
    tags?: string;
    type?: string;
}
export interface DataDatapipelinePipeline {
    pipeline_id: string;
    name?: string;
    description?: string;
    tags?: string;
}
export interface DataDatapipelinePipelineDefinition {
    pipeline_id: string;
    parameter_object?: PurpleParameterObject;
    parameter_value?: PurpleParameterValue;
    pipeline_object?: PipelineObject;
    attributes?: AttributesClass;
    string_value?: string;
    field?: Field;
    name?: string;
}
export interface AttributesClass {
    key?: string;
    string_value?: string;
}
export interface Field {
    key?: string;
    ref_value?: string;
    string_value?: string;
}
export interface PurpleParameterObject {
    attributes?: string;
    id?: string;
}
export interface PurpleParameterValue {
    id?: string;
    string_value?: string;
}
export interface PipelineObject {
    field?: string;
    id?: string;
    name?: string;
}
export interface DataDBClusterSnapshot {
    most_recent?: string;
    db_cluster_identifier?: string;
    db_cluster_snapshot_identifier?: string;
    snapshot_type?: string;
    include_shared?: string;
    include_public?: string;
    tags?: string;
    allocated_storage?: string;
    availability_zones?: string;
    db_cluster_snapshot_arn?: string;
    engine_version?: string;
    engine?: string;
    id?: string;
    kms_key_id?: string;
    license_model?: string;
    port?: string;
    snapshot_create_time?: string;
    source_db_cluster_snapshot_identifier?: string;
    status?: string;
    storage_encrypted?: string;
    vpc_id?: string;
}
export interface DBEventCategories {
    source_type?: string;
    event_categories?: string;
    id?: string;
}
export interface DataDBInstance {
    db_instance_identifier?: string;
    tags?: string;
    address?: string;
    allocated_storage?: string;
    auto_minor_version_upgrade?: string;
    availability_zone?: string;
    backup_retention_period?: string;
    db_cluster_identifier?: string;
    db_instance_arn?: string;
    db_instance_class?: string;
    db_name?: string;
    db_parameter_groups?: string;
    db_subnet_group?: string;
    db_instance_port?: string;
    enabled_cloudwatch_logs_exports?: string;
    endpoint?: string;
    engine?: string;
    engine_version?: string;
    hosted_zone_id?: string;
    iops?: string;
    license_model?: string;
    master_username?: string;
    master_user_secret?: MasterUserSecret;
    max_allocated_storage?: string;
    monitoring_interval?: string;
    monitoring_role_arn?: string;
    multi_az?: string;
    network_type?: string;
    option_group_memberships?: string;
    port?: string;
    preferred_backup_window?: string;
    preferred_maintenance_window?: string;
    publicly_accessible?: string;
    resource_id?: string;
    storage_encrypted?: string;
    storage_throughput?: string;
    storage_type?: string;
    timezone?: string;
    vpc_security_groups?: string;
    replicate_source_db?: string;
    ca_cert_identifier?: string;
}
export interface MasterUserSecret {
    kms_key_id?: string;
    secret_arn?: string;
    secret_status?: string;
}
export interface DBInstances {
    name: string;
    values: string;
    tags?: string;
    instance_arns?: string;
    instance_identifiers?: string;
}
export interface DataDBProxy {
    name: string;
    arn?: string;
    auth?: string;
    debug_logging?: string;
    endpoint?: string;
    engine_family?: string;
    idle_client_timeout?: string;
    require_tls?: string;
    role_arn?: string;
    vpc_id?: string;
    vpc_security_group_ids?: string;
    vpc_subnet_ids?: string;
}
export interface DataDBSnapshot {
    most_recent?: string;
    db_instance_identifier?: string;
    db_snapshot_identifier?: string;
    snapshot_type?: string;
    include_shared?: string;
    include_public?: string;
    id?: string;
    allocated_storage?: string;
    availability_zone?: string;
    db_snapshot_arn?: string;
    encrypted?: string;
    engine?: string;
    engine_version?: string;
    iops?: string;
    kms_key_id?: string;
    license_model?: string;
    option_group_name?: string;
    source_db_snapshot_identifier?: string;
    source_region?: string;
    status?: string;
    storage_type?: string;
    vpc_id?: string;
    snapshot_create_time?: string;
}
export interface DataDBSubnetGroup {
    name: string;
    arn?: string;
    description?: string;
    status?: string;
    subnet_ids?: string;
    supported_network_types?: string;
    vpc_id?: string;
}
export interface DefaultTags {
    tags?: ParameterClass;
    value?: string;
}
export interface ParameterClass {
    key?: string;
    value?: string;
}
export interface DataDirectoryServiceDirectory {
    directory_id: string;
    type?: string;
    edition?: string;
    name?: string;
    password?: string;
    size?: string;
    alias?: string;
    description?: string;
    short_name?: string;
    enable_sso?: string;
    access_url?: string;
    dns_ip_addresses?: string;
    security_group_id?: string;
    tags?: string;
    subnet_ids?: string;
    vpc_id?: string;
    connect_ips?: string;
    customer_username?: string;
    customer_dns_ips?: string;
    authentication_protocol?: string;
    display_label?: string;
    radius_port?: string;
    radius_retries?: string;
    radius_servers?: string;
    radius_timeout?: string;
    use_same_username?: string;
}
export interface DataDmsCertificate {
    certificate_id: string;
    certificate_creation_date?: string;
    certificate_pem?: string;
    certificate_owner?: string;
    certificate_arn?: string;
    certificate_wallet?: string;
    key_length?: string;
    signing_algorithm?: string;
    valid_from_date?: string;
    valid_to_date?: string;
}
export interface DataDmsEndpoint {
    endpoint_id: string;
}
export interface DataDmsReplicationInstance {
    replication_instance_id: string;
    allocated_storage?: string;
    auto_minor_version_upgrade?: string;
    availability_zone?: string;
    engine_version?: string;
    kms_key_arn?: string;
    multi_az?: string;
    network_type?: string;
    preferred_maintenance_window?: string;
    publicly_accessible?: string;
    replication_instance_arn?: string;
    replication_instance_class?: string;
    replication_instance_private_ips?: string;
    replication_instance_public_ips?: string;
    replication_subnet_group_id?: string;
    vpc_security_group_ids?: string;
}
export interface DataDmsReplicationSubnetGroup {
    replication_subnet_group_id: string;
    replication_subnet_group_description?: string;
    subnet_ids?: string;
    vpc_id?: string;
}
export interface DataDmsReplicationTask {
    replication_task_id: string;
    cdc_start_position?: string;
    cdc_start_time?: string;
    migration_type?: string;
    replication_instance_arn?: string;
    replication_task_settings?: string;
    source_endpoint_arn?: string;
    start_replication_task?: string;
    status?: string;
    table_mappings?: string;
    target_endpoint_arn?: string;
    replication_task_arn?: string;
}
export interface DocdbEngineVersion {
    engine?: string;
    parameter_group_family?: string;
    preferred_versions?: string;
    version?: string;
    engine_description?: string;
    exportable_log_types?: string;
    supports_log_exports_to_cloudwatch?: string;
    valid_upgrade_targets?: string;
    version_description?: string;
}
export interface DocdbOrderableDBInstance {
    engine?: string;
    engine_version?: string;
    instance_class?: string;
    license_model?: string;
    preferred_instance_classes?: string;
    vpc?: string;
    availability_zones?: string;
}
export interface DataDxConnection {
    name: string;
    arn?: string;
    aws_device?: string;
    bandwidth?: string;
    id?: string;
    location?: string;
    owner_account_id?: string;
    partner_name?: string;
    provider_name?: string;
    tags?: string;
    vlan_id?: string;
}
export interface DataDxGateway {
    name: string;
    amazon_side_asn?: string;
    id?: string;
    owner_account_id?: string;
}
export interface DxLocation {
    location_code: string;
    available_macsec_port_speeds?: string;
    available_port_speeds?: string;
    available_providers?: string;
    location_name?: string;
}
export interface DxLocations {
    location_codes?: string;
}
export interface DxRouterConfiguration {
    virtual_interface_id: string;
    router_type_identifier: string;
    customer_router_config?: string;
    router?: string;
    platform?: string;
    software?: string;
    vendor?: string;
    xslt_template_name?: string;
    xslt_template_name_for_mac?: string;
}
export interface ElbClass {
    name: string;
}
export interface DataDynamodbTableItem {
    table_name: string;
    key: string;
    expression_attribute_name?: string;
    projection_expression?: string;
    item?: string;
}
export interface DataEbsDefaultKmsKey {
    key_arn?: string;
    id?: string;
}
export interface DataEbsEncryptionByDefault {
    enabled?: string;
    id?: string;
}
export interface DataEbsSnapshot {
    most_recent?: string;
    owners?: string;
    snapshot_ids?: string;
    restorable_by_user_ids?: string;
    filter?: string;
    arn?: string;
    id?: string;
    snapshot_id?: string;
    description?: string;
    owner_id?: string;
    owner_alias?: string;
    volume_id?: string;
    encrypted?: string;
    volume_size?: string;
    kms_key_id?: string;
    data_encryption_key_id?: string;
    state?: string;
    storage_tier?: string;
    outpost_arn?: string;
    tags?: string;
}
export interface EbsSnapshotIDS {
    owners?: string;
    restorable_by_user_ids?: string;
    filter?: string;
    id?: string;
    ids?: string;
}
export interface DataEbsVolume {
    most_recent?: string;
    filter?: string;
    id?: string;
    volume_id?: string;
    arn?: string;
    availability_zone?: string;
    encrypted?: string;
    iops?: string;
    multi_attach_enabled?: string;
    size?: string;
    snapshot_id?: string;
    outpost_arn?: string;
    volume_type?: string;
    kms_key_id?: string;
    tags?: string;
    throughput?: string;
}
export interface Ec2LocalGatewayRouteTablesClass {
    name: string;
    values: string;
    tags?: string;
    filter?: string;
    id?: string;
    ids?: string;
}
export interface DataEc2ClientVPNEndpoint {
    client_vpn_endpoint_id?: string;
    filter?: Ec2ClientVPNEndpointFilter;
    tags?: string;
    arn?: string;
    authentication_options?: string;
    client_cidr_block?: string;
    client_connect_options?: string;
    client_login_banner_options?: string;
    connection_log_options?: string;
    description?: string;
    dns_name?: string;
    dns_servers?: string;
    security_group_ids?: string;
    self_service_portal?: string;
    server_certificate_arn?: string;
    session_timeout_hours?: string;
    split_tunnel?: string;
    transport_protocol?: string;
    vpc_id?: string;
    vpn_port?: string;
}
export interface Ec2ClientVPNEndpointFilter {
    name: string;
    values: string;
}
export interface Ec2CoipPool {
    name: string;
    values: string;
    local_gateway_route_table_id?: string;
    pool_id?: string;
    tags?: string;
    arn?: string;
    pool_cidrs?: string;
}
export interface Ec2CoipPools {
    name: string;
    values: string;
    tags?: string;
    filter?: string;
    id?: string;
    pool_ids?: string;
}
export interface DataEc2Host {
    filter?: Ec2ClientVPNEndpointFilter;
    host_id?: string;
    id?: string;
    arn?: string;
    asset_id?: string;
    auto_placement?: string;
    availability_zone?: string;
    cores?: string;
    host_recovery?: string;
    instance_family?: string;
    instance_type?: string;
    outpost_arn?: string;
    owner_id?: string;
    sockets?: string;
    total_vcpus?: string;
}
export interface Ec2InstanceType {
    instance_type: string;
    auto_recovery_supported?: string;
    bare_metal?: string;
    burstable_performance_supported?: string;
    current_generation?: string;
    dedicated_hosts_supported?: string;
    default_cores?: string;
    default_threads_per_core?: string;
    default_vcpus?: string;
    ebs_encryption_support?: string;
    ebs_nvme_support?: string;
    ebs_optimized_support?: string;
    ebs_performance_baseline_bandwidth?: string;
    ebs_performance_baseline_iops?: string;
    ebs_performance_baseline_throughput?: string;
    ebs_performance_maximum_bandwidth?: string;
    ebs_performance_maximum_iops?: string;
    ebs_performance_maximum_throughput?: string;
    efa_supported?: string;
    ena_support?: string;
    encryption_in_transit_supported?: string;
    fpgas?: string;
    free_tier_eligible?: string;
    gpus?: string;
    hibernation_supported?: string;
    hypervisor?: string;
    inference_accelerators?: string;
    instance_disks?: string;
    instance_storage_supported?: string;
    ipv6_supported?: string;
    maximum_ipv4_addresses_per_interface?: string;
    maximum_ipv6_addresses_per_interface?: string;
    maximum_network_interfaces?: string;
    memory_size?: string;
    network_performance?: string;
    supported_architectures?: string;
    supported_placement_strategies?: string;
    supported_root_device_types?: string;
    supported_usages_classes?: string;
    supported_virtualization_types?: string;
    sustained_clock_speed?: string;
    total_fpga_memory?: string;
    total_gpu_memory?: string;
    total_instance_storage?: string;
    valid_cores?: string;
    valid_threads_per_core?: string;
}
export interface Ec2InstanceTypeOffering {
    name: string;
    values: string;
    location_type?: string;
    preferred_instance_types?: string;
    id?: string;
    instance_type?: string;
}
export interface Ec2InstanceTypeOfferings {
    name: string;
    values: string;
    location_type?: string;
    id?: string;
    instance_types?: string;
    locations?: string;
    location_types?: string;
}
export interface Ec2InstanceTypes {
    name: string;
    values: string;
    id?: string;
    instance_types?: string;
}
export interface Ec2LocalGateway {
    name: string;
    values: string;
    filter?: string;
    id?: string;
    state?: string;
    tags?: string;
    outpost_arn?: string;
    owner_id?: string;
}
export interface Ec2LocalGatewayRouteTable {
    name: string;
    values: string;
    local_gateway_route_table_id?: string;
    local_gateway_id?: string;
    outpost_arn?: string;
    state?: string;
    tags?: string;
}
export interface Ec2LocalGatewayVirtualInterface {
    name: string;
    values: string;
    id?: string;
    tags?: string;
    local_address?: string;
    local_bgp_asn?: string;
    local_gateway_id?: string;
    peer_address?: string;
    peer_bgp_asn?: string;
    vlan?: string;
}
export interface Ec2LocalGatewayVirtualInterfaceGroup {
    name: string;
    values: string;
    id?: string;
    local_gateway_id?: string;
    tags?: string;
    local_gateway_virtual_interface_ids?: string;
}
export interface Ec2LocalGatewayVirtualInterfaceGroups {
    name: string;
    values: string;
    tags?: string;
    id?: string;
    ids?: string;
    local_gateway_virtual_interface_ids?: string;
}
export interface DataEc2ManagedPrefixList {
    name: string;
    values: string;
    id?: string;
    arn?: string;
    entries?: string;
    owner_id?: string;
    address_family?: string;
    max_entries?: string;
    tags?: string;
}
export interface DataEc2NetworkInsightsAnalysis {
    name: string;
    values: string;
    network_insights_analysis_id?: string;
    alternate_path_hints?: string;
    arn?: string;
    explanations?: string;
    filter_in_arns?: string;
    forward_path_components?: string;
    network_insights_path_id?: string;
    path_found?: string;
    return_path_components?: string;
    start_date?: string;
    status?: string;
    status_message?: string;
    warning_message?: string;
}
export interface DataEc2NetworkInsightsPath {
    name: string;
    values: string;
    network_insights_path_id?: string;
    arn?: string;
    destination?: string;
    destination_arn?: string;
    destination_ip?: string;
    destination_port?: string;
    protocol?: string;
    source?: string;
    source_arn?: string;
    source_ip?: string;
    tags?: string;
}
export interface Ec2PublicIpv4Pool {
    pool_id: string;
    description?: string;
    network_border_group?: string;
    address_count?: string;
    available_address_count?: string;
    first_address?: string;
    last_address?: string;
    tags?: string;
    total_address_count?: string;
    total_available_address_count?: string;
}
export interface Ec2PublicIpv4Pools {
    name: string;
    values: string;
    filter?: string;
    tags?: string;
    pool_ids?: string;
}
export interface Ec2SpotPrice {
    name: string;
    values: string;
    instance_type?: string;
    availability_zone?: string;
    id?: string;
    spot_price?: string;
    spot_price_timestamp?: string;
}
export interface DataEc2TransitGateway {
    name: string;
    values: string;
    id?: string;
    amazon_side_asn?: string;
    arn?: string;
    association_default_route_table_id?: string;
    auto_accept_shared_attachments?: string;
    default_route_table_association?: string;
    default_route_table_propagation?: string;
    description?: string;
    dns_support?: string;
    multicast_support?: string;
    owner_id?: string;
    propagation_default_route_table_id?: string;
    tags?: string;
    transit_gateway_cidr_blocks?: string;
    vpn_ecmp_support?: string;
}
export interface Ec2TransitGatewayAttachment {
    name: string;
    values: string;
    transit_gateway_attachment_id?: string;
    arn?: string;
    association_state?: string;
    association_transit_gateway_route_table_id?: string;
    resource_id?: string;
    resource_owner_id?: string;
    resource_type?: string;
    state?: string;
    tags?: string;
    transit_gateway_id?: string;
    transit_gateway_owner_id?: string;
}
export interface Ec2TransitGatewayAttachments {
    name: string;
    values: string;
    ids?: string;
}
export interface DataEc2TransitGatewayConnect {
    name: string;
    values: string;
    transit_gateway_connect_id?: string;
    protocol?: string;
    tags?: string;
    transit_gateway_id?: string;
    transport_attachment_id?: string;
}
export interface DataEc2TransitGatewayConnectPeer {
    name: string;
    values: string;
    transit_gateway_connect_peer_id?: string;
    arn?: string;
    bgp_asn?: string;
    bgp_peer_address?: string;
    bgp_transit_gateway_addresses?: string;
    inside_cidr_blocks?: string;
    peer_address?: string;
    tags?: string;
    transit_gateway_address?: string;
    transit_gateway_attachment_id?: string;
}
export interface Ec2TransitGatewayDxGatewayAttachment {
    name: string;
    values: string;
    transit_gateway_id?: string;
    dx_gateway_id?: string;
    tags?: string;
    id?: string;
}
export interface DataEc2TransitGatewayMulticastDomain {
    name: string;
    values: string;
    transit_gateway_multicast_domain_id?: string;
    id?: string;
    arn?: string;
    associations?: string;
    subnet_id?: string;
    transit_gateway_attachment_id?: string;
    auto_accept_shared_associations?: string;
    igmpv2_support?: string;
    members?: string;
    group_ip_address?: string;
    network_interface_id?: string;
    owner_id?: string;
    sources?: string;
    static_sources_support?: string;
    tags?: string;
    transit_gateway_id?: string;
}
export interface DataEc2TransitGatewayPeeringAttachment {
    name: string;
    values: string;
    id?: string;
    tags?: string;
    peer_account_id?: string;
    peer_region?: string;
    peer_transit_gateway_id?: string;
    transit_gateway_id?: string;
}
export interface DataEc2TransitGatewayRouteTable {
    name: string;
    values: string;
    id?: string;
    arn?: string;
    default_association_route_table?: string;
    default_propagation_route_table?: string;
    transit_gateway_id?: string;
    tags?: string;
}
export interface Ec2TransitGatewayRouteTableAtions {
    transit_gateway_route_table_id: string;
    name: string;
    values: string;
    filter?: string;
    id?: string;
    ids?: string;
}
export interface Ec2TransitGatewayRouteTableRoutes {
    filter: string;
    transit_gateway_route_table_id: string;
    name: string;
    values: string;
}
export interface DataEc2TransitGatewayVpcAttachment {
    name: string;
    values: string;
    id?: string;
    appliance_mode_support?: string;
    dns_support?: string;
    ipv6_support?: string;
    subnet_ids?: string;
    transit_gateway_id?: string;
    tags?: string;
    vpc_id?: string;
    vpc_owner_id?: string;
}
export interface Ec2TransitGatewayVPNAttachment {
    name: string;
    values: string;
    transit_gateway_id?: string;
    vpn_connection_id?: string;
    tags?: string;
    id?: string;
}
export interface EcrAuthorizationToken {
    registry_id?: string;
    authorization_token?: string;
    expires_at?: string;
    id?: string;
    password?: string;
    proxy_endpoint?: string;
    user_name?: string;
}
export interface EcrImage {
    repository_name: string;
    registry_id?: string;
    image_digest?: string;
    image_tag?: string;
    most_recent?: string;
    id?: string;
    image_pushed_at?: string;
    image_size_in_bytes?: string;
    image_tags?: string;
}
export interface KmsSecretClass {
}
export interface DataEcrRepository {
    name: string;
    registry_id?: string;
    arn?: string;
    encryption_configuration?: EcrRepositoryEncryptionConfiguration;
    image_scanning_configuration?: EcrRepositoryImageScanningConfiguration;
    image_tag_mutability?: string;
    most_recent_image_tags?: string;
    repository_url?: string;
    tags?: string;
}
export interface EcrRepositoryEncryptionConfiguration {
    encryption_type?: string;
    kms_key?: string;
}
export interface EcrRepositoryImageScanningConfiguration {
    scan_on_push?: string;
}
export interface EcrpublicAuthorizationToken {
    authorization_token?: string;
    expires_at?: string;
    id?: string;
    password?: string;
    user_name?: string;
}
export interface DataEcsCluster {
    cluster_name: string;
    arn?: string;
    status?: string;
    pending_tasks_count?: string;
    running_tasks_count?: string;
    registered_container_instances_count?: string;
    service_connect_defaults?: string;
    setting?: string;
    tags?: string;
}
export interface EcsContainerDefinition {
    task_definition: string;
    container_name: string;
    image?: string;
    image_digest?: string;
    cpu?: string;
    memory?: string;
    memory_reservation?: string;
    environment?: string;
    disable_networking?: string;
    docker_labels?: string;
}
export interface DataEcsService {
    service_name: string;
    cluster_arn: string;
    arn?: string;
    desired_count?: string;
    launch_type?: string;
    scheduling_strategy?: string;
    task_definition?: string;
    tags?: string;
}
export interface DataEcsTaskDefinition {
    task_definition: string;
    id?: string;
    arn?: string;
    arn_without_revision?: string;
    execution_role_arn?: string;
    family?: string;
    network_mode?: string;
    revision?: string;
    status?: string;
    task_role_arn?: string;
}
export interface EcsTaskExecution {
    cluster: string;
    task_definition: string;
    capacity_provider_strategy?: EcsTaskExecutionCapacityProviderStrategy;
    desired_count?: string;
    enable_ecs_managed_tags?: string;
    enable_execute_command?: string;
    group?: string;
    launch_type?: string;
    network_configuration?: EcsTaskExecutionNetworkConfiguration;
    overrides?: EcsTaskExecutionOverrides;
    placement_constraints?: PlacementConstraints;
    placement_strategy?: PlacementStrategy;
    platform_version?: string;
    propagate_tags?: string;
    reference_id?: string;
    started_by?: string;
    tags?: string;
    container_overrides?: ContainerOverrides;
    inference_accelerator_overrides?: InferenceAcceleratorOverrides;
    environment?: EcsTaskExecutionEnvironment;
    resource_requirements?: ResourceRequirements;
    task_arns?: string;
    id?: string;
}
export interface EcsTaskExecutionCapacityProviderStrategy {
    capacity_provider: string;
    base?: string;
    weight?: string;
}
export interface ContainerOverrides {
    command?: string;
    cpu?: string;
    environment?: string;
    memory?: string;
    memory_reservation?: string;
    name?: string;
    resource_requirements?: string;
}
export interface EcsTaskExecutionEnvironment {
    key: string;
    value: string;
}
export interface InferenceAcceleratorOverrides {
    device_name?: string;
    device_type?: string;
}
export interface EcsTaskExecutionNetworkConfiguration {
    subnets: string;
    security_groups?: string;
    assign_public_ip?: string;
}
export interface EcsTaskExecutionOverrides {
    container_overrides?: string;
    cpu?: string;
    execution_role_arn?: string;
    inference_accelerator_overrides?: string;
    memory?: string;
    task_role_arn?: string;
}
export interface PlacementConstraints {
    expression?: string;
    type?: string;
}
export interface PlacementStrategy {
    field?: string;
    type?: string;
}
export interface ResourceRequirements {
    type: string;
    value: string;
}
export interface DataEFSAccessPoint {
    access_point_id: string;
    id?: string;
    arn?: string;
    file_system_arn?: string;
    file_system_id?: string;
    posix_user?: string;
    gid?: string;
    secondary_gids?: string;
    uid?: string;
    creation_info?: string;
    owner_gid?: string;
    owner_uid?: string;
    permissions?: string;
    path?: string;
    tags?: string;
}
export interface EFSAccessPoints {
    file_system_id: string;
    arns?: string;
    id?: string;
    ids?: string;
}
export interface DataEFSFileSystem {
    file_system_id?: string;
    creation_token?: string;
    tags?: string;
    arn?: string;
    availability_zone_name?: string;
    availability_zone_id?: string;
    dns_name?: string;
    encrypted?: string;
    kms_key_id?: string;
    lifecycle_policy?: string;
    name?: string;
    performance_mode?: string;
    provisioned_throughput_in_mibps?: string;
    throughput_mode?: string;
    size_in_bytes?: string;
}
export interface DataEFSMountTarget {
    access_point_id?: string;
    file_system_id?: string;
    mount_target_id?: string;
    file_system_arn?: string;
    subnet_id?: string;
    ip_address?: string;
    security_groups?: string;
    dns_name?: string;
    mount_target_dns_name?: string;
    network_interface_id?: string;
    availability_zone_name?: string;
    availability_zone_id?: string;
    owner_id?: string;
}
export interface DataEip {
    filter?: string;
    id?: string;
    public_ip?: string;
    tags?: string;
    association_id?: string;
    domain?: string;
    instance_id?: string;
    network_interface_id?: string;
    network_interface_owner_id?: string;
    private_ip?: string;
    private_dns?: string;
    public_dns?: string;
    public_ipv4_pool?: string;
    carrier_ip?: string;
    customer_owned_ipv4_pool?: string;
    customer_owned_ip?: string;
}
export interface Eips {
    name: string;
    values: string;
    filter?: string;
    tags?: string;
    id?: string;
    allocation_ids?: string;
    public_ips?: string;
}
export interface DataEksAddon {
    addon_name: string;
    cluster_name: string;
    arn?: string;
    addon_version?: string;
    configuration_values?: string;
    service_account_role_arn?: string;
    id?: string;
    created_at?: string;
    modified_at?: string;
}
export interface EksAddonVersion {
    addon_name: string;
    kubernetes_version: string;
    most_recent?: string;
    id?: string;
    version?: string;
}
export interface DataEksCluster {
    name: string;
    id?: string;
    arn?: string;
    certificate_authority?: string;
    data?: string;
    cluster_id?: string;
    created_at?: string;
    enabled_cluster_log_types?: string;
    endpoint?: string;
    identity?: string;
    oidc?: string;
    issuer?: string;
    kubernetes_network_config?: string;
    ip_family?: string;
    service_ipv4_cidr?: string;
    service_ipv6_cidr?: string;
    outpost_config?: string;
    control_plane_instance_type?: string;
    control_plane_placement?: string;
    group_name?: string;
    outpost_arns?: string;
    platform_version?: string;
    role_arn?: string;
    status?: string;
    tags?: string;
    version?: string;
    vpc_config?: string;
    cluster_security_group_id?: string;
    endpoint_private_access?: string;
    endpoint_public_access?: string;
    public_access_cidrs?: string;
    security_group_ids?: string;
    subnet_ids?: string;
    vpc_id?: string;
}
export interface EksClusterAuth {
    name: string;
    id?: string;
    token?: string;
}
export interface EksClusters {
    id?: string;
    names?: string;
}
export interface DataEksNodeGroup {
    cluster_name: string;
    node_group_name: string;
    id?: string;
    ami_type?: string;
    arn?: string;
    capacity_type?: string;
    disk_size?: string;
    instance_types?: string;
    labels?: string;
    launch_template?: string;
    name?: string;
    version?: string;
    node_role_arn?: string;
    release_version?: string;
    remote_access?: string;
    ec2_ssh_key?: string;
    source_security_group_ids?: string;
    resources?: string;
    autoscaling_groups?: string;
    remote_access_security_group_id?: string;
    scaling_config?: string;
    desired_size?: string;
    max_size?: string;
    min_size?: string;
    status?: string;
    subnet_ids?: string;
    taints?: string;
    key?: string;
    value?: string;
    effect?: string;
    tags?: string;
}
export interface EksNodeGroups {
    cluster_name: string;
    id?: string;
    names?: string;
}
export interface DataElasticBeanstalkApplication {
    name: string;
    id?: string;
    arn?: string;
    description?: string;
    service_role?: string;
    max_count?: string;
    max_age_in_days?: string;
    delete_source_from_s3?: string;
}
export interface ElasticBeanstalkSolutionStack {
    most_recent?: string;
    name_regex?: string;
    name?: string;
}
export interface DataElasticacheCluster {
    cluster_id: string;
    node_type?: string;
    num_cache_nodes?: string;
    engine?: string;
    engine_version?: string;
    ip_discovery?: string;
    network_type?: string;
    subnet_group_name?: string;
    security_group_ids?: string;
    parameter_group_name?: string;
    replication_group_id?: string;
    log_delivery_configuration?: string;
    maintenance_window?: string;
    snapshot_window?: string;
    snapshot_retention_limit?: string;
    availability_zone?: string;
    notification_topic_arn?: string;
    port?: string;
    configuration_endpoint?: string;
    cluster_address?: string;
    preferred_outpost_arn?: string;
    cache_nodes?: string;
    tags?: string;
}
export interface DataElasticacheReplicationGroup {
    replication_group_id: string;
    description?: string;
    arn?: string;
    auth_token_enabled?: string;
    automatic_failover_enabled?: string;
    node_type?: string;
    num_cache_clusters?: string;
    num_node_groups?: string;
    member_clusters?: string;
    multi_az_enabled?: string;
    replicas_per_node_group?: string;
    log_delivery_configuration?: string;
    snapshot_window?: string;
    snapshot_retention_limit?: string;
    port?: string;
    configuration_endpoint_address?: string;
    primary_endpoint_address?: string;
    reader_endpoint_address?: string;
}
export interface ElasticacheSubnetGroupClass {
    name: string;
    arn?: string;
    description?: string;
    id?: string;
    subnet_ids?: string;
    tags?: string;
}
export interface DataElasticacheUser {
    user_id: string;
    user_name?: string;
    access_string?: string;
}
export interface DataElasticsearchDomain {
    domain_name: string;
    access_policies?: string;
    advanced_options?: string;
    advanced_security_options?: string;
    enabled?: string;
    internal_user_database_enabled?: string;
    arn?: string;
    auto_tune_options?: string;
    desired_state?: string;
    maintenance_schedule?: string;
    start_at?: string;
    duration?: string;
    value?: string;
    unit?: string;
    cron_expression_for_recurrence?: string;
    rollback_on_disable?: string;
    cluster_config?: string;
    cold_storage_options?: string;
    instance_type?: string;
    instance_count?: string;
    dedicated_master_enabled?: string;
    dedicated_master_type?: string;
    dedicated_master_count?: string;
    zone_awareness_enabled?: string;
    zone_awareness_config?: string;
    availability_zone_count?: string;
    warm_enabled?: string;
    warm_count?: string;
    warm_type?: string;
    cognito_options?: string;
    user_pool_id?: string;
    identity_pool_id?: string;
    role_arn?: string;
    created?: string;
    deleted?: string;
    domain_id?: string;
    ebs_options?: string;
    ebs_enabled?: string;
    throughput?: string;
    volume_type?: string;
    volume_size?: string;
    iops?: string;
    elasticsearch_version?: string;
    encryption_at_rest?: string;
    kms_key_id?: string;
    endpoint?: string;
    kibana_endpoint?: string;
    log_publishing_options?: string;
    log_type?: string;
    cloudwatch_log_group_arn?: string;
    node_to_node_encryption?: string;
    processing?: string;
    snapshot_options?: string;
    automated_snapshot_start_hour?: string;
    tags?: string;
    vpc_options?: string;
    availability_zones?: string;
    security_group_ids?: string;
    subnet_ids?: string;
    vpc_id?: string;
}
export interface EmrReleaseLabels {
    filters?: EmrReleaseLabelsFilters;
    release_labels?: string;
}
export interface EmrReleaseLabelsFilters {
    application?: string;
    prefix?: string;
}
export interface DataEmrcontainersVirtualCluster {
    virtual_cluster_id: string;
    id?: string;
    name?: string;
    arn?: string;
    container_provider?: string;
    info?: string;
    eks_info?: string;
    namespace?: string;
    type?: string;
    created_at?: string;
    state?: string;
    tags?: string;
}
export interface AwsAccountsClass {
    id: string;
}
export interface DataFsxOntapStorageVirtualMachine {
    filter?: Ec2ClientVPNEndpointFilter;
    id?: string;
}
export interface FsxOntapStorageVirtualMachines {
    filter?: Ec2ClientVPNEndpointFilter;
}
export interface DataFsxOpenzfsSnapshot {
    most_recent?: string;
    snapshot_ids?: string;
    filter?: string;
    arn?: string;
    creation_time?: string;
    id?: string;
    name?: string;
    snapshot_id?: string;
    tags?: string;
    volume_id?: string;
}
export interface DataFsxWindowsFileSystem {
    id: string;
    active_directory_id?: string;
    aliases?: string;
    arn?: string;
    audit_log_configuration?: string;
    automatic_backup_retention_days?: string;
    copy_tags_to_backups?: string;
    daily_automatic_backup_start_time?: string;
    deployment_type?: string;
    disk_iops_configuration?: string;
    dns_name?: string;
    kms_key_id?: string;
    owner_id?: string;
    preferred_subnet_id?: string;
    preferred_file_server_ip?: string;
    storage_capacity?: string;
    storage_type?: string;
    subnet_ids?: string;
    tags?: string;
    throughput_capacity?: string;
    vpc_id?: string;
    weekly_maintenance_start_time?: string;
}
export interface GlobalacceleratorAccelerator {
    arn?: string;
    name?: string;
}
export interface DataGlueCatalogTable {
    name: string;
    database_name: string;
    catalog_id?: string;
    transaction_id?: string;
    id?: string;
    arn?: string;
    description?: string;
    owner?: string;
    partition_index?: GluePartitionIndexPartitionIndex;
    partition_keys?: PurplePartitionKeys;
    retention?: string;
    storage_descriptor?: PurpleStorageDescriptor;
    table_type?: string;
    target_table?: PurpleTargetTable;
    view_expanded_text?: string;
    view_original_text?: string;
    keys?: string;
    schema_reference?: string;
    ser_de_info?: string;
    skewed_info?: string;
    sort_columns?: string;
}
export interface GluePartitionIndexPartitionIndex {
    index_name?: string;
    keys?: string;
}
export interface PurplePartitionKeys {
    comment?: string;
    name?: string;
    type?: string;
}
export interface PurpleStorageDescriptor {
    bucket_columns?: string;
    columns?: PurpleColumns;
    compressed?: string;
    input_format?: string;
    location?: string;
    number_of_buckets?: string;
    output_format?: string;
    schema_reference?: PurpleSchemaReference;
    ser_de_info?: SerDeInfo;
    skewed_info?: SkewedInfo;
    sort_columns?: ColumnSortColumns;
    stored_as_sub_directories?: string;
    type?: string;
    schema_id?: string;
}
export interface PurpleColumns {
    comment?: string;
    name?: string;
    parameters?: string;
    type?: string;
}
export interface PurpleSchemaReference {
    schema_id?: SchemaID;
    schema_version_id?: string;
    schema_version_number?: string;
    schema_name?: string;
}
export interface SchemaID {
    registry_name?: string;
    schema_arn?: string;
    schema_name?: string;
}
export interface SerDeInfo {
    name?: string;
    parameters?: string;
    serialization_library?: string;
}
export interface SkewedInfo {
    skewed_column_names?: string;
    skewed_column_value_location_maps?: string;
    skewed_column_values?: string;
}
export interface ColumnSortColumns {
    column?: string;
    sort_order?: string;
}
export interface PurpleTargetTable {
    catalog_id?: string;
    database_name?: string;
    name?: string;
}
export interface DataGlueConnection {
    id: string;
    arn?: string;
    catalog_id?: string;
    connection_type?: string;
    description?: string;
    match_criteria?: string;
    name?: string;
    physical_connection_requirements?: string;
    tags?: string;
}
export interface DataGlueDataCatalogEncryptionSettings {
    catalog_id: string;
    data_catalog_encryption_settings?: DataCatalogEncryptionSettings;
    id?: string;
    connection_password_encryption?: ConnectionPasswordEncryption;
    encryption_at_rest?: EncryptionAtREST;
}
export interface ConnectionPasswordEncryption {
    return_connection_password_encrypted?: string;
    aws_kms_key_id?: string;
}
export interface DataCatalogEncryptionSettings {
    connection_password_encryption?: string;
    encryption_at_rest?: string;
}
export interface EncryptionAtREST {
    catalog_encryption_mode?: string;
    sse_aws_kms_key_id?: string;
}
export interface GlueScript {
    dag_edge: string;
    dag_node: string;
    source: string;
    target: string;
    args: string;
    id: string;
    node_type: string;
    name: string;
    value: string;
    language?: string;
    target_parameter?: string;
    line_number?: string;
    param?: string;
    python_script?: string;
    scala_code?: string;
}
export interface DataGrafanaWorkspace {
    workspace_id: string;
    account_access_type: string;
    authentication_providers: string;
    arn?: string;
    created_date?: string;
    data_sources?: string;
    description?: string;
    endpoint?: string;
    grafana_version?: string;
    last_updated_date?: string;
    name?: string;
    notification_destinations?: string;
    organization_role_name?: string;
    organizational_units?: string;
    permission_type?: string;
    role_arn?: string;
    stack_set_name?: string;
    status?: string;
    tags?: string;
}
export interface DataGuarddutyDetector {
    id?: string;
    finding_publishing_frequency?: string;
    service_role_arn?: string;
    status?: string;
}
export interface GuarddutyFindingIDS {
    detector_id: string;
    has_findings?: string;
    finding_ids?: string;
}
export interface IamAccessKeys {
    user: string;
    access_keys?: string;
    access_key_id?: string;
    create_date?: string;
    status?: string;
}
export interface DataIamAccountAlias {
    account_alias?: string;
    id?: string;
}
export interface DataIamGroup {
    group_name: string;
    group_id?: string;
    users?: Users;
    user_name?: string;
}
export interface Users {
    arn?: string;
    path?: string;
    user_id?: string;
    user_name?: string;
}
export interface DataIamInstanceProfile {
    name: string;
    arn?: string;
    create_date?: string;
    path?: string;
    role_arn?: string;
    role_id?: string;
    role_name?: string;
}
export interface IamInstanceProfiles {
    role_name: string;
    arns?: string;
    names?: string;
    paths?: string;
}
export interface DataIamOpenidConnectProvider {
    arn?: string;
    url?: string;
    client_id_list?: string;
    thumbprint_list?: string;
    tags?: string;
}
export interface DataIamPolicy {
    arn?: string;
    name?: string;
    path_prefix?: string;
    path?: string;
    description?: string;
    policy?: string;
    policy_id?: string;
    tags?: string;
}
export interface IamPolicyDocument {
    override_policy_documents?: string;
    policy_id?: string;
    source_policy_documents?: string;
    statement?: IamPolicyDocumentStatement;
    version?: string;
    json?: string;
}
export interface IamPolicyDocumentStatement {
    actions?: string;
    condition?: StatementCondition;
    effect?: string;
    not_actions?: string;
    not_principals?: string;
    not_resources?: string;
    principals?: Principals;
    resources?: string;
    sid?: string;
}
export interface StatementCondition {
    test: string;
    values: string;
    variable: string;
}
export interface Principals {
    identifiers: string;
    type: string;
}
export interface IamPrincipalPolicySimulation {
    action_names: string;
    policy_source_arn: string;
    caller_arn?: string;
    context?: Context;
    additional_policies_json?: string;
    permissions_boundary_policies_json?: string;
    resource_arns?: string;
    resource_handling_option?: string;
    resource_owner_account_id?: string;
    resource_policy_json?: string;
    all_allowed?: string;
    results?: string;
    action_name?: string;
    decision?: string;
    allowed?: string;
    decision_details?: string;
    resource_arn?: string;
    matched_statements?: string;
    missing_context_keys?: string;
}
export interface Context {
    key: string;
    type: string;
    values: string;
}
export interface DataIamRole {
    name: string;
    id?: string;
    arn?: string;
    assume_role_policy?: string;
    create_date?: string;
    description?: string;
    max_session_duration?: string;
    path?: string;
    permissions_boundary?: string;
    role_last_used?: RoleLastUsed;
    unique_id?: string;
    tags?: string;
}
export interface RoleLastUsed {
    region?: string;
    last_used_date?: string;
}
export interface Iam {
    name_regex?: string;
    path_prefix?: string;
    arns?: string;
    names?: string;
}
export interface DataIamSamlProvider {
    arn: string;
    create_date?: string;
    name?: string;
    saml_metadata_document?: string;
    tags?: string;
    valid_until?: string;
}
export interface DataIamServerCertificate {
    name_prefix?: string;
    path_prefix?: string;
    name?: string;
    latest?: string;
    id?: string;
    arn?: string;
    path?: string;
    expiration_date?: string;
    upload_date?: string;
    certificate_body?: string;
    certificate_chain?: string;
}
export interface IamSessionContext {
    arn: string;
    issuer_arn?: string;
    issuer_id?: string;
    issuer_name?: string;
    session_name?: string;
}
export interface DataIamUser {
    user_name: string;
    arn?: string;
    path?: string;
    permissions_boundary?: string;
    user_id?: string;
    tags?: string;
}
export interface DataIamUserSSHKey {
    encoding: string;
    ssh_public_key_id: string;
    username: string;
    fingerprint?: string;
    public_key?: string;
    status?: string;
}
export interface DataIdentitystoreGroup {
    identity_store_id: string;
    alternate_identifier?: AlternateIdentifier;
    filter?: UniqueAttributeClass;
    group_id?: string;
    id?: string;
    description?: string;
    display_name?: string;
    external_ids?: string;
    issuer?: string;
}
export interface AlternateIdentifier {
    external_id?: ExternalID;
    unique_attribute?: UniqueAttributeClass;
}
export interface ExternalID {
    id: string;
    issuer: string;
}
export interface UniqueAttributeClass {
    attribute_path: string;
    attribute_value: string;
}
export interface DataIdentitystoreUser {
    identity_store_id: string;
    alternate_identifier?: AlternateIdentifier;
    filter?: UniqueAttributeClass;
    user_id?: string;
    id?: string;
    addresses?: string;
    country?: string;
    formatted?: string;
    locality?: string;
    postal_code?: string;
    primary?: string;
    region?: string;
    street_address?: string;
    type?: string;
    display_name?: string;
    emails?: string;
    value?: string;
    external_ids?: string;
    issuer?: string;
    locale?: string;
    name?: string;
    family_name?: string;
    given_name?: string;
    honorific_prefix?: string;
    honorific_suffix?: string;
    middle_name?: string;
    nickname?: string;
    phone_numbers?: string;
    preferred_language?: string;
    profile_url?: string;
    timezone?: string;
    title?: string;
    user_name?: string;
    user_type?: string;
}
export interface DataImagebuilderComponent {
    arn: string;
    change_description?: string;
    data?: string;
    date_created?: string;
    description?: string;
    encrypted?: string;
    kms_key_id?: string;
    name?: string;
    owner?: string;
    platform?: string;
    supported_os_versions?: string;
    tags?: string;
    type?: string;
    version?: string;
}
export interface Imagebuilder {
    name: string;
    values: string;
    owner?: string;
    arns?: string;
    names?: string;
}
export interface DataImagebuilderContainerRecipe {
    arn: string;
    component?: string;
    component_arn?: string;
    parameter?: string;
    name?: string;
    value?: string;
    container_type?: string;
    date_created?: string;
    description?: string;
    dockerfile_template_data?: string;
    encrypted?: string;
    instance_configuration?: string;
    block_device_mapping?: string;
    device_name?: string;
    ebs?: string;
    delete_on_termination?: string;
    iops?: string;
    kms_key_id?: string;
    snapshot_id?: string;
    throughput?: string;
    volume_size?: string;
    volume_type?: string;
    no_device?: string;
    virtual_name?: string;
    image?: string;
    owner?: string;
    parent_image?: string;
    platform?: string;
    tags?: string;
    target_repository?: string;
    repository_name?: string;
    service?: string;
    version?: string;
    working_directory?: string;
}
export interface DataImagebuilderDistributionConfiguration {
    arn: string;
    date_created?: string;
    date_updated?: string;
    description?: string;
    distribution?: string;
    ami_distribution_configuration?: string;
    ami_tags?: string;
    kms_key_id?: string;
    launch_permission?: string;
    organization_arns?: string;
    organizational_unit_arns?: string;
    user_groups?: string;
    user_ids?: string;
    target_account_ids?: string;
    container_distribution_configuration?: string;
    container_tags?: string;
    target_repository?: string;
    repository_name?: string;
    service?: string;
    fast_launch_configuration?: string;
    account_id?: string;
    enabled?: string;
    launch_template?: string;
    launch_template_id?: string;
    launch_template_name?: string;
    launch_template_version?: string;
    max_parallel_launches?: string;
    snapshot_configuration?: string;
    target_resource_count?: string;
    launch_template_configuration?: string;
    default?: string;
    license_configuration_arns?: string;
    region?: string;
    name?: string;
    tags?: string;
}
export interface ImagebuilderDistributionConfigurations {
    arns?: string;
    names?: string;
}
export interface DataImagebuilderImage {
    arn: string;
    build_version_arn?: string;
    container_recipe_arn?: string;
    date_created?: string;
    distribution_configuration_arn?: string;
    enhanced_image_metadata_enabled?: string;
    image_recipe_arn?: string;
    image_tests_configuration?: string;
    image_tests_enabled?: string;
    timeout_minutes?: string;
    infrastructure_configuration_arn?: string;
    name?: string;
    platform?: string;
    os_version?: string;
    output_resources?: string;
    amis?: string;
    account_id?: string;
    description?: string;
    image?: string;
    region?: string;
    containers?: string;
    image_uris?: string;
    tags?: string;
    version?: string;
}
export interface DataImagebuilderImagePipeline {
    arn: string;
    container_recipe_arn?: string;
    date_created?: string;
    date_last_run?: string;
    date_next_run?: string;
    date_updated?: string;
    description?: string;
    distribution_configuration_arn?: string;
    enhanced_image_metadata_enabled?: string;
    image_recipe_arn?: string;
    image_tests_configuration?: string;
    image_scanning_enabled?: string;
    ecr_configuration?: string;
    container_tags?: string;
    repository_name?: string;
    image_tests_enabled?: string;
    timeout_minutes?: string;
    infrastructure_configuration_arn?: string;
    name?: string;
    platform?: string;
    schedule?: string;
    pipeline_execution_start_condition?: string;
    schedule_expression?: string;
    status?: string;
    tags?: string;
}
export interface ImagebuilderImagePipelines {
    name: string;
    values: string;
    arns?: string;
    names?: string;
}
export interface DataImagebuilderImageRecipe {
    arn: string;
    block_device_mapping?: string;
    device_name?: string;
    ebs?: string;
    delete_on_termination?: string;
    encrypted?: string;
    iops?: string;
    kms_key_id?: string;
    snapshot_id?: string;
    throughput?: string;
    volume_size?: string;
    volume_type?: string;
    no_device?: string;
    virtual_name?: string;
    component?: string;
    component_arn?: string;
    parameter?: string;
    name?: string;
    value?: string;
    date_created?: string;
    description?: string;
    owner?: string;
    parent_image?: string;
    platform?: string;
    tags?: string;
    user_data_base64?: string;
    version?: string;
    working_directory?: string;
}
export interface DataImagebuilderInfrastructureConfiguration {
    arn: string;
    date_created?: string;
    description?: string;
    instance_metadata_options?: string;
    http_put_response_hop_limit?: string;
    http_tokens?: string;
    instance_profile_name?: string;
    instance_types?: string;
    key_pair?: string;
    logging?: string;
    s3_logs?: string;
    s3_bucket_name?: string;
    s3_key_prefix?: string;
    name?: string;
    resource_tags?: string;
    security_group_ids?: string;
    sns_topic_arn?: string;
    subnet_id?: string;
    tags?: string;
    terminate_instance_on_failure?: string;
}
export interface InspectorRulesPackages {
    id?: string;
    arns?: string;
}
export interface DataInstance {
    instance_id?: string;
    instance_tags?: string;
    filter?: string;
    get_password_data?: string;
    get_user_data?: string;
    ami?: string;
    arn?: string;
    associate_public_ip_address?: string;
    availability_zone?: string;
    credit_specification?: string;
    disable_api_stop?: string;
    disable_api_termination?: string;
    ebs_block_device?: string;
    delete_on_termination?: string;
    device_name?: string;
    encrypted?: string;
    iops?: string;
    kms_key_arn?: string;
    snapshot_id?: string;
    throughput?: string;
    volume_size?: string;
    volume_type?: string;
    ebs_optimized?: string;
    enclave_options?: string;
    enabled?: string;
    ephemeral_block_device?: string;
    no_device?: string;
    virtual_name?: string;
    host_id?: string;
    host_resource_group_arn?: string;
    iam_instance_profile?: string;
    instance_state?: string;
    instance_type?: string;
    ipv6_addresses?: string;
    key_name?: string;
    maintenance_options?: string;
    auto_recovery?: string;
    metadata_options?: string;
    http_endpoint?: string;
    http_protocol_ipv6?: string;
    http_tokens?: string;
    http_put_response_hop_limit?: string;
    instance_metadata_tags?: string;
    monitoring?: string;
    network_interface_id?: string;
    outpost_arn?: string;
    password_data?: string;
    placement_group?: string;
    placement_partition_number?: string;
    private_dns?: string;
    private_dns_name_options?: string;
    enable_resource_name_dns_aaaa_record?: string;
    enable_resource_name_dns_a_record?: string;
    hostname_type?: string;
    private_ip?: string;
    public_dns?: string;
    public_ip?: string;
    root_block_device?: string;
    secondary_private_ips?: string;
    security_groups?: string;
    source_dest_check?: string;
    subnet_id?: string;
    tags?: string;
    tenancy?: string;
    user_data?: string;
    user_data_base64?: string;
    vpc_security_group_ids?: string;
}
export interface Instances {
    instance_tags?: string;
    instance_state_names?: string;
    filter?: string;
    id?: string;
    ids?: string;
    private_ips?: string;
    public_ips?: string;
    ipv6_addresses?: string;
}
export interface DataInternetGateway {
    name: string;
    values: string;
    internet_gateway_id?: string;
    tags?: string;
    filter?: string;
    arn?: string;
    owner_id?: string;
    state?: string;
    vpc_id?: string;
}
export interface IotEndpoint {
    endpoint_type?: string;
    endpoint_address?: string;
}
export interface IPRanges {
    services: string;
    regions?: string;
    url?: string;
    cidr_blocks?: string;
    ipv6_cidr_blocks?: string;
    create_date?: string;
    sync_token?: string;
}
export interface IvsStreamKey {
    channel_arn: string;
    arn?: string;
    tags?: string;
    value?: string;
}
export interface DataKendraExperience {
    experience_id: string;
    index_id: string;
    arn?: string;
    created_at?: string;
    description?: string;
    error_message?: string;
    id?: string;
    name?: string;
    role_arn?: string;
    status?: string;
    updated_at?: string;
    data_source_ids?: string;
    direct_put_content?: string;
    faq_ids?: string;
    identity_attribute_name?: string;
    endpoint?: string;
    endpoint_type?: string;
}
export interface DataKendraFAQ {
    faq_id: string;
    index_id: string;
    arn?: string;
    created_at?: string;
    description?: string;
    error_message?: string;
    file_format?: string;
    id?: string;
    language_code?: string;
    name?: string;
    role_arn?: string;
    status?: string;
    updated_at?: string;
    tags?: string;
    bucket?: string;
    key?: string;
}
export interface DataKendraIndex {
    id: string;
    arn?: string;
    created_at?: string;
    description?: string;
    edition?: string;
    error_message?: string;
    name?: string;
    role_arn?: string;
    status?: string;
    updated_at?: string;
    user_context_policy?: string;
    tags?: string;
    query_capacity_units?: string;
    storage_capacity_units?: string;
    type?: string;
    duration?: string;
    freshness?: string;
    importance?: string;
    rank_order?: string;
    values_importance_map?: string;
    displayable?: string;
    facetable?: string;
    searchable?: string;
    sortable?: string;
    text_document_statistics?: string;
    indexed_question_answers_count?: string;
    indexed_text_bytes?: string;
    indexed_text_documents_count?: string;
    kms_key_id?: string;
    user_group_resolution_mode?: string;
    json_token_type_configuration?: string;
    jwt_token_type_configuration?: string;
    group_attribute_field?: string;
    user_name_attribute_field?: string;
    claim_regex?: string;
    issuer?: string;
    key_location?: string;
    secrets_manager_arn?: string;
    url?: string;
}
export interface DataKendraQuerySuggestionsBlockList {
    index_id: string;
    query_suggestions_block_list_id: string;
    arn?: string;
    created_at?: string;
    description?: string;
    error_message?: string;
    file_size_bytes?: string;
    id?: string;
    item_count?: string;
    name?: string;
    role_arn?: string;
    status?: string;
    updated_at?: string;
    tags?: string;
    bucket?: string;
    key?: string;
}
export interface DataKendraThesaurus {
    index_id: string;
    thesaurus_id: string;
    arn?: string;
    created_at?: string;
    description?: string;
    error_message?: string;
    file_size_bytes?: string;
    id?: string;
    name?: string;
    role_arn?: string;
    status?: string;
    synonym_rule_count?: string;
    term_count?: string;
    updated_at?: string;
    tags?: string;
    bucket?: string;
    key?: string;
}
export interface DataKeyPair {
    name: string;
    values: string;
    key_pair_id?: string;
    key_name?: string;
    include_public_key?: string;
    filter?: string;
    id?: string;
    arn?: string;
    create_time?: string;
    fingerprint?: string;
    key_type?: string;
    public_key?: string;
    tags?: string;
}
export interface DataKinesisStream {
    name: string;
    arn?: string;
    creation_timestamp?: string;
    status?: string;
    retention_period?: string;
    open_shards?: string;
    closed_shards?: string;
    shard_level_metrics?: string;
    tags?: string;
    stream_mode?: string;
}
export interface DataKinesisStreamConsumer {
    stream_arn: string;
    arn?: string;
    name?: string;
    creation_timestamp?: string;
    id?: string;
    status?: string;
}
export interface DataKmsAlias {
    name: string;
    arn?: string;
    id?: string;
    target_key_id?: string;
    target_key_arn?: string;
}
export interface DataKmsCiphertext {
    plaintext: string;
    key_id: string;
    context?: string;
    id?: string;
    ciphertext_blob?: string;
}
export interface DataKmsCustomKeyStore {
    custom_key_store_id?: string;
    custom_key_store_name?: string;
    id?: string;
    cloudhsm_cluster_id?: string;
    connection_state?: string;
    creation_date?: string;
    trust_anchor_certificate?: string;
}
export interface DataKmsKey {
    key_id: string;
    grant_tokens?: string;
}
export interface KmsPublicKey {
    key_id: string;
    grant_tokens?: string;
    arn?: string;
    customer_master_key_spec?: string;
    encryption_algorithms?: string;
    id?: string;
    key_usage?: string;
    public_key?: string;
    public_key_pem?: string;
    signing_algorithms?: string;
}
export interface KmsSecrets {
    secret: string;
    name: string;
    payload: string;
    context?: string;
    grant_tokens?: string;
    encryption_algorithm?: string;
    key_id?: string;
    plaintext?: string;
}
export interface DataLakeformationDataLakeSettings {
    catalog_id?: string;
    admins?: string;
    read_only_admins?: string;
    create_database_default_permissions?: CreateEDefaultPermissions;
    create_table_default_permissions?: CreateEDefaultPermissions;
    trusted_resource_owners?: string;
    allow_external_data_filtering?: string;
    external_data_filtering_allow_list?: string;
    authorized_session_tag_value_list?: string;
    principal?: string;
}
export interface CreateEDefaultPermissions {
    permissions?: string;
    principal?: string;
}
export interface DataLakeformationPermissions {
    principal: string;
    catalog_resource?: string;
    data_location?: DataLocation;
    database?: LakeformationPermissionsDatabase;
    lf_tag?: LakeformationPermissionsLFTag;
    lf_tag_policy?: PurpleLFTagPolicy;
    table?: PurpleTable;
    table_with_columns?: PurpleTableWithColumns;
    permissions?: string;
    permissions_with_grant_option?: string;
}
export interface DataLocation {
    arn: string;
    catalog_id?: string;
}
export interface LakeformationPermissionsDatabase {
    name: string;
    catalog_id?: string;
}
export interface LakeformationPermissionsLFTag {
    key: string;
    values: string;
    catalog_id?: string;
}
export interface PurpleLFTagPolicy {
    resource_type: string;
    expression: Expression;
    values: string;
    catalog_id?: string;
}
export interface Expression {
    key?: string;
    values?: string;
}
export interface PurpleTable {
    database_name: string;
    catalog_id?: string;
    name?: string;
    wildcard?: string;
}
export interface PurpleTableWithColumns {
    database_name: string;
    name: string;
    catalog_id?: string;
    column_names?: string;
    excluded_column_names?: string;
}
export interface LakeformationResource {
    arn: string;
    last_modified?: string;
    role_arn?: string;
}
export interface DataLambdaAlias {
    function_name: string;
    name: string;
    arn?: string;
    description?: string;
    function_version?: string;
    invoke_arn?: string;
}
export interface DataLambdaCodeSigningConfig {
    arn: string;
    allowed_publishers?: string;
    config_id?: string;
    description?: string;
    last_modified?: string;
    policies?: string;
    signing_profile_version_arns?: string;
    untrusted_artifact_on_deployment?: string;
}
export interface DataLambdaFunction {
    function_name: string;
    qualifier?: string;
    architectures?: string;
    arn?: string;
    code_signing_config_arn?: string;
    dead_letter_config?: string;
    description?: string;
    environment?: string;
    ephemeral_storage?: string;
    file_system_config?: string;
    handler?: string;
    image_uri?: string;
    invoke_arn?: string;
    kms_key_arn?: string;
    last_modified?: string;
    layers?: string;
    memory_size?: string;
    qualified_arn?: string;
    qualified_invoke_arn?: string;
    reserved_concurrent_executions?: string;
    role?: string;
    runtime?: string;
    signing_job_arn?: string;
    signing_profile_version_arn?: string;
    source_code_hash?: string;
    source_code_size?: string;
    timeout?: string;
    tracing_config?: string;
    version?: string;
    vpc_config?: string;
}
export interface DataLambdaFunctionURL {
    function_name: string;
    qualifier?: string;
    authorization_type?: string;
    cors?: string;
    creation_time?: string;
    function_arn?: string;
    function_url?: string;
    invoke_mode?: string;
    last_modified_time?: string;
    url_id?: string;
}
export interface LambdaFunctions {
    function_names?: string;
    function_arns?: string;
}
export interface DataLambdaInvocation {
    function_name: string;
    input: string;
    qualifier?: string;
    result?: string;
}
export interface DataLambdaLayerVersion {
    layer_name: string;
    version?: string;
    compatible_runtime?: string;
    compatible_architecture?: string;
    description?: string;
    license_info?: string;
    compatible_runtimes?: string;
    compatible_architectures?: string;
    arn?: string;
    layer_arn?: string;
    created_date?: string;
    signing_job_arn?: string;
    signing_profile_version_arn?: string;
    source_code_hash?: string;
    source_code_size?: string;
}
export interface DataLaunchConfiguration {
    name: string;
    id?: string;
    arn?: string;
    image_id?: string;
    instance_type?: string;
    iam_instance_profile?: string;
    key_name?: string;
    metadata_options?: string;
    http_endpoint?: string;
    http_tokens?: string;
    http_put_response_hop_limit?: string;
    security_groups?: string;
    associate_public_ip_address?: string;
    user_data?: string;
    enable_monitoring?: string;
    ebs_optimized?: string;
    root_block_device?: string;
    ebs_block_device?: string;
    ephemeral_block_device?: string;
    spot_price?: string;
    placement_tenancy?: string;
    delete_on_termination?: string;
    encrypted?: string;
    iops?: string;
    throughput?: string;
    volume_size?: string;
    volume_type?: string;
    device_name?: string;
    no_device?: string;
    snapshot_id?: string;
    virtual_name?: string;
}
export interface DataLaunchTemplate {
    name: string;
    values: string;
    id?: string;
    tags?: string;
}
export interface LBTargetGroupClass {
    arn?: string;
    name?: string;
    tags?: string;
}
export interface LBHostedZoneID {
    region?: string;
    load_balancer_type?: string;
    id?: string;
}
export interface DataLBListener {
    arn?: string;
    load_balancer_arn?: string;
    port?: string;
}
export interface Lbs {
    tags?: string;
    arns?: string;
}
export interface DataLexBot {
    name: string;
    version?: string;
    arn?: string;
    checksum?: string;
    child_directed?: string;
    created_date?: string;
    description?: string;
    detect_sentiment?: string;
    enable_model_improvements?: string;
    failure_reason?: string;
    idle_session_ttl_in_seconds?: string;
    last_updated_date?: string;
    locale?: string;
    nlu_intent_confidence_threshold?: string;
    status?: string;
    voice_id?: string;
}
export interface DataLexBotAlias {
    bot_name: string;
    name: string;
    arn?: string;
    bot_version?: string;
    checksum?: string;
    created_date?: string;
    description?: string;
    last_updated_date?: string;
}
export interface DataLexIntent {
    name: string;
    version?: string;
    arn?: string;
    checksum?: string;
    created_date?: string;
    description?: string;
    last_updated_date?: string;
    parent_intent_signature?: string;
}
export interface DataLexSlotType {
    name: string;
    version?: string;
    checksum?: string;
    created_date?: string;
    description?: string;
    enumeration_value?: string;
    last_updated_date?: string;
    value_selection_strategy?: string;
}
export interface Licensemanager {
    name: string;
    values: string;
    filter?: string;
    arns?: string;
}
export interface LicensemanagerReceivedLicense {
    license_arn: string;
    id?: string;
    beneficiary?: string;
    consumption_configuration?: ConsumptionConfiguration;
    create_time?: string;
    entitlements?: Entitlements;
    home_region?: string;
    issuer?: Issuer;
    license_name?: string;
    product_name?: string;
    product_sku_?: string;
    received_metadata?: ReceivedMetadata;
    status?: string;
    validity?: Validity;
    version?: string;
    name?: string;
    value?: string;
    received_status_reason?: string;
    end?: string;
}
export interface ConsumptionConfiguration {
    borrow_configuration?: BorrowConfiguration;
    provisional_configuration?: ProvisionalConfiguration;
    renewal_frequency?: string;
}
export interface BorrowConfiguration {
    allow_early_check_in?: string;
    max_time_to_live_in_minutes?: string;
}
export interface ProvisionalConfiguration {
    max_time_to_live_in_minutes?: string;
}
export interface Entitlements {
    allow_check_in?: string;
    max_count?: string;
    name?: string;
    overage?: string;
    unit?: string;
    value?: string;
}
export interface Issuer {
    key_fingerprint?: string;
    name?: string;
    sign_key?: string;
}
export interface ReceivedMetadata {
    allowed_operations?: string;
    received_status?: string;
    received_status_reason?: string;
}
export interface Validity {
    begin?: string;
    end?: string;
}
export interface LocationGeofenceCollection {
    collection_name: string;
    collection_arn?: string;
    create_time?: string;
    description?: string;
    kms_key_id?: string;
    tags?: string;
    update_time?: string;
}
export interface DataLocationMap {
    map_name: string;
    configuration?: string;
    style?: string;
    create_time?: string;
    description?: string;
    map_arn?: string;
    tags?: string;
    update_time?: string;
}
export interface DataLocationPlaceIndex {
    index_name: string;
    create_time?: string;
    data_source?: string;
    data_source_configuration?: string;
    description?: string;
    index_arn?: string;
    tags?: string;
    update_time?: string;
}
export interface DataLocationRouteCalculator {
    calculator_name: string;
    calculator_arn?: string;
    create_time?: string;
    data_source?: string;
    description?: string;
    tags?: string;
    update_time?: string;
}
export interface DataLocationTracker {
    tracker_name: string;
    create_time?: string;
    description?: string;
    kms_key_id?: string;
    position_filtering?: string;
    tags?: string;
    tracker_arn?: string;
    update_time?: string;
}
export interface LocationTrackerAssociation {
    consumer_arn: string;
    tracker_name: string;
}
export interface LocationTrackerAssociations {
    tracker_name: string;
    consumer_arns?: string;
}
export interface DataMemorydbACL {
    name: string;
    id?: string;
    arn?: string;
    minimum_engine_version?: string;
    tags?: string;
    user_names?: string;
}
export interface DataMemorydbCluster {
    name: string;
    id?: string;
    arn?: string;
    acl_name?: string;
    auto_minor_version_upgrade?: string;
    cluster_endpoint?: string;
    address?: string;
    port?: string;
    data_tiering?: string;
    description?: string;
    engine_patch_version?: string;
    engine_version?: string;
    final_snapshot_name?: string;
    kms_key_arn?: string;
    maintenance_window?: string;
    node_type?: string;
    num_replicas_per_shard?: string;
    num_shards?: string;
    parameter_group_name?: string;
    security_group_ids?: string;
    shards?: string;
    num_nodes?: string;
    slots?: string;
    nodes?: string;
    availability_zone?: string;
    create_time?: string;
    endpoint?: string;
    snapshot_retention_limit?: string;
    snapshot_window?: string;
    sns_topic_arn?: string;
    subnet_group_name?: string;
    tls_enabled?: string;
    tags?: string;
}
export interface DataMemorydbParameterGroup {
    name: string;
    id?: string;
    arn?: string;
    description?: string;
    family?: string;
    parameter?: string;
    value?: string;
    tags?: string;
}
export interface DataMemorydbSnapshot {
    name: string;
    id?: string;
    arn?: string;
    cluster_configuration?: string;
    description?: string;
    engine_version?: string;
    maintenance_window?: string;
    node_type?: string;
    num_shards?: string;
    parameter_group_name?: string;
    port?: string;
    snapshot_retention_limit?: string;
    snapshot_window?: string;
    subnet_group_name?: string;
    topic_arn?: string;
    vpc_id?: string;
    cluster_name?: string;
    kms_key_arn?: string;
    source?: string;
    tags?: string;
}
export interface DataMemorydbSubnetGroup {
    name: string;
    id?: string;
    arn?: string;
    description?: string;
    subnet_ids?: string;
    vpc_id?: string;
    tags?: string;
}
export interface DataMemorydbUser {
    user_name: string;
    id?: string;
    access_string?: string;
    arn?: string;
    authentication_mode?: string;
    password_count?: string;
    type?: string;
    minimum_engine_version?: string;
    tags?: string;
}
export interface DataMqBroker {
    broker_id?: string;
    broker_name?: string;
}
export interface MqBrokerInstanceTypeOfferings {
    engine_type?: string;
    host_instance_type?: string;
    storage_type?: string;
    broker_instance_options?: BrokerInstanceOptions;
    availability_zones?: ComputeTypeClass;
    supported_engine_versions?: string;
    name?: string;
}
export interface ComputeTypeClass {
    name?: string;
}
export interface BrokerInstanceOptions {
    availability_zones?: string;
    engine_type?: string;
    host_instance_type?: string;
    storage_type?: string;
    supported_deployment_modes?: string;
    supported_engine_versions?: string;
}
export interface MskBrokerNodes {
    cluster_arn: string;
    attached_eni_id?: string;
    broker_id?: string;
    client_subnet?: string;
    client_vpc_ip_address?: string;
    endpoints?: string;
    node_arn?: string;
}
export interface DataMskCluster {
    cluster_name: string;
    arn?: string;
    bootstrap_brokers?: string;
    bootstrap_brokers_public_sasl_iam?: string;
    bootstrap_brokers_public_sasl_scram?: string;
    bootstrap_brokers_public_tls?: string;
    bootstrap_brokers_sasl_iam?: string;
    bootstrap_brokers_sasl_scram?: string;
    bootstrap_brokers_tls?: string;
    kafka_version?: string;
    number_of_broker_nodes?: string;
    tags?: string;
    zookeeper_connect_string?: string;
    zookeeper_connect_string_tls?: string;
}
export interface DataMskConfiguration {
    name: string;
    arn?: string;
    latest_revision?: string;
    description?: string;
    kafka_versions?: string;
    server_properties?: string;
}
export interface MskKafkaVersion {
    preferred_versions?: string;
    version?: string;
    status?: string;
}
export interface DataMskVpcConnection {
    arn: string;
    authentication?: string;
    client_subnets?: string;
    security_groups?: string;
    tags?: string;
    target_cluster_arn?: string;
    vpc_id?: string;
}
export interface DataMskconnectConnector {
    name: string;
    arn?: string;
    description?: string;
    version?: string;
}
export interface DataMskconnectCustomPlugin {
    name: string;
    arn?: string;
    description?: string;
    latest_revision?: string;
    state?: string;
}
export interface DataMskconnectWorkerConfiguration {
    name: string;
    arn?: string;
    description?: string;
    latest_revision?: string;
    properties_file_content?: string;
}
export interface DataNatGateway {
    name: string;
    values: string;
    id?: string;
    subnet_id?: string;
    vpc_id?: string;
    state?: string;
    tags?: string;
    filter?: string;
    allocation_id?: string;
    association_id?: string;
    connectivity_type?: string;
    network_interface_id?: string;
    private_ip?: string;
    public_ip?: string;
    secondary_allocation_ids?: string;
    secondary_private_ip_address_count?: string;
    secondary_private_ip_addresses?: string;
}
export interface NatGateways {
    name: string;
    values: string;
    filter?: string;
    vpc_id?: string;
    tags?: string;
    id?: string;
    ids?: string;
}
export interface NeptuneEngineVersion {
    engine?: string;
    parameter_group_family?: string;
    preferred_versions?: string;
    version?: string;
    engine_description?: string;
    exportable_log_types?: string;
    supported_timezones?: string;
    supports_log_exports_to_cloudwatch?: string;
    supports_read_replica?: string;
    valid_upgrade_targets?: string;
    version_description?: string;
}
export interface NeptuneOrderableDBInstance {
    engine?: string;
    engine_version?: string;
    instance_class?: string;
    license_model?: string;
    preferred_instance_classes?: string;
    vpc?: string;
    availability_zones?: string;
    max_iops_per_db_instance?: string;
    max_iops_per_gib?: string;
    max_storage_size?: string;
    min_iops_per_db_instance?: string;
    min_iops_per_gib?: string;
    min_storage_size?: string;
    multi_az_capable?: string;
    read_replica_capable?: string;
    storage_type?: string;
    supports_enhanced_monitoring?: string;
    supports_iam_database_authentication?: string;
    supports_iops?: string;
    supports_performance_insights?: string;
    supports_storage_encryption?: string;
}
export interface DataNetworkInterface {
    id?: string;
    filter?: string;
    arn?: string;
    association?: Association;
    availability_zone?: string;
    description?: string;
    interface_type?: string;
    ipv6_addresses?: string;
    mac_address?: string;
    owner_id?: string;
    private_dns_name?: string;
    private_ip?: string;
    private_ips?: string;
    requester_id?: string;
    security_groups?: string;
    subnet_id?: string;
    outpost_arn?: string;
    tags?: string;
    vpc_id?: string;
}
export interface Association {
    allocation_id?: string;
    association_id?: string;
    carrier_ip?: string;
    customer_owned_ip?: string;
    ip_owner_id?: string;
    public_dns_name?: string;
    public_ip?: string;
}
export interface DataNetworkfirewallFirewall {
    arn?: string;
    name?: string;
    delete_protection?: string;
    description?: string;
    encryption_configuration?: string;
    key_id?: string;
    type?: string;
    firewall_policy_arn?: string;
    firewall_policy_change_protection?: string;
    firewall_status?: string;
    sync_states?: string;
    attachment?: string;
    endpoint_id?: string;
    subnet_id?: string;
    availability_zone?: string;
    capacity_usage_summary?: string;
    cidrs?: string;
    available_cidr_count?: string;
    ip_set_references?: string;
    resolved_cidr_count?: string;
    utilized_cidr_count?: string;
    configuration_sync_state_summary?: string;
    id?: string;
    subnet_change_protection?: string;
    subnet_mapping?: string;
    tags?: string;
    update_token?: string;
    vpc_id?: string;
}
export interface DataNetworkfirewallFirewallPolicy {
    arn?: string;
    name?: string;
    description?: string;
    firewall_policy?: string;
    tags?: string;
    update_token?: string;
}
export interface NetworkfirewallResourcePolicy {
    resource_arn: string;
    id?: string;
    policy?: string;
}
export interface DataNetworkmanagerConnection {
    global_network_id: string;
    connection_id: string;
    arn?: string;
    connected_device_id?: string;
    connected_link_id?: string;
    description?: string;
    device_id?: string;
    link_id?: string;
    tags?: string;
}
export interface NetworkmanagerConnections {
    global_network_id: string;
    device_id?: string;
    tags?: string;
    ids?: string;
}
export interface NetworkmanagerCoreNetworkPolicyDocument {
    core_network_configuration: CoreNetworkConfiguration;
    segments: NetworkmanagerCoreNetworkPolicyDocumentSegments;
    attachment_policies?: AttachmentPolicies;
    segment_actions?: SegmentActions;
    value?: string;
    edge_locations?: EdgeLocations;
    json?: string;
}
export interface AttachmentPolicies {
    action: AttachmentPoliciesAction;
    conditions: AttachmentPoliciesConditions;
    rule_number: string;
    description?: string;
}
export interface AttachmentPoliciesAction {
    association_method?: string;
    segment?: string;
    tag_value_of_key?: string;
    require_acceptance?: string;
}
export interface AttachmentPoliciesConditions {
    type?: string;
    operator?: string;
    key?: string;
    value?: string;
}
export interface CoreNetworkConfiguration {
    asn_ranges?: string;
    inside_cidr_blocks?: string;
    vpn_ecmp_support?: string;
    edge_locations?: EdgeLocations;
}
export interface EdgeLocations {
    locations: string;
    asn?: string;
    inside_cidr_blocks?: string;
}
export interface SegmentActions {
    action: string;
    description?: string;
    destination_cidr_blocks?: string;
    destinations?: string;
    mode?: string;
    segment?: string;
    share_with?: string;
    share_with_except?: string;
}
export interface NetworkmanagerCoreNetworkPolicyDocumentSegments {
    allow_filter?: string;
    deny_filter?: string;
    description?: string;
    edge_locations?: string;
    isolate_attachments?: string;
    name?: string;
    require_attachment_acceptance?: string;
}
export interface DataNetworkmanagerDevice {
    device_id: string;
    global_network_id: string;
    arn?: string;
    description?: string;
    model?: string;
    serial_number?: string;
    site_id?: string;
    tags?: string;
    type?: string;
    vendor?: string;
    subnet_arn?: string;
    zone?: string;
    address?: string;
    latitude?: string;
    longitude?: string;
}
export interface NetworkmanagerDevices {
    global_network_id: string;
    site_id?: string;
    tags?: string;
    ids?: string;
}
export interface DataNetworkmanagerGlobalNetwork {
    global_network_id: string;
    arn?: string;
    description?: string;
    tags?: string;
}
export interface NetworkmanagerGlobalNetworks {
    tags?: string;
    ids?: string;
}
export interface DataNetworkmanagerLink {
    global_network_id: string;
    link_id: string;
    arn?: string;
    description?: string;
    provider_name?: string;
    site_id?: string;
    tags?: string;
    type?: string;
    download_speed?: string;
    upload_speed?: string;
}
export interface NetworkmanagerLinks {
    global_network_id: string;
    provider_name?: string;
    site_id?: string;
    tags?: string;
    type?: string;
    ids?: string;
}
export interface DataNetworkmanagerSite {
    global_network_id: string;
    site_id: string;
    arn?: string;
    description?: string;
    tags?: string;
    address?: string;
    latitude?: string;
    longitude?: string;
}
export interface NetworkmanagerSites {
    global_network_id: string;
    tags?: string;
    ids?: string;
}
export interface DataOamLink {
    link_identifier: string;
    arn?: string;
    label?: string;
    label_template?: string;
    link_id?: string;
    resource_types?: string;
    sink_arn?: string;
}
export interface OamInks {
    arns?: string;
}
export interface DataOamSink {
    sink_identifier: string;
    arn?: string;
    name?: string;
    sink_id?: string;
    tags?: string;
}
export interface DataOpensearchDomain {
    domain_name: string;
    access_policies?: string;
    advanced_options?: string;
    advanced_security_options?: string;
    enabled?: string;
    internal_user_database_enabled?: string;
    arn?: string;
    auto_tune_options?: string;
    desired_state?: string;
    maintenance_schedule?: string;
    start_at?: string;
    duration?: string;
    value?: string;
    unit?: string;
    cron_expression_for_recurrence?: string;
    rollback_on_disable?: string;
    cluster_config?: string;
    cold_storage_options?: string;
    instance_type?: string;
    instance_count?: string;
    dedicated_master_enabled?: string;
    dedicated_master_type?: string;
    dedicated_master_count?: string;
    zone_awareness_enabled?: string;
    zone_awareness_config?: string;
    availability_zone_count?: string;
    warm_enabled?: string;
    warm_count?: string;
    warm_type?: string;
    cognito_options?: string;
    user_pool_id?: string;
    identity_pool_id?: string;
    role_arn?: string;
    created?: string;
    deleted?: string;
    domain_id?: string;
    ebs_options?: string;
    ebs_enabled?: string;
    throughput?: string;
    volume_type?: string;
    volume_size?: string;
    iops?: string;
    engine_version?: string;
    encryption_at_rest?: string;
    kms_key_id?: string;
    endpoint?: string;
    dashboard_endpoint?: string;
    kibana_endpoint?: string;
    log_publishing_options?: string;
    log_type?: string;
    cloudwatch_log_group_arn?: string;
    node_to_node_encryption?: string;
    off_peak_window_options?: string;
    off_peak_window?: string;
    window_start_time?: string;
    hours?: string;
    minutes?: string;
    processing?: string;
    snapshot_options?: string;
    automated_snapshot_start_hour?: string;
    software_update_options?: string;
    auto_software_update_enabled?: string;
    tags?: string;
    vpc_options?: string;
    availability_zones?: string;
    security_group_ids?: string;
    subnet_ids?: string;
    vpc_id?: string;
}
export interface OpensearchserverlessAccessPolicy {
    name: string;
    type: string;
    description?: string;
    policy?: string;
    policy_version?: string;
}
export interface DataOpensearchserverlessCollection {
    id: string;
    name: string;
    arn?: string;
    collection_endpoint?: string;
    created_date?: string;
    dashboard_endpoint?: string;
    description?: string;
    kms_key_arn?: string;
    last_modified_date?: string;
    tags?: string;
    type?: string;
}
export interface DataOpensearchserverlessSecurityConfig {
    id: string;
    config_version?: string;
    created_date?: string;
    description?: string;
    last_modified_date?: string;
    saml_options?: OpensearchserverlessSecurityConfigSamlOptions;
    type?: string;
    user_attribute?: string;
}
export interface OpensearchserverlessSecurityConfigSamlOptions {
    group_attribute?: string;
    metadata?: string;
    session_timeout?: string;
    user_attribute?: string;
}
export interface OpensearchserverlessSecurityPolicy {
    name: string;
    type: string;
    created_date?: string;
    description?: string;
    last_modified_date?: string;
    policy?: string;
    policy_version?: string;
}
export interface DataOpensearchserverlessVpcEndpoint {
    vpc_endpoint_id: string;
    created_date?: string;
    name?: string;
    security_group_ids?: string;
    subnet_ids?: string;
    vpc_id?: string;
}
export interface OrganizationsDelegatedAdministrators {
    service_principal?: string;
    delegated_administrators?: string;
    arn?: string;
    delegation_enabled_date?: string;
    email?: string;
    id?: string;
    joined_method?: string;
    joined_timestamp?: string;
    name?: string;
    status?: string;
}
export interface OrganizationsDelegatedServices {
    account_id: string;
    delegated_services?: string;
    delegation_enabled_date?: string;
    service_principal?: string;
}
export interface OrganizationsOrganization {
    arn?: string;
    feature_set?: string;
    id?: string;
    master_account_arn?: string;
    master_account_email?: string;
    master_account_id?: string;
    accounts?: string;
    email?: string;
    name?: string;
    status?: string;
    aws_service_access_principals?: string;
    enabled_policy_types?: string;
    non_master_accounts?: string;
    roots?: string;
    policy_types?: string;
}
export interface DataOrganizationsOrganizationalUnit {
    parent_id: string;
    name: string;
    arn?: string;
    id?: string;
}
export interface OrganizationsOrganizationalUnitAccounts {
    parent_id: string;
    accounts?: string;
    arn?: string;
    email?: string;
    id?: string;
    name?: string;
    status?: string;
}
export interface OrganizationsOrganizationalUnits {
    parent_id: string;
    children?: string;
    arn?: string;
    name?: string;
    id?: string;
}
export interface OrganizationsPolicies {
    filter: string;
    ids?: string;
}
export interface OrganizationsPoliciesForTarget {
    target_id: string;
    filter: string;
    ids?: string;
}
export interface DataOrganizationsPolicy {
    policy_id: string;
    arn?: string;
    aws_managed?: string;
    content?: string;
    description?: string;
    name?: string;
    type?: string;
}
export interface OrganizationsResourceTags {
    tags?: string;
}
export interface OutpostsAsset {
    arn: string;
    asset_id: string;
    asset_type?: string;
    host_id?: string;
    rack_elevation?: string;
    rack_id?: string;
}
export interface OutpostsAssets {
    arn: string;
    host_id_filter?: string;
    status_id_filter?: string;
    asset_ids?: string;
}
export interface OutpostsOutpost {
    id?: string;
    name?: string;
    arn?: string;
    owner_id?: string;
    availability_zone?: string;
    availability_zone_id?: string;
    description?: string;
    lifecycle_status?: string;
    site_arn?: string;
    site_id?: string;
    supported_hardware_type?: string;
    tags?: string;
}
export interface OutpostsOutpostInstanceType {
    arn: string;
    instance_type?: string;
    preferred_instance_types?: string;
    id?: string;
}
export interface OutpostsOutpostInstanceTypes {
    arn: string;
    instance_types?: string;
}
export interface OutpostsOutposts {
    availability_zone?: string;
    availability_zone_id?: string;
    site_id?: string;
    owner_id?: string;
    arns?: string;
    id?: string;
    ids?: string;
}
export interface OutpostsSite {
    id?: string;
    name?: string;
    account_id?: string;
    description?: string;
}
export interface OutpostsSites {
    id?: string;
    ids?: string;
}
export interface Partition {
    dns_suffix?: string;
    id?: string;
    partition?: string;
    reverse_dns_prefix?: string;
}
export interface PrefixList {
    name: string;
    values: string;
    prefix_list_id?: string;
    id?: string;
    cidr_blocks?: string;
}
export interface PricingProduct {
    service_code: string;
    filters: PricingProductFilters;
    result?: string;
}
export interface PricingProductFilters {
    field?: string;
    value?: string;
}
export interface DataPrometheusWorkspace {
    workspace_id: string;
    arn?: string;
    created_date?: string;
    prometheus_endpoint?: string;
    alias?: string;
    status?: string;
    tags?: string;
}
export interface PrometheusWorkspaces {
    alias_prefix?: string;
    aliases?: string;
    arns?: string;
    workspace_ids?: string;
}
export interface DataQuicksightDataSet {
    data_set_id: string;
    aws_account_id?: string;
}
export interface DataQuicksightGroup {
    group_name: string;
    aws_account_id?: string;
    namespace?: string;
    arn?: string;
    description?: string;
    principal_id?: string;
}
export interface DataQuicksightTheme {
    theme_id?: string;
    aws_account_id?: string;
    arn?: string;
    base_theme_id?: string;
    configuration?: QuicksightThemeConfiguration;
    created_time?: string;
    id?: string;
    last_updated_time?: string;
    name?: string;
    permissions?: PurplePermissions;
    status?: string;
    tags?: string;
    version_description?: string;
    version_number?: string;
    data_color_palette?: DataColorPalette;
    ui_color_palette?: UIColorPalette;
    tile_layout?: TileLayout;
    font_families?: FontFamilies;
    font_family?: string;
}
export interface QuicksightThemeConfiguration {
    data_color_palette?: string;
    sheet?: Sheet;
    typography?: Typography;
    ui_color_palette?: string;
}
export interface Sheet {
    tile?: Tile;
    tile_layout?: string;
}
export interface Tile {
    border?: Gutter;
}
export interface Gutter {
    show?: string;
}
export interface Typography {
    font_families?: string;
}
export interface DataColorPalette {
    colors?: string;
    empty_fill_color?: string;
    min_max_gradient?: string;
}
export interface FontFamilies {
    font_family?: string;
}
export interface PurplePermissions {
    actions?: string;
    principal?: string;
}
export interface TileLayout {
    gutter?: Gutter;
    margin?: Gutter;
}
export interface UIColorPalette {
    accent?: string;
    accent_foreground?: string;
    danger?: string;
    danger_foreground?: string;
    dimension?: string;
    dimension_foreground?: string;
    measure?: string;
    measure_foreground?: string;
    primary_background?: string;
    primary_foreground?: string;
    secondary_background?: string;
    secondary_foreground?: string;
    success?: string;
    success_foreground?: string;
    warning?: string;
    warning_foreground?: string;
}
export interface DataQuicksightUser {
    user_name: string;
    aws_account_id?: string;
    namespace?: string;
    active?: string;
    arn?: string;
    email?: string;
    identity_type?: string;
    principal_id?: string;
    user_role?: string;
}
export interface DataRAMResourceShare {
    name: string;
    resource_owner: string;
    values: string;
    resource_share_status?: string;
    filter?: string;
    arn?: string;
    id?: string;
    owning_account_id?: string;
    resource_arns?: string;
    status?: string;
    tags?: string;
}
export interface RDSCertificate {
    id?: string;
    latest_valid_till?: string;
    arn?: string;
    certificate_type?: string;
    customer_override?: string;
    customer_override_valid_till?: string;
    thumbprint?: string;
    valid_from?: string;
    valid_till?: string;
}
export interface DataRDSCluster {
    cluster_identifier: string;
    tags?: string;
}
export interface RDSClusters {
    name: string;
    values: string;
    cluster_arns?: string;
    cluster_identifiers?: string;
}
export interface RDSEngineVersion {
    engine: string;
    default_only?: string;
    filter?: string;
    include_all?: string;
    parameter_group_family?: string;
    preferred_versions?: string;
    version?: string;
    default_character_set?: string;
    engine_description?: string;
    exportable_log_types?: string;
    status?: string;
    supported_character_sets?: string;
    supported_feature_names?: string;
    supported_modes?: string;
    supported_timezones?: string;
    supports_global_databases?: string;
    supports_log_exports_to_cloudwatch?: string;
    supports_parallel_query?: string;
    supports_read_replica?: string;
    valid_upgrade_targets?: string;
    version_description?: string;
}
export interface RDSOrderableDBInstance {
    engine: string;
    availability_zone_group?: string;
    engine_version?: string;
    instance_class?: string;
    license_model?: string;
    preferred_instance_classes?: string;
    preferred_engine_versions?: string;
    storage_type?: string;
    supports_enhanced_monitoring?: string;
    supports_global_databases?: string;
    supports_iam_database_authentication?: string;
    supports_iops?: string;
    supports_kerberos_authentication?: string;
    supports_performance_insights?: string;
    supports_storage_autoscaling?: string;
    supports_storage_encryption?: string;
    vpc?: string;
    availability_zones?: string;
    max_iops_per_db_instance?: string;
    max_iops_per_gib?: string;
    max_storage_size?: string;
    min_iops_per_db_instance?: string;
    min_iops_per_gib?: string;
    min_storage_size?: string;
    multi_az_capable?: string;
    outpost_capable?: string;
    read_replica_capable?: string;
    supported_engine_modes?: string;
    supported_network_types?: string;
}
export interface RDSReservedInstanceOffering {
    db_instance_class: string;
    duration: string;
    multi_az: string;
    offering_type: string;
    product_description: string;
    id?: string;
    currency_code?: string;
    fixed_price?: string;
    offering_id?: string;
}
export interface DataRedshiftCluster {
    cluster_identifier: string;
    arn?: string;
    allow_version_upgrade?: string;
    automated_snapshot_retention_period?: string;
    aqua_configuration_status?: string;
    availability_zone?: string;
    availability_zone_relocation_enabled?: string;
    bucket_name?: string;
    cluster_parameter_group_name?: string;
    cluster_public_key?: string;
    cluster_revision_number?: string;
    cluster_subnet_group_name?: string;
    cluster_type?: string;
    cluster_namespace_arn?: string;
    database_name?: string;
    default_iam_role_arn?: string;
    elastic_ip?: string;
    enable_logging?: string;
    encrypted?: string;
    endpoint?: string;
    enhanced_vpc_routing?: string;
    iam_roles?: string;
    kms_key_id?: string;
    master_username?: string;
    node_type?: string;
    number_of_nodes?: string;
    maintenance_track_name?: string;
    manual_snapshot_retention_period?: string;
    port?: string;
    preferred_maintenance_window?: string;
    publicly_accessible?: string;
    s3_key_prefix?: string;
    log_destination_type?: string;
    log_exports?: string;
    tags?: string;
    vpc_id?: string;
    vpc_security_group_ids?: string;
    node_role?: string;
    private_ip_address?: string;
    public_ip_address?: string;
}
export interface RedshiftClusterCredentials {
    cluster_identifier: string;
    db_user: string;
    auto_create?: string;
    db_name?: string;
    db_groups?: string;
    duration_seconds?: string;
    db_password?: string;
    expiration?: string;
}
export interface RedshiftOrderableCluster {
    cluster_type?: string;
    cluster_version?: string;
    node_type?: string;
    preferred_node_types?: string;
    availability_zones?: string;
}
export interface RedshiftserverlessCredentials {
    workgroup_name: string;
    db_name?: string;
    duration_seconds?: string;
    db_password?: string;
    db_user?: string;
    expiration?: string;
}
export interface DataRedshiftserverlessNamespace {
    namespace_name: string;
    admin_username?: string;
    arn?: string;
    db_name?: string;
    default_iam_role_arn?: string;
    iam_roles?: string;
    kms_key_id?: string;
    log_exports?: string;
    namespace_id?: string;
}
export interface DataRedshiftserverlessWorkgroup {
    workgroup_name: string;
    arn?: string;
    id?: string;
    endpoint?: RedshiftserverlessWorkgroupEndpoint;
    enhanced_vpc_routing?: string;
    publicly_accessible?: string;
    security_group_ids?: string;
    subnet_ids?: string;
    workgroup_id?: string;
    vpc_endpoint?: string;
    subnet_id?: string;
}
export interface RedshiftserverlessWorkgroupEndpoint {
    address?: string;
    port?: string;
    vpc_endpoint?: EndpointVpcEndpoint;
    network_interface?: string;
    subnet_id?: string;
}
export interface EndpointVpcEndpoint {
    vpc_endpoint_id?: string;
    vpc_id?: string;
    network_interface?: RedshiftEndpointAccessNetworkInterface;
    subnet_id?: string;
}
export interface RedshiftEndpointAccessNetworkInterface {
    availability_zone?: string;
    network_interface_id?: string;
    private_ip_address?: string;
    subnet_id?: string;
}
export interface DataRegion {
    name?: string;
    endpoint?: string;
    description?: string;
}
export interface DataRegions {
    name: string;
    values: string;
    all_regions?: string;
    id?: string;
    names?: string;
}
export interface ResourcegroupstaggingapiResources {
    exclude_compliant_resources?: string;
    include_compliance_details?: string;
    tag_filter?: TagFilter;
    resource_type_filters?: string;
    resource_arn_list?: string;
    resource_tag_mapping_list?: string;
    compliance_details?: string;
    compliance_status?: string;
    keys_with_noncompliant_values_?: string;
    non_compliant_keys_?: string;
    resource_arn?: string;
    tags?: string;
}
export interface TagFilter {
    key: string;
    values?: string;
}
export interface DataRoute {
    route_table_id: string;
    carrier_gateway_id?: string;
    core_network_arn?: string;
    destination_cidr_block?: string;
    destination_ipv6_cidr_block?: string;
    destination_prefix_list_id?: string;
    egress_only_gateway_id?: string;
    gateway_id?: string;
    instance_id?: string;
    local_gateway_id?: string;
    nat_gateway_id?: string;
    network_interface_id?: string;
    transit_gateway_id?: string;
    vpc_peering_connection_id?: string;
}
export interface DataRoute53DelegationSet {
    id: string;
    arn?: string;
    caller_reference?: string;
    name_servers?: string;
}
export interface DataRoute53ResolverEndpoint {
    resolver_endpoint_id?: string;
    filter?: string;
    arn?: string;
    direction?: string;
    ip_addresses?: string;
    status?: string;
    vpc_id?: string;
}
export interface DataRoute53ResolverFirewallConfig {
    resource_id: string;
    firewall_fail_open?: string;
    id?: string;
    owner_id?: string;
}
export interface DataRoute53ResolverFirewallDomainList {
    firewall_domain_list_id: string;
    arn?: string;
    creation_time?: string;
    creator_request_id?: string;
    domain_count?: string;
    name?: string;
    managed_owner_name?: string;
    modification_time?: string;
    status?: string;
    status_message?: string;
}
export interface DataRoute53ResolverFirewallRuleGroup {
    firewall_rule_group_id: string;
    arn?: string;
    creation_time?: string;
    creator_request_id?: string;
    name?: string;
    modification_time?: string;
    owner_id?: string;
    rule_count?: string;
    share_status?: string;
    status?: string;
    status_message?: string;
}
export interface DataRoute53ResolverFirewallRuleGroupAssociation {
    firewall_rule_group_association_id: string;
    arn?: string;
    creation_time?: string;
    creator_request_id?: string;
    firewall_rule_group_id?: string;
    managed_owner_name?: string;
    modification_time?: string;
    mutation_protection?: string;
    name?: string;
    priority?: string;
    status?: string;
    status_message?: string;
    vpc_id?: string;
}
export interface Route53ResolverFirewallRules {
    firewall_rule_group_id: string;
    action?: string;
    priority?: string;
    firewall_rules?: string;
    block_override_dns_type?: string;
    block_override_domain?: string;
    block_override_ttl?: string;
    block_response?: string;
    creation_time?: string;
    creator_request_id?: string;
    firewall_domain_list_id?: string;
    modification_time?: string;
    name?: string;
}
export interface DataRoute53ResolverQueryLogConfig {
    resolver_query_log_config_id?: string;
    filter?: string;
    id?: string;
    arn?: string;
    destination_arn?: string;
    name?: string;
    owner_id?: string;
    share_status?: string;
    tags?: string;
}
export interface DataRoute53ResolverRule {
    domain_name?: string;
    name?: string;
    resolver_endpoint_id?: string;
    resolver_rule_id?: string;
    rule_type?: string;
    id?: string;
    arn?: string;
    owner_id?: string;
    share_status?: string;
    tags?: string;
}
export interface Route53ResolverRules {
    name_regex?: string;
    owner_id?: string;
    resolver_endpoint_id?: string;
    rule_type?: string;
    share_status?: string;
    id?: string;
    resolver_rule_ids?: string;
}
export interface Route53TrafficPolicyDocument {
    endpoint?: Route53TrafficPolicyDocumentEndpoint;
    record_type?: string;
    rule?: Route53TrafficPolicyDocumentRule;
    start_endpoint?: string;
    start_rule?: string;
    version?: string;
    region?: Route53TrafficPolicyDocumentRegion;
    value?: string;
    primary?: Primary;
    location?: Route53TrafficPolicyDocumentLocation;
    geo_proximity_location?: GeoProximityLocation;
    rule_reference?: string;
    subdivision?: string;
    json?: string;
}
export interface Route53TrafficPolicyDocumentEndpoint {
    id: string;
    type?: string;
    region?: string;
    value?: string;
}
export interface GeoProximityLocation {
    bias?: string;
    endpoint_reference?: string;
    evaluate_target_health?: string;
    health_check?: string;
    latitude?: string;
    longitude?: string;
    region?: string;
    rule_reference?: string;
}
export interface Route53TrafficPolicyDocumentLocation {
    continent?: string;
    country?: string;
    endpoint_reference?: string;
    evaluate_target_health?: string;
    health_check?: string;
    is_default?: string;
    rule_reference?: string;
    subdivision?: string;
}
export interface Primary {
    endpoint_reference?: string;
    evaluate_target_health?: string;
    health_check?: string;
    rule_reference?: string;
}
export interface Route53TrafficPolicyDocumentRegion {
    endpoint_reference?: string;
    evaluate_target_health?: string;
    health_check?: string;
    region?: string;
    rule_reference?: string;
}
export interface Route53TrafficPolicyDocumentRule {
    id: string;
    type?: string;
    primary?: string;
    secondary?: string;
    location?: string;
    geo_proximity_location?: string;
    regions?: string;
    items?: string;
}
export interface DataRoute53Zone {
    zone_id?: string;
    name?: string;
    private_zone?: string;
    vpc_id?: string;
    tags?: string;
    arn?: string;
    caller_reference?: string;
    comment?: string;
    name_servers?: string;
    primary_name_server?: string;
    resource_record_set_count?: string;
    linked_service_principal?: string;
    linked_service_description?: string;
}
export interface DataRouteTable {
    filter?: Ec2ClientVPNEndpointFilter;
    gateway_id?: string;
    route_table_id?: string;
    subnet_id?: string;
    tags?: string;
    vpc_id?: string;
    arn?: string;
    associations?: Associations;
    owner_id?: string;
    routes?: RouteTableRoutes;
    vpc_peering_connection_id?: string;
}
export interface Associations {
    gateway_id?: string;
    main?: string;
    route_table_association_id?: string;
    route_table_id?: string;
    subnet_id?: string;
}
export interface RouteTableRoutes {
    cidr_block?: string;
    destination_prefix_list_id?: string;
    ipv6_cidr_block?: string;
    carrier_gateway_id?: string;
    core_network_arn?: string;
    egress_only_gateway_id?: string;
    gateway_id?: string;
    instance_id?: string;
    local_gateway_id?: string;
    nat_gateway_id?: string;
    network_interface_id?: string;
    transit_gateway_id?: string;
    vpc_endpoint_id?: string;
    vpc_peering_connection_id?: string;
}
export interface S3AccountPublicAccessBlock {
    account_id?: string;
    id?: string;
    block_public_acls?: string;
    block_public_policy?: string;
    ignore_public_acls?: string;
    restrict_public_buckets?: string;
}
export interface DataS3Bucket {
    bucket: string;
    id?: string;
    arn?: string;
    bucket_domain_name?: string;
    bucket_regional_domain_name?: string;
    hosted_zone_id?: string;
    region?: string;
    website_endpoint?: string;
    website_domain?: string;
}
export interface DataS3BucketObject {
    bucket: string;
    key: string;
    version_id?: string;
    body?: string;
    bucket_key_enabled?: string;
    cache_control?: string;
    content_disposition?: string;
    content_encoding?: string;
    content_language?: string;
    content_length?: string;
    content_type?: string;
    etag?: string;
    expiration?: string;
    expires?: string;
    last_modified?: string;
    metadata?: string;
    object_lock_legal_hold_status?: string;
    object_lock_mode?: string;
    object_lock_retain_until_date?: string;
    server_side_encryption?: string;
    sse_kms_key_id?: string;
    storage_class?: string;
    website_redirect_location?: string;
    tags?: string;
}
export interface S3BucketObjects {
    bucket: string;
    prefix?: string;
    delimiter?: string;
    encoding_type?: string;
    max_keys?: string;
    start_after?: string;
    fetch_owner?: string;
    keys?: string;
    common_prefixes?: string;
    id?: string;
    owners?: string;
}
export interface DataS3BucketPolicy {
    bucket: string;
    policy?: string;
}
export interface DataS3Object {
    bucket: string;
    key: string;
    checksum_mode?: string;
    version_id?: string;
    body?: string;
    bucket_key_enabled?: string;
    cache_control?: string;
    checksum_crc32?: string;
    checksum_crc32c?: string;
    checksum_sha1?: string;
    checksum_sha256?: string;
    content_disposition?: string;
    content_encoding?: string;
    content_language?: string;
    content_length?: string;
    content_type?: string;
    etag?: string;
    expiration?: string;
    expires?: string;
    last_modified?: string;
    metadata?: string;
    object_lock_legal_hold_status?: string;
    object_lock_mode?: string;
    object_lock_retain_until_date?: string;
    server_side_encryption?: string;
    sse_kms_key_id?: string;
    storage_class?: string;
    website_redirect_location?: string;
    tags?: string;
}
export interface S3Objects {
    bucket: string;
    prefix?: string;
    delimiter?: string;
    encoding_type?: string;
    max_keys?: string;
    start_after?: string;
    fetch_owner?: string;
    request_payer?: string;
    keys?: string;
    common_prefixes?: string;
    id?: string;
    owners?: string;
    request_charged?: string;
}
export interface DataS3ControlMultiRegionAccessPoint {
    name: string;
    account_id?: string;
    alias?: string;
    arn?: string;
    created_at?: string;
    domain_name?: string;
    public_access_block?: PublicAccessBlock;
    regions?: S3ControlMultiRegionAccessPointRegions;
    status?: string;
    region?: string;
}
export interface PublicAccessBlock {
    block_public_acls?: string;
    block_public_policy?: string;
    ignore_public_acls?: string;
    restrict_public_buckets?: string;
}
export interface S3ControlMultiRegionAccessPointRegions {
    bucket?: string;
    bucket_account_id?: string;
    region?: string;
}
export interface SagemakerPrebuiltEcrImage {
    repository_name: string;
    dns_suffix?: string;
    image_tag?: string;
    region?: string;
    registry_id?: string;
    registry_path?: string;
}
export interface SecretsmanagerRandomPassword {
    exclude_characters?: string;
    exclude_lowercase?: string;
    exclude_numbers?: string;
    exclude_punctuation?: string;
    exclude_uppercase?: string;
    include_space?: string;
    password_length?: string;
    require_each_included_type?: string;
    random_password?: string;
}
export interface DataSecretsmanagerSecret {
    arn?: string;
    name?: string;
    description?: string;
    kms_key_id?: string;
    id?: string;
    tags?: string;
    policy?: string;
}
export interface DataSecretsmanagerSecretRotation {
    secret_id: string;
    rotation_enabled?: string;
    rotation_lambda_arn?: string;
    rotation_rules?: string;
}
export interface DataSecretsmanagerSecretVersion {
    secret_id: string;
    version_id?: string;
    version_stage?: string;
    arn?: string;
    id?: string;
    secret_string?: string;
    secret_binary?: string;
}
export interface DataSecurityGroup {
    name: string;
    values: string;
    filter?: string;
    id?: string;
    tags?: string;
    vpc_id?: string;
    description?: string;
    arn?: string;
}
export interface SecurityGroups {
    tags?: string;
    filter?: string;
    arns?: string;
    id?: string;
    ids?: string;
    vpc_ids?: string;
}
export interface ServerlessapplicationrepositoryApplication {
    application_id: string;
    semantic_version?: string;
    name?: string;
    required_capabilities?: string;
    source_code_url?: string;
    template_url?: string;
}
export interface DataService {
    dns_name?: string;
    partition?: string;
    region?: string;
    reverse_dns_name?: string;
    reverse_dns_prefix?: string;
    service_id?: string;
    supported?: string;
}
export interface ServiceDiscoveryDNSNamespace {
    name: string;
    type: string;
    arn?: string;
    description?: string;
    id?: string;
    hosted_zone?: string;
    tags?: string;
}
export interface DataServiceDiscoveryHTTPNamespace {
    name: string;
    id?: string;
    arn?: string;
    description?: string;
    http_name?: string;
    tags?: string;
}
export interface DataServiceDiscoveryService {
    name: string;
    namespace_id: string;
    id?: string;
    arn?: string;
    description?: string;
    dns_config?: PurpleDNSConfig;
    health_check_config?: HealthCheckConfig;
    health_check_custom_config?: HealthCheckCustomConfig;
    tags?: string;
    tags_all?: string;
    dns_records?: string;
}
export interface PurpleDNSConfig {
    namespace_id?: string;
    dns_records?: DNSRecords;
    routing_policy?: string;
}
export interface DNSRecords {
    ttl?: string;
    type?: string;
}
export interface HealthCheckConfig {
    failure_threshold?: string;
    resource_path?: string;
    type?: string;
}
export interface HealthCheckCustomConfig {
    failure_threshold?: string;
}
export interface DataServicecatalogConstraint {
    id?: string;
    accept_language?: string;
    description?: string;
    owner?: string;
    parameters?: string;
    portfolio_id?: string;
    product_id?: string;
    status?: string;
    type?: string;
}
export interface ServicecatalogLaunchPaths {
    product_id: string;
    accept_language?: string;
    summaries?: Summaries;
    constraint_summaries?: ConstraintSummaries;
    tags?: string;
}
export interface ConstraintSummaries {
    description?: string;
    type?: string;
}
export interface Summaries {
    constraint_summaries?: string;
    path_id?: string;
    name?: string;
    tags?: string;
}
export interface DataServicecatalogPortfolio {
    id: string;
    accept_language?: string;
    arn?: string;
    created_time?: string;
    description?: string;
    name?: string;
    provider_name?: string;
    tags?: string;
}
export interface ServicecatalogPortfolioConstraints {
    portfolio_id: string;
    accept_language?: string;
    product_id?: string;
    details?: Details;
}
export interface Details {
    constraint_id?: string;
    description?: string;
    portfolio_id?: string;
    product_id?: string;
    type?: string;
}
export interface DataServicecatalogProduct {
    id: string;
    accept_language?: string;
    arn?: string;
    created_time?: string;
    description?: string;
    distributor?: string;
    has_default_path?: string;
    name?: string;
    owner?: string;
    status?: string;
    support_description?: string;
    support_email?: string;
    support_url?: string;
    tags?: string;
    type?: string;
}
export interface ServicecatalogProvisioningArtifacts {
    product_id: string;
    accept_language?: string;
    provisioning_artifact_details?: ProvisioningArtifactDetails;
    type?: string;
}
export interface ProvisioningArtifactDetails {
    active?: string;
    created_time?: string;
    description?: string;
    guidance?: string;
    id?: string;
    name?: string;
    type?: string;
}
export interface ServicequotasService {
    service_name: string;
    id?: string;
    service_code?: string;
}
export interface DataServicequotasServiceQuota {
    service_code: string;
    quota_code?: string;
    quota_name?: string;
    adjustable?: string;
    arn?: string;
    default_value?: string;
    global_quota?: string;
    id?: string;
    service_name?: string;
    usage_metric?: string;
    metric_dimensions?: string;
    class?: string;
    resource?: string;
    service?: string;
    type?: string;
    metric_name?: string;
    metric_namespace?: string;
    metric_statistic_recommendation?: string;
    value?: string;
}
export interface SesActiveReceiptRuleSet {
    arn?: string;
    rule_set_name?: string;
}
export interface DataSesDomainIdentity {
    arn?: string;
    domain?: string;
    verification_token?: string;
}
export interface DataSesEmailIdentity {
    arn?: string;
    email?: string;
}
export interface DataSesv2ConfigurationSet {
    configuration_set_name: string;
    delivery_options?: string;
    sending_pool_name?: string;
    tls_policy?: string;
    reputation_options?: string;
    last_fresh_start?: string;
    reputation_metrics_enabled?: string;
    sending_options?: string;
    sending_enabled?: string;
    suppression_options?: string;
    suppressed_reasons?: string;
    tags?: string;
    tracking_options?: string;
    custom_redirect_domain?: string;
    vdm_options?: string;
    dashboard_options?: string;
    engagement_metrics?: string;
    guardian_options?: string;
    optimized_shared_delivery?: string;
}
export interface DataSesv2DedicatedIPPool {
    pool_name: string;
    arn?: string;
    dedicated_ips?: DedicatedIPS;
    scaling_mode?: string;
    tags?: string;
}
export interface DedicatedIPS {
    ip?: string;
    warmup_percentage?: string;
    warmup_status?: string;
}
export interface DataSesv2EmailIdentity {
    email_identity: string;
    arn?: string;
    dkim_signing_attributes?: string;
    current_signing_key_length?: string;
    last_key_generation_timestamp?: string;
    next_signing_key_length?: string;
    signing_attributes_origin?: string;
    status?: string;
    tokens?: string;
    identity_type?: string;
    tags?: string;
    verified_for_sending_status?: string;
}
export interface Sesv2EmailIdentityMailFromAttributes {
    email_identity: string;
    behavior_on_mx_failure?: string;
    mail_from_domain?: string;
}
export interface DataSfnActivity {
    name?: string;
    arn?: string;
    id?: string;
    creation_date?: string;
}
export interface DataSfnAlias {
    name: string;
    statemachine_arn: string;
    arn?: string;
    creation_date?: string;
    description?: string;
    routing_configuration?: string;
}
export interface DataSfnStateMachine {
    name: string;
    id?: string;
    arn?: string;
    role_arn?: string;
    definition?: string;
    creation_date?: string;
    revision_id?: string;
    status?: string;
}
export interface SfnStateMachineVersions {
    statemachine_arn: string;
    statemachine_versions?: string;
}
export interface DataSignerSigningJob {
    job_id: string;
    completed_at?: string;
    created_at?: string;
    job_invoker?: string;
    job_owner?: string;
    platform_display_name?: string;
    platform_id?: string;
    profile_name?: string;
    profile_version?: string;
    requested_by?: string;
    revocation_record?: string;
    signature_expires_at?: string;
    signed_object?: string;
    source?: string;
    status?: string;
    status_reason?: string;
}
export interface DataSignerSigningProfile {
    name: string;
    arn?: string;
    platform_display_name?: string;
    platform_id?: string;
    revocation_record?: string;
    signature_validity_period?: string;
    status?: string;
    tags?: string;
    version?: string;
    version_arn?: string;
}
export interface DataSnsTopic {
    name: string;
    arn?: string;
    id?: string;
}
export interface DataSqsQueue {
    name: string;
    arn?: string;
    url?: string;
    tags?: string;
}
export interface SqsQueues {
    queue_name_prefix?: string;
    queue_urls?: string;
}
export interface DataSsmDocument {
    name: string;
    document_format?: string;
    document_version?: string;
    arn?: string;
    content?: string;
    document_type?: string;
}
export interface DataSsmParameter {
    name: string;
    with_decryption?: string;
    arn?: string;
    type?: string;
    value?: string;
    insecure_value?: string;
    version?: string;
}
export interface SsmParametersByPath {
    path: string;
    with_decryption?: string;
    recursive?: string;
    arns?: string;
    names?: string;
    types?: string;
    values?: string;
}
export interface DataSsmPatchBaseline {
    owner: string;
    name_prefix?: string;
    default_baseline?: string;
    operating_system?: string;
    approved_patches?: string;
    approved_patches_compliance_level?: string;
    approved_patches_enable_non_security?: string;
    approval_rule?: string;
    approve_after_days?: string;
    approve_until_date?: string;
    compliance_level?: string;
    enable_non_security?: string;
    patch_filter?: string;
    key?: string;
    values?: string;
    global_filter?: string;
    id?: string;
    name?: string;
    description?: string;
    rejected_patches?: string;
    rejected_patches_action?: string;
    source?: string;
    configuration?: string;
    products?: string;
}
export interface SsmcontactsContact {
    arn: string;
    alias?: string;
    type?: string;
    display_name?: string;
    tags?: string;
}
export interface DataSsmcontactsPlan {
    contact_id: string;
    stage?: string;
}
export interface DataSsmincidentsReplicationSet {
    arn?: string;
    tags?: string;
    created_by?: string;
    deletion_protected?: string;
    last_modified_by?: string;
    status?: string;
    name?: string;
    kms_key_arn?: string;
    status_message?: string;
}
export interface DataSsmincidentsResponsePlan {
    arn: string;
    "1"?: string;
    "2"?: string;
    "3"?: string;
    "4"?: string;
    "5"?: string;
    name?: string;
    tags?: string;
    display_name?: string;
    chat_channel?: string;
    engagements?: string;
    title?: string;
    impact?: string;
    dedupe_string?: string;
    incident_tags?: string;
    summary?: string;
    notification_target?: string;
    sns_topic_arn?: string;
    action?: string;
    ssm_automation?: string;
    document_name?: string;
    role_arn?: string;
    document_version?: string;
    target_account?: string;
    parameter?: string;
    values?: string;
    dynamic_parameters?: string;
    integration?: string;
    pagerduty?: string;
    service_id?: string;
    secret_id?: string;
}
export interface SsoadminInstances {
    arns?: string;
    id?: string;
    identity_store_ids?: string;
}
export interface DataSsoadminPermissionSet {
    instance_arn: string;
    arn?: string;
    name?: string;
    id?: string;
    description?: string;
    relay_state?: string;
    session_duration?: string;
    tags?: string;
}
export interface StoragegatewayLocalDisk {
    gateway_arn: string;
    disk_node?: string;
    disk_path?: string;
    disk_id?: string;
    id?: string;
}
export interface DataSubnet {
    availability_zone?: string;
    availability_zone_id?: string;
    cidr_block?: string;
    default_for_az?: string;
    filter?: Ec2ClientVPNEndpointFilter;
    id?: string;
    ipv6_cidr_block?: string;
    state?: string;
    tags?: string;
    vpc_id?: string;
    arn?: string;
    assign_ipv6_address_on_creation?: string;
    available_ip_address_count?: string;
    customer_owned_ipv4_pool?: string;
    enable_dns64?: string;
    enable_lni_at_device_index?: string;
    enable_resource_name_dns_aaaa_record_on_launch?: string;
    enable_resource_name_dns_a_record_on_launch?: string;
    ipv6_cidr_block_association_id?: string;
    ipv6_native?: string;
    map_customer_owned_ip_on_launch?: string;
    map_public_ip_on_launch?: string;
    outpost_arn?: string;
    owner_id?: string;
    private_dns_hostname_type_on_launch?: string;
}
export interface Subnets {
    name: string;
    values: string;
    filter?: string;
    tags?: string;
    ids?: string;
}
export interface DataTransferServer {
    server_id: string;
    arn?: string;
    certificate?: string;
    domain?: string;
    endpoint?: string;
    endpoint_type?: string;
    identity_provider_type?: string;
    invocation_role?: string;
    logging_role?: string;
    protocols?: string;
    security_policy_name?: string;
    structured_log_destinations?: string;
    url?: string;
}
export interface DataVpc {
    name: string;
    values: string;
    cidr_block?: string;
    dhcp_options_id?: string;
    default?: string;
    filter?: string;
    id?: string;
    state?: string;
    tags?: string;
    arn?: string;
    enable_dns_support?: string;
    enable_network_address_usage_metrics?: string;
    enable_dns_hostnames?: string;
    instance_tenancy?: string;
    ipv6_association_id?: string;
    ipv6_cidr_block?: string;
    main_route_table_id?: string;
    owner_id?: string;
    association_id?: string;
}
export interface DataVpcDHCPOptions {
    values: string;
    dhcp_options_id?: string;
    filter?: Ec2ClientVPNEndpointFilter;
    arn?: string;
    domain_name?: string;
    domain_name_servers?: string;
    id?: string;
    netbios_name_servers?: string;
    netbios_node_type?: string;
    ntp_servers?: string;
    tags?: string;
    owner_id?: string;
}
export interface DataVpcEndpoint {
    name: string;
    values: string;
    filter?: string;
    id?: string;
    service_name?: string;
    state?: string;
    tags?: string;
    vpc_id?: string;
    arn?: string;
    cidr_blocks?: string;
    dns_entry?: DNSEntry;
    dns_options?: DNSOptions;
    network_interface_ids?: string;
    owner_id?: string;
    policy?: string;
    prefix_list_id?: string;
    private_dns_enabled?: string;
    requester_managed?: string;
    route_table_ids?: string;
    security_group_ids?: string;
    subnet_ids?: string;
    vpc_endpoint_type?: string;
    hosted_zone_id?: string;
}
export interface DNSEntry {
    dns_name?: string;
    hosted_zone_id?: string;
}
export interface DNSOptions {
    dns_record_ip_type?: string;
    private_dns_only_for_inbound_resolver_endpoint?: string;
}
export interface DataVpcEndpointService {
    name: string;
    values: string;
    service?: string;
    service_name?: string;
    service_type?: string;
    tags?: string;
    acceptance_required?: string;
    arn?: string;
    availability_zones?: string;
    base_endpoint_dns_names?: string;
    manages_vpc_endpoints?: string;
    owner?: string;
    private_dns_name?: string;
    service_id?: string;
    supported_ip_address_types?: string;
    vpc_endpoint_policy_supported?: string;
}
export interface DataVpcIPAMPool {
    ipam_pool_id?: string;
    filter?: Ec2ClientVPNEndpointFilter;
    address_family?: string;
    allocation_default_netmask_length?: string;
    allocation_max_netmask_length?: string;
    allocation_min_netmask_length?: string;
    allocation_resource_tags?: string;
    arn?: string;
    auto_import?: string;
    aws_service?: string;
    description?: string;
    id?: string;
    ipam_scope_id?: string;
    locale?: string;
    publicly_advertisable?: string;
    source_ipam_pool_id?: string;
    tags?: string;
}
export interface VpcIPAMPoolCidrs {
    ipam_pool_id?: string;
    filter?: string;
    ipam_pool_cidrs?: IPAMPoolCidrs;
    state?: string;
}
export interface IPAMPoolCidrs {
    cidr?: string;
    state?: string;
}
export interface VpcIPAMPools {
    filter: VpcIPAMPoolsFilter;
    ipam_pools?: IPAMPools;
    tags?: string;
}
export interface VpcIPAMPoolsFilter {
    name?: string;
    values?: string;
}
export interface IPAMPools {
    address_family?: string;
    allocation_default_netmask_length?: string;
    allocation_max_netmask_length?: string;
    allocation_min_netmask_length?: string;
    allocation_resource_tags?: string;
    arn?: string;
    auto_import?: string;
    aws_service?: string;
    description?: string;
    id?: string;
    ipam_scope_id?: string;
    locale?: string;
    publicly_advertisable?: string;
    source_ipam_pool_id?: string;
    tags?: string;
}
export interface VpcIPAMPreviewNextCIDR {
    ipam_pool_id: string;
    disallowed_cidrs?: string;
    netmask_length?: string;
    cidr?: string;
    id?: string;
}
export interface DataVpcPeeringConnection {
    name: string;
    values: string;
    id?: string;
    status?: string;
    vpc_id?: string;
    owner_id?: string;
    cidr_block?: string;
    region?: string;
    peer_vpc_id?: string;
    peer_owner_id?: string;
    peer_cidr_block?: string;
    peer_region?: string;
    filter?: string;
    tags?: string;
    accepter?: string;
    cidr_block_set?: string;
    peer_cidr_block_set?: string;
    requester?: string;
    allow_remote_vpc_dns_resolution?: string;
}
export interface VpcSecurityGroupRule {
    name: string;
    values: string;
    security_group_rule_id?: string;
    arn?: string;
    cidr_ipv4?: string;
    cidr_ipv6?: string;
    description?: string;
    from_port?: string;
    is_egress?: string;
    ip_protocol?: string;
    prefix_list_id?: string;
    referenced_security_group_id?: string;
    security_group_id?: string;
    tags?: string;
    to_port?: string;
}
export interface DataVpclatticeAuthPolicy {
    resource_identifier: string;
    policy?: string;
    state?: string;
}
export interface DataVpclatticeListener {
    service_identifier: string;
    listener_identifier: string;
    arn?: string;
    created_at?: string;
    default_action?: string;
    last_updated_at?: string;
    listener_id?: string;
    name?: string;
    port?: string;
    protocol?: string;
    service_arn?: string;
    service_id?: string;
    tags?: string;
}
export interface VpclatticeResourcePolicy {
    resource_arn: string;
    policy?: string;
}
export interface DataVpclatticeService {
    name?: string;
    service_identifier?: string;
    arn?: string;
    auth_type?: string;
    certificate_arn?: string;
    custom_domain_name?: string;
    dns_entry?: string;
    id?: string;
    status?: string;
    tags?: string;
}
export interface DataVpclatticeServiceNetwork {
    service_network_identifier: string;
    arn?: string;
    auth_type?: string;
    created_at?: string;
    id?: string;
    last_updated_at?: string;
    name?: string;
    number_of_associated_services?: string;
    number_of_associated_vpcs?: string;
}
export interface DataVPNGateway {
    name: string;
    values: string;
    id?: string;
    state?: string;
    availability_zone?: string;
    attached_vpc_id?: string;
    filter?: string;
    tags?: string;
    amazon_side_asn?: string;
}
export interface WafRateBasedRuleClass {
    name: string;
    id?: string;
}
export interface WafSubscribedRuleGroup {
    name?: string;
    metric_name?: string;
    id?: string;
}
export interface DataWafv2IPSet {
    name: string;
    scope: string;
    addresses?: string;
    arn?: string;
    description?: string;
    id?: string;
    ip_address_version?: string;
}
export interface DataWafv2RegexPatternSet {
    name: string;
    scope: string;
    arn?: string;
    description?: string;
    id?: string;
    regular_expression?: RegularExpression;
}
export interface RegularExpression {
    regex_string: string;
}
export interface Wafv2 {
    name: string;
    scope: string;
    arn?: string;
    description?: string;
    id?: string;
}
export interface WorkspacesBundle {
    bundle_id?: string;
    owner?: string;
    name?: string;
    description?: string;
    compute_type?: ComputeTypeClass;
    root_storage?: Storage;
    user_storage?: Storage;
    capacity?: string;
}
export interface Storage {
    capacity?: string;
}
export interface DataWorkspacesDirectory {
    directory_id: string;
    id?: string;
    alias?: string;
    customer_user_name?: string;
    directory_name?: string;
    directory_type?: string;
    dns_ip_addresses?: string;
    iam_role_id?: string;
    ip_group_ids?: string;
    registration_code?: string;
    self_service_permissions?: SelfServicePermissions;
    subnet_ids?: string;
    tags?: string;
    workspace_creation_properties?: WorkspaceCreationProperties;
    workspace_access_properties?: WorkspaceAccessProperties;
    workspace_security_group_id?: string;
}
export interface SelfServicePermissions {
    change_compute_type?: string;
    increase_volume_size?: string;
    rebuild_workspace?: string;
    restart_workspace?: string;
    switch_running_mode?: string;
}
export interface WorkspaceAccessProperties {
    device_type_android?: string;
    device_type_chromeos?: string;
    device_type_ios?: string;
    device_type_linux?: string;
    device_type_osx?: string;
    device_type_web?: string;
    device_type_windows?: string;
    device_type_zeroclient?: string;
}
export interface WorkspaceCreationProperties {
    custom_security_group_id?: string;
    default_ou?: string;
    enable_internet_access?: string;
    enable_maintenance_mode?: string;
    user_enabled_as_local_administrator?: string;
}
export interface WorkspacesImage {
    image_id: string;
    name?: string;
    description?: string;
    os?: string;
    required_tenancy?: string;
    state?: string;
}
export interface DataWorkspacesWorkspace {
    bundle_id?: string;
    directory_id?: string;
    root_volume_encryption_enabled?: string;
    tags?: string;
    user_name?: string;
    user_volume_encryption_enabled?: string;
    volume_encryption_key?: string;
    workspace_id?: string;
    workspace_properties?: string;
    compute_type_name?: string;
    root_volume_size_gib?: string;
    running_mode?: string;
    running_mode_auto_stop_timeout_in_minutes?: string;
    user_volume_size_gib?: string;
    id?: string;
    ip_address?: string;
    computer_name?: string;
    state?: string;
}
export interface Resource {
    cloudfront_field_level_encryption_config?: CloudfrontFieldLevelEncryptionConfig;
    vpc_ipam_scope?: VpcIPAMScope;
    api_gateway_rest_api?: ResourceAPIGatewayRESTAPI;
    ec2_network_insights_analysis?: ResourceEc2NetworkInsightsAnalysis;
    chimesdkvoice_global_settings?: ChimesdkvoiceGlobalSettings;
    ssoadmin_managed_policy_attachment?: SsoadminManagedPolicyAttachment;
    cloudwatch_log_metric_filter?: CloudwatchLogMetricFilter;
    storagegateway_nfs_file_share?: StoragegatewayNFSFileShare;
    amplify_webhook?: AmplifyWebhook;
    appmesh_virtual_router?: ResourceAppmeshVirtualRouter;
    db_instance_role_association?: DBInstanceRoleAssociation;
    ecr_registry_policy?: EcrRegistryPolicy;
    route53_resolver_query_log_config_association?: Route53ResolverQueryLogConfigAssociation;
    ec2_host?: ResourceEc2Host;
    sagemaker_project?: SagemakerProject;
    waf_size_constraint_set?: WafSizeConstraintSet;
    dynamodb_contributor_insights?: DynamodbContributorInsights;
    guardduty_member?: GuarddutyMember;
    inspector_assessment_target?: InspectorAssessmentTarget;
    opensearch_domain?: ResourceOpensearchDomain;
    route53_record?: Route53Record;
    cognito_user_group?: CognitoUserGroup;
    emr_security_configuration?: EmrSecurityConfiguration;
    apprunner_connection?: ApprunnerConnection;
    iot_indexing_configuration?: IotIndexingConfiguration;
    neptune_cluster_snapshot?: NeptuneClusterSnapshot;
    networkmanager_link_association?: NetworkmanagerLinkAssociation;
    organizations_account?: OrganizationsAccount;
    securityhub_product_subscription?: SecurityhubProductSubscription;
    appsync_type?: AppsyncType;
    sagemaker_endpoint?: SagemakerEndpoint;
    api_gateway_base_path_mapping?: APIGatewayBasePathMapping;
    glue_trigger?: GlueTrigger;
    pinpoint_apns_voip_channel?: PinpointApnsChannel;
    waf_xss_match_set?: WafXSSMatchSet;
    keyspaces_table?: KeyspacesTable;
    pinpoint_baidu_channel?: PinpointBaiduChannel;
    s3_bucket_server_side_encryption_configuration?: S3BucketServerSideEncryptionConfigurationClass;
    transcribe_vocabulary?: TranscribeVocabulary;
    appconfig_configuration_profile?: ResourceAppconfigConfigurationProfile;
    emrcontainers_job_template?: EmrcontainersJobTemplate;
    route53_cidr_location?: Route53CIDRLocation;
    ebs_volume?: ResourceEbsVolume;
    athena_data_catalog?: KmsSecretClass;
    cloudhsm_v2_cluster?: ResourceCloudhsmV2Cluster;
    cloudsearch_domain?: CloudsearchDomain;
    dx_hosted_transit_virtual_interface_accepter?: DxHostedTransitVirtualInterfaceAccepter;
    api_gateway_authorizer?: ResourceAPIGatewayAuthorizer;
    dataexchange_data_set?: DataexchangeDataSet;
    vpclattice_auth_policy?: ResourceVpclatticeAuthPolicy;
    quicksight_data_set?: ResourceQuicksightDataSet;
    batch_compute_environment?: ResourceBatchComputeEnvironment;
    lightsail_database?: LightsailDatabase;
    s3control_bucket?: S3ControlBucket;
    cloudwatch_event_permission?: CloudwatchEventPermission;
    opensearch_inbound_connection_accepter?: OpensearchInboundConnectionAccepter;
    verifiedaccess_instance?: VerifiedaccessInstance;
    appautoscaling_target?: AppautoscalingTarget;
    pinpoint_apns_sandbox_channel?: PinpointApnsChannel;
    securityhub_account?: SecurityhubAccount;
    shield_drt_access_log_bucket_association?: ShieldDrtAccessLogBucketAssociation;
    redshift_cluster?: ResourceRedshiftCluster;
    volume_attachment?: VolumeAttachment;
    elasticache_subnet_group?: ElasticacheSubnetGroup;
    redshiftdata_statement?: RedshiftdataStatement;
    route53recoverycontrolconfig_routing_control?: Route53RecoverycontrolconfigRoutingControl;
    wafregional_rule?: WafRule;
    codestarnotifications_notification_rule?: CodestarnotificationsNotificationRule;
    elastic_beanstalk_environment?: ElasticBeanstalkEnvironment;
    neptune_cluster_parameter_group?: DBParameterGroupClass;
    sagemaker_code_repository?: SagemakerCodeRepository;
    networkfirewall_firewall_policy?: ResourceNetworkfirewallFirewallPolicy;
    sagemaker_pipeline?: SagemakerPipeline;
    cloudformation_stack?: ResourceCloudformationStack;
    quicksight_dashboard?: QuicksightDashboard;
    s3control_multi_region_access_point_policy?: S3ControlMultiRegionAccessPointPolicy;
    devicefarm_project?: DevicefarmProject;
    transcribe_language_model?: TranscribeLanguageModel;
    xray_sampling_rule?: XraySamplingRule;
    servicecatalog_organizations_access?: ServicecatalogOrganizationsAccess;
    backup_framework?: ResourceBackupFramework;
    sagemaker_workforce?: SagemakerWorkforce;
    account_alternate_contact?: AccountAlternateContact;
    apprunner_vpc_connector?: ApprunnerVpcConnector;
    devicefarm_network_profile?: DevicefarmNetworkProfile;
    lex_intent?: ResourceLexIntent;
    cloudformation_stack_set_instance?: CloudformationStackSetInstance;
    ec2_subnet_cidr_reservation?: Ec2SubnetCIDRReservation;
    s3_bucket_object_lock_configuration?: S3BucketObjectLockConfiguration;
    ce_cost_category?: ResourceCeCostCategory;
    ecs_service?: ResourceEcsService;
    s3outposts_endpoint?: S3OutpostsEndpoint;
    shield_drt_access_role_arn_association?: ShieldDrtAccessRoleArnAssociation;
    cloudwatch_log_destination?: CloudwatchLogDestination;
    ec2_transit_gateway_policy_table_association?: Ec2TransitGatewayPolicyTableAssociation;
    eip?: ResourceEip;
    pipes_pipe?: PipesPipe;
    sesv2_dedicated_ip_assignment?: Sesv2DedicatedIPAssignment;
    apigatewayv2_authorizer?: Apigatewayv2Authorizer;
    cloudwatch_log_data_protection_policy?: CloudwatchLogDataProtectionPolicy;
    vpclattice_service_network?: ResourceVpclatticeServiceNetwork;
    amplify_app?: AmplifyApp;
    cognito_user_in_group?: CognitoUserInGroup;
    ses_receipt_rule?: SesReceiptRule;
    apprunner_auto_scaling_configuration_version?: ApprunnerAutoScalingConfigurationVersion;
    backup_vault_lock_configuration?: BackupVaultLockConfiguration;
    cognito_identity_provider?: CognitoIdentityProvider;
    dx_gateway_association_proposal?: DxGatewayAssociationProposal;
    opensearchserverless_collection?: ResourceOpensearchserverlessCollection;
    autoscalingplans_scaling_plan?: AutoscalingplansScalingPlan;
    ec2_serial_console_access?: EnclaveOptionsClass;
    fsx_file_cache?: FsxFileCache;
    vpc_ipv4_cidr_block_association?: VpcIpv4CIDRBlockAssociation;
    workspaces_directory?: ResourceWorkspacesDirectory;
    cloudfront_realtime_log_config?: ResourceCloudfrontRealtimeLogConfig;
    msk_vpc_connection?: ResourceMskVpcConnection;
    route53_health_check?: Route53HealthCheck;
    route53recoverycontrolconfig_safety_rule?: Route53RecoverycontrolconfigSafetyRule;
    verifiedaccess_trust_provider?: VerifiedaccessTrustProvider;
    waf_rate_based_rule?: WafRateBasedRule;
    appconfig_extension_association?: AppconfigExtensionAssociation;
    waf_ipset?: PurpleWafIpset;
    cloudcontrolapi_resource?: ResourceCloudcontrolapiResource;
    devicefarm_test_grid_project?: DevicefarmTestGridProject;
    ses_domain_identity?: ResourceSesDomainIdentity;
    glue_ml_transform?: GlueMlTransform;
    macie2_custom_data_identifier?: Macie2CustomDataIdentifier;
    ses_identity_policy?: SesIdentityPolicy;
    simpledb_domain?: WafRateBasedRuleClass;
    efs_file_system_policy?: EFSFileSystemPolicy;
    ivs_channel?: IvsChannel;
    accessanalyzer_archive_rule?: AccessanalyzerArchiveRule;
    backup_global_settings?: BackupGlobalSettings;
    resourceexplorer2_index?: Resourceexplorer2Index;
    ses_receipt_rule_set?: SesReceiptRuleSet;
    fsx_ontap_storage_virtual_machine?: ResourceFsxOntapStorageVirtualMachine;
    inspector2_organization_configuration?: Inspector2OrganizationConfiguration;
    storagegateway_working_storage?: Storagegateway;
    timestreamwrite_database?: TimestreamwriteDatabase;
    ebs_snapshot_import?: EbsSnapshotImport;
    securityhub_insight?: SecurityhubInsight;
    ec2_transit_gateway_route_table?: ResourceEc2TransitGatewayRouteTable;
    ssm_maintenance_window?: SsmMaintenanceWindow;
    api_gateway_integration?: APIGatewayIntegration;
    lambda_function_event_invoke_config?: LambdaFunctionEventInvokeConfig;
    vpclattice_target_group?: VpclatticeTargetGroup;
    acmpca_permission?: AcmpcaPermission;
    cloudwatch_event_archive?: CloudwatchEventArchive;
    vpc_ipam_pool_cidr_allocation?: VpcIPAMPoolCIDRAllocation;
    imagebuilder_container_recipe?: ResourceImagebuilderContainerRecipe;
    opsworks_nodejs_app_layer?: OpsworksNodejsAppLayer;
    ses_domain_identity_verification?: SesDomainIdentityVerification;
    finspace_kx_cluster?: FinspaceKxCluster;
    glue_data_catalog_encryption_settings?: ResourceGlueDataCatalogEncryptionSettings;
    iot_thing?: IotThing;
    sagemaker_user_profile?: SagemakerUserProfile;
    macie2_organization_admin_account?: OrganizationAdminAccount;
    api_gateway_gateway_response?: APIGatewayGatewayResponse;
    redshiftserverless_snapshot?: RedshiftserverlessSnapshot;
    networkmanager_connect_peer?: KmsSecretClass;
    cloudwatch_composite_alarm?: CloudwatchCompositeAlarm;
    iam_account_alias?: ResourceIamAccountAlias;
    media_package_channel?: MediaPackageChannel;
    dynamodb_table_replica?: DynamodbTableReplicaClass;
    ec2_transit_gateway?: ResourceEc2TransitGateway;
    iam_user_login_profile?: IamUserLoginProfile;
    msk_configuration?: ResourceMskConfiguration;
    vpc_endpoint_connection_accepter?: VpcEndpointConnectionAccepter;
    apigatewayv2_deployment?: Apigatewayv2Deployment;
    cloudformation_stack_set?: CloudformationStackSet;
    dms_replication_instance?: ResourceDmsReplicationInstance;
    ssm_patch_group?: SsmPatchGroup;
    sagemaker_human_task_ui?: SagemakerHumanTaskUI;
    dms_replication_subnet_group?: ResourceDmsReplicationSubnetGroup;
    ec2_managed_prefix_list_entry?: Ec2ManagedPrefixListEntry;
    globalaccelerator_custom_routing_endpoint_group?: GlobalacceleratorCustomRoutingEndpointGroup;
    lightsail_static_ip?: LightsailStaticIP;
    rbin_rule?: RbinRule;
    route53_resolver_firewall_domain_list?: ResourceRoute53ResolverFirewallDomainList;
    imagebuilder_image_recipe?: ResourceImagebuilderImageRecipe;
    licensemanager_association?: LicensemanagerAssociation;
    codepipeline_webhook?: CodepipelineWebhook;
    emrserverless_application?: EmrserverlessApplication;
    glue_user_defined_function?: GlueUserDefinedFunction;
    iam_account_password_policy?: IamAccountPasswordPolicy;
    ram_principal_association?: RAMPrincipalAssociation;
    s3_object?: ResourceS3Object;
    subnet?: ResourceSubnet;
    auditmanager_framework?: AuditmanagerFramework;
    directory_service_region?: DirectoryServiceRegion;
    emr_managed_scaling_policy?: EmrManagedScalingPolicy;
    organizations_organization?: OrganizationsOrganization;
    config_configuration_recorder_status?: ConfigConfigurationRecorderStatus;
    fis_experiment_template?: FisExperimentTemplate;
    glue_connection?: ResourceGlueConnection;
    internet_gateway_attachment?: InternetGatewayAttachment;
    kendra_index?: ResourceKendraIndex;
    cloudwatch_event_bus_policy?: CloudwatchEventBusPolicy;
    iot_thing_group?: IotThingGroup;
    networkfirewall_logging_configuration?: NetworkfirewallLoggingConfiguration;
    redshiftserverless_namespace?: ResourceRedshiftserverlessNamespace;
    launch_configuration?: ResourceLaunchConfiguration;
    lex_bot?: ResourceLexBot;
    appsync_resolver?: AppsyncResolver;
    datasync_location_azure_blob?: DatasyncLocationAzureBlob;
    sfn_state_machine?: ResourceSfnStateMachine;
    datasync_location_fsx_ontap_file_system?: DatasyncLocationFsxOntapFileSystem;
    iam_service_specific_credential?: IamServiceSpecificCredential;
    identitystore_group?: ResourceIdentitystoreGroup;
    cloudfront_field_level_encryption_profile?: CloudfrontFieldLevelEncryptionProfile;
    guardduty_threatintelset?: GuarddutySet;
    pinpoint_sms_channel?: PinpointSMSChannel;
    redshift_snapshot_schedule_association?: RedshiftSnapshotScheduleAssociation;
    codecatalyst_project?: CodecatalystProject;
    codebuild_report_group?: CodebuildReportGroup;
    dlm_lifecycle_policy?: DlmLifecyclePolicy;
    guardduty_filter?: GuarddutyFilter;
    redshift_scheduled_action?: RedshiftScheduledAction;
    autoscaling_lifecycle_hook?: AutoscalingLifecycleHook;
    iam_group_membership?: IamGroupMembership;
    vpc_peering_connection_options?: VpcPeeringConnectionOptions;
    media_store_container_policy?: MediaStoreContainerPolicy;
    route53domains_registered_domain?: Route53DomainsRegisteredDomain;
    route53_hosted_zone_dnssec?: Route53HostedZoneDnssec;
    sagemaker_app?: SagemakerApp;
    cloudfront_function?: ResourceCloudfrontFunction;
    emr_cluster?: EmrCluster;
    oam_link?: ResourceOamLink;
    rds_cluster_parameter_group?: DBParameterGroupClass;
    autoscaling_schedule?: AutoscalingSchedule;
    ec2_client_vpn_authorization_rule?: Ec2ClientVPNAuthorizationRule;
    iam_group_policy?: IamGroupPolicy;
    ivschat_room?: IvschatRoom;
    kms_replica_key?: KmsReplicaKey;
    rum_app_monitor?: RumAppMonitor;
    appsync_domain_name?: AppsyncDomainName;
    chime_voice_connector_logging?: ChimeVoiceConnectorLogging;
    datasync_location_efs?: DatasyncLocationEFS;
    quicksight_ingestion?: QuicksightIngestion;
    vpc_ipam_pool?: ResourceVpcIPAMPool;
    redshift_snapshot_schedule?: RedshiftSnapshotSchedule;
    iam_user_policy?: IamUserPolicy;
    customer_gateway?: ResourceCustomerGateway;
    amplify_branch?: AmplifyBranch;
    sagemaker_image?: SagemakerImage;
    connect_bot_association?: ResourceConnectBotAssociation;
    connect_queue?: ResourceConnectQueue;
    autoscaling_notification?: AutoscalingNotification;
    cloudfront_origin_request_policy?: ResourceCloudfrontOriginRequestPolicy;
    globalaccelerator_endpoint_group?: GlobalacceleratorEndpointGroup;
    opsworks_memcached_layer?: OpsworksMemcachedLayer;
    auditmanager_assessment_report?: AuditmanagerAssessmentReport;
    opensearchserverless_access_policy?: OpensearchserverlessPolicy;
    pinpoint_adm_channel?: PinpointAdmChannel;
    s3_bucket_lifecycle_configuration?: S3BucketLifecycleConfiguration;
    sagemaker_space?: SagemakerSpace;
    vpc_ipam_pool_cidr?: VpcIPAMPoolCIDR;
    cognito_user?: CognitoUser;
    config_delivery_channel?: ConfigDeliveryChannel;
    neptune_cluster_endpoint?: NeptuneClusterEndpoint;
    chime_voice_connector_origination?: ChimeVoiceConnectorOrigination;
    load_balancer_policy?: LoadBalancerPolicy;
    quicksight_group_membership?: QuicksightGroupMembership;
    acmpca_certificate_authority_certificate?: AcmpcaCertificateAuthorityCertificate;
    chime_voice_connector_group?: ChimeVoiceConnectorGroup;
    vpc_peering_connection?: ResourceVpcPeeringConnection;
    lightsail_lb_https_redirection_policy?: LightsailLBHTTPSRedirectionPolicy;
    codebuild_project?: CodebuildProject;
    emr_studio_session_mapping?: EmrStudioSessionMapping;
    s3_bucket_ownership_controls?: S3BucketOwnershipControls;
    s3_bucket_accelerate_configuration?: S3BucketAccelerateConfiguration;
    schemas_registry?: SchemasRegistry;
    api_gateway_method_response?: APIGatewayMethodResponse;
    connect_instance_storage_config?: ResourceConnectInstanceStorageConfig;
    directory_service_trust?: DirectoryServiceTrust;
    redshift_event_subscription?: RedshiftEventSubscription;
    route53_vpc_association_authorization?: Route53VpcAssociationAuthorization;
    placement_group?: PlacementGroup;
    connect_contact_flow?: ResourceConnectContactFlow;
    sqs_queue_policy?: SqsQueuePolicy;
    rolesanywhere_trust_anchor?: RolesanywhereTrustAnchor;
    amplify_domain_association?: AmplifyDomainAssociation;
    ce_anomaly_subscription?: CeAnomalySubscription;
    cloudwatch_query_definition?: CloudwatchQueryDefinition;
    networkmanager_connect_attachment?: KmsSecretClass;
    quicksight_namespace?: QuicksightNamespace;
    servicecatalog_budget_resource_association?: ServicecatalogBudgetResourceAssociation;
    storagegateway_tape_pool?: StoragegatewayTapePool;
    vpc_ipam_resource_discovery_association?: VpcIPAMResourceDiscoveryAssociation;
    neptune_global_cluster?: NeptuneGlobalCluster;
    opensearch_package?: OpensearchPackage;
    ram_resource_share?: ResourceRAMResourceShare;
    s3control_multi_region_access_point?: ResourceS3ControlMultiRegionAccessPoint;
    datasync_location_hdfs?: DatasyncLocationHdfs;
    elasticsearch_domain?: ResourceElasticsearchDomain;
    wafregional_xss_match_set?: WafregionalXSSMatchSet;
    apigatewayv2_route_response?: Apigatewayv2RouteResponse;
    cloudhsm_v2_hsm?: CloudhsmV2HSM;
    dynamodb_tag?: Tag;
    ec2_transit_gateway_multicast_group_source?: Ec2TransitGatewayMulticastGroup;
    route53_key_signing_key?: Route53KeySigningKey;
    datapipeline_pipeline_definition?: ResourceDatapipelinePipelineDefinition;
    db_proxy_default_target_group?: DBProxyDefaultTargetGroup;
    memorydb_cluster?: ResourceMemorydbCluster;
    quicksight_user?: ResourceQuicksightUser;
    waf_geo_match_set?: WafGeoMatchSet;
    s3_bucket_analytics_configuration?: S3BucketAnalyticsConfiguration;
    sesv2_email_identity_mail_from_attributes?: Sesv2EmailIdentityMailFromAttributes;
    api_gateway_client_certificate?: APIGatewayClientCertificate;
    appconfig_deployment?: AppconfigDeployment;
    ec2_transit_gateway_peering_attachment_accepter?: Ec2TransitGatewayPeeringAttachmentAccepter;
    sesv2_configuration_set?: ResourceSesv2ConfigurationSet;
    acmpca_certificate_authority?: ResourceAcmpcaCertificateAuthority;
    cloudwatch_log_subscription_filter?: CloudwatchLogSubscriptionFilter;
    ivs_recording_configuration?: IvsRecordingConfiguration;
    lb_target_group?: LBTargetGroup;
    route53_resolver_dnssec_config?: Route53ResolverDnssecConfig;
    appstream_stack?: AppstreamStack;
    iam_saml_provider?: ResourceIamSamlProvider;
    key_pair?: ResourceKeyPair;
    sagemaker_notebook_instance?: SagemakerNotebookInstance;
    connect_instance?: ResourceConnectInstance;
    glue_crawler?: GlueCrawler;
    instance?: ResourceInstance;
    network_interface?: ResourceNetworkInterface;
    ec2_transit_gateway_vpc_attachment_accepter?: Ec2TransitGatewayVpcAttachmentAccepter;
    networkfirewall_resource_policy?: ResourcePolicy;
    codebuild_resource_policy?: ResourcePolicy;
    dms_s3_endpoint?: DmsS3Endpoint;
    glue_partition_index?: GluePartitionIndex;
    redshift_subnet_group?: RedshiftSubnetGroup;
    apprunner_custom_domain_association?: ApprunnerCustomDomainAssociation;
    db_instance?: ResourceDBInstance;
    directory_service_log_subscription?: DirectoryServiceLogSubscription;
    redshift_cluster_iam_roles?: RedshiftClusterIamRoles;
    opsworks_ganglia_layer?: OpsworksGangliaLayer;
    wafregional_regex_pattern_set?: WafregionalRegexPatternSet;
    budgets_budget?: ResourceBudgetsBudget;
    ebs_default_kms_key?: ResourceEbsDefaultKmsKey;
    iot_thing_group_membership?: IotThingGroupMembership;
    lambda_layer_version_permission?: LambdaLayerVersionPermission;
    ec2_transit_gateway_connect?: ResourceEc2TransitGatewayConnect;
    lightsail_lb_certificate?: LightsailLBCertificate;
    ssm_patch_baseline?: ResourceSsmPatchBaseline;
    dms_replication_task?: ResourceDmsReplicationTask;
    identitystore_user?: ResourceIdentitystoreUser;
    imagebuilder_infrastructure_configuration?: ResourceImagebuilderInfrastructureConfiguration;
    lakeformation_resource_lf_tags?: LakeformationResourceLFTags;
    account_primary_contact?: AccountPrimaryContact;
    opsworks_haproxy_layer?: OpsworksHaproxyLayer;
    athena_database?: AthenaDatabase;
    eks_fargate_profile?: EksFargateProfile;
    servicecatalog_principal_portfolio_association?: ServicecatalogPrincipalPortfolioAssociation;
    ses_configuration_set?: SesConfigurationSet;
    synthetics_group_association?: SyntheticsGroupAssociation;
    api_gateway_account?: APIGatewayAccount;
    cur_report_definition?: ResourceCurReportDefinition;
    s3_bucket_intelligent_tiering_configuration?: S3BucketIntelligentTieringConfiguration;
    serverlessapplicationrepository_cloudformation_stack?: ServerlessapplicationrepositoryCloudformationStack;
    lb_listener_rule?: LBListenerRule;
    lightsail_bucket?: LightsailBucket;
    redshift_endpoint_authorization?: RedshiftEndpointAuthorization;
    dx_hosted_private_virtual_interface?: DxHostedVirtualInterface;
    location_tracker?: ResourceLocationTracker;
    vpclattice_listener?: ResourceVpclatticeListener;
    guardduty_organization_configuration?: GuarddutyOrganizationConfiguration;
    waf_rule?: WafRule;
    glue_schema?: GlueSchema;
    iam_role_policy_attachment?: IamRolePolicyAttachment;
    mwaa_environment?: MwaaEnvironment;
    organizations_policy_attachment?: OrganizationsPolicyAttachment;
    vpc_security_group_ingress_rule?: VpcSecurityGroupIngressRule;
    appstream_user?: AppstreamUser;
    flow_log?: FlowLog;
    iam_group?: ResourceIamGroup;
    lightsail_lb_attachment?: LightsailLBAttachment;
    opsworks_user_profile?: OpsworksUserProfile;
    efs_mount_target?: ResourceEFSMountTarget;
    eks_cluster?: ResourceEksCluster;
    emr_instance_group?: EmrInstanceGroup;
    lightsail_key_pair?: LightsailKeyPair;
    dx_bgp_peer?: DxBGPPeer;
    spot_datafeed_subscription?: SpotDatafeedSubscription;
    vpc_network_performance_metric_subscription?: VpcNetworkPerformanceMetricSubscription;
    codeartifact_domain?: CodeartifactDomain;
    location_route_calculator?: ResourceLocationRouteCalculator;
    neptune_event_subscription?: NeptuneEventSubscription;
    service_discovery_service?: ResourceServiceDiscoveryService;
    ami_launch_permission?: AmiLaunchPermission;
    iot_logging_options?: IotLoggingOptions;
    neptune_cluster?: NeptuneCluster;
    guardduty_publishing_destination?: GuarddutyPublishingDestination;
    s3_bucket_public_access_block?: S3BucketPublicAccessBlock;
    amplify_backend_environment?: AmplifyBackendEnvironment;
    cloudwatch_event_target?: CloudwatchEventTarget;
    codecatalyst_source_repository?: CodecatalystSourceRepository;
    ecrpublic_repository?: EcrpublicRepository;
    iam_role_policy?: IamRolePolicy;
    identitystore_group_membership?: IdentitystoreGroupMembership;
    backup_region_settings?: BackupRegionSettings;
    directory_service_shared_directory?: DirectoryServiceSharedDirectory;
    transfer_access?: TransferAccess;
    dynamodb_table_item?: ResourceDynamodbTableItem;
    apigatewayv2_domain_name?: Apigatewayv2DomainName;
    default_vpc_dhcp_options?: DefaultVpcDHCPOptions;
    xray_group?: XrayGroup;
    detective_invitation_accepter?: DetectiveInvitationAccepter;
    ecs_task_definition?: ResourceEcsTaskDefinition;
    elasticsearch_domain_policy?: SearchDomainPolicy;
    gamelift_build?: GameliftBuild;
    sesv2_email_identity_feedback_attributes?: Sesv2EmailIdentityFeedbackAttributes;
    db_proxy?: ResourceDBProxy;
    kinesisanalyticsv2_application_snapshot?: Kinesisanalyticsv2ApplicationSnapshot;
    connect_user?: ResourceConnectUser;
    transfer_connector?: TransferConnector;
    licensemanager_grant_accepter?: LicensemanagerGrantAccepter;
    acm_certificate_validation?: ACMCertificateValidation;
    api_gateway_model?: APIGatewayModel;
    ec2_transit_gateway_vpc_attachment?: ResourceEc2TransitGatewayVpcAttachment;
    ecr_repository_policy?: EcrPolicy;
    kms_external_key?: KmsExternalKey;
    docdb_cluster_snapshot?: DocdbClusterSnapshot;
    cloudfront_monitoring_subscription?: CloudfrontMonitoringSubscription;
    db_option_group?: DBOptionGroup;
    elastic_beanstalk_application_version?: ElasticBeanstalkApplicationVersion;
    finspace_kx_user?: FinspaceKxUser;
    iam_security_token_service_preferences?: IamSecurityTokenServicePreferences;
    lb_cookie_stickiness_policy?: LBCookieStickinessPolicy;
    vpc_ipv6_cidr_block_association?: VpcIpv6CIDRBlockAssociation;
    config_configuration_aggregator?: ConfigConfigurationAggregator;
    athena_workgroup?: AthenaWorkgroup;
    quicksight_group?: ResourceQuicksightGroup;
    chime_voice_connector_streaming?: ChimeVoiceConnectorStreaming;
    dx_hosted_public_virtual_interface?: DxHostedPublicVirtualInterface;
    ec2_network_insights_path?: ResourceEc2NetworkInsightsPath;
    iam_user_policy_attachment?: IamUserPolicyAttachment;
    nat_gateway?: ResourceNatGateway;
    spot_fleet_request?: SpotFleetRequest;
    acm_certificate?: ResourceACMCertificate;
    inspector2_enabler?: Inspector2Enabler;
    ec2_transit_gateway_connect_peer?: ResourceEc2TransitGatewayConnectPeer;
    sagemaker_studio_lifecycle_config?: SagemakerStudioLifecycleConfig;
    glue_job?: GlueJob;
    route53recoveryreadiness_recovery_group?: Route53RecoveryreadinessRecoveryGroup;
    sagemaker_model_package_group_policy?: SagemakerModelPackageGroupPolicy;
    docdb_cluster?: DocdbCluster;
    route53_resolver_endpoint?: ResourceRoute53ResolverEndpoint;
    sesv2_dedicated_ip_pool?: ResourceSesv2DedicatedIPPool;
    auditmanager_assessment_delegation?: AuditmanagerAssessmentDelegation;
    sns_topic?: ResourceSnsTopic;
    backup_vault_notifications?: BackupVaultNotifications;
    organizations_policy?: ResourceOrganizationsPolicy;
    prometheus_alert_manager_definition?: PrometheusAlertManagerDefinition;
    sagemaker_flow_definition?: SagemakerFlowDefinition;
    swf_domain?: SWFDomain;
    api_gateway_method_settings?: APIGatewayMethodSettings;
    comprehend_entity_recognizer?: ComprehendEntityRecognizer;
    connect_user_hierarchy_group?: ResourceConnectUserHierarchyGroup;
    default_security_group?: DefaultSecurityGroup;
    lambda_function?: ResourceLambdaFunction;
    lex_bot_alias?: ResourceLexBotAlias;
    medialive_multiplex_program?: MedialiveMultiplexProgram;
    appconfig_environment?: ResourceAppconfigEnvironment;
    wafregional_rule_group?: WafregionalRuleGroup;
    waf_sql_injection_match_set?: WafSQLInjectionMatchSet;
    fsx_openzfs_file_system?: FsxOpenzfsFileSystem;
    imagebuilder_image_pipeline?: ResourceImagebuilderImagePipeline;
    opensearchserverless_security_config?: ResourceOpensearchserverlessSecurityConfig;
    lambda_layer_version?: ResourceLambdaLayerVersion;
    opsworks_instance?: OpsworksInstance;
    medialive_input?: MedialiveInput;
    pinpoint_event_stream?: PinpointEventStream;
    auditmanager_account_registration?: AuditmanagerAccountRegistration;
    codegurureviewer_repository_association?: CodegurureviewerRepositoryAssociation;
    ec2_transit_gateway_route?: Ec2TransitGatewayRoute;
    ecs_capacity_provider?: EcsCapacityProvider;
    quicksight_folder_membership?: QuicksightFolderMembership;
    rds_reserved_instance?: RDSReservedInstance;
    servicecatalog_provisioning_artifact?: ServicecatalogProvisioningArtifact;
    ssm_resource_data_sync?: SsmResourceDataSync;
    pinpoint_apns_voip_sandbox_channel?: PinpointApnsChannel;
    redshift_hsm_client_certificate?: RedshiftHSMClientCertificate;
    sagemaker_servicecatalog_portfolio_status?: SagemakerServicecatalogPortfolioStatus;
    ssmcontacts_contact?: KmsSecretClass;
    ec2_transit_gateway_multicast_domain?: ResourceEc2TransitGatewayMulticastDomain;
    redshiftserverless_usage_limit?: RedshiftserverlessUsageLimit;
    location_tracker_association?: LocationTrackerAssociation;
    xray_encryption_config?: XrayEncryptionConfig;
    config_organization_managed_rule?: ConfigOrganizationManagedRule;
    vpc_ipam_preview_next_cidr?: VpcIPAMPreviewNextCIDR;
    config_aggregate_authorization?: ConfigAggregateAuthorization;
    kinesis_analytics_application?: KinesisAnalyticsApplication;
    oam_sink?: ResourceOamSink;
    vpc_security_group_egress_rule?: VpcSecurityGroupEgressRule;
    keyspaces_keyspace?: KeyspacesKeyspace;
    securityhub_action_target?: SecurityhubActionTarget;
    cloudfront_origin_access_control?: CloudfrontOriginAccessControl;
    datasync_agent?: DatasyncAgent;
    kendra_thesaurus?: ResourceKendraThesaurus;
    kms_key?: ResourceKmsKey;
    autoscaling_traffic_source_attachment?: KmsSecretClass;
    datasync_location_object_storage?: DatasyncLocationObjectStorage;
    ec2_transit_gateway_peering_attachment?: ResourceEc2TransitGatewayPeeringAttachment;
    appsync_api_cache?: AppsyncAPICache;
    connect_quick_connect?: ResourceConnectQuickConnect;
    docdb_cluster_instance?: DocdbClusterInstance;
    lb_target_group_attachment?: LBTargetGroupAttachment;
    wafregional_rate_based_rule?: WafRateBasedRule;
    dynamodb_table?: ResourceDynamodbTable;
    imagebuilder_distribution_configuration?: ResourceImagebuilderDistributionConfiguration;
    network_acl_association?: NetworkACLAssociation;
    transfer_server?: ResourceTransferServer;
    cognito_identity_pool_roles_attachment?: CognitoIdentityPoolRolesAttachment;
    datasync_location_smb?: DatasyncLocationSMB;
    networkmanager_transit_gateway_route_table_attachment?: NetworkmanagerTransitGatewayRouteTableAttachment;
    ses_receipt_filter?: SesReceiptFilter;
    acmpca_certificate?: ResourceAcmpcaCertificate;
    appautoscaling_policy?: AppautoscalingPolicy;
    ec2_local_gateway_route_table_vpc_association?: Ec2LocalGatewayRouteTableVpcAssociation;
    api_gateway_documentation_part?: APIGatewayDocumentationPart;
    medialive_channel?: MedialiveChannel;
    quicksight_iam_policy_assignment?: QuicksightIamPolicyAssignment;
    sns_platform_application?: SnsPlatformApplication;
    cloud9_environment_membership?: Cloud9EnvironmentMembership;
    cloudwatch_metric_alarm?: CloudwatchMetricAlarm;
    ecr_lifecycle_policy?: EcrPolicy;
    ssm_document?: ResourceSsmDocument;
    ssoadmin_customer_managed_policy_attachment?: SsoadminCustomerManagedPolicyAttachment;
    wafregional_size_constraint_set?: WafregionalSizeConstraintSet;
    networkmanager_vpc_attachment?: NetworkmanagerVpcAttachment;
    quicksight_theme?: ResourceQuicksightTheme;
    lightsail_disk?: LightsailDisk;
    securityhub_invite_accepter?: SecurityhubInviteAccepter;
    api_gateway_method?: APIGatewayMethod;
    vpc_ipam_resource_discovery?: VpcIPAMResourceDiscovery;
    rds_cluster?: ResourceRDSCluster;
    datasync_task?: DatasyncTask;
    networkmanager_customer_gateway_association?: NetworkmanagerCustomerGatewayAssociation;
    dms_certificate?: ResourceDmsCertificate;
    chime_voice_connector_termination_credentials?: ChimeVoiceConnectorTerminationCredentials;
    cloudwatch_event_connection?: ResourceCloudwatchEventConnection;
    iam_openid_connect_provider?: ResourceIamOpenidConnectProvider;
    ec2_transit_gateway_route_table_propagation?: Ec2TransitGatewayRouteTablePropagation;
    api_gateway_usage_plan_key?: APIGatewayUsagePlanKey;
    cloudfront_cache_policy?: ResourceCloudfrontCachePolicy;
    opsworks_java_app_layer?: OpsworksJavaAppLayer;
    servicequotas_service_quota?: ResourceServicequotasServiceQuota;
    wafv2_regex_pattern_set?: ResourceWafv2RegexPatternSet;
    apigatewayv2_integration_response?: Apigatewayv2IntegrationResponse;
    efs_file_system?: ResourceEFSFileSystem;
    opensearch_package_association?: OpensearchPackageAssociation;
    datasync_location_s3?: DatasyncLocationS3;
    mskconnect_worker_configuration?: ResourceMskconnectWorkerConfiguration;
    ami_from_instance?: AmiFromInstance;
    vpn_gateway_route_propagation?: VPNGatewayRoutePropagation;
    guardduty_invite_accepter?: GuarddutyInviteAccepter;
    rds_cluster_activity_stream?: RDSClusterActivityStream;
    vpn_connection?: VPNConnection;
    ebs_snapshot?: ResourceEbsSnapshot;
    medialive_multiplex?: MedialiveMultiplex;
    dax_parameter_group?: DaxParameterGroup;
    iam_service_linked_role?: IamServiceLinkedRole;
    ami?: ResourceAmi;
    networkmanager_global_network?: ResourceNetworkmanagerGlobalNetwork;
    autoscaling_group?: KmsSecretClass;
    chime_voice_connector?: ChimeVoiceConnector;
    fsx_backup?: FsxBackup;
    opensearchserverless_vpc_endpoint?: ResourceOpensearchserverlessVpcEndpoint;
    rds_cluster_role_association?: RDSClusterRoleAssociation;
    s3_bucket?: ResourceS3Bucket;
    config_remediation_configuration?: ConfigRemediationConfiguration;
    fsx_lustre_file_system?: FsxLustreFileSystem;
    lb_ssl_negotiation_policy?: LBSSLNegotiationPolicy;
    ram_sharing_with_organization?: RAMSharingWithOrganization;
    waf_rule_group?: WafRuleGroup;
    dax_subnet_group?: DaxSubnetGroup;
    security_group_rule?: SecurityGroupRule;
    main_route_table_association?: MainRouteTableAssociation;
    vpc_endpoint_route_table_association?: VpcEndpointRouteTableAssociation;
    api_gateway_vpc_link?: ResourceAPIGatewayVpcLink;
    msk_serverless_cluster?: MskServerlessCluster;
    quicksight_folder?: QuicksightFolder;
    appintegrations_event_integration?: ResourceAppintegrationsEventIntegration;
    cloudfront_continuous_deployment_policy?: CloudfrontContinuousDeploymentPolicy;
    storagegateway_cached_iscsi_volume?: StoragegatewayCachedIscsiVolume;
    vpclattice_service?: ResourceVpclatticeService;
    kms_replica_external_key?: KmsReplicaExternalKey;
    ecr_repository?: ResourceEcrRepository;
    networkmanager_transit_gateway_registration?: NetworkmanagerTransitGatewayRegistration;
    storagegateway_gateway?: StoragegatewayGateway;
    rds_global_cluster?: RDSGlobalCluster;
    ssmcontacts_contact_channel?: KmsSecretClass;
    default_subnet?: DefaultSubnet;
    route53_resolver_rule?: ResourceRoute53ResolverRule;
    db_parameter_group?: DBParameterGroupClass;
    db_proxy_target?: DBProxyTarget;
    wafregional_byte_match_set?: WafregionalByteMatchSet;
    default_network_acl?: DefaultNetworkACL;
    ecs_cluster?: ResourceEcsCluster;
    kms_ciphertext?: ResourceKmsCiphertext;
    redshiftserverless_workgroup?: ResourceRedshiftserverlessWorkgroup;
    backup_vault_policy?: BackupVaultPolicy;
    codedeploy_deployment_group?: CodedeployDeploymentGroup;
    cloudwatch_log_destination_policy?: CloudwatchLogDestinationPolicy;
    db_snapshot_copy?: DBSnapshotCopy;
    resourceexplorer2_view?: Resourceexplorer2View;
    api_gateway_stage?: APIGatewayStage;
    redshift_parameter_group?: ElasticacheParameterGroupClass;
    sagemaker_image_version?: SagemakerImageVersion;
    wafregional_web_acl_association?: WafregionalWebACLAssociation;
    fms_policy?: FmsPolicy;
    api_gateway_request_validator?: APIGatewayRequestValidator;
    eks_identity_provider_config?: EksIdentityProviderConfig;
    emr_studio?: EmrStudio;
    organizations_resource_policy?: OrganizationsResourcePolicy;
    elasticache_replication_group?: ResourceElasticacheReplicationGroup;
    route53_traffic_policy_instance?: Route53TrafficPolicyInstance;
    opsworks_ecs_cluster_layer?: OpsworksEcsClusterLayer;
    organizations_delegated_administrator?: OrganizationsDelegatedAdministrator;
    route53_resolver_rule_association?: Route53ResolverRuleAssociation;
    ssoadmin_permission_set?: ResourceSsoadminPermissionSet;
    iam_signing_certificate?: IamSigningCertificate;
    inspector_resource_group?: InspectorResourceGroup;
    lakeformation_permissions?: ResourceLakeformationPermissions;
    redshiftserverless_resource_policy?: ResourcePolicy;
    s3_bucket_cors_configuration?: S3BucketCorsConfiguration;
    storagegateway_cache?: Storagegateway;
    redshift_endpoint_access?: RedshiftEndpointAccess;
    iam_user?: ResourceIamUser;
    lakeformation_data_lake_settings?: ResourceLakeformationDataLakeSettings;
    opsworks_application?: OpsworksApplication;
    iot_certificate?: IotCertificate;
    lightsail_domain_entry?: LightsailDomainEntry;
    appstream_image_builder?: AppstreamImageBuilder;
    sagemaker_data_quality_job_definition?: SagemakerDataQualityJobDefinition;
    fsx_openzfs_volume?: FsxOpenzfsVolume;
    iam_virtual_mfa_device?: IamVirtualMfaDevice;
    s3_bucket_replication_configuration?: S3BucketReplicationConfigurationClass;
    auditmanager_assessment?: AuditmanagerAssessment;
    autoscaling_group_tag?: AutoscalingGroupTag;
    route?: ResourceRoute;
    ec2_capacity_reservation?: Ec2CapacityReservation;
    gamelift_alias?: GameliftAlias;
    gamelift_fleet?: GameliftFleet;
    secretsmanager_secret_policy?: SecretsmanagerSecretPolicy;
    db_subnet_group?: ResourceDBSubnetGroup;
    kendra_query_suggestions_block_list?: ResourceKendraQuerySuggestionsBlockList;
    network_interface_attachment?: NetworkInterfaceAttachment;
    sagemaker_domain?: SagemakerDomain;
    appflow_connector_profile?: AppflowConnectorProfile;
    ec2_transit_gateway_route_table_association?: Ec2TransitGatewayRouteTableAssociation;
    grafana_role_association?: GrafanaRoleAssociation;
    s3_bucket_logging?: S3BucketLoggingClass;
    connect_user_hierarchy_structure?: ResourceConnectUserHierarchyStructure;
    apigatewayv2_model?: Apigatewayv2Model;
    transfer_certificate?: TransferCertificate;
    ec2_client_vpn_route?: Ec2ClientVPNRoute;
    ec2_transit_gateway_multicast_domain_association?: Ec2TransitGatewayMulticastDomainAssociation;
    ivschat_logging_configuration?: IvschatLoggingConfiguration;
    lightsail_certificate?: LightsailCertificate;
    securityhub_organization_configuration?: SecurityhubOrganizationConfiguration;
    vpc_endpoint_service_allowed_principal?: VpcEndpointServiceAllowedPrincipal;
    iot_policy_attachment?: IotPolicyAttachment;
    shield_application_layer_automatic_response?: ShieldApplicationLayerAutomaticResponse;
    dms_replication_config?: DmsReplicationConfig;
    elb?: Elb;
    ce_anomaly_monitor?: CeAnomalyMonitor;
    api_gateway_integration_response?: APIGatewayIntegrationResponse;
    ecs_task_set?: EcsTaskSet;
    dynamodb_kinesis_streaming_destination?: DynamodbKinesisStreamingDestination;
    codepipeline_custom_action_type?: CodepipelineCustomActionType;
    elasticache_user_group?: ElasticacheUserGroup;
    lightsail_disk_attachment?: LightsailDiskAttachment;
    ssmcontacts_plan?: ResourceSsmcontactsPlan;
    api_gateway_domain_name?: ResourceAPIGatewayDomainName;
    cloudwatch_log_resource_policy?: CloudwatchLogResourcePolicy;
    sqs_queue_redrive_allow_policy?: SqsQueueRedriveAllowPolicy;
    appflow_flow?: AppflowFlow;
    cloudsearch_domain_service_access_policy?: CloudsearchDomainServiceAccessPolicy;
    security_group?: ResourceSecurityGroup;
    wafregional_sql_injection_match_set?: WafregionalSQLInjectionMatchSet;
    iot_thing_principal_attachment?: IotThingPrincipalAttachment;
    macie2_member?: Macie2Member;
    qldb_stream?: QldbStream;
    connect_contact_flow_module?: ResourceConnectContactFlowModule;
    eip_association?: EipAssociation;
    iot_topic_rule?: IotTopicRule;
    networkmanager_core_network_policy_attachment?: NetworkmanagerCoreNetworkPolicyAttachment;
    macie2_classification_job?: Macie2ClassificationJob;
    fsx_windows_file_system?: ResourceFsxWindowsFileSystem;
    vpc_endpoint_service?: ResourceVpcEndpointService;
    codecommit_approval_rule_template?: ResourceCodecommitApprovalRuleTemplate;
    load_balancer_backend_server_policy?: LoadBalancerBackendServerPolicy;
    servicecatalog_provisioned_product?: ServicecatalogProvisionedProduct;
    dx_transit_virtual_interface?: DxTransitVirtualInterface;
    ecrpublic_repository_policy?: EcrpublicRepositoryPolicy;
    shield_protection?: ShieldProtection;
    network_interface_sg_attachment?: NetworkInterfaceSgAttachment;
    ec2_traffic_mirror_session?: Ec2TrafficMirrorSession;
    codedeploy_app?: CodedeployApp;
    wafregional_geo_match_set?: WafregionalGeoMatchSet;
    iam_instance_profile?: ResourceIamInstanceProfile;
    quicksight_template?: QuicksightTemplate;
    appautoscaling_scheduled_action?: AppautoscalingScheduledAction;
    iam_policy_attachment?: IamPolicyAttachment;
    route53_resolver_firewall_config?: ResourceRoute53ResolverFirewallConfig;
    ssmincidents_response_plan?: ResourceSsmincidentsResponsePlan;
    ssm_maintenance_window_task?: SsmMaintenanceWindowTask;
    ses_active_receipt_rule_set?: SesReceiptRuleSet;
    vpc_endpoint_security_group_association?: VpcEndpointSecurityGroupAssociation;
    s3_bucket_inventory?: S3BucketInventory;
    workspaces_connection_alias?: WorkspacesConnectionAlias;
    quicksight_account_subscription?: QuicksightAccountSubscription;
    glue_catalog_database?: GlueCatalogDatabase;
    networkmanager_connection?: ResourceNetworkmanagerConnection;
    vpclattice_service_network_vpc_association?: VpclatticeServiceNetworkVpcAssociation;
    waf_regex_pattern_set?: WafRegexPatternSet;
    vpn_gateway?: ResourceVPNGateway;
    pinpoint_apns_channel?: PinpointApnsChannel;
    auditmanager_framework_share?: AuditmanagerFrameworkShare;
    autoscaling_policy?: AutoscalingPolicy;
    vpn_gateway_attachment?: VPNGatewayAttachment;
    vpc?: ResourceVpc;
    apigatewayv2_vpc_link?: Apigatewayv2VpcLink;
    config_organization_conformance_pack?: ConfigOrganizationConformancePack;
    memorydb_subnet_group?: ResourceMemorydbSubnetGroup;
    opsworks_stack?: OpsworksStack;
    pinpoint_email_channel?: PinpointEmailChannel;
    cloudwatch_event_endpoint?: CloudwatchEventEndpoint;
    eks_addon?: ResourceEksAddon;
    fsx_ontap_volume?: FsxOntapVolume;
    iot_authorizer?: IotAuthorizer;
    guardduty_detector?: ResourceGuarddutyDetector;
    signer_signing_profile_permission?: SignerSigningProfilePermission;
    route53recoverycontrolconfig_control_panel?: Route53RecoverycontrolconfigControlPanel;
    vpc_dhcp_options?: ResourceVpcDHCPOptions;
    apigatewayv2_route?: Apigatewayv2Route;
    appmesh_virtual_node?: AppmeshVirtualNode;
    networkmanager_attachment_accepter?: KmsSecretClass;
    route53_query_log?: Route53QueryLog;
    codeartifact_repository?: CodeartifactRepository;
    opsworks_static_web_layer?: OpsworksStaticWebLayer;
    cloudtrail_event_data_store?: KmsSecretClass;
    glue_partition?: GluePartition;
    app_cookie_stickiness_policy?: AppCookieStickinessPolicy;
    media_store_container?: MediaStoreContainer;
    ssmincidents_replication_set?: ResourceSsmincidentsReplicationSet;
    appsync_graphql_api?: AppsyncGraphqlAPI;
    mskconnect_connector?: ResourceMskconnectConnector;
    opsworks_rails_app_layer?: OpsworksRailsAppLayer;
    schemas_discoverer?: SchemasDiscoverer;
    chime_voice_connector_termination?: ChimeVoiceConnectorTermination;
    docdb_global_cluster?: DocdbGlobalCluster;
    dx_hosted_transit_virtual_interface?: DxHostedVirtualInterface;
    quicksight_template_alias?: QuicksightTemplateAlias;
    kinesis_stream_consumer?: ResourceKinesisStreamConsumer;
    finspace_kx_database?: FinspaceKxDatabase;
    evidently_project?: EvidentlyProject;
    securityhub_standards_subscription?: SecurityhubStandardsSubscription;
    apprunner_service?: ApprunnerService;
    lightsail_static_ip_attachment?: LightsailStaticIPAttachment;
    route53_traffic_policy?: Route53TrafficPolicy;
    ecs_cluster_capacity_providers?: EcsClusterCapacityProviders;
    quicksight_refresh_schedule?: QuicksightRefreshSchedule;
    acmpca_policy?: Policy;
    appmesh_gateway_route?: ResourceAppmeshGatewayRoute;
    ec2_tag?: Ec2Tag;
    finspace_kx_environment?: FinspaceKxEnvironment;
    licensemanager_license_configuration?: LicensemanagerLicenseConfiguration;
    db_event_subscription?: DBEventSubscription;
    directory_service_directory?: ResourceDirectoryServiceDirectory;
    networkmanager_core_network?: NetworkmanagerCoreNetwork;
    spot_instance_request?: SpotInstanceRequest;
    transcribe_medical_vocabulary?: TranscribeMedicalVocabulary;
    kinesis_firehose_delivery_stream?: KinesisFirehoseDeliveryStream;
    ses_domain_dkim?: SesDomainDKIM;
    sns_sms_preferences?: SnsSMSPreferences;
    backup_plan?: ResourceBackupPlan;
    route53_cidr_collection?: Route53CIDRCollection;
    ec2_local_gateway_route?: Ec2LocalGatewayRoute;
    imagebuilder_image?: ResourceImagebuilderImage;
    redshift_partner?: RedshiftPartner;
    s3_account_public_access_block?: S3AccountPublicAccessBlock;
    api_gateway_api_key?: ResourceAPIGatewayAPIKey;
    cloudwatch_event_api_destination?: CloudwatchEventAPIDestination;
    elasticache_parameter_group?: ElasticacheParameterGroupClass;
    ec2_instance_connect_endpoint?: Ec2InstanceConnectEndpoint;
    fsx_openzfs_snapshot?: ResourceFsxOpenzfsSnapshot;
    datasync_location_nfs?: DatasyncLocationNFS;
    devicefarm_device_pool?: DevicefarmDevicePool;
    mq_configuration?: MqConfiguration;
    waf_web_acl?: WafWebACL;
    datasync_location_fsx_windows_file_system?: DatasyncLocationFsxWindowsFileSystem;
    cloudwatch_event_bus?: ResourceCloudwatchEventBus;
    efs_access_point?: ResourceEFSAccessPoint;
    kendra_faq?: ResourceKendraFAQ;
    macie2_account?: Macie2Account;
    sagemaker_feature_group?: SagemakerFeatureGroup;
    sfn_activity?: ResourceSfnActivity;
    opensearchserverless_security_policy?: OpensearchserverlessPolicy;
    appstream_directory_config?: AppstreamDirectoryConfig;
    elb_attachment?: ElbAttachment;
    evidently_feature?: EvidentlyFeature;
    globalaccelerator_listener?: GlobalacceleratorListener;
    sqs_queue?: ResourceSqsQueue;
    ec2_transit_gateway_multicast_group_member?: Ec2TransitGatewayMulticastGroup;
    cognito_identity_pool_provider_principal_tag?: CognitoIdentityPoolProviderPrincipalTag;
    iam_user_ssh_key?: ResourceIamUserSSHKey;
    kms_grant?: KmsGrant;
    docdb_event_subscription?: DBEventSubscription;
    lightsail_container_service_deployment_version?: LightsailContainerServiceDeploymentVersion;
    ssm_association?: SsmAssociation;
    apigatewayv2_stage?: Apigatewayv2Stage;
    quicksight_data_source?: QuicksightDataSource;
    ec2_managed_prefix_list?: ResourceEc2ManagedPrefixList;
    redshift_cluster_snapshot?: RedshiftClusterSnapshot;
    ses_template?: SesTemplate;
    batch_scheduling_policy?: ResourceBatchSchedulingPolicy;
    location_place_index?: ResourceLocationPlaceIndex;
    opensearch_outbound_connection?: OpensearchOutboundConnection;
    sfn_alias?: ResourceSfnAlias;
    shield_protection_health_check_association?: ShieldProtectionHealthCheckAssociation;
    appstream_fleet?: AppstreamFleet;
    connect_phone_number?: ConnectPhoneNumber;
    lightsail_lb_certificate_attachment?: LightsailLBCertificateAttachment;
    cloudwatch_metric_stream?: CloudwatchMetricStream;
    cognito_user_pool?: CognitoUserPool;
    config_conformance_pack?: ConfigConformancePack;
    kendra_data_source?: KendraDataSource;
    pinpoint_gcm_channel?: PinpointGcmChannel;
    budgets_budget_action?: BudgetsBudgetAction;
    ec2_client_vpn_endpoint?: ResourceEc2ClientVPNEndpoint;
    emr_instance_fleet?: EmrInstanceFleet;
    sagemaker_device_fleet?: SagemakerDeviceFleet;
    directory_service_radius_settings?: DirectoryServiceRadiusSettings;
    pinpoint_app?: PinpointApp;
    redshift_hsm_configuration?: RedshiftHSMConfiguration;
    wafregional_regex_match_set?: WafregionalRegexMatchSet;
    cloudtrail?: Cloudtrail;
    gamelift_game_session_queue?: GameliftGameSessionQueue;
    appsync_function?: AppsyncFunction;
    cognito_user_pool_ui_customization?: CognitoUserPoolUICustomization;
    macie2_invitation_accepter?: Macie2InvitationAccepter;
    wafregional_web_acl?: WafregionalWebACL;
    ec2_transit_gateway_policy_table?: Ec2TransitGatewayPolicyTable;
    opensearch_domain_policy?: SearchDomainPolicy;
    appmesh_virtual_service?: AppmeshVirtualService;
    fsx_ontap_file_system?: ResourceFsxOntapFileSystem;
    glue_dev_endpoint?: GlueDevEndpoint;
    signer_signing_profile?: ResourceSignerSigningProfile;
    connect_hours_of_operation?: ResourceConnectHoursOfOperation;
    route53_zone?: ResourceRoute53Zone;
    db_snapshot?: ResourceDBSnapshot;
    chimesdkvoice_voice_profile_domain?: ChimesdkvoiceVoiceProfileDomain;
    dax_cluster?: DaxCluster;
    sns_topic_subscription?: SnsTopicSubscription;
    networkfirewall_rule_group?: NetworkfirewallRuleGroup;
    prometheus_workspace?: ResourcePrometheusWorkspace;
    dx_macsec_key_association?: DxMacsecKeyAssociation;
    iam_user_group_membership?: IamUserGroupMembership;
    lambda_alias?: ResourceLambdaAlias;
    lb?: ResourceLB;
    ram_resource_association?: RAMResourceAssociation;
    s3_bucket_website_configuration?: S3BucketWebsiteConfiguration;
    transfer_ssh_key?: TransferSSHKey;
    memorydb_acl?: ResourceMemorydbACL;
    servicecatalog_product_portfolio_association?: ServicecatalogProductPortfolioAssociation;
    cloud9_environment_ec2?: Cloud9EnvironmentEc2;
    cloudwatch_log_stream?: CloudwatchLogStream;
    guardduty_organization_admin_account?: OrganizationAdminAccount;
    lakeformation_resource?: LakeformationResource;
    emr_block_public_access_configuration?: EmrBlockPublicAccessConfiguration;
    redshiftserverless_endpoint_access?: RedshiftserverlessEndpointAccess;
    wafv2_ip_set?: ResourceWafv2IPSet;
    dynamodb_global_table?: DynamodbGlobalTable;
    lightsail_lb?: LightsailLB;
    service_discovery_instance?: ServiceDiscoveryInstance;
    config_organization_custom_rule?: ConfigOrganizationCustomRule;
    directory_service_shared_directory_accepter?: DirectoryServiceSharedDirectoryAccepter;
    securityhub_standards_control?: SecurityhubStandardsControl;
    servicecatalog_product?: ResourceServicecatalogProduct;
    lb_listener_certificate?: LBListenerCertificate;
    proxy_protocol_policy?: ProxyProtocolPolicy;
    qldb_ledger?: QldbLedger;
    s3_bucket_request_payment_configuration?: S3BucketRequestPaymentConfiguration;
    transfer_profile?: TransferProfile;
    worklink_website_certificate_authority_association?: WorklinkWebsiteCertificateAuthorityAssociation;
    codestarconnections_connection?: ResourceCodestarconnectionsConnection;
    launch_template?: ResourceLaunchTemplate;
    inspector2_member_association?: Inspector2MemberAssociation;
    media_convert_queue?: MediaConvertQueue;
    backup_selection?: ResourceBackupSelection;
    fms_admin_account?: FmsAdminAccount;
    codecommit_trigger?: CodecommitTrigger;
    dx_gateway?: ResourceDxGateway;
    kinesis_stream?: ResourceKinesisStream;
    resourcegroups_resource?: ResourcegroupsResource;
    cognito_resource_server?: CognitoResourceServer;
    iot_topic_rule_destination?: IotTopicRuleDestination;
    elastictranscoder_pipeline?: ElastictranscoderPipeline;
    kms_custom_key_store?: ResourceKmsCustomKeyStore;
    networkmanager_transit_gateway_peering?: NetworkmanagerTransitGatewayPeering;
    resourcegroups_group?: ResourcegroupsGroup;
    vpc_endpoint_subnet_association?: VpcEndpointSubnetAssociation;
    api_gateway_rest_api_policy?: APIGatewayRESTAPIPolicy;
    transfer_tag?: Tag;
    cognito_risk_configuration?: CognitoRiskConfiguration;
    comprehend_document_classifier?: ComprehendDocumentClassifier;
    signer_signing_job?: ResourceSignerSigningJob;
    s3control_object_lambda_access_point_policy?: S3ControlObjectLambdaAccessPointPolicy;
    ssoadmin_permissions_boundary_attachment?: SsoadminPermissionsBoundaryAttachment;
    synthetics_group?: SyntheticsGroup;
    vpc_peering_connection_accepter?: VpcPeeringConnectionAccepter;
    codecatalyst_dev_environment?: ResourceCodecatalystDevEnvironment;
    detective_graph?: DetectiveGraph;
    docdb_cluster_parameter_group?: DBParameterGroupClass;
    glue_catalog_table?: ResourceGlueCatalogTable;
    scheduler_schedule_group?: SchedulerScheduleGroup;
    servicecatalog_tag_option_resource_association?: ServicecatalogTagOptionResourceAssociation;
    rds_custom_db_engine_version?: RDSCustomDBEngineVersion;
    api_gateway_usage_plan?: APIGatewayUsagePlan;
    internet_gateway?: ResourceInternetGateway;
    ivs_playback_key_pair?: IvsPlaybackKeyPair;
    dx_connection_association?: DxConnectionAssociation;
    wafv2_web_acl_association?: Wafv2WebACLAssociation;
    s3_bucket_versioning?: S3BucketVersioning;
    appstream_user_stack_association?: AppstreamUserStackAssociation;
    evidently_launch?: EvidentlyLaunch;
    imagebuilder_component?: ResourceImagebuilderComponent;
    iam_policy?: ResourceIamPolicy;
    cloudfront_response_headers_policy?: ResourceCloudfrontResponseHeadersPolicy;
    connect_routing_profile?: ResourceConnectRoutingProfile;
    route_table_association?: RouteTableAssociation;
    servicecatalog_portfolio_share?: ServicecatalogPortfolioShare;
    shield_protection_group?: ShieldProtectionGroup;
    vpc_endpoint_connection_notification?: VpcEndpointConnectionNotification;
    apprunner_vpc_ingress_connection?: ApprunnerVpcIngressConnection;
    memorydb_snapshot?: ResourceMemorydbSnapshot;
    memorydb_user?: ResourceMemorydbUser;
    opensearch_domain_saml_options?: SearchDomainSamlOptions;
    s3_bucket_object?: ResourceS3BucketObject;
    appconfig_extension?: AppconfigExtension;
    licensemanager_grant?: LicensemanagerGrant;
    workspaces_workspace?: ResourceWorkspacesWorkspace;
    ssoadmin_account_assignment?: SsoadminAccountAssignment;
    route53_resolver_config?: Route53ResolverConfig;
    route53_resolver_query_log_config?: ResourceRoute53ResolverQueryLogConfig;
    ec2_carrier_gateway?: Ec2CarrierGateway;
    grafana_workspace?: ResourceGrafanaWorkspace;
    quicksight_analysis?: QuicksightAnalysis;
    elasticache_user?: ResourceElasticacheUser;
    elastic_beanstalk_application?: ResourceElasticBeanstalkApplication;
    ssm_parameter?: ResourceSsmParameter;
    ssm_maintenance_window_target?: SsmMaintenanceWindowTarget;
    appmesh_virtual_gateway?: AppmeshVirtualGateway;
    chimesdkvoice_sip_media_application?: ChimesdkvoiceSIPMediaApplication;
    ec2_client_vpn_network_association?: Ec2ClientVPNNetworkAssociation;
    ec2_fleet?: Ec2Fleet;
    kms_alias?: ResourceKmsAlias;
    ec2_traffic_mirror_filter_rule?: Ec2TrafficMirrorFilterRule;
    msk_scram_secret_association?: MskScramSecretAssociation;
    athena_named_query?: AthenaNamedQuery;
    db_cluster_snapshot?: ResourceDBClusterSnapshot;
    ebs_encryption_by_default?: EnclaveOptionsClass;
    dataexchange_revision?: DataexchangeRevision;
    service_discovery_public_dns_namespace?: ServiceDiscoveryPublicDNSNamespace;
    applicationinsights_application?: ApplicationinsightsApplication;
    ce_cost_allocation_tag?: CeCostAllocationTag;
    cloudwatch_event_rule?: CloudwatchEventRule;
    datapipeline_pipeline?: ResourceDatapipelinePipeline;
    s3control_object_lambda_access_point?: S3ControlObjectLambdaAccessPoint;
    cloudfront_distribution?: ResourceCloudfrontDistribution;
    grafana_workspace_api_key?: GrafanaWorkspaceAPIKey;
    s3_bucket_notification?: S3BucketNotification;
    chimesdkvoice_sip_rule?: ChimesdkvoiceSIPRule;
    oam_sink_policy?: OamSinkPolicy;
    opsworks_rds_db_instance?: OpsworksRDSDBInstance;
    sqs_queue_redrive_policy?: SqsQueueRedrivePolicy;
    servicecatalog_service_action?: ServicecatalogServiceAction;
    appconfig_deployment_strategy?: AppconfigDeploymentStrategy;
    networkmanager_site_to_site_vpn_attachment?: KmsSecretClass;
    s3_bucket_policy?: ResourceS3BucketPolicy;
    ec2_traffic_mirror_target?: Ec2TrafficMirrorTarget;
    lambda_function_url?: ResourceLambdaFunctionURL;
    sagemaker_monitoring_schedule?: SagemakerMonitoringSchedule;
    route53recoveryreadiness_readiness_check?: Route53RecoveryreadinessReadinessCheck;
    route53_resolver_firewall_rule_group_association?: ResourceRoute53ResolverFirewallRuleGroupAssociation;
    route53recoverycontrolconfig_cluster?: Route53RecoverycontrolconfigCluster;
    secretsmanager_secret_version?: ResourceSecretsmanagerSecretVersion;
    datasync_location_fsx_openzfs_file_system?: DatasyncLocationFsxOpenzfsFileSystem;
    efs_backup_policy?: EFSBackupPolicy;
    service_discovery_http_namespace?: ResourceServiceDiscoveryHTTPNamespace;
    lightsail_lb_stickiness_policy?: LightsailLBStickinessPolicy;
    neptune_cluster_instance?: NeptuneClusterInstance;
    cleanrooms_collaboration?: CleanroomsCollaboration;
    ami_copy?: AmiCopy;
    network_acl?: NetworkACL;
    devicefarm_upload?: DevicefarmUpload;
    glacier_vault_lock?: GlacierVaultLock;
    ssoadmin_instance_access_control_attributes?: SsoadminInstanceAccessControlAttributes;
    config_organization_custom_policy_rule?: ConfigOrganizationCustomPolicyRule;
    db_proxy_endpoint?: DBProxyEndpoint;
    dms_event_subscription?: DmsEventSubscription;
    dx_hosted_connection?: DxHostedConnection;
    db_instance_automated_backups_replication?: DBInstanceAutomatedBackupsReplication;
    iam_access_key?: IamAccessKey;
    lambda_event_source_mapping?: LambdaEventSourceMapping;
    lexv2models_bot?: Lexv2ModelsBot;
    sagemaker_model_package_group?: SagemakerModelPackageGroup;
    msk_cluster?: ResourceMskCluster;
    dms_endpoint?: ResourceDmsEndpoint;
    rds_export_task?: RDSExportTask;
    inspector_assessment_template?: InspectorAssessmentTemplate;
    transfer_agreement?: TransferAgreement;
    neptune_parameter_group?: NeptuneParameterGroup;
    apigatewayv2_integration?: Apigatewayv2Integration;
    appconfig_hosted_configuration_version?: AppconfigHostedConfigurationVersion;
    elasticache_global_replication_group?: ElasticacheGlobalReplicationGroup;
    lambda_code_signing_config?: ResourceLambdaCodeSigningConfig;
    gamelift_game_server_group?: GameliftGameServerGroup;
    backup_vault?: ResourceBackupVault;
    cloudfront_public_key?: CloudfrontPublicKey;
    codestarconnections_host?: CodestarconnectionsHost;
    connect_security_profile?: ResourceConnectSecurityProfile;
    opsworks_php_app_layer?: OpsworksPHPAppLayer;
    organizations_organizational_unit?: ResourceOrganizationsOrganizationalUnit;
    route53_zone_association?: Route53ZoneAssociation;
    sesv2_email_identity?: ResourceSesv2EmailIdentity;
    glue_registry?: GlueRegistry;
    appstream_fleet_stack_association?: AppstreamFleetStackAssociation;
    s3control_access_point_policy?: S3ControlAccessPointPolicy;
    egress_only_internet_gateway?: EgressOnlyInternetGateway;
    schemas_registry_policy?: SchemasRegistryPolicy;
    storagegateway_stored_iscsi_volume?: StoragegatewayStoredIscsiVolume;
    glacier_vault?: GlacierVault;
    opsworks_mysql_layer?: OpsworksMysqlLayer;
    lightsail_bucket_access_key?: LightsailBucketAccessKey;
    autoscaling_attachment?: AutoscalingAttachment;
    directory_service_conditional_forwarder?: DirectoryServiceConditionalForwarder;
    emrcontainers_virtual_cluster?: ResourceEmrcontainersVirtualCluster;
    cleanrooms_configured_table?: CleanroomsConfiguredTable;
    ecs_account_setting_default?: EcsAccountSettingDefault;
    vpn_connection_route?: VPNConnectionRoute;
    mskconnect_custom_plugin?: ResourceMskconnectCustomPlugin;
    snapshot_create_volume_permission?: SnapshotCreateVolumePermission;
    medialive_input_security_group?: MedialiveInputSecurityGroup;
    sesv2_configuration_set_event_destination?: Sesv2ConfigurationSetEventDestination;
    ssm_default_patch_baseline?: SsmDefaultPatchBaseline;
    msk_cluster_policy?: MskClusterPolicy;
    s3control_bucket_policy?: S3ControlBucketPolicy;
    storagegateway_file_system_association?: StoragegatewayFileSystemAssociation;
    route_table?: ResourceRouteTable;
    rum_metrics_destination?: RumMetricsDestination;
    s3_object_copy?: S3ObjectCopy;
    transfer_user?: TransferUser;
    globalaccelerator_custom_routing_accelerator?: GlobalacceleratorCustomRoutingAccelerator;
    location_map?: ResourceLocationMap;
    s3_bucket_acl?: S3BucketACL;
    vpc_endpoint?: ResourceVpcEndpoint;
    batch_job_queue?: ResourceBatchJobQueue;
    rds_cluster_instance?: RDSClusterInstance;
    sagemaker_app_image_config?: SagemakerAppImageConfig;
    appmesh_route?: ResourceAppmeshRoute;
    elastictranscoder_preset?: ElastictranscoderPreset;
    s3_bucket_metric?: S3BucketMetric;
    config_config_rule?: ConfigConfigRule;
    scheduler_schedule?: SchedulerSchedule;
    detective_member?: DetectiveMember;
    gamelift_script?: GameliftScript;
    globalaccelerator_accelerator?: ResourceGlobalacceleratorAccelerator;
    lb_listener?: ResourceLBListener;
    schemas_schema?: SchemasSchema;
    storagegateway_upload_buffer?: StoragegatewayUploadBuffer;
    lightsail_container_service?: LightsailContainerService;
    controltower_control?: ControltowerControl;
    evidently_segment?: EvidentlySegment;
    kendra_experience?: ResourceKendraExperience;
    opsworks_custom_layer?: OpsworksCustomLayer;
    sagemaker_endpoint_configuration?: SagemakerEndpointConfiguration;
    redshift_snapshot_copy_grant?: RedshiftSnapshotCopyGrant;
    opensearch_vpc_endpoint?: OpensearchVpcEndpoint;
    cognito_managed_user_pool_client?: CognitoManagedUserPoolClient;
    lambda_invocation?: ResourceLambdaInvocation;
    memorydb_parameter_group?: ResourceMemorydbParameterGroup;
    ses_domain_mail_from?: SesDomainMailFrom;
    codecommit_approval_rule_template_association?: CodecommitApprovalRuleTemplateAssociation;
    codecommit_repository?: ResourceCodecommitRepository;
    eks_node_group?: ResourceEksNodeGroup;
    lambda_provisioned_concurrency_config?: LambdaProvisionedConcurrencyConfig;
    sns_topic_policy?: SnsTopicPolicy;
    vpclattice_service_network_service_association?: VpclatticeServiceNetworkServiceAssociation;
    sagemaker_notebook_instance_lifecycle_configuration?: SagemakerNotebookInstanceLifecycleConfiguration;
    connect_vocabulary?: ResourceConnectVocabulary;
    default_route_table?: DefaultRouteTable;
    default_vpc?: DefaultVpc;
    wafregional_ipset?: WafregionalIpset;
    neptune_subnet_group?: DocdbSubnetGroupClass;
    redshift_usage_limit?: RedshiftUsageLimit;
    sagemaker_device?: SagemakerDevice;
    transcribe_vocabulary_filter?: TranscribeVocabularyFilter;
    waf_regex_match_set?: WafRegexMatchSet;
    appintegrations_data_integration?: AppintegrationsDataIntegration;
    dx_public_virtual_interface?: DxPublicVirtualInterface;
    ebs_snapshot_copy?: EbsSnapshotCopy;
    networkfirewall_firewall?: ResourceNetworkfirewallFirewall;
    redshift_authentication_profile?: RedshiftAuthenticationProfile;
    servicecatalog_portfolio?: ResourceServicecatalogPortfolio;
    kms_key_policy?: KmsKeyPolicy;
    vpc_dhcp_options_association?: VpcDHCPOptionsAssociation;
    appmesh_mesh?: ResourceAppmeshMesh;
    synthetics_canary?: SyntheticsCanary;
    appsync_datasource?: AppsyncDatasource;
    lambda_permission?: LambdaPermission;
    efs_replication_configuration?: EFSReplicationConfiguration;
    ram_resource_share_accepter?: RAMResourceShareAccepter;
    service_discovery_private_dns_namespace?: ServiceDiscoveryPrivateDNSNamespace;
    glue_resource_policy?: GlueResourcePolicy;
    auditmanager_control?: AuditmanagerControl;
    s3_access_point?: S3AccessPoint;
    apigatewayv2_api_mapping?: Apigatewayv2APIMapping;
    glue_security_configuration?: GlueSecurityConfiguration;
    iot_provisioning_template?: IotProvisioningTemplate;
    kinesisanalyticsv2_application?: Kinesisanalyticsv2Application;
    macie2_findings_filter?: Macie2FindingsFilter;
    servicecatalog_tag_option?: ServicecatalogTagOption;
    kinesis_video_stream?: KinesisVideoStream;
    api_gateway_resource?: ResourceAPIGatewayResource;
    codebuild_source_credential?: CodebuildSourceCredential;
    connect_lambda_function_association?: ConnectLambdaFunctionAssociation;
    apprunner_observability_configuration?: ApprunnerObservabilityConfiguration;
    dx_gateway_association?: DxGatewayAssociation;
    workspaces_ip_group?: WorkspacesIPGroup;
    ec2_instance_state?: Ec2InstanceState;
    lightsail_instance?: LightsailInstance;
    ssm_service_setting?: SsmServiceSetting;
    cognito_identity_pool?: ResourceCognitoIdentityPool;
    ses_event_destination?: SesEventDestination;
    networkmanager_device?: ResourceNetworkmanagerDevice;
    s3control_storage_lens_configuration?: S3ControlStorageLensConfiguration;
    api_gateway_deployment?: APIGatewayDeployment;
    chimesdkmediapipelines_media_insights_pipeline_configuration?: ChimesdkmediapipelinesMediaInsightsPipelineConfiguration;
    appsync_domain_name_api_association?: AppsyncDomainNameAPIAssociation;
    batch_job_definition?: BatchJobDefinition;
    docdb_subnet_group?: DocdbSubnetGroupClass;
    ec2_transit_gateway_prefix_list_reference?: Ec2TransitGatewayPrefixListReference;
    elastic_beanstalk_configuration_template?: ElasticBeanstalkConfigurationTemplate;
    auditmanager_organization_admin_account_registration?: AuditmanagerOrganizationAdminAccountRegistration;
    route53_resolver_firewall_rule_group?: ResourceRoute53ResolverFirewallRuleGroup;
    vpclattice_resource_policy?: Policy;
    worklink_fleet?: WorklinkFleet;
    s3control_bucket_lifecycle_configuration?: S3ControlBucketLifecycleConfiguration;
    quicksight_vpc_connection?: QuicksightVpcConnection;
    api_gateway_documentation_version?: APIGatewayDocumentationVersion;
    cloudfront_key_group?: CloudfrontKeyGroup;
    glue_workflow?: GlueWorkflow;
    ssoadmin_permission_set_inline_policy?: SsoadminPermissionSetInlinePolicy;
    codedeploy_deployment_config?: CodedeployDeploymentConfig;
    cognito_user_pool_client?: ResourceCognitoUserPoolClient;
    iot_thing_type?: IotThingType;
    rolesanywhere_profile?: RolesanywhereProfile;
    waf_byte_match_set?: WafByteMatchSet;
    codeartifact_domain_permissions_policy?: CodeartifactDomainPermissionsPolicy;
    iam_group_policy_attachment?: IamGroupPolicyAttachment;
    servicecatalog_constraint?: ResourceServicecatalogConstraint;
    sns_topic_data_protection_policy?: SnsTopicDataProtectionPolicy;
    transfer_workflow?: TransferWorkflow;
    guardduty_ipset?: GuarddutySet;
    dx_connection?: ResourceDxConnection;
    route53_resolver_firewall_rule?: Route53ResolverFirewallRule;
    backup_report_plan?: ResourceBackupReportPlan;
    cloudfront_origin_access_identity?: ResourceCloudfrontOriginAccessIdentity;
    macie2_classification_export_configuration?: Macie2ClassificationExportConfiguration;
    vpclattice_listener_rule?: VpclatticeListenerRule;
    iam_role?: ResourceIamRole;
    timestreamwrite_table?: TimestreamwriteTable;
    dx_lag?: DxLag;
    appsync_api_key?: AppsyncAPIKey;
    datasync_location_fsx_lustre_file_system?: DatasyncLocationFsxLustreFileSystem;
    vpc_ipam?: VpcIPAM;
    config_configuration_recorder?: ConfigConfigurationRecorder;
    globalaccelerator_custom_routing_listener?: GlobalacceleratorCustomRoutingListener;
    load_balancer_listener_policy?: LoadBalancerListenerPolicy;
    networkmanager_transit_gateway_connect_peer_association?: NetworkmanagerTransitGatewayConnectPeerAssociation;
    glue_classifier?: GlueClassifier;
    mq_broker?: ResourceMqBroker;
    codebuild_webhook?: CodebuildWebhook;
    codepipeline?: Codepipeline;
    dx_hosted_public_virtual_interface_accepter?: DxHostedPublicVirtualInterfaceAccepter;
    lightsail_distribution?: LightsailDistribution;
    networkmanager_link?: ResourceNetworkmanagerLink;
    accessanalyzer_analyzer?: AccessanalyzerAnalyzer;
    sagemaker_workteam?: SagemakerWorkteam;
    prometheus_rule_group_namespace?: PrometheusRuleGroupNamespace;
    secretsmanager_secret_rotation?: ResourceSecretsmanagerSecretRotation;
    dx_private_virtual_interface?: DxPrivateVirtualInterface;
    internetmonitor_monitor?: InternetmonitorMonitor;
    lightsail_bucket_resource_access?: LightsailBucketResourceAccess;
    cloudformation_type?: ResourceCloudformationType;
    grafana_workspace_saml_configuration?: GrafanaWorkspaceSamlConfiguration;
    route53recoveryreadiness_resource_set?: Route53RecoveryreadinessResourceSet;
    vpclattice_target_group_attachment?: KmsSecretClass;
    securityhub_member?: SecurityhubMember;
    rds_cluster_endpoint?: RDSClusterEndpoint;
    ecr_replication_configuration?: EcrReplicationConfiguration;
    codeartifact_repository_permissions_policy?: CodeartifactRepositoryPermissionsPolicy;
    location_geofence_collection?: LocationGeofenceCollection;
    vpc_endpoint_policy?: VpcEndpointPolicy;
    apigatewayv2_api?: ResourceApigatewayv2API;
    cognito_user_pool_domain?: CognitoUserPoolDomain;
    iot_policy?: IotPolicy;
    sesv2_contact_list?: Sesv2ContactList;
    lex_slot_type?: ResourceLexSlotType;
    network_acl_rule?: NetworkACLRule;
    storagegateway_smb_file_share?: StoragegatewaySMBFileShare;
    lightsail_domain?: LightsailDomain;
    route53_delegation_set?: ResourceRoute53DelegationSet;
    vpc_ipam_organization_admin_account?: VpcIPAMOrganizationAdminAccount;
    appconfig_application?: AppconfigApplication;
    devicefarm_instance_profile?: DevicefarmInstanceProfile;
    dx_hosted_private_virtual_interface_accepter?: DxHostedPrivateVirtualInterfaceAccepter;
    ecs_tag?: Tag;
    grafana_license_association?: GrafanaLicenseAssociation;
    iam_server_certificate?: ResourceIamServerCertificate;
    elasticache_cluster?: ResourceElasticacheCluster;
    route53recoveryreadiness_cell?: Route53RecoveryreadinessCell;
    ec2_availability_zone_group?: Ec2AvailabilityZoneGroup;
    ecr_registry_scanning_configuration?: EcrRegistryScanningConfiguration;
    iot_role_alias?: IotRoleAlias;
    ecr_pull_through_cache_rule?: PurpleEcrPullThroughCacheRule;
    networkmanager_site?: ResourceNetworkmanagerSite;
    cloudwatch_dashboard?: CloudwatchDashboard;
    securityhub_finding_aggregator?: KmsSecretClass;
    dx_connection_confirmation?: DxConnectionConfirmation;
    ses_identity_notification_topic?: SesIdentityNotificationTopic;
    ssm_activation?: SsmActivation;
    vpclattice_access_log_subscription?: VpclatticeAccessLogSubscription;
    elasticache_user_group_association?: ElasticacheUserGroupAssociation;
    inspector2_delegated_admin_account?: Inspector2DelegatedAdminAccount;
    opsworks_permission?: OpsworksPermission;
    securityhub_organization_admin_account?: OrganizationAdminAccount;
    wafv2_web_acl_logging_configuration?: Wafv2WebACLLoggingConfiguration;
    cloudwatch_log_group?: ResourceCloudwatchLogGroup;
    ec2_traffic_mirror_filter?: Ec2TrafficMirrorFilter;
    glue_data_quality_ruleset?: GlueDataQualityRuleset;
    lakeformation_lf_tag?: LakeformationLFTag;
    ses_email_identity?: ResourceSesEmailIdentity;
    fsx_data_repository_association?: FsxDataRepositoryAssociation;
    sagemaker_model?: SagemakerModel;
    secretsmanager_secret?: ResourceSecretsmanagerSecret;
    wafv2_web_acl?: Wafv2WebACL;
    elasticsearch_domain_saml_options?: SearchDomainSamlOptions;
    lightsail_instance_public_ports?: LightsailInstancePublicPorts;
}
export interface AccessanalyzerAnalyzer {
    analyzer_name: string;
    tags?: string;
    type?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface AccessanalyzerArchiveRule {
    analyzer_name: string;
    filter: AccessanalyzerArchiveRuleFilter;
    rule_name: string;
    neq?: string;
    id?: string;
}
export interface AccessanalyzerArchiveRuleFilter {
    criteria?: string;
    contains?: string;
    eq?: string;
    exists?: string;
    neq?: string;
}
export interface AccountAlternateContact {
    alternate_contact_type: string;
    email_address: string;
    name: string;
    phone_number: string;
    title: string;
    account_id?: string;
}
export interface AccountPrimaryContact {
    address_line_1: string;
    city: string;
    country_code: string;
    full_name: string;
    phone_number: string;
    postal_code: string;
    account_id?: string;
    address_line_2?: string;
    address_line_3?: string;
    company_name?: string;
    district_or_county?: string;
    state_or_region?: string;
    website_url?: string;
}
export interface ResourceACMCertificate {
    domain_name: string;
    private_key: string;
    certificate_body: string;
    certificate_authority_arn: string;
    subject_alternative_names?: string;
    validation_method?: string;
    key_algorithm?: string;
    certificate_chain?: string;
    early_renewal_duration?: string;
    tags?: string;
    id?: string;
    arn?: string;
    domain_validation_options?: string;
    not_after?: string;
    not_before?: string;
    pending_renewal?: string;
    renewal_eligibility?: string;
    renewal_summary?: string;
    status?: string;
    type?: string;
    tags_all?: string;
    validation_emails?: string;
    resource_record_name?: string;
    resource_record_type?: string;
    resource_record_value?: string;
    renewal_status?: string;
    renewal_status_reason?: string;
}
export interface ACMCertificateValidation {
    certificate_arn: string;
    validation_record_fqdns?: string;
    id?: string;
}
export interface ResourceAcmpcaCertificate {
    certificate_authority_arn: string;
    certificate_signing_request: string;
    signing_algorithm: string;
    type: string;
    value: string;
    template_arn?: string;
    api_passthrough?: string;
    arn?: string;
    certificate?: string;
    certificate_chain?: string;
}
export interface ResourceAcmpcaCertificateAuthority {
    certificate_authority_configuration: CertificateAuthorityConfiguration;
    subject: string;
    revocation_configuration?: RevocationConfiguration;
    usage_mode?: string;
    tags?: string;
    type?: string;
    key_storage_security_standard?: string;
    permanent_deletion_time_in_days?: string;
    crl_configuration?: string;
    ocsp_configuration?: string;
    id?: string;
    arn?: string;
    certificate?: string;
    certificate_chain?: string;
    certificate_signing_request?: string;
    not_after?: string;
    not_before?: string;
    serial?: string;
    tags_all?: string;
}
export interface CertificateAuthorityConfiguration {
    key_algorithm?: string;
    signing_algorithm?: string;
    subject?: Subject;
}
export interface Subject {
    common_name?: string;
    country?: string;
    distinguished_name_qualifier?: string;
    generation_qualifier?: string;
    given_name?: string;
    initials?: string;
    locality?: string;
    organization?: string;
    organizational_unit?: string;
    pseudonym?: string;
    state?: string;
    surname?: string;
    title?: string;
}
export interface RevocationConfiguration {
    crl_configuration?: CrlConfiguration;
    ocsp_configuration?: OcspConfiguration;
}
export interface CrlConfiguration {
    custom_cname?: string;
    enabled?: string;
    expiration_in_days?: string;
    s3_bucket_name?: string;
    s3_object_acl?: string;
}
export interface OcspConfiguration {
    enabled: string;
    ocsp_custom_cname?: string;
}
export interface AcmpcaCertificateAuthorityCertificate {
    certificate: string;
    certificate_authority_arn: string;
    certificate_chain?: string;
}
export interface AcmpcaPermission {
    certificate_authority_arn: string;
    actions: string;
    principal: string;
    source_account?: string;
    policy?: string;
}
export interface Policy {
    resource_arn: string;
    policy: string;
}
export interface ResourceAmi {
    name: string;
    image_location: string;
    kernel_id: string;
    device_name: string;
    iops: string;
    volume_size: string;
    virtual_name: string;
    boot_mode?: string;
    deprecation_time?: string;
    description?: string;
    ena_support?: string;
    root_device_name?: string;
    virtualization_type?: string;
    architecture?: string;
    ebs_block_device?: string;
    ephemeral_block_device?: string;
    tags?: string;
    tpm_support?: string;
    imds_support?: string;
    ramdisk_id?: string;
    sriov_net_support?: string;
    delete_on_termination?: string;
    encrypted?: string;
    snapshot_id?: string;
    throughput?: string;
    volume_type?: string;
    outpost_arn?: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    root_snapshot_id?: string;
    usage_operation?: string;
    platform_details?: string;
    image_owner_alias?: string;
    image_type?: string;
    hypervisor?: string;
    platform?: string;
    public?: string;
    tags_all?: string;
}
export interface AmiCopy {
    name: string;
    source_ami_id: string;
    source_ami_region: string;
    destination_outpost_arn?: string;
    encrypted?: string;
    kms_key_id?: string;
    tags?: string;
    arn?: string;
    id?: string;
}
export interface AmiFromInstance {
    name: string;
    source_instance_id: string;
    snapshot_without_reboot?: string;
    tags?: string;
    arn?: string;
    id?: string;
}
export interface AmiLaunchPermission {
    image_id: string;
    account_id?: string;
    group?: string;
    organization_arn?: string;
    organizational_unit_arn?: string;
    id?: string;
}
export interface AmplifyApp {
    name: string;
    source: string;
    target: string;
    access_token?: string;
    auto_branch_creation_patterns?: string;
    basic_auth_credentials?: string;
    build_spec?: string;
    description?: string;
    enable_auto_branch_creation?: string;
    enable_basic_auth?: string;
    enable_branch_auto_build?: string;
    enable_branch_auto_deletion?: string;
    environment_variables?: string;
    iam_service_role_arn?: string;
    oauth_token?: string;
    platform?: string;
    repository?: string;
    tags?: string;
    enable_auto_build?: string;
    enable_performance_mode?: string;
    enable_pull_request_preview?: string;
    framework?: string;
    pull_request_environment_name?: string;
    stage?: string;
    condition?: string;
    status?: string;
    arn?: string;
    default_domain?: string;
    id?: string;
    tags_all?: string;
    branch_name?: string;
    last_deploy_time?: string;
    thumbnail_url?: string;
}
export interface AmplifyBackendEnvironment {
    app_id: string;
    environment_name: string;
    deployment_artifacts?: string;
    stack_name?: string;
    arn?: string;
    id?: string;
}
export interface AmplifyBranch {
    app_id: string;
    branch_name: string;
    backend_environment_arn?: string;
    basic_auth_credentials?: string;
    description?: string;
    display_name?: string;
    enable_auto_build?: string;
    enable_basic_auth?: string;
    enable_notification?: string;
    enable_performance_mode?: string;
    enable_pull_request_preview?: string;
    environment_variables?: string;
    framework?: string;
    pull_request_environment_name?: string;
    stage?: string;
    tags?: string;
    ttl?: string;
    arn?: string;
    associated_resources?: string;
    custom_domains?: string;
    destination_branch?: string;
    source_branch?: string;
    tags_all?: string;
}
export interface AmplifyDomainAssociation {
    app_id: string;
    domain_name: string;
    branch_name: string;
    prefix: string;
    enable_auto_sub_domain?: string;
    wait_for_verification?: string;
    arn?: string;
    certificate_verification_dns_record?: string;
    dns_record?: string;
    verified?: string;
}
export interface AmplifyWebhook {
    app_id: string;
    branch_name: string;
    description?: string;
    arn?: string;
    url?: string;
}
export interface APIGatewayAccount {
    cloudwatch_role_arn?: string;
    api_key_version?: string;
    throttle_settings?: string;
    features?: string;
    burst_limit?: string;
    rate_limit?: string;
}
export interface ResourceAPIGatewayAPIKey {
    name: string;
    customer_id: string;
    description?: string;
    enabled?: string;
    value?: string;
    tags?: string;
    id?: string;
    created_date?: string;
    last_updated_date?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceAPIGatewayAuthorizer {
    name: string;
    rest_api_id: string;
    authorizer_uri?: string;
    identity_source?: string;
    type?: string;
    authorizer_credentials?: string;
    authorizer_result_ttl_in_seconds?: string;
    identity_validation_expression?: string;
    provider_arns?: string;
    arn?: string;
    id?: string;
}
export interface APIGatewayBasePathMapping {
    domain_name: string;
    api_id: string;
    stage_name?: string;
    base_path?: string;
}
export interface APIGatewayClientCertificate {
    description?: string;
    tags?: string;
    id?: string;
    created_date?: string;
    expiration_date?: string;
    pem_encoded_certificate?: string;
    arn?: string;
    tags_all?: string;
}
export interface APIGatewayDeployment {
    rest_api_id: string;
    description?: string;
    stage_name?: string;
    stage_description?: string;
    triggers?: string;
    variables?: string;
    id?: string;
    invoke_url?: string;
    execution_arn?: string;
    created_date?: string;
}
export interface APIGatewayDocumentationPart {
    location: string;
    properties: string;
    rest_api_id: string;
    type: string;
    method?: string;
    name?: string;
    path?: string;
    status_code?: string;
    id?: string;
}
export interface APIGatewayDocumentationVersion {
    version: string;
    rest_api_id: string;
    description?: string;
}
export interface ResourceAPIGatewayDomainName {
    domain_name: string;
    endpoint_configuration?: APIGatewayDomainNameEndpointConfiguration;
    mutual_tls_authentication?: MutualTLSAuthentication;
    ownership_verification_certificate_arn?: string;
    security_policy?: string;
    tags?: string;
    certificate_arn?: string;
    regional_certificate_arn?: string;
    certificate_body?: string;
    certificate_chain?: string;
    certificate_name?: string;
    certificate_private_key?: string;
    regional_certificate_name?: string;
    arn?: string;
    certificate_upload_date?: string;
    cloudfront_domain_name?: string;
    cloudfront_zone_id?: string;
    id?: string;
    regional_domain_name?: string;
    regional_zone_id?: string;
    tags_all?: string;
}
export interface APIGatewayDomainNameEndpointConfiguration {
    types: string;
}
export interface MutualTLSAuthentication {
    truststore_uri: string;
    truststore_version?: string;
}
export interface APIGatewayGatewayResponse {
    rest_api_id: string;
    response_type: string;
    status_code?: string;
    response_templates?: string;
    response_parameters?: string;
}
export interface APIGatewayIntegration {
    rest_api_id: string;
    resource_id: string;
    http_method: string;
    type: string;
    integration_http_method?: string;
    connection_type?: string;
    connection_id?: string;
    uri?: string;
    credentials?: string;
    request_templates?: string;
    request_parameters?: string;
    passthrough_behavior?: string;
    cache_key_parameters?: string;
    cache_namespace?: string;
    content_handling?: string;
    timeout_milliseconds?: string;
    tls_config?: string;
    insecure_skip_verification?: string;
}
export interface APIGatewayIntegrationResponse {
    http_method: string;
    resource_id: string;
    rest_api_id: string;
    status_code: string;
    content_handling?: string;
    response_parameters?: string;
    response_templates?: string;
    selection_pattern?: string;
}
export interface APIGatewayMethod {
    rest_api_id: string;
    resource_id: string;
    http_method: string;
    authorization: string;
    authorizer_id?: string;
    authorization_scopes?: string;
    api_key_required?: string;
    operation_name?: string;
    request_models?: string;
    request_validator_id?: string;
    request_parameters?: string;
}
export interface APIGatewayMethodResponse {
    rest_api_id: string;
    resource_id: string;
    http_method: string;
    status_code: string;
    response_models?: string;
    response_parameters?: string;
}
export interface APIGatewayMethodSettings {
    rest_api_id: string;
    stage_name: string;
    method_path: string;
    settings: APIGatewayMethodSettingsSettings;
}
export interface APIGatewayMethodSettingsSettings {
    metrics_enabled?: string;
    logging_level?: string;
    data_trace_enabled?: string;
    throttling_burst_limit?: string;
    throttling_rate_limit?: string;
    caching_enabled?: string;
    cache_ttl_in_seconds?: string;
    cache_data_encrypted?: string;
    require_authorization_for_cache_control?: string;
    unauthorized_cache_control_header_strategy?: string;
}
export interface APIGatewayModel {
    rest_api_id: string;
    name: string;
    content_type: string;
    schema: string;
    description?: string;
    id?: string;
}
export interface APIGatewayRequestValidator {
    name: string;
    rest_api_id: string;
    validate_request_body?: string;
    validate_request_parameters?: string;
    id?: string;
}
export interface ResourceAPIGatewayResource {
    rest_api_id: string;
    parent_id: string;
    path_part: string;
    id?: string;
    path?: string;
}
export interface ResourceAPIGatewayRESTAPI {
    name: string;
    api_key_source?: string;
    binary_media_types?: string;
    body?: string;
    description?: string;
    disable_execute_api_endpoint?: string;
    endpoint_configuration?: APIGatewayRESTAPIEndpointConfiguration;
    minimum_compression_size?: string;
    fail_on_warnings?: string;
    parameters?: string;
    policy?: string;
    put_rest_api_mode?: string;
    tags?: string;
    aws_api_gateway_model?: string;
    arn?: string;
    created_date?: string;
    execution_arn?: string;
    id?: string;
    root_resource_id?: string;
    tags_all?: string;
}
export interface APIGatewayRESTAPIEndpointConfiguration {
    types: string;
    vpc_endpoint_ids?: string;
}
export interface APIGatewayRESTAPIPolicy {
    rest_api_id: string;
    policy: string;
    id?: string;
}
export interface APIGatewayStage {
    rest_api_id: string;
    stage_name: string;
    deployment_id: string;
    access_log_settings?: AccessLogSettings;
    cache_cluster_enabled?: string;
    cache_cluster_size?: string;
    canary_settings?: CanarySettings;
    client_certificate_id?: string;
    description?: string;
    documentation_version?: string;
    variables?: string;
    tags?: string;
    xray_tracing_enabled?: string;
    arn?: string;
    id?: string;
    invoke_url?: string;
    execution_arn?: string;
    tags_all?: string;
    web_acl_arn?: string;
}
export interface AccessLogSettings {
    destination_arn: string;
    format: string;
}
export interface CanarySettings {
    percent_traffic?: string;
    stage_variable_overrides?: string;
    use_stage_cache?: string;
}
export interface APIGatewayUsagePlan {
    name: string;
    api_id: string;
    stage: string;
    path: string;
    description?: string;
    throttle_settings?: string;
    product_code?: string;
    tags?: string;
    burst_limit?: string;
    rate_limit?: string;
    limit?: string;
    offset?: string;
    period?: string;
    id?: string;
    api_stages?: string;
    quota_settings?: string;
    arn?: string;
    tags_all?: string;
}
export interface APIGatewayUsagePlanKey {
    key_id: string;
    key_type: string;
    usage_plan_id: string;
    id?: string;
    name?: string;
    value?: string;
}
export interface ResourceAPIGatewayVpcLink {
    name: string;
    target_arns: string;
    description?: string;
    tags?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceApigatewayv2API {
    name: string;
    protocol_type: string;
    api_key_selection_expression?: string;
    cors_configuration?: string;
    credentials_arn?: string;
    description?: string;
    disable_execute_api_endpoint?: string;
    route_key?: string;
    route_selection_expression?: string;
    tags?: string;
    target?: string;
    body?: string;
    version?: string;
    fail_on_warnings?: string;
    aws_apigatewayv2_route?: string;
    allow_credentials?: string;
    allow_headers?: string;
    allow_methods?: string;
    allow_origins?: string;
    expose_headers?: string;
    max_age?: string;
    id?: string;
    api_endpoint?: string;
    arn?: string;
    execution_arn?: string;
    tags_all?: string;
}
export interface Apigatewayv2APIMapping {
    api_id: string;
    domain_name: string;
    stage: string;
    api_mapping_key?: string;
    id?: string;
}
export interface Apigatewayv2Authorizer {
    api_id: string;
    authorizer_type: string;
    name: string;
    authorizer_credentials_arn?: string;
    authorizer_payload_format_version?: string;
    authorizer_result_ttl_in_seconds?: string;
    authorizer_uri?: string;
    enable_simple_responses?: string;
    identity_sources?: string;
    jwt_configuration?: string;
    audience?: string;
    issuer?: string;
    id?: string;
}
export interface Apigatewayv2Deployment {
    api_id: string;
    description?: string;
    triggers?: string;
    id?: string;
    auto_deployed?: string;
}
export interface Apigatewayv2DomainName {
    domain_name: string;
    domain_name_configuration: DomainNameConfiguration;
    mutual_tls_authentication?: MutualTLSAuthentication;
    tags?: string;
    target_domain_name?: string;
    api_mapping_selection_expression?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface DomainNameConfiguration {
    certificate_arn?: string;
    endpoint_type?: string;
    hosted_zone_id?: string;
    ownership_verification_certificate_arn?: string;
    security_policy?: string;
    target_domain_name?: string;
}
export interface Apigatewayv2Integration {
    api_id: string;
    integration_type: string;
    status_code: string;
    mappings: string;
    connection_id?: string;
    connection_type?: string;
    content_handling_strategy?: string;
    credentials_arn?: string;
    description?: string;
    integration_method?: string;
    integration_subtype?: string;
    integration_uri?: string;
    passthrough_behavior?: string;
    payload_format_version?: string;
    request_parameters?: string;
    request_templates?: string;
    response_parameters?: string;
    template_selection_expression?: string;
    timeout_milliseconds?: string;
    tls_config?: string;
    server_name_to_verify?: string;
    id?: string;
    integration_response_selection_expression?: string;
}
export interface Apigatewayv2IntegrationResponse {
    api_id: string;
    integration_id: string;
    integration_response_key: string;
    content_handling_strategy?: string;
    response_templates?: string;
    template_selection_expression?: string;
    id?: string;
}
export interface Apigatewayv2Model {
    api_id: string;
    content_type: string;
    name: string;
    schema: string;
    description?: string;
    id?: string;
}
export interface Apigatewayv2Route {
    api_id: string;
    route_key: string;
    request_parameter_key: string;
    required: string;
    api_key_required?: string;
    authorization_scopes?: string;
    authorization_type?: string;
    authorizer_id?: string;
    model_selection_expression?: string;
    operation_name?: string;
    request_models?: string;
    request_parameter?: string;
    route_response_selection_expression?: string;
    target?: string;
    id?: string;
}
export interface Apigatewayv2RouteResponse {
    api_id: string;
    route_id: string;
    route_response_key: string;
    model_selection_expression?: string;
    response_models?: string;
    id?: string;
}
export interface Apigatewayv2Stage {
    api_id: string;
    name: string;
    access_log_settings?: AccessLogSettings;
    auto_deploy?: string;
    client_certificate_id?: string;
    default_route_settings?: DefaultRouteSettings;
    deployment_id?: string;
    description?: string;
    route_settings?: RouteSettings;
    stage_variables?: string;
    tags?: string;
    throttling_rate_limit?: string;
    id?: string;
    arn?: string;
    execution_arn?: string;
    invoke_url?: string;
    tags_all?: string;
}
export interface DefaultRouteSettings {
    data_trace_enabled?: string;
    detailed_metrics_enabled?: string;
    logging_level?: string;
    throttling_burst_limit?: string;
    throttling_rate_limit?: string;
}
export interface RouteSettings {
    route_key: string;
    data_trace_enabled?: string;
    detailed_metrics_enabled?: string;
    logging_level?: string;
    throttling_burst_limit?: string;
    throttling_rate_limit?: string;
}
export interface Apigatewayv2VpcLink {
    name: string;
    security_group_ids: string;
    subnet_ids: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface AppCookieStickinessPolicy {
    name: string;
    load_balancer: string;
    lb_port: string;
    cookie_name: string;
    id?: string;
}
export interface AppautoscalingPolicy {
    name: string;
    resource_id: string;
    scalable_dimension: string;
    service_namespace: string;
    value: string;
    id: string;
    metric: string;
    stat: string;
    metric_name: string;
    namespace: string;
    predefined_metric_type: string;
    policy_type?: string;
    step_scaling_policy_configuration?: StepScalingPolicyConfiguration;
    target_tracking_scaling_policy_configuration?: TargetTrackingScalingPolicyConfiguration;
    dimensions?: string;
    statistic?: string;
    unit?: string;
    metrics?: string;
    expression?: string;
    label?: string;
    metric_stat?: string;
    return_data?: string;
    resource_label?: string;
    alarm_arns?: string;
    arn?: string;
}
export interface StepScalingPolicyConfiguration {
    adjustment_type: string;
    cooldown: string;
    scaling_adjustment: string;
    metric_aggregation_type?: string;
    min_adjustment_magnitude?: string;
    step_adjustment?: string;
    metric_interval_lower_bound?: string;
    metric_interval_upper_bound?: string;
}
export interface TargetTrackingScalingPolicyConfiguration {
    target_value: string;
    disable_scale_in?: string;
    scale_in_cooldown?: string;
    scale_out_cooldown?: string;
    customized_metric_specification?: string;
    predefined_metric_specification?: string;
}
export interface AppautoscalingScheduledAction {
    name: string;
    service_namespace: string;
    resource_id: string;
    scalable_dimension: string;
    schedule: string;
    start_time?: string;
    end_time?: string;
    timezone?: string;
    max_capacity?: string;
    min_capacity?: string;
    arn?: string;
}
export interface AppautoscalingTarget {
    max_capacity: string;
    min_capacity: string;
    resource_id: string;
    scalable_dimension: string;
    service_namespace: string;
    role_arn?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface AppconfigApplication {
    name: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceAppconfigConfigurationProfile {
    application_id: string;
    location_uri: string;
    name: string;
    description?: string;
    retrieval_role_arn?: string;
    tags?: string;
    validator?: Validator;
    arn?: string;
    configuration_profile_id?: string;
    id?: string;
    tags_all?: string;
}
export interface Validator {
    content?: string;
    type?: string;
}
export interface AppconfigDeployment {
    application_id: string;
    configuration_profile_id: string;
    configuration_version: string;
    deployment_strategy_id: string;
    environment_id: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    deployment_number?: string;
    state?: string;
    tags_all?: string;
}
export interface AppconfigDeploymentStrategy {
    deployment_duration_in_minutes: string;
    growth_factor: string;
    name: string;
    replicate_to: string;
    description?: string;
    final_bake_time_in_minutes?: string;
    growth_type?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceAppconfigEnvironment {
    application_id: string;
    name: string;
    description?: string;
    monitor?: Monitor;
    tags?: string;
    arn?: string;
    id?: string;
    environment_id?: string;
    state?: string;
    tags_all?: string;
}
export interface Monitor {
    alarm_arn: string;
    alarm_role_arn?: string;
}
export interface AppconfigExtension {
    action_point: ActionPoint;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    version?: string;
}
export interface ActionPoint {
    point?: string;
    action?: ActionPointAction;
    name?: string;
    description?: string;
    required?: string;
}
export interface ActionPointAction {
    name: string;
    role_arn: string;
    uri: string;
    description?: string;
}
export interface AppconfigExtensionAssociation {
    extension_arn: string;
    resource_arn?: string;
    parameters?: string;
    arn?: string;
    id?: string;
    extension_version?: string;
}
export interface AppconfigHostedConfigurationVersion {
    application_id: string;
    configuration_profile_id: string;
    content: string;
    content_type: string;
    description?: string;
    arn?: string;
    id?: string;
    version_number?: string;
}
export interface AppflowConnectorProfile {
    name_: string;
    connection_mode: string;
    connector_profile_config: ConnectorProfileConfig;
    connector_type: string;
    warehouse: string;
    connector_label?: string;
    kms_arn?: string;
    arn?: string;
    credentials_arn?: string;
}
export interface ConnectorProfileConfig {
    connector_profile_credentials?: ConnectorProfileCredentials;
    connector_profile_properties?: ConnectorProfileProperties;
}
export interface ConnectorProfileCredentials {
    api_key: string;
    secret_key: string;
    authentication_type: string;
    password: string;
    username: string;
    custom_authentication_type: string;
    application_key: string;
    api_token: string;
    client_id: string;
    client_secret: string;
    access_key_id: string;
    datakey: string;
    secret_access_key: string;
    user_id: string;
    api_secret_key: string;
    sapo_data?: string;
    service_now?: string;
    slack?: string;
    basic?: string;
    custom?: string;
    credentials_map?: string;
    oauth2?: string;
    access_token?: string;
    refresh_token?: string;
    client_credentials_arn?: string;
    basic_auth_credentials?: string;
    oauth_credentials?: string;
    auth_code?: string;
    redirect_uri?: string;
}
export interface ConnectorProfileProperties {
    oauth2_grant_type: string;
    token_url: string;
    instance_url: string;
    bucket_name: string;
    database_url: string;
    role_arn: string;
    application_host_url: string;
    application_service_path: string;
    client_number: string;
    auth_code_url: string;
    oauth_scopes: string;
    port_number: string;
    stage: string;
    warehouse: string;
    datadog?: string;
    dynatrace?: string;
    infor_nexus?: string;
    marketo?: string;
    sapo_data?: string;
    service_now?: string;
    slack?: string;
    veeva?: string;
    zendesk?: string;
    oauth2_properties?: string;
    token_url_custom_properties?: string;
    profile_properties?: string;
    bucket_prefix?: string;
    cluster_identifier?: string;
    database_name?: string;
    data_api_role_arn?: string;
    is_sandbox_environment?: string;
    logon_language?: string;
    oauth_properties?: string;
    private_link_service_name?: string;
    account_name?: string;
    region?: string;
}
export interface AppflowFlow {
    name: string;
    destination_flow_config: DestinationFlowConfig;
    source_flow_config: SourceFlowConfig;
    task: Task;
    trigger_config: TriggerConfig;
    description?: string;
    kms_arn?: string;
    tags?: string;
    tags_all?: string;
    arn?: string;
}
export interface DestinationFlowConfig {
    connector_type?: string;
    destination_connector_properties?: DestinationConnectorProperties;
    api_version?: string;
    connector_profile_name?: string;
}
export interface DestinationConnectorProperties {
    object: string;
    entity_name: string;
    domain_name: string;
    intermediate_bucket_name: string;
    bucket_name: string;
    object_path: string;
    event_bridge?: string;
    honeycode?: string;
    marketo?: string;
    sapo_data?: string;
    custom_properties?: string;
    id_field_names?: string;
    write_operation_type?: string;
    object_type_name?: string;
    bucket_prefix?: string;
    s3_output_format_config?: string;
    file_type?: string;
    preserve_source_data_typing?: string;
    write_operation?: string;
    aggregation_type?: string;
    prefix_format?: string;
    prefix_type?: string;
    fail_on_first_destination_error?: string;
}
export interface SourceFlowConfig {
    connector_type?: string;
    source_connector_properties?: SourceConnectorProperties;
    api_version?: string;
    connector_profile_name?: string;
    incremental_pull_config?: IncrementalPullConfig;
}
export interface IncrementalPullConfig {
    datetime_type_field_name?: string;
}
export interface SourceConnectorProperties {
    object: string;
    entity_name: string;
    bucket_name: string;
    object_path: string;
    amplitude?: string;
    datadog?: string;
    dynratrace?: string;
    infor_nexus?: string;
    marketo?: string;
    salesforce?: string;
    sapo_data?: string;
    service_now?: string;
    singular?: string;
    slack?: string;
    trend_micro?: string;
    zendesk?: string;
    custom_properties?: string;
    bucket_prefix?: string;
    s3_input_file_type?: string;
    enable_dynamic_field_update?: string;
    include_deleted_records?: string;
    document_type?: string;
    include_all_versions?: string;
    include_renditions?: string;
    include_source_files?: string;
}
export interface Task {
    source_fields?: string;
    task_type?: string;
    connector_operator?: ConnectorOperator;
    destination_field?: string;
    task_properties?: string;
}
export interface ConnectorOperator {
    amplitude?: string;
    custom_connector?: string;
    datadog?: string;
    dynatrace?: string;
    google_analytics?: string;
    infor_nexus?: string;
    marketo?: string;
    s3?: string;
    salesforce?: string;
    sapo_data?: string;
    service_now?: string;
    singular?: string;
    slack?: string;
    trendmicro?: string;
    veeva?: string;
    zendesk?: string;
}
export interface TriggerConfig {
    trigger_type?: string;
    trigger_properties?: string;
    schedule_expression?: string;
    data_pull_mode?: string;
    first_execution_from?: string;
    schedule_end_time?: string;
    schedule_offset?: string;
    schedule_start_time?: string;
    timezone?: string;
}
export interface AppintegrationsDataIntegration {
    kms_key: string;
    name: string;
    source_uri: string;
    first_execution_from: string;
    object: string;
    schedule_expression: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceAppintegrationsEventIntegration {
    eventbridge_bus: string;
    name: string;
    source: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ApplicationinsightsApplication {
    resource_group_name: string;
    auto_config_enabled?: string;
    auto_create?: string;
    cwe_monitor_enabled?: string;
    grouping_type?: string;
    ops_center_enabled?: string;
    ops_item_sns_topic_arn?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceAppmeshGatewayRoute {
    name: string;
    mesh_name: string;
    virtual_gateway_name: string;
    spec: string;
    action: string;
    match: string;
    target: string;
    virtual_service: string;
    virtual_service_name: string;
    default_target_hostname: string;
    exact: string;
    service_name: string;
    end: string;
    mesh_owner?: string;
    tags?: string;
    grpc_route?: string;
    http_route?: string;
    http2_route?: string;
    priority?: string;
    port?: string;
    rewrite?: string;
    hostname?: string;
    path?: string;
    prefix?: string;
    default_prefix?: string;
    value?: string;
    header?: string;
    query_parameter?: string;
    invert?: string;
    regex?: string;
    suffix?: string;
    start?: string;
    id?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags_all?: string;
}
export interface ResourceAppmeshMesh {
    name: string;
    spec?: string;
    tags?: string;
    type?: string;
    id?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    mesh_owner?: string;
    resource_owner?: string;
    tags_all?: string;
}
export interface ResourceAppmeshRoute {
    name: string;
    mesh_name: string;
    virtual_router_name: string;
    spec: string;
    action: string;
    match: string;
    weighted_target: string;
    unit: string;
    value: string;
    max_retries: string;
    per_retry_timeout: string;
    virtual_node: string;
    weight: string;
    end: string;
    mesh_owner?: string;
    tags?: string;
    grpc_route?: string;
    http2_route?: string;
    http_route?: string;
    priority?: string;
    tcp_route?: string;
    retry_policy?: string;
    timeout?: string;
    idle?: string;
    metadata?: string;
    method_name?: string;
    service_name?: string;
    invert?: string;
    exact?: string;
    prefix?: string;
    regex?: string;
    suffix?: string;
    grpc_retry_events?: string;
    http_retry_events?: string;
    tcp_retry_events?: string;
    per_request?: string;
    header?: string;
    method?: string;
    path?: string;
    query_parameter?: string;
    scheme?: string;
    port?: string;
    start?: string;
    id?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags_all?: string;
}
export interface AppmeshVirtualGateway {
    name: string;
    mesh_name: string;
    spec: string;
    listener: string;
    validation: string;
    certificate_chain: string;
    private_key: string;
    secret_name: string;
    trust: string;
    match: string;
    exact: string;
    certificate_authority_arns: string;
    port_mapping: string;
    path: string;
    key: string;
    value: string;
    port: string;
    protocol: string;
    max_requests: string;
    max_connections: string;
    healthy_threshold: string;
    timeout_millis: string;
    unhealthy_threshold: string;
    certificate: string;
    certificate_arn: string;
    mesh_owner?: string;
    tags?: string;
    backend_defaults?: string;
    logging?: string;
    client_policy?: string;
    tls?: string;
    enforce?: string;
    ports?: string;
    file?: string;
    sds?: string;
    subject_alternative_names?: string;
    acm?: string;
    connection_pool?: string;
    health_check?: string;
    access_log?: string;
    format?: string;
    json?: string;
    text?: string;
    grpc?: string;
    http?: string;
    http2?: string;
    max_pending_requests?: string;
    id?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags_all?: string;
}
export interface AppmeshVirtualNode {
    name: string;
    mesh_name: string;
    spec: string;
    virtual_service: string;
    virtual_service_name: string;
    validation: string;
    certificate_chain: string;
    private_key: string;
    secret_name: string;
    trust: string;
    match: string;
    exact: string;
    certificate_authority_arns: string;
    port_mapping: string;
    path: string;
    key: string;
    value: string;
    namespace_name: string;
    service_name: string;
    hostname: string;
    port: string;
    protocol: string;
    max_requests: string;
    max_connections: string;
    healthy_threshold: string;
    timeout_millis: string;
    unhealthy_threshold: string;
    base_ejection_duration: string;
    interval: string;
    max_ejection_percent: string;
    max_server_errors: string;
    unit: string;
    certificate: string;
    certificate_arn: string;
    mesh_owner?: string;
    tags?: string;
    backend?: string;
    backend_defaults?: string;
    listener?: string;
    logging?: string;
    service_discovery?: string;
    client_policy?: string;
    tls?: string;
    enforce?: string;
    ports?: string;
    file?: string;
    sds?: string;
    subject_alternative_names?: string;
    acm?: string;
    connection_pool?: string;
    health_check?: string;
    outlier_detection?: string;
    timeout?: string;
    access_log?: string;
    format?: string;
    json?: string;
    text?: string;
    aws_cloud_map?: string;
    dns?: string;
    attributes?: string;
    ip_preference?: string;
    response_type?: string;
    grpc?: string;
    http?: string;
    http2?: string;
    tcp?: string;
    max_pending_requests?: string;
    idle?: string;
    per_request?: string;
    id?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags_all?: string;
}
export interface ResourceAppmeshVirtualRouter {
    name: string;
    mesh_name: string;
    spec: string;
    port_mapping: string;
    port: string;
    protocol: string;
    mesh_owner?: string;
    tags?: string;
    listener?: string;
    id?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags_all?: string;
}
export interface AppmeshVirtualService {
    name: string;
    mesh_name: string;
    spec: string;
    virtual_node_name: string;
    virtual_router_name: string;
    mesh_owner?: string;
    tags?: string;
    virtual_node?: string;
    virtual_router?: string;
    id?: string;
    arn?: string;
    created_date?: string;
    last_updated_date?: string;
    resource_owner?: string;
    tags_all?: string;
}
export interface ApprunnerAutoScalingConfigurationVersion {
    auto_scaling_configuration_name: string;
    max_concurrency?: string;
    max_size?: string;
    min_size?: string;
    tags?: string;
    arn?: string;
    auto_scaling_configuration_revision?: string;
    latest?: string;
    status?: string;
    tags_all?: string;
}
export interface ApprunnerConnection {
    connection_name: string;
    provider_type: string;
    tags?: string;
    arn?: string;
    status?: string;
    tags_all?: string;
}
export interface ApprunnerCustomDomainAssociation {
    domain_name: string;
    service_arn: string;
    enable_www_subdomain?: string;
    id?: string;
    certificate_validation_records?: CertificateValidationRecords;
    dns_target?: string;
    value?: string;
}
export interface CertificateValidationRecords {
    name?: string;
    status?: string;
    type?: string;
    value?: string;
}
export interface ApprunnerObservabilityConfiguration {
    observability_configuration_name: string;
    trace_configuration?: TraceConfiguration;
    tags?: string;
    arn?: string;
    observability_configuration_revision?: string;
    latest?: string;
    status?: string;
    tags_all?: string;
}
export interface TraceConfiguration {
    vendor: string;
}
export interface ApprunnerService {
    runtime: string;
    service_name?: string;
    source_configuration?: SourceConfiguration;
    auto_scaling_configuration_arn?: string;
    encryption_configuration?: ApprunnerServiceEncryptionConfiguration;
    health_check_configuration?: HealthCheckConfiguration;
    instance_configuration?: ApprunnerServiceInstanceConfiguration;
    network_configuration?: ApprunnerServiceNetworkConfiguration;
    observability_configuration?: ObservabilityConfiguration;
    tags?: string;
    build_command?: string;
    arn?: string;
    service_id?: string;
    service_url?: string;
    status?: string;
    tags_all?: string;
}
export interface ApprunnerServiceEncryptionConfiguration {
    kms_key: string;
}
export interface HealthCheckConfiguration {
    healthy_threshold?: string;
    interval?: string;
    path?: string;
    protocol?: string;
    timeout?: string;
    unhealthy_threshold?: string;
}
export interface ApprunnerServiceInstanceConfiguration {
    cpu?: string;
    instance_role_arn?: string;
    memory?: string;
}
export interface ApprunnerServiceNetworkConfiguration {
    ingress_configuration?: IngressConfiguration;
    egress_configuration?: EgressConfiguration;
    egress_type?: string;
    vpc_connector_arn?: string;
}
export interface EgressConfiguration {
    egress_type?: string;
    vpc_connector_arn?: string;
}
export interface IngressConfiguration {
    is_publicly_accessible: string;
}
export interface ObservabilityConfiguration {
    observability_enabled: string;
    observability_configuration_arn?: string;
}
export interface SourceConfiguration {
    authentication_configuration?: AuthenticationConfiguration;
    auto_deployments_enabled?: string;
    code_repository?: SourceConfigurationCodeRepository;
    image_repository?: ImageRepository;
}
export interface AuthenticationConfiguration {
    access_role_arn?: string;
    connection_arn?: string;
}
export interface SourceConfigurationCodeRepository {
    repository_url: string;
    source_code_version: EntityTypes;
    code_configuration?: CodeConfiguration;
}
export interface CodeConfiguration {
    configuration_source: string;
    code_configuration_values?: CodeConfigurationValues;
    repository?: string;
    api?: string;
}
export interface CodeConfigurationValues {
    runtime: string;
    build_command?: string;
    port?: string;
    runtime_environment_secrets?: string;
    runtime_environment_variables?: string;
    start_command?: string;
}
export interface EntityTypes {
    type?: string;
}
export interface ImageRepository {
    image_identifier: string;
    image_repository_type: string;
    image_configuration?: ImageConfiguration;
}
export interface ImageConfiguration {
    port?: string;
    runtime_environment_secrets?: string;
    runtime_environment_variables?: string;
    start_command?: string;
}
export interface ApprunnerVpcConnector {
    vpc_connector_name: string;
    subnets: string;
    security_groups?: string;
    tags?: string;
    arn?: string;
    status?: string;
    vpc_connector_revision?: string;
    tags_all?: string;
}
export interface ApprunnerVpcIngressConnection {
    name: string;
    service_arn: string;
    ingress_vpc_configuration: IngressVpcConfiguration;
    tags?: string;
    arn?: string;
    domain_name?: string;
    status?: string;
    tags_all?: string;
}
export interface IngressVpcConfiguration {
    vpc_id?: string;
    vpc_endpoint_id?: string;
}
export interface AppstreamDirectoryConfig {
    directory_name: string;
    organizational_unit_distinguished_names: string;
    service_account_credentials: ServiceAccountCredentials;
    account_password: string;
    id?: string;
    created_time?: string;
}
export interface ServiceAccountCredentials {
    account_name?: string;
    account_password?: string;
}
export interface AppstreamFleet {
    compute_capacity: ComputeCapacity;
    instance_type: string;
    name: string;
    description?: string;
    disconnect_timeout_in_seconds?: string;
    display_name?: string;
    domain_join_info?: DomainJoinInfo;
    enable_default_internet_access?: string;
    fleet_type?: string;
    iam_role_arn?: string;
    idle_disconnect_timeout_in_seconds?: string;
    image_name?: string;
    image_arn?: string;
    stream_view?: string;
    max_user_duration_in_seconds?: string;
    vpc_config?: VpcClass;
    tags?: string;
    id?: string;
    arn?: string;
    state?: string;
    created_time?: string;
}
export interface ComputeCapacity {
    available?: string;
    in_use?: string;
    running?: string;
}
export interface DomainJoinInfo {
    directory_name?: string;
    organizational_unit_distinguished_name?: string;
}
export interface VpcClass {
    security_group_ids?: string;
    subnet_ids?: string;
}
export interface AppstreamFleetStackAssociation {
    fleet_name: string;
    stack_name: string;
    id?: string;
}
export interface AppstreamImageBuilder {
    instance_type: string;
    name: string;
    access_endpoint?: AccessEndpoint;
    appstream_agent_version?: string;
    description?: string;
    display_name?: string;
    domain_join_info?: DomainJoinInfo;
    enable_default_internet_access?: string;
    iam_role_arn?: string;
    image_arn?: string;
    image_name?: string;
    vpc_config?: VpcClass;
    tags?: string;
    arn?: string;
    created_time?: string;
    id?: string;
    state?: string;
    tags_all?: string;
}
export interface AccessEndpoint {
    endpoint_type: string;
    vpce_id?: string;
}
export interface AppstreamStack {
    name: string;
    access_endpoints?: AccessEndpoint;
    application_settings?: ApplicationSettings;
    description?: string;
    display_name?: string;
    embed_host_domains?: string;
    feedback_url?: string;
    redirect_url?: string;
    storage_connectors?: StorageConnectors;
    user_settings?: AppstreamStackUserSettings;
    streaming_experience_settings?: StreamingExperienceSettings;
    tags?: string;
    resource_identifier?: string;
    arn?: string;
    created_time?: string;
    id?: string;
}
export interface ApplicationSettings {
    enabled: string;
    settings_group?: string;
}
export interface StorageConnectors {
    connector_type: string;
    domains?: string;
    resource_identifier?: string;
}
export interface StreamingExperienceSettings {
    preferred_protocol?: string;
}
export interface AppstreamStackUserSettings {
    action: string;
    permission: string;
}
export interface AppstreamUser {
    authentication_type: string;
    user_name: string;
    enabled?: string;
    first_name?: string;
    last_name?: string;
    send_email_notification?: string;
    arn?: string;
    created_time?: string;
    id?: string;
    status?: string;
}
export interface AppstreamUserStackAssociation {
    authentication_type: string;
    stack_name: string;
    user_name: string;
    send_email_notification?: string;
    id?: string;
}
export interface AppsyncAPICache {
    api_id: string;
    api_caching_behavior: string;
    type: string;
    ttl: string;
    at_rest_encryption_enabled?: string;
    transit_encryption_enabled?: string;
    id?: string;
}
export interface AppsyncAPIKey {
    api_id: string;
    description?: string;
    expires?: string;
    id?: string;
    key?: string;
}
export interface AppsyncDatasource {
    api_id: string;
    name: string;
    type: string;
    endpoint: string;
    event_bus_arn: string;
    function_arn: string;
    description?: string;
    dynamodb_config?: DynamodbConfig;
    elasticsearch_config?: ElasticsearchConfig;
    event_bridge_config?: EventBridgeConfig;
    http_config?: HTTPConfig;
    lambda_config?: AppsyncDatasourceLambdaConfig;
    opensearchservice_config?: string;
    relational_database_config?: RelationalDatabaseConfig;
    service_role_arn?: string;
    schema?: string;
    arn?: string;
}
export interface DynamodbConfig {
    table_name: string;
    region?: string;
    use_caller_credentials?: string;
    delta_sync_config?: DeltaSyncConfig;
    versioned?: string;
}
export interface DeltaSyncConfig {
    delta_sync_table_name: string;
    base_table_ttl?: string;
    delta_sync_table_ttl?: string;
}
export interface ElasticsearchConfig {
    endpoint: string;
    region?: string;
}
export interface EventBridgeConfig {
    event_bus_arn: string;
}
export interface HTTPConfig {
    endpoint: string;
    authorization_config?: HTTPConfigAuthorizationConfig;
}
export interface HTTPConfigAuthorizationConfig {
    authorization_type?: string;
    aws_iam_config?: AwsIamConfig;
}
export interface AwsIamConfig {
    signing_region?: string;
}
export interface AppsyncDatasourceLambdaConfig {
    function_arn: string;
}
export interface RelationalDatabaseConfig {
    http_endpoint_config: HTTPEndpointConfig;
    source_type?: string;
    schema?: string;
}
export interface HTTPEndpointConfig {
    db_cluster_identifier?: string;
    aws_secret_store_arn?: string;
    database_name?: string;
    region?: string;
    schema?: string;
}
export interface AppsyncDomainName {
    certificate_arn: string;
    domain_name: string;
    description?: string;
    id?: string;
    appsync_domain_name?: string;
    hosted_zone_id?: string;
}
export interface AppsyncDomainNameAPIAssociation {
    api_id: string;
    domain_name: string;
    id?: string;
}
export interface AppsyncFunction {
    api_id: string;
    data_source: string;
    name: string;
    code?: string;
    max_batch_size?: string;
    request_mapping_template?: string;
    response_mapping_template?: string;
    description?: string;
    runtime?: Runtime;
    sync_config?: SyncConfig;
    function_version?: string;
    id?: string;
    arn?: string;
    function_id?: string;
}
export interface Runtime {
    name?: string;
    runtime_version?: string;
}
export interface SyncConfig {
    conflict_detection?: string;
    conflict_handler?: string;
    lambda_conflict_handler_config?: LambdaConflictHandlerConfig;
}
export interface LambdaConflictHandlerConfig {
    lambda_conflict_handler_arn?: string;
}
export interface AppsyncGraphqlAPI {
    name: string;
    log_config?: LogConfig;
    openid_connect_config?: OpenidConnectConfig;
    user_pool_config?: UserPoolConfig;
    lambda_authorizer_config?: LambdaAuthorizerConfig;
    schema?: string;
    additional_authentication_provider?: AdditionalAuthenticationProvider;
    tags?: string;
    xray_enabled?: string;
    visibility?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
    uris?: string;
}
export interface AdditionalAuthenticationProvider {
    authentication_type: string;
    openid_connect_config?: string;
    user_pool_config?: string;
}
export interface LambdaAuthorizerConfig {
    authorizer_uri: string;
    authorizer_result_ttl_in_seconds?: string;
    identity_validation_expression?: string;
}
export interface LogConfig {
    cloudwatch_logs_role_arn: string;
    field_log_level: string;
    exclude_verbose_content?: string;
}
export interface OpenidConnectConfig {
    issuer: string;
    auth_ttl?: string;
    client_id?: string;
    iat_ttl?: string;
}
export interface UserPoolConfig {
    default_action: string;
    user_pool_id: string;
    app_id_client_regex?: string;
    aws_region?: string;
}
export interface AppsyncResolver {
    api_id: string;
    type: string;
    field: string;
    code?: string;
    request_template?: string;
    response_template?: string;
    data_source?: string;
    max_batch_size?: string;
    kind?: string;
    sync_config?: SyncConfig;
    pipeline_config?: PipelineConfig;
    caching_config?: CachingConfig;
    runtime?: Runtime;
    functions?: string;
    arn?: string;
}
export interface CachingConfig {
    caching_keys?: string;
    ttl?: string;
}
export interface PipelineConfig {
    functions?: string;
}
export interface AppsyncType {
    api_id: string;
    format: string;
    definition: string;
    arn?: string;
    description?: string;
    id?: string;
    name?: string;
}
export interface AthenaDatabase {
    bucket: string;
    name: string;
    acl_configuration?: ACLConfiguration;
    comment?: string;
    encryption_configuration?: AthenaDatabaseEncryptionConfiguration;
    expected_bucket_owner?: string;
    force_destroy?: string;
    properties?: string;
    id?: string;
}
export interface ACLConfiguration {
    s3_acl_option: string;
}
export interface AthenaDatabaseEncryptionConfiguration {
    encryption_option: string;
    kms_key?: string;
}
export interface AthenaNamedQuery {
    name: string;
    database: string;
    query: string;
    workgroup?: string;
    description?: string;
    id?: string;
}
export interface AthenaWorkgroup {
    name: string;
    configuration?: string;
    description?: string;
    state?: string;
    tags?: string;
    force_destroy?: string;
    arn?: string;
    engine_version?: string;
    effective_engine_version?: string;
    id?: string;
    tags_all?: string;
}
export interface AuditmanagerAccountRegistration {
    delegated_admin_account?: string;
    deregister_on_destroy?: string;
    kms_key?: string;
    id?: string;
    status?: string;
}
export interface AuditmanagerAssessment {
    name: string;
    assessment_reports_destination: AssessmentReportsDestination;
    framework_id: string;
    roles: Roles;
    scope: AuditmanagerAssessmentScope;
    service_name: string;
    description?: string;
    tags?: string;
    aws_accounts?: AwsAccountsClass;
    aws_services?: AwsServices;
    arn?: string;
    id?: string;
    roles_all?: string;
    status?: string;
}
export interface AssessmentReportsDestination {
    destination?: string;
    destination_type?: string;
}
export interface AwsServices {
    service_name: string;
}
export interface Roles {
    role_arn?: string;
    role_type?: string;
}
export interface AuditmanagerAssessmentScope {
    aws_accounts?: string;
    aws_services?: string;
}
export interface AuditmanagerAssessmentDelegation {
    assessment_id: string;
    control_set_id: string;
    role_arn: string;
    role_type: string;
    comment?: string;
    delegation_id?: string;
    id?: string;
    status?: string;
}
export interface AuditmanagerAssessmentReport {
    name: string;
    assessment_id: string;
    description?: string;
    author?: string;
    id?: string;
    status?: string;
}
export interface AuditmanagerControl {
    name: string;
    control_mapping_sources: ControlMappingSources;
    action_plan_instructions?: string;
    action_plan_title?: string;
    description?: string;
    tags?: string;
    testing_information?: string;
    source_keyword?: SourceKeyword;
    arn?: string;
    id?: string;
    type?: string;
}
export interface ControlMappingSources {
    source_name?: string;
    source_set_up_option?: string;
    source_type?: string;
    source_description?: string;
    source_frequency?: string;
    source_keyword?: string;
    troubleshooting_text?: string;
}
export interface SourceKeyword {
    keyword_input_type: string;
    keyword_value: string;
}
export interface AuditmanagerFramework {
    control_sets: ControlSets;
    id: string;
    compliance_type?: string;
    description?: string;
    tags?: string;
    arn?: string;
    framework_type?: string;
}
export interface ControlSets {
    name?: string;
    controls?: AwsAccountsClass;
}
export interface AuditmanagerFrameworkShare {
    destination_account: string;
    destination_region: string;
    framework_id: string;
    comment?: string;
    id?: string;
    status?: string;
}
export interface AuditmanagerOrganizationAdminAccountRegistration {
    admin_account_id: string;
    id?: string;
    organization_id?: string;
}
export interface AutoscalingAttachment {
    autoscaling_group_name: string;
    elb?: string;
    lb_target_group_arn?: string;
}
export interface AutoscalingGroupTag {
    autoscaling_group_name: string;
    key: string;
    value: string;
    propagate_at_launch: string;
    id?: string;
}
export interface AutoscalingLifecycleHook {
    name: string;
    autoscaling_group_name: string;
    lifecycle_transition: string;
    default_result?: string;
    heartbeat_timeout?: string;
    notification_metadata?: string;
    notification_target_arn?: string;
    role_arn?: string;
}
export interface AutoscalingNotification {
    group_names: string;
    notifications: string;
    topic_arn: string;
}
export interface AutoscalingPolicy {
    autoscaling_group_name: string;
    scaling_adjustment: string;
    target_value: string;
    metric_specification: string;
    adjustment_type?: string;
    policy_type?: string;
    predictive_scaling_configuration?: PredictiveScalingConfiguration;
    estimated_instance_warmup?: string;
    enabled?: string;
    min_adjustment_magnitude?: string;
    cooldown?: string;
    metric_aggregation_type?: string;
    step_adjustment?: string;
    metric_interval_lower_bound?: string;
    metric_interval_upper_bound?: string;
    target_tracking_configuration?: string;
    predefined_metric_specification?: PredefinedMetricSpecification;
    customized_metric_specification?: CustomizedMetricSpecification;
    disable_scale_in?: string;
    metric_dimension?: string;
    metrics?: string;
    arn?: string;
    name?: string;
}
export interface CustomizedMetricSpecification {
    metric_dimension?: Setting;
    metric_name?: string;
    namespace?: string;
    statistic?: string;
    metrics?: CustomizedMetricSpecificationMetrics;
    metric_stat?: string;
}
export interface Setting {
    name: string;
    value: string;
}
export interface CustomizedMetricSpecificationMetrics {
    id: string;
    metric: MetricsMetric;
    value: string;
    expression?: string;
    label?: string;
    metric_stat?: MetricsMetricStat;
    return_data?: string;
    unit?: string;
}
export interface MetricsMetric {
    dimensions?: string;
    metric_name?: string;
    namespace?: string;
    name?: string;
    value?: string;
}
export interface MetricsMetricStat {
    metric: string;
    stat: string;
    unit?: string;
}
export interface PredefinedMetricSpecification {
    predefined_metric_type: string;
    resource_label?: string;
}
export interface PredictiveScalingConfiguration {
    metric_specification: MetricSpecification;
    value: string;
    max_capacity_breach_behavior?: string;
    max_capacity_buffer?: string;
    mode?: string;
    scheduling_buffer_time?: string;
    customized_capacity_metric_specification?: string;
    customized_load_metric_specification?: string;
    customized_scaling_metric_specification?: string;
    predefined_load_metric_specification?: string;
    predefined_metric_pair_specification?: string;
    predefined_scaling_metric_specification?: string;
}
export interface MetricSpecification {
    customized_capacity_metric_specification?: CustomizedCapacityMetricSpecificationClass;
    customized_load_metric_specification?: CustomizedCapacityMetricSpecificationClass;
    customized_scaling_metric_specification?: CustomizedCapacityMetricSpecificationClass;
    predefined_load_metric_specification?: PredefinedSpecification;
    predefined_metric_pair_specification?: PredefinedSpecification;
    predefined_scaling_metric_specification?: PredefinedSpecification;
    metric_data_queries?: MetricDataQueries;
    metric_stat?: MetricSpecificationMetricStat;
    metric?: MetricSpecificationMetric;
    unit?: string;
    dimensions?: InsertHeader;
    namespace?: string;
    value?: string;
}
export interface CustomizedCapacityMetricSpecificationClass {
    metric_data_queries?: string;
}
export interface InsertHeader {
    name?: string;
    value?: string;
}
export interface MetricSpecificationMetric {
    metric_name: string;
    namespace: string;
    dimensions?: string;
}
export interface MetricDataQueries {
    id: string;
    expression?: string;
    label?: string;
    metric_stat?: string;
    return_data?: string;
}
export interface MetricSpecificationMetricStat {
    metric?: string;
    stat?: string;
    unit?: string;
}
export interface PredefinedSpecification {
    predefined_metric_type?: string;
    resource_label?: string;
}
export interface AutoscalingSchedule {
    autoscaling_group_name: string;
    scheduled_action_name: string;
    desired_capacity?: string;
    end_time?: string;
    max_size?: string;
    min_size?: string;
    recurrence?: string;
    start_time?: string;
    time_zone?: string;
    arn?: string;
}
export interface AutoscalingplansScalingPlan {
    name: string;
    application_source: string;
    scaling_instruction: string;
    key: string;
    max_capacity: string;
    min_capacity: string;
    resource_id: string;
    scalable_dimension: string;
    service_namespace: string;
    target_tracking_configuration: string;
    metric_name: string;
    namespace: string;
    statistic: string;
    predefined_load_metric_type: string;
    target_value: string;
    predefined_scaling_metric_type: string;
    cloudformation_stack_arn?: string;
    tag_filter?: string;
    values?: string;
    customized_load_metric_specification?: string;
    disable_dynamic_scaling?: string;
    predefined_load_metric_specification?: string;
    predictive_scaling_max_capacity_buffer?: string;
    predictive_scaling_mode?: string;
    scaling_policy_update_behavior?: string;
    scheduled_action_buffer_time?: string;
    dimensions?: string;
    unit?: string;
    resource_label?: string;
    customized_scaling_metric_specification?: string;
    disable_scale_in?: string;
    predefined_scaling_metric_specification?: string;
    estimated_instance_warmup?: string;
    scale_in_cooldown?: string;
    scale_out_cooldown?: string;
    id?: string;
    scaling_plan_version?: string;
}
export interface ResourceBackupFramework {
    name: string;
    description?: string;
    tags?: string;
    value?: string;
    compliance_resource_ids?: string;
    compliance_resource_types?: string;
    arn?: string;
    creation_time?: string;
    deployment_status?: string;
    id?: string;
    status?: string;
    tags_all?: string;
}
export interface BackupGlobalSettings {
    global_settings: string;
    id?: string;
}
export interface ResourceBackupPlan {
    name: string;
    rule: string;
    rule_name: string;
    target_vault_name: string;
    destination_vault_arn: string;
    backup_options: string;
    resource_type: string;
    advanced_backup_setting?: string;
    tags?: string;
    schedule?: string;
    enable_continuous_backup?: string;
    start_window?: string;
    completion_window?: string;
    lifecycle?: string;
    recovery_point_tags?: string;
    cold_storage_after?: string;
    delete_after?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
    version?: string;
}
export interface BackupRegionSettings {
    resource_type_opt_in_preference: string;
    resource_type_management_preference?: string;
    id?: string;
}
export interface ResourceBackupReportPlan {
    name: string;
    s3_bucket_name: string;
    report_template: string;
    description?: string;
    tags?: string;
    formats?: string;
    s3_key_prefix?: string;
    accounts?: string;
    framework_arns?: string;
    number_of_frameworks?: string;
    organization_units?: string;
    regions?: string;
    arn?: string;
    creation_time?: string;
    deployment_status?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceBackupSelection {
    name: string;
    plan_id: string;
    iam_role_arn: string;
    type: string;
    key: string;
    value: string;
    selection_tag?: string;
    condition?: string;
    resources?: string;
    not_resources?: string;
    id?: string;
}
export interface ResourceBackupVault {
    name: string;
    force_destroy?: string;
    kms_key_arn?: string;
    tags?: string;
    id?: string;
    arn?: string;
    recovery_points?: string;
    tags_all?: string;
}
export interface BackupVaultLockConfiguration {
    backup_vault_name: string;
    changeable_for_days?: string;
    max_retention_days?: string;
    min_retention_days?: string;
    backup_vault_arn?: string;
}
export interface BackupVaultNotifications {
    backup_vault_name: string;
    sns_topic_arn: string;
    backup_vault_events: string;
    id?: string;
    backup_vault_arn?: string;
}
export interface BackupVaultPolicy {
    backup_vault_name: string;
    policy: string;
    id?: string;
    backup_vault_arn?: string;
}
export interface ResourceBatchComputeEnvironment {
    service_role: string;
    compute_environment_name?: string;
    compute_environment_name_prefix?: string;
    compute_resources?: ComputeResources;
    eks_configuration?: EksConfiguration;
    state?: string;
    ec2_configuration?: Ec2Configuration;
    launch_template?: LaunchTemplateSpecificationClass;
    arn?: string;
    ecs_cluster_arn?: string;
    status?: string;
    status_reason?: string;
    tags_all?: string;
}
export interface ComputeResources {
    max_vcpus: string;
    subnets: string;
    type: string;
    allocation_strategy?: string;
    bid_percentage?: string;
    desired_vcpus?: string;
    ec2_configuration?: string;
    ec2_key_pair?: string;
    image_id?: string;
    instance_role?: string;
    instance_type?: string;
    launch_template?: string;
    min_vcpus?: string;
    placement_group?: string;
    security_group_ids?: string;
    spot_iam_fleet_role?: string;
    tags?: string;
}
export interface Ec2Configuration {
    image_id_override?: string;
    image_type?: string;
}
export interface EksConfiguration {
    eks_cluster_arn: string;
    kubernetes_namespace: string;
}
export interface LaunchTemplateSpecificationClass {
    launch_template_id?: string;
    launch_template_name?: string;
    version?: string;
}
export interface BatchJobDefinition {
    name: string;
    type: string;
    container_properties?: string;
    parameters?: string;
    platform_capabilities?: string;
    propagate_tags?: string;
    retry_strategy?: RetryStrategy;
    tags?: string;
    timeout?: string;
    evaluate_on_exit?: string;
    arn?: string;
    revision?: string;
    tags_all?: string;
}
export interface RetryStrategy {
    attempts?: string;
    evaluate_on_exit?: EvaluateOnExit;
}
export interface EvaluateOnExit {
    action: string;
    on_exit_code?: string;
    on_reason?: string;
    on_status_reason?: string;
    attempt_duration_seconds?: string;
}
export interface ResourceBatchJobQueue {
    name: string;
    compute_environments: string;
    priority: string;
    state: string;
    scheduling_policy_arn?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceBatchSchedulingPolicy {
    name: string;
    share_identifier: string;
    tags?: string;
    compute_reservation?: string;
    share_delay_seconds?: string;
    weight_factor?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceBudgetsBudget {
    budget_type: string;
    limit_amount: string;
    limit_unit: string;
    time_unit: string;
    comparison_operator: string;
    threshold: string;
    threshold_type: string;
    notification_type: string;
    start_time: string;
    amount: string;
    unit: string;
    account_id?: string;
    auto_adjust_data?: string;
    name?: string;
    name_prefix?: string;
    cost_filter?: string;
    cost_types?: string;
    time_period_end?: string;
    time_period_start?: string;
    notification?: string;
    planned_limit?: string;
    id?: string;
    arn?: string;
    include_credit?: string;
    include_discount?: string;
    include_other_subscription?: string;
    include_recurring?: string;
    include_refund?: string;
    include_subscription?: string;
    include_support?: string;
    include_tax?: string;
    include_upfront?: string;
    use_amortized?: string;
    use_blended?: string;
    instancetype?: string;
    subscriber_email_addresses?: string;
    subscriber_sns_topic_arns?: string;
}
export interface BudgetsBudgetAction {
    budget_name: string;
    action_threshold: ActionThreshold;
    action_type: string;
    approval_model: string;
    definition: BudgetsBudgetActionDefinition;
    execution_role_arn: string;
    notification_type: string;
    subscriber: Subscriber;
    action_threshold_value: string;
    region: string;
    account_id?: string;
    action_id?: string;
    id?: string;
    arn?: string;
    status?: string;
}
export interface ActionThreshold {
    action_threshold_type?: string;
    action_threshold_value?: string;
}
export interface BudgetsBudgetActionDefinition {
    iam_action_definition?: IamActionDefinition;
    ssm_action_definition?: SsmActionDefinition;
    scp_action_definition?: SCPActionDefinition;
    target_ids?: string;
    region?: string;
}
export interface IamActionDefinition {
    policy_arn?: string;
    groups?: string;
    roles?: string;
    users?: string;
}
export interface SCPActionDefinition {
    policy_id?: string;
    target_ids?: string;
}
export interface SsmActionDefinition {
    action_sub_type?: string;
    instance_ids?: string;
    region?: string;
}
export interface Subscriber {
    address?: string;
    subscription_type?: string;
}
export interface CeAnomalyMonitor {
    name: string;
    monitor_type: string;
    monitor_dimension: string;
    monitor_specification: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface CeAnomalySubscription {
    frequency: string;
    monitor_arn_list: string;
    name: string;
    subscriber: string;
    type: string;
    address: string;
    account_id?: string;
    threshold?: string;
    threshold_expression?: ThresholdExpression;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ThresholdExpression {
    and?: string;
    cost_category?: CostCategory;
    dimension?: CostCategory;
    not?: string;
    or?: string;
    tags?: CostCategory;
}
export interface CeCostAllocationTag {
    tag_key: string;
    status: string;
    id?: string;
    type?: string;
}
export interface ResourceCeCostCategory {
    name: string;
    rule: CeCostCategoryRule;
    rule_version: string;
    default_value?: string;
    split_charge_rule?: FluffySplitChargeRule;
    tags?: CostCategory;
    inherited_value?: InheritedValue;
    value?: string;
    cost_category?: CostCategory;
    dimension?: CostCategory;
    values?: string;
    parameter?: CeCostCategoryParameter;
    arn?: string;
    effective_end?: string;
    id?: string;
    tags_all?: string;
}
export interface FluffySplitChargeRule {
    method: string;
    source: string;
    targets: string;
    parameter?: string;
}
export interface ChimeVoiceConnector {
    name: string;
    require_encryption: string;
    aws_region?: string;
    tags?: string;
    arn?: string;
    outbound_host_name?: string;
    tags_all?: string;
}
export interface ChimeVoiceConnectorGroup {
    name: string;
    connector?: Connector;
    id?: string;
}
export interface Connector {
    voice_connector_id: string;
    priority: string;
}
export interface ChimeVoiceConnectorLogging {
    voice_connector_id: string;
    enable_sip_logs?: string;
    enable_media_metric_logs?: string;
    id?: string;
}
export interface ChimeVoiceConnectorOrigination {
    voice_connector_id: string;
    route: ChimeVoiceConnectorOriginationRoute;
    disabled?: string;
    id?: string;
}
export interface ChimeVoiceConnectorOriginationRoute {
    host?: string;
    port?: string;
    priority?: string;
    protocol?: string;
    weight?: string;
}
export interface ChimeVoiceConnectorStreaming {
    voice_connector_id: string;
    data_retention: string;
    streaming_notification_targets?: string;
    media_insights_configuration?: MediaInsightsConfiguration;
    id?: string;
}
export interface MediaInsightsConfiguration {
    disabled?: string;
    configuration_arn?: string;
}
export interface ChimeVoiceConnectorTermination {
    voice_connector_id: string;
    cidr_allow_list: string;
    calling_regions: string;
    disabled?: string;
    default_phone_number?: string;
    cps_limit?: string;
    id?: string;
}
export interface ChimeVoiceConnectorTerminationCredentials {
    voice_connector_id: string;
    credentials: Credentials;
    id?: string;
}
export interface Credentials {
    username?: string;
    password?: string;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfiguration {
    name: string;
    resource_access_role_arn: string;
    elements: Elements;
    voice_tone_analysis_status: string;
    real_time_alert_configuration?: RealTimeAlertConfiguration;
    tags?: string;
    disabled?: string;
    arn?: string;
    id?: string;
}
export interface Elements {
    type?: string;
    amazon_transcribe_call_analytics_processor_configuration?: string;
    call_analytics_stream_categories?: string;
    content_identification_type?: string;
    content_redaction_type?: string;
    enable_partial_results_stabilization?: string;
    filter_partial_results?: string;
    language_code?: string;
    language_model_name?: string;
    partial_results_stability?: string;
    pii_entity_types?: string;
    post_call_analytics_settings?: string;
    content_redaction_output?: string;
    data_access_role_arn?: string;
    output_encryption_kms_key_id?: string;
    output_location?: string;
    vocabulary_filter_method?: string;
    vocabulary_filter_name?: string;
    vocabulary_name?: string;
    amazon_transcribe_processor_configuration?: string;
    show_speaker_label?: string;
    kinesis_data_stream_sink_configuration?: string;
    insights_target?: string;
    lambda_function_sink_configuration?: string;
    sns_topic_sink_configuration?: string;
    sqs_queue_sink_configuration?: string;
    s3_recording_sink_configuration?: string;
    destination?: string;
    voice_analytics_processor_configuration?: string;
    speaker_search_status?: string;
    voice_tone_analysis_status?: string;
}
export interface RealTimeAlertConfiguration {
    rules: string;
    type: string;
    rule_name: string;
    keywords: string;
    sentiment_type: string;
    issue_detection_configuration?: string;
    keyword_match_configuration?: string;
    negate?: string;
    sentiment_configuration?: string;
    time_period?: string;
    disabled?: string;
}
export interface ChimesdkvoiceGlobalSettings {
    voice_connector: VoiceConnector;
    id?: string;
}
export interface VoiceConnector {
    cdr_bucket?: string;
}
export interface ChimesdkvoiceSIPMediaApplication {
    aws_region: string;
    endpoints: ChimesdkvoiceSIPMediaApplicationEndpoints;
    name: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ChimesdkvoiceSIPMediaApplicationEndpoints {
    lambda_arn?: string;
}
export interface ChimesdkvoiceSIPRule {
    name: string;
    target_applications: TargetApplications;
    trigger_type: string;
    trigger_value: string;
    sip_media_application_id: string;
    disabled?: string;
    id?: string;
}
export interface TargetApplications {
    aws_region?: string;
    priority?: string;
    sip_media_application_id?: string;
}
export interface ChimesdkvoiceVoiceProfileDomain {
    name: string;
    server_side_encryption_configuration: string;
    kms_key_arn: string;
    description?: string;
    arn?: string;
    id?: string;
}
export interface CleanroomsCollaboration {
    name: string;
    description: string;
    creator_member_abilities: string;
    creator_display_name: string;
    query_log_status: string;
    data_encryption_metadata: string;
    member?: string;
    tags?: string;
    arn?: string;
    id?: string;
    create_time?: string;
    member_status?: string;
    updated_time?: string;
}
export interface CleanroomsConfiguredTable {
    name: string;
    analysis_method: string;
    allowed_columns: string;
    table_reference: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    create_time?: string;
    update_time?: string;
}
export interface Cloud9EnvironmentEc2 {
    name: string;
    instance_type: string;
    automatic_stop_time_minutes?: string;
    connection_type?: string;
    description?: string;
    image_id?: string;
    amazonlinux_1_x86_64?: string;
    amazonlinux_2_x86_64?: string;
    "resolve:ssm:/aws/service/cloud9/amis/amazonlinux_1_x86_64"?: string;
    "resolve:ssm:/aws/service/cloud9/amis/amazonlinux_2_x86_64"?: string;
    owner_arn?: string;
    subnet_id?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
    type?: string;
}
export interface Cloud9EnvironmentMembership {
    environment_id: string;
    permissions: string;
    user_arn: string;
    id?: string;
    user_id?: string;
}
export interface ResourceCloudcontrolapiResource {
    desired_state: string;
    type_name: string;
    role_arn?: string;
    schema?: string;
    type_version_id?: string;
    properties?: string;
}
export interface ResourceCloudformationStack {
    name: string;
    template_body?: string;
    template_url?: string;
    capabilities?: string;
    disable_rollback?: string;
    notification_arns?: string;
    on_failure?: string;
    parameters?: string;
    policy_body?: string;
    policy_url?: string;
    tags?: string;
    iam_role_arn?: string;
    timeout_in_minutes?: string;
    id?: string;
    outputs?: string;
    tags_all?: string;
}
export interface CloudformationStackSet {
    name: string;
    administration_role_arn?: string;
    auto_deployment?: string;
    enabled?: string;
    retain_stacks_on_account_removal?: string;
    capabilities?: string;
    operation_preferences?: OperationPreferences;
    description?: string;
    execution_role_name?: string;
    managed_execution?: string;
    active?: string;
    parameters?: string;
    permission_model?: string;
    call_as?: string;
    tags?: string;
    template_body?: string;
    template_url?: string;
    arn?: string;
    id?: string;
    stack_set_id?: string;
    tags_all?: string;
}
export interface OperationPreferences {
    failure_tolerance_count?: string;
    failure_tolerance_percentage?: string;
    max_concurrent_count?: string;
    max_concurrent_percentage?: string;
    region_concurrency_type?: string;
    region_order?: string;
}
export interface CloudformationStackSetInstance {
    stack_set_name: string;
    account_id?: string;
    deployment_targets?: DeploymentTargets;
    parameter_overrides?: string;
    region?: string;
    retain_stack?: string;
    call_as?: string;
    operation_preferences?: OperationPreferences;
    id?: string;
    stack_id?: string;
    stack_instance_summaries?: StackInstanceSummaries;
}
export interface DeploymentTargets {
    organizational_unit_ids?: string;
}
export interface StackInstanceSummaries {
    account_id?: string;
    organizational_unit_id?: string;
    stack_id?: string;
}
export interface ResourceCloudformationType {
    schema_handler_package: string;
    execution_role_arn?: string;
    logging_config?: LoggingConfig;
    type?: string;
    type_name?: string;
    arn?: string;
    default_version_id?: string;
    deprecated_status?: string;
    description?: string;
    documentation_url?: string;
    is_default_version?: string;
    provisioning_type?: string;
    schema?: string;
    source_url?: string;
    type_arn?: string;
    version_id?: string;
    visibility?: string;
}
export interface LoggingConfig {
    log_group_name: string;
    log_role_arn: string;
}
export interface ResourceCloudfrontCachePolicy {
    name: string;
    min_ttl: string;
    parameters_in_cache_key_and_forwarded_to_origin: FluffyParametersInCacheKeyAndForwardedToOrigin;
    query_string_behavior: string;
    items: Items;
    max_ttl?: string;
    default_ttl?: string;
    comment?: string;
    query_strings?: string;
    etag?: string;
    id?: string;
}
export interface FluffyParametersInCacheKeyAndForwardedToOrigin {
    cookies_config?: FluffyCookiesConfig;
    headers_config?: FluffyHeadersConfig;
    query_strings_config?: string;
    enable_accept_encoding_brotli?: string;
    enable_accept_encoding_gzip?: string;
}
export interface FluffyCookiesConfig {
    cookie_behavior: string;
    cookies?: string;
}
export interface FluffyHeadersConfig {
    header_behavior: string;
    headers?: string;
}
export interface CloudfrontContinuousDeploymentPolicy {
    enabled: string;
    staging_distribution_dns_names: StagingDistributionDNSNames;
    traffic_config: TrafficConfig;
    value: string;
    single_header_config?: SingleHeaderConfig;
    single_weight_config?: SingleWeightConfig;
    session_stickiness_config?: SessionStickinessConfig;
    etag?: string;
    id?: string;
    last_modified_time?: string;
}
export interface SessionStickinessConfig {
    idle_ttl: string;
    maximum_ttl: string;
}
export interface SingleHeaderConfig {
    header: string;
    value: string;
}
export interface SingleWeightConfig {
    weight: string;
    session_stickiness_config?: string;
}
export interface StagingDistributionDNSNames {
    items?: string;
    quantity?: string;
}
export interface TrafficConfig {
    type?: string;
    single_header_config?: string;
    single_weight_config?: string;
}
export interface ResourceCloudfrontDistribution {
    enabled: string;
    allowed_methods: string;
    cached_methods: string;
    path_pattern: string;
    target_origin_id: string;
    viewer_protocol_policy: string;
    query_string: string;
    event_type: string;
    lambda_arn: string;
    function_arn: string;
    forward: string;
    error_code: string;
    bucket: string;
    domain_name: string;
    origin_id: string;
    http_port: string;
    https_port: string;
    origin_protocol_policy: string;
    origin_ssl_protocols: string;
    origin_access_identity: string;
    status_codes: string;
    locations: string;
    restriction_type: string;
    aliases?: string;
    comment?: string;
    continuous_deployment_policy_id?: string;
    default_root_object?: string;
    is_ipv6_enabled?: string;
    http_version?: string;
    ordered_cache_behavior?: string;
    price_class?: string;
    staging?: string;
    tags?: string;
    web_acl_id?: string;
    retain_on_delete?: string;
    wait_for_deployment?: string;
    cache_policy_id?: string;
    compress?: string;
    default_ttl?: string;
    field_level_encryption_id?: string;
    max_ttl?: string;
    min_ttl?: string;
    origin_request_policy_id?: string;
    realtime_log_config_arn?: string;
    response_headers_policy_id?: string;
    smooth_streaming?: string;
    trusted_key_groups?: string;
    trusted_signers?: string;
    headers?: string;
    query_string_cache_keys?: string;
    include_body?: string;
    whitelisted_names?: string;
    error_caching_min_ttl?: string;
    response_code?: string;
    response_page_path?: string;
    include_cookies?: string;
    prefix?: string;
    connection_attempts?: string;
    connection_timeout?: string;
    custom_header?: string;
    origin_access_control_id?: string;
    origin_path?: string;
    origin_keepalive_timeout?: string;
    origin_read_timeout?: string;
    origin_shield_region?: string;
    acm_certificate_arn?: string;
    cloudfront_default_certificate?: string;
    iam_certificate_id?: string;
    minimum_protocol_version?: string;
    ssl_support_method?: string;
    id?: string;
    arn?: string;
    caller_reference?: string;
    status?: string;
    tags_all?: string;
    items?: string;
    key_group_id?: string;
    key_pair_ids?: string;
    aws_account_number?: string;
    last_modified_time?: string;
    in_progress_validation_batches?: string;
    etag?: string;
    hosted_zone_id?: string;
}
export interface CloudfrontFieldLevelEncryptionConfig {
    content_type_profile_config: ContentTypeProfileConfig;
    query_arg_profile_config: QueryArgProfileConfig;
    content_type: string;
    format: string;
    profile_id: string;
    query_arg: string;
    comment?: string;
    caller_reference?: string;
    etag?: string;
    id?: string;
}
export interface ContentTypeProfileConfig {
    forward_when_content_type_is_unknown?: string;
    content_type_profiles?: string;
}
export interface QueryArgProfileConfig {
    forward_when_query_arg_profile_is_unknown?: string;
    query_arg_profiles?: string;
}
export interface CloudfrontFieldLevelEncryptionProfile {
    name: string;
    encryption_entities: EncryptionEntities;
    comment?: string;
    caller_reference?: string;
    etag?: string;
    id?: string;
}
export interface EncryptionEntities {
    public_key_id?: string;
    provider_id?: string;
    field_patterns?: string;
}
export interface ResourceCloudfrontFunction {
    name: string;
    code: string;
    runtime: string;
    comment?: string;
    publish?: string;
    arn?: string;
    etag?: string;
    live_stage_etag?: string;
    status?: string;
}
export interface CloudfrontKeyGroup {
    items: string;
    name: string;
    comment?: string;
    etag?: string;
    id?: string;
}
export interface CloudfrontMonitoringSubscription {
    distribution_id: string;
    monitoring_subscription: MonitoringSubscription;
    realtime_metrics_subscription_config: RealtimeMetricsSubscriptionConfig;
    id?: string;
}
export interface MonitoringSubscription {
    realtime_metrics_subscription_config?: string;
}
export interface RealtimeMetricsSubscriptionConfig {
    realtime_metrics_subscription_status?: string;
}
export interface CloudfrontOriginAccessControl {
    name: string;
    origin_access_control_origin_type: string;
    signing_behavior: string;
    signing_protocol: string;
    description?: string;
    id?: string;
    etag?: string;
}
export interface ResourceCloudfrontOriginAccessIdentity {
    comment?: string;
    id?: string;
    caller_reference?: string;
    cloudfront_access_identity_path?: string;
    etag?: string;
    iam_arn?: string;
    s3_canonical_user_id?: string;
}
export interface ResourceCloudfrontOriginRequestPolicy {
    name: string;
    query_strings_config: string;
    comment?: string;
    etag?: string;
    id?: string;
}
export interface CloudfrontPublicKey {
    encoded_key: string;
    comment?: string;
    name?: string;
    name_prefix?: string;
    caller_reference?: string;
    etag?: string;
    id?: string;
}
export interface ResourceCloudfrontRealtimeLogConfig {
    endpoint: string;
    fields: string;
    name: string;
    sampling_rate: string;
    kinesis_stream_config: string;
    stream_type: string;
    role_arn: string;
    stream_arn: string;
    id?: string;
    arn?: string;
}
export interface ResourceCloudfrontResponseHeadersPolicy {
    name: string;
    header: string;
    value: string;
    content_security_policy: CloudfrontResponseHeadersPolicyContentSecurityPolicy;
    referrer_policy: CloudfrontResponseHeadersPolicyReferrerPolicy;
    comment?: string;
    cors_config?: FluffyCorsConfig;
    custom_headers_config?: string;
    remove_headers_config?: string;
    security_headers_config?: FluffySecurityHeadersConfig;
    server_timing_headers_config?: FluffyServerTimingHeadersConfig;
    etag?: string;
    id?: string;
}
export interface FluffyCorsConfig {
    access_control_allow_credentials: string;
    access_control_allow_headers: string;
    access_control_allow_methods: string;
    access_control_allow_origins: string;
    origin_override: string;
    access_control_expose_headers?: string;
    access_control_max_age_sec?: string;
}
export interface FluffySecurityHeadersConfig {
    content_security_policy?: PurpleContentSecurityPolicy;
    content_type_options?: FluffyContentTypeOptions;
    frame_options?: FluffyFrameOptions;
    referrer_policy?: PurpleReferrerPolicy;
    strict_transport_security?: FluffyStrictTransportSecurity;
    xss_protection?: FluffyXSSProtection;
}
export interface PurpleContentSecurityPolicy {
    content_security_policy: string;
    override: string;
}
export interface FluffyContentTypeOptions {
    override: string;
}
export interface FluffyFrameOptions {
    frame_option: string;
    override: string;
}
export interface PurpleReferrerPolicy {
    referrer_policy: string;
    override: string;
}
export interface FluffyStrictTransportSecurity {
    access_control_max_age_sec: string;
    override: string;
    include_subdomains?: string;
    preload?: string;
}
export interface FluffyXSSProtection {
    override: string;
    protection: string;
    mode_block?: string;
    report_uri?: string;
}
export interface FluffyServerTimingHeadersConfig {
    enabled: string;
    sampling_rate: string;
}
export interface ResourceCloudhsmV2Cluster {
    hsm_type: string;
    subnet_ids: string;
    source_backup_identifier?: string;
    tags?: string;
    cluster_id?: string;
    cluster_state?: string;
    vpc_id?: string;
    security_group_id?: string;
    cluster_certificates?: string;
    tags_all?: string;
}
export interface CloudhsmV2HSM {
    cluster_id: string;
    subnet_id?: string;
    availability_zone?: string;
    ip_address?: string;
    hsm_id?: string;
    hsm_state?: string;
    hsm_eni_id?: string;
}
export interface CloudsearchDomain {
    endpoint_options?: EndpointOptions;
    index_field?: IndexField;
    multi_az?: string;
    scaling_parameters?: ScalingParameters;
    arn?: string;
    document_service_endpoint?: string;
    domain_id?: string;
    search_service_endpoint?: string;
}
export interface EndpointOptions {
    enforce_https?: string;
    tls_security_policy?: string;
}
export interface IndexField {
    name: string;
    type: string;
    analysis_scheme?: string;
    default_value?: string;
    facet?: string;
    highlight?: string;
    return?: string;
    search?: string;
    sort?: string;
    source_fields?: string;
}
export interface ScalingParameters {
    desired_instance_type?: string;
    desired_partition_count?: string;
    desired_replication_count?: string;
}
export interface CloudsearchDomainServiceAccessPolicy {
    access_policy: string;
    domain_name: string;
}
export interface Cloudtrail {
    name: string;
    s3_bucket_name: string;
    field: string;
    cloud_watch_logs_group_arn?: string;
    cloud_watch_logs_role_arn?: string;
    enable_log_file_validation?: string;
    enable_logging?: string;
    event_selector?: EventSelector;
    include_global_service_events?: string;
    insight_selector?: InsightSelector;
    is_multi_region_trail?: string;
    is_organization_trail?: string;
    kms_key_id?: string;
    s3_key_prefix?: string;
    sns_topic_name?: string;
    tags?: string;
    data_resource?: string;
    ends_with?: string;
    equals?: string;
    not_ends_with?: string;
    not_equals?: string;
    not_starts_with?: string;
    starts_with?: string;
    arn?: string;
    home_region?: string;
    id?: string;
    tags_all?: string;
}
export interface EventSelector {
    data_resource?: DataResource;
    exclude_management_event_sources?: string;
    include_management_events?: string;
    read_write_type?: string;
}
export interface DataResource {
    type: string;
    values: string;
}
export interface InsightSelector {
    insight_type?: string;
}
export interface CloudwatchCompositeAlarm {
    alarm: string;
    extension_period: string;
    wait_period: string;
    alarm_name: string;
    alarm_rule: string;
    actions_enabled?: string;
    actions_suppressor?: string;
    alarm_actions?: string;
    alarm_description?: string;
    insufficient_data_actions?: string;
    ok_actions?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface CloudwatchDashboard {
    dashboard_name: string;
    dashboard_body: string;
    dashboard_arn?: string;
}
export interface CloudwatchEventAPIDestination {
    name: string;
    invocation_endpoint: string;
    http_method: string;
    connection_arn: string;
    description?: string;
    invocation_rate_limit_per_second?: string;
    arn?: string;
}
export interface CloudwatchEventArchive {
    name: string;
    event_source_arn: string;
    description?: string;
    event_pattern?: string;
    retention_days?: string;
    arn?: string;
}
export interface ResourceCloudwatchEventBus {
    name: string;
    event_source_name?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface CloudwatchEventBusPolicy {
    policy: string;
    event_bus_name?: string;
    id?: string;
}
export interface ResourceCloudwatchEventConnection {
    name: string;
    authorization_type: string;
    key: string;
    value: string;
    username: string;
    password: string;
    authorization_endpoint: string;
    http_method: string;
    client_parameters: string;
    client_id: string;
    client_secret: string;
    description?: string;
    body?: string;
    is_value_secret?: string;
    header?: string;
    query_string?: string;
    arn?: string;
    secret_arn?: string;
}
export interface CloudwatchEventEndpoint {
    name: string;
    event_bus_arn: string;
    health_check: string;
    route: string;
    description?: string;
    role_arn?: string;
    state?: string;
    arn?: string;
    endpoint_url?: string;
}
export interface CloudwatchEventPermission {
    principal: string;
    statement_id: string;
    value: string;
    action?: string;
    condition?: CloudwatchEventPermissionCondition;
    event_bus_name?: string;
    id?: string;
}
export interface CloudwatchEventPermissionCondition {
    key: string;
    type: string;
    value: string;
}
export interface CloudwatchEventRule {
    name?: string;
    name_prefix?: string;
    schedule_expression?: string;
    event_bus_name?: string;
    event_pattern?: string;
    description?: string;
    role_arn?: string;
    is_enabled?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface CloudwatchEventTarget {
    arn: string;
    rule: string;
    batch_target?: BatchTarget;
    dead_letter_config?: AwsOrgClass;
    ecs_target?: EcsTarget;
    event_bus_name?: string;
    http_target?: HTTPTarget;
    input?: string;
    input_path?: string;
    input_transformer?: InputTransformer;
    kinesis_target?: KinesisTarget;
    role_arn?: string;
    run_command_targets?: RunCommandTargets;
    redshift_target?: RedshiftTarget;
    retry_policy?: RetryPolicy;
    sagemaker_pipeline_target?: SagemakerPipelineTarget;
    sqs_target?: SqsTarget;
    target_id?: string;
    capacity_provider_strategy?: CloudwatchEventTargetCapacityProviderStrategy;
    network_configuration?: EcsTaskExecutionNetworkConfiguration;
    ordered_placement_strategy?: OrderedPlacementStrategy;
    placement_constraint?: PlacementConstraint;
    pipeline_parameter_list?: string;
}
export interface BatchTarget {
    job_definition: string;
    job_name: string;
    array_size?: string;
    job_attempts?: string;
}
export interface CloudwatchEventTargetCapacityProviderStrategy {
    capacity_provider: string;
    weight: string;
    base?: string;
}
export interface AwsOrgClass {
    arn?: string;
}
export interface EcsTarget {
    task_definition_arn: string;
    capacity_provider_strategy?: string;
    enable_ecs_managed_tags?: string;
    enable_execute_command?: string;
    group?: string;
    launch_type?: string;
    network_configuration?: string;
    ordered_placement_strategy?: string;
    placement_constraint?: string;
    platform_version?: string;
    propagate_tags?: string;
    task_count?: string;
    tags?: string;
}
export interface HTTPTarget {
    header_parameters?: string;
    path_parameter_values?: string;
    query_string_parameters?: string;
}
export interface InputTransformer {
    input_template: string;
    input_paths?: string;
}
export interface KinesisTarget {
    partition_key_path?: string;
}
export interface OrderedPlacementStrategy {
    type: string;
    field?: string;
}
export interface PlacementConstraint {
    type: string;
    expression?: string;
}
export interface RedshiftTarget {
    database: string;
    db_user?: string;
    secrets_manager_arn?: string;
    sql?: string;
    statement_name?: string;
    with_event?: string;
}
export interface RetryPolicy {
    maximum_event_age_in_seconds?: string;
    maximum_retry_attempts?: string;
}
export interface RunCommandTargets {
    key: string;
    values: string;
}
export interface SagemakerPipelineTarget {
    pipeline_parameter_list?: Setting;
}
export interface SqsTarget {
    message_group_id?: string;
}
export interface CloudwatchLogDataProtectionPolicy {
    log_group_name: string;
    policy_document: string;
}
export interface CloudwatchLogDestination {
    name: string;
    role_arn: string;
    target_arn: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface CloudwatchLogDestinationPolicy {
    destination_name: string;
    access_policy: string;
    force_update?: string;
}
export interface ResourceCloudwatchLogGroup {
    name?: string;
    name_prefix?: string;
    skip_destroy?: string;
    retention_in_days?: string;
    kms_key_id?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface CloudwatchLogMetricFilter {
    name: string;
    pattern: string;
    log_group_name: string;
    metric_transformation: string;
    namespace: string;
    value: string;
    default_value?: string;
    dimensions?: string;
    unit?: string;
    id?: string;
}
export interface CloudwatchLogResourcePolicy {
    policy_document: string;
    policy_name: string;
    id?: string;
}
export interface CloudwatchLogStream {
    name: string;
    log_group_name: string;
    arn?: string;
}
export interface CloudwatchLogSubscriptionFilter {
    name: string;
    destination_arn: string;
    filter_pattern: string;
    log_group_name: string;
    role_arn?: string;
    distribution?: string;
}
export interface CloudwatchMetricAlarm {
    alarm_name: string;
    comparison_operator: string;
    evaluation_periods: string;
    id: string;
    metric_name: string;
    namespace: string;
    period: string;
    stat: string;
    statistic?: string;
    threshold?: string;
    threshold_metric_id?: string;
    actions_enabled?: string;
    alarm_actions?: string;
    alarm_description?: string;
    datapoints_to_alarm?: string;
    dimensions?: string;
    insufficient_data_actions?: string;
    ok_actions?: string;
    unit?: string;
    extended_statistic?: string;
    treat_missing_data?: string;
    evaluate_low_sample_count_percentiles?: string;
    metric_query?: string;
    tags?: string;
    account_id?: string;
    expression?: string;
    label?: string;
    metric?: string;
    return_data?: string;
    arn?: string;
    tags_all?: string;
}
export interface CloudwatchMetricStream {
    firehose_arn: string;
    role_arn: string;
    output_format: string;
    namespace: string;
    additional_statistics: string;
    include_metric: string;
    metric_name: string;
    exclude_filter?: string;
    include_filter?: string;
    name?: string;
    name_prefix?: string;
    tags?: string;
    statistics_configuration?: string;
    include_linked_accounts_metrics?: string;
    metric_names?: string;
    arn?: string;
    creation_date?: string;
    last_update_date?: string;
    state?: string;
    tags_all?: string;
}
export interface CloudwatchQueryDefinition {
    name: string;
    query_string: string;
    log_group_names?: string;
    query_definition_id?: string;
}
export interface CodeartifactDomain {
    domain: string;
    encryption_key?: string;
    tags?: string;
    id?: string;
    arn?: string;
    owner?: string;
    repository_count?: string;
    created_time?: string;
    asset_size_bytes?: string;
    tags_all?: string;
}
export interface CodeartifactDomainPermissionsPolicy {
    domain: string;
    policy_document: string;
    domain_owner?: string;
    policy_revision?: string;
    id?: string;
    resource_arn?: string;
}
export interface CodeartifactRepository {
    domain: string;
    repository: string;
    repository_name: string;
    domain_owner?: string;
    description?: string;
    upstream?: Upstream;
    external_connections?: ExternalConnections;
    tags?: string;
    id?: string;
    arn?: string;
    administrator_account?: string;
    tags_all?: string;
}
export interface ExternalConnections {
    external_connection_name: string;
}
export interface Upstream {
    repository_name: string;
}
export interface CodeartifactRepositoryPermissionsPolicy {
    repository: string;
    domain: string;
    policy_document: string;
    domain_owner?: string;
    policy_revision?: string;
    id?: string;
    resource_arn?: string;
}
export interface CodebuildProject {
    artifacts: Artifacts;
    environment: CodebuildProjectEnvironment;
    source: CodebuildProjectSource;
    badge_enabled?: string;
    build_batch_config?: BuildBatchConfig;
    build_timeout?: string;
    cache?: Cache;
    concurrent_build_limit?: string;
    description?: string;
    file_system_locations?: FileSystemLocations;
    encryption_key?: string;
    logs_config?: LogsConfig;
    project_visibility?: string;
    resource_access_role?: string;
    queued_timeout?: string;
    secondary_artifacts?: SecondaryArtifacts;
    secondary_sources?: SecondarySources;
    secondary_source_version?: SecondarySourceVersion;
    source_version?: string;
    tags?: string;
    vpc_config?: CodebuildProjectVpcConfig;
    arn?: string;
    badge_url?: string;
    id?: string;
    public_project_alias?: string;
    tags_all?: string;
}
export interface Artifacts {
    artifact_identifier?: string;
    bucket_owner_access?: string;
    encryption_disabled?: string;
    location?: string;
    name?: string;
    namespace_type?: string;
    override_artifact_name?: string;
    packaging?: string;
    path?: string;
    type?: string;
}
export interface BuildBatchConfig {
    service_role: string;
    combine_artifacts?: string;
    timeout_in_mins?: string;
    compute_types_allowed?: string;
    maximum_builds_allowed?: string;
}
export interface Cache {
    location: string;
    modes: string;
    type?: string;
}
export interface CodebuildProjectEnvironment {
    certificate?: string;
    compute_type?: string;
    image_pull_credentials_type?: string;
    image?: string;
    privileged_mode?: string;
    type?: string;
    name?: string;
    value?: string;
    credential?: string;
    credential_provider?: string;
}
export interface FileSystemLocations {
    identifier?: string;
    location?: string;
    mount_options?: string;
    mount_point?: string;
    type?: string;
}
export interface LogsConfig {
    group_name?: string;
    status?: string;
    stream_name?: string;
    encryption_disabled?: string;
    location?: string;
    bucket_owner_access?: string;
}
export interface SecondaryArtifacts {
    artifact_identifier: string;
    type: string;
    bucket_owner_access?: string;
    encryption_disabled?: string;
    location?: string;
    name?: string;
    namespace_type?: string;
    override_artifact_name?: string;
    packaging?: string;
    path?: string;
}
export interface SecondarySourceVersion {
    source_identifier: string;
    source_version: string;
}
export interface SecondarySources {
    source_identifier: string;
    type: string;
    fetch_submodules: string;
    buildspec?: string;
    git_clone_depth?: string;
    insecure_ssl?: string;
    location?: string;
    report_build_status?: string;
    context?: string;
    target_url?: string;
}
export interface CodebuildProjectSource {
    buildspec?: string;
    git_clone_depth?: string;
    insecure_ssl?: string;
    location?: string;
    report_build_status?: string;
    type?: string;
    fetch_submodules?: string;
    context?: string;
    target_url?: string;
}
export interface CodebuildProjectVpcConfig {
    security_group_ids: string;
    subnets: string;
    vpc_id: string;
}
export interface CodebuildReportGroup {
    name: string;
    export_config: ExportConfig;
    delete_reports?: string;
    tags?: string;
    id?: string;
    arn?: string;
    created?: string;
    tags_all?: string;
}
export interface ExportConfig {
    type?: string;
    s3_destination?: S3Destination;
}
export interface S3Destination {
    encryption_key: string;
    packaging?: string;
    path?: string;
}
export interface ResourcePolicy {
    policy: string;
    resource_arn: string;
    id?: string;
}
export interface CodebuildSourceCredential {
    auth_type: string;
    server_type: string;
    token: string;
    user_name?: string;
    id?: string;
    arn?: string;
}
export interface CodebuildWebhook {
    project_name: string;
    type: string;
    pattern: string;
    build_type?: string;
    branch_filter?: string;
    exclude_matched_pattern?: string;
    id?: string;
    payload_url?: string;
    secret?: string;
    url?: string;
}
export interface ResourceCodecatalystDevEnvironment {
    space_name: string;
    project_name: string;
    persistent_storage: string;
    ides: string;
    instance_type: string;
    name: string;
    runtime: string;
    repository_name: string;
    size: string;
    inactivity_timeout_minutes?: string;
    repositories?: string;
    branch_name?: string;
    id?: string;
}
export interface CodecatalystProject {
    space_name: string;
    display_name: string;
    description?: string;
    name?: string;
}
export interface CodecatalystSourceRepository {
    name: string;
    space_name: string;
    project_name: string;
    description?: string;
}
export interface ResourceCodecommitApprovalRuleTemplate {
    content: string;
    name: string;
    description?: string;
    approval_rule_template_id?: string;
    creation_date?: string;
    last_modified_date?: string;
    last_modified_user?: string;
    rule_content_sha256?: string;
}
export interface CodecommitApprovalRuleTemplateAssociation {
    approval_rule_template_name: string;
    repository_name: string;
    id?: string;
}
export interface ResourceCodecommitRepository {
    repository_name: string;
    description?: string;
    default_branch?: string;
    tags?: string;
    repository_id?: string;
    arn?: string;
    clone_url_http?: string;
    clone_url_ssh?: string;
    tags_all?: string;
}
export interface CodecommitTrigger {
    repository_name: string;
    name: string;
    destination_arn: string;
    events: string;
    custom_data?: string;
    branches?: string;
    configuration_id?: string;
}
export interface CodedeployApp {
    name: string;
    compute_platform?: string;
    tags?: string;
    arn?: string;
    application_id?: string;
    id?: string;
    github_account_name?: string;
    linked_to_github?: string;
    tags_all?: string;
}
export interface CodedeployDeploymentConfig {
    deployment_config_name: string;
    type: string;
    value: string;
    compute_platform?: string;
    time_based_canary?: string;
    time_based_linear?: string;
    interval?: string;
    percentage?: string;
    id?: string;
    deployment_config_id?: string;
}
export interface CodedeployDeploymentGroup {
    app_name: string;
    deployment_group_name: string;
    service_role_arn: string;
    cluster_name: string;
    service_name: string;
    listener_arns: string;
    name: string;
    trigger_events: string;
    trigger_name: string;
    trigger_target_arn: string;
    autoscaling_groups?: string;
    deployment_config_name?: string;
    ec2_tag_filter?: string;
    on_premises_instance_tag_filter?: string;
    tags?: string;
    alarms?: string;
    enabled?: string;
    ignore_poll_alarm_failure?: string;
    events?: string;
    action_on_timeout?: string;
    wait_time_in_minutes?: string;
    action?: string;
    termination_wait_time_in_minutes?: string;
    deployment_option?: string;
    deployment_type?: string;
    key?: string;
    type?: string;
    value?: string;
    elb_info?: string;
    target_group_info?: string;
    target_group_pair_info?: string;
    arn?: string;
    id?: string;
    compute_platform?: string;
    deployment_group_id?: string;
    tags_all?: string;
}
export interface CodegurureviewerRepositoryAssociation {
    kms_key_details?: KmsKeyDetails;
    arn?: string;
    association_id?: string;
    connection_arn?: string;
    id?: string;
    name?: string;
    owner?: string;
    provider_type?: string;
    state?: string;
    state_reason?: string;
}
export interface KmsKeyDetails {
    encryption_option?: string;
    kms_key_id?: string;
}
export interface Codepipeline {
    name: string;
    role_arn: string;
    location: string;
    type: string;
    id: string;
    action: string;
    category: string;
    owner: string;
    provider: string;
    version: string;
    tags?: string;
    region?: string;
    configuration?: string;
    input_artifacts?: string;
    output_artifacts?: string;
    run_order?: string;
    namespace?: string;
    arn?: string;
    tags_all?: string;
}
export interface CodepipelineCustomActionType {
    category: string;
    key: string;
    name: string;
    required: string;
    input_artifact_details: string;
    maximum_count: string;
    minimum_count: string;
    output_artifact_details: string;
    provider_name: string;
    version: string;
    configuration_property?: string;
    description?: string;
    queryable?: string;
    settings?: string;
    entity_url_template?: string;
    execution_url_template?: string;
    revision_url_template?: string;
    third_party_configuration_url?: string;
    tags?: string;
    id?: string;
    arn?: string;
    owner?: string;
    tags_all?: string;
}
export interface CodepipelineWebhook {
    name: string;
    authentication: string;
    target_action: string;
    target_pipeline: string;
    json_path: string;
    match_equals: string;
    tags?: string;
    secret_token?: string;
    allowed_ip_range?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
    url?: string;
}
export interface ResourceCodestarconnectionsConnection {
    name: string;
    provider_type?: string;
    host_arn?: string;
    tags?: string;
    id?: string;
    arn?: string;
    connection_status?: string;
    tags_all?: string;
}
export interface CodestarconnectionsHost {
    name: string;
    provider_endpoint: string;
    provider_type: string;
    security_group_ids: string;
    subnet_ids: string;
    vpc_id: string;
    vpc_configuration?: string;
    tls_certificate?: string;
    id?: string;
    arn?: string;
    status?: string;
}
export interface CodestarnotificationsNotificationRule {
    detail_type: string;
    event_type_ids: string;
    name: string;
    resource: string;
    address: string;
    status?: string;
    tags?: string;
    target?: string;
    type?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceCognitoIdentityPool {
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface CognitoIdentityPoolProviderPrincipalTag {
    identity_pool_id: string;
    identity_provider_name: string;
}
export interface CognitoIdentityPoolRolesAttachment {
    identity_pool_id: string;
    roles: string;
    identity_provider: string;
    type: string;
    claim: string;
    match_type: string;
    role_arn: string;
    value: string;
    ambiguous_role_resolution?: string;
    mapping_rule?: string;
    id?: string;
}
export interface CognitoIdentityProvider {
    user_pool_id: string;
    provider_name: string;
    provider_type: string;
    attribute_mapping?: string;
    idp_identifiers?: string;
    provider_details?: string;
}
export interface CognitoManagedUserPoolClient {
    user_pool_id: string;
    name_pattern: string;
    name_prefix: string;
    access_token_validity?: string;
    allowed_oauth_flows_user_pool_client?: string;
    allowed_oauth_flows?: string;
    allowed_oauth_scopes?: string;
    analytics_configuration?: AnalyticsConfiguration;
    auth_session_validity?: string;
    callback_urls?: string;
    default_redirect_uri?: string;
    enable_token_revocation?: string;
    enable_propagate_additional_user_context_data?: string;
    explicit_auth_flows?: string;
    generate_secret?: string;
    id_token_validity?: string;
    logout_urls?: string;
    prevent_user_existence_errors?: string;
    read_attributes?: string;
    refresh_token_validity?: string;
    supported_identity_providers?: string;
    token_validity_units?: TokenValidityUnits;
    write_attributes?: string;
    client_secret?: string;
    id?: string;
    name?: string;
}
export interface CognitoResourceServer {
    identifier: string;
    name: string;
    scope_name: string;
    scope_description: string;
    scope?: string;
    scope_identifiers?: string;
}
export interface CognitoRiskConfiguration {
    user_pool_id: string;
    notify_configuration: string;
    actions: string;
    client_id?: string;
    account_takeover_risk_configuration?: AccountTakeoverRiskConfiguration;
    compromised_credentials_risk_configuration?: CompromisedCredentialsRiskConfiguration;
    risk_exception_configuration?: RiskExceptionConfiguration;
    id?: string;
}
export interface AccountTakeoverRiskConfiguration {
    notify_configuration: NotifyConfiguration;
    actions: AccountTakeoverRiskConfigurationActions;
    text_body: string;
    notify: string;
}
export interface AccountTakeoverRiskConfigurationActions {
    high_action?: string;
    low_action?: string;
    medium_action?: string;
    event_action?: string;
    notify?: string;
}
export interface NotifyConfiguration {
    block_email?: string;
    mfa_email?: string;
    no_action_email?: string;
    from?: string;
    reply_to?: string;
    source_arn?: string;
    html_body?: string;
    subject?: string;
    text_body?: string;
}
export interface CompromisedCredentialsRiskConfiguration {
    actions: CompromisedCredentialsRiskConfigurationActions;
    event_filter?: string;
}
export interface CompromisedCredentialsRiskConfigurationActions {
    event_action?: string;
}
export interface RiskExceptionConfiguration {
    blocked_ip_range_list?: string;
    skipped_ip_range_list?: string;
}
export interface CognitoUser {
    user_pool_id: string;
    username: string;
    attributes?: string;
    client_metadata?: string;
    desired_delivery_mediums?: string;
    enabled?: string;
    force_alias_creation?: string;
    message_action?: string;
    password?: string;
    temporary_password?: string;
    validation_data?: string;
    status?: string;
    sub?: string;
    mfa_preference?: string;
}
export interface CognitoUserGroup {
    name: string;
    user_pool_id: string;
    description?: string;
    precedence?: string;
    role_arn?: string;
}
export interface CognitoUserInGroup {
    user_pool_id: string;
    group_name: string;
    username: string;
}
export interface CognitoUserPool {
    account_recovery_setting?: AccountRecoverySetting;
    admin_create_user_config?: AdminCreateUserConfig;
    alias_attributes?: string;
    auto_verified_attributes?: string;
    deletion_protection?: string;
    device_configuration?: DeviceConfiguration;
    email_configuration?: EmailConfiguration;
    email_verification_message?: string;
    email_verification_subject?: string;
    lambda_config?: CognitoUserPoolLambdaConfig;
    mfa_configuration?: string;
    password_policy?: PasswordPolicy;
    schema?: CognitoUserPoolSchema;
    sms_authentication_message?: string;
    sms_configuration?: SMSConfiguration;
    sms_verification_message?: string;
    software_token_mfa_configuration?: SoftwareTokenMfaConfiguration;
    tags?: string;
    user_attribute_update_settings?: UserAttributeUpdateSettings;
    user_pool_add_ons?: UserPoolAddOns;
    username_attributes?: string;
    username_configuration?: UsernameConfiguration;
    verification_message_template?: VerificationMessageTemplate;
    custom_email_sender?: string;
    custom_sms_sender?: string;
}
export interface AccountRecoverySetting {
    name: string;
    priority: string;
    recovery_mechanism?: string;
}
export interface AdminCreateUserConfig {
    allow_admin_create_user_only?: string;
    invite_message_template?: InviteMessageTemplate;
}
export interface InviteMessageTemplate {
    email_message?: string;
    email_subject?: string;
    sms_message?: string;
}
export interface DeviceConfiguration {
    challenge_required_on_new_device?: string;
    device_only_remembered_on_user_prompt?: string;
}
export interface EmailConfiguration {
    configuration_set?: string;
    email_sending_account?: string;
    from_email_address?: string;
    reply_to_email_address?: string;
    source_arn?: string;
}
export interface CognitoUserPoolLambdaConfig {
    create_auth_challenge?: string;
    custom_message?: string;
    define_auth_challenge?: string;
    post_authentication?: string;
    post_confirmation?: string;
    pre_authentication?: string;
    pre_sign_up?: string;
    pre_token_generation?: string;
    user_migration?: string;
    verify_auth_challenge_response?: string;
    kms_key_id?: string;
    custom_email_sender?: CustomSender;
    custom_sms_sender?: CustomSender;
}
export interface CustomSender {
    lambda_arn: string;
    lambda_version: string;
}
export interface PasswordPolicy {
    minimum_length?: string;
    require_lowercase?: string;
    require_numbers?: string;
    require_symbols?: string;
    require_uppercase?: string;
    temporary_password_validity_days?: string;
}
export interface CognitoUserPoolSchema {
    attribute_data_type: string;
    name: string;
    number_attribute_constraints: NumberAttributeConstraints;
    string_attribute_constraints: StringAttributeConstraints;
    developer_only_attribute?: string;
    mutable?: string;
    required?: string;
}
export interface NumberAttributeConstraints {
    max_value?: string;
    min_value?: string;
}
export interface StringAttributeConstraints {
    max_length?: string;
    min_length?: string;
}
export interface SMSConfiguration {
    external_id: string;
    sns_caller_arn: string;
    sns_region?: string;
}
export interface SoftwareTokenMfaConfiguration {
    enabled: string;
}
export interface UserAttributeUpdateSettings {
    attributes_require_verification_before_update: string;
}
export interface UserPoolAddOns {
    advanced_security_mode: string;
}
export interface UsernameConfiguration {
    case_sensitive: string;
}
export interface VerificationMessageTemplate {
    default_email_option?: string;
    email_message?: string;
    email_message_by_link?: string;
    email_subject?: string;
    email_subject_by_link?: string;
    sms_message?: string;
    arn?: string;
    creation_date?: string;
    custom_domain?: string;
    domain?: string;
    endpoint?: string;
    estimated_number_of_users?: string;
    id?: string;
    last_modified_date?: string;
    tags_all?: string;
}
export interface ResourceCognitoUserPoolClient {
    name: string;
    user_pool_id: string;
    access_token_validity?: string;
    allowed_oauth_flows_user_pool_client?: string;
    allowed_oauth_flows?: string;
    allowed_oauth_scopes?: string;
    analytics_configuration?: AnalyticsConfiguration;
    auth_session_validity?: string;
    callback_urls?: string;
    default_redirect_uri?: string;
    enable_token_revocation?: string;
    enable_propagate_additional_user_context_data?: string;
    explicit_auth_flows?: string;
    generate_secret?: string;
    id_token_validity?: string;
    logout_urls?: string;
    prevent_user_existence_errors?: string;
    read_attributes?: string;
    refresh_token_validity?: string;
    supported_identity_providers?: string;
    token_validity_units?: TokenValidityUnits;
    write_attributes?: string;
    client_secret?: string;
    id?: string;
}
export interface CognitoUserPoolDomain {
    domain: string;
    user_pool_id: string;
    certificate_arn?: string;
    aws_account_id?: string;
    cloudfront_distribution?: string;
    cloudfront_distribution_arn?: string;
    cloudfront_distribution_zone_id?: string;
    s3_bucket?: string;
    version?: string;
}
export interface CognitoUserPoolUICustomization {
    user_pool_id: string;
    client_id?: string;
    css?: string;
    image_file?: string;
    creation_date?: string;
    css_version?: string;
    image_url?: string;
    last_modified_date?: string;
}
export interface ComprehendDocumentClassifier {
    data_access_role_arn: string;
    input_data_config: ComprehendDocumentClassifierInputDataConfig;
    language_code: string;
    name: string;
    subnets: string;
    mode?: string;
    model_kms_key_id?: string;
    output_data_config?: OutputDataConfig;
    tags?: string;
    version_name?: string;
    version_name_prefix?: string;
    volume_kms_key_id?: string;
    vpc_config?: ComprehendDocumentClassifierVpcConfig;
    augmented_manifests?: AugmentedManifests;
    test_s3uri?: string;
    arn?: string;
    tags_all?: string;
}
export interface AugmentedManifests {
    attribute_names: string;
    s3_uri: string;
    annotation_data_s3_uri?: string;
    document_type?: string;
    source_documents_s3_uri?: string;
    split?: string;
}
export interface ComprehendDocumentClassifierInputDataConfig {
    augmented_manifests?: string;
    data_format?: string;
    label_delimiter?: string;
    s3_uri?: string;
    test_s3uri?: string;
}
export interface OutputDataConfig {
    s3_uri: string;
    kms_key_id?: string;
    output_s3_uri?: string;
}
export interface ComprehendDocumentClassifierVpcConfig {
    security_group_ids: string;
    subnets: string;
}
export interface ComprehendEntityRecognizer {
    data_access_role_arn: string;
    input_data_config: ComprehendEntityRecognizerInputDataConfig;
    language_code: string;
    name: string;
    entity_types: EntityTypes;
    s3_uri: string;
    subnets: string;
    model_kms_key_id?: string;
    tags?: string;
    version_name?: string;
    version_name_prefix?: string;
    volume_kms_key_id?: string;
    vpc_config?: ComprehendDocumentClassifierVpcConfig;
    augmented_manifests?: AugmentedManifests;
    entity_list?: EntityList;
    test_s3uri?: string;
    arn?: string;
    tags_all?: string;
}
export interface EntityList {
    s3_uri: string;
}
export interface ComprehendEntityRecognizerInputDataConfig {
    annotations?: Annotations;
    augmented_manifests?: string;
    data_format?: string;
    documents?: Documents;
    entity_list?: string;
    entity_types?: string;
}
export interface Annotations {
    s3_uri?: string;
    test_s3uri?: string;
}
export interface Documents {
    input_format?: string;
    s3_uri?: string;
    test_s3uri?: string;
}
export interface ConfigAggregateAuthorization {
    account_id: string;
    region: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface ConfigConfigRule {
    name: string;
    source: ConfigConfigRuleSource;
    description?: string;
    input_parameters?: string;
    scope?: ConfigConfigRuleScope;
    tags?: string;
    arn?: string;
    rule_id?: string;
    tags_all?: string;
}
export interface ConfigConfigRuleScope {
    compliance_resource_id?: string;
    compliance_resource_types?: string;
    tag_key?: string;
    tag_value?: string;
}
export interface ConfigConfigRuleSource {
    owner?: string;
    source_identifier?: string;
    source_detail?: SourceDetail;
    custom_policy_details?: CustomPolicyDetails;
}
export interface CustomPolicyDetails {
    enable_debug_log_delivery?: string;
    policy_runtime?: string;
    policy_text?: string;
}
export interface SourceDetail {
    event_source?: string;
    maximum_execution_frequency?: string;
    message_type?: string;
    configurationitemchangenotification?: string;
    oversizedconfigurationitemchangenotification?: string;
    schedulednotification?: string;
    configurationsnapshotdeliverycompleted?: string;
}
export interface ConfigConfigurationAggregator {
    name: string;
    account_aggregation_source?: AccountAggregationSource;
    organization_aggregation_source?: OrganizationAggregationSource;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface AccountAggregationSource {
    account_ids: string;
    all_regions?: string;
    regions?: string;
}
export interface OrganizationAggregationSource {
    role_arn: string;
    all_regions?: string;
    regions?: string;
}
export interface ConfigConfigurationRecorder {
    role_arn: string;
    name?: string;
    recording_group?: RecordingGroup;
    recording_strategy?: string;
    id?: string;
}
export interface RecordingGroup {
    all_supported?: string;
    exclusion_by_resource_types?: string;
    include_global_resource_types?: string;
    recording_strategy?: RecordingStrategy;
    resource_types?: string;
}
export interface RecordingStrategy {
    _use_only?: string;
}
export interface ConfigConfigurationRecorderStatus {
    name: string;
    is_enabled: string;
}
export interface ConfigConformancePack {
    name: string;
    parameter_name: string;
    parameter_value: string;
    delivery_s3_bucket?: string;
    delivery_s3_key_prefix?: string;
    template_body?: string;
    template_s3_uri?: string;
    arn?: string;
}
export interface ConfigDeliveryChannel {
    s3_bucket_name: string;
    name?: string;
    s3_key_prefix?: string;
    s3_kms_key_arn?: string;
    sns_topic_arn?: string;
    snapshot_delivery_properties?: SnapshotDeliveryProperties;
    id?: string;
}
export interface SnapshotDeliveryProperties {
    delivery_frequency?: string;
}
export interface ConfigOrganizationConformancePack {
    name: string;
    parameter_name: string;
    parameter_value: string;
    delivery_s3_bucket?: string;
    delivery_s3_key_prefix?: string;
    excluded_accounts?: string;
    template_body?: string;
    template_s3_uri?: string;
    arn?: string;
    id?: string;
}
export interface ConfigOrganizationCustomPolicyRule {
    name: string;
    policy_text: string;
    policy_runtime: string;
    trigger_types: string;
    description?: string;
    debug_log_delivery_accounts?: string;
    excluded_accounts?: string;
    input_parameters?: string;
    maximum_execution_frequency?: string;
    resource_id_scope?: string;
    resource_types_scope?: string;
    tag_key_scope?: string;
    tag_value_scope?: string;
    arn?: string;
}
export interface ConfigOrganizationCustomRule {
    lambda_function_arn: string;
    name: string;
    trigger_types: string;
    description?: string;
    excluded_accounts?: string;
    input_parameters?: string;
    maximum_execution_frequency?: string;
    resource_id_scope?: string;
    resource_types_scope?: string;
    tag_key_scope?: string;
    tag_value_scope?: string;
    arn?: string;
}
export interface ConfigOrganizationManagedRule {
    name: string;
    rule_identifier: string;
    description?: string;
    excluded_accounts?: string;
    input_parameters?: string;
    maximum_execution_frequency?: string;
    resource_id_scope?: string;
    resource_types_scope?: string;
    tag_key_scope?: string;
    tag_value_scope?: string;
    arn?: string;
}
export interface ConfigRemediationConfiguration {
    config_rule_name: string;
    target_id: string;
    target_type: string;
    ssm_controls: string;
    automatic?: string;
    execution_controls?: ExecutionControls;
    maximum_automatic_attempts?: string;
    parameter?: ConfigRemediationConfigurationParameter;
    resource_type?: string;
    retry_attempt_seconds?: string;
    target_version?: string;
    static_values?: string;
    arn?: string;
}
export interface ExecutionControls {
    ssm_controls: SsmControls;
}
export interface SsmControls {
    concurrent_execution_rate_percentage?: string;
    error_percentage?: string;
}
export interface ConfigRemediationConfigurationParameter {
    name: string;
    resource_value?: string;
    static_value?: string;
    static_values?: string;
}
export interface ResourceConnectBotAssociation {
    instance_id: string;
    lex_bot: ConnectBotAssociationLexBot;
    id?: string;
}
export interface ResourceConnectContactFlow {
    instance_id: string;
    name: string;
    content?: string;
    content_hash?: string;
    description?: string;
    filename?: string;
    tags?: string;
    type?: string;
    arn?: string;
    id?: string;
    contact_flow_id?: string;
    tags_all?: string;
}
export interface ResourceConnectContactFlowModule {
    instance_id: string;
    name: string;
    content?: string;
    content_hash?: string;
    description?: string;
    filename?: string;
    tags?: string;
    arn?: string;
    id?: string;
    contact_flow_module_id?: string;
    tags_all?: string;
}
export interface ResourceConnectHoursOfOperation {
    instance_id: string;
    name: string;
    time_zone: string;
    day: string;
    hours: string;
    minutes: string;
    description?: string;
    tags?: string;
    arn?: string;
    hours_of_operation_id?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceConnectInstance {
    identity_management_type: string;
    inbound_calls_enabled: string;
    outbound_calls_enabled: string;
    auto_resolve_best_voices_enabled?: string;
    contact_flow_logs_enabled?: string;
    contact_lens_enabled?: string;
    directory_id?: string;
    early_media_enabled?: string;
    instance_alias?: string;
    multi_party_conference_enabled?: string;
    use_custom_tts_voices?: string;
    id?: string;
    arn?: string;
    created_time?: string;
    service_role?: string;
    status?: string;
}
export interface ResourceConnectInstanceStorageConfig {
    instance_id: string;
    resource_type: string;
    storage_config: FluffyStorageConfig;
    association_id?: string;
    id?: string;
}
export interface FluffyStorageConfig {
    kinesis_firehose_config?: FluffyKinesisFirehoseConfig;
    kinesis_stream_config?: FluffyKinesisStreamConfig;
    kinesis_video_stream_config?: FluffyKinesisVideoStreamConfig;
    s3_config?: FluffyS3Config;
    storage_type?: string;
}
export interface FluffyKinesisFirehoseConfig {
    firehose_arn: string;
}
export interface FluffyKinesisStreamConfig {
    stream_arn: string;
}
export interface FluffyKinesisVideoStreamConfig {
    encryption_config: KinesisVideoStreamConfigEncryptionConfig;
    prefix: string;
    retention_period_hours: string;
}
export interface FluffyS3Config {
    bucket_name: string;
    bucket_prefix: string;
    encryption_config?: S3ConfigEncryptionConfig;
}
export interface S3ConfigEncryptionConfig {
    encryption_type: string;
    key_id: string;
}
export interface ConnectPhoneNumber {
    country_code: string;
    target_arn: string;
    type: string;
    description?: string;
    prefix?: string;
    tags?: string;
    arn?: string;
    phone_number?: string;
    id?: string;
    status?: ConnectPhoneNumberStatus;
    tags_all?: string;
}
export interface ConnectPhoneNumberStatus {
    message?: string;
    status?: string;
}
export interface ResourceConnectQueue {
    hours_of_operation_id: string;
    instance_id: string;
    name: string;
    description?: string;
    max_contacts?: string;
    quick_connect_ids?: string;
    status?: string;
    tags?: string;
    outbound_caller_id_name?: string;
    outbound_caller_id_number_id?: string;
    outbound_flow_id?: string;
    arn?: string;
    queue_id?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceConnectQuickConnect {
    instance_id: string;
    name: string;
    quick_connect_type: string;
    phone_number: string;
    contact_flow_id: string;
    queue_id: string;
    user_id: string;
    description?: string;
    tags?: string;
    arn?: string;
    quick_connect_id?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceConnectRoutingProfile {
    default_outbound_queue_id: string;
    description: string;
    instance_id: string;
    name: string;
    channel: string;
    concurrency: string;
    delay: string;
    priority: string;
    queue_id: string;
    tags?: string;
    arn?: string;
    id?: string;
    routing_profile_id?: string;
    tags_all?: string;
    queue_arn?: string;
    queue_name?: string;
}
export interface ResourceConnectSecurityProfile {
    instance_id: string;
    name: string;
    description?: string;
    permissions?: string;
    tags?: string;
    arn?: string;
    organization_resource_id?: string;
    security_profile_id?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceConnectUser {
    instance_id: string;
    name: string;
    routing_profile_id: string;
    security_profile_ids: string;
    phone_type: string;
    directory_user_id?: string;
    hierarchy_group_id?: string;
    password?: string;
    tags?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    after_contact_work_time_limit?: string;
    auto_accept?: string;
    desk_phone_number?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
    user_id?: string;
}
export interface ResourceConnectUserHierarchyGroup {
    instance_id: string;
    name: string;
    parent_group_id?: string;
    tags?: string;
    arn?: string;
    hierarchy_group_id?: string;
    id?: string;
    level_id?: string;
    tags_all?: string;
}
export interface ResourceConnectUserHierarchyStructure {
    instance_id: string;
    name: string;
    id?: string;
    arn?: string;
}
export interface ResourceConnectVocabulary {
    content: string;
    instance_id: string;
    language_code: string;
    name: string;
    tags?: string;
    arn?: string;
    failure_reason?: string;
    id?: string;
    last_modified_time?: string;
    state?: string;
    tags_all?: string;
    vocabulary_id?: string;
}
export interface ControltowerControl {
    control_identifier: string;
    target_identifier: string;
    id?: string;
}
export interface ResourceCurReportDefinition {
    report_name: string;
    time_unit: string;
    format: string;
    compression: string;
    additional_schema_elements: string;
    s3_bucket: string;
    s3_region: string;
    additional_artifacts: string;
    s3_prefix?: string;
    refresh_closed_reports?: string;
    report_versioning?: string;
    arn?: string;
}
export interface ResourceCustomerGateway {
    bgp_asn: string;
    type: string;
    certificate_arn?: string;
    device_name?: string;
    ip_address?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DataexchangeDataSet {
    asset_type: string;
    description: string;
    name: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DataexchangeRevision {
    data_set_id: string;
    comment: string;
    tags?: string;
    id?: string;
    revision_id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceDatapipelinePipeline {
    name: string;
    description?: string;
    tags?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceDatapipelinePipelineDefinition {
    pipeline_id: string;
    pipeline_object: PipelineObject;
    field: Field;
    name: string;
    attribute: AttributesClass;
    parameter_object?: FluffyParameterObject;
    parameter_value?: FluffyParameterValue;
    string_value?: string;
    id?: string;
}
export interface FluffyParameterObject {
    attribute: string;
    id: string;
}
export interface FluffyParameterValue {
    id: string;
    string_value: string;
}
export interface DatasyncAgent {
    name: string;
    activation_key?: string;
    ip_address?: string;
    private_link_endpoint?: string;
    security_group_arns?: string;
    subnet_arns?: string;
    tags?: string;
    vpc_endpoint_id?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DatasyncLocationAzureBlob {
    agent_arns: string;
    authentication_type: string;
    container_url: string;
    token: string;
    access_tier?: string;
    blob_type?: string;
    sas_configuration?: string;
    subdirectory?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface DatasyncLocationEFS {
    ec2_config: string;
    efs_file_system_arn: string;
    security_group_arns: string;
    subnet_arn: string;
    access_point_arn?: string;
    file_system_access_role_arn?: string;
    in_transit_encryption?: string;
    subdirectory?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DatasyncLocationFsxLustreFileSystem {
    fsx_filesystem_arn: string;
    security_group_arns?: string;
    subdirectory?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
    uri?: string;
    creation_time?: string;
}
export interface DatasyncLocationFsxOntapFileSystem {
    protocol: DatasyncLocationFsxOntapFileSystemProtocol;
    security_group_arns: string;
    storage_virtual_machine_arn: string;
    subdirectory?: string;
    tags?: string;
    version?: string;
    arn?: string;
    fsx_filesystem_arn?: string;
    uri?: string;
}
export interface DatasyncLocationFsxOntapFileSystemProtocol {
    nfs?: NFS;
    smb?: SMB;
}
export interface NFS {
    mount_options?: string;
}
export interface SMB {
    domain?: string;
    mount_options?: string;
    password?: string;
    user?: string;
}
export interface DatasyncLocationFsxOpenzfsFileSystem {
    fsx_filesystem_arn: string;
    protocol: DatasyncLocationFsxOpenzfsFileSystemProtocol;
    nfs: NFS;
    mount_options: MountOptions;
    security_group_arns?: string;
    subdirectory?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
    uri?: string;
    creation_time?: string;
}
export interface MountOptions {
    version?: string;
}
export interface DatasyncLocationFsxOpenzfsFileSystemProtocol {
    nfs?: string;
}
export interface DatasyncLocationFsxWindowsFileSystem {
    fsx_filesystem_arn: string;
    password: string;
    user: string;
    domain?: string;
    security_group_arns?: string;
    subdirectory?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
    uri?: string;
    creation_time?: string;
}
export interface DatasyncLocationHdfs {
    agent_arns: string;
    authentication_type: string;
    name_node: string;
    hostname: string;
    port: string;
    simple_user?: string;
    block_size?: string;
    replication_factor?: string;
    kerberos_keytab?: string;
    kerberos_krb5_conf?: string;
    kerberos_principal?: string;
    kms_key_provider_uri?: string;
    qop_configuration?: string;
    subdirectory?: string;
    tags?: string;
    data_transfer_protection?: string;
    rpc_protection?: string;
    arn?: string;
    tags_all?: string;
}
export interface DatasyncLocationNFS {
    on_prem_config: string;
    server_hostname: string;
    subdirectory: string;
    agent_arns: string;
    mount_options?: string;
    tags?: string;
    version?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DatasyncLocationObjectStorage {
    agent_arns: string;
    bucket_name: string;
    server_hostname: string;
    access_key?: string;
    secret_key?: string;
    server_certificate?: string;
    server_protocol?: string;
    server_port?: string;
    subdirectory?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
    uri?: string;
}
export interface DatasyncLocationS3 {
    s3_bucket_arn: string;
    s3_config: string;
    subdirectory: string;
    bucket_access_role_arn: string;
    agent_arns?: string;
    s3_storage_class?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DatasyncLocationSMB {
    agent_arns: string;
    password: string;
    server_hostname: string;
    subdirectory: string;
    user: string;
    domain?: string;
    mount_options?: string;
    tags?: string;
    version?: string;
    arn?: string;
    tags_all?: string;
}
export interface DatasyncTask {
    destination_location_arn: string;
    source_location_arn: string;
    cloudwatch_log_group_arn?: string;
    excludes?: string;
    includes?: string;
    name?: string;
    options?: string;
    schedule?: DatasyncTaskSchedule;
    tags?: string;
    atime?: string;
    bytes_per_second?: string;
    gid?: string;
    log_level?: string;
    mtime?: string;
    object_tags?: string;
    overwrite_mode?: string;
    posix_permissions?: string;
    preserve_deleted_files?: string;
    preserve_devices?: string;
    security_descriptor_copy_flags?: string;
    task_queueing?: string;
    transfer_mode?: string;
    uid?: string;
    verify_mode?: string;
    filter_type?: string;
    value?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DatasyncTaskSchedule {
    schedule_expression: string;
}
export interface DaxCluster {
    cluster_name: string;
    iam_role_arn: string;
    node_type: string;
    replication_factor: string;
    cluster_endpoint_encryption_type?: string;
    availability_zones?: string;
    description?: string;
    notification_topic_arn?: string;
    parameter_group_name?: string;
    maintenance_window?: string;
    security_group_ids?: string;
    server_side_encryption?: string;
    subnet_group_name?: string;
    tags?: string;
    enabled?: string;
    arn?: string;
    nodes?: string;
    configuration_endpoint?: string;
    cluster_address?: string;
    port?: string;
    tags_all?: string;
}
export interface DaxParameterGroup {
    name: string;
    description?: string;
    parameters?: string;
    id?: string;
}
export interface DaxSubnetGroup {
    name: string;
    subnet_ids: string;
    description?: string;
    id?: string;
    vpc_id?: string;
}
export interface ResourceDBClusterSnapshot {
    db_cluster_identifier: string;
    db_cluster_snapshot_identifier: string;
    tags?: string;
    allocated_storage?: string;
    availability_zones?: string;
    db_cluster_snapshot_arn?: string;
    engine?: string;
    engine_version?: string;
    kms_key_id?: string;
    license_model?: string;
    port?: string;
    source_db_cluster_snapshot_identifier?: string;
    storage_encrypted?: string;
    status?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface DBEventSubscription {
    sns_topic: string;
    name?: string;
    name_prefix?: string;
    source_ids?: string;
    source_type?: string;
    event_categories?: string;
    enabled?: string;
    tags?: string;
    id?: string;
    arn?: string;
    customer_aws_id?: string;
    tags_all?: string;
}
export interface ResourceDBInstance {
    allocated_storage: string;
    engine: string;
    instance_class: string;
    password: string;
    username: string;
    bucket_name: string;
    ingestion_role: string;
    source_engine: string;
    source_engine_version: string;
    allow_major_version_upgrade?: string;
    apply_immediately?: string;
    auto_minor_version_upgrade?: string;
    availability_zone?: string;
    backup_retention_period?: string;
    backup_target?: string;
    backup_window?: string;
    blue_green_update?: string;
    ca_cert_identifier?: string;
    character_set_name?: string;
    copy_tags_to_snapshot?: string;
    custom_iam_instance_profile?: string;
    db_name?: string;
    db_subnet_group_name?: string;
    delete_automated_backups?: string;
    deletion_protection?: string;
    domain?: string;
    domain_iam_role_name?: string;
    enabled_cloudwatch_logs_exports?: string;
    engine_version?: string;
    final_snapshot_identifier?: string;
    iam_database_authentication_enabled?: string;
    identifier?: string;
    identifier_prefix?: string;
    iops?: string;
    kms_key_id?: string;
    license_model?: string;
    maintenance_window?: string;
    manage_master_user_password?: string;
    master_user_secret_kms_key_id?: string;
    max_allocated_storage?: string;
    monitoring_interval?: string;
    monitoring_role_arn?: string;
    multi_az?: string;
    nchar_character_set_name?: string;
    network_type?: string;
    option_group_name?: string;
    parameter_group_name?: string;
    performance_insights_enabled?: string;
    performance_insights_kms_key_id?: string;
    performance_insights_retention_period?: string;
    port?: string;
    publicly_accessible?: string;
    replica_mode?: string;
    replicate_source_db?: string;
    restore_to_point_in_time?: RestoreToPointInTime;
    s3_import?: string;
    skip_final_snapshot?: string;
    snapshot_identifier?: string;
    storage_encrypted?: string;
    storage_type?: string;
    storage_throughput?: string;
    tags?: string;
    timezone?: string;
    vpc_security_group_ids?: string;
    customer_owned_ip_enabled?: string;
    bucket_prefix?: string;
    arn?: string;
    endpoint?: DBInstanceEndpoint;
    engine_version_actual?: string;
    id?: string;
    latest_restorable_time?: string;
    listener_endpoint?: string;
    master_user_secret?: MasterUserSecret;
    resource_id?: string;
    status?: string;
    tags_all?: string;
}
export interface DBInstanceEndpoint {
    address?: string;
    hosted_zone_id?: string;
    port?: string;
}
export interface RestoreToPointInTime {
    restore_time?: string;
    source_db_instance_identifier?: string;
    source_db_instance_automated_backups_arn?: string;
    source_dbi_resource_id?: string;
    use_latest_restorable_time?: string;
}
export interface DBInstanceAutomatedBackupsReplication {
    source_db_instance_arn: string;
    kms_key_id?: string;
    pre_signed_url?: string;
    retention_period?: string;
    id?: string;
}
export interface DBInstanceRoleAssociation {
    db_instance_identifier: string;
    feature_name: string;
    role_arn: string;
    id?: string;
}
export interface DBOptionGroup {
    engine_name: string;
    major_engine_version: string;
    option_name: string;
    name?: string;
    name_prefix?: string;
    option_group_description?: string;
    option?: string;
    tags?: string;
    option_settings?: string;
    port?: string;
    version?: string;
    db_security_group_memberships?: string;
    vpc_security_group_memberships?: string;
    value?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DBParameterGroupClass {
    family: string;
    name: string;
    value: string;
    name_prefix?: string;
    description?: string;
    parameter?: string;
    tags?: string;
    apply_method?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceDBProxy {
    name: string;
    auth: string;
    engine_family: string;
    role_arn: string;
    vpc_subnet_ids: string;
    debug_logging?: string;
    idle_client_timeout?: string;
    require_tls?: string;
    vpc_security_group_ids?: string;
    tags?: string;
    auth_scheme?: string;
    client_password_auth_type?: string;
    description?: string;
    iam_auth?: string;
    secret_arn?: string;
    username?: string;
    id?: string;
    arn?: string;
    endpoint?: string;
    tags_all?: string;
}
export interface DBProxyDefaultTargetGroup {
    db_proxy_name: string;
    connection_pool_config?: string;
    connection_borrow_timeout?: string;
    init_query?: string;
    max_connections_percent?: string;
    max_idle_connections_percent?: string;
    session_pinning_filters?: string;
    id?: string;
    arn?: string;
    name?: string;
}
export interface DBProxyEndpoint {
    db_proxy_endpoint_name: string;
    db_proxy_name: string;
    vpc_subnet_ids: string;
    vpc_security_group_ids?: string;
    target_role?: string;
    tags?: string;
    id?: string;
    arn?: string;
    endpoint?: string;
    is_default?: string;
    vpc_id?: string;
}
export interface DBProxyTarget {
    db_proxy_name: string;
    target_group_name: string;
    db_instance_identifier?: string;
    db_cluster_identifier?: string;
    endpoint?: string;
    id?: string;
    port?: string;
    rds_resource_id?: string;
    target_arn?: string;
    tracked_cluster_id?: string;
    type?: string;
}
export interface ResourceDBSnapshot {
    db_instance_identifier: string;
    db_snapshot_identifier: string;
    shared_accounts?: string;
    tags?: string;
    allocated_storage?: string;
    availability_zone?: string;
    db_snapshot_arn?: string;
    encrypted?: string;
    engine?: string;
    engine_version?: string;
    iops?: string;
    kms_key_id?: string;
    license_model?: string;
    option_group_name?: string;
    source_db_snapshot_identifier?: string;
    source_region?: string;
    status?: string;
    storage_type?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface DBSnapshotCopy {
    source_db_snapshot_identifier: string;
    target_db_snapshot_identifier: string;
    copy_tags?: string;
    destination_region?: string;
    kms_key_id?: string;
    presigned_url?: string;
    target_custom_availability_zone?: string;
    tags?: string;
    id?: string;
    allocated_storage?: string;
    availability_zone?: string;
    db_snapshot_arn?: string;
    encrypted?: string;
    engine?: string;
    engine_version?: string;
    iops?: string;
    license_model?: string;
    option_group_name?: string;
    source_region?: string;
    storage_type?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface ResourceDBSubnetGroup {
    subnet_ids: string;
    name?: string;
    name_prefix?: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    supported_network_types?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface DefaultNetworkACL {
    default_network_acl_id: string;
    action: string;
    from_port: string;
    protocol: string;
    rule_no: string;
    to_port: string;
    subnet_ids?: string;
    tags?: string;
    cidr_block?: string;
    icmp_code?: string;
    icmp_type?: string;
    ipv6_cidr_block?: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface DefaultRouteTable {
    default_route_table_id: string;
    propagating_vgws?: string;
    route?: DefaultRouteTableRoute;
    tags?: string;
    id?: string;
    arn?: string;
    owner_id?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface DefaultRouteTableRoute {
    cidr_block: string;
    ipv6_cidr_block?: string;
    destination_prefix_list_id?: string;
    core_network_arn?: string;
    egress_only_gateway_id?: string;
    gateway_id?: string;
    instance_id?: string;
    nat_gateway_id?: string;
    network_interface_id?: string;
    transit_gateway_id?: string;
    vpc_endpoint_id?: string;
    vpc_peering_connection_id?: string;
}
export interface DefaultSecurityGroup {
    from_port: string;
    protocol: string;
    to_port: string;
    tags?: string;
    vpc_id?: string;
    cidr_blocks?: string;
    description?: string;
    ipv6_cidr_blocks?: string;
    prefix_list_ids?: string;
    security_groups?: string;
    self?: string;
    arn?: string;
    id?: string;
    name?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface DefaultSubnet {
    availability_zone?: string;
    force_destroy?: string;
    availability_zone_id?: string;
    cidr_block?: string;
    vpc_id?: string;
}
export interface DefaultVpc {
    force_destroy?: string;
    cidr_block?: string;
    instance_tenancy?: string;
}
export interface DefaultVpcDHCPOptions {
    netbios_name_servers?: string;
    netbios_node_type?: string;
    owner_id?: string;
    tags?: string;
    id?: string;
    arn?: string;
}
export interface DetectiveGraph {
    tags?: string;
    id?: string;
    graph_arn?: string;
    created_time?: string;
}
export interface DetectiveInvitationAccepter {
    graph_arn: string;
    id?: string;
}
export interface DetectiveMember {
    account_id: string;
    email_address: string;
    graph_arn: string;
    message?: string;
    disable_email_notification?: string;
    id?: string;
    status?: string;
    administrator_id?: string;
    volume_usage_in_bytes?: string;
    invited_time?: string;
    updated_time?: string;
}
export interface DevicefarmDevicePool {
    name: string;
    project_arn: string;
    rule: DevicefarmDevicePoolRule;
    description?: string;
    max_devices?: string;
    tags?: string;
    value?: string;
    arn?: string;
    tags_all?: string;
}
export interface DevicefarmDevicePoolRule {
    attribute?: string;
    operator?: string;
    value?: string;
}
export interface DevicefarmInstanceProfile {
    name: string;
    description?: string;
    exclude_app_packages_from_cleanup?: string;
    package_cleanup?: string;
    reboot_after_use?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface DevicefarmNetworkProfile {
    name: string;
    project_arn: string;
    description?: string;
    downlink_bandwidth_bits?: string;
    downlink_delay_ms?: string;
    downlink_jitter_ms?: string;
    downlink_loss_percent?: string;
    uplink_bandwidth_bits?: string;
    uplink_delay_ms?: string;
    uplink_jitter_ms?: string;
    uplink_loss_percent?: string;
    type?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface DevicefarmProject {
    name: string;
    default_job_timeout_minutes?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface DevicefarmTestGridProject {
    name: string;
    vpc_config: DevicefarmTestGridProjectVpcConfig;
    vpc_id: string;
    description?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface DevicefarmTestGridProjectVpcConfig {
    security_group_ids?: string;
    subnet_ids?: string;
    vpc_id?: string;
}
export interface DevicefarmUpload {
    name: string;
    project_arn: string;
    type: string;
    content_type?: string;
    arn?: string;
    url?: string;
    category?: string;
    metadata?: string;
}
export interface DirectoryServiceConditionalForwarder {
    directory_id: string;
    dns_ips: string;
    remote_domain_name: string;
}
export interface ResourceDirectoryServiceDirectory {
    name: string;
    password: string;
    subnet_ids: string;
    vpc_id: string;
    customer_username: string;
    customer_dns_ips: string;
    size?: string;
    alias?: string;
    description?: string;
    desired_number_of_domain_controllers?: string;
    short_name?: string;
    enable_sso?: string;
    type?: string;
    edition?: string;
    tags?: string;
    id?: string;
    access_url?: string;
    dns_ip_addresses?: string;
    security_group_id?: string;
    tags_all?: string;
    connect_ips?: string;
}
export interface DirectoryServiceLogSubscription {
    directory_id: string;
    log_group_name: string;
}
export interface DirectoryServiceRadiusSettings {
    directory_id: string;
    display_label: string;
    radius_port: string;
    radius_retries: string;
    radius_servers: string;
    radius_timeout: string;
    shared_secret: string;
    authentication_protocol?: string;
    use_same_username?: string;
    id?: string;
}
export interface DirectoryServiceRegion {
    directory_id: string;
    region_name: string;
    vpc_settings: VpcSettings;
    desired_number_of_domain_controllers?: string;
    tags?: string;
    tags_all?: string;
}
export interface VpcSettings {
    subnet_ids?: string;
    vpc_id?: string;
}
export interface DirectoryServiceSharedDirectory {
    directory_id: string;
    target: Target;
    method?: string;
    notes?: string;
    id?: string;
    shared_directory_id?: string;
}
export interface Target {
    id?: string;
    type?: string;
}
export interface DirectoryServiceSharedDirectoryAccepter {
    shared_directory_id: string;
    id?: string;
    method?: string;
    notes?: string;
    owner_account_id?: string;
    owner_directory_id?: string;
}
export interface DirectoryServiceTrust {
    directory_id: string;
    remote_domain_name: string;
    trust_direction: string;
    trust_password: string;
    conditional_forwarder_ip_addrs?: string;
    delete_associated_conditional_forwarder?: string;
    selective_auth?: string;
    trust_type?: string;
    created_date_time?: string;
    id?: string;
    last_updated_date_time?: string;
    state_last_updated_date_time?: string;
    trust_state?: string;
    trust_state_reason?: string;
}
export interface DlmLifecyclePolicy {
    description: string;
    execution_role_arn: string;
    retain_rule: string;
    target: string;
    encrypted: string;
    parameters: string;
    type: string;
    description_regex: string;
    event_type: string;
    snapshot_owner: string;
    name: string;
    availability_zones: string;
    target_accounts: string;
    interval: string;
    interval_unit: string;
    state?: string;
    tags?: string;
    resource_types?: string;
    resource_locations?: string;
    policy_type?: string;
    target_tags?: string;
    cross_region_copy?: string;
    cmk_arn?: string;
    exclude_boot_volume?: string;
    no_reboot?: string;
    copy_tags?: string;
    tags_to_add?: string;
    variable_tags?: string;
    cron_expression?: string;
    location?: string;
    times?: string;
    count?: string;
    deprecate_rule?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceDmsCertificate {
    certificate_id: string;
    certificate_pem?: string;
    certificate_wallet?: string;
    tags?: string;
    certificate_arn?: string;
    tags_all?: string;
}
export interface ResourceDmsEndpoint {
    endpoint_id: string;
    endpoint_type: string;
    engine_name: string;
    kms_key_arn: string;
    auth_type: string;
    server_name: string;
    port: string;
    certificate_arn?: string;
    database_name?: string;
    elasticsearch_settings?: ElasticsearchSettings;
    extra_connection_attributes?: string;
    kafka_settings?: KafkaSettings;
    kinesis_settings?: KinesisSettings;
    mongodb_settings?: MongodbSettings;
    password?: string;
    redshift_settings?: RedshiftSettings;
    s3_settings?: S3Settings;
    secrets_manager_access_role_arn?: string;
    secrets_manager_arn?: string;
    service_access_role?: string;
    ssl_mode?: string;
    tags?: string;
    username?: string;
    ssl_ca_certificate_arn?: string;
    stream_arn?: string;
    auth_password?: string;
    auth_user_name?: string;
    endpoint_arn?: string;
    tags_all?: string;
}
export interface ElasticsearchSettings {
    endpoint_uri: string;
    service_access_role_arn: string;
    error_retry_duration?: string;
    full_load_error_percentage?: string;
}
export interface KafkaSettings {
    broker: string;
    include_control_details?: string;
    include_null_and_empty?: string;
    include_partition_value?: string;
    include_table_alter_operations?: string;
    include_transaction_details?: string;
    message_format?: string;
    message_max_bytes?: string;
    no_hex_prefix?: string;
    partition_include_schema_table?: string;
    sasl_password?: string;
    sasl_username?: string;
    security_protocol?: string;
    ssl_ca_certificate_arn?: string;
    ssl_client_certificate_arn?: string;
    ssl_client_key_arn?: string;
    ssl_client_key_password?: string;
    topic?: string;
}
export interface KinesisSettings {
    include_control_details?: string;
    include_null_and_empty?: string;
    include_partition_value?: string;
    include_table_alter_operations?: string;
    include_transaction_details?: string;
    message_format?: string;
    partition_include_schema_table?: string;
    service_access_role_arn?: string;
    stream_arn?: string;
}
export interface MongodbSettings {
    auth_mechanism?: string;
    auth_source?: string;
    auth_type?: string;
    docs_to_investigate?: string;
    extract_doc_id?: string;
    nesting_level?: string;
}
export interface RedshiftSettings {
    server_side_encryption_kms_key_id: string;
    bucket_folder?: string;
    bucket_name?: string;
    encryption_mode?: string;
    service_access_role_arn?: string;
}
export interface S3Settings {
    server_side_encryption_kms_key_id: string;
    add_column_name?: string;
    bucket_folder?: string;
    bucket_name?: string;
    canned_acl_for_objects?: string;
    cdc_inserts_and_updates?: string;
    cdc_inserts_only?: string;
    cdc_max_batch_interval?: string;
    cdc_min_file_size?: string;
    cdc_path?: string;
    compression_type?: string;
    csv_delimiter?: string;
    csv_no_sup_value?: string;
    csv_null_value?: string;
    csv_row_delimiter?: string;
    data_format?: string;
    data_page_size?: string;
    date_partition_delimiter?: string;
    date_partition_enabled?: string;
    date_partition_sequence?: string;
    dict_page_size_limit?: string;
    enable_statistics?: string;
    encoding_type?: string;
    encryption_mode?: string;
    external_table_definition?: string;
    ignore_header_rows?: string;
    include_op_for_full_load?: string;
    max_file_size?: string;
    parquet_timestamp_in_millisecond?: string;
    parquet_version?: string;
    preserve_transactions?: string;
    rfc_4180?: string;
    row_group_length?: string;
    service_access_role_arn?: string;
    timestamp_column_name?: string;
    use_csv_no_sup_value?: string;
    use_task_start_time_for_full_load_timestamp?: string;
}
export interface DmsEventSubscription {
    name: string;
    source_ids: string;
    sns_topic_arn: string;
    enabled?: string;
    event_categories?: string;
    source_type?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface DmsReplicationConfig {
    compute_config: string;
    replication_config_identifier: string;
    replication_type: string;
    source_endpoint_arn: string;
    table_mappings: string;
    target_endpoint_arn: string;
    max_capacity_units: string;
    start_replication?: string;
    replication_settings?: string;
    resource_identifier?: string;
    supplemental_settings?: string;
    tags?: string;
    availability_zone?: string;
    dns_name_servers?: string;
    kms_key_id?: string;
    min_capacity_units?: string;
    multi_az?: string;
    preferred_maintenance_window?: string;
    replication_subnet_group_id?: string;
    vpc_security_group_ids?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceDmsReplicationInstance {
    replication_instance_class: string;
    replication_instance_id: string;
    allocated_storage?: string;
    allow_major_version_upgrade?: string;
    apply_immediately?: string;
    auto_minor_version_upgrade?: string;
    availability_zone?: string;
    engine_version?: string;
    kms_key_arn?: string;
    multi_az?: string;
    network_type?: string;
    preferred_maintenance_window?: string;
    publicly_accessible?: string;
    replication_subnet_group_id?: string;
    tags?: string;
    vpc_security_group_ids?: string;
    replication_instance_arn?: string;
    replication_instance_private_ips?: string;
    replication_instance_public_ips?: string;
    tags_all?: string;
}
export interface ResourceDmsReplicationSubnetGroup {
    replication_subnet_group_description: string;
    replication_subnet_group_id: string;
    subnet_ids: string;
    tags?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface ResourceDmsReplicationTask {
    migration_type: string;
    replication_instance_arn: string;
    replication_task_id: string;
    source_endpoint_arn: string;
    table_mappings: string;
    target_endpoint_arn: string;
    cdc_start_position?: string;
    cdc_start_time?: string;
    replication_task_settings?: string;
    start_replication_task?: string;
    tags?: string;
    replication_task_arn?: string;
    status?: string;
    tags_all?: string;
}
export interface DmsS3Endpoint {
    bucket_name: string;
    cdc_path: string;
    endpoint_id: string;
    endpoint_type: string;
    external_table_definition: string;
    service_access_role_arn: string;
    add_column_name?: string;
    add_trailing_padding_character?: string;
    bucket_folder?: string;
    canned_acl_for_objects?: string;
    cdc_inserts_and_updates?: string;
    cdc_inserts_only?: string;
    cdc_max_batch_interval?: string;
    cdc_min_file_size?: string;
    certificate_arn?: string;
    compression_type?: string;
    csv_delimiter?: string;
    csv_no_sup_value?: string;
    csv_null_value?: string;
    csv_row_delimiter?: string;
    data_format?: string;
    data_page_size?: string;
    date_partition_delimiter?: string;
    date_partition_enabled?: string;
    date_partition_sequence?: string;
    date_partition_timezone?: string;
    detach_target_on_lob_lookup_failure_parquet?: string;
    dict_page_size_limit?: string;
    enable_statistics?: string;
    encoding_type?: string;
    encryption_mode?: string;
    expected_bucket_owner?: string;
    ignore_header_rows?: string;
    include_op_for_full_load?: string;
    kms_key_arn?: string;
    max_file_size?: string;
    parquet_timestamp_in_millisecond?: string;
    parquet_version?: string;
    preserve_transactions?: string;
    rfc_4180?: string;
    row_group_length?: string;
    server_side_encryption_kms_key_id?: string;
    ssl_mode?: string;
    tags?: string;
    timestamp_column_name?: string;
    use_csv_no_sup_value?: string;
    use_task_start_time_for_full_load_timestamp?: string;
    endpoint_arn?: string;
    engine_display_name?: string;
    external_id?: string;
    status?: string;
    tags_all?: string;
}
export interface DocdbCluster {
    master_password: string;
    master_username: string;
    apply_immediately?: string;
    availability_zones?: string;
    backup_retention_period?: string;
    cluster_identifier_prefix?: string;
    cluster_identifier?: string;
    db_subnet_group_name?: string;
    db_cluster_parameter_group_name?: string;
    deletion_protection?: string;
    enabled_cloudwatch_logs_exports?: string;
    engine_version?: string;
    engine?: string;
    final_snapshot_identifier?: string;
    global_cluster_identifier?: string;
    kms_key_id?: string;
    port?: string;
    preferred_backup_window?: string;
    preferred_maintenance_window?: string;
    skip_final_snapshot?: string;
    snapshot_identifier?: string;
    storage_encrypted?: string;
    tags?: string;
    vpc_security_group_ids?: string;
    arn?: string;
    cluster_members?: string;
    cluster_resource_id?: string;
    endpoint?: string;
    hosted_zone_id?: string;
    id?: string;
    reader_endpoint?: string;
    tags_all?: string;
}
export interface DocdbClusterInstance {
    cluster_identifier: string;
    instance_class: string;
    apply_immediately?: string;
    auto_minor_version_upgrade?: string;
    availability_zone?: string;
    enable_performance_insights?: string;
    engine?: string;
    identifier?: string;
    identifier_prefix?: string;
    performance_insights_kms_key_id?: string;
    preferred_maintenance_window?: string;
    promotion_tier?: string;
    tags?: string;
    arn?: string;
    db_subnet_group_name?: string;
    dbi_resource_id?: string;
    endpoint?: string;
    engine_version?: string;
    kms_key_id?: string;
    port?: string;
    preferred_backup_window?: string;
    storage_encrypted?: string;
    tags_all?: string;
    writer?: string;
    ca_cert_identifier?: string;
}
export interface DocdbClusterSnapshot {
    db_cluster_identifier: string;
    db_cluster_snapshot_identifier: string;
    availability_zones?: string;
    db_cluster_snapshot_arn?: string;
    engine?: string;
    engine_version?: string;
    kms_key_id?: string;
    port?: string;
    source_db_cluster_snapshot_identifier?: string;
    storage_encrypted?: string;
    status?: string;
    vpc_id?: string;
}
export interface DocdbGlobalCluster {
    global_cluster_identifier: string;
    database_name?: string;
    deletion_protection?: string;
    engine?: string;
    engine_version?: string;
    source_db_cluster_identifier?: string;
    storage_encrypted?: string;
    arn?: string;
    global_cluster_members?: string;
    db_cluster_arn?: string;
    is_writer?: string;
    global_cluster_resource_id?: string;
    id?: string;
}
export interface DocdbSubnetGroupClass {
    subnet_ids: string;
    name?: string;
    name_prefix?: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DxBGPPeer {
    address_family: string;
    bgp_asn: string;
    virtual_interface_id: string;
    amazon_address?: string;
    bgp_auth_key?: string;
    customer_address?: string;
    id?: string;
    bgp_status?: string;
    bgp_peer_id?: string;
    aws_device?: string;
}
export interface ResourceDxConnection {
    bandwidth: string;
    location: string;
    name: string;
    encryption_mode?: string;
    provider_name?: string;
    request_macsec?: string;
    skip_destroy?: string;
    tags?: string;
    arn?: string;
    aws_device?: string;
    has_logical_redundancy?: string;
    id?: string;
    jumbo_frame_capable?: string;
    macsec_capable?: string;
    owner_account_id?: string;
    partner_name?: string;
    port_encryption_status?: string;
    tags_all?: string;
    vlan_id?: string;
}
export interface DxConnectionAssociation {
    connection_id: string;
    lag_id: string;
}
export interface DxConnectionConfirmation {
    connection_id: string;
    id?: string;
}
export interface ResourceDxGateway {
    name: string;
    amazon_side_asn: string;
    id?: string;
    owner_account_id?: string;
}
export interface DxGatewayAssociation {
    dx_gateway_id: string;
    associated_gateway_id?: string;
    associated_gateway_owner_account_id?: string;
    proposal_id?: string;
    allowed_prefixes?: string;
    id?: string;
    associated_gateway_type?: string;
    dx_gateway_association_id?: string;
    dx_gateway_owner_account_id?: string;
}
export interface DxGatewayAssociationProposal {
    associated_gateway_id: string;
    dx_gateway_id: string;
    dx_gateway_owner_account_id: string;
    allowed_prefixes?: string;
    id?: string;
    associated_gateway_owner_account_id?: string;
    associated_gateway_type?: string;
}
export interface DxHostedConnection {
    name: string;
    bandwidth: string;
    connection_id: string;
    owner_account_id: string;
    vlan: string;
    id?: string;
    jumbo_frame_capable?: string;
    has_logical_redundancy?: string;
    aws_device?: string;
    state?: string;
    lag_id?: string;
    loa_issue_time?: string;
    location?: string;
    partner_name?: string;
    provider_name?: string;
    region?: string;
}
export interface DxHostedVirtualInterface {
    address_family: string;
    bgp_asn: string;
    connection_id: string;
    name: string;
    owner_account_id: string;
    vlan: string;
    amazon_address?: string;
    mtu?: string;
    bgp_auth_key?: string;
    customer_address?: string;
    id?: string;
    arn?: string;
    jumbo_frame_capable?: string;
    aws_device?: string;
}
export interface DxHostedPrivateVirtualInterfaceAccepter {
    virtual_interface_id: string;
    dx_gateway_id?: string;
    tags?: string;
    vpn_gateway_id?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DxHostedPublicVirtualInterface {
    address_family: string;
    bgp_asn: string;
    connection_id: string;
    name: string;
    owner_account_id: string;
    route_filter_prefixes: string;
    vlan: string;
    amazon_address?: string;
    bgp_auth_key?: string;
    customer_address?: string;
    id?: string;
    arn?: string;
    aws_device?: string;
}
export interface DxHostedPublicVirtualInterfaceAccepter {
    virtual_interface_id: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DxHostedTransitVirtualInterfaceAccepter {
    dx_gateway_id: string;
    virtual_interface_id: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DxLag {
    name: string;
    connections_bandwidth: string;
    location: string;
    connection_id?: string;
    force_destroy?: string;
    provider_name?: string;
    tags?: string;
    arn?: string;
    has_logical_redundancy?: string;
    id?: string;
    jumbo_frame_capable?: string;
    owner_account_id?: string;
    tags_all?: string;
}
export interface DxMacsecKeyAssociation {
    connection_id: string;
    cak?: string;
    ckn?: string;
    secret_arn?: string;
    id?: string;
    start_on?: string;
    state?: string;
}
export interface DxPrivateVirtualInterface {
    address_family: string;
    bgp_asn: string;
    connection_id: string;
    name: string;
    vlan: string;
    amazon_address?: string;
    bgp_auth_key?: string;
    customer_address?: string;
    dx_gateway_id?: string;
    mtu?: string;
    sitelink_enabled?: string;
    tags?: string;
    vpn_gateway_id?: string;
    id?: string;
    arn?: string;
    aws_device?: string;
    jumbo_frame_capable?: string;
    tags_all?: string;
}
export interface DxPublicVirtualInterface {
    address_family: string;
    bgp_asn: string;
    connection_id: string;
    name: string;
    vlan: string;
    route_filter_prefixes: string;
    amazon_address?: string;
    bgp_auth_key?: string;
    customer_address?: string;
    tags?: string;
    id?: string;
    arn?: string;
    aws_device?: string;
    tags_all?: string;
}
export interface DxTransitVirtualInterface {
    address_family: string;
    bgp_asn: string;
    connection_id: string;
    dx_gateway_id: string;
    name: string;
    vlan: string;
    amazon_address?: string;
    bgp_auth_key?: string;
    customer_address?: string;
    mtu?: string;
    sitelink_enabled?: string;
    tags?: string;
    id?: string;
    arn?: string;
    aws_device?: string;
    jumbo_frame_capable?: string;
    tags_all?: string;
}
export interface DynamodbContributorInsights {
    table_name: string;
    index_name?: string;
}
export interface DynamodbGlobalTable {
    name: string;
    replica: string;
    region_name: string;
    id?: string;
    arn?: string;
}
export interface DynamodbKinesisStreamingDestination {
    stream_arn: string;
    table_name: string;
    id?: string;
}
export interface ResourceDynamodbTable {
    attribute: DynamodbTableAttribute;
    range_key: string;
    region_name: string;
    billing_mode?: string;
    deletion_protection_enabled?: string;
    global_secondary_index?: string;
    local_secondary_index?: LocalSecondaryIndex;
    point_in_time_recovery?: SoftwareTokenMfaConfiguration;
    replica?: DynamodbTableReplica;
    restore_date_time?: string;
    restore_source_name?: string;
    restore_to_latest_time?: string;
    server_side_encryption?: ServerSideEncryption;
    stream_enabled?: string;
    stream_view_type?: string;
    table_class?: string;
    tags?: string;
    ttl?: TTL;
    arn?: string;
    id?: string;
    stream_arn?: string;
    stream_label?: string;
    tags_all?: string;
}
export interface DynamodbTableAttribute {
    name?: string;
    type?: string;
    hash_key?: string;
    non_key_attributes?: string;
    projection_type?: string;
    range_key?: string;
    read_capacity?: string;
    write_capacity?: string;
}
export interface LocalSecondaryIndex {
    name: string;
    projection_type: string;
    range_key: string;
    non_key_attributes?: string;
}
export interface DynamodbTableReplica {
    region_name: string;
    kms_key_arn?: string;
    point_in_time_recovery?: string;
    propagate_tags?: string;
}
export interface ServerSideEncryption {
    enabled: string;
    kms_key_arn?: string;
}
export interface TTL {
    enabled: string;
    attribute_name: string;
}
export interface ResourceDynamodbTableItem {
    hash_key: string;
    item: string;
    table_name: string;
    range_key?: string;
}
export interface DynamodbTableReplicaClass {
    global_table_arn: string;
    kms_key_arn?: string;
    point_in_time_recovery?: string;
    table_class_override?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface Tag {
    resource_arn: string;
    key: string;
    value: string;
    id?: string;
}
export interface ResourceEbsDefaultKmsKey {
    key_arn: string;
}
export interface EnclaveOptionsClass {
    enabled?: string;
}
export interface ResourceEbsSnapshot {
    volume_id: string;
    description?: string;
    outpost_arn?: string;
    storage_tier?: string;
    permanent_restore?: string;
    temporary_restore_days?: string;
    tags?: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    owner_alias?: string;
    encrypted?: string;
    volume_size?: string;
    kms_key_id?: string;
    data_encryption_key_id?: string;
    tags_all?: string;
}
export interface EbsSnapshotCopy {
    description?: string;
    encrypted?: string;
    kms_key_id?: string;
    source_snapshot_id?: string;
    source_region?: string;
    storage_tier?: string;
    permanent_restore?: string;
    temporary_restore_days?: string;
    tags?: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    owner_alias?: string;
    volume_size?: string;
    data_encryption_key_id?: string;
    tags_all?: string;
}
export interface EbsSnapshotImport {
    format: string;
    description?: string;
    encrypted?: string;
    kms_key_id?: string;
    storage_tier?: string;
    permanent_restore?: string;
    temporary_restore_days?: string;
    role_name?: string;
    tags?: string;
    comment?: string;
    upload_start?: string;
    upload_end?: string;
    upload_size?: string;
    url?: string;
    s3_bucket?: string;
    s3_key?: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    owner_alias?: string;
    volume_size?: string;
    data_encryption_key_id?: string;
    tags_all?: string;
}
export interface ResourceEbsVolume {
    availability_zone: string;
    encrypted?: string;
    final_snapshot?: string;
    iops?: string;
    multi_attach_enabled?: string;
    size?: string;
    snapshot_id?: string;
    outpost_arn?: string;
    type?: string;
    kms_key_id?: string;
    tags?: string;
    throughput?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface Ec2AvailabilityZoneGroup {
    group_name: string;
    opt_in_status: string;
    id?: string;
}
export interface Ec2CapacityReservation {
    availability_zone: string;
    instance_count: string;
    instance_platform: string;
    instance_type: string;
    ebs_optimized?: string;
    end_date?: string;
    end_date_type?: string;
    ephemeral_storage?: string;
    instance_match_criteria?: string;
    outpost_arn?: string;
    placement_group_arn?: string;
    tags?: string;
    tenancy?: string;
    id?: string;
    owner_id?: string;
    arn?: string;
    tags_all?: string;
}
export interface Ec2CarrierGateway {
    vpc_id: string;
    tags?: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface Ec2ClientVPNAuthorizationRule {
    client_vpn_endpoint_id: string;
    target_network_cidr: string;
    access_group_id?: string;
    authorize_all_groups?: string;
    description?: string;
}
export interface ResourceEc2ClientVPNEndpoint {
    authentication_options: AuthenticationOptions;
    client_cidr_block: string;
    connection_log_options: ConnectionLogOptions;
    server_certificate_arn: string;
    client_connect_options?: ClientConnectOptions;
    client_login_banner_options?: ClientLoginBannerOptions;
    description?: string;
    dns_servers?: string;
    security_group_ids?: string;
    self_service_portal?: string;
    session_timeout_hours?: string;
    split_tunnel?: string;
    tags?: string;
    transport_protocol?: string;
    vpc_id?: string;
    vpn_port?: string;
    arn?: string;
    dns_name?: string;
    id?: string;
    tags_all?: string;
}
export interface AuthenticationOptions {
    active_directory_id?: string;
    root_certificate_chain_arn?: string;
    saml_provider_arn?: string;
    self_service_saml_provider_arn?: string;
    type?: string;
}
export interface ClientConnectOptions {
    enabled?: string;
    lambda_function_arn?: string;
}
export interface ClientLoginBannerOptions {
    banner_text?: string;
    enabled?: string;
}
export interface ConnectionLogOptions {
    cloudwatch_log_group?: string;
    cloudwatch_log_stream?: string;
    enabled?: string;
}
export interface Ec2ClientVPNNetworkAssociation {
    client_vpn_endpoint_id: string;
    subnet_id: string;
    id?: string;
    association_id?: string;
    vpc_id?: string;
}
export interface Ec2ClientVPNRoute {
    client_vpn_endpoint_id: string;
    destination_cidr_block: string;
    target_vpc_subnet_id: string;
    description?: string;
    id?: string;
    origin?: string;
    type?: string;
}
export interface Ec2Fleet {
    launch_template_config: LaunchTemplateConfig;
    target_capacity_specification: TargetCapacitySpecification;
    context?: string;
    excess_capacity_termination_policy?: string;
    on_demand_options?: OnDemandOptions;
    replace_unhealthy_instances?: string;
    spot_options?: Ec2FleetSpotOptions;
    tags?: string;
    terminate_instances?: string;
    terminate_instances_with_expiration?: string;
    type?: string;
    valid_from?: string;
    valid_until?: string;
    launch_template_specification?: string;
    override?: string;
    maintenance_strategies?: MaintenanceStrategies;
    capacity_rebalance?: CapacityRebalance;
    id?: string;
    arn?: string;
    fleet_instance_set?: string;
    instance_ids?: string;
    instance_type?: string;
    lifecycle?: string;
    platform?: string;
    fleet_state?: string;
    fulfilled_capacity?: string;
    fulfilled_on_demand_capacity?: string;
    tags_all?: string;
}
export interface CapacityRebalance {
    replacement_strategy?: string;
}
export interface LaunchTemplateConfig {
    launch_template_specification?: LaunchTemplateSpecificationClass;
    override?: LaunchTemplateConfigOverride;
    instance_requirements?: string;
}
export interface LaunchTemplateConfigOverride {
    availability_zone?: string;
    instance_requirements?: OverrideInstanceRequirements;
    instance_type?: string;
    max_price?: string;
    priority?: string;
    subnet_id?: string;
    weighted_capacity?: string;
}
export interface OverrideInstanceRequirements {
    accelerator_count?: string;
    min?: string;
    max?: string;
    accelerator_manufacturers?: string;
    accelerator_names?: string;
    accelerator_total_memory_mib?: string;
    accelerator_types?: string;
    allowed_instance_types?: string;
    bare_metal?: string;
    baseline_ebs_bandwidth_mbps?: string;
    burstable_performance?: string;
    cpu_manufacturers?: string;
    excluded_instance_types?: string;
    instance_generations?: string;
    local_storage?: string;
    local_storage_types?: string;
    memory_gib_per_vcpu?: string;
    memory_mib?: string;
    network_bandwidth_gbps?: string;
    network_interface_count?: string;
    on_demand_max_price_percentage_over_lowest_price?: string;
    require_hibernate_support?: string;
    spot_max_price_percentage_over_lowest_price?: string;
    total_local_storage_gb?: string;
    vcpu_count?: string;
}
export interface MaintenanceStrategies {
    capacity_rebalance?: string;
}
export interface OnDemandOptions {
    allocation_strategy?: string;
    capacity_reservation_options?: string;
    usage_strategy?: string;
    max_total_price?: string;
    min_target_capacity?: string;
    single_availability_zone?: string;
    single_instance_type?: string;
}
export interface Ec2FleetSpotOptions {
    allocation_strategy?: string;
    instance_interruption_behavior?: string;
    instance_pools_to_use_count?: string;
    maintenance_strategies?: string;
    max_total_price?: string;
    min_target_capacity?: string;
    single_availability_zone?: string;
    single_instance_type?: string;
}
export interface TargetCapacitySpecification {
    default_target_capacity_type?: string;
    on_demand_target_capacity?: string;
    spot_target_capacity?: string;
    target_capacity_unit_type?: string;
    total_target_capacity?: string;
}
export interface ResourceEc2Host {
    availability_zone: string;
    asset_id?: string;
    auto_placement?: string;
    host_recovery?: string;
    instance_family?: string;
    instance_type?: string;
    outpost_arn?: string;
    tags?: string;
    id?: string;
    arn?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface Ec2InstanceConnectEndpoint {
    subnet_id: string;
    preserve_client_ip?: string;
    security_group_ids?: string;
    tags?: string;
    arn?: string;
    availability_zone?: string;
    dns_name?: string;
    fips_dns_name?: string;
    network_interface_ids?: string;
    owner_id?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface Ec2InstanceState {
    instance_id: string;
    state: string;
    force?: string;
    id?: string;
}
export interface Ec2LocalGatewayRoute {
    destination_cidr_block: string;
    local_gateway_route_table_id: string;
    local_gateway_virtual_interface_group_id: string;
    id?: string;
}
export interface Ec2LocalGatewayRouteTableVpcAssociation {
    local_gateway_route_table_id: string;
    vpc_id: string;
    tags?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceEc2ManagedPrefixList {
    address_family: string;
    max_entries: string;
    name: string;
    entry?: Entry;
    tags?: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    tags_all?: string;
    version?: string;
}
export interface Entry {
    cidr: string;
    description?: string;
}
export interface Ec2ManagedPrefixListEntry {
    cidr: string;
    prefix_list_id: string;
    description?: string;
    id?: string;
}
export interface ResourceEc2NetworkInsightsAnalysis {
    network_insights_path_id: string;
    filter_in_arns?: string;
    wait_for_completion?: string;
    tags?: string;
    alternate_path_hints?: string;
    arn?: string;
    explanations?: string;
    forward_path_components?: string;
    id?: string;
    path_found?: string;
    return_path_components?: string;
    start_date?: string;
    status?: string;
    status_message?: string;
    tags_all?: string;
    warning_message?: string;
    component_arn?: string;
    component_id?: string;
}
export interface ResourceEc2NetworkInsightsPath {
    source: string;
    destination: string;
    protocol: string;
    source_ip?: string;
    destination_ip?: string;
    destination_port?: string;
    tags?: string;
    arn?: string;
    destination_arn?: string;
    id?: string;
    source_arn?: string;
    tags_all?: string;
}
export interface Ec2SubnetCIDRReservation {
    cidr_block: string;
    reservation_type: string;
    subnet_id: string;
    description?: string;
    id?: string;
    owner_id?: string;
}
export interface Ec2Tag {
    resource_id: string;
    key: string;
    value: string;
    id?: string;
}
export interface Ec2TrafficMirrorFilter {
    description?: string;
    network_services?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface Ec2TrafficMirrorFilterRule {
    traffic_mirror_filter_id: string;
    destination_cidr_block: string;
    rule_action: string;
    rule_number: string;
    source_cidr_block: string;
    traffic_direction: string;
    description?: string;
    protocol?: string;
    from_port?: string;
    to_port?: string;
    arn?: string;
    id?: string;
}
export interface Ec2TrafficMirrorSession {
    network_interface_id: string;
    traffic_mirror_filter_id: string;
    traffic_mirror_target_id: string;
    session_number: string;
    description?: string;
    packet_length?: string;
    virtual_network_id?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
    owner_id?: string;
}
export interface Ec2TrafficMirrorTarget {
    description?: string;
    network_interface_id?: string;
    network_load_balancer_arn?: string;
    gateway_load_balancer_endpoint_id?: string;
    tags?: string;
    id?: string;
    tags_all?: string;
    arn?: string;
    owner_id?: string;
}
export interface ResourceEc2TransitGateway {
    amazon_side_asn?: string;
    auto_accept_shared_attachments?: string;
    default_route_table_association?: string;
    default_route_table_propagation?: string;
    description?: string;
    dns_support?: string;
    multicast_support?: string;
    tags?: string;
    transit_gateway_cidr_blocks?: string;
    vpn_ecmp_support?: string;
    arn?: string;
    association_default_route_table_id?: string;
    id?: string;
    tags_all?: string;
    owner_id?: string;
    propagation_default_route_table_id?: string;
}
export interface ResourceEc2TransitGatewayConnect {
    transit_gateway_id: string;
    transport_attachment_id: string;
    protocol?: string;
    tags?: string;
    transit_gateway_default_route_table_association?: string;
    transit_gateway_default_route_table_propagation?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceEc2TransitGatewayConnectPeer {
    inside_cidr_blocks: string;
    peer_address: string;
    transit_gateway_attachment_id: string;
    bgp_asn?: string;
    tags?: string;
    transit_gateway_address?: string;
    id?: string;
    arn?: string;
    bgp_peer_address?: string;
    bgp_transit_gateway_addresses?: string;
    tags_all?: string;
}
export interface ResourceEc2TransitGatewayMulticastDomain {
    transit_gateway_id: string;
    auto_accept_shared_associations?: string;
    igmpv2_support?: string;
    static_sources_support?: string;
    tags?: string;
    id?: string;
    arn?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface Ec2TransitGatewayMulticastDomainAssociation {
    subnet_id: string;
    transit_gateway_attachment_id: string;
    transit_gateway_multicast_domain_id: string;
    id?: string;
}
export interface Ec2TransitGatewayMulticastGroup {
    group_ip_address: string;
    network_interface_id: string;
    transit_gateway_multicast_domain_id: string;
    id?: string;
}
export interface ResourceEc2TransitGatewayPeeringAttachment {
    peer_region: string;
    peer_transit_gateway_id: string;
    transit_gateway_id: string;
    peer_account_id?: string;
    tags?: string;
    id?: string;
    tags_all?: string;
}
export interface Ec2TransitGatewayPeeringAttachmentAccepter {
    transit_gateway_attachment_id: string;
    tags?: string;
    id?: string;
    transit_gateway_id?: string;
    peer_transit_gateway_id?: string;
    peer_account_id?: string;
    tags_all?: string;
}
export interface Ec2TransitGatewayPolicyTable {
    transit_gateway_id: string;
    tags?: string;
    arn?: string;
    id?: string;
    state?: string;
    tags_all?: string;
}
export interface Ec2TransitGatewayPolicyTableAssociation {
    transit_gateway_attachment_id: string;
    transit_gateway_policy_table_id: string;
    id?: string;
    resource_id?: string;
    resource_type?: string;
}
export interface Ec2TransitGatewayPrefixListReference {
    prefix_list_id: string;
    transit_gateway_route_table_id: string;
    blackhole?: string;
    transit_gateway_attachment_id?: string;
    id?: string;
}
export interface Ec2TransitGatewayRoute {
    destination_cidr_block: string;
    transit_gateway_attachment_id: string;
    transit_gateway_route_table_id: string;
    blackhole?: string;
    id?: string;
}
export interface ResourceEc2TransitGatewayRouteTable {
    transit_gateway_id: string;
    tags?: string;
    arn?: string;
    default_association_route_table?: string;
    default_propagation_route_table?: string;
    id?: string;
    tags_all?: string;
}
export interface Ec2TransitGatewayRouteTableAssociation {
    transit_gateway_attachment_id: string;
    transit_gateway_route_table_id: string;
    replace_existing_association?: string;
    id?: string;
    resource_id?: string;
    resource_type?: string;
}
export interface Ec2TransitGatewayRouteTablePropagation {
    transit_gateway_attachment_id: string;
    transit_gateway_route_table_id: string;
    id?: string;
    resource_id?: string;
    resource_type?: string;
}
export interface ResourceEc2TransitGatewayVpcAttachment {
    subnet_ids: string;
    transit_gateway_id: string;
    vpc_id: string;
    appliance_mode_support?: string;
    dns_support?: string;
    ipv6_support?: string;
    tags?: string;
    transit_gateway_default_route_table_association?: string;
    transit_gateway_default_route_table_propagation?: string;
    id?: string;
    tags_all?: string;
    vpc_owner_id?: string;
}
export interface Ec2TransitGatewayVpcAttachmentAccepter {
    transit_gateway_attachment_id: string;
    transit_gateway_default_route_table_association?: string;
    transit_gateway_default_route_table_propagation?: string;
    tags?: string;
    id?: string;
    tags_all?: string;
    appliance_mode_support?: string;
    dns_support?: string;
    ipv6_support?: string;
    subnet_ids?: string;
    transit_gateway_id?: string;
    vpc_id?: string;
    vpc_owner_id?: string;
}
export interface EcrPolicy {
    repository: string;
    policy: string;
    registry_id?: string;
}
export interface PurpleEcrPullThroughCacheRule {
    ecr_repository_prefix: string;
    upstream_registry_url: string;
    registry_id?: string;
}
export interface EcrRegistryPolicy {
    policy: string;
    registry_id?: string;
}
export interface EcrRegistryScanningConfiguration {
    registry_id?: string;
}
export interface EcrReplicationConfiguration {
    replication_configuration: EcrReplicationConfigurationReplicationConfiguration;
    registry_id?: string;
}
export interface EcrReplicationConfigurationReplicationConfiguration {
    rule?: ReplicationConfigurationRule;
}
export interface ReplicationConfigurationRule {
    destination: PurpleDestination;
    repository_filter?: RepositoryFilter;
}
export interface PurpleDestination {
    region?: string;
    registry_id?: string;
}
export interface RepositoryFilter {
    filter: string;
    filter_type: string;
}
export interface ResourceEcrRepository {
    name: string;
    scan_on_push: string;
    encryption_configuration?: EcrRepositoryEncryptionConfiguration;
    force_delete?: string;
    image_tag_mutability?: string;
    image_scanning_configuration?: string;
    tags?: string;
    arn?: string;
    registry_id?: string;
    repository_url?: string;
    tags_all?: string;
}
export interface EcrpublicRepository {
    repository_name: string;
    catalog_data?: CatalogData;
    tags?: string;
    arn?: string;
    id?: string;
    registry_id?: string;
    repository_uri?: string;
    tags_all?: string;
}
export interface CatalogData {
    about_text?: string;
    architectures?: string;
    description?: string;
    logo_image_blob?: string;
    operating_systems?: string;
    usage_text?: string;
}
export interface EcrpublicRepositoryPolicy {
    repository_name: string;
    policy: string;
    registry_id?: string;
}
export interface EcsAccountSettingDefault {
    name: string;
    value: string;
    id?: string;
    prinicpal_arn?: string;
}
export interface EcsCapacityProvider {
    auto_scaling_group_provider: AutoScalingGroupProvider;
    name: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface AutoScalingGroupProvider {
    auto_scaling_group_arn?: string;
    managed_scaling?: ManagedScaling;
    managed_termination_protection?: string;
}
export interface ManagedScaling {
    instance_warmup_period?: string;
    maximum_scaling_step_size?: string;
    minimum_scaling_step_size?: string;
    status?: string;
    target_capacity?: string;
}
export interface ResourceEcsCluster {
    configuration?: EcsClusterConfiguration;
    service_connect_defaults?: ServiceConnectDefaults;
    setting?: Setting;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface EcsClusterConfiguration {
    execute_command_configuration?: ExecuteCommandConfiguration;
}
export interface ExecuteCommandConfiguration {
    kms_key_id?: string;
    log_configuration?: ExecuteCommandConfigurationLogConfiguration;
    logging?: string;
}
export interface ExecuteCommandConfigurationLogConfiguration {
    cloud_watch_encryption_enabled?: string;
    cloud_watch_log_group_name?: string;
    s3_bucket_name?: string;
    s3_bucket_encryption_enabled?: string;
    s3_key_prefix?: string;
}
export interface ServiceConnectDefaults {
    namespace: string;
}
export interface EcsClusterCapacityProviders {
    cluster_name: string;
    capacity_provider: string;
    capacity_providers?: string;
    weight?: string;
    base?: string;
    id?: string;
}
export interface ResourceEcsService {
    alarms?: EcsServiceAlarms;
    capacity_provider_strategy?: CloudwatchEventTargetCapacityProviderStrategy;
    cluster?: string;
    deployment_circuit_breaker?: DeploymentCircuitBreaker;
    deployment_controller?: EntityTypes;
    deployment_maximum_percent?: string;
    deployment_minimum_healthy_percent?: string;
    desired_count?: string;
    enable_ecs_managed_tags?: string;
    enable_execute_command?: string;
    force_new_deployment?: string;
    health_check_grace_period_seconds?: string;
    iam_role?: string;
    launch_type?: string;
    load_balancer?: EcsServiceLoadBalancer;
    network_configuration?: EcsTaskExecutionNetworkConfiguration;
    ordered_placement_strategy?: OrderedPlacementStrategy;
    placement_constraints?: PlacementConstraint;
    platform_version?: string;
    propagate_tags?: string;
    scheduling_strategy?: string;
    service_connect_configuration?: ServiceConnectConfiguration;
    service_registries?: ServiceRegistries;
    tags?: string;
    task_definition?: string;
    triggers?: string;
    wait_for_steady_state?: string;
    log_configuration?: EcsServiceLogConfiguration;
    service?: EcsServiceService;
    secret_option?: SecretOption;
    client_alias?: ClientAlias;
    id?: string;
    name?: string;
    tags_all?: string;
}
export interface EcsServiceAlarms {
    alarm_names: string;
    enable: string;
    rollback: string;
}
export interface ClientAlias {
    port: string;
    dns_name?: string;
}
export interface DeploymentCircuitBreaker {
    enable: string;
    rollback: string;
}
export interface EcsServiceLoadBalancer {
    elb_name: string;
    target_group_arn: string;
    container_name: string;
    container_port: string;
}
export interface EcsServiceLogConfiguration {
    log_driver: string;
    options?: string;
    secret_option?: string;
}
export interface SecretOption {
    name: string;
    value_from: string;
}
export interface EcsServiceService {
    port_name: string;
    client_alias?: string;
    discovery_name?: string;
    ingress_port_override?: string;
}
export interface ServiceConnectConfiguration {
    enabled: string;
    log_configuration?: string;
    namespace?: string;
    service?: string;
}
export interface ServiceRegistries {
    registry_arn: string;
    port?: string;
    container_port?: string;
    container_name?: string;
}
export interface ResourceEcsTaskDefinition {
    container_definitions: string;
    family: string;
    cpu?: string;
    execution_role_arn?: string;
    inference_accelerator?: InferenceAccelerator;
    ipc_mode?: string;
    memory?: string;
    network_mode?: string;
    runtime_platform?: RuntimePlatform;
    pid_mode?: string;
    placement_constraints?: PlacementConstraint;
    proxy_configuration?: ProxyConfiguration;
    ephemeral_storage?: EcsTaskDefinitionEphemeralStorage;
    requires_compatibilities?: string;
    skip_destroy?: string;
    tags?: string;
    task_role_arn?: string;
    volume?: Volume;
    arn?: string;
    arn_without_revision?: string;
    revision?: string;
    tags_all?: string;
}
export interface EcsTaskDefinitionEphemeralStorage {
    size_in_gib: string;
}
export interface InferenceAccelerator {
    device_name: string;
    device_type: string;
}
export interface ProxyConfiguration {
    container_name: string;
    properties: string;
    type?: string;
}
export interface RuntimePlatform {
    operating_system_family?: string;
    cpu_architecture?: string;
    access_point_id?: string;
    iam?: string;
}
export interface Volume {
    name: string;
    docker_volume_configuration?: DockerVolumeConfiguration;
    efs_volume_configuration?: EFSVolumeConfiguration;
    fsx_windows_file_server_volume_configuration?: FsxWindowsFileServerVolumeConfiguration;
    host_path?: string;
}
export interface DockerVolumeConfiguration {
    autoprovision?: string;
    driver_opts?: string;
    driver?: string;
    labels?: string;
    scope?: string;
}
export interface EFSVolumeConfiguration {
    file_system_id: string;
    root_directory?: string;
    transit_encryption?: string;
    transit_encryption_port?: string;
}
export interface FsxWindowsFileServerVolumeConfiguration {
    file_system_id: string;
    root_directory: string;
    authorization_config: FsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
}
export interface FsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
    credentials_parameter?: string;
    domain?: string;
}
export interface EcsTaskSet {
    service: string;
    cluster: string;
    task_definition: string;
    capacity_provider_strategy?: string;
    external_id?: string;
    force_delete?: string;
    launch_type?: string;
    load_balancer?: EcsTaskSetLoadBalancer;
    platform_version?: string;
    network_configuration?: EcsTaskExecutionNetworkConfiguration;
    scale?: Scale;
    service_registries?: ServiceRegistries;
    tags?: string;
    wait_until_stable?: string;
    wait_until_stable_timeout?: string;
    id?: string;
    arn?: string;
    stability_status?: string;
    status?: string;
    tags_all?: string;
    task_set_id?: string;
}
export interface EcsTaskSetLoadBalancer {
    container_name: string;
    load_balancer_name?: string;
    target_group_arn?: string;
    container_port?: string;
}
export interface Scale {
    unit?: string;
    value?: string;
}
export interface ResourceEFSAccessPoint {
    file_system_id: string;
    posix_user?: POSIX;
    tags?: string;
    creation_info?: CreationInfo;
    path?: string;
    arn?: string;
    file_system_arn?: string;
    id?: string;
    tags_all?: string;
}
export interface CreationInfo {
    owner_gid: string;
    owner_uid: string;
    permissions: string;
}
export interface POSIX {
    gid: string;
    uid: string;
    secondary_gids?: string;
}
export interface EFSBackupPolicy {
    file_system_id: string;
    status: string;
    id?: string;
}
export interface ResourceEFSFileSystem {
    availability_zone_name?: string;
    creation_token?: string;
    encrypted?: string;
    kms_key_id?: string;
    performance_mode?: string;
    provisioned_throughput_in_mibps?: string;
    tags?: string;
    throughput_mode?: string;
    transition_to_ia?: string;
    transition_to_primary_storage_class?: string;
    arn?: string;
    availability_zone_id?: string;
    id?: string;
    dns_name?: string;
    name?: string;
    number_of_mount_targets?: string;
    owner_id?: string;
    size_in_bytes?: SizeInBytes;
    tags_all?: string;
}
export interface SizeInBytes {
    value?: string;
    value_in_ia?: string;
    value_in_standard?: string;
}
export interface EFSFileSystemPolicy {
    file_system_id: string;
    policy: string;
    bypass_policy_lockout_safety_check?: string;
    id?: string;
}
export interface ResourceEFSMountTarget {
    file_system_id: string;
    subnet_id: string;
    ip_address?: string;
    security_groups?: string;
    id?: string;
    dns_name?: string;
    mount_target_dns_name?: string;
    file_system_arn?: string;
    network_interface_id?: string;
    availability_zone_name?: string;
    availability_zone_id?: string;
    owner_id?: string;
}
export interface EFSReplicationConfiguration {
    source_file_system_id: string;
    availability_zone_name?: string;
    kms_key_id?: string;
    region?: string;
    creation_time?: string;
    original_source_file_system_arn?: string;
    source_file_system_arn?: string;
    source_file_system_region?: string;
}
export interface EgressOnlyInternetGateway {
    vpc_id: string;
    tags?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceEip {
    address?: string;
    associate_with_private_ip?: string;
    customer_owned_ipv4_pool?: string;
    domain?: string;
    instance?: string;
    network_border_group?: string;
    network_interface?: string;
    public_ipv4_pool?: string;
    tags?: string;
    vpc?: string;
    allocation_id?: string;
    association_id?: string;
    carrier_ip?: string;
    customer_owned_ip?: string;
    id?: string;
    private_dns?: string;
    private_ip?: string;
    public_dns?: string;
    public_ip?: string;
    tags_all?: string;
}
export interface EipAssociation {
    allocation_id?: string;
    allow_reassociation?: string;
    instance_id?: string;
    network_interface_id?: string;
    private_ip_address?: string;
    public_ip?: string;
    association_id?: string;
}
export interface ResourceEksAddon {
    addon_name: string;
    cluster_name: string;
    addon_version?: string;
    configuration_values?: string;
    resolve_conflicts_on_create?: string;
    resolve_conflicts_on_update?: string;
    resolve_conflicts?: string;
    tags?: string;
    preserve?: string;
    service_account_role_arn?: string;
    arn?: string;
    id?: string;
    status?: string;
    created_at?: string;
    modified_at?: string;
    tags_all?: string;
}
export interface ResourceEksCluster {
    name: string;
    role_arn: string;
    subnet_ids: string;
    enabled_cluster_log_types?: string;
    encryption_config?: EksClusterEncryptionConfig;
    kubernetes_network_config?: KubernetesNetworkConfig;
    outpost_config?: OutpostConfig;
    tags?: string;
    version?: string;
    endpoint_private_access?: string;
    endpoint_public_access?: string;
    public_access_cidrs?: string;
    security_group_ids?: string;
    arn?: string;
    certificate_authority?: CertificateAuthority;
    cluster_id?: string;
    created_at?: string;
    endpoint?: string;
    id?: string;
    identity?: Identity;
    platform_version?: string;
    status?: string;
    tags_all?: string;
    cluster_security_group_id?: string;
    vpc_id?: string;
}
export interface CertificateAuthority {
    data?: string;
}
export interface EksClusterEncryptionConfig {
    provider: Provider;
    resources: string;
}
export interface Provider {
    key_arn?: string;
}
export interface Identity {
    oidc?: Oidc;
}
export interface Oidc {
    issuer?: string;
}
export interface KubernetesNetworkConfig {
    service_ipv4_cidr?: string;
    ip_family?: string;
}
export interface OutpostConfig {
    control_plane_instance_type: string;
    group_name: string;
    outpost_arns: string;
    control_plane_placement?: string;
}
export interface EksFargateProfile {
    cluster_name: string;
    fargate_profile_name: string;
    pod_execution_role_arn: string;
    subnet_ids: string;
    namespace: string;
    tags?: string;
    labels?: string;
    arn?: string;
    id?: string;
    status?: string;
    tags_all?: string;
}
export interface EksIdentityProviderConfig {
    cluster_name: string;
    client_id: string;
    identity_provider_config_name: string;
    issuer_url: string;
    tags?: string;
    groups_claim?: string;
    groups_prefix?: string;
    required_claims?: string;
    username_claim?: string;
    username_prefix?: string;
    arn?: string;
    id?: string;
    status?: string;
    tags_all?: string;
}
export interface ResourceEksNodeGroup {
    cluster_name: string;
    node_role_arn: string;
    scaling_config: string;
    subnet_ids: string;
    version: string;
    desired_size: string;
    max_size: string;
    min_size: string;
    key: string;
    effect: string;
    ami_type?: string;
    capacity_type?: string;
    disk_size?: string;
    force_update_version?: string;
    instance_types?: string;
    labels?: string;
    launch_template?: string;
    node_group_name?: string;
    node_group_name_prefix?: string;
    release_version?: string;
    remote_access?: string;
    tags?: string;
    update_config?: string;
    id?: string;
    name?: string;
    ec2_ssh_key?: string;
    source_security_group_ids?: string;
    value?: string;
    max_unavailable?: string;
    max_unavailable_percentage?: string;
    arn?: string;
    resources?: string;
    autoscaling_groups?: string;
    remote_access_security_group_id?: string;
    tags_all?: string;
    status?: string;
}
export interface ResourceElasticBeanstalkApplication {
    name: string;
    service_role: string;
    description?: string;
    tags?: string;
    max_count?: string;
    max_age_in_days?: string;
    delete_source_from_s3?: string;
    arn?: string;
    tags_all?: string;
}
export interface ElasticBeanstalkApplicationVersion {
    application: string;
    bucket: string;
    key: string;
    name: string;
    description?: string;
    force_delete?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface ElasticBeanstalkConfigurationTemplate {
    name: string;
    application: string;
    description?: string;
    environment_id?: string;
    setting?: string;
    solution_stack_name?: string;
}
export interface ElasticBeanstalkEnvironment {
    name: string;
    application: string;
    cname_prefix?: string;
    description?: string;
    tier?: string;
    setting?: string;
    solution_stack_name?: string;
    template_name?: string;
    platform_arn?: string;
    wait_for_ready_timeout?: string;
    poll_interval?: string;
    version_label?: string;
    tags?: string;
    id?: string;
    tags_all?: string;
    all_settings?: string;
    cname?: string;
    autoscaling_groups?: string;
    instances?: string;
    launch_configurations?: string;
    load_balancers?: string;
    queues?: string;
    triggers?: string;
    endpoint_url?: string;
}
export interface ResourceElasticacheCluster {
    cluster_id: string;
    node_type: string;
    num_cache_nodes: string;
    parameter_group_name: string;
    engine?: string;
    apply_immediately?: string;
    auto_minor_version_upgrade?: string;
    availability_zone?: string;
    az_mode?: string;
    engine_version?: string;
    final_snapshot_identifier?: string;
    ip_discovery?: string;
    log_delivery_configuration?: LogDeliveryConfiguration;
    maintenance_window?: string;
    network_type?: string;
    notification_topic_arn?: string;
    outpost_mode?: string;
    port?: string;
    preferred_availability_zones?: string;
    preferred_outpost_arn?: string;
    replication_group_id?: string;
    security_group_ids?: string;
    snapshot_arns?: string;
    snapshot_name?: string;
    snapshot_retention_limit?: string;
    snapshot_window?: string;
    subnet_group_name?: string;
    tags?: string;
    transit_encryption_enabled?: string;
    arn?: string;
    engine_version_actual?: string;
    cache_nodes?: string;
    cluster_address?: string;
    configuration_endpoint?: string;
    tags_all?: string;
}
export interface LogDeliveryConfiguration {
    destination?: string;
    destination_type?: string;
    log_format?: string;
    log_type?: string;
}
export interface ElasticacheGlobalReplicationGroup {
    global_replication_group_id_suffix: string;
    primary_replication_group_id: string;
    automatic_failover_enabled?: string;
    cache_node_type?: string;
    engine_version?: string;
    global_replication_group_description?: string;
    num_node_groups?: string;
    parameter_group_name?: string;
    id?: string;
    arn?: string;
    engine_version_actual?: string;
    at_rest_encryption_enabled?: string;
    auth_token_enabled?: string;
    cluster_enabled?: string;
    engine?: string;
    global_replication_group_id?: string;
    global_node_groups?: string;
    global_node_group_id?: string;
    slots?: string;
    transit_encryption_enabled?: string;
}
export interface ElasticacheParameterGroupClass {
    name: string;
    family: string;
    value: string;
    description?: string;
    parameter?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceElasticacheReplicationGroup {
    description: string;
    replication_group_id: string;
    apply_immediately?: string;
    at_rest_encryption_enabled?: string;
    auth_token?: string;
    auto_minor_version_upgrade?: string;
    automatic_failover_enabled?: string;
    data_tiering_enabled?: string;
    engine?: string;
    engine_version?: string;
    final_snapshot_identifier?: string;
    global_replication_group_id?: string;
    kms_key_id?: string;
    log_delivery_configuration?: LogDeliveryConfiguration;
    maintenance_window?: string;
    multi_az_enabled?: string;
    node_type?: string;
    notification_topic_arn?: string;
    num_cache_clusters?: string;
    num_node_groups?: string;
    parameter_group_name?: string;
    port?: string;
    preferred_cache_cluster_azs?: string;
    replicas_per_node_group?: string;
    security_group_ids?: string;
    security_group_names?: string;
    snapshot_arns?: string;
    snapshot_name?: string;
    snapshot_retention_limit?: string;
    snapshot_window?: string;
    subnet_group_name?: string;
    tags?: string;
    transit_encryption_enabled?: string;
    user_group_ids?: string;
    arn?: string;
    engine_version_actual?: string;
    cluster_enabled?: string;
    configuration_endpoint_address?: string;
    id?: string;
    member_clusters?: string;
    primary_endpoint_address?: string;
    reader_endpoint_address?: string;
    tags_all?: string;
}
export interface ElasticacheSubnetGroup {
    name: string;
    subnet_ids: string;
    description?: string;
    tags?: string;
    tags_all?: string;
}
export interface ResourceElasticacheUser {
    access_string: string;
    engine: string;
    user_id: string;
    user_name: string;
    type: string;
    no_password_required?: string;
    passwords?: string;
    tags?: string;
    arn?: string;
}
export interface ElasticacheUserGroup {
    engine: string;
    user_group_id: string;
    user_ids?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ElasticacheUserGroupAssociation {
    user_group_id: string;
    user_id: string;
}
export interface ResourceElasticsearchDomain {
    domain_name: string;
    user_pool_id: string;
    access_policies?: string;
    advanced_options?: string;
    advanced_security_options?: ElasticsearchDomainAdvancedSecurityOptions;
    auto_tune_options?: AutoTuneOptions;
    cluster_config?: ElasticsearchDomainClusterConfig;
    cognito_options?: CognitoOptions;
    domain_endpoint_options?: DomainEndpointOptions;
    ebs_options?: EbsOptions;
    elasticsearch_version?: string;
    encrypt_at_rest?: EncryptAtREST;
    log_publishing_options?: LogPublishingOptions;
    node_to_node_encryption?: SoftwareTokenMfaConfiguration;
    snapshot_options?: SnapshotOptions;
    tags?: string;
    vpc_options?: VpcOptions;
    arn?: string;
    domain_id?: string;
    endpoint?: string;
    kibana_endpoint?: string;
    tags_all?: string;
}
export interface ElasticsearchDomainAdvancedSecurityOptions {
    enabled: string;
    internal_user_database_enabled?: string;
    master_user_options?: MasterUserOptions;
}
export interface MasterUserOptions {
    master_user_arn?: string;
    master_user_name?: string;
    master_user_password?: string;
}
export interface AutoTuneOptions {
    desired_state: string;
    maintenance_schedule: MaintenanceSchedule;
    rollback_on_disable?: string;
}
export interface MaintenanceSchedule {
    start_at?: string;
    duration?: Duration;
    cron_expression_for_recurrence?: string;
}
export interface Duration {
    value: string;
    unit: string;
}
export interface ElasticsearchDomainClusterConfig {
    cold_storage_options?: EnclaveOptionsClass;
    dedicated_master_count?: string;
    dedicated_master_enabled?: string;
    dedicated_master_type?: string;
    instance_count?: string;
    instance_type?: string;
    warm_count?: string;
    warm_enabled?: string;
    warm_type?: string;
    zone_awareness_config?: ZoneAwarenessConfig;
    zone_awareness_enabled?: string;
}
export interface ZoneAwarenessConfig {
    availability_zone_count?: string;
}
export interface CognitoOptions {
    identity_pool_id: string;
    role_arn: string;
    user_pool_id: string;
    enabled?: string;
}
export interface DomainEndpointOptions {
    custom_endpoint_certificate_arn?: string;
    custom_endpoint_enabled?: string;
    custom_endpoint?: string;
    enforce_https?: string;
    tls_security_policy?: string;
}
export interface EbsOptions {
    ebs_enabled: string;
    throughput: string;
    volume_size: string;
    iops?: string;
    volume_type?: string;
}
export interface EncryptAtREST {
    enabled: string;
    kms_key_id?: string;
}
export interface LogPublishingOptions {
    cloudwatch_log_group_arn: string;
    log_type: string;
    enabled?: string;
}
export interface SnapshotOptions {
    automated_snapshot_start_hour: string;
}
export interface VpcOptions {
    subnet_ids: string;
    security_group_ids?: string;
}
export interface SearchDomainPolicy {
    domain_name: string;
    access_policies?: string;
}
export interface SearchDomainSamlOptions {
    domain_name: string;
    saml_options?: ElasticsearchDomainSamlOptionsSamlOptions;
    idp?: string;
    id?: string;
}
export interface ElasticsearchDomainSamlOptionsSamlOptions {
    enabled: string;
    idp?: Idp;
    master_backend_role?: string;
    master_user_name?: string;
    roles_key?: string;
    session_timeout_minutes?: string;
    subject_key?: string;
}
export interface Idp {
    entity_id: string;
    metadata_content: string;
}
export interface ElastictranscoderPipeline {
    input_bucket: string;
    role: string;
    aws_kms_key_arn?: string;
    name?: string;
    output_bucket?: string;
    bucket?: string;
    storage_class?: string;
    access?: string;
    grantee?: string;
    grantee_type?: string;
    completed?: string;
    error?: string;
    progressing?: string;
    warning?: string;
    id?: string;
    arn?: string;
}
export interface ElastictranscoderPreset {
    container: string;
    description?: string;
    name?: string;
    video_codec_options?: string;
    audio_packing_mode?: string;
    bit_rate?: string;
    channels?: string;
    codec?: string;
    sample_rate?: string;
    bit_depth?: string;
    bit_order?: string;
    profile?: string;
    signed?: string;
    aspect_ratio?: string;
    format?: string;
    interval?: string;
    max_height?: string;
    max_width?: string;
    padding_policy?: string;
    resolution?: string;
    sizing_policy?: string;
    display_aspect_ratio?: string;
    fixed_gop?: string;
    frame_rate?: string;
    keyframes_max_dist?: string;
    max_frame_rate?: string;
    horizontal_align?: string;
    horizontal_offset?: string;
    id?: string;
    opacity?: string;
    target?: string;
    vertical_align?: string;
    vertical_offset?: string;
    level?: string;
    maxreferenceframes?: string;
    maxbitrate?: string;
    buffersize?: string;
    interlacedmode?: string;
    colorspaceconversion?: string;
    chromasubsampling?: string;
    loopcount?: string;
    arn?: string;
}
export interface Elb {
    availability_zones: string;
    subnets: string;
    bucket: string;
    instance_port: string;
    instance_protocol: string;
    lb_port: string;
    lb_protocol: string;
    healthy_threshold: string;
    unhealthy_threshold: string;
    target: string;
    interval: string;
    timeout: string;
    name?: string;
    name_prefix?: string;
    security_groups?: string;
    instances?: string;
    internal?: string;
    cross_zone_load_balancing?: string;
    idle_timeout?: string;
    connection_draining?: string;
    connection_draining_timeout?: string;
    desync_mitigation_mode?: string;
    tags?: string;
    bucket_prefix?: string;
    enabled?: string;
    ssl_certificate_id?: string;
    id?: string;
    arn?: string;
    dns_name?: string;
    source_security_group?: string;
    source_security_group_id?: string;
    zone_id?: string;
    tags_all?: string;
}
export interface ElbAttachment {
    elb: string;
    instance: string;
}
export interface EmrBlockPublicAccessConfiguration {
    block_public_security_group_rules: string;
    permitted_public_security_group_rule_range?: PermittedPublicSecurityGroupRuleRange;
}
export interface PermittedPublicSecurityGroupRuleRange {
    min_range: string;
    max_range: string;
}
export interface EmrCluster {
    release_label: string;
    service_role: string;
    hadoop_jar_step: string;
    additional_info?: string;
    applications?: string;
    autoscaling_role?: string;
    auto_termination_policy?: AutoTerminationPolicy;
    bootstrap_action?: string;
    configurations?: string;
    configurations_json?: string;
    core_instance_fleet?: CoreInstanceFleet;
    core_instance_group?: CoreInstanceGroup;
    custom_ami_id?: string;
    ebs_root_volume_size?: string;
    ec2_attributes?: string;
    keep_job_flow_alive_when_no_steps?: string;
    kerberos_attributes?: KerberosAttributes;
    list_steps_states?: string;
    log_encryption_kms_key_id?: string;
    log_uri?: string;
    master_instance_fleet?: MasterInstanceFleet;
    master_instance_group?: MasterInstanceGroup;
    placement_group_config?: PlacementGroupConfig;
    scale_down_behavior?: string;
    security_configuration?: string;
    step?: Step;
    step_concurrency_level?: string;
    tags?: string;
    termination_protection?: string;
    visible_to_all_users?: string;
    instance_type_configs?: string;
    launch_specifications?: string;
    id?: string;
    master_public_dns?: string;
    name?: string;
    tags_all?: string;
}
export interface AutoTerminationPolicy {
    idle_timeout?: string;
}
export interface CoreInstanceFleet {
    instance_type_configs?: InstanceTypeConfigs;
    launch_specifications?: LaunchSpecifications;
    name?: string;
    target_on_demand_capacity?: string;
    target_spot_capacity?: string;
    on_demand_specification?: string;
    spot_specification?: string;
}
export interface InstanceTypeConfigs {
    instance_type: string;
    bid_price?: string;
    bid_price_as_percentage_of_on_demand_price?: string;
    configurations?: string;
    weighted_capacity?: string;
}
export interface LaunchSpecifications {
    on_demand_specification?: OnDemandSpecification;
    spot_specification?: SpotSpecification;
}
export interface OnDemandSpecification {
    allocation_strategy: string;
}
export interface SpotSpecification {
    allocation_strategy: string;
    timeout_action: string;
    timeout_duration_minutes: string;
    block_duration_minutes?: string;
}
export interface CoreInstanceGroup {
    instance_type: string;
    autoscaling_policy?: string;
    bid_price?: string;
    ebs_config?: EbsConfig;
    instance_count?: string;
    name?: string;
}
export interface EbsConfig {
    size: string;
    type: string;
    iops?: string;
    throughput?: string;
    volumes_per_instance?: string;
}
export interface KerberosAttributes {
    kdc_admin_password: string;
    realm: string;
    ad_domain_join_password?: string;
    ad_domain_join_user?: string;
    cross_realm_trust_principal_password?: string;
}
export interface MasterInstanceFleet {
    name?: string;
    target_on_demand_capacity?: string;
    target_spot_capacity?: string;
}
export interface MasterInstanceGroup {
    instance_type: string;
    bid_price?: string;
    instance_count?: string;
    name?: string;
}
export interface PlacementGroupConfig {
    instance_role: string;
    placement_strategy?: string;
}
export interface Step {
    action_on_failure: string;
    hadoop_jar_step: HadoopJarStep;
    name: string;
}
export interface HadoopJarStep {
    args?: string;
    jar?: string;
    main_class?: string;
    properties?: string;
}
export interface EmrInstanceFleet {
    cluster_id: string;
    instance_type_configs?: string;
    launch_specifications?: string;
    target_on_demand_capacity?: string;
    target_spot_capacity?: string;
    name?: string;
    id?: string;
    provisioned_on_demand_capacity?: string;
    provisioned_spot_capacity?: string;
    status?: string;
}
export interface EmrInstanceGroup {
    name: string;
    cluster_id: string;
    instance_type: string;
    instance_count?: string;
    bid_price?: string;
    ebs_optimized?: string;
    ebs_config?: string;
    autoscaling_policy?: string;
    configurations_json?: string;
    iops?: string;
    size?: string;
    type?: string;
    volumes_per_instance?: string;
    id?: string;
    running_instance_count?: string;
    status?: string;
}
export interface EmrManagedScalingPolicy {
    cluster_id: string;
    compute_limits: ComputeLimits;
}
export interface ComputeLimits {
    unit_type?: string;
    minimum_capacity_units?: string;
    maximum_capacity_units?: string;
    maximum_ondemand_capacity_units?: string;
    maximum_core_capacity_units?: string;
}
export interface EmrSecurityConfiguration {
    configuration: string;
    name?: string;
    name_prefix?: string;
    id?: string;
    creation_date?: string;
}
export interface EmrStudio {
    default_s3_location: string;
    name: string;
    engine_security_group_id: string;
    service_role: string;
    subnet_ids: string;
    vpc_id: string;
    workspace_security_group_id: string;
    description?: string;
    idp_auth_url?: string;
    idp_relay_state_parameter_name?: string;
    tags?: string;
    user_role?: string;
    url?: string;
}
export interface EmrStudioSessionMapping {
    identity_type: string;
    session_policy_arn: string;
    studio_id: string;
    identity_name?: string;
}
export interface EmrcontainersJobTemplate {
    job_template_data: string;
    name: string;
    execution_role_arn: string;
    job_driver: string;
    release_label: string;
    classification: string;
    log_group_name: string;
    entry_point: string;
    kms_key_arn?: string;
    tags?: string;
    configuration_overrides?: string;
    job_tags?: string;
    application_configuration?: string;
    monitoring_configuration?: string;
    configurations?: string;
    properties?: string;
    cloud_watch_monitoring_configuration?: string;
    persistent_app_ui?: string;
    s3_monitoring_configuration?: string;
    log_stream_name_prefix?: string;
    log_uri?: string;
    spark_sql_job_driver?: string;
    spark_submit_job_driver?: string;
    spark_sql_parameters?: string;
    entry_point_arguments?: string;
    spark_submit_parameters?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceEmrcontainersVirtualCluster {
    container_provider: string;
    name: string;
    tags?: string;
    id?: string;
    info?: string;
    eks_info?: string;
    namespace?: string;
    type?: string;
    arn?: string;
    tags_all?: string;
}
export interface EmrserverlessApplication {
    name: string;
    release_label: string;
    type: string;
    initial_capacity_type: string;
    cpu: string;
    memory: string;
    image_uri: string;
    worker_count: string;
    architecture?: string;
    auto_start_configuration?: string;
    auto_stop_configuration?: string;
    image_configuration?: string;
    initial_capacity?: string;
    maximum_capacity?: string;
    network_configuration?: string;
    tags?: string;
    enabled?: string;
    idle_timeout_minutes?: string;
    initial_capacity_config?: string;
    disk?: string;
    security_group_ids?: string;
    subnet_ids?: string;
    worker_configuration?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface EvidentlyFeature {
    project: string;
    variations: Variations;
    default_variation?: string;
    description?: string;
    entity_overrides?: string;
    evaluation_strategy?: string;
    tags?: string;
    arn?: string;
    created_time?: string;
    evaluation_rules?: EvaluationRules;
    id?: string;
    last_updated_time?: string;
    status?: string;
    tags_all?: string;
    value_type?: string;
}
export interface EvaluationRules {
    name?: string;
    type?: string;
}
export interface Variations {
    name?: string;
    value?: Value;
}
export interface Value {
    bool_value?: string;
    double_value?: string;
    long_value?: string;
    string_value?: string;
}
export interface EvidentlyLaunch {
    groups: Groups;
    project: string;
    metric_monitors?: MetricMonitors;
    randomization_salt?: string;
    scheduled_splits_config?: ScheduledSplitsConfig;
    tags?: string;
    arn?: string;
    created_time?: string;
    execution?: Execution;
    id?: string;
    last_updated_time?: string;
    status?: string;
    status_reason?: string;
    tags_all?: string;
    type?: string;
    started_time?: string;
}
export interface Execution {
    ended_time?: string;
    started_time?: string;
}
export interface Groups {
    description?: string;
    feature?: string;
    name?: string;
    variation?: string;
}
export interface MetricMonitors {
    metric_definition: MetricDefinition;
}
export interface MetricDefinition {
    entity_id_key?: string;
    event_pattern?: string;
    name?: string;
    unit_label?: string;
    value_key?: string;
}
export interface ScheduledSplitsConfig {
    steps: Steps;
}
export interface Steps {
    group_weights?: string;
    segment_overrides?: SegmentOverrides;
    start_time?: string;
}
export interface SegmentOverrides {
    evaluation_order: string;
    segment: string;
    weights: string;
}
export interface EvidentlyProject {
    name: string;
    data_delivery?: string;
    description?: string;
    tags?: string;
    cloudwatch_logs?: string;
    s3_destination?: string;
    log_group?: string;
    bucket?: string;
    prefix?: string;
    active_experiment_count?: string;
    active_launch_count?: string;
    arn?: string;
    created_time?: string;
    experiment_count?: string;
    feature_count?: string;
    id?: string;
    last_updated_time?: string;
    launch_count?: string;
    status?: string;
    tags_all?: string;
}
export interface EvidentlySegment {
    name: string;
    pattern: string;
    description?: string;
    tags?: string;
    arn?: string;
    created_time?: string;
    experiment_count?: string;
    id?: string;
    last_updated_time?: string;
    launch_count?: string;
    tags_all?: string;
}
export interface FinspaceKxCluster {
    az_mode: string;
    capacity_configuration: CapacityConfiguration;
    environment_id: string;
    name: string;
    release_label: string;
    vpc_configuration: VpcConfiguration;
    auto_scaling_configuration?: AutoScalingConfiguration;
    availability_zone_id?: string;
    cache_storage_configurations?: string;
    code?: Code;
    command_line_arguments?: string;
    database?: FinspaceKxClusterDatabase;
    description?: string;
    execution_role?: string;
    initialization_script?: string;
    savedown_storage_configuration?: SavedownStorageConfiguration;
    tags?: string;
    s3_object_version?: string;
    cache_configurations?: string;
    arn?: string;
    created_timestamp?: string;
    id?: string;
    last_modified_timestamp?: string;
    tags_all?: string;
}
export interface AutoScalingConfiguration {
    auto_scaling_metric: string;
    min_node_count: string;
    max_node_count: string;
    metric_target: string;
    scale_in_cooldown_seconds: string;
    scale_out_cooldown_seconds: string;
}
export interface CapacityConfiguration {
    node_type?: string;
    node_count?: string;
}
export interface Code {
    s3_bucket: string;
    s3_key: string;
    s3_object_version?: string;
}
export interface FinspaceKxClusterDatabase {
    database_name: string;
    cache_configurations?: CacheConfigurations;
    changeset_id?: string;
    db_paths?: string;
}
export interface CacheConfigurations {
    cache_type: string;
    db_paths?: string;
}
export interface SavedownStorageConfiguration {
    type: string;
    size: string;
}
export interface VpcConfiguration {
    vpc_id?: string;
    security_group_ids?: string;
    ip_address_type?: string;
}
export interface FinspaceKxDatabase {
    environment_id: string;
    name: string;
    description?: string;
    tags?: string;
    arn?: string;
    created_timestamp?: string;
    id?: string;
    last_modified_timestamp?: string;
    tags_all?: string;
}
export interface FinspaceKxEnvironment {
    name: string;
    kms_key_id: string;
    custom_dns_server_name: string;
    to: string;
    custom_dns_configuration?: CustomDNSConfiguration;
    description?: string;
    tags?: string;
    transit_gateway_configuration?: TransitGatewayConfiguration;
    attachment_network_acl_configuration?: AttachmentNetworkACLConfiguration;
    icmp_type_code?: ICMPTypeCode;
    port_range?: PortRange;
    arn?: string;
    availability_zones?: string;
    created_timestamp?: string;
    id?: string;
    infrastructure_account_id?: string;
    last_modified_timestamp?: string;
    status?: string;
    tags_all?: string;
}
export interface AttachmentNetworkACLConfiguration {
    cidr_block: string;
    protocol: string;
    rule_action: string;
    rule_number: string;
    icmp_type_code?: string;
    port_range?: string;
}
export interface CustomDNSConfiguration {
    custom_dns_server_ip: string;
    custom_dns_server_name: string;
}
export interface ICMPTypeCode {
    code: string;
    type: string;
}
export interface PortRange {
    from: string;
    to: string;
}
export interface TransitGatewayConfiguration {
    routable_cidr_space: string;
    transit_gateway_id: string;
    attachment_network_acl_configuration?: string;
}
export interface FinspaceKxUser {
    name: string;
    environment_id: string;
    iam_role: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface FisExperimentTemplate {
    action: FisExperimentTemplateAction;
    description: string;
    role_arn: string;
    stop_condition: StopCondition;
    name: string;
    key: string;
    value: string;
    selection_mode: string;
    path: string;
    values: string;
    tags?: string;
    log_configuration?: FisExperimentTemplateLogConfiguration;
    parameter?: string;
    filter?: string;
    resource_arns?: string;
    resource_tag?: string;
    parameters?: string;
    cloudwatch_logs_configuration?: string;
    s3_configuration?: string;
    prefix?: string;
    id?: string;
}
export interface FisExperimentTemplateAction {
    action_id?: string;
    name?: string;
    description?: string;
    parameter?: ParameterClass;
    start_after?: string;
    target?: ParameterClass;
}
export interface FisExperimentTemplateLogConfiguration {
    log_schema_version: string;
    cloudwatch_logs_configuration?: Configuration;
    s3_configuration?: LogConfigurationS3Configuration;
    prefix?: string;
}
export interface Configuration {
    log_group_arn: string;
}
export interface LogConfigurationS3Configuration {
    bucket_name: string;
    prefix?: string;
}
export interface StopCondition {
    source?: string;
    value?: string;
}
export interface FlowLog {
    traffic_type: string;
    deliver_cross_account_role?: string;
    eni_id?: string;
    iam_role_arn?: string;
    log_destination_type?: string;
    log_destination?: string;
    log_group_name?: string;
    subnet_id?: string;
    transit_gateway_id?: string;
    transit_gateway_attachment_id?: string;
    vpc_id?: string;
    log_format?: string;
    max_aggregation_interval?: string;
    destination_options?: DestinationOptions;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DestinationOptions {
    file_format?: string;
    hive_compatible_partitions?: string;
    per_hour_partition?: string;
}
export interface FmsAdminAccount {
    account_id?: string;
    id?: string;
}
export interface FmsPolicy {
    name: string;
    exclude_resource_tags: string;
    remediation_enabled: string;
    delete_all_policy_resources?: string;
    delete_unused_fm_managed_resources?: string;
    description?: string;
    exclude_map?: string;
    include_map?: string;
    resource_tags?: string;
    resource_type?: string;
    resource_type_list?: string;
    tags?: string;
    id?: string;
    policy_update_token?: string;
    tags_all?: string;
}
export interface FsxBackup {
    file_system_id?: string;
    tags?: string;
    volume_id?: string;
    arn?: string;
    id?: string;
    kms_key_id?: string;
    owner_id?: string;
    tags_all?: string;
    type?: string;
}
export interface FsxDataRepositoryAssociation {
    data_repository_path: string;
    file_system_id: string;
    file_system_path: string;
    batch_import_meta_data_on_create?: string;
    imported_file_chunk_size?: string;
    delete_data_in_filesystem?: string;
    tags?: string;
    auto_export_policy?: string;
    auto_import_policy?: string;
    events?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface FsxFileCache {
    file_cache_path: string;
    version: string;
    deployment_type: string;
    per_unit_storage_throughput: string;
    storage_capacity: string;
    file_cache_type?: string;
    file_cache_type_version?: string;
    subnet_ids?: string;
    copy_tags_to_data_repository_associations?: string;
    kms_key_id?: string;
    security_group_ids?: string;
    tags?: string;
    data_repository_path?: string;
    data_repository_subdirectories?: string;
    dns_ips?: string;
    weekly_maintenance_start_time?: string;
    arn?: string;
    data_repository_association_ids?: string;
    dns_name?: string;
    file_cache_id?: string;
    id?: string;
    network_interface_ids?: string;
    vpc_id?: string;
}
export interface FsxLustreFileSystem {
    subnet_ids: string;
    storage_capacity?: string;
    backup_id?: string;
    export_path?: string;
    import_path?: string;
    imported_file_chunk_size?: string;
    security_group_ids?: string;
    tags?: string;
    weekly_maintenance_start_time?: string;
    deployment_type?: string;
    kms_key_id?: string;
    per_unit_storage_throughput?: string;
    automatic_backup_retention_days?: string;
    storage_type?: string;
    drive_cache_type?: string;
    daily_automatic_backup_start_time?: string;
    auto_import_policy?: string;
    copy_tags_to_backups?: string;
    data_compression_type?: string;
    file_system_type_version?: string;
    log_configuration?: FsxLustreFileSystemLogConfiguration;
    root_squash_configuration?: RootSquashConfiguration;
    arn?: string;
    dns_name?: string;
    id?: string;
    network_interface_ids?: string;
    mount_name?: string;
    owner_id?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface FsxLustreFileSystemLogConfiguration {
    destination?: string;
    level?: string;
}
export interface RootSquashConfiguration {
    no_squash_nids?: string;
    root_squash?: string;
}
export interface ResourceFsxOntapFileSystem {
    subnet_ids: string;
    preferred_subnet_id: string;
    throughput_capacity: string;
    storage_capacity?: string;
    security_group_ids?: string;
    weekly_maintenance_start_time?: string;
    deployment_type?: string;
    kms_key_id?: string;
    automatic_backup_retention_days?: string;
    daily_automatic_backup_start_time?: string;
    disk_iops_configuration?: DiskIopsConfiguration;
    endpoint_ip_address_range?: string;
    storage_type?: string;
    fsx_admin_password?: string;
    route_table_ids?: string;
    tags?: string;
    arn?: string;
    endpoints?: FsxOntapFileSystemEndpoints;
    id?: string;
    network_interface_ids?: string;
    owner_id?: string;
    tags_all?: string;
    vpc_id?: string;
    ip_addresses?: string;
}
export interface DiskIopsConfiguration {
    iops?: string;
    mode?: string;
}
export interface FsxOntapFileSystemEndpoints {
    intercluster?: string;
    management?: string;
    dns_name?: string;
    ip_addresses?: string;
}
export interface ResourceFsxOntapStorageVirtualMachine {
    file_system_id: string;
    name: string;
    active_directory_configuration?: ActiveDirectoryConfiguration;
    root_volume_security_style?: string;
    tags?: string;
    self_managed_active_directory?: SelfManagedActiveDirectory;
    arn?: string;
    endpoints?: FsxOntapStorageVirtualMachineEndpoints;
    id?: string;
    subtype?: string;
    tags_all?: string;
    uuid?: string;
}
export interface ActiveDirectoryConfiguration {
    netbios_name: string;
    self_managed_active_directory?: string;
}
export interface FsxOntapStorageVirtualMachineEndpoints {
    iscsi?: string;
    management?: string;
    nfs?: string;
    smb?: string;
    dns_name?: string;
    ip_addresses?: string;
}
export interface SelfManagedActiveDirectory {
    dns_ips: string;
    domain_name: string;
    password: string;
    username: string;
    file_system_administrators_group?: string;
    organizational_unit_distinguished_name?: string;
}
export interface FsxOntapVolume {
    size_in_megabytes: string;
    storage_virtual_machine_id: string;
    default_retention: string;
    maximum_retention: string;
    minimum_retention: string;
    bypass_snaplock_enterprise_retention?: string;
    copy_tags_to_backups?: string;
    junction_path?: string;
    ontap_volume_type?: string;
    security_style?: string;
    skip_final_backup?: string;
    snaplock_configuration?: SnaplockConfiguration;
    snapshot_policy?: string;
    storage_efficiency_enabled?: string;
    tags?: string;
    tiering_policy?: TieringPolicy;
    retention_period?: Period;
    arn?: string;
    id?: string;
    file_system_id?: string;
    flexcache_endpoint_type?: string;
    tags_all?: string;
    uuid?: string;
    volume_type?: string;
}
export interface Period {
    type: string;
    value?: string;
}
export interface SnaplockConfiguration {
    snaplock_type: string;
    audit_log_volume?: string;
    autocommit_period?: Period;
    privileged_delete?: string;
    retention_period?: string;
    volume_append_mode_enabled?: string;
}
export interface TieringPolicy {
    name: string;
    cooling_period?: string;
}
export interface FsxOpenzfsFileSystem {
    deployment_type: string;
    storage_capacity: string;
    subnet_ids: string;
    throughput_capacity: string;
    client_configurations: ClientConfigurations;
    automatic_backup_retention_days?: string;
    backup_id?: string;
    copy_tags_to_backups?: string;
    copy_tags_to_volumes?: string;
    daily_automatic_backup_start_time?: string;
    disk_iops_configuration?: DiskIopsConfiguration;
    endpoint_ip_address_range?: string;
    kms_key_id?: string;
    preferred_subnet_id?: string;
    root_volume_configuration?: RootVolumeConfiguration;
    route_table_ids?: string;
    security_group_ids?: string;
    storage_type?: string;
    tags?: string;
    weekly_maintenance_start_time?: string;
    arn?: string;
    dns_name?: string;
    id?: string;
    network_interface_ids?: string;
    root_volume_id?: string;
    owner_id?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface ClientConfigurations {
    clients?: string;
    options?: string;
}
export interface RootVolumeConfiguration {
    copy_tags_to_snapshots?: string;
    data_compression_type?: string;
    nfs_exports?: NFSExports;
    read_only?: string;
    record_size_kib?: string;
    user_and_group_quotas?: UserAndGroupQuotas;
}
export interface NFSExports {
    client_configurations: string;
}
export interface UserAndGroupQuotas {
    id: string;
    storage_capacity_quota_gib: string;
    type: string;
}
export interface ResourceFsxOpenzfsSnapshot {
    name: string;
    tags?: string;
    volume_id?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface FsxOpenzfsVolume {
    name: string;
    parent_volume_id: string;
    client_configurations: ClientConfigurations;
    origin_snapshot?: string;
    copy_tags_to_snapshots?: string;
    data_compression_type?: string;
    delete_volume_options?: string;
    nfs_exports?: NFSExports;
    read_only?: string;
    record_size_kib?: string;
    storage_capacity_quota_gib?: string;
    storage_capacity_reservation_gib?: string;
    user_and_group_quotas?: UserAndGroupQuotas;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceFsxWindowsFileSystem {
    subnet_ids: string;
    throughput_capacity: string;
    dns_ips: string;
    domain_name: string;
    password: string;
    username: string;
    active_directory_id?: string;
    aliases?: string;
    audit_log_configuration?: AuditLogConfiguration;
    automatic_backup_retention_days?: string;
    backup_id?: string;
    copy_tags_to_backups?: string;
    daily_automatic_backup_start_time?: string;
    deployment_type?: string;
    disk_iops_configuration?: DiskIopsConfiguration;
    kms_key_id?: string;
    preferred_subnet_id?: string;
    security_group_ids?: string;
    skip_final_backup?: string;
    tags?: string;
    storage_capacity?: string;
    storage_type?: string;
    weekly_maintenance_start_time?: string;
    file_system_administrators_group?: string;
    organizational_unit_distinguished_name?: string;
    arn?: string;
    dns_name?: string;
    id?: string;
    network_interface_ids?: string;
    owner_id?: string;
    preferred_file_server_ip?: string;
    remote_administration_endpoint?: string;
    tags_all?: string;
    vpc_id?: string;
}
export interface AuditLogConfiguration {
    audit_log_destination?: string;
    file_access_audit_log_level?: string;
    file_share_access_audit_log_level?: string;
}
export interface GameliftAlias {
    name: string;
    routing_strategy: string;
    type: string;
    description?: string;
    tags?: string;
    fleet_id?: string;
    message?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface GameliftBuild {
    name: string;
    operating_system: string;
    storage_location: string;
    bucket: string;
    key: string;
    role_arn: string;
    version?: string;
    tags?: string;
    object_version?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface GameliftFleet {
    ec2_instance_type: string;
    name: string;
    from_port: string;
    ip_range: string;
    protocol: string;
    to_port: string;
    concurrent_executions: string;
    launch_path: string;
    build_id?: string;
    certificate_configuration?: string;
    description?: string;
    ec2_inbound_permission?: string;
    fleet_type?: string;
    instance_role_arn?: string;
    metric_groups?: string;
    new_game_session_protection_policy?: string;
    resource_creation_limit_policy?: string;
    runtime_configuration?: string;
    script_id?: string;
    tags?: string;
    certificate_type?: string;
    new_game_sessions_per_creator?: string;
    policy_period_in_minutes?: string;
    game_session_activation_timeout_seconds?: string;
    max_concurrent_game_session_activations?: string;
    server_process?: string;
    parameters?: string;
    id?: string;
    arn?: string;
    build_arn?: string;
    operating_system?: string;
    script_arn?: string;
    tags_all?: string;
}
export interface GameliftGameServerGroup {
    game_server_group_name: string;
    max_size: string;
    min_size: string;
    role_arn: string;
    target_value: string;
    instance_type: string;
    balancing_strategy?: string;
    game_server_protection_policy?: string;
    tags?: string;
    vpc_subnets?: string;
    estimated_instance_warmup?: string;
    weighted_capacity?: string;
    id?: string;
    name?: string;
    version?: string;
    arn?: string;
    auto_scaling_group_arn?: string;
}
export interface GameliftGameSessionQueue {
    name: string;
    timeout_in_seconds: string;
    maximum_individual_player_latency_milliseconds: string;
    custom_event_data?: string;
    destinations?: string;
    notification_target?: string;
    player_latency_policy?: string;
    tags?: string;
    policy_duration_seconds?: string;
    arn?: string;
    tags_all?: string;
}
export interface GameliftScript {
    name: string;
    bucket: string;
    key: string;
    role_arn: string;
    storage_location?: string;
    version?: string;
    tags?: string;
    zip_file?: string;
    object_version?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface GlacierVault {
    name: string;
    events: string;
    sns_topic: string;
    access_policy?: string;
    tags?: string;
    location?: string;
    arn?: string;
    tags_all?: string;
}
export interface GlacierVaultLock {
    complete_lock: string;
    policy: string;
    vault_name: string;
    ignore_deletion_error?: string;
    id?: string;
}
export interface ResourceGlobalacceleratorAccelerator {
    name: string;
    ip_address_type?: string;
    ip_addresses?: string;
    enabled?: string;
    tags?: string;
    flow_logs_enabled?: string;
    flow_logs_s3_bucket?: string;
    flow_logs_s3_prefix?: string;
    id?: string;
    dns_name?: string;
    dual_stack_dns_name?: string;
    hosted_zone_id?: string;
    ip_sets?: string;
    tags_all?: string;
    ip_family?: string;
}
export interface GlobalacceleratorCustomRoutingAccelerator {
    name: string;
    ip_address_type?: string;
    ip_addresses?: string;
    enabled?: string;
    tags?: string;
    flow_logs_enabled?: string;
    flow_logs_s3_bucket?: string;
    flow_logs_s3_prefix?: string;
    id?: string;
    dns_name?: string;
    hosted_zone_id?: string;
    ip_sets?: string;
    tags_all?: string;
    ip_family?: string;
}
export interface GlobalacceleratorCustomRoutingEndpointGroup {
    listener_arn: string;
    from_port: string;
    protocols: string;
    to_port: string;
    endpoint_group_region?: string;
    endpoint_id?: string;
    id?: string;
    arn?: string;
}
export interface GlobalacceleratorCustomRoutingListener {
    accelerator_arn: string;
    from_port?: string;
    to_port?: string;
    id?: string;
}
export interface GlobalacceleratorEndpointGroup {
    listener_arn: string;
    endpoint_port: string;
    listener_port: string;
    endpoint_group_region?: string;
    health_check_interval_seconds?: string;
    health_check_path?: string;
    health_check_port?: string;
    health_check_protocol?: string;
    threshold_count?: string;
    traffic_dial_percentage?: string;
    client_ip_preservation_enabled?: string;
    endpoint_id?: string;
    weight?: string;
    id?: string;
    arn?: string;
}
export interface GlobalacceleratorListener {
    accelerator_arn: string;
    client_affinity?: string;
    protocol?: string;
    from_port?: string;
    to_port?: string;
    id?: string;
}
export interface GlueCatalogDatabase {
    name: string;
    catalog_id?: string;
    create_table_default_permission?: CreateTableDefaultPermission;
    description?: string;
    location_uri?: string;
    parameters?: string;
    tags?: string;
    target_database?: TargetDatabase;
    region?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface CreateTableDefaultPermission {
    permissions?: string;
    principal?: Principal;
}
export interface Principal {
    data_lake_principal_identifier?: string;
}
export interface TargetDatabase {
    catalog_id: string;
    database_name: string;
    region?: string;
}
export interface ResourceGlueCatalogTable {
    name: string;
    iceberg_input: IcebergInput;
    keys: string;
    catalog_id?: string;
    description?: string;
    owner?: string;
    open_table_format_input?: OpenTableFormatInput;
    partition_index?: PurplePartitionIndex;
    partition_keys?: FluffyPartitionKeys;
    retention?: string;
    storage_descriptor?: FluffyStorageDescriptor;
    table_type?: string;
    target_table?: FluffyTargetTable;
    view_expanded_text?: string;
    view_original_text?: string;
    schema_reference?: string;
    ser_de_info?: string;
    skewed_info?: string;
    sort_columns?: string;
    arn?: string;
    id?: string;
}
export interface IcebergInput {
    metadata_operation?: string;
    version?: string;
}
export interface OpenTableFormatInput {
    iceberg_input: string;
}
export interface PurplePartitionIndex {
    index_name: string;
    keys: string;
}
export interface FluffyPartitionKeys {
    name: string;
    comment?: string;
    type?: string;
}
export interface FluffyStorageDescriptor {
    bucket_columns?: string;
    columns?: FluffyColumns;
    compressed?: string;
    input_format?: string;
    location?: string;
    number_of_buckets?: string;
    output_format?: string;
    schema_reference?: FluffySchemaReference;
    ser_de_info?: SerDeInfo;
    skewed_info?: SkewedInfo;
    sort_columns?: PurpleSortColumns;
    stored_as_sub_directories?: string;
    type?: string;
    schema_id?: string;
}
export interface FluffyColumns {
    name: string;
    comment?: string;
    parameters?: string;
    type?: string;
}
export interface FluffySchemaReference {
    schema_version_number: string;
    schema_id?: SchemaID;
    schema_version_id?: string;
}
export interface PurpleSortColumns {
    column: string;
    sort_order: string;
}
export interface FluffyTargetTable {
    catalog_id: string;
    database_name: string;
    name: string;
}
export interface GlueClassifier {
    name: string;
    csv_classifier?: CSVClassifier;
    grok_classifier?: GrokClassifier;
    json_classifier?: JSONClassifier;
    xml_classifier?: XMLClassifier;
    id?: string;
}
export interface CSVClassifier {
    allow_single_column?: string;
    contains_header?: string;
    custom_datatype_configured?: string;
    custom_datatypes?: string;
    delimiter?: string;
    disable_value_trimming?: string;
    header?: string;
    quote_symbol?: string;
}
export interface GrokClassifier {
    classification: string;
    grok_pattern: string;
    custom_patterns?: string;
}
export interface JSONClassifier {
    json_path: string;
}
export interface XMLClassifier {
    classification: string;
    row_tag: string;
}
export interface ResourceGlueConnection {
    name: string;
    catalog_id?: string;
    connection_properties?: string;
    connection_type?: string;
    description?: string;
    match_criteria?: string;
    physical_connection_requirements?: PhysicalConnectionRequirements;
    tags?: string;
    subnet_id?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface PhysicalConnectionRequirements {
    availability_zone?: string;
    security_group_id_list?: string;
    subnet_id?: string;
}
export interface GlueCrawler {
    database_name: string;
    name: string;
    role: string;
    tables: string;
    classifiers?: string;
    configuration?: string;
    description?: string;
    delta_target?: DeltaTarget;
    dynamodb_target?: DynamodbTarget;
    jdbc_target?: JDBCTarget;
    s3_target?: S3Target;
    mongodb_target?: MongodbTarget;
    hudi_target?: HudiTargetClass;
    iceberg_target?: HudiTargetClass;
    schedule?: string;
    schema_change_policy?: SchemaChangePolicy;
    lake_formation_configuration?: LakeFormationConfiguration;
    lineage_configuration?: LineageConfiguration;
    recrawl_policy?: RecrawlPolicy;
    security_configuration?: string;
    table_prefix?: string;
    tags?: string;
    event_queue_arn?: string;
    dlq_event_queue_arn?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface DeltaTarget {
    delta_tables: string;
    write_manifest: string;
    connection_name?: string;
    create_native_delta_table?: string;
}
export interface DynamodbTarget {
    path: string;
    scan_all?: string;
    scan_rate?: string;
}
export interface HudiTargetClass {
    paths: string;
    maximum_traversal_depth: string;
    connection_name?: string;
    exclusions?: string;
}
export interface JDBCTarget {
    connection_name: string;
    path: string;
    exclusions?: string;
    enable_additional_metadata?: string;
}
export interface LakeFormationConfiguration {
    account_id?: string;
    use_lake_formation_credentials?: string;
}
export interface LineageConfiguration {
    crawler_lineage_settings?: string;
}
export interface MongodbTarget {
    connection_name: string;
    path: string;
    scan_all?: string;
}
export interface RecrawlPolicy {
    recrawl_behavior?: string;
}
export interface S3Target {
    path: string;
    connection_name?: string;
    exclusions?: string;
    sample_size?: string;
    event_queue_arn?: string;
    dlq_event_queue_arn?: string;
}
export interface SchemaChangePolicy {
    delete_behavior?: string;
    update_behavior?: string;
}
export interface ResourceGlueDataCatalogEncryptionSettings {
    data_catalog_encryption_settings: DataCatalogEncryptionSettings;
    connection_password_encryption: ConnectionPasswordEncryption;
    encryption_at_rest: EncryptionAtREST;
    catalog_id?: string;
    id?: string;
}
export interface GlueDataQualityRuleset {
    name: string;
    description?: string;
    ruleset?: string;
    tags?: string;
    target_table?: GlueDataQualityRulesetTargetTable;
    arn?: string;
    created_on?: string;
    last_modified_on?: string;
    recommendation_run_id?: string;
    tags_all?: string;
}
export interface GlueDataQualityRulesetTargetTable {
    database_name: string;
    table_name: string;
    catalog_id?: string;
}
export interface GlueDevEndpoint {
    name: string;
    role_arn: string;
    arguments?: string;
    extra_jars_s3_path?: string;
    extra_python_libs_s3_path?: string;
    glue_version?: string;
    number_of_nodes?: string;
    number_of_workers?: string;
    public_key?: string;
    public_keys?: string;
    security_configuration?: string;
    security_group_ids?: string;
    subnet_id?: string;
    tags?: string;
    worker_type?: string;
    arn?: string;
    private_address?: string;
    public_address?: string;
    yarn_endpoint_address?: string;
    zeppelin_remote_spark_interpreter_port?: string;
    availability_zone?: string;
    vpc_id?: string;
    status?: string;
    failure_reason?: string;
    tags_all?: string;
}
export interface GlueJob {
    command: string;
    name: string;
    role_arn: string;
    script_location: string;
    connections?: string;
    default_arguments?: string;
    non_overridable_arguments?: string;
    description?: string;
    execution_property?: string;
    glue_version?: string;
    execution_class?: string;
    max_capacity?: string;
    max_retries?: string;
    notification_property?: string;
    tags?: string;
    timeout?: string;
    security_configuration?: string;
    worker_type?: string;
    number_of_workers?: string;
    python_version?: string;
    runtime?: string;
    max_concurrent_runs?: string;
    notify_delay_after?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface GlueMlTransform {
    name: string;
    input_record_tables: InputRecordTables;
    parameters: GlueMlTransformParameters;
    role_arn: string;
    find_matches_parameters: string;
    description?: string;
    glue_version?: string;
    max_capacity?: string;
    max_retries?: string;
    tags?: string;
    timeout?: string;
    worker_type?: string;
    number_of_workers?: string;
    arn?: string;
    id?: string;
    label_count?: string;
    schema?: GlueMlTransformSchema;
    tags_all?: string;
    data_type?: string;
}
export interface InputRecordTables {
    database_name?: string;
    table_name?: string;
    catalog_id?: string;
}
export interface GlueMlTransformParameters {
    transform_type?: string;
    find_matches_parameters?: FindMatchesParameters;
}
export interface FindMatchesParameters {
    accuracy_cost_trade_off?: string;
    enforce_provided_labels?: string;
    precision_recall_trade_off?: string;
    primary_key_column_name?: string;
}
export interface GlueMlTransformSchema {
    name?: string;
    data_type?: string;
}
export interface GluePartition {
    storage_descriptor?: GluePartitionStorageDescriptor;
    id?: string;
    creation_time?: string;
    last_analyzed_time?: string;
    last_accessed_time?: string;
}
export interface GluePartitionStorageDescriptor {
    column: Column;
    ser_de_info?: string;
    sort_columns?: string;
    skewed_info?: string;
}
export interface Column {
    database_name?: string;
    partition_values?: string;
    catalog_id?: string;
    storage_descriptor?: string;
    columns?: string;
    location?: string;
    input_format?: string;
    output_format?: string;
    compressed?: string;
    number_of_buckets?: string;
    ser_de_info?: SerDeInfo;
    bucket_columns?: string;
    sort_columns?: ColumnSortColumns;
    skewed_info?: SkewedInfo;
    stored_as_sub_directories?: string;
    name?: string;
    type?: string;
    comment?: string;
}
export interface GluePartitionIndex {
    table_name: string;
    database_name: string;
    partition_index: GluePartitionIndexPartitionIndex;
    keys: string;
    catalog_id?: string;
    id?: string;
}
export interface GlueRegistry {
    registry_name: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface GlueResourcePolicy {
    policy: string;
    enable_hybrid?: string;
}
export interface GlueSchema {
    schema_name: string;
    registry_arn: string;
    data_format: string;
    compatibility: string;
    schema_definition: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    registry_name?: string;
    latest_schema_version?: string;
    next_schema_version?: string;
    schema_checkpoint?: string;
    tags_all?: string;
}
export interface GlueSecurityConfiguration {
    name: string;
    cloudwatch_encryption_: string;
    job_bookmarks_encryption_: string;
    s3_encryption: string;
    cloudwatch_encryption_mode?: string;
    kms_key_arn?: string;
    job_bookmarks_encryption_mode?: string;
    s3_encryption_mode?: string;
    id?: string;
}
export interface GlueTrigger {
    actions: GlueTriggerActions;
    name: string;
    type: string;
    description?: string;
    enabled?: string;
    predicate?: Predicate;
    schedule?: string;
    tags?: string;
    start_on_creation?: string;
    workflow_name?: string;
    event_batching_condition?: EventBatchingCondition;
    arn?: string;
    id?: string;
    state?: string;
    tags_all?: string;
}
export interface GlueTriggerActions {
    arguments?: string;
    crawler_name?: string;
    job_name?: string;
    timeout?: string;
    security_configuration?: string;
    notification_property?: NotificationProperty;
}
export interface NotificationProperty {
    notify_delay_after?: string;
}
export interface EventBatchingCondition {
    batch_size: string;
    batch_window?: string;
}
export interface Predicate {
    conditions: PredicateConditions;
    logical?: string;
}
export interface PredicateConditions {
    job_name?: string;
    state?: string;
    crawler_name?: string;
    crawl_state?: string;
    logical_operator?: string;
}
export interface GlueUserDefinedFunction {
    name: string;
    database_name: string;
    class_name: string;
    owner_name: string;
    owner_type: string;
    uri: string;
    catalog_id?: string;
    resource_uris?: ResourceUris;
}
export interface ResourceUris {
    resource_type: string;
    uri: string;
}
export interface GlueWorkflow {
    name: string;
    default_run_properties?: string;
    description?: string;
    max_concurrent_runs?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface GrafanaLicenseAssociation {
    license_type: string;
    workspace_id: string;
    free_trial_expiration?: string;
    license_expiration?: string;
}
export interface GrafanaRoleAssociation {
    role: string;
    workspace_id: string;
    group_ids?: string;
    user_ids?: string;
}
export interface ResourceGrafanaWorkspace {
    account_access_type: string;
    authentication_providers: string;
    permission_type: string;
    configuration?: string;
    data_sources?: string;
    description?: string;
    grafana_version?: string;
    name?: string;
    network_access_control?: NetworkAccessControl;
    notification_destinations?: string;
    organization_role_name?: string;
    organizational_units?: string;
    role_arn?: string;
    stack_set_name?: string;
    tags?: string;
    vpc_configuration?: VpcConfigurationClass;
    arn?: string;
    endpoint?: string;
    tags_all?: string;
}
export interface NetworkAccessControl {
    prefix_list_ids: string;
    vpce_ids: string;
}
export interface VpcConfigurationClass {
    security_group_ids: string;
    subnet_ids: string;
}
export interface GrafanaWorkspaceAPIKey {
    key?: string;
}
export interface GrafanaWorkspaceSamlConfiguration {
    editor_role_values: string;
    workspace_id: string;
    admin_role_values?: string;
    allowed_organizations?: string;
    email_assertion?: string;
    groups_assertion?: string;
    idp_metadata_url?: string;
    idp_metadata_xml?: string;
    login_assertion?: string;
    login_validity_duration?: string;
    name_assertion?: string;
    org_assertion?: string;
    role_assertion?: string;
    status?: string;
}
export interface ResourceGuarddutyDetector {
    enable?: string;
    finding_publishing_frequency?: string;
    datasources?: string;
    tags?: string;
    s3_logs?: EbsVolumesClass;
    kubernetes?: GuarddutyDetectorKubernetes;
    malware_protection?: GuarddutyDetectorMalwareProtection;
    account_id?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface GuarddutyDetectorKubernetes {
    audit_logs: string;
}
export interface GuarddutyDetectorMalwareProtection {
    scan_ec2_instance_with_findings: PurpleScanEc2InstanceWithFindings;
}
export interface PurpleScanEc2InstanceWithFindings {
    ebs_volumes?: EbsVolumesClass;
}
export interface EbsVolumesClass {
    enable: string;
}
export interface GuarddutyFilter {
    detector_id: string;
    name: string;
    rank: string;
    action: string;
    finding_criteria: string;
    field: string;
    description?: string;
    tags?: string;
    equals?: string;
    not_equals?: string;
    greater_than?: string;
    greater_than_or_equal?: string;
    less_than?: string;
    less_than_or_equal?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface GuarddutyInviteAccepter {
    detector_id: string;
    master_account_id: string;
    id?: string;
}
export interface GuarddutySet {
    activate: string;
    detector_id: string;
    format: string;
    location: string;
    name: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface GuarddutyMember {
    account_id: string;
    detector_id: string;
    email: string;
    invite?: string;
    invitation_message?: string;
    disable_email_notification?: string;
    id?: string;
    relationship_status?: string;
}
export interface OrganizationAdminAccount {
    admin_account_id: string;
    id?: string;
}
export interface GuarddutyOrganizationConfiguration {
    detector_id: string;
    auto_enable_organization_members?: string;
    datasources?: string;
    s3_logs?: GuarddutyOrganizationConfigurationS3Logs;
    kubernetes?: GuarddutyOrganizationConfigurationKubernetes;
    malware_protection?: GuarddutyOrganizationConfigurationMalwareProtection;
    id?: string;
}
export interface GuarddutyOrganizationConfigurationKubernetes {
    audit_logs: string;
    enable: string;
}
export interface GuarddutyOrganizationConfigurationMalwareProtection {
    scan_ec2_instance_with_findings: FluffyScanEc2InstanceWithFindings;
}
export interface FluffyScanEc2InstanceWithFindings {
    ebs_volumes?: ScanEc2InstanceWithFindingsEbsVolumes;
}
export interface ScanEc2InstanceWithFindingsEbsVolumes {
    auto_enable: string;
}
export interface GuarddutyOrganizationConfigurationS3Logs {
    auto_enable?: string;
}
export interface GuarddutyPublishingDestination {
    detector_id: string;
    destination_arn: string;
    kms_key_arn: string;
    id?: string;
}
export interface IamAccessKey {
    user: string;
    pgp_key?: string;
    status?: string;
    create_date?: string;
    encrypted_secret?: string;
    encrypted_ses_smtp_password_v4?: string;
    id?: string;
    key_fingerprint?: string;
    secret?: string;
    ses_smtp_password_v4?: string;
}
export interface ResourceIamAccountAlias {
    account_alias: string;
}
export interface IamAccountPasswordPolicy {
    allow_users_to_change_password?: string;
    hard_expiry?: string;
    max_password_age?: string;
    minimum_password_length?: string;
    password_reuse_prevention?: string;
    require_lowercase_characters?: string;
    require_numbers?: string;
    require_symbols?: string;
    require_uppercase_characters?: string;
    expire_passwords?: string;
}
export interface ResourceIamGroup {
    name: string;
    path?: string;
    id?: string;
    arn?: string;
    unique_id?: string;
}
export interface IamGroupMembership {
    name: string;
    users: string;
    group: string;
}
export interface IamGroupPolicy {
    policy: string;
    group: string;
    name?: string;
    name_prefix?: string;
    id?: string;
}
export interface IamGroupPolicyAttachment {
    group: string;
    policy_arn: string;
}
export interface ResourceIamInstanceProfile {
    name?: string;
    name_prefix?: string;
    path?: string;
    role?: string;
    tags?: string;
    arn?: string;
    create_date?: string;
    id?: string;
    tags_all?: string;
    unique_id?: string;
}
export interface ResourceIamOpenidConnectProvider {
    url: string;
    client_id_list: string;
    thumbprint_list: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceIamPolicy {
    policy: string;
    description?: string;
    name?: string;
    name_prefix?: string;
    path?: string;
    tags?: string;
    id?: string;
    arn?: string;
    policy_id?: string;
    tags_all?: string;
}
export interface IamPolicyAttachment {
    name: string;
    policy_arn: string;
    users?: string;
    roles?: string;
    groups?: string;
    id?: string;
}
export interface ResourceIamRole {
    assume_role_policy: string;
    description?: string;
    force_detach_policies?: string;
    inline_policy?: InlinePolicy;
    managed_policy_arns?: string;
    max_session_duration?: string;
    name?: string;
    name_prefix?: string;
    path?: string;
    permissions_boundary?: string;
    tags?: string;
    arn?: string;
    create_date?: string;
    id?: string;
    tags_all?: string;
    unique_id?: string;
}
export interface InlinePolicy {
    name: string;
    policy: string;
}
export interface IamRolePolicy {
    policy: string;
    role: string;
    name?: string;
    name_prefix?: string;
    id?: string;
}
export interface IamRolePolicyAttachment {
    role: string;
    policy_arn: string;
}
export interface ResourceIamSamlProvider {
    name: string;
    saml_metadata_document: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
    valid_until?: string;
}
export interface IamSecurityTokenServicePreferences {
    global_endpoint_token_version: string;
    id?: string;
}
export interface ResourceIamServerCertificate {
    certificate_body: string;
    private_key: string;
    name?: string;
    name_prefix?: string;
    certificate_chain?: string;
    path?: string;
    tags?: string;
    arn?: string;
    expiration?: string;
    id?: string;
    tags_all?: string;
    upload_date?: string;
}
export interface IamServiceLinkedRole {
    aws_service_name: string;
    custom_suffix?: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    create_date?: string;
    name?: string;
    path?: string;
    unique_id?: string;
    tags_all?: string;
}
export interface IamServiceSpecificCredential {
    service_name: string;
    user_name: string;
    status?: string;
    id?: string;
    service_password?: string;
    service_user_name?: string;
    service_specific_credential_id?: string;
}
export interface IamSigningCertificate {
    certificate_body: string;
    user_name: string;
    status?: string;
    certificate_id?: string;
    id?: string;
}
export interface ResourceIamUser {
    name: string;
    path?: string;
    permissions_boundary?: string;
    force_destroy?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
    unique_id?: string;
}
export interface IamUserGroupMembership {
    user: string;
    groups: string;
}
export interface IamUserLoginProfile {
    user: string;
    pgp_key?: string;
    password_length?: string;
    password_reset_required?: string;
    password?: string;
    key_fingerprint?: string;
    encrypted_password?: string;
}
export interface IamUserPolicy {
    policy: string;
    user: string;
    name?: string;
    name_prefix?: string;
    id?: string;
}
export interface IamUserPolicyAttachment {
    user: string;
    policy_arn: string;
}
export interface ResourceIamUserSSHKey {
    username: string;
    encoding: string;
    public_key: string;
    status?: string;
    ssh_public_key_id?: string;
    fingerprint?: string;
}
export interface IamVirtualMfaDevice {
    virtual_mfa_device_name: string;
    path?: string;
    tags?: string;
    arn?: string;
    base_32_string_seed?: string;
    enable_date?: string;
    qr_code_png?: string;
    tags_all?: string;
    user_name?: string;
}
export interface ResourceIdentitystoreGroup {
    identity_store_id: string;
    display_name?: string;
    description?: string;
    group_id?: string;
    external_ids?: ExternalIDS;
    issuer?: string;
}
export interface ExternalIDS {
    id?: string;
    issuer?: string;
}
export interface IdentitystoreGroupMembership {
    member_id: string;
    group_id: string;
    identity_store_id: string;
    membership_id?: string;
}
export interface ResourceIdentitystoreUser {
    display_name: string;
    identity_store_id: string;
    user_name: string;
    family_name: string;
    given_name: string;
    locale?: string;
    nickname?: string;
    preferred_language?: string;
    profile_url?: string;
    timezone?: string;
    title?: string;
    user_type?: string;
    country?: string;
    formatted?: string;
    locality?: string;
    postal_code?: string;
    primary?: string;
    region?: string;
    street_address?: string;
    type?: string;
    value?: string;
    honorific_prefix?: string;
    honorific_suffix?: string;
    middle_name?: string;
    external_ids?: string;
    id?: string;
    issuer?: string;
    user_id?: string;
}
export interface ResourceImagebuilderComponent {
    name: string;
    platform: string;
    version: string;
    arn: string;
    change_description?: string;
    data?: string;
    description?: string;
    kms_key_id?: string;
    skip_destroy?: string;
    supported_os_versions?: string;
    tags?: string;
    uri?: string;
    date_created?: string;
    encrypted?: string;
    owner?: string;
    tags_all?: string;
    type?: string;
}
export interface ResourceImagebuilderContainerRecipe {
    component: ImagebuilderContainerRecipeComponent;
    container_type: string;
    parent_image: string;
    target_repository: TargetRepository;
    version: string;
    arn: string;
    description?: string;
    dockerfile_template_data?: string;
    dockerfile_template_uri?: string;
    instance_configuration?: ImagebuilderContainerRecipeInstanceConfiguration;
    platform_override?: string;
    tags?: string;
    working_directory?: string;
    date_created?: string;
    encrypted?: string;
    owner?: string;
    platform?: string;
    tags_all?: string;
}
export interface ImagebuilderContainerRecipeComponent {
    component_arn?: string;
    parameter?: InsertHeader;
}
export interface ImagebuilderContainerRecipeInstanceConfiguration {
    block_device_mapping?: InstanceConfigurationBlockDeviceMapping;
    image?: string;
}
export interface InstanceConfigurationBlockDeviceMapping {
    device_name?: string;
    ebs?: Ebs;
    no_device?: string;
    virtual_name?: string;
}
export interface Ebs {
    delete_on_termination?: string;
    encrypted?: string;
    iops?: string;
    kms_key_id?: string;
    snapshot_id?: string;
    throughput?: string;
    volume_size?: string;
    volume_type?: string;
}
export interface TargetRepository {
    repository_name?: string;
    service?: string;
}
export interface ResourceImagebuilderDistributionConfiguration {
    name: string;
    distribution: Distribution;
    target_repository: TargetRepository;
    arn: string;
    tags?: string;
    date_created?: string;
    date_updated?: string;
    tags_all?: string;
}
export interface Distribution {
    region?: string;
    ami_distribution_configuration?: AmiDistributionConfiguration;
    container_distribution_configuration?: ContainerDistributionConfiguration;
    fast_launch_configuration?: FastLaunchConfiguration;
    launch_template_configuration?: LaunchTemplateConfiguration;
    license_configuration_arns?: string;
}
export interface AmiDistributionConfiguration {
    ami_tags?: string;
    description?: string;
    kms_key_id?: string;
    launch_permission?: LaunchPermission;
    name?: string;
    target_account_ids?: string;
}
export interface LaunchPermission {
    organization_arns?: string;
    organizational_unit_arns?: string;
    user_groups?: string;
    user_ids?: string;
}
export interface ContainerDistributionConfiguration {
    container_tags?: string;
    description?: string;
    target_repository?: string;
}
export interface FastLaunchConfiguration {
    account_id?: string;
    enabled?: string;
    launch_template?: FastLaunchConfigurationLaunchTemplate;
    max_parallel_launches?: string;
    snapshot_configuration?: SnapshotConfiguration;
}
export interface FastLaunchConfigurationLaunchTemplate {
    launch_template_id?: string;
    launch_template_name?: string;
    launch_template_version?: string;
}
export interface SnapshotConfiguration {
    target_resource_count?: string;
}
export interface LaunchTemplateConfiguration {
    default?: string;
    account_id?: string;
    launch_template_id?: string;
}
export interface ResourceImagebuilderImage {
    infrastructure_configuration_arn: string;
    container_recipe_arn?: string;
    distribution_configuration_arn?: string;
    enhanced_image_metadata_enabled?: string;
    image_recipe_arn?: string;
    image_tests_configuration?: ImageTestsConfiguration;
    tags?: string;
    arn?: string;
    date_created?: string;
    platform?: string;
    os_version?: string;
    output_resources?: string;
    amis?: string;
    account_id?: string;
    description?: string;
    image?: string;
    name?: string;
    region?: string;
    containers?: string;
    image_uris?: string;
    tags_all?: string;
    version?: string;
}
export interface ImageTestsConfiguration {
    image_tests_enabled?: string;
    timeout_minutes?: string;
}
export interface ResourceImagebuilderImagePipeline {
    infrastructure_configuration_arn: string;
    name: string;
    container_recipe_arn?: string;
    description?: string;
    distribution_configuration_arn?: string;
    enhanced_image_metadata_enabled?: string;
    image_recipe_arn?: string;
    image_scanning_configuration?: ImagebuilderImagePipelineImageScanningConfiguration;
    image_tests_configuration?: ImageTestsConfiguration;
    schedule?: ImagebuilderImagePipelineSchedule;
    status?: string;
    tags?: string;
    repository_name?: string;
    arn?: string;
    date_created?: string;
    date_last_run?: string;
    date_next_run?: string;
    date_updated?: string;
    platform?: string;
    tags_all?: string;
}
export interface ImagebuilderImagePipelineImageScanningConfiguration {
    image_scanning_enabled?: string;
    ecr_configuration?: EcrConfiguration;
}
export interface EcrConfiguration {
    container_tags?: string;
    repository_name?: string;
}
export interface ImagebuilderImagePipelineSchedule {
    schedule_expression: string;
    pipeline_execution_start_condition?: string;
    timezone?: string;
}
export interface ResourceImagebuilderImageRecipe {
    arn: string;
    component?: ImagebuilderImageRecipeComponent;
    parent_image?: string;
    version?: string;
    block_device_mapping?: ImagebuilderImageRecipeBlockDeviceMapping;
    description?: string;
    systems_manager_agent?: SystemsManagerAgent;
    tags?: string;
    user_data_base64?: string;
    working_directory?: string;
    value?: string;
    date_created?: string;
    owner?: string;
    platform?: string;
    tags_all?: string;
}
export interface ImagebuilderImageRecipeBlockDeviceMapping {
    device_name?: string;
    ebs?: Ebs;
    no_device?: string;
    virtual_name?: string;
    volume_type?: string;
}
export interface ImagebuilderImageRecipeComponent {
    component_arn: string;
    parameter?: InsertHeader;
}
export interface SystemsManagerAgent {
    uninstall_after_build?: string;
}
export interface ResourceImagebuilderInfrastructureConfiguration {
    instance_profile_name: string;
    name: string;
    description?: string;
    instance_metadata_options?: InstanceMetadataOptions;
    instance_types?: string;
    key_pair?: string;
    logging?: ImagebuilderInfrastructureConfigurationLogging;
    resource_tags?: string;
    security_group_ids?: string;
    sns_topic_arn?: string;
    subnet_id?: string;
    tags?: string;
    terminate_instance_on_failure?: string;
    id?: string;
    arn?: string;
    date_created?: string;
    date_updated?: string;
    tags_all?: string;
}
export interface InstanceMetadataOptions {
    http_put_response_hop_limit?: string;
    http_tokens?: string;
}
export interface ImagebuilderInfrastructureConfigurationLogging {
    s3_logs: LoggingS3Logs;
}
export interface LoggingS3Logs {
    s3_bucket_name?: string;
    s3_key_prefix?: string;
}
export interface Inspector2DelegatedAdminAccount {
    account_id: string;
    relationship_status?: string;
}
export interface Inspector2Enabler {
    account_ids: string;
    resource_types: string;
}
export interface Inspector2MemberAssociation {
    account_id: string;
    delegated_admin_account_id?: string;
    relationship_status?: string;
    updated_at?: string;
}
export interface Inspector2OrganizationConfiguration {
    auto_enable: AutoEnable;
    max_account_limit_reached?: string;
}
export interface AutoEnable {
    ec2?: string;
    ecr?: string;
    lambda?: string;
}
export interface InspectorAssessmentTarget {
    name: string;
    resource_group_arn?: string;
    arn?: string;
}
export interface InspectorAssessmentTemplate {
    name: string;
    target_arn: string;
    duration: string;
    rules_package_arns: string;
    event: string;
    topic_arn: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface InspectorResourceGroup {
    tags: string;
    arn?: string;
}
export interface ResourceInstance {
    device_name: string;
    device_index: string;
    network_interface_id: string;
    ami?: string;
    associate_public_ip_address?: string;
    availability_zone?: string;
    capacity_reservation_specification?: string;
    cpu_core_count?: string;
    cpu_options?: CPUOptions;
    cpu_threads_per_core?: string;
    credit_specification?: CreditSpecification;
    disable_api_stop?: string;
    disable_api_termination?: string;
    ebs_block_device?: string;
    ebs_optimized?: string;
    enclave_options?: EnclaveOptionsClass;
    ephemeral_block_device?: string;
    get_password_data?: string;
    hibernation?: string;
    host_id?: string;
    host_resource_group_arn?: string;
    iam_instance_profile?: string;
    instance_initiated_shutdown_behavior?: string;
    instance_market_options?: string;
    instance_type?: string;
    ipv6_addresses?: string;
    key_name?: string;
    maintenance_options?: MaintenanceOptions;
    metadata_options?: MetadataOptions;
    monitoring?: string;
    placement_group?: string;
    placement_partition_number?: string;
    private_dns_name_options?: PrivateDNSNameOptions;
    private_ip?: string;
    root_block_device?: string;
    secondary_private_ips?: string;
    security_groups?: string;
    source_dest_check?: string;
    subnet_id?: string;
    tags?: string;
    tenancy?: string;
    user_data?: string;
    user_data_base64?: string;
    user_data_replace_on_change?: string;
    volume_tags?: string;
    vpc_security_group_ids?: string;
    delete_on_termination?: string;
    encrypted?: string;
    iops?: string;
    kms_key_id?: string;
    throughput?: string;
    volume_size?: string;
    volume_type?: string;
    snapshot_id?: string;
    no_device?: string;
    virtual_name?: string;
    market_type?: string;
    spot_options?: InstanceSpotOptions;
    network_card_index?: string;
    id?: string;
    name?: string;
    version?: string;
    arn?: string;
    instance_state?: string;
    outpost_arn?: string;
    password_data?: string;
    primary_network_interface_id?: string;
    private_dns?: string;
    public_dns?: string;
    public_ip?: string;
    tags_all?: string;
    volume_id?: string;
    instance_lifecycle?: string;
    spot_instance_request_id?: string;
}
export interface CPUOptions {
    amd_sev_snp?: string;
    core_count?: string;
    threads_per_core?: string;
}
export interface CreditSpecification {
    cpu_credits?: string;
}
export interface MaintenanceOptions {
    auto_recovery?: string;
}
export interface MetadataOptions {
    http_endpoint?: string;
    http_protocol_ipv6?: string;
    http_put_response_hop_limit?: string;
    http_tokens?: string;
    instance_metadata_tags?: string;
}
export interface PrivateDNSNameOptions {
    enable_resource_name_dns_aaaa_record?: string;
    enable_resource_name_dns_a_record?: string;
    hostname_type?: string;
}
export interface InstanceSpotOptions {
    instance_interruption_behavior?: string;
    max_price?: string;
    spot_instance_type?: string;
    valid_until?: string;
}
export interface ResourceInternetGateway {
    vpc_id?: string;
    tags?: string;
    id?: string;
    arn?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface InternetGatewayAttachment {
    internet_gateway_id: string;
    vpc_id: string;
    id?: string;
}
export interface InternetmonitorMonitor {
    monitor_name: string;
    health_events_config?: HealthEventsConfig;
    internet_measurements_log_delivery?: string;
    max_city_networks_to_monitor?: string;
    resources?: string;
    status?: string;
    tags?: string;
    traffic_percentage_to_monitor?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface HealthEventsConfig {
    availability_score_threshold?: string;
    performance_score_threshold?: string;
}
export interface IotAuthorizer {
    authorizer_function_arn: string;
    name: string;
    enable_caching_for_http?: string;
    signing_disabled?: string;
    status?: string;
    token_key_name?: string;
    token_signing_public_keys?: string;
    arn?: string;
}
export interface IotCertificate {
    active: string;
    csr?: string;
    certificate_pem?: string;
    ca_pem?: string;
    id?: string;
    arn?: string;
    public_key?: string;
    private_key?: string;
}
export interface IotIndexingConfiguration {
    thing_group_indexing_configuration?: ThingGroupIndexingConfiguration;
    thing_indexing_configuration?: ThingIndexingConfiguration;
    name?: string;
    type?: string;
}
export interface ThingGroupIndexingConfiguration {
    thing_group_indexing_mode: string;
    custom_field?: string;
    managed_field?: string;
}
export interface ThingIndexingConfiguration {
    thing_indexing_mode: string;
    custom_field?: string;
    device_defender_indexing_mode?: string;
    managed_field?: string;
    named_shadow_indexing_mode?: string;
    thing_connectivity_indexing_mode?: string;
}
export interface IotLoggingOptions {
    role_arn: string;
    default_log_level?: string;
    disable_all_logs?: string;
}
export interface IotPolicy {
    name: string;
    policy: string;
    arn?: string;
    default_version_id?: string;
}
export interface IotPolicyAttachment {
    policy: string;
    target: string;
}
export interface IotProvisioningTemplate {
    name: string;
    provisioning_role_arn: string;
    template_body: string;
    description?: string;
    enabled?: string;
    pre_provisioning_hook?: PreProvisioningHook;
    tags?: string;
    target_arn?: string;
    arn?: string;
    default_version_id?: string;
    tags_all?: string;
}
export interface PreProvisioningHook {
    payload_version?: string;
    target_arn?: string;
}
export interface IotRoleAlias {
    alias: string;
    role_arn: string;
    credential_duration?: string;
    arn?: string;
}
export interface IotThing {
    name: string;
    attributes?: string;
    thing_type_name?: string;
    default_client_id?: string;
    version?: string;
    arn?: string;
}
export interface IotThingGroup {
    name: string;
    parent_group_name?: string;
    properties?: string;
    tags?: string;
    attribute_payload?: string;
    description?: string;
    attributes?: string;
    arn?: string;
    id?: string;
    version?: string;
}
export interface IotThingGroupMembership {
    thing_name: string;
    thing_group_name: string;
    override_dynamic_group?: string;
    id?: string;
}
export interface IotThingPrincipalAttachment {
    principal: string;
    thing: string;
}
export interface IotThingType {
    name: string;
    deprecated?: string;
    properties?: string;
    description?: string;
    searchable_attributes?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface IotTopicRule {
    name: string;
    enabled: string;
    sql: string;
    sql_version: string;
    alarm_name: string;
    role_arn: string;
    state_reason: string;
    state_value: string;
    log_group_name: string;
    metric_name: string;
    metric_namespace: string;
    metric_unit: string;
    metric_value: string;
    hash_key_field: string;
    hash_key_value: string;
    table_name: string;
    put_item: string;
    endpoint: string;
    id: string;
    index: string;
    type: string;
    delivery_stream_name: string;
    url: string;
    key: string;
    value: string;
    channel_name: string;
    input_name: string;
    client_properties: string;
    destination_arn: string;
    stream_name: string;
    function_arn: string;
    topic: string;
    bucket_name: string;
    message_format: string;
    target_arn: string;
    queue_url: string;
    use_base64: string;
    state_machine_name: string;
    database_name: string;
    dimension: string;
    unit: string;
    description?: string;
    error_action?: string;
    tags?: string;
    metric_timestamp?: string;
    hash_key_type?: string;
    payload_field?: string;
    range_key_field?: string;
    range_key_type?: string;
    range_key_value?: string;
    operation?: string;
    separator?: string;
    batch_mode?: string;
    confirmation_url?: string;
    http_header?: string;
    message_id?: string;
    partition?: string;
    partition_key?: string;
    qos?: string;
    execution_name_prefix?: string;
    timestamp?: string;
    arn?: string;
    tags_all?: string;
}
export interface IotTopicRuleDestination {
    vpc_configuration: string;
    role_arn: string;
    subnet_ids: string;
    vpc_id: string;
    enabled?: string;
    security_groups?: string;
    arn?: string;
}
export interface IvsChannel {
    authorized?: string;
    latency_mode?: string;
    name?: string;
    recording_configuration_arn?: string;
    tags?: string;
    type?: string;
    arn?: string;
    ingest_endpoint?: string;
    playback_url?: string;
    tags_all?: string;
}
export interface IvsPlaybackKeyPair {
    public_key: string;
    name?: string;
    tags?: string;
    arn?: string;
    fingerprint?: string;
    tags_all?: string;
}
export interface IvsRecordingConfiguration {
    destination_configuration?: string;
    s3?: string;
    bucket_name?: string;
    name?: string;
    recording_reconnect_window_seconds?: string;
    tags?: string;
    thumbnail_configuration?: string;
    recording_mode?: string;
    target_interval_seconds?: string;
    arn?: string;
    state?: string;
    tags_all?: string;
}
export interface IvschatLoggingConfiguration {
    destination_configuration: string;
    cloudwatch_logs?: string;
    log_group_name?: string;
    firehose?: string;
    delivery_stream_name?: string;
    s3?: string;
    bucket_name?: string;
    name?: string;
    tags?: string;
    arn?: string;
    id?: string;
    state?: string;
    tags_all?: string;
}
export interface IvschatRoom {
    logging_configuration_identifiers?: string;
    maximum_message_length?: string;
    maximum_message_rate_per_second?: string;
    message_review_handler?: string;
    fallback_result?: string;
    uri?: string;
    name?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface KendraDataSource {
    index_id: string;
    name: string;
    role_arn: string;
    type: string;
    bucket_name: string;
    credentials: string;
    host: string;
    port: string;
    seed_urls: string;
    site_maps: string;
    condition_document_attribute_key: string;
    operator: string;
    lambda_arn: string;
    s3_bucket: string;
    description?: string;
    language_code?: string;
    schedule?: string;
    tags?: string;
    exclusion_patterns?: string;
    inclusion_patterns?: string;
    inclusion_prefixes?: string;
    key_path?: string;
    s3_prefix?: string;
    crawl_depth?: string;
    max_content_size_per_page_in_mega_bytes?: string;
    max_links_per_page?: string;
    max_urls_per_minute_crawl_rate?: string;
    url_exclusion_patterns?: string;
    url_inclusion_patterns?: string;
    web_crawler_mode?: string;
    host_only?: string;
    subdomains?: string;
    everything?: string;
    document_content_deletion?: string;
    condition_on_value?: string;
    target_document_attribute_key?: string;
    target_document_attribute_value?: string;
    target_document_attribute_value_deletion?: string;
    date_value?: string;
    long_value?: string;
    string_list_value?: string;
    string?: string;
    invocation_condition?: string;
    arn?: string;
    created_at?: string;
    data_source_id?: string;
    error_message?: string;
    id?: string;
    status?: string;
    updated_at?: string;
    tags_all?: string;
}
export interface ResourceKendraExperience {
    index_id: string;
    name: string;
    role_arn: string;
    description?: string;
    configuration?: KendraExperienceConfiguration;
    id?: string;
    arn?: string;
    endpoints?: string;
    endpoint?: string;
    endpoint_type?: string;
    experience_id?: string;
    status?: string;
}
export interface KendraExperienceConfiguration {
    content_source_configuration?: ContentSourceConfiguration;
    user_identity_configuration?: UserIdentityConfiguration;
}
export interface ContentSourceConfiguration {
    data_source_ids?: string;
    direct_put_content?: string;
    faq_ids?: string;
}
export interface UserIdentityConfiguration {
    identity_attribute_name: string;
}
export interface ResourceKendraFAQ {
    name: string;
    role_arn: string;
    bucket: string;
    key: string;
    description?: string;
    file_format?: string;
    language_code?: string;
    tags?: string;
    arn?: string;
    created_at?: string;
    error_message?: string;
    faq_id?: string;
    id?: string;
    status?: string;
    updated_at?: string;
    tags_all?: string;
}
export interface ResourceKendraIndex {
    role_arn: string;
    capacity_units?: CapacityUnits;
    description?: string;
    document_metadata_configuration_updates?: DocumentMetadataConfigurationUpdates;
    edition?: string;
    server_side_encryption_configuration?: SecurityConfigClass;
    user_context_policy?: string;
    user_group_resolution_configuration?: UserGroupResolutionConfiguration;
    user_token_configurations?: UserTokenConfigurations;
    tags?: string;
    arn?: string;
    created_at?: string;
    error_message?: string;
    id?: string;
    index_statistics?: IndexStatistics;
    status?: string;
    updated_at?: string;
    tags_all?: string;
    indexed_text_documents_count?: string;
}
export interface CapacityUnits {
    query_capacity_units: string;
    storage_capacity_units: string;
}
export interface DocumentMetadataConfigurationUpdates {
    name: string;
    relevance: Relevance;
    search: Search;
    type: string;
}
export interface Relevance {
    duration?: string;
    freshness?: string;
    importance?: string;
    rank_order?: string;
    values_importance_map?: string;
}
export interface Search {
    displayable?: string;
    facetable?: string;
    searchable?: string;
    sortable?: string;
}
export interface IndexStatistics {
    faq_statistics?: FAQStatistics;
    text_document_statistics?: TextDocumentStatistics;
    indexed_text_documents_count?: string;
}
export interface FAQStatistics {
    indexed_question_answers_count?: string;
}
export interface TextDocumentStatistics {
    indexed_text_bytes?: string;
    indexed_text_documents_count?: string;
}
export interface SecurityConfigClass {
    kms_key_id?: string;
}
export interface UserGroupResolutionConfiguration {
    user_group_resolution_mode: string;
}
export interface UserTokenConfigurations {
    json_token_type_configuration?: JSONTokenTypeConfiguration;
    jwt_token_type_configuration?: JwtTokenTypeConfiguration;
}
export interface JSONTokenTypeConfiguration {
    group_attribute_field: string;
    user_name_attribute_field: string;
}
export interface JwtTokenTypeConfiguration {
    key_location: string;
    claim_regex?: string;
    group_attribute_field?: string;
    issuer?: string;
    secrets_manager_arn?: string;
    url?: string;
    user_name_attribute_field?: string;
}
export interface ResourceKendraQuerySuggestionsBlockList {
    index_id: string;
    name: string;
    role_arn: string;
    source_s3_path: string;
    bucket: string;
    key: string;
    description?: string;
    tags?: string;
    arn?: string;
    query_suggestions_block_list_id?: string;
    tags_all?: string;
}
export interface ResourceKendraThesaurus {
    name: string;
    role_arn: string;
    bucket: string;
    key: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    status?: string;
    tags_all?: string;
}
export interface ResourceKeyPair {
    public_key: string;
    key_name?: string;
    key_name_prefix?: string;
    tags?: string;
    id?: string;
    arn?: string;
    key_pair_id?: string;
    key_type?: string;
    fingerprint?: string;
    tags_all?: string;
}
export interface KeyspacesKeyspace {
    name: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface KeyspacesTable {
    keyspace_name: string;
    table_name: string;
    status: string;
    message: string;
    column: string;
    partition_key: string;
    clustering_key: string;
    static_column: string;
    name: string;
    type: string;
    order_by: string;
    capacity_specification?: string;
    client_side_timestamps?: string;
    comment?: string;
    default_time_to_live?: string;
    encryption_specification?: string;
    point_in_time_recovery?: string;
    schema_definition?: string;
    tags?: string;
    ttl?: string;
    read_capacity_units?: string;
    throughput_mode?: string;
    write_capacity_units?: string;
    kms_key_identifier?: string;
    arn?: string;
    tags_all?: string;
}
export interface KinesisAnalyticsApplication {
    role_arn: string;
    code?: string;
    description?: string;
    cloudwatch_logging_options?: CloudwatchLoggingOptions;
    inputs?: Inputs;
    outputs?: KinesisAnalyticsApplicationOutputs;
    reference_data_sources?: ReferenceDataSources;
    start_application?: string;
    tags?: string;
    id?: string;
    arn?: string;
    create_timestamp?: string;
    last_update_timestamp?: string;
    status?: string;
    version?: string;
    tags_all?: string;
}
export interface CloudwatchLoggingOptions {
    log_stream_arn: string;
    role_arn: string;
}
export interface Inputs {
    name_prefix: string;
    schema: string;
}
export interface KinesisAnalyticsApplicationOutputs {
    name: string;
    schema: string;
}
export interface ReferenceDataSources {
    schema: string;
    table_name: string;
    role_arn: string;
    record_columns: RecordColumns;
    record_format: RecordFormat;
    count: string;
    lambda: Lambda;
    starting_position: string;
    record_column_delimiter: string;
    record_row_delimiter: string;
    record_row_path: string;
    bucket_arn: string;
    file_key: string;
    record_encoding?: string;
}
export interface Lambda {
    resource_arn?: string;
    role_arn?: string;
}
export interface RecordColumns {
    name?: string;
    sql_type?: string;
    mapping?: string;
}
export interface RecordFormat {
    record_format_type?: string;
    mapping_parameters?: KmsSecretClass;
}
export interface KinesisFirehoseDeliveryStream {
    name: string;
    destination: string;
    kinesis_stream_arn: string;
    cluster_jdbcurl: string;
    username: string;
    password: string;
    data_table_name: string;
    index_name: string;
    hec_endpoint: string;
    hec_token: string;
    url: string;
    type: string;
    parameter_name: string;
    parameter_value: string;
    value: string;
    subnet_ids: string;
    security_group_ids: string;
    input_format_configuration: string;
    output_format_configuration: string;
    schema_configuration: string;
    tags?: string;
    kinesis_source_configuration?: string;
    server_side_encryption?: string;
    extended_s3_configuration?: string;
    redshift_configuration?: string;
    elasticsearch_configuration?: string;
    opensearch_configuration?: string;
    splunk_configuration?: string;
    http_endpoint_configuration?: string;
    key_arn?: string;
    data_format_conversion_configuration?: DataFormatConversionConfiguration;
    processing_configuration?: string;
    s3_backup_mode?: string;
    s3_backup_configuration?: string;
    dynamic_partitioning_configuration?: string;
    copy_options?: string;
    data_table_columns?: string;
    domain_arn?: string;
    cluster_endpoint?: string;
    index_rotation_period?: string;
    type_name?: string;
    vpc_config?: string;
    hec_acknowledgment_timeout?: string;
    hec_endpoint_type?: string;
    access_key?: string;
    request_configuration?: string;
    log_group_name?: string;
    log_stream_name?: string;
    processors?: string;
    parameters?: string;
    content_encoding?: string;
    common_attributes?: string;
    arn?: string;
    tags_all?: string;
}
export interface DataFormatConversionConfiguration {
    input_format_configuration: InputFormatConfiguration;
    output_format_configuration: OutputFormatConfiguration;
    schema_configuration: SchemaConfiguration;
    bucket_arn: string;
    deserializer: string;
    serializer: string;
    enabled?: string;
    prefix?: string;
    buffering_size?: string;
    buffering_interval?: string;
    compression_format?: string;
    error_output_prefix?: string;
    kms_key_arn?: string;
    cloudwatch_logging_options?: string;
    retry_duration?: string;
}
export interface InputFormatConfiguration {
    deserializer?: Deserializer;
}
export interface Deserializer {
    hive_json_ser_de?: string;
    open_x_json_ser_de?: string;
    timestamp_formats?: string;
    case_insensitive?: string;
    column_to_json_key_mappings?: string;
    convert_dots_in_json_keys_to_underscores?: string;
}
export interface OutputFormatConfiguration {
    serializer?: Serializer;
}
export interface Serializer {
    orc_ser_de?: string;
    parquet_ser_de?: string;
    block_size_bytes?: string;
    bloom_filter_columns?: string;
    bloom_filter_false_positive_probability?: string;
    compression?: string;
    dictionary_key_threshold?: string;
    enable_padding?: string;
    format_version?: string;
    padding_tolerance?: string;
    row_index_stride?: string;
    stripe_size_bytes?: string;
    enable_dictionary_compression?: string;
    max_padding_bytes?: string;
    page_size_bytes?: string;
    writer_version?: string;
}
export interface SchemaConfiguration {
    database_name?: string;
    role_arn?: string;
    table_name?: string;
    catalog_id?: string;
    region?: string;
    version_id?: string;
}
export interface ResourceKinesisStream {
    name: string;
    stream_mode: string;
    shard_count?: string;
    retention_period?: string;
    shard_level_metrics?: string;
    enforce_consumer_deletion?: string;
    encryption_type?: string;
    kms_key_id?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceKinesisStreamConsumer {
    name: string;
    stream_arn: string;
    arn?: string;
    creation_timestamp?: string;
    id?: string;
}
export interface KinesisVideoStream {
    name: string;
    data_retention_in_hours?: string;
    device_name?: string;
    kms_key_id?: string;
    media_type?: string;
    tags?: string;
    id?: string;
    arn?: string;
    creation_time?: string;
    version?: string;
    tags_all?: string;
}
export interface Kinesisanalyticsv2Application {
    name: string;
    runtime_environment: string;
    service_execution_role: string;
    application_code_configuration: string;
    code_content_type: string;
    bucket_arn: string;
    file_key: string;
    snapshots_enabled: string;
    property_group: string;
    property_group_id: string;
    property_map: string;
    configuration_type: string;
    application_restore_type: string;
    input_schema: string;
    name_prefix: string;
    input_lambda_processor: string;
    resource_arn: string;
    record_column: string;
    record_format: string;
    sql_type: string;
    mapping_parameters: string;
    record_format_type: string;
    record_column_delimiter: string;
    record_row_delimiter: string;
    record_row_path: string;
    input_starting_position: string;
    destination_schema: string;
    reference_schema: string;
    s3_reference_data_source: string;
    table_name: string;
    security_group_ids: string;
    subnet_ids: string;
    log_stream_arn: string;
    application_configuration?: string;
    cloudwatch_logging_options?: string;
    description?: string;
    force_stop?: string;
    start_application?: string;
    tags?: string;
    application_snapshot_configuration?: string;
    environment_properties?: string;
    flink_application_configuration?: string;
    run_configuration?: string;
    sql_application_configuration?: string;
    vpc_configuration?: string;
    code_content?: string;
    s3_content_location?: string;
    text_content?: string;
    object_version?: string;
    checkpoint_configuration?: string;
    monitoring_configuration?: string;
    parallelism_configuration?: string;
    "checkpointing_enabled_=_true"?: string;
    "checkpoint_interval_=_60000"?: string;
    checkpointing_enabled?: string;
    checkpoint_interval?: string;
    min_pause_between_checkpoints?: string;
    log_level?: string;
    metrics_level?: string;
    auto_scaling_enabled?: string;
    parallelism?: string;
    parallelism_per_kpu?: string;
    application_restore_configuration?: string;
    flink_run_configuration?: string;
    snapshot_name?: string;
    allow_non_restored_state?: string;
    input?: string;
    output?: string;
    reference_data_source?: string;
    input_parallelism?: string;
    input_processing_configuration?: string;
    input_starting_position_configuration?: string;
    kinesis_firehose_input?: string;
    kinesis_streams_input?: string;
    count?: string;
    record_encoding?: string;
    mapping?: string;
    csv_mapping_parameters?: string;
    json_mapping_parameters?: string;
    kinesis_firehose_output?: string;
    kinesis_streams_output?: string;
    lambda_output?: string;
    id?: string;
    arn?: string;
    create_timestamp?: string;
    last_update_timestamp?: string;
    status?: string;
    version_id?: string;
    tags_all?: string;
}
export interface Kinesisanalyticsv2ApplicationSnapshot {
    application_name: string;
    snapshot_name: string;
    id?: string;
    application_version_id?: string;
    snapshot_creation_timestamp?: string;
}
export interface ResourceKmsAlias {
    target_key_id: string;
    name?: string;
    name_prefix?: string;
    arn?: string;
    target_key_arn?: string;
}
export interface ResourceKmsCiphertext {
    plaintext: string;
    key_id: string;
    context?: string;
    ciphertext_blob?: string;
}
export interface ResourceKmsCustomKeyStore {
    cloud_hsm_cluster_id: string;
    custom_key_store_name: string;
    key_store_password: string;
    trust_anchor_certificate: string;
    id?: string;
}
export interface KmsExternalKey {
    bypass_policy_lockout_safety_check?: string;
    deletion_window_in_days?: string;
    description?: string;
    enabled?: string;
    key_material_base64?: string;
    multi_region?: string;
    policy?: string;
    tags?: string;
    valid_to?: string;
    arn?: string;
    expiration_model?: string;
    id?: string;
    key_state?: string;
    key_usage?: string;
    tags_all?: string;
}
export interface KmsGrant {
    key_id: string;
    grantee_principal: string;
    operations: string;
    name?: string;
    retiring_principal?: string;
    constraints?: string;
    grant_creation_tokens?: string;
    retire_on_delete?: string;
    encryption_context_equals?: string;
    encryption_context_subset?: string;
    grant_id?: string;
    grant_token?: string;
}
export interface ResourceKmsKey {
    description?: string;
    key_usage?: string;
    custom_key_store_id?: string;
    customer_master_key_spec?: string;
    policy?: string;
    bypass_policy_lockout_safety_check?: string;
    deletion_window_in_days?: string;
    is_enabled?: string;
    enable_key_rotation?: string;
    multi_region?: string;
    tags?: string;
    arn?: string;
    key_id?: string;
    tags_all?: string;
}
export interface KmsKeyPolicy {
    key_id: string;
    policy: string;
    bypass_policy_lockout_safety_check?: string;
}
export interface KmsReplicaExternalKey {
    primary_key_arn: string;
    bypass_policy_lockout_safety_check?: string;
    deletion_window_in_days?: string;
    description?: string;
    enabled?: string;
    key_material_base64?: string;
    policy?: string;
    tags?: string;
    valid_to?: string;
    arn?: string;
    expiration_model?: string;
    key_id?: string;
    key_state?: string;
    key_usage?: string;
    tags_all?: string;
}
export interface KmsReplicaKey {
    primary_key_arn: string;
    bypass_policy_lockout_safety_check?: string;
    deletion_window_in_days?: string;
    description?: string;
    enabled?: string;
    policy?: string;
    tags?: string;
    arn?: string;
    key_id?: string;
    key_rotation_enabled?: string;
    key_spec?: string;
    key_usage?: string;
    tags_all?: string;
}
export interface ResourceLakeformationDataLakeSettings {
    admins?: string;
    read_only_admins?: string;
    catalog_id?: string;
    create_database_default_permissions?: CreateEDefaultPermissions;
    create_table_default_permissions?: CreateEDefaultPermissions;
    trusted_resource_owners?: string;
    allow_external_data_filtering?: string;
    external_data_filtering_allow_list?: string;
    authorized_session_tag_value_list?: string;
}
export interface LakeformationLFTag {
    key: string;
    values: string;
    catalog_id?: string;
    id?: string;
}
export interface ResourceLakeformationPermissions {
    permissions: string;
    principal: string;
    catalog_resource?: string;
    data_location?: DataLocation;
    database?: LakeformationPermissionsDatabase;
    lf_tag?: LakeformationPermissionsLFTag;
    lf_tag_policy?: FluffyLFTagPolicy;
    table?: LakeformationResourceLFTagsTable;
    table_with_columns?: LakeformationResourceLFTagsTableWithColumns;
    permissions_with_grant_option?: string;
}
export interface FluffyLFTagPolicy {
    resource_type: string;
    expression: Expression;
    catalog_id?: string;
}
export interface LakeformationResourceLFTagsTable {
    database_name: string;
    name: string;
    wildcard: string;
    catalog_id?: string;
}
export interface LakeformationResourceLFTagsTableWithColumns {
    column_names: string;
    database_name: string;
    name: string;
    wildcard: string;
    catalog_id?: string;
    excluded_column_names?: string;
}
export interface LakeformationResourceLFTags {
    lf_tag: LakeformationResourceLFTagsLFTag;
    database?: LakeformationPermissionsDatabase;
    table?: LakeformationResourceLFTagsTable;
    table_with_columns?: LakeformationResourceLFTagsTableWithColumns;
}
export interface LakeformationResourceLFTagsLFTag {
    key?: string;
    value?: string;
    catalog_id?: string;
}
export interface ResourceLambdaAlias {
    name: string;
    function_name: string;
    function_version: string;
    description?: string;
    additional_version_weights?: string;
    arn?: string;
    invoke_arn?: string;
}
export interface ResourceLambdaCodeSigningConfig {
    signing_profile_version_arns: string;
    untrusted_artifact_on_deployment: string;
    description?: string;
    arn?: string;
    config_id?: string;
    last_modified?: string;
}
export interface LambdaEventSourceMapping {
    function_name: string;
    destination_arn: string;
    database_name: string;
    endpoints: string;
    type: string;
    uri: string;
    batch_size?: string;
    enabled?: string;
    event_source_arn?: string;
    function_response_types?: string;
    maximum_batching_window_in_seconds?: string;
    queues?: string;
    starting_position?: string;
    starting_position_timestamp?: string;
    topics?: string;
    tumbling_window_in_seconds?: string;
    consumer_group_id?: string;
    collection_name?: string;
    full_document?: string;
    pattern?: string;
    maximum_concurrency?: string;
    function_arn?: string;
    last_modified?: string;
    last_processing_result?: string;
    state?: string;
    state_transition_reason?: string;
    uuid?: string;
}
export interface ResourceLambdaFunction {
    function_name: string;
    role: string;
    architectures?: string;
    code_signing_config_arn?: string;
    dead_letter_config?: LambdaFunctionDeadLetterConfig;
    description?: string;
    environment?: LambdaFunctionEnvironment;
    ephemeral_storage?: LambdaFunctionEphemeralStorage;
    file_system_config?: LambdaFunctionFileSystemConfig;
    filename?: string;
    handler?: string;
    image_config?: LambdaFunctionImageConfig;
    image_uri?: string;
    kms_key_arn?: string;
    layers?: string;
    memory_size?: string;
    package_type?: string;
    publish?: string;
    reserved_concurrent_executions?: string;
    replace_security_groups_on_destroy?: string;
    replacement_security_group_ids?: string;
    runtime?: string;
    s3_bucket?: string;
    s3_key?: string;
    s3_object_version?: string;
    skip_destroy?: string;
    source_code_hash?: string;
    snap_start?: SnapStart;
    tags?: string;
    timeout?: string;
    tracing_config?: TracingConfig;
    vpc_config?: VpcConfigurationClass;
    working_directory?: string;
    arn?: string;
    invoke_arn?: string;
    last_modified?: string;
    qualified_arn?: string;
    qualified_invoke_arn?: string;
    signing_job_arn?: string;
    signing_profile_version_arn?: string;
    source_code_size?: string;
    tags_all?: string;
    version?: string;
}
export interface LambdaFunctionDeadLetterConfig {
    target_arn: string;
}
export interface LambdaFunctionEnvironment {
    variables?: string;
}
export interface LambdaFunctionEphemeralStorage {
    size: string;
}
export interface LambdaFunctionFileSystemConfig {
    arn: string;
    local_mount_path: string;
}
export interface LambdaFunctionImageConfig {
    command?: string;
    entry_point?: string;
    working_directory?: string;
}
export interface SnapStart {
    apply_on: string;
}
export interface TracingConfig {
    mode: string;
}
export interface LambdaFunctionEventInvokeConfig {
    function_name: string;
    destination: string;
    destination_config?: string;
    maximum_event_age_in_seconds?: string;
    maximum_retry_attempts?: string;
    qualifier?: string;
    on_failure?: string;
    on_success?: string;
    id?: string;
}
export interface ResourceLambdaFunctionURL {
    authorization_type: string;
    function_name: string;
    cors?: Cors;
    invoke_mode?: string;
    qualifier?: string;
    function_arn?: string;
    function_url?: string;
    url_id?: string;
}
export interface Cors {
    allow_credentials?: string;
    allow_headers?: string;
    allow_methods?: string;
    allow_origins?: string;
    expose_headers?: string;
    max_age?: string;
}
export interface ResourceLambdaInvocation {
    function_name: string;
    input: string;
    lifecycle_scope?: string;
    qualifier?: string;
    terraform_key?: string;
    triggers?: string;
    result?: string;
}
export interface ResourceLambdaLayerVersion {
    layer_name: string;
    compatible_architectures?: string;
    compatible_runtimes?: string;
    description?: string;
    filename?: string;
    license_info?: string;
    s3_bucket?: string;
    s3_key?: string;
    s3_object_version?: string;
    skip_destroy?: string;
    source_code_hash?: string;
    arn?: string;
    created_date?: string;
    layer_arn?: string;
    signing_job_arn?: string;
    signing_profile_version_arn?: string;
    source_code_size?: string;
    version?: string;
}
export interface LambdaLayerVersionPermission {
    action: string;
    layer_name: string;
    principal: string;
    statement_id: string;
    version_number: string;
    organization_id?: string;
    skip_destroy?: string;
    id?: string;
    revision_id?: string;
    policy?: string;
}
export interface LambdaPermission {
    action: string;
    function_name: string;
    principal: string;
    event_source_token?: string;
    function_url_auth_type?: string;
    qualifier?: string;
    source_account?: string;
    source_arn?: string;
    statement_id?: string;
    statement_id_prefix?: string;
    principal_org_id?: string;
}
export interface LambdaProvisionedConcurrencyConfig {
    function_name: string;
    provisioned_concurrent_executions: string;
    qualifier: string;
    skip_destroy?: string;
    id?: string;
}
export interface ResourceLaunchConfiguration {
    image_id: string;
    instance_type: string;
    associate_public_ip_address?: string;
    ebs_block_device?: string;
    ebs_optimized?: string;
    enable_monitoring?: string;
    ephemeral_block_device?: string;
    iam_instance_profile?: string;
    key_name?: string;
    metadata_options?: string;
    http_endpoint?: string;
    http_tokens?: string;
    http_put_response_hop_limit?: string;
    name?: string;
    name_prefix?: string;
    security_groups?: string;
    placement_tenancy?: string;
    root_block_device?: string;
    spot_price?: string;
    user_data?: string;
    user_data_base64?: string;
    id?: string;
    arn?: string;
}
export interface ResourceLaunchTemplate {
    device_name: string;
    type: string;
    license_configuration_arn: string;
    block_device_mappings?: string;
    capacity_reservation_specification?: CapacityReservationSpecification;
    cpu_options?: CPUOptions;
    credit_specification?: CreditSpecification;
    default_version?: string;
    disable_api_stop?: string;
    disable_api_termination?: string;
    ebs_optimized?: string;
    elastic_gpu_specifications?: string;
    elastic_inference_accelerator?: ElasticInferenceAccelerator;
    enclave_options?: EnclaveOptionsClass;
    hibernation_options?: HibernationOptions;
    iam_instance_profile?: string;
    image_id?: string;
    instance_initiated_shutdown_behavior?: string;
    instance_market_options?: string;
    instance_requirements?: LaunchTemplateInstanceRequirements;
    instance_type?: string;
    kernel_id?: string;
    key_name?: string;
    license_specification?: LicenseSpecification;
    maintenance_options?: MaintenanceOptions;
    metadata_options?: MetadataOptions;
    monitoring?: EnclaveOptionsClass;
    name?: string;
    name_prefix?: string;
    network_interfaces?: NetworkInterfaces;
    placement?: Placement;
    private_dns_name_options?: PrivateDNSNameOptions;
    ram_disk_id?: string;
    security_group_names?: string;
    tag_specifications?: TagSpecifications;
    update_default_version?: string;
    user_data?: string;
    vpc_security_group_ids?: string;
    ebs?: string;
    no_device?: string;
    virtual_name?: string;
    encrypted?: string;
    iops?: string;
    kms_key_id?: string;
    snapshot_id?: string;
    throughput?: string;
    volume_size?: string;
    volume_type?: string;
    arn?: string;
    max?: string;
    market_type?: string;
    spot_options?: string;
    block_duration_minutes?: string;
    instance_interruption_behavior?: string;
    max_price?: string;
    spot_instance_type?: string;
    valid_until?: string;
    subnet_id?: string;
    id?: string;
    latest_version?: string;
    tags_all?: string;
}
export interface CapacityReservationSpecification {
    capacity_reservation_preference?: string;
    capacity_reservation_target?: string;
    capacity_reservation_id?: string;
    capacity_reservation_resource_group_arn?: string;
}
export interface ElasticInferenceAccelerator {
    type: string;
}
export interface HibernationOptions {
    configured?: string;
}
export interface LaunchTemplateInstanceRequirements {
    memory_mib: string;
    min: string;
    vcpu_count: string;
    accelerator_count?: string;
    max?: string;
    accelerator_manufacturers?: string;
    accelerator_names?: string;
    accelerator_total_memory_mib?: string;
    accelerator_types?: string;
    allowed_instance_types?: string;
    bare_metal?: string;
    baseline_ebs_bandwidth_mbps?: string;
    burstable_performance?: string;
    cpu_manufacturers?: string;
    excluded_instance_types?: string;
    instance_generations?: string;
    local_storage?: string;
    local_storage_types?: string;
    memory_gib_per_vcpu?: string;
    network_bandwidth_gbps?: string;
    network_interface_count?: string;
    on_demand_max_price_percentage_over_lowest_price?: string;
    require_hibernate_support?: string;
    spot_max_price_percentage_over_lowest_price?: string;
    total_local_storage_gb?: string;
}
export interface LicenseSpecification {
    license_configuration_arn: string;
}
export interface NetworkInterfaces {
    associate_carrier_ip_address?: string;
    associate_public_ip_address?: string;
    delete_on_termination?: string;
    description?: string;
    device_index?: string;
    interface_type?: string;
    ipv4_prefix_count?: string;
    ipv4_prefixes?: string;
    ipv6_addresses?: string;
    ipv6_address_count?: string;
    ipv6_prefix_count?: string;
    ipv6_prefixes?: string;
    network_interface_id?: string;
    network_card_index?: string;
    private_ip_address?: string;
    ipv4_address_count?: string;
    ipv4_addresses?: string;
    security_groups?: string;
    subnet_id?: string;
}
export interface Placement {
    affinity?: string;
    availability_zone?: string;
    group_name?: string;
    host_id?: string;
    host_resource_group_arn?: string;
    spread_domain?: string;
    tenancy?: string;
    partition_number?: string;
}
export interface TagSpecifications {
    resource_type?: string;
    tags?: string;
}
export interface ResourceLB {
    access_logs?: AccessLogs;
    customer_owned_ipv4_pool?: string;
    desync_mitigation_mode?: string;
    drop_invalid_header_fields?: string;
    enable_cross_zone_load_balancing?: string;
    enable_deletion_protection?: string;
    enable_http2?: string;
    enable_tls_version_and_cipher_suite_headers?: string;
    enable_xff_client_port?: string;
    enable_waf_fail_open?: string;
    idle_timeout?: string;
    internal?: string;
    ip_address_type?: string;
    load_balancer_type?: string;
    name?: string;
    name_prefix?: string;
    security_groups?: string;
    preserve_host_header?: string;
    subnet_mapping?: LBSubnetMapping;
    subnets?: string;
    xff_header_processing_mode?: string;
    tags?: string;
    arn?: string;
    arn_suffix?: string;
    dns_name?: string;
    id?: string;
    tags_all?: string;
    zone_id?: string;
}
export interface AccessLogs {
    bucket: string;
    enabled?: string;
    prefix?: string;
}
export interface LBSubnetMapping {
    subnet_id: string;
    allocation_id?: string;
    ipv6_address?: string;
    private_ipv4_address?: string;
}
export interface LBCookieStickinessPolicy {
    name: string;
    load_balancer: string;
    lb_port: string;
    cookie_expiration_period?: string;
    id?: string;
}
export interface ResourceLBListener {
    default_action: LBListenerDefaultAction;
    load_balancer_arn: string;
    alpn_policy?: string;
    certificate_arn?: string;
    ssl_policy?: string;
    tags?: string;
    fixed_response?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface LBListenerDefaultAction {
    type?: string;
    authenticate_cognito?: AuthenticateCognito;
    authenticate_oidc?: AuthenticateOidc;
    fixed_response?: FixedResponse;
    forward?: DefaultActionForward;
    order?: string;
    redirect?: DefaultActionRedirect;
    target_group_arn?: string;
}
export interface AuthenticateCognito {
    user_pool_arn?: string;
    user_pool_client_id?: string;
    user_pool_domain?: string;
    authentication_request_extra_params?: ParameterClass;
    on_unauthenticated_request?: string;
    scope?: string;
    session_cookie_name?: string;
    session_timeout?: string;
    value?: string;
}
export interface AuthenticateOidc {
    authorization_endpoint?: string;
    client_id?: string;
    client_secret?: string;
    issuer?: string;
    token_endpoint?: string;
    user_info_endpoint?: string;
    authentication_request_extra_params?: string;
    on_unauthenticated_request?: string;
    scope?: string;
    session_cookie_name?: string;
    session_timeout?: string;
}
export interface FixedResponse {
    content_type?: string;
    message_body?: string;
    status_code?: string;
}
export interface DefaultActionForward {
    target_group?: TargetGroup;
    stickiness?: ForwardStickiness;
    weight?: string;
}
export interface ForwardStickiness {
    duration?: string;
    enabled?: string;
}
export interface TargetGroup {
    arn: string;
    weight?: string;
}
export interface DefaultActionRedirect {
    status_code?: string;
    host?: string;
    path?: string;
    port?: string;
    protocol?: string;
    query?: string;
}
export interface LBListenerCertificate {
    listener_arn: string;
    certificate_arn: string;
    id?: string;
}
export interface LBListenerRule {
    listener_arn: string;
    type: string;
    target_group: string;
    arn: string;
    enabled: string;
    status_code: string;
    content_type: string;
    user_pool_arn: string;
    user_pool_client_id: string;
    user_pool_domain: string;
    authorization_endpoint: string;
    client_id: string;
    client_secret: string;
    issuer: string;
    token_endpoint: string;
    user_info_endpoint: string;
    key: string;
    value: string;
    http_header_name: string;
    priority?: string;
    tags?: string;
    target_group_arn?: string;
    forward?: string;
    redirect?: string;
    fixed_response?: string;
    authenticate_cognito?: string;
    authenticate_oidc?: string;
    stickiness?: string;
    weight?: string;
    duration?: string;
    host?: string;
    path?: string;
    port?: string;
    protocol?: string;
    query?: string;
    message_body?: string;
    authentication_request_extra_params?: string;
    on_unauthenticated_request?: string;
    scope?: string;
    session_cookie_name?: string;
    session_timeout?: string;
    host_header?: string;
    http_request_method?: string;
    path_pattern?: string;
    source_ip?: string;
    id?: string;
    tags_all?: string;
}
export interface LBSSLNegotiationPolicy {
    name: string;
    load_balancer: string;
    lb_port: string;
    attribute?: string;
    value?: string;
    triggers?: string;
    id?: string;
}
export interface LBTargetGroup {
    connection_termination?: string;
    deregistration_delay?: string;
    health_check?: LBTargetGroupHealthCheck;
    lambda_multi_value_headers_enabled?: string;
    load_balancing_algorithm_type?: string;
    load_balancing_cross_zone_enabled?: string;
    name_prefix?: string;
    name?: string;
    preserve_client_ip?: string;
    protocol_version?: string;
    proxy_protocol_v2?: string;
    slow_start?: string;
    stickiness?: LBTargetGroupStickiness;
    tags?: string;
    target_failover?: TargetFailover;
    target_type?: string;
    ip_address_type?: string;
    vpc_id?: string;
    arn_suffix?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface LBTargetGroupHealthCheck {
    enabled?: string;
    healthy_threshold?: string;
    interval?: string;
    matcher?: string;
    path?: string;
    port?: string;
    protocol?: string;
    timeout?: string;
    unhealthy_threshold?: string;
}
export interface LBTargetGroupStickiness {
    type: string;
    cookie_duration?: string;
    cookie_name?: string;
    enabled?: string;
}
export interface TargetFailover {
    on_deregistration?: string;
    on_unhealthy?: string;
}
export interface LBTargetGroupAttachment {
    target_group_arn: string;
    target_id: string;
    availability_zone?: string;
    port?: string;
    id?: string;
}
export interface ResourceLexBot {
    abort_statement: string;
    child_directed: string;
    clarification_prompt: string;
    intent: Intent;
    name: string;
    max_attempts: string;
    message: LexBotMessage;
    create_version?: string;
    description?: string;
    detect_sentiment?: string;
    enable_model_improvements?: string;
    idle_session_ttl_in_seconds?: string;
    locale?: string;
    nlu_intent_confidence_threshold?: string;
    process_behavior?: string;
    voice_id?: string;
    response_card?: string;
    checksum?: string;
    created_date?: string;
    failure_reason?: string;
    last_updated_date?: string;
    status?: string;
    version?: string;
}
export interface Intent {
    intent_name?: string;
    intent_version?: string;
}
export interface LexBotMessage {
    content?: string;
    content_type?: string;
    group_number?: string;
}
export interface ResourceLexBotAlias {
    bot_name: string;
    bot_version: string;
    name: string;
    conversation_logs?: ConversationLogs;
    description?: string;
    log_settings?: LogSettings;
    arn?: string;
    checksum?: string;
    created_date?: string;
    last_updated_date?: string;
}
export interface ConversationLogs {
    iam_role_arn: string;
    log_settings?: string;
}
export interface LogSettings {
    destination: string;
    log_type: string;
    resource_arn: string;
    kms_key_arn?: string;
    resource_prefix?: string;
}
export interface ResourceLexIntent {
    fulfillment_activity: FulfillmentActivity;
    conclusion_statement?: string;
    confirmation_prompt?: string;
    create_version?: string;
    dialog_code_hook?: string;
    follow_up_prompt?: FollowUpPrompt;
    parent_intent_signature?: string;
    slot?: Slot;
    code_hook?: CodeHook;
    arn?: string;
    checksum?: string;
    created_date?: string;
    last_updated_date?: string;
    version?: string;
}
export interface CodeHook {
    message_version: string;
    uri: string;
}
export interface FollowUpPrompt {
    prompt: Prompt;
}
export interface Prompt {
    max_attempts?: string;
    message?: PromptMessage;
    response_card?: string;
}
export interface PromptMessage {
    content: string;
    content_type: string;
    group_number?: string;
}
export interface FulfillmentActivity {
    type?: string;
    code_hook?: string;
}
export interface Slot {
    name: string;
    slot_constraint: string;
    description?: string;
    priority?: string;
    response_card?: string;
    sample_utterances?: string;
    slot_type?: string;
    slot_type_version?: string;
    value_elicitation_prompt?: string;
}
export interface ResourceLexSlotType {
    enumeration_value: EnumerationValue;
    name: string;
    create_version?: string;
    description?: string;
    value_selection_strategy?: string;
    checksum?: string;
    created_date?: string;
    last_updated_date?: string;
    version?: string;
}
export interface EnumerationValue {
    synonyms?: string;
    value?: string;
}
export interface Lexv2ModelsBot {
    child_directed: string;
    alias_id: string;
    alias_name: string;
    id: string;
    name: string;
    version: string;
    idle_session_ttl_in_seconds?: string;
    role_arn?: string;
    members?: string;
    bot_tags?: string;
    bot_type?: string;
    description?: string;
    test_bot_alias_tags?: string;
}
export interface LicensemanagerAssociation {
    license_configuration_arn: string;
    resource_arn: string;
    id?: string;
}
export interface LicensemanagerGrant {
    name: string;
    allowed_operations: string;
    license_arn: string;
    principal: string;
    home_region: string;
    id?: string;
    arn?: string;
    parent_arn?: string;
    status?: string;
    version?: string;
}
export interface LicensemanagerGrantAccepter {
    grant_arn: string;
    id?: string;
    arn?: string;
    name?: string;
    allowed_operations?: string;
    license_arn?: string;
    principal?: string;
    home_region?: string;
    parent_arn?: string;
    status?: string;
    version?: string;
}
export interface LicensemanagerLicenseConfiguration {
    name: string;
    license_counting_type: string;
    description?: string;
    license_count?: string;
    license_count_hard_limit?: string;
    license_rules?: string;
    tags?: string;
    arn?: string;
    id?: string;
    owner_account_id?: string;
    tags_all?: string;
}
export interface LightsailBucket {
    name: string;
    bundle_id: string;
    force_delete?: string;
    tags?: string;
    id?: string;
    arn?: string;
    availability_zone?: string;
    created_at?: string;
    region?: string;
    support_code?: string;
    tags_all?: string;
}
export interface LightsailBucketAccessKey {
    bucket_name: string;
    id?: string;
    access_key_id?: string;
    created_at?: string;
    secret_access_key?: string;
    status?: string;
}
export interface LightsailBucketResourceAccess {
    bucket_name: string;
    resource_name: string;
    id?: string;
}
export interface LightsailCertificate {
    name: string;
    domain_name: string;
    subject_alternative_names?: string;
    tags?: string;
    id?: string;
    arn?: string;
    created_at?: string;
    domain_validation_options?: string;
    tags_all?: string;
}
export interface LightsailContainerService {
    name: string;
    power: string;
    scale: string;
    is_disabled?: string;
    public_domain_names?: string;
    private_registry_access?: PrivateRegistryAccess;
    tags?: string;
    arn?: string;
    availability_zone?: string;
    id?: string;
    power_id?: string;
    private_domain_name?: string;
    region_name?: string;
    resource_type?: string;
    state?: string;
    tags_all?: string;
    url?: string;
}
export interface PrivateRegistryAccess {
    ecr_image_puller_role?: EcrImagePullerRole;
}
export interface EcrImagePullerRole {
    is_active?: string;
}
export interface LightsailContainerServiceDeploymentVersion {
    service_name: string;
    container: Container;
    public_endpoint?: PublicEndpoint;
    id?: string;
    created_at?: string;
    state?: string;
    version?: string;
}
export interface Container {
    container_name?: string;
    image?: string;
    command?: string;
    environment?: string;
    ports?: string;
}
export interface PublicEndpoint {
    container_name: string;
    container_port: string;
    health_check: PublicEndpointHealthCheck;
}
export interface PublicEndpointHealthCheck {
    healthy_threshold?: string;
    unhealthy_threshold?: string;
    timeout_seconds?: string;
    interval_seconds?: string;
    path?: string;
    success_codes?: string;
}
export interface LightsailDatabase {
    relational_database_name: string;
    master_database_name: string;
    blueprint_id: string;
    bundle_id: string;
    final_snapshot_name: string;
    availability_zone?: string;
    master_password?: string;
    master_username?: string;
    preferred_backup_window?: string;
    preferred_maintenance_window?: string;
    publicly_accessible?: string;
    apply_immediately?: string;
    backup_retention_enabled?: string;
    skip_final_snapshot?: string;
    tags?: string;
    id?: string;
    arn?: string;
    ca_certificate_identifier?: string;
    created_at?: string;
    engine?: string;
    engine_version?: string;
    cpu_count?: string;
    ram_size?: string;
    disk_size?: string;
    master_endpoint_port?: string;
    master_endpoint_address?: string;
    secondary_availability_zone?: string;
    support_code?: string;
    tags_all?: string;
}
export interface LightsailDisk {
    name: string;
    size_in_gb: string;
    availability_zone: string;
    tags?: string;
    id?: string;
    arn?: string;
    created_at?: string;
    support_code?: string;
    tags_all?: string;
}
export interface LightsailDiskAttachment {
    disk_name: string;
    instance_name: string;
    disk_path: string;
    id?: string;
}
export interface LightsailDistribution {
    bundle_id: string;
    default_cache_behavior: DefaultCacheBehavior;
    origin: Origin;
    cache_behavior_settings: CacheBehaviorSettings;
    cache_behavior?: CacheBehavior;
    certificate_name?: string;
    ip_address_type?: string;
    is_enabled?: string;
    tags?: string;
    alternative_domain_names?: string;
    arn?: string;
    created_at?: string;
    domain_name?: string;
    location?: LightsailDistributionLocation;
    origin_public_dns?: string;
    resource_type?: string;
    status?: string;
    support_code?: string;
    tags_all?: string;
    region_name?: string;
}
export interface CacheBehavior {
    behavior: string;
    path: string;
}
export interface CacheBehaviorSettings {
    allowed_http_methods?: string;
    cached_http_methods?: string;
    default_ttl?: string;
    forwarded_cookies?: ForwardedCookies;
    forwarded_headers?: ForwardedHeaders;
    forwarded_query_strings?: ForwardedQueryStrings;
    maximum_ttl?: string;
    minimum_ttl?: string;
}
export interface ForwardedCookies {
    cookies_allow_list: string;
    option?: string;
}
export interface ForwardedHeaders {
    headers_allow_list: string;
    option?: string;
}
export interface ForwardedQueryStrings {
    query_strings_allowed_list: string;
    option?: string;
}
export interface DefaultCacheBehavior {
    behavior?: string;
}
export interface LightsailDistributionLocation {
    availability_zone?: string;
    region_name?: string;
}
export interface Origin {
    name?: string;
    protocol_policy?: string;
    region_name?: string;
    resource_type?: string;
}
export interface LightsailDomain {
    domain_name: string;
    id?: string;
    arn?: string;
}
export interface LightsailDomainEntry {
    domain_name: string;
    name: string;
    type: string;
    target: string;
    is_alias?: string;
    id?: string;
}
export interface LightsailInstance {
    name: string;
    availability_zone: string;
    blueprint_id: string;
    bundle_id: string;
    key_pair_name?: string;
    user_data?: string;
    ip_address_type?: string;
    add_on?: AddOn;
    tags?: string;
    id?: string;
    arn?: string;
    created_at?: string;
    cpu_count?: string;
    ram_size?: string;
    ipv6_addresses?: string;
    private_ip_address?: string;
    public_ip_address?: string;
    is_static_ip?: string;
    username?: string;
    tags_all?: string;
}
export interface AddOn {
    type: string;
    snapshot_time: string;
    status: string;
}
export interface LightsailInstancePublicPorts {
    instance_name: string;
    port_info: PortInfo;
    id?: string;
}
export interface PortInfo {
    from_port?: string;
    protocol?: string;
    to_port?: string;
    cidrs?: string;
    cidr_list_aliases?: string;
}
export interface LightsailKeyPair {
    public_key: string;
    name?: string;
    pgp_key?: string;
    tags?: string;
    id?: string;
    arn?: string;
    encrypted_fingerprint?: string;
    encrypted_private_key?: string;
    fingerprint?: string;
    private_key?: string;
}
export interface LightsailLB {
    name: string;
    instance_port: string;
    health_check_path?: string;
    tags?: string;
    id?: string;
    arn?: string;
    created_at?: string;
    dns_name?: string;
    protocol?: string;
    public_ports?: string;
    support_code?: string;
    tags_all?: string;
}
export interface LightsailLBAttachment {
    lb_name: string;
    instance_name: string;
    id?: string;
}
export interface LightsailLBCertificate {
    domain_name: string;
    lb_name: string;
    name: string;
    subject_alternative_names?: string;
    id?: string;
    arn?: string;
    created_at?: string;
    domain_validation_options?: string;
}
export interface LightsailLBCertificateAttachment {
    lb_name: string;
    certificate_name: string;
    id?: string;
}
export interface LightsailLBHTTPSRedirectionPolicy {
    lb_name: string;
    enabled: string;
    id?: string;
}
export interface LightsailLBStickinessPolicy {
    lb_name: string;
    cookie_duration: string;
    enabled: string;
    id?: string;
}
export interface LightsailStaticIP {
    name: string;
    arn?: string;
    ip_address?: string;
    support_code?: string;
}
export interface LightsailStaticIPAttachment {
    static_ip_name: string;
    instance_name: string;
    ip_address?: string;
}
export interface LoadBalancerBackendServerPolicy {
    load_balancer_name: string;
    policy_names: string;
    instance_port: string;
    id?: string;
}
export interface LoadBalancerListenerPolicy {
    load_balancer_name: string;
    load_balancer_port: string;
    policy_names: string;
    triggers?: string;
    id?: string;
}
export interface LoadBalancerPolicy {
    load_balancer_name: string;
    policy_name: string;
    policy_type_name: string;
    policy_attribute?: string;
    id?: string;
}
export interface ResourceLocationMap {
    configuration: LocationMapConfiguration;
    map_name: string;
    description?: string;
    tags?: string;
    create_time?: string;
    map_arn?: string;
    tags_all?: string;
    update_time?: string;
}
export interface LocationMapConfiguration {
    style?: string;
}
export interface ResourceLocationPlaceIndex {
    data_source: string;
    index_name: string;
    data_source_configuration?: DataSourceConfiguration;
    description?: string;
    tags?: string;
    create_time?: string;
    index_arn?: string;
    tags_all?: string;
    update_time?: string;
}
export interface DataSourceConfiguration {
    intended_use?: string;
}
export interface ResourceLocationRouteCalculator {
    calculator_name: string;
    data_source: string;
    description?: string;
    tags?: string;
    calculator_arn?: string;
    create_time?: string;
    update_time?: string;
    tags_all?: string;
}
export interface ResourceLocationTracker {
    tracker_name: string;
    description?: string;
    kms_key_id?: string;
    position_filtering?: string;
    tags?: string;
    create_time?: string;
    tags_all?: string;
    tracker_arn?: string;
    update_time?: string;
}
export interface Macie2Account {
    finding_publishing_frequency?: string;
    status?: string;
    id?: string;
    service_role?: string;
    created_at?: string;
    updated_at?: string;
}
export interface Macie2ClassificationExportConfiguration {
    s3_destination: string;
    bucket_name: string;
    kms_key_arn: string;
    key_prefix?: string;
    id?: string;
}
export interface Macie2ClassificationJob {
    job_type: string;
    comparator: string;
    key: string;
    values: string;
    value: string;
    account_id: string;
    buckets: string;
    target: string;
    custom_data_identifier_ids?: string;
    sampling_percentage?: string;
    name?: string;
    name_prefix?: string;
    description?: string;
    initial_run?: string;
    tags?: string;
    job_status?: string;
    daily_schedule?: string;
    weekly_schedule?: string;
    monthly_schedule?: string;
    tag_values?: string;
    id?: string;
    created_at?: string;
    user_paused_details?: string;
}
export interface Macie2CustomDataIdentifier {
    regex?: string;
    keywords?: string;
    ignore_words?: string;
    name?: string;
    name_prefix?: string;
    description?: string;
    maximum_match_distance?: string;
    tags?: string;
    id?: string;
    deleted?: string;
    created_at?: string;
    arn?: string;
}
export interface Macie2FindingsFilter {
    finding_criteria: string;
    action: string;
    field: string;
    name?: string;
    name_prefix?: string;
    description?: string;
    position?: string;
    tags?: string;
    eq_exact_match?: string;
    eq?: string;
    neq?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    id?: string;
    arn?: string;
}
export interface Macie2InvitationAccepter {
    administrator_account_id: string;
    id?: string;
    invitation_id?: string;
}
export interface Macie2Member {
    account_id: string;
    email: string;
    tags?: string;
    status?: string;
    invite?: string;
    invitation_message?: string;
    invitation_disable_email_notification?: string;
    id?: string;
    arn?: string;
    relationship_status?: string;
    administrator_account_id?: string;
    invited_at?: string;
    updated_at?: string;
}
export interface MainRouteTableAssociation {
    vpc_id: string;
    route_table_id: string;
    id?: string;
    original_route_table_id?: string;
}
export interface MediaConvertQueue {
    name: string;
    commitment: string;
    renewal_type: string;
    reserved_slots: string;
    description?: string;
    pricing_plan?: string;
    reservation_plan_settings?: string;
    status?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface MediaPackageChannel {
    channel_id: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    hls_ingest?: string;
    ingest_endpoints?: string;
    password?: string;
    url?: string;
    username?: string;
    tags_all?: string;
}
export interface MediaStoreContainer {
    name: string;
    tags?: string;
    arn?: string;
    endpoint?: string;
    tags_all?: string;
}
export interface MediaStoreContainerPolicy {
    container_name: string;
    policy: string;
}
export interface MedialiveChannel {
    channel_class: string;
    destinations: MedialiveChannelDestinations;
    encoder_settings: EncoderSettings;
    input_specification: string;
    resolution: string;
    track: string;
    height: string;
    left_offset: string;
    top_offset: string;
    width: string;
    bitrate: string;
    framerate_denominator: string;
    framerate_numerator: string;
    destination_ref_id: string;
    cdi_input_specification?: CdiInputSpecification;
    input_attachments?: InputAttachments;
    log_level?: string;
    maintenance?: Maintenance;
    role_arn?: string;
    start_channel?: string;
    tags?: string;
    vpc?: string;
    source_end_behavior?: string;
    audio_hls_rendition_selection?: AudioHLSRenditionSelection;
    audio_language_selection?: AudioLanguageSelection;
    audio_pid_selection?: AudioPIDSelection;
    audio_track_selection?: AudioTrackSelection;
    ancillary_source_settings?: AncillarySourceSettings;
    arib_source_settings?: string;
    dvb_sub_source_settings?: DvbSubSourceSettings;
    embedded_source_settings?: EmbeddedSourceSettings;
    scte20_source_settings?: string;
    scte27_source_settings?: string;
    teletext_source_settings?: TeletextSourceSettings;
    pid?: string;
    server_validation?: string;
    bandwidth?: string;
    buffer_segments?: string;
    retries?: string;
    retry_interval?: string;
    scte35_source_type?: string;
    audio_silence_settings?: string;
    input_loss_settings?: string;
    video_black_settings?: string;
    audio_silence_threshold_msec?: string;
    input_loss_threshold_msec?: string;
    black_detect_threshold?: string;
    video_black_threshold_msec?: string;
    maintenance_start_time?: string;
    username?: string;
    aac_settings?: AACSettings;
    ac3_settings?: Ac3Settings;
    eac3_atmos_settings?: Eac3AtmosSettings;
    eac3_settings?: Eac3Settings;
    coding_mode?: string;
    profile?: string;
    metadata_control?: string;
    surround_trim?: string;
    nielsen_cbet_settings?: NielsenCbetSettings;
    nielsen_distribution_type?: string;
    nielsen_naes_ii_nw_settings?: NielsenNaesIiNwSettings;
    frame_capture_settings?: FrameCaptureSettings;
    h264_settings?: H264Settings;
    capture_interval_units?: string;
    level?: string;
    timecode_insertion?: string;
    temporal_filter_settings?: TemporalFilterSettings;
    alternative_transfer_function?: string;
    color_space_settings?: string;
    tier?: string;
    timecode_burnin_settings?: string;
    color_space_passthrough_settings?: string;
    dolby_vision81_settings?: string;
    hdr10_settings?: string;
    rec601_settings?: string;
    rec709_settings?: string;
    max_cll?: string;
    max_fall?: string;
    timecode_burnin_font_size?: string;
    timecode_burnin_position?: string;
    prefix?: string;
    strength?: string;
    alignment?: string;
    background_color?: string;
    background_opacity?: string;
    font?: Font;
    font_color?: string;
    font_opacity?: string;
    font_resolution?: string;
    font_size?: string;
    outline_color?: string;
    outline_size?: string;
    shadow_color?: string;
    shadow_opacity?: string;
    shadow_x_offset?: string;
    shadow_y_offset?: string;
    teletext_grid_control?: string;
    x_position?: string;
    y_position?: string;
    copyright_holder?: string;
    fill_line_gap?: string;
    font_family?: string;
    style_control?: string;
    html_motion_graphics_settings?: string;
    nielsen_pcm_to_id3_tagging?: string;
    archive_cdn_settings?: ArchiveCDNSettings;
    rollover_interval?: string;
    ad_markers?: string;
    authentication_scheme?: string;
    cache_full_behavior?: string;
    cache_length?: string;
    caption_data?: string;
    input_loss_action?: string;
    restart_delay?: string;
    timed_metadata_id3_frame?: string;
    archive_output_settings?: ArchiveOutputSettings;
    media_package_output_settings?: string;
    multiplex_output_settings?: MultiplexOutputSettings;
    udp_output_settings?: UDPOutputSettings;
    column_depth?: string;
    include_fec?: string;
    row_length?: string;
    arn?: string;
    channel_id?: string;
}
export interface AACSettings {
    bitrate?: string;
    coding_mode?: string;
    input_type?: string;
    profile?: string;
    rate_control_mode?: string;
    raw_format?: string;
    sample_rate?: string;
    spec?: string;
    vbr_quality?: string;
}
export interface Ac3Settings {
    bitrate?: string;
    bitstream_mode?: string;
    coding_mode?: string;
    dialnorm?: string;
    drc_profile?: string;
    lfe_filter?: string;
    metadata_control?: string;
}
export interface AncillarySourceSettings {
    source_ancillary_channel_number?: string;
}
export interface ArchiveCDNSettings {
    archive_s3_settings?: ArchiveS3Settings;
}
export interface ArchiveS3Settings {
    canned_acl?: string;
}
export interface ArchiveOutputSettings {
    container_settings: ContainerSettings;
    extension?: string;
    name_modifier?: string;
}
export interface ContainerSettings {
    m2ts_settings?: string;
}
export interface AudioHLSRenditionSelection {
    group_id: string;
    name: string;
}
export interface AudioLanguageSelection {
    language_code: string;
    language_selection_policy?: string;
}
export interface AudioPIDSelection {
    pid: string;
}
export interface AudioTrackSelection {
    tracks: string;
    dolby_e_decode?: DolbyEDecode;
}
export interface DolbyEDecode {
    program_selection: string;
}
export interface CdiInputSpecification {
    resolution: string;
}
export interface MedialiveChannelDestinations {
    id?: string;
    media_package_settings?: MediaPackageSettings;
    multiplex_settings?: MultiplexSettings;
    settings?: DestinationsSettings;
}
export interface MediaPackageSettings {
    channel_id?: string;
}
export interface MultiplexSettings {
    multiplex_id?: string;
    program_name?: string;
}
export interface DestinationsSettings {
    password_param?: string;
    stream_name?: string;
    url?: string;
    username?: string;
}
export interface DvbSubSourceSettings {
    ocr_language?: string;
    pid?: string;
}
export interface Eac3AtmosSettings {
    bitrate?: string;
    coding_mode?: string;
    dialnorm?: string;
    drc_line?: string;
    drc_rf?: string;
    height_trim?: string;
    surround_trim?: string;
}
export interface Eac3Settings {
    attenuation_control?: string;
    bitrate?: string;
    bitstream_mode?: string;
    coding_mode?: string;
}
export interface EmbeddedSourceSettings {
    convert_608_to_708?: string;
    scte20_detection?: string;
    source_608_channel_number?: string;
}
export interface EncoderSettings {
    audio_descriptions?: AudioDescriptions;
    output_groups?: OutputGroups;
    timecode_config?: TimecodeConfig;
    video_descriptions?: VideoDescriptions;
    caption_descriptions?: CaptionDescriptions;
    global_configuration?: GlobalConfiguration;
    motion_graphics_configuration?: MotionGraphicsConfiguration;
    nielsen_configuration?: NielsenConfiguration;
    avail_blanking?: AvailBlanking;
}
export interface AudioDescriptions {
    audio_selector_name: string;
    name: string;
    audio_normalization_settings?: AudioNormalizationSettings;
    audio_type?: string;
    audio_type_control?: string;
    audio_watermark_settings?: AudioWatermarkSettings;
    codec_settings?: string;
}
export interface AudioNormalizationSettings {
    algorithm?: string;
    algorithm_control?: string;
    target_lkfs?: string;
}
export interface AudioWatermarkSettings {
    nielsen_watermark_settings?: NielsenWatermarkSettings;
}
export interface NielsenWatermarkSettings {
    nielsen_distribution_type?: string;
}
export interface AvailBlanking {
    avail_blanking_image?: AvailBlankingImage;
    state?: string;
}
export interface AvailBlankingImage {
    password_param?: string;
    uri?: string;
    username?: string;
}
export interface CaptionDescriptions {
    accessibility?: string;
    caption_selector_name?: string;
    destination_settings?: DestinationSettings;
    language_code?: string;
    language_description?: string;
    name?: string;
}
export interface DestinationSettings {
    arib_destination_settings?: string;
    burn_in_destination_settings?: BurnInDestinationSettingsClass;
    dvb_sub_destination_settings?: BurnInDestinationSettingsClass;
    ebu_tt_d_destination_settings?: EbuTtDDestinationSettings;
    embedded_destination_settings?: string;
    embedded_plus_scte20_destination_settings?: string;
    rtmp_caption_info_destination_settings?: string;
    scte20_plus_embedded_destination_settings?: string;
    scte27_destination_settings?: string;
    smpte_tt_destination_settings?: string;
    teletext_destination_settings?: string;
    ttml_destination_settings?: TtmlDestinationSettingsClass;
    webvtt_destination_settings?: TtmlDestinationSettingsClass;
}
export interface BurnInDestinationSettingsClass {
    alignment?: string;
    background_color?: string;
    background_opacity?: string;
    font_color?: string;
    font_opacity?: string;
    font_resolution?: string;
    font_size?: string;
    outline_color?: string;
    outline_size?: string;
    shadow_color?: string;
    shadow_opacity?: string;
    shadow_x_offset?: string;
    shadow_y_offset?: string;
    teletext_grid_control?: string;
    x_position?: string;
    y_position?: string;
}
export interface EbuTtDDestinationSettings {
    copyright_holder?: string;
    fill_line_gap?: string;
    font_family?: string;
    style_control?: string;
}
export interface TtmlDestinationSettingsClass {
    style_control?: string;
}
export interface GlobalConfiguration {
    initial_audio_gain?: string;
    input_end_action?: string;
    input_loss_behavior?: AvailBlankingImage;
    output_locking_mode?: string;
    output_timing_source?: string;
    support_low_framerate_inputs?: string;
}
export interface MotionGraphicsConfiguration {
    motion_graphics_insertion?: string;
}
export interface NielsenConfiguration {
    distributor_id?: string;
    nielsen_pcm_to_id3_tagging?: string;
}
export interface OutputGroups {
    output_group_settings: OutputGroupSettings;
    outputs: OutputGroupsOutputs;
    name?: string;
}
export interface OutputGroupSettings {
    archive_group_settings?: ArchiveGroupSettings;
    media_package_group_settings?: KmsSecretClass;
    multiplex_group_sttings?: string;
    rtmp_group_settings?: RtmpGroupSettings;
    udp_group_sttings?: string;
}
export interface ArchiveGroupSettings {
    rollover_interval?: string;
}
export interface RtmpGroupSettings {
    ad_markers?: string;
    authentication_scheme?: string;
    cache_full_behavior?: string;
    cache_length?: string;
    caption_data?: string;
    input_loss_action?: string;
    restart_delay?: string;
}
export interface OutputGroupsOutputs {
    output_settings?: OutputSettings;
    audio_description_names?: string;
    caption_description_names?: string;
    output_name?: string;
    video_description_name?: string;
}
export interface OutputSettings {
    media_package_output_settings?: string;
}
export interface TimecodeConfig {
    source?: string;
    sync_threshold?: string;
}
export interface VideoDescriptions {
    name: string;
    codec_settings?: string;
    height?: string;
    respond_to_afd?: string;
    scaling_behavior?: string;
    sharpness?: string;
    width?: string;
}
export interface Font {
    uri: string;
    password_param?: string;
    username?: string;
}
export interface FrameCaptureSettings {
    capture_interval?: string;
    capture_interval_units?: string;
}
export interface H264Settings {
    adaptive_quantization?: string;
    afd_signaling?: string;
    bitrate?: string;
    buf_fil_pct?: string;
    buf_size?: string;
    color_metadata?: string;
    entropy_encoding?: string;
    filter_settings?: string;
    fixed_afd?: string;
    flicer_aq?: string;
    force_field_pictures?: string;
    framerate_control?: string;
    framerate_denominator?: string;
    framerate_numerator?: string;
    gop_b_reference?: string;
    gop_closed_cadence?: string;
    gop_num_b_frames?: string;
    gop_size?: string;
    gop_size_units?: string;
    level?: string;
    look_ahead_rate_control?: string;
    max_bitrate?: string;
    min_interval?: string;
    num_ref_frames?: string;
    par_control?: string;
    par_denominator?: string;
    par_numerator?: string;
    profile?: string;
    quality_level?: string;
    qvbr_quality_level?: string;
    rate_control_mode?: string;
    scan_type?: string;
    scene_change_detect?: string;
    slices?: string;
    softness?: string;
    spatial_aq?: string;
    subgop_length?: string;
    syntax?: string;
    temporal_aq?: string;
    timecode_insertion?: string;
}
export interface InputAttachments {
    input_id: string;
    input_attachment_name?: string;
    input_settings?: InputSettings;
    automatic_input_failover_settings?: AutomaticInputFailoverSettings;
}
export interface AutomaticInputFailoverSettings {
    secondary_input_id: string;
    error_clear_time_msec?: string;
    failover_conditions?: FailoverConditions;
    input_preference?: string;
}
export interface FailoverConditions {
    failover_condition_settings?: FailoverConditionSettings;
}
export interface FailoverConditionSettings {
    audio_silence_settings?: string;
    input_loss_settings?: string;
    video_black_settings?: string;
}
export interface InputSettings {
    audio_selectors?: AudioSelectors;
    caption_selectors?: CaptionSelectors;
    deblock_filter?: string;
    denoise_filter?: string;
    filter_strength?: string;
    input_filter?: string;
    network_input_settings?: NetworkInputSettings;
    scte35_pid?: string;
    smpte2038_data_preference?: string;
    source_end_behavior?: string;
}
export interface AudioSelectors {
    name: string;
    selector_settings?: string;
}
export interface CaptionSelectors {
    name?: string;
    language_code?: string;
    selector_settings?: string;
}
export interface NetworkInputSettings {
    hls_input_settings?: HLSInputSettings;
    server_validation?: string;
}
export interface HLSInputSettings {
    bandwidth?: string;
    buffer_segments?: string;
    retries?: string;
    retry_interval?: string;
    scte35_source_type?: string;
}
export interface Maintenance {
    maintenance_day?: string;
    maintenance_start_time?: string;
}
export interface MultiplexOutputSettings {
    destination: MultiplexOutputSettingsDestination;
}
export interface MultiplexOutputSettingsDestination {
    destination_ref_id?: string;
}
export interface NielsenCbetSettings {
    cbet_check_digit: string;
    cbet_stepaside: string;
    csid: string;
}
export interface NielsenNaesIiNwSettings {
    check_digit: string;
    sid: string;
}
export interface TeletextSourceSettings {
    output_rectangle?: string;
    page_number?: string;
}
export interface TemporalFilterSettings {
    post_filter_sharpening?: string;
    strength?: string;
}
export interface UDPOutputSettings {
    buffer_msec?: string;
}
export interface MedialiveInput {
    name: string;
    input_security_groups: string;
    type: string;
    destinations?: MedialiveInputDestinations;
    input_devices?: RAMSharingWithOrganization;
    media_connect_flows?: MediaConnectFlows;
    role_arn?: string;
    sources?: Sources;
    vpc?: VpcClass;
    id?: string;
    flow_arn?: string;
    username?: string;
    arn?: string;
    attached_channels?: string;
    input_class?: string;
    input_partner_ids?: string;
    input_source_type?: string;
}
export interface MedialiveInputDestinations {
    stream_name?: string;
}
export interface RAMSharingWithOrganization {
    id?: string;
}
export interface MediaConnectFlows {
    flow_arn?: string;
}
export interface Sources {
    password_param?: string;
    url?: string;
    username?: string;
}
export interface MedialiveInputSecurityGroup {
    whitelist_rules: WhitelistRules;
    cidr: string;
    tags?: string;
    id?: string;
    arn?: string;
    inputs?: string;
}
export interface WhitelistRules {
    cidr?: string;
}
export interface MedialiveMultiplex {
    availability_zones: string;
    name: string;
    transport_stream_bitrate: string;
    transport_stream_id: string;
    start_multiplex?: string;
    tags?: string;
    transport_stream_reserved_bitrate?: string;
    maximum_video_buffer_delay_milliseconds?: string;
    arn?: string;
}
export interface MedialiveMultiplexProgram {
    multiplex_id: string;
    program_name: string;
    multiplex_program_settings: string;
    program_number: string;
    preferred_channel_pipeline: string;
    service_name: string;
    service_descriptor?: ServiceDescriptor;
    video_settings?: VideoSettings;
    priority?: string;
    id?: string;
    example_attribute?: string;
}
export interface ServiceDescriptor {
    provider_name: string;
    service_name: string;
}
export interface VideoSettings {
    constant_bitrate?: string;
    statmux_settings?: StatmuxSettings;
}
export interface StatmuxSettings {
    minimum_bitrate?: string;
    maximum_bitrate?: string;
    priority?: string;
}
export interface ResourceMemorydbACL {
    name?: string;
    name_prefix?: string;
    user_names?: string;
    tags?: string;
    id?: string;
    arn?: string;
    minimum_engine_version?: string;
    tags_all?: string;
}
export interface ResourceMemorydbCluster {
    acl_name: string;
    node_type: string;
    auto_minor_version_upgrade?: string;
    data_tiering?: string;
    description?: string;
    engine_version?: string;
    final_snapshot_name?: string;
    kms_key_arn?: string;
    maintenance_window?: string;
    name?: string;
    name_prefix?: string;
    num_replicas_per_shard?: string;
    num_shards?: string;
    parameter_group_name?: string;
    port?: string;
    security_group_ids?: string;
    snapshot_arns?: string;
    snapshot_name?: string;
    snapshot_retention_limit?: string;
    snapshot_window?: string;
    sns_topic_arn?: string;
    subnet_group_name?: string;
    tags?: string;
    tls_enabled?: string;
    id?: string;
    arn?: string;
    cluster_endpoint?: string;
    address?: string;
    engine_patch_version?: string;
    shards?: string;
    num_nodes?: string;
    slots?: string;
    nodes?: string;
    availability_zone?: string;
    create_time?: string;
    endpoint?: string;
    tags_all?: string;
}
export interface ResourceMemorydbParameterGroup {
    family: string;
    name: string;
    value: string;
    name_prefix?: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceMemorydbSnapshot {
    cluster_name: string;
    name?: string;
    name_prefix?: string;
    kms_key_arn?: string;
    tags?: string;
    id?: string;
    arn?: string;
    cluster_configuration?: string;
    description?: string;
    engine_version?: string;
    maintenance_window?: string;
    node_type?: string;
    num_shards?: string;
    parameter_group_name?: string;
    port?: string;
    snapshot_retention_limit?: string;
    snapshot_window?: string;
    subnet_group_name?: string;
    topic_arn?: string;
    vpc_id?: string;
    source?: string;
    tags_all?: string;
}
export interface ResourceMemorydbSubnetGroup {
    subnet_ids: string;
    name?: string;
    name_prefix?: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    vpc_id?: string;
    tags_all?: string;
}
export interface ResourceMemorydbUser {
    access_string: string;
    user_name: string;
    passwords: string;
    type: string;
    tags?: string;
    id?: string;
    arn?: string;
    minimum_engine_version?: string;
    authentication_mode?: string;
    password_count?: string;
    tags_all?: string;
}
export interface ResourceMqBroker {
    broker_name: string;
    engine_type: string;
    engine_version: string;
    host_instance_type: string;
    user: User;
    apply_immediately?: string;
    authentication_strategy?: string;
    auto_minor_version_upgrade?: string;
    configuration?: MqBrokerConfiguration;
    deployment_mode?: string;
    encryption_options?: EncryptionOptions;
    ldap_server_metadata?: LDAPServerMetadata;
    logs?: Logs;
    maintenance_window_start_time?: MaintenanceWindowStartTime;
    publicly_accessible?: string;
    security_groups?: string;
    storage_type?: string;
    subnet_ids?: string;
    tags?: string;
    revision?: string;
    arn?: string;
    id?: string;
    instances?: string;
    tags_all?: string;
}
export interface MqBrokerConfiguration {
    id?: string;
    revision?: string;
}
export interface EncryptionOptions {
    kms_key_id?: string;
    use_aws_owned_key?: string;
}
export interface LDAPServerMetadata {
    hosts?: string;
    role_base?: string;
    role_name?: string;
    role_search_matching?: string;
    role_search_subtree?: string;
    service_account_password?: string;
    service_account_username?: string;
    user_base?: string;
    user_role_name?: string;
    user_search_matching?: string;
    user_search_subtree?: string;
}
export interface Logs {
    audit?: string;
    general?: string;
}
export interface MaintenanceWindowStartTime {
    day_of_week: string;
    time_of_day: string;
    time_zone: string;
}
export interface User {
    console_access?: string;
    groups?: string;
    password?: string;
    replication_user?: string;
    username?: string;
}
export interface MqConfiguration {
    data: string;
    engine_type: string;
    engine_version: string;
    name: string;
    authentication_strategy?: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    latest_revision?: string;
    tags_all?: string;
}
export interface ResourceMskCluster {
    broker_node_group_info: string;
    cluster_name: string;
    kafka_version: string;
    number_of_broker_nodes: string;
    client_subnets: string;
    instance_type: string;
    security_groups: string;
    arn: string;
    revision: string;
    prometheus: string;
    enabled_in_broker: string;
    broker_logs: string;
    client_authentication?: string;
    configuration_info?: string;
    encryption_info?: string;
    enhanced_monitoring?: string;
    open_monitoring?: string;
    logging_info?: string;
    tags?: string;
    az_distribution?: string;
    connectivity_info?: string;
    storage_info?: string;
    public_access?: string;
    vpc_connectivity?: string;
    type?: string;
    sasl?: string;
    tls?: string;
    iam?: string;
    scram?: string;
    ebs_storage_info?: string;
    provisioned_throughput?: string;
    volume_size?: string;
    enabled?: string;
    volume_throughput?: string;
    unauthenticated?: string;
    certificate_authority_arns?: string;
    encryption_in_transit?: string;
    encryption_at_rest_kms_key_arn?: string;
    client_broker?: string;
    in_cluster?: string;
    jmx_exporter?: string;
    node_exporter?: string;
    log_group?: string;
    delivery_stream?: string;
    bucket?: string;
    prefix?: string;
    bootstrap_brokers?: string;
    bootstrap_brokers_public_sasl_iam?: string;
    bootstrap_brokers_public_sasl_scram?: string;
    bootstrap_brokers_public_tls?: string;
    bootstrap_brokers_sasl_iam?: string;
    bootstrap_brokers_sasl_scram?: string;
    bootstrap_brokers_tls?: string;
    bootstrap_brokers_vpc_connectivity_sasl_iam?: string;
    bootstrap_brokers_vpc_connectivity_sasl_scram?: string;
    bootstrap_brokers_vpc_connectivity_tls?: string;
    current_version?: string;
    tags_all?: string;
    storage_mode?: string;
    zookeeper_connect_string?: string;
    zookeeper_connect_string_tls?: string;
}
export interface MskClusterPolicy {
    cluster_arn: string;
    policy: string;
    id?: string;
}
export interface ResourceMskConfiguration {
    server_properties: string;
    kafka_versions: string;
    name: string;
    description?: string;
    arn?: string;
    latest_revision?: string;
}
export interface MskScramSecretAssociation {
    cluster_arn: string;
    secret_arn_list: string;
    id?: string;
}
export interface MskServerlessCluster {
    client_authentication: string;
    cluster_name: string;
    vpc_config: string;
    sasl: string;
    iam: string;
    enabled: string;
    subnet_ids: string;
    tags?: string;
    security_group_ids?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceMskVpcConnection {
    authentication: string;
    client_subnets: string;
    security_groups: string;
    target_cluster_arn: string;
    vpc_id: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceMskconnectConnector {
    capacity: string;
    connector_configuration: string;
    kafka_cluster: string;
    kafka_cluster_client_authentication: string;
    kafka_cluster_encryption_in_transit: string;
    kafkaconnect_version: string;
    name: string;
    plugin: string;
    service_execution_role_arn: string;
    max_worker_count: string;
    min_worker_count: string;
    cpu_utilization_percentage: string;
    worker_count: string;
    apache_kafka_cluster: string;
    bootstrap_servers: string;
    vpc: string;
    security_groups: string;
    subnets: string;
    worker_log_delivery: string;
    log_group: string;
    enabled: string;
    custom_plugin: string;
    arn: string;
    revision: string;
    description?: string;
    log_delivery?: string;
    worker_configuration?: string;
    autoscaling?: string;
    provisioned_capacity?: string;
    mcu_count?: string;
    scale_in_policy?: string;
    scale_out_policy?: string;
    authentication_type?: string;
    encryption_type?: string;
    cloudwatch_logs?: string;
    firehose?: string;
    s3?: string;
    delivery_stream?: string;
    bucket?: string;
    prefix?: string;
    version?: string;
}
export interface ResourceMskconnectCustomPlugin {
    name: string;
    content_type: string;
    location: string;
    s3: string;
    bucket_arn: string;
    file_key: string;
    description?: string;
    object_version?: string;
    arn?: string;
    latest_revision?: string;
    state?: string;
}
export interface ResourceMskconnectWorkerConfiguration {
    name: string;
    properties_file_content: string;
    description?: string;
    arn?: string;
    latest_revision?: string;
}
export interface MwaaEnvironment {
    dag_s3_path: string;
    execution_role_arn: string;
    name: string;
    network_configuration: VpcClass;
    source_bucket_arn: string;
    enabled: string;
    airflow_configuration_options?: string;
    airflow_version?: string;
    environment_class?: string;
    kms_key?: string;
    logging_configuration?: string;
    max_workers?: string;
    min_workers?: string;
    plugins_s3_object_version?: string;
    plugins_s3_path?: string;
    requirements_s3_object_version?: string;
    requirements_s3_path?: string;
    schedulers?: string;
    startup_script_s3_object_version?: string;
    startup_script_s3_path?: string;
    webserver_access_mode?: string;
    weekly_maintenance_window_start?: string;
    tags?: string;
    dag_processing_logs?: string;
    scheduler_logs?: string;
    task_logs?: string;
    webserver_logs?: string;
    worker_logs?: string;
    log_level?: string;
    arn?: string;
    created_at?: string;
    service_role_arn?: string;
    status?: string;
    tags_all?: string;
    webserver_url?: string;
}
export interface ResourceNatGateway {
    subnet_id: string;
    allocation_id?: string;
    connectivity_type?: string;
    private_ip?: string;
    secondary_allocation_ids?: string;
    secondary_private_ip_address_count?: string;
    secondary_private_ip_addresses?: string;
    tags?: string;
    association_id?: string;
    id?: string;
    network_interface_id?: string;
    public_ip?: string;
    tags_all?: string;
}
export interface NeptuneCluster {
    allow_major_version_upgrade?: string;
    apply_immediately?: string;
    availability_zones?: string;
    backup_retention_period?: string;
    cluster_identifier?: string;
    cluster_identifier_prefix?: string;
    copy_tags_to_snapshot?: string;
    enable_cloudwatch_logs_exports?: string;
    engine?: string;
    engine_version?: string;
    final_snapshot_identifier?: string;
    global_cluster_identifier?: string;
    iam_roles?: string;
    iam_database_authentication_enabled?: string;
    kms_key_arn?: string;
    neptune_subnet_group_name?: string;
    neptune_cluster_parameter_group_name?: string;
    neptune_instance_parameter_group_name?: string;
    preferred_backup_window?: string;
    preferred_maintenance_window?: string;
    port?: string;
    replication_source_identifier?: string;
    skip_final_snapshot?: string;
    snapshot_identifier?: string;
    storage_encrypted?: string;
    tags?: string;
    vpc_security_group_ids?: string;
    deletion_protection?: string;
    serverless_v2_scaling_configuration?: string;
    arn?: string;
    cluster_resource_id?: string;
    cluster_members?: string;
    endpoint?: string;
    hosted_zone_id?: string;
    id?: string;
    reader_endpoint?: string;
    status?: string;
    tags_all?: string;
}
export interface NeptuneClusterEndpoint {
    cluster_identifier: string;
    cluster_endpoint_identifier: string;
    endpoint_type: string;
    excluded_members?: string;
    static_members?: string;
    tags?: string;
    arn?: string;
    endpoint?: string;
    id?: string;
    tags_all?: string;
}
export interface NeptuneClusterInstance {
    cluster_identifier: string;
    instance_class: string;
    neptune_subnet_group_name: string;
    apply_immediately?: string;
    auto_minor_version_upgrade?: string;
    availability_zone?: string;
    engine?: string;
    engine_version?: string;
    identifier?: string;
    identifier_prefix?: string;
    neptune_parameter_group_name?: string;
    port?: string;
    preferred_backup_window?: string;
    preferred_maintenance_window?: string;
    promotion_tier?: string;
    publicly_accessible?: string;
    tags?: string;
    address?: string;
    arn?: string;
    dbi_resource_id?: string;
    endpoint?: string;
    id?: string;
    kms_key_arn?: string;
    storage_encrypted?: string;
    tags_all?: string;
    writer?: string;
}
export interface NeptuneClusterSnapshot {
    db_cluster_identifier: string;
    db_cluster_snapshot_identifier: string;
    allocated_storage?: string;
    availability_zones?: string;
    db_cluster_snapshot_arn?: string;
    engine?: string;
    engine_version?: string;
    kms_key_id?: string;
    license_model?: string;
    port?: string;
    source_db_cluster_snapshot_identifier?: string;
    storage_encrypted?: string;
    status?: string;
    vpc_id?: string;
}
export interface NeptuneEventSubscription {
    sns_topic_arn: string;
    enabled?: string;
    event_categories?: string;
    name?: string;
    name_prefix?: string;
    source_ids?: string;
    source_type?: string;
    tags?: string;
    id?: string;
    arn?: string;
    customer_aws_id?: string;
    tags_all?: string;
}
export interface NeptuneGlobalCluster {
    global_cluster_identifier: string;
    deletion_protection?: string;
    engine?: string;
    engine_version?: string;
    source_db_cluster_identifier?: string;
    storage_encrypted?: string;
    create?: string;
    update?: string;
    delete?: string;
    arn?: string;
    global_cluster_members?: string;
    db_cluster_arn?: string;
    is_writer?: string;
    global_cluster_resource_id?: string;
    id?: string;
}
export interface NeptuneParameterGroup {
    name: string;
    family: string;
    value: string;
    description?: string;
    parameter?: string;
    tags?: string;
    apply_method?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface NetworkACL {
    vpc_id: string;
    from_port: string;
    to_port: string;
    rule_no: string;
    action: string;
    protocol: string;
    subnet_ids?: string;
    ingress?: string;
    egress?: string;
    tags?: string;
    cidr_block?: string;
    ipv6_cidr_block?: string;
    icmp_type?: string;
    icmp_code?: string;
    id?: string;
    arn?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface NetworkACLAssociation {
    network_acl_id: string;
    subnet_id: string;
    id?: string;
}
export interface NetworkACLRule {
    network_acl_id: string;
    rule_number: string;
    protocol: string;
    rule_action: string;
    egress?: string;
    cidr_block?: string;
    ipv6_cidr_block?: string;
    from_port?: string;
    to_port?: string;
    icmp_type?: string;
    icmp_code?: string;
    id?: string;
}
export interface ResourceNetworkInterface {
    subnet_id: string;
    device_index: string;
    attachment?: Attachment;
    description?: string;
    interface_type?: string;
    ipv4_prefix_count?: string;
    ipv4_prefixes?: string;
    ipv6_address_count?: string;
    ipv6_address_list_enabled?: string;
    ipv6_address_list?: string;
    ipv6_addresses?: string;
    ipv6_prefix_count?: string;
    ipv6_prefixes?: string;
    private_ip_list?: string;
    private_ip_list_enabled?: string;
    private_ips?: string;
    private_ips_count?: string;
    security_groups?: string;
    source_dest_check?: string;
    tags?: string;
    arn?: string;
    id?: string;
    mac_address?: string;
    owner_id?: string;
    private_dns_name?: string;
    tags_all?: string;
}
export interface Attachment {
    instance: string;
    device_index: string;
}
export interface NetworkInterfaceAttachment {
    instance_id: string;
    network_interface_id: string;
    device_index: string;
    attachment_id?: string;
    status?: string;
}
export interface NetworkInterfaceSgAttachment {
    security_group_id: string;
    network_interface_id: string;
}
export interface ResourceNetworkfirewallFirewall {
    firewall_policy_arn: string;
    name: string;
    subnet_mapping: NetworkfirewallFirewallSubnetMapping;
    vpc_id: string;
    subnet_id: string;
    delete_protection?: string;
    description?: string;
    encryption_configuration?: ElasticInferenceAccelerator;
    firewall_policy_change_protection?: string;
    subnet_change_protection?: string;
    tags?: string;
    id?: string;
    arn?: string;
    firewall_status?: string;
    sync_states?: string;
    attachment?: string;
    endpoint_id?: string;
    availability_zone?: string;
    tags_all?: string;
    update_token?: string;
}
export interface NetworkfirewallFirewallSubnetMapping {
    ip_address_type?: string;
    subnet_id?: string;
}
export interface ResourceNetworkfirewallFirewallPolicy {
    firewall_policy: FirewallPolicy;
    name: string;
    key: string;
    ip_set: Set;
    dimension: Dimension;
    description?: string;
    encryption_configuration?: ElasticInferenceAccelerator;
    tags?: string;
    override?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
    update_token?: string;
}
export interface Dimension {
    value?: string;
}
export interface FirewallPolicy {
    policy_variables?: string;
    stateful_default_actions?: string;
    stateful_engine_options?: StatefulEngineOptions;
    stateful_rule_group_reference?: StatefulRuleGroupReference;
    stateless_custom_action?: StatelessCustomAction;
    stateless_default_actions?: string;
    stateless_fragment_default_actions?: string;
    stateless_rule_group_reference?: StatelessRuleGroupReference;
}
export interface StatefulEngineOptions {
    rule_order?: string;
    stream_exception_policy?: string;
}
export interface StatefulRuleGroupReference {
    priority?: string;
    resource_arn?: string;
    override?: StatefulRuleGroupReferenceOverride;
}
export interface StatefulRuleGroupReferenceOverride {
    action?: string;
}
export interface StatelessCustomAction {
    action_definition?: StatelessCustomActionActionDefinition;
    action_name?: string;
}
export interface StatelessCustomActionActionDefinition {
    publish_metric_action: KmsSecretClass;
}
export interface StatelessRuleGroupReference {
    priority?: string;
    resource_arn?: string;
}
export interface Set {
    definition?: string;
}
export interface NetworkfirewallLoggingConfiguration {
    firewall_arn: string;
    logging_configuration: NetworkfirewallLoggingConfigurationLoggingConfiguration;
    id?: string;
}
export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
    log_destination_config?: LogDestinationConfig;
}
export interface LogDestinationConfig {
    log_destination: string;
    log_destination_type: string;
    log_type: string;
}
export interface NetworkfirewallRuleGroup {
    capacity: string;
    name: string;
    definition: string;
    reference_arn: string;
    destination: NetworkfirewallRuleGroupDestination;
    destination_port: NetworkfirewallRuleGroupDestinationPort;
    direction: string;
    protocol: string;
    source: NetworkfirewallRuleGroupDestination;
    source_port: NetworkfirewallRuleGroupDestinationPort;
    keyword: string;
    action_definition: NetworkfirewallRuleGroupActionDefinition;
    action_name: string;
    priority: string;
    rule_definition: RuleDefinition;
    description?: string;
    encryption_configuration?: ElasticInferenceAccelerator;
    rule_group?: RuleGroup;
    rules?: string;
    tags?: string;
    settings?: string;
    tcp_flag?: TCPFlag;
    id?: string;
    arn?: string;
    tags_all?: string;
    update_token?: string;
}
export interface NetworkfirewallRuleGroupActionDefinition {
    publish_metric_action?: PublishMetricAction;
}
export interface PublishMetricAction {
    dimension: Dimension;
}
export interface NetworkfirewallRuleGroupDestination {
    address_definition?: string;
}
export interface NetworkfirewallRuleGroupDestinationPort {
    from_port?: string;
    to_port?: string;
}
export interface RuleDefinition {
    actions?: string;
    match_attributes?: MatchAttributes;
}
export interface MatchAttributes {
    destination?: MatchAttributesDestination;
    destination_port?: MatchAttributesDestinationPort;
    protocols?: string;
    source?: MatchAttributesDestination;
    source_port?: MatchAttributesDestinationPort;
    tcp_flag?: string;
}
export interface MatchAttributesDestination {
    address_definition: string;
}
export interface MatchAttributesDestinationPort {
    from_port: string;
    to_port?: string;
}
export interface RuleGroup {
    rules_source: RulesSource;
    reference_sets?: ReferenceSets;
    rule_variables?: RuleVariables;
    stateful_rule_options?: StatefulRuleOptions;
}
export interface ReferenceSets {
    ip_set_reference?: IPSetReference;
}
export interface IPSetReference {
    key: string;
    reference_arn: string;
}
export interface RuleVariables {
    ip_sets?: IPSets;
    port_sets?: PortSets;
}
export interface IPSets {
    key: string;
    ip_set: Set;
}
export interface PortSets {
    key: string;
    port_set: Set;
}
export interface RulesSource {
    rules_source_list?: RulesSourceList;
    rules_string?: string;
    stateful_rule?: StatefulRule;
    stateless_rules_and_custom_actions?: StatelessRulesAndCustomActions;
}
export interface RulesSourceList {
    generated_rules_type?: string;
    target_types?: string;
    targets?: string;
}
export interface StatefulRule {
    action?: string;
    header?: Header;
    rule_option?: RuleOption;
}
export interface Header {
    destination: string;
    destination_port: string;
    direction: string;
    protocol: string;
    source: string;
    source_port: string;
}
export interface RuleOption {
    keyword: string;
    settings?: string;
}
export interface StatelessRulesAndCustomActions {
    custom_action?: CustomAction;
    stateless_rule?: StatelessRule;
}
export interface CustomAction {
    action_name?: string;
}
export interface StatelessRule {
    priority: string;
}
export interface StatefulRuleOptions {
    rule_order: string;
}
export interface TCPFlag {
    flags: string;
    masks?: string;
}
export interface ResourceNetworkmanagerConnection {
    connected_device_id: string;
    device_id: string;
    global_network_id: string;
    connected_link_id?: string;
    description?: string;
    link_id?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface NetworkmanagerCoreNetwork {
    global_network_id: string;
    description?: string;
    base_policy_region?: string;
    base_policy_regions?: string;
    create_base_policy?: string;
    tags?: string;
    arn?: string;
    created_at?: string;
    edges?: Edges;
    id?: string;
    segments?: NetworkmanagerCoreNetworkSegments;
    state?: string;
    tags_all?: string;
    inside_cidr_blocks?: string;
    shared_segments?: string;
}
export interface Edges {
    asn?: string;
    edge_location?: string;
    inside_cidr_blocks?: string;
}
export interface NetworkmanagerCoreNetworkSegments {
    edge_locations?: string;
    name?: string;
    shared_segments?: string;
}
export interface NetworkmanagerCoreNetworkPolicyAttachment {
    core_network_id: string;
    policy_document: string;
    state?: string;
}
export interface NetworkmanagerCustomerGatewayAssociation {
    customer_gateway_arn: string;
    device_id: string;
    global_network_id: string;
    link_id?: string;
}
export interface ResourceNetworkmanagerDevice {
    global_network_id: string;
    description?: string;
    model?: string;
    serial_number?: string;
    site_id?: string;
    tags?: string;
    type?: string;
    vendor?: string;
    subnet_arn?: string;
    zone?: string;
    address?: string;
    latitude?: string;
    longitude?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceNetworkmanagerGlobalNetwork {
    description?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceNetworkmanagerLink {
    global_network_id: string;
    site_id: string;
    description?: string;
    provider_name?: string;
    tags?: string;
    type?: string;
    download_speed?: string;
    upload_speed?: string;
    arn?: string;
    tags_all?: string;
}
export interface NetworkmanagerLinkAssociation {
    device_id: string;
    global_network_id: string;
    link_id: string;
}
export interface ResourceNetworkmanagerSite {
    global_network_id: string;
    description?: string;
    tags?: string;
    address?: string;
    latitude?: string;
    longitude?: string;
    arn?: string;
    tags_all?: string;
}
export interface NetworkmanagerTransitGatewayConnectPeerAssociation {
    device_id: string;
    global_network_id: string;
    transit_gateway_connect_peer_arn: string;
    link_id?: string;
}
export interface NetworkmanagerTransitGatewayPeering {
    core_network_id: string;
    transit_gateway_arn: string;
    tags?: string;
    arn?: string;
    core_network_arn?: string;
    edge_location?: string;
    id?: string;
    owner_account_id?: string;
    peering_type?: string;
    resource_arn?: string;
    tags_all?: string;
    transit_gateway_peering_attachment_id?: string;
}
export interface NetworkmanagerTransitGatewayRegistration {
    global_network_id: string;
    transit_gateway_arn: string;
}
export interface NetworkmanagerTransitGatewayRouteTableAttachment {
    peering_id: string;
    transit_gateway_route_table_arn: string;
    tags?: string;
    arn?: string;
    attachment_policy_rule_number?: string;
    attachment_type?: string;
    core_network_arn?: string;
    core_network_id?: string;
    edge_location?: string;
    id?: string;
    owner_account_id?: string;
    resource_arn?: string;
    segment_name?: string;
    state?: string;
    tags_all?: string;
}
export interface NetworkmanagerVpcAttachment {
    core_network_id: string;
    subnet_arns: string;
    vpc_arn: string;
    options?: Options;
    tags?: string;
    ipv6_support?: string;
    arn?: string;
    attachment_policy_rule_number?: string;
    attachment_type?: string;
    core_network_arn?: string;
    edge_location?: string;
    id?: string;
    owner_account_id?: string;
    resource_arn?: string;
    segment_name?: string;
    state?: string;
    tags_all?: string;
}
export interface Options {
    appliance_mode_support?: string;
    ipv6_support?: string;
}
export interface ResourceOamLink {
    label_template: string;
    resource_types: string;
    sink_identifier: string;
    tags?: string;
    arn?: string;
    label?: string;
    link_id?: string;
    sink_arn?: string;
}
export interface ResourceOamSink {
    name: string;
    tags?: string;
    arn?: string;
    sink_id?: string;
}
export interface OamSinkPolicy {
    sink_identifier: string;
    policy: string;
    arn?: string;
    sink_id?: string;
}
export interface ResourceOpensearchDomain {
    domain_name: string;
    user_pool_id: string;
    access_policies?: string;
    advanced_options?: string;
    advanced_security_options?: OpensearchDomainAdvancedSecurityOptions;
    auto_tune_options?: AutoTuneOptions;
    cluster_config?: ElasticsearchDomainClusterConfig;
    cognito_options?: CognitoOptions;
    domain_endpoint_options?: DomainEndpointOptions;
    ebs_options?: EbsOptions;
    engine_version?: string;
    encrypt_at_rest?: EncryptAtREST;
    log_publishing_options?: LogPublishingOptions;
    node_to_node_encryption?: SoftwareTokenMfaConfiguration;
    snapshot_options?: SnapshotOptions;
    software_update_options?: SoftwareUpdateOptions;
    tags?: string;
    vpc_options?: VpcOptions;
    off_peak_window_options?: OffPeakWindowOptions;
    arn?: string;
    domain_id?: string;
    endpoint?: string;
    dashboard_endpoint?: string;
    kibana_endpoint?: string;
    tags_all?: string;
}
export interface OpensearchDomainAdvancedSecurityOptions {
    enabled: string;
    anonymous_auth_enabled?: string;
    internal_user_database_enabled?: string;
    master_user_options?: MasterUserOptions;
}
export interface OffPeakWindowOptions {
    hours: string;
    minutes: string;
    enabled?: string;
    off_peak_window?: string;
    window_start_time?: string;
}
export interface SoftwareUpdateOptions {
    auto_software_update_enabled?: string;
}
export interface OpensearchInboundConnectionAccepter {
    connection_id: string;
    id?: string;
    connection_status?: string;
}
export interface OpensearchOutboundConnection {
    connection_alias: string;
    connection_mode: string;
    local_domain_info: DomainInfo;
    remote_domain_info: DomainInfo;
    accept_connection?: string;
    connection_properties?: ConnectionProperties;
    cross_cluster_search?: CrossClusterSearch;
    id?: string;
    connection_status?: string;
    endpoint?: string;
}
export interface ConnectionProperties {
    cross_cluster_search?: string;
}
export interface CrossClusterSearch {
    skip_unavailable?: string;
}
export interface DomainInfo {
    owner_id?: string;
    domain_name?: string;
    region?: string;
}
export interface OpensearchPackage {
    package_name: string;
    package_type: string;
    package_source: PackageSource;
    package_description?: string;
    id?: string;
    available_package_version?: string;
}
export interface PackageSource {
    s3_bucket_name?: string;
    s3_key?: string;
}
export interface OpensearchPackageAssociation {
    package_id: string;
    domain_name: string;
    id?: string;
}
export interface OpensearchVpcEndpoint {
    domain_arn: string;
    vpc_options: VpcClass;
    id?: string;
    endpoint?: string;
}
export interface OpensearchserverlessPolicy {
    name: string;
    policy: string;
    type: string;
    description?: string;
    policy_version?: string;
}
export interface ResourceOpensearchserverlessCollection {
    name: string;
    description?: string;
    tags?: string;
    type?: string;
    arn?: string;
    collection_endpoint?: string;
    dashboard_endpoint?: string;
    kms_key_arn?: string;
    id?: string;
}
export interface ResourceOpensearchserverlessSecurityConfig {
    name: string;
    saml_options: OpensearchserverlessSecurityConfigSamlOptions;
    type: string;
    description?: string;
    config_version?: string;
}
export interface ResourceOpensearchserverlessVpcEndpoint {
    name: string;
    subnet_ids: string;
    vpc_id: string;
    security_group_ids?: string;
    id?: string;
}
export interface OpsworksApplication {
    name: string;
    short_name: string;
    stack_id: string;
    type: string;
    rails_env: string;
    url: string;
    key: string;
    value: string;
    private_key: string;
    certificate: string;
    description?: string;
    environment?: string;
    enable_ssl?: string;
    ssl_configuration?: string;
    app_source?: string;
    data_source_arn?: string;
    data_source_type?: string;
    data_source_database_name?: string;
    domains?: string;
    document_root?: string;
    auto_bundle_on_deploy?: string;
    aws_flow_ruby_settings?: string;
    username?: string;
    password?: string;
    ssh_key?: string;
    revision?: string;
    secure?: string;
    chain?: string;
    id?: string;
}
export interface OpsworksCustomLayer {
    name: string;
    short_name: string;
    stack_id: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    cloudwatch_configuration?: CloudwatchConfiguration;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    load_based_auto_scaling?: string;
    system_packages?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: OpsworksCustomLayerEbsVolume;
    custom_json?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    encrypted?: string;
    downscaling?: string;
    enable?: string;
    upscaling?: string;
    alarms?: string;
    cpu_threshold?: string;
    ignore_metrics_time?: string;
    instance_count?: string;
    load_threshold?: string;
    memory_threshold?: string;
    thresholds_wait_time?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface CloudwatchConfiguration {
    enabled?: string;
    log_streams?: LogStreams;
}
export interface LogStreams {
    file: string;
    log_group_name: string;
    batch_count?: string;
    batch_size?: string;
    buffer_duration?: string;
    datetime_format?: string;
    encoding?: string;
    file_fingerprint_lines?: string;
    initial_position?: string;
    multiline_start_pattern?: string;
    time_zone?: string;
}
export interface OpsworksCustomLayerEbsVolume {
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    type?: string;
    iops?: string;
    encrypted?: string;
}
export interface OpsworksEcsClusterLayer {
    stack_id: string;
    ecs_cluster_arn: string;
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    name?: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    system_packages?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: string;
    custom_json?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    type?: string;
    iops?: string;
    id?: string;
    arn?: string;
}
export interface OpsworksGangliaLayer {
    stack_id: string;
    password: string;
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    name?: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    system_packages?: string;
    url?: string;
    username?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: string;
    custom_json?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    type?: string;
    iops?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface OpsworksHaproxyLayer {
    stack_id: string;
    stats_password: string;
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    name?: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    healthcheck_method?: string;
    healthcheck_url?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    stats_enabled?: string;
    stats_url?: string;
    stats_user?: string;
    system_packages?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: string;
    custom_json?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    type?: string;
    iops?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface OpsworksInstance {
    layer_ids: string;
    stack_id: string;
    agent_version?: string;
    ami_id?: string;
    architecture?: string;
    auto_scaling_type?: string;
    availability_zone?: string;
    delete_ebs?: string;
    delete_eip?: string;
    ebs_block_device?: string;
    ebs_optimized?: string;
    ecs_cluster_arn?: string;
    elastic_ip?: string;
    ephemeral_block_device?: string;
    hostname?: string;
    infrastructure_class?: string;
    install_updates_on_boot?: string;
    instance_profile_arn?: string;
    instance_type?: string;
    os?: string;
    root_block_device?: string;
    root_device_type?: string;
    ssh_key_name?: string;
    state?: string;
    subnet_id?: string;
    tenancy?: string;
    virtualization_type?: string;
    created_at?: string;
    ec2_instance_id?: string;
    id?: string;
    last_service_error_id?: string;
    platform?: string;
    private_dns?: string;
    private_ip?: string;
    public_dns?: string;
    public_ip?: string;
    registered_by?: string;
    reported_agent_version?: string;
    reported_os_family?: string;
    reported_os_name?: string;
    reported_os_version?: string;
    root_device_volume_id?: string;
    security_group_ids?: string;
    ssh_host_dsa_key_fingerprint?: string;
    ssh_host_rsa_key_fingerprint?: string;
    status?: string;
}
export interface OpsworksJavaAppLayer {
    stack_id: string;
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    name?: string;
    app_server?: string;
    app_server_version?: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    jvm_type?: string;
    jvm_options?: string;
    jvm_version?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    system_packages?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: string;
    custom_json?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    type?: string;
    iops?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface OpsworksMemcachedLayer {
    stack_id: string;
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    name?: string;
    allocated_memory?: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    system_packages?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: string;
    custom_json?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    type?: string;
    iops?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface OpsworksMysqlLayer {
    stack_id: string;
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    name?: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    root_password?: string;
    root_password_on_all_instances?: string;
    system_packages?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: string;
    custom_json?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    type?: string;
    iops?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface OpsworksNodejsAppLayer {
    stack_id: string;
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    name?: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    nodejs_version?: string;
    system_packages?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: string;
    custom_json?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    type?: string;
    iops?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface OpsworksPermission {
    user_arn: string;
    stack_id: string;
    allow_ssh?: string;
    allow_sudo?: string;
    level?: string;
    id?: string;
}
export interface OpsworksPHPAppLayer {
    stack_id: string;
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    name?: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    system_packages?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: string;
    custom_json?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    type?: string;
    iops?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface OpsworksRailsAppLayer {
    stack_id: string;
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    name?: string;
    app_server?: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    bundler_version?: string;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    manage_bundler?: string;
    passenger_version?: string;
    ruby_version?: string;
    rubygems_version?: string;
    system_packages?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: string;
    custom_json?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    type?: string;
    iops?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface OpsworksRDSDBInstance {
    stack_id: string;
    rds_db_instance_arn: string;
    db_user: string;
    db_password: string;
    id?: string;
}
export interface OpsworksStack {
    name: string;
    region: string;
    service_role_arn: string;
    default_instance_profile_arn: string;
    type: string;
    url: string;
    agent_version?: string;
    berkshelf_version?: string;
    color?: string;
    configuration_manager_name?: string;
    configuration_manager_version?: string;
    custom_cookbooks_source?: string;
    custom_json?: string;
    default_availability_zone?: string;
    default_os?: string;
    default_root_device_type?: string;
    default_ssh_key_name?: string;
    default_subnet_id?: string;
    hostname_theme?: string;
    manage_berkshelf?: string;
    tags?: string;
    use_custom_cookbooks?: string;
    use_opsworks_security_groups?: string;
    vpc_id?: string;
    username?: string;
    password?: string;
    ssh_key?: string;
    revision?: string;
    id?: string;
    tags_all?: string;
}
export interface OpsworksStaticWebLayer {
    stack_id: string;
    mount_point: string;
    size: string;
    number_of_disks: string;
    raid_level: string;
    name?: string;
    auto_assign_elastic_ips?: string;
    auto_assign_public_ips?: string;
    custom_instance_profile_arn?: string;
    custom_security_group_ids?: string;
    auto_healing?: string;
    install_updates_on_boot?: string;
    instance_shutdown_timeout?: string;
    elastic_load_balancer?: string;
    drain_elb_on_shutdown?: string;
    system_packages?: string;
    use_ebs_optimized_instances?: string;
    ebs_volume?: string;
    tags?: string;
    custom_undeploy_recipes?: string;
    type?: string;
    iops?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface OpsworksUserProfile {
    user_arn: string;
    ssh_username: string;
    allow_self_management?: string;
    ssh_public_key?: string;
    id?: string;
}
export interface OrganizationsAccount {
    email: string;
    name: string;
    close_on_deletion?: string;
    create_govcloud?: string;
    iam_user_access_to_billing?: string;
    parent_id?: string;
    role_name?: string;
    tags?: string;
    arn?: string;
    govcloud_id?: string;
    id?: string;
    tags_all?: string;
}
export interface OrganizationsDelegatedAdministrator {
    account_id: string;
    service_principal: string;
    id?: string;
    arn?: string;
    delegation_enabled_date?: string;
    email?: string;
    joined_method?: string;
    joined_timestamp?: string;
    name?: string;
    status?: string;
}
export interface ResourceOrganizationsOrganizationalUnit {
    name?: string;
    parent_id?: string;
    tags?: string;
    accounts?: string;
    arn?: string;
    email?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceOrganizationsPolicy {
    content: string;
    name: string;
    description?: string;
    skip_destroy?: string;
    type?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface OrganizationsPolicyAttachment {
    policy_id: string;
    target_id: string;
    skip_destroy?: string;
}
export interface OrganizationsResourcePolicy {
    content: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface PinpointAdmChannel {
    application_id: string;
    client_id: string;
    client_secret: string;
    enabled?: string;
}
export interface PinpointApnsChannel {
    application_id: string;
    certificate: string;
    private_key: string;
    bundle_id: string;
    team_id: string;
    token_key: string;
    token_key_id: string;
    enabled?: string;
    default_authentication_method?: string;
}
export interface PinpointApp {
    mode: string;
    name?: string;
    name_prefix?: string;
    campaign_hook?: string;
    limits?: string;
    quiet_time?: string;
    tags?: string;
    lambda_function_name?: string;
    web_url?: string;
    daily?: string;
    maximum_duration?: string;
    messages_per_second?: string;
    total?: string;
    end?: string;
    start?: string;
    application_id?: string;
    arn?: string;
    tags_all?: string;
}
export interface PinpointBaiduChannel {
    application_id: string;
    api_key: string;
    secret_key: string;
    enabled?: string;
}
export interface PinpointEmailChannel {
    application_id: string;
    from_address: string;
    identity: string;
    enabled?: string;
    configuration_set?: string;
    role_arn?: string;
    messages_per_second?: string;
}
export interface PinpointEventStream {
    application_id: string;
    destination_stream_arn: string;
    role_arn: string;
}
export interface PinpointGcmChannel {
    application_id: string;
    api_key: string;
    enabled?: string;
}
export interface PinpointSMSChannel {
    application_id: string;
    enabled?: string;
    sender_id?: string;
    short_code?: string;
    promotional_messages_per_second?: string;
    transactional_messages_per_second?: string;
}
export interface PipesPipe {
    role_arn: string;
    source: string;
    target: string;
    pattern: string;
    queue_name: string;
    basic_auth: string;
    starting_position: string;
    topic_name: string;
    job_definition: string;
    job_name: string;
    size_in_gib: string;
    partition_key: string;
    database: string;
    description?: string;
    desired_state?: string;
    enrichment?: string;
    name?: string;
    name_prefix?: string;
    tags?: string;
    input_template?: string;
    path_parameter_values?: string;
    batch_size?: string;
    maximum_batching_window_in_seconds?: string;
    maximum_record_age_in_seconds?: string;
    maximum_retry_attempts?: string;
    on_partial_batch_item_failure?: string;
    parallelization_factor?: string;
    arn?: string;
    starting_position_timestamp?: string;
    consumer_group_id?: string;
    client_certificate_tls_auth?: string;
    sasl_scram_512_auth?: string;
    virtual_host?: string;
    additional_bootstrap_servers?: string;
    server_root_ca_certificate?: string;
    sasl_scram_256_auth?: string;
    security_groups?: string;
    subnets?: string;
    size?: string;
    command?: string;
    instance_type?: string;
    value?: string;
    type?: string;
    job_id?: string;
    attempts?: string;
    log_stream_name?: string;
    timestamp?: string;
    enable_ecs_managed_tags?: string;
    enable_execute_command?: string;
    group?: string;
    launch_type?: string;
    platform_version?: string;
    propagate_tags?: string;
    reference_id?: string;
    task_count?: string;
    task_definition_arn?: string;
    base?: string;
    capacity_provider?: string;
    weight?: string;
    assign_public_ip?: string;
    cpu?: string;
    execution_role_arn?: string;
    memory?: string;
    task_role_arn?: string;
    memory_reservation?: string;
    device_name?: string;
    device_type?: string;
    expression?: string;
    field?: string;
    detail_type?: string;
    endpoint_id?: string;
    resources?: string;
    time?: string;
    invocation_type?: string;
    db_user?: string;
    secret_manager_arn?: string;
    sqls?: string;
    statement_name?: string;
    with_event?: string;
    message_deduplication_id?: string;
    message_group_id?: string;
    id?: string;
    tags_all?: string;
}
export interface PlacementGroup {
    name: string;
    strategy: string;
    partition_count?: string;
    spread_level?: string;
    tags?: string;
    arn?: string;
    id?: string;
    placement_group_id?: string;
    tags_all?: string;
}
export interface PrometheusAlertManagerDefinition {
    workspace_id: string;
    definition: string;
}
export interface PrometheusRuleGroupNamespace {
    name: string;
    workspace_id: string;
    data: string;
}
export interface ResourcePrometheusWorkspace {
    alias?: string;
    logging_configuration?: Configuration;
    tags?: string;
    arn?: string;
    id?: string;
    prometheus_endpoint?: string;
    tags_all?: string;
}
export interface ProxyProtocolPolicy {
    load_balancer: string;
    instance_ports: string;
    id?: string;
}
export interface QldbLedger {
    permissions_mode: string;
    deletion_protection?: string;
    kms_key?: string;
    name?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface QldbStream {
    inclusive_start_time: string;
    kinesis_configuration: KinesisConfiguration;
    ledger_name: string;
    role_arn: string;
    stream_name: string;
    exclusive_end_time?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface KinesisConfiguration {
    aggregation_enabled?: string;
    stream_arn?: string;
}
export interface QuicksightAccountSubscription {
    account_name: string;
    authentication_method: string;
    edition: string;
    notification_email: string;
    active_directory_name?: string;
    admin_group?: string;
    author_group?: string;
    aws_account_id?: string;
    contact_number?: string;
    directory_id?: string;
    email_address?: string;
    first_name?: string;
    last_name?: string;
    reader_group?: string;
    realm?: string;
    account_subscription_status?: string;
}
export interface QuicksightAnalysis {
    analysis_id: string;
    name: string;
    data_set_references: DataSetReferences;
    data_set_placeholder: string;
    aws_account_id?: string;
    definition?: QuicksightAnalysisDefinition;
    parameters?: QuicksightAnalysisParameters;
    permissions?: QuicksightAnalysisPermissions;
    recovery_window_in_days?: string;
    source_entity?: QuicksightAnalysisSourceEntity;
    tags?: string;
    theme_arn?: string;
    source_template?: Source;
    arn?: string;
    created_time?: string;
    id?: string;
    last_updated_time?: string;
    status?: string;
    tags_all?: string;
}
export interface DataSetReferences {
    data_set_arn?: string;
    data_set_placeholder?: string;
}
export interface QuicksightAnalysisDefinition {
    data_set_identifiers_declarations: string;
    analysis_defaults?: string;
    calculated_fields?: string;
    column_configurations?: string;
    filter_groups?: string;
    parameters_declarations?: string;
    sheets?: string;
}
export interface QuicksightAnalysisParameters {
    date_time_parameters?: string;
    decimal_parameters?: string;
    integer_parameters?: string;
    string_parameters?: string;
}
export interface QuicksightAnalysisPermissions {
    actions: string;
    principal: string;
}
export interface QuicksightAnalysisSourceEntity {
    source_template?: string;
}
export interface Source {
    arn: string;
    data_set_references: string;
}
export interface QuicksightDashboard {
    dashboard_id: string;
    name: string;
    version_description: string;
    data_set_references: DataSetReferences;
    data_set_placeholder: string;
    aws_account_id?: string;
    dashboard_publish_options?: DashboardPublishOptions;
    definition?: QuicksightAnalysisDefinition;
    parameters?: QuicksightAnalysisParameters;
    permissions?: QuicksightAnalysisPermissions;
    source_entity?: QuicksightAnalysisSourceEntity;
    tags?: string;
    theme_arn?: string;
    source_template?: Source;
    ad_hoc_filtering_option?: Option;
    data_point_drill_up_down_option?: Option;
    data_point_menu_label_option?: Option;
    data_point_tooltip_option?: Option;
    export_to_csv_option?: Option;
    export_with_hidden_fields_option?: Option;
    sheet_controls_option?: SheetControlsOption;
    sheet_layout_element_maximization_option?: Option;
    visual_axis_sort_option?: Option;
    visual_menu_option?: Option;
    arn?: string;
    created_time?: string;
    id?: string;
    last_updated_time?: string;
    source_entity_arn?: string;
    status?: string;
    tags_all?: string;
    version_number?: string;
}
export interface Option {
    availability_status?: string;
}
export interface DashboardPublishOptions {
    ad_hoc_filtering_option?: string;
    data_point_drill_up_down_option?: string;
    data_point_menu_label_option?: string;
    data_point_tooltip_option?: string;
    export_to_csv_option?: string;
    export_with_hidden_fields_option?: string;
    sheet_controls_option?: string;
    sheet_layout_element_maximization_option?: string;
    visual_axis_sort_option?: string;
    visual_menu_option?: string;
}
export interface SheetControlsOption {
    visibility_state?: string;
}
export interface ResourceQuicksightDataSet {
    data_set_id: string;
    import_mode: string;
    name: string;
    physical_table_map: PhysicalTableMap;
    input_columns: EvaluationRules;
    upload_settings: UploadSettings;
    projected_columns: string;
    new_column_name: string;
    tag_rules: TagRules;
    refresh_configuration: RefreshConfiguration;
    incremental_refresh: IncrementalRefresh;
    lookback_window: LookbackWindow;
    aws_account_id?: string;
    column_groups?: ColumnGroups;
    column_level_permission_rules?: ColumnLevelPermissionRules;
    data_set_usage_configuration?: DataSetUsageConfiguration;
    field_folders?: FieldFolders;
    logical_table_map?: LogicalTableMap;
    permissions?: QuicksightAnalysisPermissions;
    row_level_permission_data_set?: RowLevelPermissionDataSet;
    row_level_permission_tag_configuration?: RowLevelPermissionTagConfiguration;
    refresh_properties?: RefreshProperties;
    tags?: TagColumnOperationTags;
    custom_sql?: CustomSQL;
    relational_table?: RelationalTable;
    s3_source?: S3Source;
    geo_spatial_column_group?: GeoSpatialColumnGroup;
    description?: string;
    data_transforms?: DataTransforms;
    cast_column_type_operation?: CastColumnTypeOperation;
    create_columns_operation?: CreateColumnsOperation;
    filter_operation?: FilterOperation;
    project_operation?: ProjectOperation;
    rename_column_operation?: RenameColumnOperation;
    tag_column_operation?: TagColumnOperation;
    untag_column_operation?: UntagColumnOperation;
    column_description?: ColumnDescription;
    join_instruction?: JoinInstruction;
    physical_table_id?: string;
    left_join_key_properties?: TJoinKeyProperties;
    right_join_key_properties?: TJoinKeyProperties;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface CastColumnTypeOperation {
    column_name: string;
    new_column_type: string;
    format?: string;
}
export interface ColumnDescription {
    text?: string;
}
export interface ColumnGroups {
    geo_spatial_column_group?: string;
}
export interface ColumnLevelPermissionRules {
    column_names?: string;
    principals?: string;
}
export interface CreateColumnsOperation {
    columns: CreateColumnsOperationColumns;
}
export interface CreateColumnsOperationColumns {
    column_id?: string;
    column_name?: string;
    expression?: string;
}
export interface CustomSQL {
    data_source_arn: string;
    name: string;
    sql_query: string;
    columns?: CustomSQLColumns;
}
export interface CustomSQLColumns {
    column_id: string;
    column_name: string;
    expression: string;
}
export interface DataSetUsageConfiguration {
    disable_use_as_direct_query_source?: string;
    disable_use_as_imported_source?: string;
}
export interface DataTransforms {
    cast_column_type_operation?: string;
    create_columns_operation?: string;
    filter_operation?: string;
    project_operation?: string;
    rename_column_operation?: string;
    tag_column_operation?: string;
    untag_column_operation?: string;
}
export interface FieldFolders {
    field_folders_id: string;
    columns?: string;
    description?: string;
}
export interface FilterOperation {
    condition_expression: string;
}
export interface GeoSpatialColumnGroup {
    columns: string;
    country_code: string;
    name: string;
}
export interface IncrementalRefresh {
    lookback_window?: string;
}
export interface JoinInstruction {
    left_operand: string;
    on_clause: string;
    right_operand: string;
    type: string;
    left_join_key_properties?: string;
    right_join_key_properties?: string;
}
export interface TJoinKeyProperties {
    unique_key?: string;
}
export interface LogicalTableMap {
    alias: string;
    logical_table_map_id: string;
    data_transforms?: string;
    source?: LogicalTableMapSource;
}
export interface LogicalTableMapSource {
    data_set_arn?: string;
    join_instruction?: string;
    physical_table_id?: string;
}
export interface LookbackWindow {
    column_name?: string;
    size?: string;
    size_unit?: string;
}
export interface PhysicalTableMap {
    physical_table_map_id?: string;
    custom_sql?: string;
    relational_table?: string;
    s3_source?: string;
}
export interface ProjectOperation {
    projected_columns: string;
}
export interface RefreshConfiguration {
    incremental_refresh?: string;
}
export interface RefreshProperties {
    refresh_configuration: string;
}
export interface RelationalTable {
    data_source_arn: string;
    input_columns: string;
    name: string;
    catalog?: string;
    schema?: string;
}
export interface RenameColumnOperation {
    column_name: string;
    new_column_name: string;
}
export interface RowLevelPermissionDataSet {
    arn: string;
    permission_policy: string;
    format_version?: string;
    namespace?: string;
    status?: string;
}
export interface RowLevelPermissionTagConfiguration {
    tag_rules: string;
    status?: string;
}
export interface S3Source {
    data_source_arn: string;
    input_columns: string;
    upload_settings: string;
}
export interface TagColumnOperation {
    column_name: string;
    tags: TagColumnOperationTags;
}
export interface TagColumnOperationTags {
    column_description?: string;
    column_geographic_role?: string;
}
export interface TagRules {
    column_name?: string;
    tag_key?: string;
    match_all_value?: string;
    tag_multi_value_delimiter?: string;
}
export interface UntagColumnOperation {
    column_name: string;
    tag_names: string;
}
export interface UploadSettings {
    contains_header?: string;
    delimiter?: string;
    format?: string;
    start_from_row?: string;
    text_qualifier?: string;
}
export interface QuicksightDataSource {
    data_source_id: string;
    name: string;
    type: string;
    password: string;
    username: string;
    actions: string;
    principal: string;
    disable_ssl: string;
    vpc_connection_arn: string;
    domain: string;
    database: string;
    host: string;
    port: string;
    data_set_name: string;
    site_base_url: string;
    catalog: string;
    manifest_file_location: string;
    bucket: string;
    key: string;
    warehouse: string;
    max_rows: string;
    query: string;
    aws_account_id?: string;
    ssl_properties?: string;
    tags?: string;
    copy_source_arn?: string;
    credential_pair?: string;
    amazon_elasticsearch?: string;
    aurora_postgresql?: string;
    aws_iot_analytics?: string;
    maria_db?: string;
    service_now?: string;
    sql_server?: string;
    work_group?: string;
    instance_id?: string;
    cluster_id?: string;
    arn?: string;
    tags_all?: string;
}
export interface QuicksightFolder {
    folder_id: string;
    name: string;
    aws_account_id?: string;
    folder_type?: string;
    parent_folder_arn?: string;
    permissions?: QuicksightAnalysisPermissions;
    tags?: string;
    arn?: string;
    created_time?: string;
    folder_path?: string;
    id?: string;
    last_updated_time?: string;
    tags_all?: string;
}
export interface QuicksightFolderMembership {
    folder_id: string;
    member_id: string;
    member_type: string;
    aws_account_id?: string;
    id?: string;
}
export interface ResourceQuicksightGroup {
    group_name: string;
    aws_account_id?: string;
    description?: string;
    namespace?: string;
    arn?: string;
}
export interface QuicksightGroupMembership {
    group_name: string;
    member_name: string;
    namespace: string;
    aws_account_id?: string;
}
export interface QuicksightIamPolicyAssignment {
    assignment_name: string;
    assignment_status: string;
    aws_account_id?: string;
    identities?: Identities;
    namespace?: string;
    policy_arn?: string;
    assignment_id?: string;
    id?: string;
}
export interface Identities {
    groups?: string;
    user?: string;
}
export interface QuicksightIngestion {
    data_set_id: string;
    ingestion_id: string;
    ingestion_type: string;
    aws_account_id?: string;
    arn?: string;
    id?: string;
    ingestion_status?: string;
}
export interface QuicksightNamespace {
    namespace: string;
    aws_account_id?: string;
    identity_store?: string;
    tags?: string;
    arn?: string;
    capacity_region?: string;
    creation_status?: string;
    id?: string;
    tags_all?: string;
}
export interface QuicksightRefreshSchedule {
    data_set_id: string;
    schedule_id: string;
    schedule: QuicksightRefreshScheduleSchedule;
    aws_account_id?: string;
    schedule_frequency?: ScheduleFrequency;
    refresh_on_day?: RefreshOnDay;
    arn?: string;
    id?: string;
}
export interface RefreshOnDay {
    day_of_month?: string;
    day_of_week?: string;
}
export interface QuicksightRefreshScheduleSchedule {
    refresh_type?: string;
    start_after_date_time?: string;
    schedule_frequency?: string;
}
export interface ScheduleFrequency {
    interval: string;
    time_of_the_day?: string;
    timezone?: string;
    refresh_on_day?: string;
}
export interface QuicksightTemplate {
    template_id: string;
    name: string;
    version_description: string;
    data_set_references: DataSetReferences;
    data_set_placeholder: string;
    aws_account_id?: string;
    definition?: QuicksightTemplateDefinition;
    permissions?: QuicksightAnalysisPermissions;
    source_entity?: QuicksightTemplateSourceEntity;
    tags?: string;
    source_analysis?: Source;
    source_template?: SourceTemplate;
    arn?: string;
    created_time?: string;
    id?: string;
    last_updated_time?: string;
    source_entity_arn?: string;
    status?: string;
    tags_all?: string;
    version_number?: string;
}
export interface QuicksightTemplateDefinition {
    data_set_configuration: string;
    analysis_defaults?: string;
    calculated_fields?: string;
    column_configurations?: string;
    filter_groups?: string;
    parameters_declarations?: string;
    sheets?: string;
}
export interface QuicksightTemplateSourceEntity {
    source_analysis?: string;
    source_template?: string;
}
export interface SourceTemplate {
    arn: string;
}
export interface QuicksightTemplateAlias {
    alias_name: string;
    template_id: string;
    template_version_number: string;
    aws_account_id?: string;
    arn?: string;
    id?: string;
}
export interface ResourceQuicksightTheme {
    theme_id: string;
    base_theme_id: string;
    name: string;
    configuration: QuicksightThemeConfiguration;
    aws_account_id?: string;
    permissions?: QuicksightAnalysisPermissions;
    tags?: string;
    version_description?: string;
    data_color_palette?: DataColorPalette;
    ui_color_palette?: UIColorPalette;
    tile_layout?: TileLayout;
    font_families?: FontFamilies;
    font_family?: string;
    arn?: string;
    created_time?: string;
    id?: string;
    last_updated_time?: string;
    status?: string;
    tags_all?: string;
    version_number?: string;
}
export interface ResourceQuicksightUser {
    email: string;
    identity_type: string;
    user_role: string;
    user_name?: string;
    aws_account_id?: string;
    iam_arn?: string;
    namespace?: string;
    session_name?: string;
    arn?: string;
}
export interface QuicksightVpcConnection {
    vpc_connection_id: string;
    name: string;
    role_arn: string;
    security_group_ids: string;
    subnet_ids: string;
    aws_account_id?: string;
    dns_resolvers?: string;
    tags?: string;
    arn?: string;
    availability_status?: string;
    id?: string;
    tags_all?: string;
}
export interface RAMPrincipalAssociation {
    principal: string;
    resource_share_arn: string;
    id?: string;
}
export interface RAMResourceAssociation {
    resource_arn: string;
    resource_share_arn: string;
    id?: string;
}
export interface ResourceRAMResourceShare {
    name: string;
    allow_external_principals?: string;
    permission_arns?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface RAMResourceShareAccepter {
    share_arn: string;
    invitation_arn?: string;
    share_id?: string;
    status?: string;
    receiver_account_id?: string;
    sender_account_id?: string;
    share_name?: string;
    resources?: string;
}
export interface RbinRule {
    resource_type: string;
    retention_period: RetentionPeriod;
    unlock_delay: UnlockDelay;
    description?: string;
    resource_tags?: ResourceTags;
    lock_configuration?: LockConfiguration;
    resource_tag_value?: string;
    id?: string;
    lock_end_time?: string;
    lock_state?: string;
    status?: string;
}
export interface LockConfiguration {
    unlock_delay: string;
}
export interface ResourceTags {
    resource_tag_key: string;
    resource_tag_value?: string;
}
export interface RetentionPeriod {
    retention_period_unit?: string;
    retention_period_value?: string;
}
export interface UnlockDelay {
    unlock_delay_unit?: string;
    unlock_delay_value?: string;
}
export interface ResourceRDSCluster {
    allocated_storage: string;
    db_cluster_instance_class: string;
    engine: string;
    master_password: string;
    master_username: string;
    storage_type: string;
    bucket_name: string;
    ingestion_role: string;
    source_engine: string;
    source_engine_version: string;
    source_cluster_identifier: string;
    max_capacity: string;
    min_capacity: string;
    allow_major_version_upgrade?: string;
    apply_immediately?: string;
    availability_zones?: string;
    backtrack_window?: string;
    backup_retention_period?: string;
    cluster_identifier_prefix?: string;
    cluster_identifier?: string;
    copy_tags_to_snapshot?: string;
    database_name?: string;
    db_cluster_parameter_group_name?: string;
    db_instance_parameter_group_name?: string;
    db_subnet_group_name?: string;
    db_system_id?: string;
    deletion_protection?: string;
    enable_global_write_forwarding?: string;
    enable_http_endpoint?: string;
    enabled_cloudwatch_logs_exports?: string;
    engine_mode?: string;
    engine_version?: string;
    final_snapshot_identifier?: string;
    global_cluster_identifier?: string;
    iam_database_authentication_enabled?: string;
    iam_roles?: string;
    iops?: string;
    kms_key_id?: string;
    manage_master_user_password?: string;
    master_user_secret_kms_key_id?: string;
    network_type?: string;
    port?: string;
    preferred_backup_window?: string;
    preferred_maintenance_window?: string;
    replication_source_identifier?: string;
    restore_to_point_in_time?: string;
    scaling_configuration?: string;
    skip_final_snapshot?: string;
    snapshot_identifier?: string;
    source_region?: string;
    storage_encrypted?: string;
    tags?: string;
    vpc_security_group_ids?: string;
    bucket_prefix?: string;
    restore_type?: string;
    use_latest_restorable_time?: string;
    restore_to_time?: string;
    auto_pause?: string;
    seconds_until_auto_pause?: string;
    timeout_action?: string;
    arn?: string;
    id?: string;
    cluster_resource_id?: string;
    cluster_members?: string;
    endpoint?: string;
    reader_endpoint?: string;
    engine_version_actual?: string;
    master_user_secret?: MasterUserSecret;
    hosted_zone_id?: string;
    tags_all?: string;
}
export interface RDSClusterActivityStream {
    resource_arn: string;
    mode: string;
    kms_key_id: string;
    engine_native_audit_fields_included?: string;
    id?: string;
    kinesis_stream_name?: string;
}
export interface RDSClusterEndpoint {
    cluster_identifier: string;
    cluster_endpoint_identifier: string;
    custom_endpoint_type: string;
    static_members?: string;
    excluded_members?: string;
    tags?: string;
    arn?: string;
    id?: string;
    endpoint?: string;
    tags_all?: string;
}
export interface RDSClusterInstance {
    cluster_identifier: string;
    db_subnet_group_name: string;
    engine: string;
    instance_class: string;
    apply_immediately?: string;
    auto_minor_version_upgrade?: string;
    availability_zone?: string;
    ca_cert_identifier?: string;
    copy_tags_to_snapshot?: string;
    custom_iam_instance_profile?: string;
    db_parameter_group_name?: string;
    engine_version?: string;
    identifier_prefix?: string;
    identifier?: string;
    monitoring_interval?: string;
    monitoring_role_arn?: string;
    performance_insights_enabled?: string;
    performance_insights_kms_key_id?: string;
    performance_insights_retention_period?: string;
    preferred_backup_window?: string;
    preferred_maintenance_window?: string;
    promotion_tier?: string;
    publicly_accessible?: string;
    tags?: string;
    arn?: string;
    id?: string;
    writer?: string;
    endpoint?: string;
    engine_version_actual?: string;
    port?: string;
    storage_encrypted?: string;
    kms_key_id?: string;
    network_type?: string;
    dbi_resource_id?: string;
    tags_all?: string;
}
export interface RDSClusterRoleAssociation {
    db_cluster_identifier: string;
    feature_name: string;
    role_arn: string;
    id?: string;
}
export interface RDSCustomDBEngineVersion {
    database_installation_files_s3_bucket_name: string;
    database_installation_files_s3_prefix: string;
    engine: string;
    engine_version: string;
    description?: string;
    filename?: string;
    kms_key_id?: string;
    manifest?: string;
    manifest_hash?: string;
    status?: string;
    source_image_id?: string;
    tags?: string;
    arn?: string;
    create_time?: string;
    db_parameter_group_family?: string;
    image_id?: string;
    major_engine_version?: string;
    manifest_computed?: string;
    tags_all?: string;
}
export interface RDSExportTask {
    export_task_identifier: string;
    iam_role_arn: string;
    kms_key_id: string;
    s3_bucket_name: string;
    source_arn: string;
    export_only?: string;
    s3_prefix?: string;
    failure_cause?: string;
    id?: string;
    percent_progress?: string;
    snapshot_time?: string;
    source_type?: string;
    status?: string;
    task_end_time?: string;
    task_start_time?: string;
    warning_message?: string;
}
export interface RDSGlobalCluster {
    global_cluster_identifier: string;
    database_name?: string;
    deletion_protection?: string;
    engine?: string;
    engine_version?: string;
    force_destroy?: string;
    source_db_cluster_identifier?: string;
    storage_encrypted?: string;
    arn?: string;
    global_cluster_members?: string;
    db_cluster_arn?: string;
    is_writer?: string;
    global_cluster_resource_id?: string;
    id?: string;
}
export interface RDSReservedInstance {
    offering_id: string;
    instance_count?: string;
    reservation_id?: string;
    tags?: string;
    arn?: string;
    id?: string;
    currency_code?: string;
    duration?: string;
    fixed_price?: string;
    db_instance_class?: string;
    lease_id?: string;
    multi_az?: string;
    offering_type?: string;
    product_description?: string;
    recurring_charges?: string;
    start_time?: string;
    state?: string;
    usage_price?: string;
    tags_all?: string;
}
export interface RedshiftAuthenticationProfile {
    authentication_profile_name: string;
    authentication_profile_content: string;
    id?: string;
}
export interface ResourceRedshiftCluster {
    cluster_identifier: string;
    node_type: string;
    master_password: string;
    master_username: string;
    enable: string;
    destination_region: string;
    database_name?: string;
    default_iam_role_arn?: string;
    cluster_type?: string;
    vpc_security_group_ids?: string;
    cluster_subnet_group_name?: string;
    availability_zone?: string;
    availability_zone_relocation_enabled?: string;
    preferred_maintenance_window?: string;
    cluster_parameter_group_name?: string;
    automated_snapshot_retention_period?: string;
    port?: string;
    cluster_version?: string;
    allow_version_upgrade?: string;
    apply_immediately?: string;
    aqua_configuration_status?: string;
    number_of_nodes?: string;
    publicly_accessible?: string;
    encrypted?: string;
    enhanced_vpc_routing?: string;
    kms_key_id?: string;
    elastic_ip?: string;
    skip_final_snapshot?: string;
    final_snapshot_identifier?: string;
    snapshot_identifier?: string;
    snapshot_cluster_identifier?: string;
    owner_account?: string;
    iam_roles?: string;
    maintenance_track_name?: string;
    manual_snapshot_retention_period?: string;
    tags?: string;
    bucket_name?: string;
    s3_key_prefix?: string;
    log_destination_type?: string;
    log_exports?: string;
    retention_period?: string;
    grant_name?: string;
    arn?: string;
    id?: string;
    endpoint?: string;
    dns_name?: string;
    cluster_public_key?: string;
    cluster_revision_number?: string;
    cluster_namespace_arn?: string;
    tags_all?: string;
    node_role?: string;
    private_ip_address?: string;
    public_ip_address?: string;
}
export interface RedshiftClusterIamRoles {
    cluster_identifier: string;
    iam_role_arns?: string;
    default_iam_role_arn?: string;
    id?: string;
}
export interface RedshiftClusterSnapshot {
    cluster_identifier: string;
    snapshot_identifier: string;
    manual_snapshot_retention_period?: string;
    tags?: string;
    arn?: string;
    id?: string;
    kms_key_id?: string;
    owner_account?: string;
    tags_all?: string;
}
export interface RedshiftEndpointAccess {
    cluster_identifier: string;
    endpoint_name: string;
    subnet_group_name: string;
    resource_owner?: string;
    vpc_security_group_ids?: string;
    address?: string;
    id?: string;
    port?: string;
    vpc_endpoint?: RedshiftEndpointAccessVpcEndpoint;
    network_interface?: RedshiftEndpointAccessNetworkInterface;
    subnet_id?: string;
}
export interface RedshiftEndpointAccessVpcEndpoint {
    network_interface?: string;
    vpc_endpoint_id?: string;
    vpc_id?: string;
}
export interface RedshiftEndpointAuthorization {
    account: string;
    cluster_identifier: string;
    force_delete?: string;
    vpc_ids?: string;
    allowed_all_vpcs?: string;
    id?: string;
    endpoint_count?: string;
    grantee?: string;
    grantor?: string;
}
export interface RedshiftEventSubscription {
    name: string;
    sns_topic_arn: string;
    source_ids?: string;
    source_type?: string;
    severity?: string;
    event_categories?: string;
    enabled?: string;
    tags?: string;
    arn?: string;
    id?: string;
    customer_aws_id?: string;
    tags_all?: string;
}
export interface RedshiftHSMClientCertificate {
    hsm_client_certificate_identifier: string;
    tags?: string;
    arn?: string;
    hsm_client_certificate_public_key?: string;
    tags_all?: string;
}
export interface RedshiftHSMConfiguration {
    description: string;
    hsm_configuration_identifier: string;
    hsm_ip_address: string;
    hsm_partition_name: string;
    hsm_partition_password: string;
    hsm_server_public_certificate: string;
    tags?: string;
    arn?: string;
    hsm_configuration_public_key?: string;
    tags_all?: string;
}
export interface RedshiftPartner {
    account_id: string;
    cluster_identifier: string;
    database_name: string;
    partner_name: string;
    id?: string;
    status?: string;
    status_message?: string;
}
export interface RedshiftScheduledAction {
    name: string;
    schedule: string;
    iam_role: string;
    description?: string;
    enable?: string;
    start_time?: string;
    end_time?: string;
    pause_cluster?: ECluster;
    resize_cluster?: ResizeCluster;
    resume_cluster?: ECluster;
    id?: string;
}
export interface ECluster {
    cluster_identifier: string;
}
export interface ResizeCluster {
    cluster_identifier: string;
    classic?: string;
    cluster_type?: string;
    node_type?: string;
    number_of_nodes?: string;
}
export interface RedshiftSnapshotCopyGrant {
    snapshot_copy_grant_name: string;
    kms_key_id?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface RedshiftSnapshotSchedule {
    identifier?: string;
    identifier_prefix?: string;
    description?: string;
    definitions?: string;
    force_destroy?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface RedshiftSnapshotScheduleAssociation {
    cluster_identifier: string;
    schedule_identifier: string;
}
export interface RedshiftSubnetGroup {
    name: string;
    subnet_ids: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface RedshiftUsageLimit {
    amount: string;
    cluster_identifier: string;
    feature_type: string;
    limit_type: string;
    breach_action?: string;
    period?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface RedshiftdataStatement {
    database: string;
    sql: string;
    cluster_identifier?: string;
    db_user?: string;
    secret_arn?: string;
    statement_name?: string;
    with_event?: string;
    workgroup_name?: string;
    id?: string;
}
export interface RedshiftserverlessEndpointAccess {
    endpoint_name: string;
    subnet_ids: string;
    workgroup_name: string;
    vpc_security_group_ids?: string;
    vpc_endpoint?: RedshiftserverlessEndpointAccessVpcEndpoint;
    subnet_id?: string;
}
export interface RedshiftserverlessEndpointAccessVpcEndpoint {
    network_interface?: PurpleNetworkInterface;
    subnet_id?: string;
}
export interface PurpleNetworkInterface {
    arn?: string;
    id?: string;
    address?: string;
    port?: string;
    vpc_endpoint?: string;
    vpc_endpoint_id?: string;
    vpc_id?: string;
    network_interface?: string;
    availability_zone?: string;
    network_interface_id?: string;
    private_ip_address?: string;
    subnet_id?: string;
}
export interface ResourceRedshiftserverlessNamespace {
    namespace_name: string;
    admin_user_password?: string;
    admin_username?: string;
    db_name?: string;
    default_iam_role_arn?: string;
    iam_roles?: string;
    kms_key_id?: string;
    log_exports?: string;
    tags?: string;
    arn?: string;
    id?: string;
    namespace_id?: string;
    tags_all?: string;
}
export interface RedshiftserverlessSnapshot {
    namespace_name: string;
    snapshot_name: string;
    retention_period?: string;
    accounts_with_provisioned_restore_access?: string;
    accounts_with_restore_access?: string;
    admin_username?: string;
    arn?: string;
    id?: string;
    kms_key_id?: string;
    namespace_arn?: string;
    owner_account?: string;
}
export interface RedshiftserverlessUsageLimit {
    amount: string;
    resource_arn: string;
    usage_type: string;
    breach_action?: string;
    period?: string;
    arn?: string;
    id?: string;
}
export interface ResourceRedshiftserverlessWorkgroup {
    namespace_name: string;
    workgroup_name: string;
    parameter_value: string;
    base_capacity?: string;
    config_parameter?: ConfigParameter;
    enhanced_vpc_routing?: string;
    publicly_accessible?: string;
    security_group_ids?: string;
    subnet_ids?: string;
    tags?: string;
    arn?: string;
    id?: string;
    workgroup_id?: string;
    endpoint?: RedshiftserverlessWorkgroupEndpoint;
    tags_all?: string;
    vpc_endpoint?: string;
    subnet_id?: string;
}
export interface ConfigParameter {
    parameter_key: string;
    parameter_value: string;
}
export interface Resourceexplorer2Index {
    type: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface Resourceexplorer2View {
    name: string;
    default_view?: string;
    filters?: Resourceexplorer2ViewFilters;
    included_property?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface Resourceexplorer2ViewFilters {
    filter_string: string;
}
export interface ResourcegroupsGroup {
    name: string;
    query: string;
    type: string;
    configuration?: string;
    description?: string;
    tags?: string;
    parameters?: string;
    values?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourcegroupsResource {
    group_arn: string;
    resource_arn: string;
    resource_type?: string;
}
export interface RolesanywhereProfile {
    name: string;
    role_arns: string;
    duration_seconds?: string;
    enabled?: string;
    managed_policy_arns?: string;
    require_instance_properties?: string;
    session_policy?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface RolesanywhereTrustAnchor {
    name: string;
    source_type: string;
    enabled?: string;
    tags?: string;
    acm_pca_arn?: string;
    x509_certificate_data?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceRoute {
    route_table_id: string;
    destination_cidr_block?: string;
    destination_ipv6_cidr_block?: string;
    destination_prefix_list_id?: string;
    carrier_gateway_id?: string;
    core_network_arn?: string;
    egress_only_gateway_id?: string;
    gateway_id?: string;
    nat_gateway_id?: string;
    local_gateway_id?: string;
    network_interface_id?: string;
    transit_gateway_id?: string;
    vpc_endpoint_id?: string;
    vpc_peering_connection_id?: string;
    id?: string;
    instance_id?: string;
    instance_owner_id?: string;
    origin?: string;
    state?: string;
}
export interface Route53CIDRCollection {
    name: string;
    arn?: string;
    id?: string;
    version?: string;
}
export interface Route53CIDRLocation {
    cidr_blocks: string;
    cidr_collection_id: string;
    name: string;
    id?: string;
}
export interface ResourceRoute53DelegationSet {
    reference_name?: string;
    arn?: string;
    id?: string;
    name_servers?: string;
}
export interface Route53HealthCheck {
    type: string;
    request_interval: string;
    reference_name?: string;
    fqdn?: string;
    ip_address?: string;
    port?: string;
    failure_threshold?: string;
    resource_path?: string;
    search_string?: string;
    measure_latency?: string;
    invert_healthcheck?: string;
    disabled?: string;
    enable_sni?: string;
    child_healthchecks?: string;
    child_health_threshold?: string;
    cloudwatch_alarm_name?: string;
    cloudwatch_alarm_region?: string;
    insufficient_data_health_status?: string;
    regions?: string;
    routing_control_arn?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface Route53HostedZoneDnssec {
    hosted_zone_id: string;
    signing_status?: string;
    id?: string;
}
export interface Route53KeySigningKey {
    hosted_zone_id: string;
    key_management_service_arn: string;
    name: string;
    status?: string;
    digest_algorithm_mnemonic?: string;
    digest_algorithm_type?: string;
    digest_value?: string;
    dnskey_record?: string;
    ds_record?: string;
    flag?: string;
    id?: string;
    key_tag?: string;
    public_key?: string;
    signing_algorithm_mnemonic?: string;
    signing_algorithm_type?: string;
}
export interface Route53QueryLog {
    cloudwatch_log_group_arn: string;
    zone_id: string;
    arn?: string;
    id?: string;
}
export interface Route53Record {
    ttl: string;
    records: string;
    set_identifier?: string;
    health_check_id?: string;
    alias?: Alias;
    cidr_routing_policy?: CIDRRoutingPolicy;
    failover_routing_policy?: ElasticInferenceAccelerator;
    geolocation_routing_policy?: GeolocationRoutingPolicy;
    latency_routing_policy?: LatencyRoutingPolicy;
    multivalue_answer_routing_policy?: string;
    weighted_routing_policy?: WeightedRoutingPolicy;
    allow_overwrite?: string;
    subdivision?: string;
    name?: string;
    fqdn?: string;
}
export interface Alias {
    name: string;
    zone_id: string;
    evaluate_target_health: string;
}
export interface CIDRRoutingPolicy {
    collection_id: string;
    location_name: string;
}
export interface GeolocationRoutingPolicy {
    continent?: string;
    country?: string;
    subdivision?: string;
}
export interface LatencyRoutingPolicy {
    region: string;
}
export interface WeightedRoutingPolicy {
    weight: string;
}
export interface Route53ResolverConfig {
    resource_id: string;
    autodefined_reverse_flag: string;
    id?: string;
    owner_id?: string;
}
export interface Route53ResolverDnssecConfig {
    resource_id: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    validation_status?: string;
}
export interface ResourceRoute53ResolverEndpoint {
    direction: string;
    ip_address: string;
    security_group_ids: string;
    subnet_id: string;
    name?: string;
    tags?: string;
    ip?: string;
    id?: string;
    arn?: string;
    host_vpc_id?: string;
    tags_all?: string;
}
export interface ResourceRoute53ResolverFirewallConfig {
    resource_id: string;
    firewall_fail_open: string;
    id?: string;
    owner_id?: string;
}
export interface ResourceRoute53ResolverFirewallDomainList {
    name: string;
    domains?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface Route53ResolverFirewallRule {
    name: string;
    action: string;
    block_override_dns_type: string;
    block_override_domain: string;
    block_override_ttl: string;
    block_response: string;
    firewall_domain_list_id: string;
    firewall_rule_group_id: string;
    priority: string;
    id?: string;
}
export interface ResourceRoute53ResolverFirewallRuleGroup {
    name: string;
    tags?: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    share_status?: string;
    tags_all?: string;
}
export interface ResourceRoute53ResolverFirewallRuleGroupAssociation {
    name: string;
    firewall_rule_group_id: string;
    priority: string;
    vpc_id: string;
    mutation_protection?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceRoute53ResolverQueryLogConfig {
    destination_arn: string;
    name: string;
    tags?: string;
    id?: string;
    arn?: string;
    owner_id?: string;
    share_status?: string;
    tags_all?: string;
}
export interface Route53ResolverQueryLogConfigAssociation {
    resolver_query_log_config_id: string;
    resource_id: string;
    id?: string;
}
export interface ResourceRoute53ResolverRule {
    domain_name: string;
    rule_type: string;
    ip: string;
    name?: string;
    resolver_endpoint_id?: string;
    tags?: string;
    port?: string;
    id?: string;
    arn?: string;
    owner_id?: string;
    share_status?: string;
    tags_all?: string;
}
export interface Route53ResolverRuleAssociation {
    resolver_rule_id: string;
    vpc_id: string;
    name?: string;
    id?: string;
}
export interface Route53TrafficPolicy {
    name: string;
    document: string;
    comment?: string;
    id?: string;
    type?: string;
    version?: string;
}
export interface Route53TrafficPolicyInstance {
    name: string;
    traffic_policy_id: string;
    traffic_policy_version: string;
    hosted_zone_id: string;
    ttl: string;
    id?: string;
}
export interface Route53VpcAssociationAuthorization {
    zone_id: string;
    vpc_id: string;
    vpc_region?: string;
    id?: string;
}
export interface ResourceRoute53Zone {
    name: string;
    vpc_id: string;
    comment?: string;
    delegation_set_id?: string;
    force_destroy?: string;
    tags?: string;
    vpc_region?: string;
    arn?: string;
    zone_id?: string;
    name_servers?: string;
    primary_name_server?: string;
    tags_all?: string;
}
export interface Route53ZoneAssociation {
    zone_id: string;
    vpc_id: string;
    vpc_region?: string;
    id?: string;
    owning_account?: string;
}
export interface Route53DomainsRegisteredDomain {
    domain_name: string;
    name: string;
    admin_contact?: string;
    admin_privacy?: string;
    auto_renew?: string;
    name_server?: string;
    registrant_contact?: string;
    registrant_privacy?: string;
    tags?: string;
    tech_contact?: string;
    tech_privacy?: string;
    transfer_lock?: string;
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    contact_type?: string;
    country_code?: string;
    email?: string;
    extra_params?: string;
    fax?: string;
    first_name?: string;
    last_name?: string;
    organization_name?: string;
    phone_number?: string;
    state?: string;
    zip_code?: string;
    glue_ips?: string;
    id?: string;
    abuse_contact_email?: string;
    abuse_contact_phone?: string;
    creation_date?: string;
    expiration_date?: string;
    registrar_name?: string;
    registrar_url?: string;
    reseller?: string;
    status_list?: string;
    tags_all?: string;
    updated_date?: string;
    whois_server?: string;
}
export interface Route53RecoverycontrolconfigCluster {
    name: string;
    arn?: string;
    cluster_endpoints?: ClusterEndpoints;
    status?: string;
    region?: string;
}
export interface ClusterEndpoints {
    endpoint?: string;
    region?: string;
}
export interface Route53RecoverycontrolconfigControlPanel {
    cluster_arn: string;
    name: string;
    arn?: string;
    default_control_panel?: string;
    routing_control_count?: string;
    status?: string;
}
export interface Route53RecoverycontrolconfigRoutingControl {
    cluster_arn: string;
    name: string;
    control_panel_arn?: string;
    arn?: string;
    status?: string;
}
export interface Route53RecoverycontrolconfigSafetyRule {
    control_panel_arn: string;
    name: string;
    rule_config: RuleConfig;
    wait_period_ms: string;
    asserted_controls?: string;
    gating_controls?: string;
    target_controls?: string;
    arn?: string;
    status?: string;
}
export interface RuleConfig {
    inverted?: string;
    threshold?: string;
    type?: string;
}
export interface Route53RecoveryreadinessCell {
    cell_name: string;
    cells?: string;
    tags?: string;
    arn?: string;
    parent_readiness_scopes?: string;
    tags_all?: string;
}
export interface Route53RecoveryreadinessReadinessCheck {
    readiness_check_name: string;
    resource_set_name: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface Route53RecoveryreadinessRecoveryGroup {
    recovery_group_name: string;
    cells?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface Route53RecoveryreadinessResourceSet {
    resource_set_name: string;
    resource_set_type: string;
    resources: Resources;
    dns_target_resource: DNSTargetResource;
    arn: string;
    tags?: string;
    target_resource?: TargetResource;
    nlb_resource?: SourceTemplate;
    r53_resource?: R53Resource;
    tags_all?: string;
}
export interface DNSTargetResource {
    domain_name?: string;
    hosted_zone_arn?: string;
    record_set_id?: string;
    record_type?: string;
    target_resource?: string;
}
export interface R53Resource {
    domain_name?: string;
    record_set_id?: string;
}
export interface Resources {
    dns_target_resource?: string;
    readiness_scopes?: string;
    resource_arn?: string;
}
export interface TargetResource {
    nlb_resource?: string;
    r53_resource?: string;
}
export interface ResourceRouteTable {
    vpc_id: string;
    cidr_block: string;
    tags?: string;
    propagating_vgws?: string;
    ipv6_cidr_block?: string;
    destination_prefix_list_id?: string;
    carrier_gateway_id?: string;
    core_network_arn?: string;
    egress_only_gateway_id?: string;
    gateway_id?: string;
    local_gateway_id?: string;
    nat_gateway_id?: string;
    network_interface_id?: string;
    transit_gateway_id?: string;
    vpc_endpoint_id?: string;
    vpc_peering_connection_id?: string;
    id?: string;
    arn?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface RouteTableAssociation {
    route_table_id: string;
    subnet_id?: string;
    gateway_id?: string;
    id?: string;
}
export interface RumAppMonitor {
    name: string;
    domain: string;
    app_monitor_configuration?: AppMonitorConfiguration;
    cw_log_enabled?: string;
    custom_events?: CustomEvents;
    tags?: string;
    arn?: string;
    id?: string;
    app_monitor_id?: string;
    cw_log_group?: string;
    tags_all?: string;
}
export interface AppMonitorConfiguration {
    allow_cookies?: string;
    enable_xray?: string;
    excluded_pages?: string;
    favorite_pages?: string;
    guest_role_arn?: string;
    identity_pool_id?: string;
    included_pages?: string;
    session_sample_rate?: string;
    telemetries?: string;
}
export interface CustomEvents {
    status?: string;
}
export interface RumMetricsDestination {
    app_monitor_name: string;
    destination: string;
    destination_arn?: string;
    iam_role_arn?: string;
    id?: string;
}
export interface S3AccessPoint {
    bucket: string;
    name: string;
    vpc_id: string;
    account_id?: string;
    bucket_account_id?: string;
    policy?: string;
    block_public_acls?: string;
    block_public_policy?: string;
    ignore_public_acls?: string;
    restrict_public_buckets?: string;
    alias?: string;
    arn?: string;
    domain_name?: string;
    endpoints?: string;
    has_public_access_policy?: string;
    id?: string;
    network_origin?: string;
}
export interface ResourceS3Bucket {
    bucket?: string;
    bucket_prefix?: string;
    force_destroy?: string;
    acceleration_status?: string;
    acl?: string;
    grant?: S3BucketGrant;
    cors_rule?: S3BucketCorsRule;
    lifecycle_rule?: LifecycleRule;
    logging?: S3BucketLogging;
    object_lock_configuration?: ObjectLockConfiguration;
    policy?: string;
    replication_configuration?: S3BucketReplicationConfiguration;
    request_payer?: string;
    server_side_encryption_configuration?: S3BucketServerSideEncryptionConfiguration;
    versioning?: Versioning;
    website?: Website;
    id?: string;
    arn?: string;
    bucket_domain_name?: string;
    bucket_regional_domain_name?: string;
    hosted_zone_id?: string;
    region?: string;
    tags_all?: string;
    website_endpoint?: string;
    website_domain?: string;
}
export interface S3BucketCorsRule {
    allowed_methods: string;
    allowed_origins: string;
    allowed_headers?: string;
    expose_headers?: string;
    max_age_seconds?: string;
}
export interface S3BucketGrant {
    type: string;
    permissions: string;
    id?: string;
    uri?: string;
}
export interface LifecycleRule {
    enabled: string;
    id?: string;
    prefix?: string;
    tags?: string;
    abort_incomplete_multipart_upload_days?: string;
    expiration?: Expiration;
    transition?: LifecycleRuleTransition;
    noncurrent_version_expiration?: LifecycleRuleNoncurrentVersionExpiration;
    noncurrent_version_transition?: LifecycleRuleNoncurrentVersionTransition;
}
export interface Expiration {
    date?: string;
    days?: string;
    expired_object_delete_marker?: string;
}
export interface LifecycleRuleNoncurrentVersionExpiration {
    days: string;
}
export interface LifecycleRuleNoncurrentVersionTransition {
    days: string;
    storage_class: string;
}
export interface LifecycleRuleTransition {
    storage_class: string;
    date?: string;
    days?: string;
}
export interface S3BucketLogging {
    target_bucket: string;
    target_prefix?: string;
}
export interface ObjectLockConfiguration {
    object_lock_enabled?: string;
    rule?: ObjectLockConfigurationRule;
}
export interface ObjectLockConfigurationRule {
    default_retention: DefaultRetention;
}
export interface DefaultRetention {
    days?: string;
    mode?: string;
    years?: string;
}
export interface S3BucketReplicationConfiguration {
    role: string;
    rules: ReplicationConfigurationRules;
}
export interface ReplicationConfigurationRules {
    delete_marker_replication_status?: string;
    destination?: RulesDestination;
    filter?: AndClass;
    id?: string;
    prefix?: string;
    priority?: string;
    source_selection_criteria?: RulesSourceSelectionCriteria;
    status?: string;
}
export interface RulesDestination {
    bucket: string;
    metrics: ReplicationTimeClass;
    storage_class?: string;
    replica_kms_key_id?: string;
    access_control_translation?: string;
    account_id?: string;
    replication_time?: ReplicationTimeClass;
}
export interface ReplicationTimeClass {
    status?: string;
    minutes?: string;
}
export interface AndClass {
    prefix?: string;
    tags?: string;
}
export interface RulesSourceSelectionCriteria {
    sse_kms_encrypted_objects?: EnclaveOptionsClass;
}
export interface S3BucketServerSideEncryptionConfiguration {
    sse_algorithm: string;
    bucket_key_enabled?: string;
    kms_master_key_id?: string;
}
export interface Versioning {
    enabled?: string;
    mfa_delete?: string;
}
export interface Website {
    index_document: string;
    error_document?: string;
    redirect_all_requests_to?: string;
    routing_rules?: string;
}
export interface S3BucketAccelerateConfiguration {
    bucket: string;
    status: string;
    expected_bucket_owner?: string;
    id?: string;
}
export interface S3BucketACL {
    bucket: string;
    acl?: string;
    access_control_policy?: AccessControlPolicy;
    expected_bucket_owner?: string;
    display_name?: string;
    uri?: string;
    id?: string;
}
export interface AccessControlPolicy {
    grant: AccessControlPolicyGrant;
    owner: CanonicalUserID;
}
export interface AccessControlPolicyGrant {
    grantee?: GrantGrantee;
    permission?: string;
}
export interface GrantGrantee {
    type: string;
    email_address?: string;
    id?: string;
    uri?: string;
}
export interface S3BucketAnalyticsConfiguration {
    bucket: string;
    name: string;
    bucket_arn: string;
    prefix?: string;
    tags?: string;
    output_schema_version?: string;
    bucket_account_id?: string;
    format?: string;
}
export interface S3BucketCorsConfiguration {
    bucket: string;
    cors_rule: S3BucketCorsConfigurationCorsRule;
    expected_bucket_owner?: string;
    id?: string;
}
export interface S3BucketCorsConfigurationCorsRule {
    allowed_headers?: string;
    allowed_methods?: string;
    allowed_origins?: string;
    expose_headers?: string;
    id?: string;
    max_age_seconds?: string;
}
export interface S3BucketIntelligentTieringConfiguration {
    bucket: string;
    name: string;
    access_tier: string;
    days: string;
    status?: string;
    prefix?: string;
    tags?: string;
}
export interface S3BucketInventory {
    name: string;
    included_object_versions: string;
    frequency: string;
    bucket_arn: string;
    format: string;
    key_id: string;
    enabled?: string;
    optional_fields?: string;
    prefix?: string;
    account_id?: string;
    sse_s3?: string;
}
export interface S3BucketLifecycleConfiguration {
    bucket: string;
    rule: S3BucketLifecycleConfigurationRule;
    value: string;
    expected_bucket_owner?: string;
    abort_incomplete_multipart_upload?: AbortIncompleteMultipartUpload;
    noncurrent_version_expiration?: S3BucketLifecycleConfigurationNoncurrentVersionExpiration;
    noncurrent_version_transition?: S3BucketLifecycleConfigurationNoncurrentVersionTransition;
    object_size_greater_than?: string;
    object_size_less_than?: string;
    tags?: string;
    id?: string;
}
export interface AbortIncompleteMultipartUpload {
    days_after_initiation?: string;
}
export interface S3BucketLifecycleConfigurationNoncurrentVersionExpiration {
    newer_noncurrent_versions?: string;
    noncurrent_days?: string;
}
export interface S3BucketLifecycleConfigurationNoncurrentVersionTransition {
    storage_class: string;
    newer_noncurrent_versions?: string;
    noncurrent_days?: string;
}
export interface S3BucketLifecycleConfigurationRule {
    abort_incomplete_multipart_upload?: string;
    expiration?: Expiration;
    filter?: PurpleFilter;
    id?: string;
    noncurrent_version_expiration?: string;
    noncurrent_version_transition?: string;
    prefix?: string;
    status?: string;
    transition?: RuleTransition;
}
export interface PurpleFilter {
    object_size_greater_than?: string;
    object_size_less_than?: string;
    prefix?: string;
    tag?: ParameterClass;
}
export interface RuleTransition {
    date?: string;
    days?: string;
    storage_class?: string;
}
export interface S3BucketLoggingClass {
    bucket: string;
    target_bucket: string;
    target_prefix: string;
    expected_bucket_owner?: string;
    target_grant?: TargetGrant;
    uri?: string;
    id?: string;
}
export interface TargetGrant {
    grantee: TargetGrantGrantee;
    permission: string;
}
export interface TargetGrantGrantee {
    email_address?: string;
    id?: string;
    type?: string;
    uri?: string;
}
export interface S3BucketMetric {
    bucket: string;
    name: string;
    prefix?: string;
    tags?: string;
}
export interface S3BucketNotification {
    bucket: string;
    lambda_function_arn: string;
    queue_arn: string;
    topic_arn: string;
    eventbridge?: string;
    lambda_function?: S3BucketNotificationLambdaFunction;
    queue?: Queue;
    topic?: S3BucketNotificationTopic;
}
export interface S3BucketNotificationLambdaFunction {
    events: string;
    lambda_function_arn: string;
    filter_prefix?: string;
    filter_suffix?: string;
    id?: string;
}
export interface Queue {
    events: string;
    queue_arn: string;
    filter_prefix?: string;
    filter_suffix?: string;
    id?: string;
}
export interface S3BucketNotificationTopic {
    events: string;
    topic_arn: string;
    filter_prefix?: string;
    filter_suffix?: string;
    id?: string;
}
export interface ResourceS3BucketObject {
    bucket: string;
    key: string;
    acl?: string;
    bucket_key_enabled?: string;
    cache_control?: string;
    content_base64?: string;
    content_disposition?: string;
    content_encoding?: string;
    content_language?: string;
    content_type?: string;
    content?: string;
    etag?: string;
    force_destroy?: string;
    kms_key_id?: string;
    metadata?: string;
    object_lock_legal_hold_status?: string;
    object_lock_mode?: string;
    object_lock_retain_until_date?: string;
    server_side_encryption?: string;
    source_hash?: string;
    source?: string;
    storage_class?: string;
    tags?: string;
    website_redirect?: string;
    id?: string;
    tags_all?: string;
    version_id?: string;
}
export interface S3BucketObjectLockConfiguration {
    bucket: string;
    default_retention: DefaultRetention;
    expected_bucket_owner?: string;
    object_lock_enabled?: string;
    rule?: S3BucketObjectLockConfigurationRule;
    token?: string;
    id?: string;
}
export interface S3BucketObjectLockConfigurationRule {
    default_retention: string;
}
export interface S3BucketOwnershipControls {
    bucket: string;
    object_ownership: string;
    bucketownerpreferred?: string;
    objectwriter?: string;
    bucketownerenforced?: string;
    id?: string;
}
export interface ResourceS3BucketPolicy {
    bucket: string;
    policy: string;
}
export interface S3BucketPublicAccessBlock {
    bucket: string;
    block_public_acls?: string;
    block_public_policy?: string;
    ignore_public_acls?: string;
    restrict_public_buckets?: string;
    id?: string;
}
export interface S3BucketReplicationConfigurationClass {
    role: string;
    rule: S3BucketReplicationConfigurationRule;
    minutes: string;
    value: string;
    token?: string;
    existing_object_replication?: ExistingObjectReplication;
    source_selection_criteria?: S3BucketReplicationConfigurationSourceSelectionCriteria;
    access_control_translation?: AccessControlTranslation;
    encryption_configuration?: S3BucketReplicationConfigurationEncryptionConfiguration;
    replication_time?: ReplicationTime;
    event_threshold?: EventThreshold;
    replica_modifications?: ExistingObjectReplication;
    sse_kms_encrypted_objects?: ExistingObjectReplication;
    id?: string;
}
export interface AccessControlTranslation {
    owner: string;
}
export interface S3BucketReplicationConfigurationEncryptionConfiguration {
    replica_kms_key_id: string;
}
export interface EventThreshold {
    minutes: string;
}
export interface ExistingObjectReplication {
    status: string;
}
export interface ReplicationTime {
    status: string;
    time: Time;
}
export interface Time {
    minutes?: string;
}
export interface S3BucketReplicationConfigurationRule {
    delete_marker_replication?: CustomEvents;
    destination?: FluffyDestination;
    existing_object_replication?: string;
    filter?: FluffyFilter;
    id?: string;
    prefix?: string;
    priority?: string;
    source_selection_criteria?: string;
    status?: string;
}
export interface FluffyDestination {
    bucket: string;
    access_control_translation?: string;
    account?: string;
    encryption_configuration?: string;
    metrics?: PurpleMetrics;
    replication_time?: string;
    storage_class?: string;
}
export interface PurpleMetrics {
    status: string;
    event_threshold?: string;
}
export interface FluffyFilter {
    and?: AndClass;
    prefix?: string;
    tag?: ParameterClass;
}
export interface S3BucketReplicationConfigurationSourceSelectionCriteria {
    replica_modifications?: string;
    sse_kms_encrypted_objects?: string;
}
export interface S3BucketRequestPaymentConfiguration {
    bucket: string;
    payer: string;
    expected_bucket_owner?: string;
    id?: string;
}
export interface S3BucketServerSideEncryptionConfigurationClass {
    bucket: string;
    rule: S3BucketServerSideEncryptionConfigurationRule;
    expected_bucket_owner?: string;
    apply_server_side_encryption_by_default?: ApplyServerSideEncryptionByDefault;
    id?: string;
}
export interface ApplyServerSideEncryptionByDefault {
    sse_algorithm: string;
    kms_master_key_id?: string;
}
export interface S3BucketServerSideEncryptionConfigurationRule {
    apply_server_side_encryption_by_default?: string;
    bucket_key_enabled?: string;
}
export interface S3BucketVersioning {
    bucket: string;
    versioning_configuration: VersioningConfiguration;
    expected_bucket_owner?: string;
    mfa?: string;
    id?: string;
}
export interface VersioningConfiguration {
    status?: string;
    mfa_delete?: string;
}
export interface S3BucketWebsiteConfiguration {
    bucket: string;
    error_document?: ErrorDocument;
    expected_bucket_owner?: string;
    index_document?: IndexDocument;
    redirect_all_requests_to?: RedirectAllRequestsTo;
    routing_rule?: RoutingRule;
    routing_rules?: string;
    id?: string;
    website_domain?: string;
    website_endpoint?: string;
}
export interface ErrorDocument {
    key: string;
}
export interface IndexDocument {
    suffix: string;
}
export interface RedirectAllRequestsTo {
    host_name: string;
    protocol?: string;
}
export interface RoutingRule {
    redirect: RoutingRuleRedirect;
    condition?: RoutingRuleCondition;
}
export interface RoutingRuleCondition {
    http_error_code_returned_equals?: string;
    key_prefix_equals?: string;
}
export interface RoutingRuleRedirect {
    host_name?: string;
    http_redirect_code?: string;
    protocol?: string;
    replace_key_prefix_with?: string;
    replace_key_with?: string;
}
export interface ResourceS3Object {
    bucket: string;
    key: string;
    acl?: string;
    bucket_key_enabled?: string;
    cache_control?: string;
    checksum_algorithm?: string;
    content_base64?: string;
    content_disposition?: string;
    content_encoding?: string;
    content_language?: string;
    content_type?: string;
    content?: string;
    etag?: string;
    force_destroy?: string;
    kms_key_id?: string;
    metadata?: string;
    object_lock_legal_hold_status?: string;
    object_lock_mode?: string;
    object_lock_retain_until_date?: string;
    server_side_encryption?: string;
    source_hash?: string;
    source?: string;
    storage_class?: string;
    tags?: string;
    website_redirect?: string;
    checksum_crc32?: string;
    checksum_crc32c?: string;
    checksum_sha1?: string;
    checksum_sha256?: string;
    id?: string;
    tags_all?: string;
    version_id?: string;
}
export interface S3ObjectCopy {
    bucket: string;
    key: string;
    source: string;
    acl?: string;
    cache_control?: string;
    checksum_algorithm?: string;
    content_disposition?: string;
    content_encoding?: string;
    content_language?: string;
    content_type?: string;
    copy_if_match?: string;
    copy_if_modified_since?: string;
    copy_if_none_match?: string;
    copy_if_unmodified_since?: string;
    customer_algorithm?: string;
    customer_key?: string;
    customer_key_md5?: string;
    expected_bucket_owner?: string;
    expected_source_bucket_owner?: string;
    expires?: string;
    force_destroy?: string;
    grant?: S3ObjectCopyGrant;
    kms_encryption_context?: string;
    kms_key_id?: string;
    metadata?: string;
    metadata_directive?: string;
    object_lock_legal_hold_status?: string;
    object_lock_mode?: string;
    object_lock_retain_until_date?: string;
    request_payer?: string;
    server_side_encryption?: string;
    source_customer_algorithm?: string;
    source_customer_key?: string;
    source_customer_key_md5?: string;
    storage_class?: string;
    tagging_directive?: string;
    tags?: string;
    website_redirect?: string;
    checksum_crc32?: string;
    checksum_crc32c?: string;
    checksum_sha1?: string;
    checksum_sha256?: string;
    etag?: string;
    expiration?: string;
    id?: string;
    last_modified?: string;
    request_charged?: string;
    source_version_id?: string;
    tags_all?: string;
    version_id?: string;
}
export interface S3ObjectCopyGrant {
    permissions: string;
    type: string;
    email?: string;
    id?: string;
    uri?: string;
}
export interface S3ControlAccessPointPolicy {
    access_point_arn: string;
    policy: string;
    has_public_access_policy?: string;
    id?: string;
}
export interface S3ControlBucket {
    bucket: string;
    outpost_id: string;
    tags?: string;
    arn?: string;
    creation_date?: string;
    id?: string;
    public_access_block_enabled?: string;
    tags_all?: string;
}
export interface S3ControlBucketLifecycleConfiguration {
    bucket: string;
    rule: string;
    days_after_initiation: string;
    id: string;
    abort_incomplete_multipart_upload?: string;
    expiration?: string;
    date?: string;
    days?: string;
    expired_object_delete_marker?: string;
    filter?: string;
    prefix?: string;
    tags?: string;
    status?: string;
}
export interface S3ControlBucketPolicy {
    bucket: string;
    policy: string;
    id?: string;
}
export interface ResourceS3ControlMultiRegionAccessPoint {
    account_id?: string;
    alias?: string;
    arn?: string;
    domain_name?: string;
    id?: string;
    status?: string;
}
export interface S3ControlMultiRegionAccessPointPolicy {
    name: string;
    policy: string;
    account_id?: string;
    established?: string;
    id?: string;
    proposed?: string;
}
export interface S3ControlObjectLambdaAccessPoint {
    configuration: S3ControlObjectLambdaAccessPointConfiguration;
    name: string;
    function_arn: string;
    account_id?: string;
    function_payload?: string;
    alias?: string;
    arn?: string;
    id?: string;
}
export interface S3ControlObjectLambdaAccessPointConfiguration {
    allowed_features?: string;
    cloud_watch_metrics_enabled?: string;
    supporting_access_point?: string;
    transformation_configuration?: TransformationConfiguration;
}
export interface TransformationConfiguration {
    actions: string;
    content_transformation: ContentTransformation;
}
export interface ContentTransformation {
    aws_lambda?: AwsLambda;
}
export interface AwsLambda {
    function_arn: string;
    function_payload?: string;
}
export interface S3ControlObjectLambdaAccessPointPolicy {
    name: string;
    policy: string;
    account_id?: string;
    has_public_access_policy?: string;
    id?: string;
}
export interface S3ControlStorageLensConfiguration {
    config_id: string;
    storage_lens_configuration: StorageLensConfiguration;
    storage_metrics: string;
    key_id: string;
    account_id?: string;
    tags?: string;
    enabled?: string;
    selection_criteria?: SelectionCriteria;
    sse_kms?: SSEKms;
    sse_s3?: string;
    arn?: string;
    tags_all?: string;
}
export interface SelectionCriteria {
    delimiter?: string;
    max_depth?: string;
    min_storage_bytes_percentage?: string;
}
export interface SSEKms {
    key_id: string;
}
export interface StorageLensConfiguration {
    account_level?: AccountLevel;
    aws_org?: AwsOrgClass;
    data_export?: DataExport;
    enabled?: string;
    exclude?: Clude;
    include?: Clude;
}
export interface AccountLevel {
    bucket_level: BucketLevel;
}
export interface BucketLevel {
    activity_metrics?: EnclaveOptionsClass;
    detailed_status_code_metrics?: EnclaveOptionsClass;
    prefix_level?: PrefixLevel;
}
export interface PrefixLevel {
    storage_metrics?: string;
}
export interface DataExport {
    cloud_watch_metrics?: EnclaveOptionsClass;
    s3_bucket_destination?: S3BucketDestination;
}
export interface S3BucketDestination {
    account_id?: string;
    arn?: string;
    encryption?: Encryption;
    format?: string;
    output_schema_version?: string;
    prefix?: string;
}
export interface Encryption {
    sse_s3?: string;
}
export interface Clude {
    buckets?: string;
    regions?: string;
}
export interface S3OutpostsEndpoint {
    outpost_id: string;
    security_group_id: string;
    subnet_id: string;
    access_type?: string;
    customer_owned_ipv4_pool?: string;
    arn?: string;
    cidr_block?: string;
    creation_time?: string;
    id?: string;
    network_interfaces?: string;
    network_interface_id?: string;
}
export interface SagemakerApp {
    app_name: string;
    app_type: string;
    domain_id: string;
    user_profile_name?: string;
    resource_spec?: ResourceSpec;
    space_name?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceSpec {
    instance_type?: string;
    lifecycle_config_arn?: string;
    sagemaker_image_arn?: string;
    sagemaker_image_version_arn?: string;
}
export interface SagemakerAppImageConfig {
    app_image_config_name: string;
    kernel_gateway_image_config?: KernelGatewayImageConfig;
    tags?: string;
    display_name?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface KernelGatewayImageConfig {
    kernel_spec: KernelSpec;
    file_system_config?: KernelGatewayImageConfigFileSystemConfig;
    display_name?: string;
}
export interface KernelGatewayImageConfigFileSystemConfig {
    default_gid?: string;
    default_uid?: string;
    mount_path?: string;
}
export interface KernelSpec {
    name?: string;
    display_name?: string;
}
export interface SagemakerCodeRepository {
    code_repository_name: string;
    git_config: GitConfig;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface GitConfig {
    repository_url?: string;
    branch?: string;
    secret_arn?: string;
}
export interface SagemakerDataQualityJobDefinition {
    data_quality_app_specification: DataQualityAppSpecification;
    data_quality_job_input: DataQualityJobInput;
    data_quality_job_output_config: DataQualityJobOutputConfig;
    job_resources: JobResources;
    role_arn: string;
    data_quality_baseline_config?: DataQualityBaselineConfig;
    name?: string;
    network_config?: NetworkConfig;
    stopping_condition?: StoppingCondition;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface DataQualityAppSpecification {
    environment?: string;
    image_uri?: string;
    post_analytics_processor_source_uri?: string;
    record_preprocessor_source_uri?: string;
}
export interface DataQualityBaselineConfig {
    constraints_resource?: SResource;
    statistics_resource?: SResource;
}
export interface SResource {
    s3_uri?: string;
}
export interface DataQualityJobInput {
    batch_transform_input?: BatchTransformInput;
    endpoint_input?: EndpointInput;
}
export interface BatchTransformInput {
    data_captured_destination_s3_uri?: string;
    dataset_format?: DatasetFormat;
    local_path?: string;
    s3_data_distribution_type?: string;
    s3_input_mode?: string;
}
export interface DatasetFormat {
    header?: string;
    line?: string;
}
export interface EndpointInput {
    endpoint_name?: string;
    local_path?: string;
    s3_data_distribution_type?: string;
    s3_input_mode?: string;
}
export interface DataQualityJobOutputConfig {
    kms_key_id?: string;
    monitoring_outputs?: MonitoringOutputs;
}
export interface MonitoringOutputs {
    s3_output: S3Output;
}
export interface S3Output {
    local_path?: string;
    s3_upload_mode?: string;
    s3_uri?: string;
}
export interface JobResources {
    cluster_config?: JobResourcesClusterConfig;
}
export interface JobResourcesClusterConfig {
    instance_count: string;
    instance_type: string;
    volume_size_in_gb: string;
    volume_kms_key_id?: string;
}
export interface NetworkConfig {
    enable_inter_container_traffic_encryption?: string;
    enable_network_isolation?: string;
    vpc_config?: ComprehendDocumentClassifierVpcConfig;
}
export interface StoppingCondition {
    max_runtime_in_seconds: string;
}
export interface SagemakerDevice {
    device_fleet_name: string;
    device: Device;
    id?: string;
    arn?: string;
}
export interface Device {
    description?: string;
    device_name?: string;
    iot_thing_name?: string;
}
export interface SagemakerDeviceFleet {
    device_fleet_name: string;
    role_arn: string;
    output_config: SagemakerDeviceFleetOutputConfig;
    description?: string;
    enable_iot_role_alias?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface SagemakerDeviceFleetOutputConfig {
    s3_output_location?: string;
    kms_key_id?: string;
}
export interface SagemakerDomain {
    auth_mode: string;
    default_space_settings: DefaultSpaceSettings;
    default_user_settings: DefaultUserSettings;
    domain_name: string;
    subnet_ids: string;
    vpc_id: string;
    app_network_access_type?: string;
    app_security_group_management?: string;
    domain_settings?: DomainSettings;
    kms_key_id?: string;
    retention_policy?: RetentionPolicy;
    tags?: string;
    canvas_app_settings?: string;
    r_session_app_settings?: string;
    r_studio_server_pro_app_settings?: string;
    sharing_settings?: string;
    tensor_board_app_settings?: string;
    r_studio_server_pro_domain_settings?: string;
    id?: string;
    arn?: string;
    url?: string;
    single_sign_on_managed_application_instance_id?: string;
    security_group_id_for_domain_boundary?: string;
    home_efs_file_system_id?: string;
    tags_all?: string;
}
export interface DefaultSpaceSettings {
    execution_role?: string;
    jupyter_server_app_settings?: string;
    kernel_gateway_app_settings?: string;
    security_groups?: string;
}
export interface DefaultUserSettings {
    execution_role?: string;
    canvas_app_settings?: CanvasAppSettings;
    jupyter_server_app_settings?: DefaultUserSettingsJupyterServerAppSettings;
    kernel_gateway_app_settings?: KernelGatewayAppSettings;
    r_session_app_settings?: RSessionAppSettings;
    r_studio_server_pro_app_settings?: RStudioServerProAppSettings;
    security_groups?: string;
    sharing_settings?: SharingSettings;
    tensor_board_app_settings?: TensorBoardAppSettings;
    model_register_settings?: string;
    time_series_forecasting_settings?: string;
    workspace_settings?: string;
    code_repository?: string;
}
export interface CanvasAppSettings {
    model_register_settings?: ModelRegisterSettings;
    time_series_forecasting_settings?: TimeSeriesForecastingSettings;
    workspace_settings?: WorkspaceSettings;
}
export interface ModelRegisterSettings {
    cross_account_model_register_role_arn?: string;
    status?: string;
}
export interface TimeSeriesForecastingSettings {
    amazon_forecast_role_arn?: string;
    status?: string;
}
export interface WorkspaceSettings {
    s3_artifact_path?: string;
    s3_kms_key_id?: string;
}
export interface DefaultUserSettingsJupyterServerAppSettings {
    code_repository?: JupyterServerAppSettingsCodeRepository;
    default_resource_spec?: ResourceSpec;
    lifecycle_config_arns?: string;
    repository_url?: string;
}
export interface JupyterServerAppSettingsCodeRepository {
    repository_url?: string;
}
export interface KernelGatewayAppSettings {
    custom_image?: string;
    default_resource_spec?: string;
    lifecycle_config_arns?: string;
}
export interface RSessionAppSettings {
    custom_image?: CustomImage;
    default_resource_spec?: string;
}
export interface CustomImage {
    app_image_config_name?: string;
    image_name?: string;
    image_version_number?: string;
}
export interface RStudioServerProAppSettings {
    access_status?: string;
    user_group?: string;
}
export interface SharingSettings {
    notebook_output_option?: string;
    s3_kms_key_id?: string;
    s3_output_path?: string;
}
export interface TensorBoardAppSettings {
    default_resource_spec?: string;
}
export interface DomainSettings {
    execution_role_identity_config?: string;
    r_studio_server_pro_domain_settings?: RStudioServerProDomainSettings;
    security_group_ids?: string;
}
export interface RStudioServerProDomainSettings {
    domain_execution_role_arn: string;
    default_resource_spec?: string;
    r_studio_connect_url?: string;
    r_studio_package_manager_url?: string;
}
export interface RetentionPolicy {
    home_efs_file_system?: string;
}
export interface SagemakerEndpoint {
    endpoint_config_name: string;
    deployment_config?: DeploymentConfig;
    name?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface DeploymentConfig {
    blue_green_update_policy?: string;
    auto_rollback_configuration?: AutoRollbackConfiguration;
    rolling_update_policy?: RollingUpdatePolicy;
    termination_wait_in_seconds?: string;
}
export interface AutoRollbackConfiguration {
    alarms: AutoRollbackConfigurationAlarms;
}
export interface AutoRollbackConfigurationAlarms {
    alarm_name?: string;
}
export interface RollingUpdatePolicy {
    wait_interval_in_seconds: string;
    type: string;
    value: string;
    maximum_execution_timeout_in_seconds?: string;
}
export interface SagemakerEndpointConfiguration {
    production_variants: ProductionVariants;
    output_config: string;
    kms_key_arn?: string;
    name?: string;
    name_prefix?: string;
    tags?: string;
    data_capture_config?: DataCaptureConfig;
    async_inference_config?: AsyncInferenceConfig;
    serverless_config?: string;
    client_config?: string;
    arn?: string;
    tags_all?: string;
}
export interface AsyncInferenceConfig {
    output_config: AsyncInferenceConfigOutputConfig;
    client_config?: ClientConfig;
    notification_config?: string;
}
export interface ClientConfig {
    max_concurrent_invocations_per_instance?: string;
}
export interface AsyncInferenceConfigOutputConfig {
    s3_output_path?: string;
    s3_failure_path?: string;
    kms_key_id?: string;
    notification_config?: NotificationConfig;
}
export interface NotificationConfig {
    include_inference_response_in?: string;
    error_topic?: string;
    success_topic?: string;
}
export interface DataCaptureConfig {
    initial_sampling_percentage: string;
    destination_s3_uri: string;
    capture_options: CaptureOptions;
    kms_key_id?: string;
    enable_capture?: string;
    capture_content_type_header?: CaptureContentTypeHeader;
}
export interface CaptureContentTypeHeader {
    csv_content_types?: string;
    json_content_types?: string;
}
export interface CaptureOptions {
    capture_mode?: string;
}
export interface ProductionVariants {
    accelerator_type?: string;
    container_startup_health_check_timeout_in_seconds?: string;
    core_dump_config?: CoreDumpConfig;
    enable_ssm_access?: string;
    initial_instance_count?: string;
    instance_type?: string;
    initial_variant_weight?: string;
    model_data_download_timeout_in_seconds?: string;
    model_name?: string;
    serverless_config?: ServerlessConfig;
    variant_name?: string;
    volume_size_in_gb?: string;
}
export interface CoreDumpConfig {
    destination_s3_uri?: string;
    kms_key_id?: string;
}
export interface ServerlessConfig {
    max_concurrency?: string;
    memory_size_in_mb?: string;
    provisioned_concurrency?: string;
}
export interface SagemakerFeatureGroup {
    feature_group_name: string;
    record_identifier_feature_name: string;
    event_time_feature_name: string;
    role_arn: string;
    description?: string;
    feature_definition?: FeatureDefinition;
    offline_store_config?: OfflineStoreConfig;
    online_store_config?: OnlineStoreConfig;
    tags?: string;
    name?: string;
    arn?: string;
    tags_all?: string;
}
export interface FeatureDefinition {
    feature_name: string;
    feature_type: string;
}
export interface OfflineStoreConfig {
    enable_online_store?: string;
    table_format?: string;
}
export interface OnlineStoreConfig {
    security_config: SecurityConfigClass;
    s3_uri: string;
    disable_glue_table_creation?: string;
    catalog?: string;
    database?: string;
    table_name?: string;
}
export interface SagemakerFlowDefinition {
    flow_definition_name: string;
    human_loop_config: HumanLoopConfig;
    role_arn: string;
    output_config: SagemakerFlowDefinitionOutputConfig;
    human_loop_activation_config?: HumanLoopActivationConfig;
    human_loop_request_source?: HumanLoopRequestSource;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface HumanLoopActivationConfig {
    human_loop_activation_conditions_config: HumanLoopActivationConditionsConfig;
}
export interface HumanLoopActivationConditionsConfig {
    human_loop_activation_conditions?: string;
}
export interface HumanLoopConfig {
    human_task_ui_arn?: string;
    public_workforce_task_price?: PublicWorkforceTaskPrice;
    task_availability_lifetime_in_seconds?: string;
    task_count?: string;
    task_description?: string;
    task_keywords?: string;
    task_time_limit_in_seconds?: string;
    task_title?: string;
    workteam_arn?: string;
}
export interface PublicWorkforceTaskPrice {
    amount_in_usd?: AmountInUsd;
}
export interface AmountInUsd {
    cents?: string;
    dollars?: string;
    tenth_fractions_of_a_cent?: string;
}
export interface HumanLoopRequestSource {
    aws_managed_human_loop_request_source: string;
}
export interface SagemakerFlowDefinitionOutputConfig {
    s3_output_path?: string;
    kms_key_id?: string;
}
export interface SagemakerHumanTaskUI {
    human_task_ui_name: string;
    ui_template: UITemplate;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
    url?: string;
}
export interface UITemplate {
    content_sha256?: string;
    url?: string;
}
export interface SagemakerImage {
    image_name: string;
    role_arn: string;
    display_name?: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface SagemakerImageVersion {
    image_name: string;
    base_image: string;
    id?: string;
    arn?: string;
    container_image?: string;
}
export interface SagemakerModel {
    execution_role_arn: string;
    name?: string;
    enable_network_isolation?: string;
    vpc_config?: string;
    tags?: string;
    image?: string;
    mode?: string;
    model_data_url?: string;
    model_package_name?: string;
    container_hostname?: string;
    environment?: string;
    image_config?: SagemakerModelImageConfig;
    arn?: string;
    tags_all?: string;
}
export interface SagemakerModelImageConfig {
    repository_access_mode: string;
    repository_auth_config?: RepositoryAuthConfig;
}
export interface RepositoryAuthConfig {
    repository_credentials_provider_arn: string;
}
export interface SagemakerModelPackageGroup {
    model_package_group_name: string;
    model_package_group_description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface SagemakerModelPackageGroupPolicy {
    model_package_group_name: string;
    id?: string;
}
export interface SagemakerMonitoringSchedule {
    monitoring_schedule_config: MonitoringScheduleConfig;
    name?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface MonitoringScheduleConfig {
    monitoring_job_definition_name?: string;
    monitoring_type?: string;
    schedule_config?: ScheduleConfig;
}
export interface ScheduleConfig {
    schedule_expression?: string;
}
export interface SagemakerNotebookInstance {
    name: string;
    role_arn: string;
    instance_type: string;
    platform_identifier?: string;
    volume_size?: string;
    subnet_id?: string;
    security_groups?: string;
    accelerator_types?: string;
    additional_code_repositories?: string;
    default_code_repository?: string;
    direct_internet_access?: string;
    instance_metadata_service_configuration?: InstanceMetadataServiceConfiguration;
    kms_key_id?: string;
    lifecycle_config_name?: string;
    root_access?: string;
    tags?: string;
    id?: string;
    arn?: string;
    url?: string;
    network_interface_id?: string;
    tags_all?: string;
}
export interface InstanceMetadataServiceConfiguration {
    minimum_instance_metadata_service_version?: string;
}
export interface SagemakerNotebookInstanceLifecycleConfiguration {
    name?: string;
    on_create?: string;
    on_start?: string;
    arn?: string;
}
export interface SagemakerPipeline {
    pipeline_name: string;
    pipeline_display_name: string;
    role_arn: string;
    pipeline_description?: string;
    pipeline_definition?: string;
    pipeline_definition_s3_location?: PipelineDefinitionS3Location;
    parallelism_configuration?: ParallelismConfiguration;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ParallelismConfiguration {
    max_parallel_execution_steps: string;
}
export interface PipelineDefinitionS3Location {
    bucket: string;
    object_key: string;
    version_id?: string;
}
export interface SagemakerProject {
    project_name: string;
    service_catalog_provisioning_details: ServiceCatalogProvisioningDetails;
    project_description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    project_id?: string;
    tags_all?: string;
}
export interface ServiceCatalogProvisioningDetails {
    path_id?: string;
    product_id?: string;
    provisioning_artifact_id?: string;
    provisioning_parameter?: ParameterClass;
}
export interface SagemakerServicecatalogPortfolioStatus {
    status: string;
    id?: string;
}
export interface SagemakerSpace {
    space_name: string;
    domain_id: string;
    space_settings: SpaceSettings;
    tags?: string;
    id?: string;
    arn?: string;
    home_efs_file_system_uid?: string;
    tags_all?: string;
}
export interface SpaceSettings {
    jupyter_server_app_settings?: SpaceSettingsJupyterServerAppSettings;
    kernel_gateway_app_settings?: AppSettings;
}
export interface SpaceSettingsJupyterServerAppSettings {
    code_repository?: JupyterServerAppSettingsCodeRepository;
    default_resource_spec?: ResourceSpec;
    lifecycle_config_arns?: string;
    repository_url?: string;
    app_image_config_name?: string;
    image_name?: string;
    image_version_number?: string;
}
export interface AppSettings {
    lifecycle_config_arns?: string;
}
export interface SagemakerStudioLifecycleConfig {
    studio_lifecycle_config_name: string;
    studio_lifecycle_config_app_type: string;
    studio_lifecycle_config_content: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface SagemakerUserProfile {
    user_profile_name: string;
    domain_id: string;
    single_sign_on_user_value: string;
    user_settings: SagemakerUserProfileUserSettings;
    single_sign_on_user_identifier?: string;
    tags?: string;
    id?: string;
    arn?: string;
    home_efs_file_system_uid?: string;
    tags_all?: string;
}
export interface SagemakerUserProfileUserSettings {
    execution_role?: string;
    security_groups?: string;
    sharing_settings?: SharingSettings;
    tensor_board_app_settings?: string;
    jupyter_server_app_settings?: AppSettings;
    kernel_gateway_app_settings?: AppSettings;
    r_session_app_settings?: string;
    r_studio_server_pro_app_settings?: string;
    canvas_app_settings?: KmsSecretClass;
    s3_kms_key_id?: string;
    access_status?: string;
    user_group?: string;
    repository_url?: string;
    instance_type?: string;
    lifecycle_config_arn?: string;
    sagemaker_image_arn?: string;
    sagemaker_image_version_arn?: string;
    app_image_config_name?: string;
    image_name?: string;
    image_version_number?: string;
    amazon_forecast_role_arn?: string;
    status?: string;
    cross_account_model_register_role_arn?: string;
    s3_artifact_path?: string;
}
export interface SagemakerWorkforce {
    workforce_name: string;
    user_pool: string;
    cidrs: string;
    cognito_config?: CognitoConfig;
    oidc_config?: OidcConfig;
    source_ip_config?: SourceIPConfig;
    workforce_vpc_config?: WorkforceVpcConfig;
    arn?: string;
    id?: string;
    subdomain?: string;
}
export interface CognitoConfig {
    client_id: string;
    user_pool: string;
}
export interface OidcConfig {
    authorization_endpoint: string;
    client_id: string;
    client_secret: string;
    issuer: string;
    jwks_uri: string;
    logout_endpoint: string;
    token_endpoint: string;
    user_info_endpoint: string;
}
export interface SourceIPConfig {
    cidrs: string;
}
export interface WorkforceVpcConfig {
    security_group_ids?: string;
    subnets?: string;
    vpc_id?: string;
}
export interface SagemakerWorkteam {
    description: string;
    workforce_name: string;
    workteam_name: string;
    member_definition: MemberDefinition;
    notification_configuration?: NotificationConfiguration;
    tags?: string;
    arn?: string;
    id?: string;
    subdomain?: string;
    tags_all?: string;
}
export interface MemberDefinition {
    cognito_member_definition?: CognitoMemberDefinition;
    oidc_member_definition?: OidcMemberDefinition;
    user_group?: string;
}
export interface CognitoMemberDefinition {
    client_id?: string;
    user_pool?: string;
    user_group?: string;
}
export interface OidcMemberDefinition {
    groups?: string;
}
export interface NotificationConfiguration {
    notification_topic_arn: string;
}
export interface SchedulerSchedule {
    schedule_expression: string;
    mode: string;
    arn: string;
    role_arn: string;
    task_definition_arn: string;
    capacity_provider: string;
    type: string;
    detail_type: string;
    source: string;
    partition_key: string;
    name: string;
    value: string;
    description?: string;
    end_date?: string;
    group_name?: string;
    kms_key_arn?: string;
    name_prefix?: string;
    schedule_expression_timezone?: string;
    start_date?: string;
    state?: string;
    maximum_window_in_minutes?: string;
    input?: string;
    enable_ecs_managed_tags?: string;
    enable_execute_command?: string;
    group?: string;
    launch_type?: string;
    platform_version?: string;
    propagate_tags?: string;
    reference_id?: string;
    tags?: string;
    task_count?: string;
    base?: string;
    weight?: string;
    assign_public_ip?: string;
    security_groups?: string;
    subnets?: string;
    expression?: string;
    field?: string;
    maximum_event_age_in_seconds?: string;
    maximum_retry_attempts?: string;
    message_group_id?: string;
    id?: string;
}
export interface SchedulerScheduleGroup {
    name?: string;
    name_prefix?: string;
    tags?: string;
    id?: string;
    arn?: string;
    creation_date?: string;
    last_modification_date?: string;
    state?: string;
    tags_all?: string;
}
export interface SchemasDiscoverer {
    source_arn: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface SchemasRegistry {
    name: string;
    description?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface SchemasRegistryPolicy {
    registry_name: string;
    policy: string;
}
export interface SchemasSchema {
    name: string;
    content: string;
    registry_name: string;
    type: string;
    description?: string;
    tags?: string;
    arn?: string;
    last_modified?: string;
    tags_all?: string;
    version?: string;
    version_created_date?: string;
}
export interface ResourceSecretsmanagerSecret {
    region: string;
    description?: string;
    name_prefix?: string;
    name?: string;
    policy?: string;
    recovery_window_in_days?: string;
    replica?: SecretsmanagerSecretReplica;
    force_overwrite_replica_secret?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface SecretsmanagerSecretReplica {
    last_accessed_date?: string;
    status?: string;
    status_message?: string;
}
export interface SecretsmanagerSecretPolicy {
    policy: string;
    secret_arn: string;
    block_public_policy?: string;
    id?: string;
}
export interface ResourceSecretsmanagerSecretRotation {
    secret_id: string;
    rotation_lambda_arn: string;
    rotation_rules: RotationRules;
    id?: string;
    arn?: string;
    rotation_enabled?: string;
}
export interface RotationRules {
    automatically_after_days?: string;
    duration?: string;
    schedule_expression?: string;
}
export interface ResourceSecretsmanagerSecretVersion {
    secret_id: string;
    secret_string?: string;
    secret_binary?: string;
    version_stages?: string;
    arn?: string;
    id?: string;
    version_id?: string;
}
export interface ResourceSecurityGroup {
    egress?: Gress;
    ingress?: Gress;
    name_prefix?: string;
    name?: string;
    revoke_rules_on_delete?: string;
    tags?: string;
    vpc_id?: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface Gress {
    from_port: string;
    to_port: string;
    protocol: string;
    cidr_blocks?: string;
    description?: string;
    ipv6_cidr_blocks?: string;
    prefix_list_ids?: string;
    security_groups?: string;
    self?: string;
}
export interface SecurityGroupRule {
    from_port: string;
    protocol: string;
    security_group_id: string;
    to_port: string;
    type: string;
    cidr_blocks?: string;
    description?: string;
    ipv6_cidr_blocks?: string;
    prefix_list_ids?: string;
    self?: string;
    source_security_group_id?: string;
    id?: string;
    security_group_rule_id?: string;
}
export interface SecurityhubAccount {
    enable_default_standards?: string;
    control_finding_generator?: string;
    auto_enable_controls?: string;
    id?: string;
    arn?: string;
}
export interface SecurityhubActionTarget {
    name: string;
    identifier: string;
    description: string;
    arn?: string;
}
export interface SecurityhubInsight {
    filters: SecurityhubInsightFilters;
    group_by_attribute: string;
    name: string;
    unit: string;
    value: string;
    cidr: string;
    comparison: string;
    key: string;
    date_range?: string;
    end?: string;
    start?: string;
    eq?: string;
    gte?: string;
    lte?: string;
    id?: string;
    arn?: string;
}
export interface SecurityhubInsightFilters {
    aws_account_id?: string;
    company_name?: string;
    compliance_status?: string;
    confidence?: string;
    created_at?: string;
    criticality?: string;
    description?: string;
    finding_provider_fields_confidence?: string;
    finding_provider_fields_criticality?: string;
    finding_provider_fields_related_findings_id?: string;
    finding_provider_fields_related_findings_product_arn?: string;
    finding_provider_fields_severity_label?: string;
    finding_provider_fields_severity_original?: string;
    finding_provider_fields_types?: string;
    first_observed_at?: string;
    generator_id?: string;
    id?: string;
    last_observed_at?: string;
    malware_name?: string;
    malware_path?: string;
    malware_state?: string;
    malware_type?: string;
    network_destination_domain?: string;
    network_destination_ipv4?: string;
    network_destination_ipv6?: string;
    network_destination_port?: string;
    network_direction?: string;
    network_protocol?: string;
    network_source_domain?: string;
    network_source_ipv4?: string;
    network_source_ipv6?: string;
    network_source_mac?: string;
    network_source_port?: string;
    note_text?: string;
    note_updated_at?: string;
    note_updated_by?: string;
    process_launched_at?: string;
    process_name?: string;
    process_parent_pid?: string;
    process_path?: string;
    process_pid?: string;
    process_terminated_at?: string;
    product_arn?: string;
    product_fields?: string;
    product_name?: string;
    recommendation_text?: string;
    record_state?: string;
    related_findings_id?: string;
    related_findings_product_arn?: string;
    resource_aws_ec2_instance_iam_instance_profile_arn?: string;
    resource_aws_ec2_instance_image_id?: string;
    resource_aws_ec2_instance_ipv4_addresses?: string;
    resource_aws_ec2_instance_ipv6_addresses?: string;
    resource_aws_ec2_instance_key_name?: string;
    resource_aws_ec2_instance_launched_at?: string;
    resource_aws_ec2_instance_subnet_id?: string;
    resource_aws_ec2_instance_type?: string;
    resource_aws_ec2_instance_vpc_id?: string;
    resource_aws_iam_access_key_created_at?: string;
    resource_aws_iam_access_key_status?: string;
    resource_aws_iam_access_key_user_name?: string;
    resource_aws_s3_bucket_owner_id?: string;
    resource_aws_s3_bucket_owner_name?: string;
    resource_container_image_id?: string;
    resource_container_image_name?: string;
    resource_container_launched_at?: string;
    resource_container_name?: string;
    resource_details_other?: string;
    resource_id?: string;
    resource_partition?: string;
    resource_region?: string;
    resource_tags?: string;
    resource_type?: string;
    severity_label?: string;
    source_url?: string;
    threat_intel_indicator_category?: string;
    threat_intel_indicator_last_observed_at?: string;
    threat_intel_indicator_source?: string;
    threat_intel_indicator_source_url?: string;
    threat_intel_indicator_type?: string;
    threat_intel_indicator_value?: string;
    title?: string;
    type?: string;
    updated_at?: string;
    user_defined_values?: string;
    verification_state?: string;
}
export interface SecurityhubInviteAccepter {
    master_id: string;
    invitation_id?: string;
}
export interface SecurityhubMember {
    account_id: string;
    email?: string;
    invite?: string;
    id?: string;
    master_id?: string;
    member_status?: string;
}
export interface SecurityhubOrganizationConfiguration {
    auto_enable: string;
    auto_enable_standards?: string;
    id?: string;
}
export interface SecurityhubProductSubscription {
    product_arn: string;
    arn?: string;
}
export interface SecurityhubStandardsControl {
    standards_control_arn: string;
    control_status: string;
    disabled_reason?: string;
    id?: string;
    control_id?: string;
    control_status_updated_at?: string;
    description?: string;
    related_requirements?: string;
    remediation_url?: string;
    severity_rating?: string;
    title?: string;
}
export interface SecurityhubStandardsSubscription {
    standards_arn: string;
    id?: string;
}
export interface ServerlessapplicationrepositoryCloudformationStack {
    name: string;
    application_id: string;
    capabilities: string;
    parameters?: string;
    semantic_version?: string;
    tags?: string;
    id?: string;
    outputs?: string;
    tags_all?: string;
}
export interface ResourceServiceDiscoveryHTTPNamespace {
    name: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    http_name?: string;
    tags_all?: string;
}
export interface ServiceDiscoveryInstance {
    instance_id: string;
    service_id: string;
    attributes: string;
    id?: string;
}
export interface ServiceDiscoveryPrivateDNSNamespace {
    name: string;
    vpc: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    hosted_zone?: string;
    tags_all?: string;
}
export interface ServiceDiscoveryPublicDNSNamespace {
    name: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    hosted_zone?: string;
    tags_all?: string;
}
export interface ResourceServiceDiscoveryService {
    name: string;
    dns_records: string;
    description?: string;
    dns_config?: FluffyDNSConfig;
    health_check_config?: HealthCheckConfig;
    force_destroy?: string;
    health_check_custom_config?: HealthCheckCustomConfig;
    namespace_id?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface FluffyDNSConfig {
    namespace_id: string;
    dns_records: DNSRecords;
    routing_policy?: string;
}
export interface ServicecatalogBudgetResourceAssociation {
    budget_name: string;
    resource_id: string;
    id?: string;
}
export interface ResourceServicecatalogConstraint {
    portfolio_id: string;
    product_id: string;
    type: string;
    accept_language?: string;
    description?: string;
    id?: string;
    owner?: string;
}
export interface ServicecatalogOrganizationsAccess {
    enabled: string;
    id?: string;
}
export interface ResourceServicecatalogPortfolio {
    name: string;
    description: string;
    provider_name: string;
    tags?: string;
    id?: string;
    tags_all?: string;
}
export interface ServicecatalogPortfolioShare {
    portfolio_id: string;
    principal_id: string;
    type: string;
    accept_language?: string;
    share_principals?: string;
    share_tag_options?: string;
    wait_for_acceptance?: string;
    accepted?: string;
}
export interface ServicecatalogPrincipalPortfolioAssociation {
    portfolio_id: string;
    principal_arn: string;
    accept_language?: string;
    principal_type?: string;
    id?: string;
}
export interface ResourceServicecatalogProduct {
    name: string;
    owner: string;
    provisioning_artifact_parameters: ProvisioningArtifactParameters;
    type: string;
    accept_language?: string;
    distributor?: string;
    support_description?: string;
    support_email?: string;
    support_url?: string;
    tags?: string;
    arn?: string;
    created_time?: string;
    has_default_path?: string;
    id?: string;
    status?: string;
    tags_all?: string;
}
export interface ProvisioningArtifactParameters {
    description?: string;
    disable_template_validation?: string;
    name?: string;
    template_physical_id?: string;
    template_url?: string;
    type?: string;
}
export interface ServicecatalogProductPortfolioAssociation {
    portfolio_id: string;
    product_id: string;
    accept_language?: string;
    source_portfolio_id?: string;
    id?: string;
}
export interface ServicecatalogProvisionedProduct {
    name: string;
    accept_language?: string;
    ignore_errors?: string;
    notification_arns?: string;
    path_id?: string;
    path_name?: string;
    product_id?: string;
    product_name?: string;
    provisioning_artifact_id?: string;
    provisioning_artifact_name?: string;
    provisioning_parameters?: ProvisioningParameters;
    retain_physical_resources?: string;
    stack_set_provisioning_preferences?: StackSetProvisioningPreferences;
    tags?: string;
    value?: string;
    arn?: string;
    cloudwatch_dashboard_names?: string;
    created_time?: string;
    id?: string;
    last_provisioning_record_id?: string;
    last_record_id?: string;
    last_successful_provisioning_record_id?: string;
    launch_role_arn?: string;
    outputs?: string;
    description?: string;
    key?: string;
    status?: ServicecatalogProvisionedProductStatus;
    status_message?: string;
    tags_all?: string;
    type?: string;
}
export interface ProvisioningParameters {
    key: string;
    use_previous_value?: string;
    value?: string;
}
export interface StackSetProvisioningPreferences {
    accounts?: string;
    failure_tolerance_count?: string;
    failure_tolerance_percentage?: string;
    max_concurrency_count?: string;
    max_concurrency_percentage?: string;
    regions?: string;
}
export interface ServicecatalogProvisionedProductStatus {
    available?: string;
    under_change?: string;
    tainted?: string;
    error?: string;
    plan_in_progress?: string;
}
export interface ServicecatalogProvisioningArtifact {
    product_id: string;
    template_physical_id: string;
    template_url: string;
    accept_language?: string;
    active?: string;
    description?: string;
    disable_template_validation?: string;
    guidance?: string;
    name?: string;
    type?: string;
    created_time?: string;
    id?: string;
    provisioning_artifact_id?: string;
    status?: string;
}
export interface ServicecatalogServiceAction {
    definition: ServicecatalogServiceActionDefinition;
    accept_language?: string;
    description?: string;
    id?: string;
}
export interface ServicecatalogServiceActionDefinition {
    assume_role?: string;
    name?: string;
    parameters?: string;
    type?: string;
    version?: string;
}
export interface ServicecatalogTagOption {
    key: string;
    value: string;
    active?: string;
    id?: string;
    owner_id?: string;
}
export interface ServicecatalogTagOptionResourceAssociation {
    resource_id: string;
    tag_option_id: string;
    id?: string;
    resource_arn?: string;
    resource_created_time?: string;
    resource_description?: string;
    resource_name?: string;
}
export interface ResourceServicequotasServiceQuota {
    quota_code: string;
    service_code: string;
    value: string;
    adjustable?: string;
    arn?: string;
    default_value?: string;
    id?: string;
    quota_name?: string;
    service_name?: string;
    usage_metric?: string;
    metric_dimensions?: string;
    class?: string;
    resource?: string;
    service?: string;
    type?: string;
    metric_name?: string;
    metric_namespace?: string;
    metric_statistic_recommendation?: string;
}
export interface SesReceiptRuleSet {
    rule_set_name: string;
    arn?: string;
    id?: string;
}
export interface SesConfigurationSet {
    name: string;
    delivery_options?: SesConfigurationSetDeliveryOptions;
    reputation_metrics_enabled?: string;
    sending_enabled?: string;
    tracking_options?: SesConfigurationSetTrackingOptions;
    arn?: string;
    id?: string;
    last_fresh_start?: string;
}
export interface SesConfigurationSetDeliveryOptions {
    tls_policy?: string;
}
export interface SesConfigurationSetTrackingOptions {
    custom_redirect_domain?: string;
}
export interface SesDomainDKIM {
    domain: string;
    dkim_tokens?: string;
}
export interface ResourceSesDomainIdentity {
    domain: string;
    arn?: string;
    verification_token?: string;
}
export interface SesDomainIdentityVerification {
    domain: string;
    id?: string;
    arn?: string;
}
export interface SesDomainMailFrom {
    domain: string;
    mail_from_domain: string;
    behavior_on_mx_failure?: string;
    id?: string;
}
export interface ResourceSesEmailIdentity {
    email: string;
    arn?: string;
}
export interface SesEventDestination {
    name: string;
    configuration_set_name: string;
    matching_types: string;
    default_value: string;
    dimension_name: string;
    value_source: string;
    stream_arn: string;
    role_arn: string;
    topic_arn: string;
    enabled?: string;
    cloudwatch_destination?: string;
    kinesis_destination?: string;
    sns_destination?: string;
    id?: string;
    arn?: string;
}
export interface SesIdentityNotificationTopic {
    notification_type: string;
    identity: string;
    topic_arn?: string;
    include_original_headers?: string;
}
export interface SesIdentityPolicy {
    identity: string;
    name: string;
    policy: string;
}
export interface SesReceiptFilter {
    name: string;
    cidr: string;
    policy: string;
    id?: string;
    arn?: string;
}
export interface SesReceiptRule {
    name: string;
    rule_set_name: string;
    header_name: string;
    header_value: string;
    position: string;
    message: string;
    sender: string;
    smtp_reply_code: string;
    function_arn: string;
    bucket_name: string;
    topic_arn: string;
    scope: string;
    organization_arn: string;
    after?: string;
    enabled?: string;
    recipients?: string;
    scan_enabled?: string;
    tls_policy?: string;
    status_code?: string;
    invocation_type?: string;
    kms_key_arn?: string;
    object_key_prefix?: string;
    encoding?: string;
    id?: string;
    arn?: string;
}
export interface SesTemplate {
    name: string;
    html?: string;
    subject?: string;
    text?: string;
    arn?: string;
    id?: string;
}
export interface ResourceSesv2ConfigurationSet {
    configuration_set_name: string;
    delivery_options?: Sesv2ConfigurationSetDeliveryOptions;
    reputation_options?: string;
    sending_options?: SendingOptions;
    suppression_options?: SuppressionOptions;
    tags?: string;
    tracking_options?: Sesv2ConfigurationSetTrackingOptions;
    vdm_options?: VDMOptions;
    dashboard_options?: DashboardOptions;
    guardian_options?: GuardianOptions;
    arn?: string;
    last_fresh_start?: string;
}
export interface DashboardOptions {
    engagement_metrics?: string;
}
export interface Sesv2ConfigurationSetDeliveryOptions {
    sending_pool_name?: string;
    tls_policy?: string;
}
export interface GuardianOptions {
    optimized_shared_delivery?: string;
}
export interface SendingOptions {
    sending_enabled?: string;
}
export interface SuppressionOptions {
    suppressed_reasons?: string;
}
export interface Sesv2ConfigurationSetTrackingOptions {
    custom_redirect_domain: string;
}
export interface VDMOptions {
    dashboard_options?: string;
    guardian_options?: string;
}
export interface Sesv2ConfigurationSetEventDestination {
    configuration_set_name: string;
    event_destination: EventDestination;
    event_destination_name: string;
    dimension_configuration: DimensionConfiguration;
    cloud_watch_destination?: CloudWatchDestination;
    kinesis_firehose_destination?: KinesisFirehoseDestination;
    pinpoint_destination?: PinpointDestination;
    sns_destination?: SnsDestination;
    id?: string;
}
export interface CloudWatchDestination {
    dimension_configuration: string;
}
export interface DimensionConfiguration {
    default_dimension_value?: string;
    dimension_name?: string;
    dimension_value_source?: string;
}
export interface EventDestination {
    matching_event_types?: string;
    cloud_watch_destination?: string;
    enabled?: string;
    kinesis_firehose_destination?: string;
    pinpoint_destination?: string;
    sns_destination?: string;
}
export interface KinesisFirehoseDestination {
    delivery_stream_arn: string;
    iam_role_arn: string;
}
export interface PinpointDestination {
    pinpoint_application_arn: string;
}
export interface SnsDestination {
    topic_arn: string;
}
export interface Sesv2ContactList {
    contact_list_name: string;
    tags?: string;
    topic?: Sesv2ContactListTopic;
    created_timestamp?: string;
    last_updated_timestamp?: string;
}
export interface Sesv2ContactListTopic {
    default_subscription_status: string;
    display_name: string;
    topic_name: string;
    description?: string;
}
export interface Sesv2DedicatedIPAssignment {
    ip: string;
    destination_pool_name: string;
    id?: string;
}
export interface ResourceSesv2DedicatedIPPool {
    pool_name: string;
    scaling_mode?: string;
    tags?: string;
    arn?: string;
}
export interface ResourceSesv2EmailIdentity {
    email_identity: string;
    configuration_set_name?: string;
    dkim_signing_attributes?: string;
    tags?: string;
    arn?: string;
    current_signing_key_length?: string;
    last_key_generation_timestamp?: string;
    next_signing_key_length?: string;
    signing_attributes_origin?: string;
    status?: string;
    tokens?: string;
    identity_type?: string;
    tags_all?: string;
    verified_for_sending_status?: string;
}
export interface Sesv2EmailIdentityFeedbackAttributes {
    email_identity: string;
    email_forwarding_enabled?: string;
}
export interface ResourceSfnActivity {
    name: string;
    tags?: string;
    id?: string;
    creation_date?: string;
    tags_all?: string;
}
export interface ResourceSfnAlias {
    name: string;
    state_machine_version_arn: string;
    weight: string;
    description?: string;
    arn?: string;
    creation_date?: string;
}
export interface ResourceSfnStateMachine {
    definition: string;
    role_arn: string;
    logging_configuration?: SfnStateMachineLoggingConfiguration;
    name?: string;
    name_prefix?: string;
    publish?: string;
    tags?: string;
    tracing_configuration?: EnclaveOptionsClass;
    type?: string;
    id?: string;
    arn?: string;
    creation_date?: string;
    status?: string;
    tags_all?: string;
}
export interface SfnStateMachineLoggingConfiguration {
    include_execution_data?: string;
    level?: string;
    log_destination?: string;
}
export interface ShieldApplicationLayerAutomaticResponse {
    resource_arn: string;
    action: string;
}
export interface ShieldDrtAccessLogBucketAssociation {
    log_bucket: string;
    role_arn_association_id: string;
}
export interface ShieldDrtAccessRoleArnAssociation {
    role_arn: string;
}
export interface ShieldProtection {
    name: string;
    resource_arn: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ShieldProtectionGroup {
    aggregation: string;
    pattern: string;
    protection_group_id: string;
    members?: string;
    resource_type?: string;
    tags?: string;
    protection_group_arn?: string;
    tags_all?: string;
}
export interface ShieldProtectionHealthCheckAssociation {
    health_check_arn: string;
    shield_protection_id: string;
    id?: string;
}
export interface ResourceSignerSigningJob {
    profile_name: string;
    source: KmsSecretClass;
    destination: KmsSecretClass;
    bucket: string;
    key: string;
    version: string;
    ignore_signing_job_failure?: string;
    prefix?: string;
    completed_at?: string;
    created_at?: string;
    job_id?: string;
    job_invoker?: string;
    job_owner?: string;
    platform_display_name?: string;
    platform_id?: string;
    profile_version?: string;
    requested_by?: string;
    revocation_record?: string;
    signature_expires_at?: string;
    signed_object?: string;
    status?: string;
    status_reason?: string;
}
export interface ResourceSignerSigningProfile {
    platform_id: string;
    name?: string;
    name_prefix?: string;
    signature_validity_period?: string;
    tags?: string;
    arn?: string;
    platform_display_name?: string;
    revocation_record?: string;
    status?: string;
    tags_all?: string;
    version?: string;
    version_arn?: string;
}
export interface SignerSigningProfilePermission {
    profile_name: string;
    action: string;
    principal: string;
    profile_version?: string;
    statement_id?: string;
    statement_id_prefix?: string;
}
export interface SnapshotCreateVolumePermission {
    snapshot_id: string;
    account_id: string;
    id?: string;
}
export interface SnsPlatformApplication {
    name: string;
    platform: string;
    platform_credential: string;
    apple_platform_team_id: string;
    apple_platform_bundle_id: string;
    event_delivery_failure_topic_arn?: string;
    event_endpoint_created_topic_arn?: string;
    event_endpoint_deleted_topic_arn?: string;
    event_endpoint_updated_topic_arn?: string;
    failure_feedback_role_arn?: string;
    platform_principal?: string;
    success_feedback_role_arn?: string;
    success_feedback_sample_rate?: string;
    id?: string;
    arn?: string;
}
export interface SnsSMSPreferences {
    monthly_spend_limit?: string;
    delivery_status_iam_role_arn?: string;
    delivery_status_success_sampling_rate?: string;
    default_sender_id?: string;
    default_sms_type?: string;
    usage_report_s3_bucket?: string;
}
export interface ResourceSnsTopic {
    name?: string;
    name_prefix?: string;
    display_name?: string;
    policy?: string;
    delivery_policy?: string;
    application_success_feedback_role_arn?: string;
    application_success_feedback_sample_rate?: string;
    application_failure_feedback_role_arn?: string;
    http_success_feedback_role_arn?: string;
    http_success_feedback_sample_rate?: string;
    http_failure_feedback_role_arn?: string;
    kms_master_key_id?: string;
    signature_version?: string;
    tracing_config?: string;
    fifo_topic?: string;
    content_based_deduplication?: string;
    lambda_success_feedback_role_arn?: string;
    lambda_success_feedback_sample_rate?: string;
    lambda_failure_feedback_role_arn?: string;
    sqs_success_feedback_role_arn?: string;
    sqs_success_feedback_sample_rate?: string;
    sqs_failure_feedback_role_arn?: string;
    firehose_success_feedback_role_arn?: string;
    firehose_success_feedback_sample_rate?: string;
    firehose_failure_feedback_role_arn?: string;
    tags?: string;
    id?: string;
    arn?: string;
    owner?: string;
    tags_all?: string;
}
export interface SnsTopicDataProtectionPolicy {
    arn: string;
    policy: string;
}
export interface SnsTopicPolicy {
    arn: string;
    policy: string;
    owner?: string;
}
export interface SnsTopicSubscription {
    endpoint: string;
    protocol: string;
    subscription_role_arn: string;
    topic_arn: string;
    confirmation_timeout_in_minutes?: string;
    delivery_policy?: string;
    endpoint_auto_confirms?: string;
    filter_policy?: string;
    filter_policy_scope?: string;
    raw_message_delivery?: string;
    redrive_policy?: string;
    application?: string;
    firehose?: string;
    lambda?: string;
    sms?: string;
    sqs?: string;
    email?: string;
    email_json?: string;
    http?: string;
    https?: string;
    arn?: string;
    confirmation_was_authenticated?: string;
    id?: string;
    owner_id?: string;
    pending_confirmation?: string;
}
export interface SpotDatafeedSubscription {
    bucket: string;
    prefix?: string;
}
export interface SpotFleetRequest {
    iam_fleet_role: string;
    launch_template_specification: LaunchTemplateSpecification;
    context?: string;
    replace_unhealthy_instances?: string;
    launch_specification?: string;
    spot_maintenance_strategies?: MaintenanceStrategies;
    wait_for_fulfillment?: string;
    target_capacity?: string;
    target_capacity_unit_type?: string;
    allocation_strategy?: string;
    instance_pools_to_use_count?: string;
    excess_capacity_termination_policy?: string;
    terminate_instances_with_expiration?: string;
    terminate_instances_on_delete?: string;
    instance_interruption_behaviour?: string;
    fleet_type?: string;
    valid_until?: string;
    valid_from?: string;
    load_balancers?: string;
    target_group_arns?: string;
    on_demand_allocation_strategy?: string;
    on_demand_max_total_price?: string;
    on_demand_target_capacity?: string;
    tags?: string;
    overrides?: SpotFleetRequestOverrides;
    capacity_rebalance?: CapacityRebalance;
    instance_requirements?: OverrideInstanceRequirements;
    max?: string;
    id?: string;
    spot_request_state?: string;
    tags_all?: string;
}
export interface LaunchTemplateSpecification {
    id?: string;
    name?: string;
    version?: string;
}
export interface SpotFleetRequestOverrides {
    availability_zone?: string;
    instance_requirements?: string;
    instance_type?: string;
    priority?: string;
    spot_price?: string;
    subnet_id?: string;
    weighted_capacity?: string;
}
export interface SpotInstanceRequest {
    spot_price?: string;
    wait_for_fulfillment?: string;
    spot_type?: string;
    launch_group?: string;
    block_duration_minutes?: string;
    instance_interruption_behavior?: string;
    valid_until?: string;
    valid_from?: string;
    tags?: string;
    id?: string;
    spot_bid_status?: string;
    spot_request_state?: string;
    spot_instance_id?: string;
    public_dns?: string;
    public_ip?: string;
    private_dns?: string;
    private_ip?: string;
    tags_all?: string;
}
export interface ResourceSqsQueue {
    name?: string;
    name_prefix?: string;
    visibility_timeout_seconds?: string;
    message_retention_seconds?: string;
    max_message_size?: string;
    delay_seconds?: string;
    receive_wait_time_seconds?: string;
    policy?: string;
    redrive_policy?: string;
    redrive_allow_policy?: string;
    fifo_queue?: string;
    content_based_deduplication?: string;
    sqs_managed_sse_enabled?: string;
    kms_master_key_id?: string;
    kms_data_key_reuse_period_seconds?: string;
    deduplication_scope?: string;
    fifo_throughput_limit?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
    url?: string;
}
export interface SqsQueuePolicy {
    queue_url: string;
    policy: string;
}
export interface SqsQueueRedriveAllowPolicy {
    queue_url: string;
    redrive_allow_policy: string;
}
export interface SqsQueueRedrivePolicy {
    queue_url: string;
    redrive_policy: string;
}
export interface SsmActivation {
    iam_role: string;
    name?: string;
    description?: string;
    expiration_date?: string;
    registration_limit?: string;
    tags?: string;
    id?: string;
    activation_code?: string;
    expired?: string;
    registration_count?: string;
    tags_all?: string;
}
export interface SsmAssociation {
    name: string;
    s3_bucket_name: string;
    key: string;
    values: string;
    apply_only_at_cron_interval?: string;
    association_name?: string;
    automation_target_parameter_name?: string;
    compliance_severity?: string;
    document_version?: string;
    instance_id?: string;
    max_concurrency?: string;
    max_errors?: string;
    parameters?: string;
    schedule_expression?: string;
    sync_compliance?: string;
    wait_for_success_timeout_seconds?: string;
    s3_key_prefix?: string;
    s3_region?: string;
    arn?: string;
    association_id?: string;
}
export interface SsmDefaultPatchBaseline {
    baseline_id: string;
    operating_system: string;
}
export interface ResourceSsmDocument {
    name: string;
    content: string;
    document_type: string;
    attachments_source?: string;
    document_format?: string;
    target_type?: string;
    tags?: string;
    version_name?: string;
    created_date?: string;
    description?: string;
    schema_version?: string;
    default_version?: string;
    document_version?: string;
    hash?: string;
    hash_type?: string;
    latest_version?: string;
    owner?: string;
    status?: string;
    parameter?: string;
    platform_types?: string;
    tags_all?: string;
}
export interface SsmMaintenanceWindow {
    name: string;
    schedule: string;
    cutoff: string;
    duration: string;
    description?: string;
    allow_unassociated_targets?: string;
    enabled?: string;
    end_date?: string;
    schedule_timezone?: string;
    schedule_offset?: string;
    start_date?: string;
    tags?: string;
    id?: string;
    tags_all?: string;
}
export interface SsmMaintenanceWindowTarget {
    window_id: string;
    resource_type: string;
    targets: string;
    name?: string;
    description?: string;
    owner_information?: string;
    id?: string;
}
export interface SsmMaintenanceWindowTask {
    window_id: string;
    task_type: string;
    task_arn: string;
    name: string;
    values: string;
    max_concurrency?: string;
    max_errors?: string;
    cutoff_behavior?: string;
    service_role_arn?: string;
    description?: string;
    targets?: string;
    priority?: string;
    task_invocation_parameters?: string;
    document_version?: string;
    client_context?: string;
    payload?: string;
    qualifier?: string;
    comment?: string;
    document_hash?: string;
    document_hash_type?: string;
    output_s3_bucket?: string;
    output_s3_key_prefix?: string;
    timeout_seconds?: string;
    input?: string;
    notification_arn?: string;
    notification_events?: string;
    notification_type?: string;
    cloudwatch_log_group_name?: string;
    cloudwatch_output_enabled?: string;
    arn?: string;
    id?: string;
    window_task_id?: string;
}
export interface ResourceSsmParameter {
    name: string;
    type: string;
    allowed_pattern?: string;
    data_type?: string;
    description?: string;
    insecure_value?: string;
    key_id?: string;
    overwrite?: string;
    tags?: string;
    tier?: string;
    value?: string;
    arn?: string;
    tags_all?: string;
    version?: string;
}
export interface ResourceSsmPatchBaseline {
    description?: string;
    operating_system?: string;
    approved_patches_compliance_level?: string;
    approved_patches?: string;
    rejected_patches?: string;
    global_filter?: string;
    approval_rule?: ApprovalRule;
    source?: SsmPatchBaselineSource;
    rejected_patches_action?: string;
    approved_patches_enable_non_security?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ApprovalRule {
    patch_filter: string;
    approve_after_days?: string;
    approve_until_date?: string;
    patch_set?: string;
    compliance_level?: string;
    enable_non_security?: string;
}
export interface SsmPatchBaselineSource {
    name: string;
    configuration: string;
    products: string;
}
export interface SsmPatchGroup {
    baseline_id: string;
    patch_group: string;
    id?: string;
}
export interface SsmResourceDataSync {
    name: string;
    s3_destination: string;
}
export interface SsmServiceSetting {
    setting_id: string;
    setting_value: string;
    arn?: string;
    status?: string;
}
export interface ResourceSsmcontactsPlan {
    contact_id: string;
    stage: string;
}
export interface ResourceSsmincidentsReplicationSet {
    name: string;
    kms_key_arn?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
    created_by?: string;
    created_time?: string;
    deletion_protected?: string;
    last_modified_by?: string;
    last_modified_time?: string;
    status?: string;
    status_update_time?: string;
    status_message?: string;
}
export interface ResourceSsmincidentsResponsePlan {
    name: string;
    title: string;
    impact: string;
    sns_topic_arn: string;
    document_name: string;
    role_arn: string;
    service_id: string;
    secret_id: string;
    "1"?: string;
    "2"?: string;
    "3"?: string;
    "4"?: string;
    "5"?: string;
    dedupe_string?: string;
    incident_tags?: string;
    summary?: string;
    notification_target?: string;
    tags?: string;
    display_name?: string;
    chat_channel?: string;
    engagements?: string;
    action?: string;
    ssm_automation?: string;
    document_version?: string;
    target_account?: string;
    parameter?: string;
    values?: string;
    dynamic_parameters?: string;
    integration?: string;
    pagerduty?: string;
    arn?: string;
    tags_all?: string;
}
export interface SsoadminAccountAssignment {
    instance_arn: string;
    permission_set_arn: string;
    principal_id: string;
    principal_type: string;
    target_id: string;
    target_type?: string;
    id?: string;
}
export interface SsoadminCustomerManagedPolicyAttachment {
    instance_arn: string;
    permission_set_arn: string;
    customer_managed_policy_reference: SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference;
    id?: string;
}
export interface SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference {
    name?: string;
    path?: string;
}
export interface SsoadminInstanceAccessControlAttributes {
    instance_arn: string;
    attribute: string;
    key: string;
    value: string;
    source: string;
    id?: string;
}
export interface SsoadminManagedPolicyAttachment {
    instance_arn: string;
    managed_policy_arn: string;
    permission_set_arn: string;
    id?: string;
    managed_policy_name?: string;
}
export interface ResourceSsoadminPermissionSet {
    instance_arn: string;
    name: string;
    description?: string;
    relay_state?: string;
    session_duration?: string;
    tags?: string;
    arn?: string;
    id?: string;
    created_date?: string;
    tags_all?: string;
}
export interface SsoadminPermissionSetInlinePolicy {
    inline_policy: string;
    instance_arn: string;
    permission_set_arn: string;
    id?: string;
}
export interface SsoadminPermissionsBoundaryAttachment {
    instance_arn: string;
    permission_set_arn: string;
    permissions_boundary: PermissionsBoundary;
    customer_managed_policy_reference?: SsoadminPermissionsBoundaryAttachmentCustomerManagedPolicyReference;
    id?: string;
}
export interface SsoadminPermissionsBoundaryAttachmentCustomerManagedPolicyReference {
    name: string;
    path?: string;
}
export interface PermissionsBoundary {
    managed_policy_arn?: string;
    customer_managed_policy_reference?: string;
}
export interface Storagegateway {
    disk_id: string;
    gateway_arn: string;
    id?: string;
}
export interface StoragegatewayCachedIscsiVolume {
    gateway_arn: string;
    network_interface_id: string;
    target_name: string;
    volume_size_in_bytes: string;
    snapshot_id?: string;
    source_volume_arn?: string;
    kms_encrypted?: string;
    kms_key?: string;
    tags?: string;
    arn?: string;
    chap_enabled?: string;
    id?: string;
    lun_number?: string;
    network_interface_port?: string;
    tags_all?: string;
    target_arn?: string;
    volume_arn?: string;
    volume_id?: string;
}
export interface StoragegatewayFileSystemAssociation {
    gateway_arn: string;
    location_arn: string;
    username: string;
    password: string;
    audit_destination_arn?: string;
    cache_attributes?: CacheAttributes;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface CacheAttributes {
    cache_stale_timeout_in_seconds?: string;
}
export interface StoragegatewayGateway {
    gateway_name: string;
    gateway_timezone: string;
    activation_key?: string;
    average_download_rate_limit_in_bits_per_sec?: string;
    average_upload_rate_limit_in_bits_per_sec?: string;
    gateway_ip_address?: string;
    gateway_type?: string;
    gateway_vpc_endpoint?: string;
    cloudwatch_log_group_arn?: string;
    maintenance_start_time?: MaintenanceStartTime;
    medium_changer_type?: string;
    smb_active_directory_settings?: SMBActiveDirectorySettings;
    smb_guest_password?: string;
    smb_security_strategy?: string;
    smb_file_share_visibility?: string;
    tape_drive_type?: string;
    tags?: string;
    id?: string;
    arn?: string;
    gateway_id?: string;
    ec2_instance_id?: string;
    endpoint_type?: string;
    host_environment?: string;
    gateway_network_interface?: GatewayNetworkInterface;
    tags_all?: string;
}
export interface GatewayNetworkInterface {
    ipv4_address?: string;
}
export interface MaintenanceStartTime {
    hour_of_day: string;
    minute_of_hour: string;
    day_of_month?: string;
    day_of_week?: string;
}
export interface SMBActiveDirectorySettings {
    domain_name: string;
    password: string;
    username: string;
    timeout_in_seconds?: string;
    organizational_unit?: string;
    domain_controllers?: string;
}
export interface StoragegatewayNFSFileShare {
    client_list: string;
    gateway_arn: string;
    location_arn: string;
    role_arn: string;
    vpc_endpoint_dns_name?: string;
    bucket_region?: string;
    audit_destination_arn?: string;
    default_storage_class?: string;
    guess_mime_type_enabled?: string;
    kms_encrypted?: string;
    kms_key_arn?: string;
    nfs_file_share_defaults?: NFSFileShareDefaults;
    cache_attributes?: CacheAttributes;
    object_acl?: string;
    read_only?: string;
    requester_pays?: string;
    squash?: string;
    file_share_name?: string;
    notification_policy?: string;
    tags?: string;
    id?: string;
    arn?: string;
    fileshare_id?: string;
    path?: string;
    tags_all?: string;
}
export interface NFSFileShareDefaults {
    directory_mode?: string;
    file_mode?: string;
    group_id?: string;
    owner_id?: string;
}
export interface StoragegatewaySMBFileShare {
    gateway_arn: string;
    location_arn: string;
    role_arn: string;
    vpc_endpoint_dns_name?: string;
    bucket_region?: string;
    admin_user_list?: string;
    authentication?: string;
    audit_destination_arn?: string;
    default_storage_class?: string;
    file_share_name?: string;
    guess_mime_type_enabled?: string;
    invalid_user_list?: string;
    kms_encrypted?: string;
    kms_key_arn?: string;
    object_acl?: string;
    oplocks_enabled?: string;
    cache_attributes?: CacheAttributes;
    read_only?: string;
    requester_pays?: string;
    smb_acl_enabled?: string;
    case_sensitivity?: string;
    valid_user_list?: string;
    access_based_enumeration?: string;
    notification_policy?: string;
    tags?: string;
    id?: string;
    arn?: string;
    fileshare_id?: string;
    path?: string;
    tags_all?: string;
}
export interface StoragegatewayStoredIscsiVolume {
    gateway_arn: string;
    network_interface_id: string;
    target_name: string;
    disk_id: string;
    preserve_existing_data: string;
    snapshot_id?: string;
    kms_encrypted?: string;
    kms_key?: string;
    tags?: string;
    arn?: string;
    chap_enabled?: string;
    id?: string;
    lun_number?: string;
    network_interface_port?: string;
    tags_all?: string;
    target_arn?: string;
    volume_arn?: string;
    volume_id?: string;
    volume_status?: string;
    volume_type?: string;
    volume_size_in_bytes?: string;
    volume_attachment_status?: string;
}
export interface StoragegatewayTapePool {
    pool_name: string;
    storage_class: string;
    retention_lock_type: string;
    retention_lock_time_in_days?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface StoragegatewayUploadBuffer {
    gateway_arn: string;
    disk_id?: string;
    disk_path?: string;
    id?: string;
}
export interface ResourceSubnet {
    vpc_id: string;
    assign_ipv6_address_on_creation?: string;
    availability_zone?: string;
    availability_zone_id?: string;
    cidr_block?: string;
    customer_owned_ipv4_pool?: string;
    enable_dns64?: string;
    enable_lni_at_device_index?: string;
    enable_resource_name_dns_aaaa_record_on_launch?: string;
    enable_resource_name_dns_a_record_on_launch?: string;
    ipv6_cidr_block?: string;
    ipv6_native?: string;
    map_customer_owned_ip_on_launch?: string;
    map_public_ip_on_launch?: string;
    outpost_arn?: string;
    private_dns_hostname_type_on_launch?: string;
    tags?: string;
    id?: string;
    arn?: string;
    ipv6_cidr_block_association_id?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface SWFDomain {
    workflow_execution_retention_period_in_days: string;
    name?: string;
    name_prefix?: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface SyntheticsCanary {
    artifact_s3_location: string;
    execution_role_arn: string;
    handler: string;
    name: string;
    runtime_version: string;
    schedule: SyntheticsCanarySchedule;
    delete_lambda?: string;
    vpc_config?: VpcConfigurationClass;
    failure_retention_period?: string;
    run_config?: RunConfig;
    s3_bucket?: string;
    s3_key?: string;
    s3_version?: string;
    start_canary?: string;
    success_retention_period?: string;
    tags?: string;
    artifact_config?: ArtifactConfig;
    zip_file?: string;
    s3_encryption?: S3Encryption;
    arn?: string;
    engine_arn?: string;
    id?: string;
    source_location_arn?: string;
    status?: string;
    tags_all?: string;
    timeline?: Timeline;
    vpc_id?: string;
}
export interface ArtifactConfig {
    s3_encryption?: string;
}
export interface RunConfig {
    timeout_in_seconds?: string;
    memory_in_mb?: string;
    active_tracing?: string;
    environment_variables?: string;
}
export interface S3Encryption {
    encryption_mode?: string;
    kms_key_arn?: string;
}
export interface SyntheticsCanarySchedule {
    expression?: string;
    duration_in_seconds?: string;
}
export interface Timeline {
    created?: string;
    last_modified?: string;
    last_started?: string;
    last_stopped?: string;
}
export interface SyntheticsGroup {
    name: string;
    tags?: string;
    arn?: string;
    group_id?: string;
    tags_all?: string;
}
export interface SyntheticsGroupAssociation {
    group_name: string;
    canary_arn: string;
    group_id?: string;
}
export interface TimestreamwriteDatabase {
    database_name: string;
    kms_key_id?: string;
    tags?: string;
    id?: string;
    arn?: string;
    table_count?: string;
    tags_all?: string;
}
export interface TimestreamwriteTable {
    database_name: string;
    table_name: string;
    magnetic_store_write_properties?: MagneticStoreWriteProperties;
    retention_properties?: RetentionProperties;
    schema?: TimestreamwriteTableSchema;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface MagneticStoreWriteProperties {
    enable_magnetic_store_writes: string;
    magnetic_store_rejected_data_location?: MagneticStoreRejectedDataLocation;
}
export interface MagneticStoreRejectedDataLocation {
    s3_configuration?: MagneticStoreRejectedDataLocationS3Configuration;
}
export interface MagneticStoreRejectedDataLocationS3Configuration {
    bucket_name?: string;
    encryption_option?: string;
    kms_key_id?: string;
    object_key_prefix?: string;
}
export interface RetentionProperties {
    magnetic_store_retention_period_in_days: string;
    memory_store_retention_period_in_hours: string;
}
export interface TimestreamwriteTableSchema {
    composite_partition_key: CompositePartitionKey;
}
export interface CompositePartitionKey {
    enforcement_in_record?: string;
    name?: string;
    type?: string;
}
export interface TranscribeLanguageModel {
    base_model_name: string;
    input_data_config: TranscribeLanguageModelInputDataConfig;
    language_code: string;
    model_name: string;
    id?: string;
    arn?: string;
}
export interface TranscribeLanguageModelInputDataConfig {
    data_access_role_arn?: string;
    s3_uri?: string;
    tuning_data_s3_uri?: string;
    tags?: string;
}
export interface TranscribeMedicalVocabulary {
    language_code: string;
    vocabulary_file_uri: string;
    vocabulary_name: string;
    tags?: string;
    id?: string;
    arn?: string;
    download_uri?: string;
}
export interface TranscribeVocabulary {
    language_code: string;
    vocabulary_file_uri: string;
    vocabulary_name: string;
    phrases?: string;
    tags?: string;
    id?: string;
    arn?: string;
    download_uri?: string;
}
export interface TranscribeVocabularyFilter {
    language_code: string;
    vocabulary_filter_name: string;
    vocabulary_filter_file_uri?: string;
    tags?: string;
    words?: string;
    id?: string;
    arn?: string;
    download_uri?: string;
}
export interface TransferAccess {
    external_id: string;
    server_id: string;
    role: string;
    target: string;
    home_directory?: string;
    home_directory_mappings?: HomeDirectoryMappings;
    home_directory_type?: string;
    policy?: string;
    posix_profile?: POSIX;
    id?: string;
}
export interface HomeDirectoryMappings {
    entry: string;
    target: string;
}
export interface TransferAgreement {
    access_role: string;
    base_directory: string;
    local_profile_id: string;
    partner_profile_id: string;
    server_id: string;
    description?: string;
    tags?: string;
    agreement_id?: string;
    arn?: string;
    staus?: string;
}
export interface TransferCertificate {
    certificate: string;
    usage: string;
    certificate_chain?: string;
    description?: string;
    private_key?: string;
    tags?: string;
    arn?: string;
    certificate_id?: string;
    active_date?: string;
    inactive_date?: string;
}
export interface TransferConnector {
    access_role: string;
    url: string;
    compression: string;
    encryption_algorithm: string;
    local_profile_id: string;
    mdn_response: string;
    partner_profile_id: string;
    signing_algorithm: string;
    trusted_host_keys: string;
    user_secret_id: string;
    logging_role?: string;
    tags?: string;
    mdn_signing_algorithm?: string;
    message_subject?: string;
    arn?: string;
    connector_id?: string;
}
export interface TransferProfile {
    as2_id: string;
    profile_type: string;
    certificate_ids?: string;
    tags?: string;
    arn?: string;
    profile_id?: string;
}
export interface ResourceTransferServer {
    execution_role: string;
    workflow_id: string;
    certificate?: string;
    domain?: string;
    protocols?: string;
    endpoint_details?: EndpointDetails;
    endpoint_type?: string;
    invocation_role?: string;
    host_key?: string;
    url?: string;
    identity_provider_type?: string;
    directory_id?: string;
    function?: string;
    logging_role?: string;
    force_destroy?: string;
    security_policy_name?: string;
    structured_log_destinations?: string;
    tags?: string;
    workflow_details?: string;
    as2_transports?: string;
    passive_ip?: string;
    set_stat_option?: string;
    tls_session_resumption_mode?: string;
    on_upload?: string;
    on_partial_upload?: string;
    arn?: string;
    id?: string;
    endpoint?: string;
    host_key_fingerprint?: string;
    tags_all?: string;
}
export interface EndpointDetails {
    address_allocation_ids?: string;
    security_group_ids?: string;
    subnet_ids?: string;
    vpc_endpoint_id?: string;
    vpc_id?: string;
}
export interface TransferSSHKey {
    server_id?: string;
    user_name?: string;
    body?: string;
}
export interface TransferUser {
    server_id: string;
    user_name: string;
    role: string;
    home_directory?: string;
    home_directory_mappings?: HomeDirectoryMappings;
    home_directory_type?: string;
    policy?: string;
    posix_profile?: POSIX;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface TransferWorkflow {
    steps: string;
    type: string;
    key: string;
    value: string;
    description?: string;
    on_exception_steps?: string;
    tags?: string;
    copy_step_details?: string;
    custom_step_details?: string;
    decrypt_step_details?: string;
    delete_step_details?: string;
    tag_step_details?: string;
    destination_file_location?: string;
    name?: string;
    overwrite_existing?: string;
    source_file_location?: string;
    target?: string;
    timeout_seconds?: string;
    efs_file_location?: string;
    s3_file_location?: string;
    file_system_id?: string;
    path?: string;
    bucket?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface VerifiedaccessInstance {
    description?: string;
    tags?: string;
    creation_time?: string;
    id?: string;
    last_updated_time?: string;
    verified_access_trust_providers?: VerifiedAccessTrustProviders;
    verified_access_trust_provider_id?: string;
}
export interface VerifiedAccessTrustProviders {
    description?: string;
    device_trust_provider_type?: string;
    trust_provider_type?: string;
    user_trust_provider_type?: string;
    verified_access_trust_provider_id?: string;
}
export interface VerifiedaccessTrustProvider {
    policy_reference_name: string;
    trust_provider_type: string;
    description?: string;
    device_options?: string;
    device_trust_provider_type?: string;
    oidc_options?: string;
    tags?: string;
    user_trust_provider_type?: string;
    id?: string;
}
export interface VolumeAttachment {
    device_name: string;
    instance_id: string;
    volume_id: string;
    force_detach?: string;
    skip_destroy?: string;
    stop_instance_before_detaching?: string;
}
export interface ResourceVpc {
    cidr_block?: string;
    instance_tenancy?: string;
    ipv4_ipam_pool_id?: string;
    ipv4_netmask_length?: string;
    ipv6_cidr_block?: string;
    ipv6_ipam_pool_id?: string;
    ipv6_netmask_length?: string;
    ipv6_cidr_block_network_border_group?: string;
    enable_dns_support?: string;
    enable_network_address_usage_metrics?: string;
    enable_dns_hostnames?: string;
    assign_generated_ipv6_cidr_block?: string;
    tags?: string;
    arn?: string;
    id?: string;
    main_route_table_id?: string;
    default_network_acl_id?: string;
    default_security_group_id?: string;
    default_route_table_id?: string;
    ipv6_association_id?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface ResourceVpcDHCPOptions {
    domain_name?: string;
    domain_name_servers?: string;
    ntp_servers?: string;
    netbios_name_servers?: string;
    netbios_node_type?: string;
    tags?: string;
    id?: string;
    arn?: string;
    owner_id?: string;
    tags_all?: string;
}
export interface VpcDHCPOptionsAssociation {
    vpc_id: string;
    dhcp_options_id: string;
    id?: string;
}
export interface ResourceVpcEndpoint {
    service_name: string;
    vpc_id: string;
    auto_accept?: string;
    policy?: string;
    private_dns_enabled?: string;
    dns_options?: DNSOptions;
    ip_address_type?: string;
    route_table_ids?: string;
    subnet_ids?: string;
    security_group_ids?: string;
    tags?: string;
    vpc_endpoint_type?: string;
    id?: string;
    arn?: string;
    cidr_blocks?: string;
    network_interface_ids?: string;
    owner_id?: string;
    prefix_list_id?: string;
    requester_managed?: string;
    state?: string;
    tags_all?: string;
    dns_name?: string;
    hosted_zone_id?: string;
}
export interface VpcEndpointConnectionAccepter {
    vpc_endpoint_id: string;
    vpc_endpoint_service_id: string;
    id?: string;
    vpc_endpoint_state?: string;
}
export interface VpcEndpointConnectionNotification {
    connection_notification_arn: string;
    connection_events: string;
    vpc_endpoint_service_id?: string;
    vpc_endpoint_id?: string;
    id?: string;
    state?: string;
    notification_type?: string;
}
export interface VpcEndpointPolicy {
    vpc_endpoint_id: string;
    policy?: string;
    id?: string;
}
export interface VpcEndpointRouteTableAssociation {
    route_table_id: string;
    vpc_endpoint_id: string;
    id?: string;
}
export interface VpcEndpointSecurityGroupAssociation {
    security_group_id: string;
    vpc_endpoint_id: string;
    replace_default_association?: string;
    id?: string;
}
export interface ResourceVpcEndpointService {
    acceptance_required: string;
    allowed_principals?: string;
    gateway_load_balancer_arns?: string;
    network_load_balancer_arns?: string;
    tags?: string;
    private_dns_name?: string;
    supported_ip_address_types?: string;
    id?: string;
    availability_zones?: string;
    arn?: string;
    base_endpoint_dns_names?: string;
    manages_vpc_endpoints?: string;
    service_name?: string;
    service_type?: string;
    state?: string;
    private_dns_name_configuration?: string;
    name?: string;
    type?: string;
    value?: string;
    tags_all?: string;
}
export interface VpcEndpointServiceAllowedPrincipal {
    vpc_endpoint_service_id: string;
    principal_arn: string;
    id?: string;
}
export interface VpcEndpointSubnetAssociation {
    vpc_endpoint_id: string;
    subnet_id: string;
    id?: string;
}
export interface VpcIPAM {
    operating_regions: OperatingRegions;
    description?: string;
    tags?: string;
    cascade?: string;
    arn?: string;
    id?: string;
    default_resource_discovery_id?: string;
    default_resource_discovery_association_id?: string;
    private_default_scope_id?: string;
    public_default_scope_id?: string;
    scope_count?: string;
    tags_all?: string;
}
export interface OperatingRegions {
    region_name?: string;
}
export interface VpcIPAMOrganizationAdminAccount {
    delegated_admin_account_id: string;
    arn?: string;
    id?: string;
    email?: string;
    name?: string;
    service_principal?: string;
}
export interface ResourceVpcIPAMPool {
    address_family?: string;
    allocation_default_netmask_length?: string;
    allocation_max_netmask_length?: string;
    allocation_min_netmask_length?: string;
    allocation_resource_tags?: string;
    auto_import?: string;
    aws_service?: string;
    description?: string;
    ipam_scope_id?: string;
    locale?: string;
    publicly_advertisable?: string;
    public_ip_source?: string;
    source_ipam_pool_id?: string;
    tags?: string;
    arn?: string;
    id?: string;
    state?: string;
    tags_all?: string;
}
export interface VpcIPAMPoolCIDR {
    ipam_pool_id: string;
    cidr?: string;
    cidr_authorization_context?: CIDRAuthorizationContext;
    netmask_length?: string;
    id?: string;
    ipam_pool_cidr_id?: string;
}
export interface CIDRAuthorizationContext {
    message?: string;
    signature?: string;
}
export interface VpcIPAMPoolCIDRAllocation {
    ipam_pool_id: string;
    cidr?: string;
    description?: string;
    disallowed_cidrs?: string;
    netmask_length?: string;
    id?: string;
    resource_id?: string;
    resource_owner?: string;
    resource_type?: string;
}
export interface VpcIPAMResourceDiscovery {
    operating_regions: OperatingRegions;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    is_default?: string;
    owner_id?: string;
    ipam_resource_discovery_region?: string;
    tags_all?: string;
}
export interface VpcIPAMResourceDiscoveryAssociation {
    ipam_id: string;
    ipam_resource_discovery_id: string;
    tags?: string;
    arn?: string;
    id?: string;
    owner_id?: string;
    ipam_arn?: string;
    ipam_region?: string;
    is_default?: string;
    state?: string;
    tags_all?: string;
}
export interface VpcIPAMScope {
    ipam_id?: string;
    description?: string;
    tags?: string;
    arn?: string;
    id?: string;
    ipam_arn?: string;
    is_default?: string;
    pool_count?: string;
    type?: string;
}
export interface VpcIpv4CIDRBlockAssociation {
    vpc_id: string;
    cidr_block?: string;
    ipv4_ipam_pool_id?: string;
    ipv4_netmask_length?: string;
    id?: string;
}
export interface VpcIpv6CIDRBlockAssociation {
    ipv6_ipam_pool_id: string;
    vpc_id: string;
    ipv6_cidr_block?: string;
    ipv6_netmask_length?: string;
    id?: string;
}
export interface VpcNetworkPerformanceMetricSubscription {
    destination: string;
    source: string;
    metric?: string;
    statistic?: string;
    period?: string;
}
export interface ResourceVpcPeeringConnection {
    peer_vpc_id: string;
    vpc_id: string;
    peer_owner_id?: string;
    auto_accept?: string;
    peer_region?: string;
    accepter?: string;
    requester?: string;
    tags?: string;
    allow_remote_vpc_dns_resolution?: string;
    id?: string;
    accept_status?: string;
    tags_all?: string;
}
export interface VpcPeeringConnectionAccepter {
    vpc_peering_connection_id: string;
    auto_accept?: string;
    tags?: string;
    id?: string;
    accept_status?: string;
    vpc_id?: string;
    peer_vpc_id?: string;
    peer_owner_id?: string;
    peer_region?: string;
    accepter?: string;
    requester?: string;
    tags_all?: string;
    allow_remote_vpc_dns_resolution?: string;
}
export interface VpcPeeringConnectionOptions {
    vpc_peering_connection_id: string;
    accepter?: string;
    requester?: string;
    allow_remote_vpc_dns_resolution?: string;
    id?: string;
}
export interface VpcSecurityGroupEgressRule {
    security_group_id: string;
    cidr_ipv4?: string;
    cidr_ipv6?: string;
    description?: string;
    from_port?: string;
    ip_protocol?: string;
    prefix_list_id?: string;
    referenced_security_group_id?: string;
    tags?: string;
    to_port?: string;
    arn?: string;
    security_group_rule_id?: string;
    tags_all?: string;
}
export interface VpcSecurityGroupIngressRule {
    ip_protocol: string;
    security_group_id: string;
    cidr_ipv4?: string;
    cidr_ipv6?: string;
    description?: string;
    from_port?: string;
    prefix_list_id?: string;
    referenced_security_group_id?: string;
    tags?: string;
    to_port?: string;
    arn?: string;
    security_group_rule_id?: string;
    tags_all?: string;
}
export interface VpclatticeAccessLogSubscription {
    destination_arn: string;
    resource_identifier: string;
    id?: string;
    arn?: string;
    resource_arn?: string;
}
export interface ResourceVpclatticeAuthPolicy {
    resource_identifier: string;
    policy: string;
    state?: string;
}
export interface ResourceVpclatticeListener {
    default_action: VpclatticeListenerDefaultAction;
    name: string;
    protocol: string;
    status_code: string;
    target_groups: TargetGroups;
    port?: string;
    service_arn?: string;
    service_identifier?: string;
    tags?: string;
    forward?: VpclatticeListenerForward;
    arn?: string;
    created_at?: string;
    listener_id?: string;
    updated_at?: string;
}
export interface VpclatticeListenerDefaultAction {
    fixed_response?: string;
    forward?: string;
}
export interface VpclatticeListenerForward {
    target_groups: string;
}
export interface TargetGroups {
    target_group_identifier?: string;
    weight?: string;
}
export interface VpclatticeListenerRule {
    service_identifier: string;
    listener_identifier: string;
    action: string;
    match: string;
    name: string;
    priority: string;
    tags?: string;
    fixed_response?: string;
    forward?: string;
    status_code?: string;
    target_groups?: string;
    http_match?: string;
    header_matches?: string;
    method?: string;
    path_match?: string;
    case_sensitive?: string;
    contains?: string;
    exact?: string;
    prefix?: string;
    arn?: string;
    rule_id?: string;
    tags_all?: string;
}
export interface ResourceVpclatticeService {
    name: string;
    auth_type?: string;
    certificate_arn?: string;
    custom_domain_name?: string;
    tags?: string;
    arn?: string;
    dns_entry?: string;
    id?: string;
    status?: string;
    tags_all?: string;
}
export interface ResourceVpclatticeServiceNetwork {
    name: string;
    auth_type?: string;
    tags?: string;
    arn?: string;
    tags_all?: string;
}
export interface VpclatticeServiceNetworkServiceAssociation {
    service_identifier: string;
    service_network_identifier: string;
    tags?: string;
    arn?: string;
    created_by?: string;
    custom_domain_name?: string;
    dns_entry?: string;
    domain_name?: string;
    hosted_zone_id?: string;
    id?: string;
    status?: string;
    tags_all?: string;
}
export interface VpclatticeServiceNetworkVpcAssociation {
    vpc_identifier: string;
    service_network_identifier: string;
    tags?: string;
    security_group_ids?: string;
    arn?: string;
    created_by?: string;
    id?: string;
    status?: string;
    tags_all?: string;
}
export interface VpclatticeTargetGroup {
    name: string;
    type: string;
    port: string;
    protocol: string;
    vpc_identifier: string;
    config?: string;
    tags?: string;
    health_check?: string;
    ip_address_type?: string;
    protocol_version?: string;
    enabled?: string;
    health_check_interval_seconds?: string;
    health_check_timeout_seconds?: string;
    healthy_threshold_count_?: string;
    matcher?: string;
    value?: string;
    path?: string;
    unhealthy_threshold_count?: string;
    arn?: string;
    id?: string;
    status?: string;
    tags_all?: string;
}
export interface VPNConnection {
    customer_gateway_id: string;
    type: string;
    transport_transit_gateway_attachment_id: string;
    transit_gateway_id?: string;
    vpn_gateway_id?: string;
    static_routes_only?: string;
    enable_acceleration?: string;
    tags?: string;
    local_ipv4_network_cidr?: string;
    local_ipv6_network_cidr?: string;
    outside_ip_address_type?: string;
    remote_ipv4_network_cidr?: string;
    remote_ipv6_network_cidr?: string;
    tunnel_inside_ip_version?: string;
    tunnel1_inside_cidr?: string;
    tunnel2_inside_cidr?: string;
    tunnel1_inside_ipv6_cidr?: string;
    tunnel2_inside_ipv6_cidr?: string;
    tunnel1_preshared_key?: string;
    tunnel2_preshared_key?: string;
    tunnel1_dpd_timeout_action?: string;
    tunnel2_dpd_timeout_action?: string;
    tunnel1_dpd_timeout_seconds?: string;
    tunnel2_dpd_timeout_seconds?: string;
    tunnel1_enable_tunnel_lifecycle_control?: string;
    tunnel2_enable_tunnel_lifecycle_control?: string;
    tunnel1_ike_versions?: string;
    tunnel2_ike_versions?: string;
    tunnel1_log_options?: string;
    tunnel2_log_options?: string;
    tunnel1_phase1_dh_group_numbers?: string;
    tunnel2_phase1_dh_group_numbers?: string;
    tunnel1_phase1_encryption_algorithms?: string;
    tunnel2_phase1_encryption_algorithms?: string;
    tunnel1_phase1_integrity_algorithms?: string;
    tunnel2_phase1_integrity_algorithms?: string;
    tunnel1_phase1_lifetime_seconds?: string;
    tunnel2_phase1_lifetime_seconds?: string;
    tunnel1_phase2_dh_group_numbers?: string;
    tunnel2_phase2_dh_group_numbers?: string;
    tunnel1_phase2_encryption_algorithms?: string;
    tunnel2_phase2_encryption_algorithms?: string;
    tunnel1_phase2_integrity_algorithms?: string;
    tunnel2_phase2_integrity_algorithms?: string;
    tunnel1_phase2_lifetime_seconds?: string;
    tunnel2_phase2_lifetime_seconds?: string;
    tunnel1_rekey_fuzz_percentage?: string;
    tunnel2_rekey_fuzz_percentage?: string;
    tunnel1_rekey_margin_time_seconds?: string;
    tunnel2_rekey_margin_time_seconds?: string;
    tunnel1_replay_window_size?: string;
    tunnel2_replay_window_size?: string;
    tunnel1_startup_action?: string;
    tunnel2_startup_action?: string;
    cloudwatch_log_options?: CloudwatchLogOptions;
    arn?: string;
    id?: string;
    core_network_arn?: string;
    core_network_attachment_arn?: string;
    customer_gateway_configuration?: string;
    routes?: VPNConnectionRoutes;
    tags_all?: string;
    transit_gateway_attachment_id?: string;
    tunnel1_address?: string;
    tunnel1_cgw_inside_address?: string;
    tunnel1_vgw_inside_address?: string;
    tunnel1_bgp_asn?: string;
    tunnel1_bgp_holdtime?: string;
    tunnel2_address?: string;
    tunnel2_cgw_inside_address?: string;
    tunnel2_vgw_inside_address?: string;
    tunnel2_bgp_asn?: string;
    tunnel2_bgp_holdtime?: string;
    vgw_telemetry?: VgwTelemetry;
    state?: string;
    status_message?: string;
}
export interface CloudwatchLogOptions {
    log_enabled?: string;
    log_group_arn?: string;
    log_output_format?: string;
}
export interface VPNConnectionRoutes {
    destination_cidr_block?: string;
    source?: string;
    state?: string;
}
export interface VgwTelemetry {
    accepted_route_count?: string;
    certificate_arn?: string;
    last_status_change?: string;
    outside_ip_address?: string;
    status?: string;
    status_message?: string;
}
export interface VPNConnectionRoute {
    destination_cidr_block: string;
    vpn_connection_id: string;
}
export interface ResourceVPNGateway {
    vpc_id?: string;
    availability_zone?: string;
    tags?: string;
    amazon_side_asn?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface VPNGatewayAttachment {
    vpc_id: string;
    vpn_gateway_id: string;
}
export interface VPNGatewayRoutePropagation {
    vpn_gateway_id?: string;
    route_table_id?: string;
}
export interface WafByteMatchSet {
    name: string;
    byte_match_tuples?: string;
    id?: string;
}
export interface WafGeoMatchSet {
    name: string;
    geo_match_constraint?: string;
    id?: string;
    arn?: string;
}
export interface PurpleWafIpset {
    name: string;
    ip_set_descriptors?: string;
    id?: string;
    arn?: string;
}
export interface WafRateBasedRule {
    metric_name: string;
    name: string;
    rate_key: string;
    rate_limit: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface WafRegexMatchSet {
    name: string;
    regex_match_tuple: string;
    field_to_match: string;
    regex_pattern_set_id: string;
    text_transformation: string;
    type: string;
    data?: string;
    id?: string;
    arn?: string;
}
export interface WafRegexPatternSet {
    name: string;
    regex_pattern_strings?: string;
    id?: string;
    arn?: string;
}
export interface WafRule {
    name: string;
    metric_name: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface WafRuleGroup {
    metric_name: string;
    name?: string;
    name_prefix?: string;
    activated_rule?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface WafSizeConstraintSet {
    name: string;
    size_constraints?: string;
    id?: string;
    arn?: string;
}
export interface WafSQLInjectionMatchSet {
    name: string;
    sql_injection_match_tuples?: string;
    id?: string;
}
export interface WafWebACL {
    default_action: EntityTypes;
    metric_name: string;
    name: string;
    rules?: WafWebACLRules;
    logging_configuration?: WafWebACLLoggingConfiguration;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface WafWebACLLoggingConfiguration {
    log_destination: string;
    redacted_fields?: LoggingConfigurationRedactedFields;
}
export interface LoggingConfigurationRedactedFields {
    field_to_match: RedactedFieldsFieldToMatch;
}
export interface RedactedFieldsFieldToMatch {
    data?: string;
    type?: string;
}
export interface WafWebACLRules {
    type: string;
    priority: string;
    rule_id: string;
    action?: string;
    override_action?: string;
}
export interface WafXSSMatchSet {
    name: string;
    xss_match_tuples?: string;
    id?: string;
    arn?: string;
}
export interface WafregionalByteMatchSet {
    name: string;
    positional_constraint: string;
    target_string: string;
    text_transformation: string;
    type: string;
    data?: string;
    id?: string;
}
export interface WafregionalGeoMatchSet {
    name: string;
    geo_match_constraint?: string;
    id?: string;
}
export interface WafregionalIpset {
    name: string;
    ip_set_descriptor?: string;
    id?: string;
    arn?: string;
}
export interface WafregionalRegexMatchSet {
    name: string;
    regex_match_tuple: string;
    field_to_match: string;
    regex_pattern_set_id: string;
    text_transformation: string;
    type: string;
    data?: string;
    id?: string;
}
export interface WafregionalRegexPatternSet {
    name: string;
    regex_pattern_strings?: string;
    id?: string;
}
export interface WafregionalRuleGroup {
    name: string;
    metric_name: string;
    activated_rule?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface WafregionalSizeConstraintSet {
    name: string;
    size_constraints?: string;
    id?: string;
}
export interface WafregionalSQLInjectionMatchSet {
    name: string;
    field_to_match: RedactedFieldsFieldToMatch;
    sql_injection_match_tuple?: SQLInjectionMatchTuple;
    id?: string;
}
export interface SQLInjectionMatchTuple {
    field_to_match: string;
    text_transformation: string;
}
export interface WafregionalWebACL {
    default_action: EntityTypes;
    metric_name: string;
    name: string;
    logging_configuration?: WafWebACLLoggingConfiguration;
    rule?: WafregionalWebACLRule;
    tags?: string;
    arn?: string;
    id?: string;
    tags_all?: string;
}
export interface WafregionalWebACLRule {
    priority: string;
    rule_id: string;
    action?: ElasticInferenceAccelerator;
    type?: string;
}
export interface WafregionalWebACLAssociation {
    web_acl_id: string;
    resource_arn: string;
    id?: string;
}
export interface WafregionalXSSMatchSet {
    name: string;
    field_to_match: string;
    text_transformation: string;
    type: string;
    xss_match_tuple?: string;
    data?: string;
    id?: string;
}
export interface ResourceWafv2IPSet {
    name: string;
    scope: string;
    ip_address_version: string;
    addresses: string;
    description?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface ResourceWafv2RegexPatternSet {
    name: string;
    scope: string;
    description?: string;
    regular_expression?: RegularExpression;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface Wafv2WebACL {
    default_action: Wafv2WebACLDefaultAction;
    name: string;
    visibility_config: VisibilityConfig;
    key: string;
    insert_header: InsertHeader;
    text_transformation: TextTransformation;
    field_to_match: Wafv2WebACLFieldToMatch;
    username_field: PasswordFieldClass;
    password_field: PasswordFieldClass;
    success_values: string;
    failure_values: string;
    association_config?: AssociationConfig;
    custom_response_body?: CustomResponseBody;
    description?: string;
    rule?: Wafv2WebACLRule;
    tags?: string;
    token_domains?: string;
    request_body?: RequestBody;
    captcha_config?: CAPTCHAConfig;
    override_action?: OverrideAction;
    rule_label?: ComputeTypeClass;
    custom_request_handling?: CustomRequestHandling;
    custom_response?: CustomResponse;
    value?: string;
    response_header?: InsertHeader;
    and_statement?: KmsSecretClass;
    byte_match_statement?: ByteMatchStatement;
    geo_match_statement?: GeoMatchStatement;
    ip_set_reference_statement?: IPSetReferenceStatement;
    label_match_statement?: LabelMatchStatement;
    managed_rule_group_statement?: ManagedRuleGroupStatement;
    not_statement?: KmsSecretClass;
    or_statement?: KmsSecretClass;
    rate_based_statement?: RateBasedStatement;
    regex_match_statement?: RegexMatchStatement;
    regex_pattern_set_reference_statement?: RegexPatternSetReferenceStatement;
    rule_group_reference_statement?: RuleGroupReferenceStatement;
    size_constraint_statement?: SizeConstraintStatement;
    sqli_match_statement?: MatchStatement;
    xss_match_statement?: MatchStatement;
    forwarded_ip_config?: ForwardedIPConfig;
    ip_set_forwarded_ip_config?: IPSetForwardedIPConfig;
    rule_action_override?: RuleActionOverride;
    custom_key?: CustomKey;
    aws_managed_rules_bot_control_rule_set?: AwsManagedRulesBotControlRuleSet;
    aws_managed_rules_atp_rule_set?: AwsManagedRulesAtpRuleSet;
    login_path?: string;
    request_inspection?: RequestInspection;
    response_inspection?: ResponseInspection;
    identifier?: string;
    body_contains?: BodyContains;
    status_code?: StatusCode;
    json_body?: JSONBody;
    single_header?: ComputeTypeClass;
    single_query_argument?: ComputeTypeClass;
    immunity_time_property?: ImmunityTimeProperty;
    arn?: string;
    capacity?: string;
    id?: string;
    tags_all?: string;
}
export interface AssociationConfig {
    request_body?: string;
}
export interface AwsManagedRulesAtpRuleSet {
    login_path: string;
    enable_regex_in_path?: string;
    request_inspection?: string;
    response_inspection?: string;
}
export interface AwsManagedRulesBotControlRuleSet {
    inspection_level?: string;
}
export interface BodyContains {
    success_strings: string;
    failure_strings: string;
}
export interface ByteMatchStatement {
    positional_constraint: string;
    search_string: string;
    text_transformation: string;
    field_to_match?: string;
}
export interface CAPTCHAConfig {
    immunity_time_property?: string;
}
export interface CustomKey {
    cookie?: string;
    forwarded_ip?: string;
    http_method?: string;
    header?: string;
    ip?: string;
    label_namespace?: string;
    query_argument?: string;
    query_string?: string;
    uri_path?: string;
}
export interface CustomRequestHandling {
    insert_header: string;
}
export interface CustomResponse {
    response_code: string;
    custom_response_body_key?: string;
    response_header?: string;
}
export interface CustomResponseBody {
    key: string;
    content: string;
    content_type: string;
}
export interface Wafv2WebACLDefaultAction {
    allow?: Allow;
    block?: Block;
}
export interface Allow {
    custom_request_handling?: string;
}
export interface Block {
    custom_response?: string;
}
export interface Wafv2WebACLFieldToMatch {
    all_query_arguments?: string;
    json_body?: string;
    method?: string;
    query_string?: string;
    single_header?: string;
    single_query_argument?: string;
    uri_path?: string;
}
export interface ForwardedIPConfig {
    fallback_behavior: string;
    header_name: string;
}
export interface GeoMatchStatement {
    country_codes: string;
    forwarded_ip_config?: string;
}
export interface ImmunityTimeProperty {
    immunity_time?: string;
}
export interface IPSetForwardedIPConfig {
    fallback_behavior: string;
    header_name: string;
    position: string;
}
export interface IPSetReferenceStatement {
    arn: string;
    ip_set_forwarded_ip_config?: string;
}
export interface JSONBody {
    match_pattern: string;
    match_scope: string;
    invalid_fallback_behavior?: string;
    oversize_handling?: string;
}
export interface LabelMatchStatement {
    scope: string;
    key: string;
}
export interface ManagedRuleGroupStatement {
    name: string;
    vendor_name: string;
    rule_action_override?: string;
    scope_down_statement?: string;
    version?: string;
}
export interface OverrideAction {
    count?: string;
    none?: string;
}
export interface PasswordFieldClass {
    identifier?: string;
}
export interface RateBasedStatement {
    limit: string;
    aggregate_key_type?: string;
    custom_key?: string;
    forwarded_ip_config?: string;
    scope_down_statement?: string;
}
export interface RegexMatchStatement {
    regex_string: string;
    field_to_match: string;
    text_transformation: string;
}
export interface RegexPatternSetReferenceStatement {
    arn: string;
    text_transformation: string;
    field_to_match?: string;
}
export interface RequestBody {
    cloudfront?: Cloudfront;
}
export interface Cloudfront {
    default_size_inspection_limit: string;
}
export interface RequestInspection {
    payload_type: string;
    username_field: string;
    password_field: string;
}
export interface ResponseInspection {
    body_contains?: string;
    json?: JSON;
    status_code?: string;
}
export interface JSON {
    identifier: string;
    success_strings: string;
    failure_strings: string;
}
export interface Wafv2WebACLRule {
    name: string;
    priority: string;
    statement: RuleStatement;
    visibility_config: string;
    action?: RuleAction;
    captcha_config?: string;
    override_action?: string;
    rule_label?: string;
}
export interface RuleAction {
    captcha?: Allow;
    challenge?: Allow;
    count?: Allow;
}
export interface RuleStatement {
    and_statement?: string;
    byte_match_statement?: string;
    geo_match_statement?: string;
    ip_set_reference_statement?: string;
    label_match_statement?: string;
    managed_rule_group_statement?: string;
    not_statement?: string;
    or_statement?: string;
    rate_based_statement?: string;
    regex_match_statement?: string;
    regex_pattern_set_reference_statement?: string;
    rule_group_reference_statement?: string;
    size_constraint_statement?: string;
    sqli_match_statement?: string;
    xss_match_statement?: string;
}
export interface RuleActionOverride {
    action_to_use: string;
    name: string;
}
export interface RuleGroupReferenceStatement {
    arn: string;
    rule_action_override?: string;
}
export interface SizeConstraintStatement {
    comparison_operator: string;
    size: string;
    text_transformation: string;
    field_to_match?: string;
}
export interface MatchStatement {
    text_transformation: string;
    field_to_match?: string;
}
export interface StatusCode {
    success_codes: string;
    failure_codes: string;
}
export interface TextTransformation {
    priority?: string;
    type?: string;
}
export interface VisibilityConfig {
    cloudwatch_metrics_enabled?: string;
    metric_name?: string;
    sampled_requests_enabled?: string;
}
export interface Wafv2WebACLAssociation {
    resource_arn: string;
    web_acl_arn: string;
}
export interface Wafv2WebACLLoggingConfiguration {
    log_destination_configs: string;
    resource_arn: string;
    action: string;
    label_name: string;
    logging_filter?: LoggingFilter;
    redacted_fields?: Wafv2WebACLLoggingConfigurationRedactedFields;
    id?: string;
}
export interface LoggingFilter {
    default_behavior: string;
    filter: LoggingFilterFilter;
}
export interface LoggingFilterFilter {
    behavior?: string;
    condition?: FilterCondition;
    requirement?: string;
}
export interface FilterCondition {
    action_condition?: ActionCondition;
    label_name_condition?: LabelNameCondition;
}
export interface ActionCondition {
    action: string;
}
export interface LabelNameCondition {
    label_name: string;
}
export interface Wafv2WebACLLoggingConfigurationRedactedFields {
    method?: string;
    query_string?: string;
    single_header?: ComputeTypeClass;
    uri_path?: string;
}
export interface WorklinkFleet {
    name: string;
    vpc_id: string;
    subnet_ids: string;
    security_group_ids: string;
    type: string;
    saml_metadata: string;
    audit_stream_arn?: string;
    device_ca_certificate?: string;
    display_name?: string;
    optimize_for_end_user_location?: string;
    id?: string;
    arn?: string;
    company_code?: string;
    created_time?: string;
    last_updated_time?: string;
}
export interface WorklinkWebsiteCertificateAuthorityAssociation {
    fleet_arn: string;
    certificate: string;
    display_name?: string;
    website_ca_id?: string;
}
export interface WorkspacesConnectionAlias {
    connection_string: string;
    tags?: string;
    id?: string;
    owner_account_id?: string;
    state?: string;
    tags_all?: string;
}
export interface ResourceWorkspacesDirectory {
    directory_id: string;
    subnet_ids?: string;
    ip_group_ids?: string;
    tags?: string;
    self_service_permissions?: SelfServicePermissions;
    workspace_access_properties?: WorkspaceAccessProperties;
    workspace_creation_properties?: WorkspaceCreationProperties;
    id?: string;
    alias?: string;
    customer_user_name?: string;
    directory_name?: string;
    directory_type?: string;
    dns_ip_addresses?: string;
    iam_role_id?: string;
    registration_code?: string;
    tags_all?: string;
    workspace_security_group_id?: string;
}
export interface WorkspacesIPGroup {
    name: string;
    description?: string;
    rules?: string;
    tags?: string;
    id?: string;
    tags_all?: string;
}
export interface ResourceWorkspacesWorkspace {
    directory_id: string;
    bundle_id: string;
    user_name: string;
    root_volume_encryption_enabled?: string;
    user_volume_encryption_enabled?: string;
    volume_encryption_key?: string;
    tags?: string;
    workspace_properties?: string;
    compute_type_name?: string;
    root_volume_size_gib?: string;
    running_mode?: string;
    running_mode_auto_stop_timeout_in_minutes?: string;
    user_volume_size_gib?: string;
    id?: string;
    ip_address?: string;
    computer_name?: string;
    state?: string;
    tags_all?: string;
}
export interface XrayEncryptionConfig {
    type: string;
    key_id?: string;
    id?: string;
}
export interface XrayGroup {
    group_name: string;
    filter_expression: string;
    insights_enabled: string;
    insights_configuration?: string;
    tags?: string;
    notifications_enabled?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export interface XraySamplingRule {
    rule_name: string;
    resource_arn: string;
    priority: string;
    fixed_rate: string;
    reservoir_size: string;
    service_name: string;
    service_type: string;
    host: string;
    http_method: string;
    url_path: string;
    version: string;
    attributes?: string;
    tags?: string;
    id?: string;
    arn?: string;
    tags_all?: string;
}
export declare class Convert {
    static toTerraformProviderAws(json: string): TerraformProviderAws;
    static terraformProviderAwsToJson(value: TerraformProviderAws): string;
}
//# sourceMappingURL=types.d.ts.map