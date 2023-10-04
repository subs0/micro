export interface MedialiveMultiplexProgram {
    resource: Resource[];
}

export interface Resource {
    medialive_multiplex_program: MedialiveMultiplexProgramClass;
}

export interface MedialiveMultiplexProgramClass {
    /** (Required) Multiplex ID. */
    multiplex_id:               any;
    /** (Required) Unique program name. */
    program_name:               any;
    /** (Required) MultiplexProgram settings. See [Multiplex Program Settings](#multiple-program-settings) for more details. */
    multiplex_program_settings: any;
    /** (Required) Unique program number. */
    program_number:             any;
    /** (Required) Enum for preferred channel pipeline. Options are `CURRENTLY_ACTIVE`, `PIPELINE_0`, or `PIPELINE_1`. */
    preferred_channel_pipeline: any;
    /** (Optional) Service Descriptor. See [Service Descriptor](#service-descriptor) for more details. */
    service_descriptor?:        any;
    /** (Optional) Video settings. See [Video Settings](#video-settings) for more details. */
    video_settings?:            any;
    /** (Required) Unique provider name. */
    provider_name:              any;
    /** (Required) Unique service name. */
    service_name:               any;
    /** (Optional) Constant bitrate value. */
    constant_bitrate?:          any;
    /** (Optional) Statmux settings. See [Statmux Settings](#statmux-settings) for more details. */
    statmux_settings?:          any;
    /** (Optional) Minimum bitrate. */
    minimum_bitrate?:           any;
    /** (Optional) Maximum bitrate. */
    maximum_bitrate?:           any;
    /** (Optional) Priority value. */
    priority?:                  any;
}