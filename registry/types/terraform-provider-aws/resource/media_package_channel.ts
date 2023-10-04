export interface MediaPackageChannel {
    resource: Resource[];
}

export interface Resource {
    media_package_channel: MediaPackageChannelClass;
}

export interface MediaPackageChannelClass {
    /** (Required) A unique identifier describing the channel */
    channel_id:   any;
    /** (Optional) A description of the channel */
    description?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}