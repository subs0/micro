export interface AppsyncDatasource {
    resource: Resource[];
}

export interface Resource {
    appsync_datasource: AppsyncDatasourceClass;
}

export interface AppsyncDatasourceClass {
    /** (Required) API ID for the GraphQL API for the data source. */
    api_id:                    any;
    /** (Required) User-supplied name for the data source. */
    name:                      any;
    /** (Required) Type of the Data Source. Valid values: `AWS_LAMBDA`, `AMAZON_DYNAMODB`, `AMAZON_ELASTICSEARCH`, `HTTP`, `NONE`, `RELATIONAL_DATABASE`, `AMAZON_EVENTBRIDGE`, `AMAZON_OPENSEARCH_SERVICE`. */
    type:                      any;
    /** (Optional) Description of the data source. */
    description?:              any;
    /** (Optional) DynamoDB settings. See [DynamoDB Config](#dynamodb-config) */
    dynamodb_config?:          any;
    /** (Optional) Amazon Elasticsearch settings. See [ElasticSearch Config](#elasticsearch-config) */
    elasticsearch_config?:     any;
    /** (Optional) AWS EventBridge settings. See [Event Bridge Config](#event-bridge-config) */
    event_bridge_config?:      any;
    /** (Optional) HTTP settings. See [HTTP Config](#http-config) */
    http_config?:              any;
    /** (Optional) AWS Lambda settings. See [Lambda Config](#lambda-config) */
    lambda_config?:            any;
    /** (Optional) Amazon OpenSearch Service settings. See [OpenSearch Service Config](#opensearch-service-config) */
    opensearchservice_config?: any;
    /** (Optional) IAM service role ARN for the data source. */
    service_role_arn?:         any;
    /** (Required) Name of the DynamoDB table. */
    table_name:                any;
    /** (Optional) AWS Region for RDS HTTP endpoint. Defaults to current region. */
    region?:                   any;
    /** (Optional) Set to `true` to use Amazon Cognito credentials with this data source. */
    use_caller_credentials?:   any;
    /** (Optional) The DeltaSyncConfig for a versioned data source. See [Delta Sync Config](#delta-sync-config) */
    delta_sync_config?:        any;
    /** (Optional) Detects Conflict Detection and Resolution with this data source. */
    versioned?:                any;
    /** (Optional) The number of minutes that an Item is stored in the data source. */
    base_table_ttl?:           any;
    /** (Required) The table name. */
    delta_sync_table_name:     any;
    /** (Optional) The number of minutes that a Delta Sync log entry is stored in the Delta Sync table. */
    delta_sync_table_ttl?:     any;
    /** (Required) HTTP endpoint of the OpenSearch domain. */
    endpoint:                  any;
    /** (Required) ARN for the EventBridge bus. */
    event_bus_arn:             any;
    /** (Optional) Authorization configuration in case the HTTP endpoint requires authorization. See [Authorization Config](#authorization-config). */
    authorization_config?:     any;
    /** (Optional) Authorization type that the HTTP endpoint requires. Default values is `AWS_IAM`. */
    authorization_type?:       any;
    /** (Optional) Identity and Access Management (IAM) settings. See [AWS IAM Config](#aws-iam-config). */
    aws_iam_config?:           any;
    /** (Optional) Signing Amazon Web Services Region for IAM authorization. */
    signing_region?:           any;
    /** (Required) ARN for the Lambda function. */
    function_arn:              any;
    /** (Required) Amazon RDS HTTP endpoint configuration. See [HTTP Endpoint Config](#http-endpoint-config). */
    http_endpoint_config:      any;
    /** (Optional) Source type for the relational database. Valid values: `RDS_HTTP_ENDPOINT`. */
    source_type?:              any;
    /** (Required) Amazon RDS cluster identifier. */
    db_cluster_identifier:     any;
    /** (Required) AWS secret store ARN for database credentials. */
    aws_secret_store_arn:      any;
    /** (Optional) Logical database name. */
    database_name?:            any;
    /** (Optional) Logical schema name. */
    schema?:                   any;
}