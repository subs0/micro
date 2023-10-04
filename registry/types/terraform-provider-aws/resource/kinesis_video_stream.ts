export interface KinesisVideoStream {
    resource: Resource[];
}

export interface Resource {
    kinesis_video_stream: KinesisVideoStreamClass;
}

export interface KinesisVideoStreamClass {
    /** (Required) A name to identify the stream. This is unique to the */
    name:         any;
    /** (Optional) The name of the device that is writing to the stream. **In the current implementation, Kinesis Video Streams does not use this name.** */
    device_name?: any;
    /** (Optional) The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data. If no key ID is specified, the default, Kinesis Video-managed key (`aws/kinesisvideo`) is used. */
    kms_key_id?:  any;
    /** (Optional) The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see [Media Types][2]. If you choose to specify the MediaType, see [Naming Requirements][3] for guidelines. */
    media_type?:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}