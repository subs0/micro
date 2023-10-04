export interface MskconnectCustomPlugin {
    resource: Resource[];
}

export interface Resource {
    mskconnect_custom_plugin: MskconnectCustomPluginClass;
}

export interface MskconnectCustomPluginClass {
    /** (Required) The name of the custom plugin.. */
    name:            any;
    /** (Required) The type of the plugin file. Allowed values are `ZIP` and `JAR`. */
    content_type:    any;
    /** (Required) Information about the location of a custom plugin. See below. */
    location:        any;
    /** (Optional) A summary description of the custom plugin. */
    description?:    any;
    /** (Required) Information of the plugin file stored in Amazon S3. See below. */
    s3:              any;
    /** (Required) The Amazon Resource Name (ARN) of an S3 bucket. */
    bucket_arn:      any;
    /** (Required) The file key for an object in an S3 bucket. */
    file_key:        any;
    /** (Optional) The version of an object in an S3 bucket. */
    object_version?: any;
}