export interface CloudsearchDomain {
    resource: Resource[];
}

export interface Resource {
    cloudsearch_domain: CloudsearchDomainClass;
}

export interface CloudsearchDomainClass {
    endpoint_options?:   EndpointOptions;
    index_field?:        IndexField;
    /** (Optional) Whether or not to maintain extra instances for the domain in a second Availability Zone to ensure high availability. */
    multi_az?:           any;
    scaling_parameters?: ScalingParameters;
    /** (Optional) You can set whether this index should be searchable or not. */
    search?:             any;
}

export interface EndpointOptions {
    /** (Optional) Enables or disables the requirement that all requests to the domain arrive over HTTPS. */
    enforce_https:       any;
    /** (Optional) The minimum required TLS version. See the [AWS documentation](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DomainEndpointOptions.html) for valid values. */
    tls_security_policy: any;
}

export interface IndexField {
    /** (Required) A unique name for the field. Field names must begin with a letter and be at least 3 and no more than 64 characters long. The allowed characters are: `a`-`z` (lower-case letters), `0`-`9`, and `_` (underscore). The name `score` is reserved and cannot be used as a field name. */
    name:            any;
    /** (Required) The field type. Valid values: `date`, `date-array`, `double`, `double-array`, `int`, `int-array`, `literal`, `literal-array`, `text`, `text-array`. */
    type:            any;
    /** (Optional) The analysis scheme you want to use for a `text` field. The analysis scheme specifies the language-specific text processing options that are used during indexing. */
    analysis_scheme: any;
    /** (Optional) The default value for the field. This value is used when no value is specified for the field in the document data. */
    default_value:   any;
    /** (Optional) You can get facet information by enabling this. */
    facet:           any;
    /** (Optional) You can highlight information. */
    highlight:       any;
    /** (Optional) You can enable returning the value of all searchable fields. */
    return:          any;
    /** (Optional) You can enable the property to be sortable. */
    sort:            any;
    /** (Optional) A comma-separated list of source fields to map to the field. Specifying a source field copies data from one field to another, enabling you to use the same source data in different ways by configuring different options for the fields. */
    source_fields:   any;
}

export interface ScalingParameters {
    /** (Optional) The instance type that you want to preconfigure for your domain. See the [AWS documentation](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ScalingParameters.html) for valid values. */
    desired_instance_type:     any;
    /** (Optional) The number of partitions you want to preconfigure for your domain. Only valid when you select `search.2xlarge` as the instance type. */
    desired_partition_count:   any;
    /** (Optional) The number of replicas you want to preconfigure for each index partition. */
    desired_replication_count: any;
}