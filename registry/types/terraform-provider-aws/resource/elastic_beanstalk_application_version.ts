export interface ElasticBeanstalkApplicationVersion {
    resource: Resource[];
}

export interface Resource {
    elastic_beanstalk_application_version: ElasticBeanstalkApplicationVersionClass;
}

export interface ElasticBeanstalkApplicationVersionClass {
    /** (Required) Name of the Beanstalk Application the version is associated with. */
    application:   any;
    /** (Required) S3 bucket that contains the Application Version source bundle. */
    bucket:        any;
    /** (Required) S3 object that is the Application Version source bundle. */
    key:           any;
    /** (Required) Unique name for the this Application Version. */
    name:          any;
    /** (Optional) Short description of the Application Version. */
    description?:  any;
    /** (Optional) On delete, force an Application Version to be deleted when it may be in use by multiple Elastic Beanstalk Environments. */
    force_delete?: any;
    /** (Optional) Key-value map of tags for the Elastic Beanstalk Application Version. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
}