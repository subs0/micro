export interface IvsRecordingConfiguration {
    resource: Resource[];
}

export interface Resource {
    ivs_recording_configuration: IvsRecordingConfigurationClass;
}

export interface IvsRecordingConfigurationClass {
    /** Object containing destination configuration for where recorded video will be stored. */
    destination_configuration?:          any;
    /** S3 destination configuration where recorded videos will be stored. */
    s3?:                                 any;
    /** S3 bucket name where recorded videos will be stored. */
    bucket_name?:                        any;
    /** (Optional) Recording Configuration name. */
    name?:                               any;
    /** (Optional) If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together. */
    recording_reconnect_window_seconds?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
    /** (Optional) Object containing information to enable/disable the recording of thumbnails for a live session and modify the interval at which thumbnails are generated for the live session. */
    thumbnail_configuration?:            any;
    /** (Optional) Thumbnail recording mode. Valid values: `DISABLED`, `INTERVAL`. */
    recording_mode?:                     any;
}