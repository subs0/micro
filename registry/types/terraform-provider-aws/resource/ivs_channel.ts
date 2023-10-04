export interface IvsChannel {
    resource: Resource[];
}

export interface Resource {
    ivs_channel: IvsChannelClass;
}

export interface IvsChannelClass {
    /** (Optional) If `true`, channel is private (enabled for playback authorization). */
    authorized?:                  any;
    /** (Optional) Channel latency mode. Valid values: `NORMAL`, `LOW`. */
    latency_mode?:                any;
    /** (Optional) Channel name. */
    name?:                        any;
    /** (Optional) Recording configuration ARN. */
    recording_configuration_arn?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
    /** (Optional) Channel type, which determines the allowable resolution and bitrate. Valid values: `STANDARD`, `BASIC`. */
    type?:                        any;
}