export interface OpsworksApplication {
    resource: Resource[];
}

export interface Resource {
    opsworks_application: OpsworksApplicationClass;
}

export interface OpsworksApplicationClass {
    /** (Required) A human-readable name for the application. */
    name:                       any;
    /** (Required) A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update. */
    short_name:                 any;
    /** (Required) ID of the stack the application will belong to. */
    stack_id:                   any;
    /** (Required) The type of source to use. For example, "archive". */
    type:                       any;
    /** (Optional) A description of the app. */
    description?:               any;
    /** (Optional) Object to define environment variables.  Object is described below. */
    environment?:               any;
    /** (Optional) Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect. */
    enable_ssl?:                any;
    /** (Optional) The SSL configuration of the app. Object is described below. */
    ssl_configuration?:         any;
    /** (Optional) SCM configuration of the app as described below. */
    app_source?:                any;
    /** (Optional) The data source's ARN. */
    data_source_arn?:           any;
    /** (Optional) The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`. */
    data_source_type?:          any;
    /** (Optional) The database name. */
    data_source_database_name?: any;
    /**  (Optional) A list of virtual host alias. */
    domains?:                   any;
    /** (Optional) Subfolder for the document root for application of type `rails`. */
    document_root?:             any;
    /** (Optional) Run bundle install when deploying for application of type `rails`. */
    auto_bundle_on_deploy?:     any;
    /** (Required if `type` = `rails`) The name of the Rails environment for application of type `rails`. */
    rails_env?:                 any;
    /** (Optional) Specify activity and workflow workers for your app using the aws-flow gem. */
    aws_flow_ruby_settings?:    any;
    /** (Required) The URL where the app resource can be found. */
    url:                        any;
    /** (Optional) Username to use when authenticating to the source. */
    username?:                  any;
    /** (Optional) Password to use when authenticating to the source. Terraform cannot perform drift detection of this configuration. */
    password?:                  any;
    /** (Optional) SSH key to use when authenticating to the source. Terraform cannot perform drift detection of this configuration. */
    ssh_key?:                   any;
    /** (Optional) For sources that are version-aware, the revision to use. */
    revision?:                  any;
    /** (Required) Variable name. */
    key:                        any;
    /** (Required) Variable value. */
    value:                      any;
    /** (Optional) Set visibility of the variable value to `true` or `false`. */
    secure?:                    any;
    /** (Required) The private key; the contents of the certificate's domain.key file. */
    private_key:                any;
    /** (Required) The contents of the certificate's domain.crt file. */
    certificate:                any;
    /** (Optional)  Can be used to specify an intermediate certificate authority key or client authentication. */
    chain?:                     any;
}