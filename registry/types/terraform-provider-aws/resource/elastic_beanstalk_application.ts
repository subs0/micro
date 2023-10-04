export interface ElasticBeanstalkApplication {
    resource: Resource[];
}

export interface Resource {
    elastic_beanstalk_application: ElasticBeanstalkApplicationClass;
}

export interface ElasticBeanstalkApplicationClass {
    /** (Required) The name of the application, must be unique within your account */
    name:                   any;
    /** (Optional) Short description of the application */
    description?:           any;
    /** (Optional) Key-value map of tags for the Elastic Beanstalk Application. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Required) The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role. */
    service_role:           any;
    /** (Optional) The maximum number of application versions to retain ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.). */
    max_count?:             any;
    /** (Optional) The number of days to retain an application version ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.). */
    max_age_in_days?:       any;
    /** (Optional) Set to `true` to delete a version's source bundle from S3 when the application version is deleted. */
    delete_source_from_s3?: any;
}