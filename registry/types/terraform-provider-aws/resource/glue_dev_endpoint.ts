export interface GlueDevEndpoint {
    resource: Resource[];
}

export interface Resource {
    glue_dev_endpoint: GlueDevEndpointClass;
}

export interface GlueDevEndpointClass {
    /** (Optional) A map of arguments used to configure the endpoint. */
    arguments?:                 any;
    /** (Optional) Path to one or more Java Jars in an S3 bucket that should be loaded in this endpoint. */
    extra_jars_s3_path?:        any;
    /** (Optional) Path(s) to one or more Python libraries in an S3 bucket that should be loaded in this endpoint. Multiple values must be complete paths separated by a comma. */
    extra_python_libs_s3_path?: any;
    /** (Optional) -  Specifies the versions of Python and Apache Spark to use. Defaults to AWS Glue version 0.9. */
    glue_version?:              any;
    /** (Required) The name of this endpoint. It must be unique in your account. */
    name:                       any;
    /** (Optional) The number of AWS Glue Data Processing Units (DPUs) to allocate to this endpoint. Conflicts with `worker_type`. */
    number_of_nodes?:           any;
    /** (Optional) The number of workers of a defined worker type that are allocated to this endpoint. This field is available only when you choose worker type G.1X or G.2X. */
    number_of_workers?:         any;
    /** (Optional) The public key to be used by this endpoint for authentication. */
    public_key?:                any;
    /** (Optional) A list of public keys to be used by this endpoint for authentication. */
    public_keys?:               any;
    /** (Required) The IAM role for this endpoint. */
    role_arn:                   any;
    /** (Optional) The name of the Security Configuration structure to be used with this endpoint. */
    security_configuration?:    any;
    /** (Optional) Security group IDs for the security groups to be used by this endpoint. */
    security_group_ids?:        any;
    /** (Optional) The subnet ID for the new endpoint to use. */
    subnet_id?:                 any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Optional) The type of predefined worker that is allocated to this endpoint. Accepts a value of Standard, G.1X, or G.2X. */
    worker_type?:               any;
}