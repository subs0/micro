export interface MedialiveMultiplex {
    resource: Resource[];
}

export interface Resource {
    medialive_multiplex: MedialiveMultiplexClass;
}

export interface MedialiveMultiplexClass {
    /** (Required) A list of availability zones. You must specify exactly two. */
    availability_zones:                       any;
    /** (Required) name of Multiplex. */
    name:                                     any;
    /** (Optional) Whether to start the Multiplex. Defaults to `false`. */
    start_multiplex?:                         any;
    /** (Optional) A map of tags to assign to the Multiplex. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                    any;
    /** (Required) Transport stream bit rate. */
    transport_stream_bitrate:                 any;
    /** (Required) Unique ID for each multiplex. */
    transport_stream_id:                      any;
    /** (Optional) Transport stream reserved bit rate. */
    transport_stream_reserved_bitrate?:       any;
    /** (Optional) Maximum video buffer delay. */
    maximum_video_buffer_delay_milliseconds?: any;
}