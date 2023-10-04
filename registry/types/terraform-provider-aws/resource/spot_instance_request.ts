export interface SpotInstanceRequest {
    resource: Resource[];
}

export interface Resource {
    spot_instance_request: SpotInstanceRequestClass;
}

export interface SpotInstanceRequestClass {
    /** (Optional; Default: On-demand price) The maximum price to request on the spot market. */
    spot_price?:                     any;
    /** (Optional; Default: false) If set, Terraform will */
    wait_for_fulfillment?:           any;
    /** (Optional; Default: `persistent`) If set to `one-time`, after */
    spot_type?:                      any;
    /** (Optional) A launch group is a group of spot instances that launch together and terminate together. */
    launch_group?:                   any;
    /** (Optional) The required duration for the Spot instances, in minutes. This value must be a multiple of 60 (60, 120, 180, 240, 300, or 360). */
    block_duration_minutes?:         any;
    /** (Optional) Indicates Spot instance behavior when it is interrupted. Valid values are `terminate`, `stop`, or `hibernate`. Default value is `terminate`. */
    instance_interruption_behavior?: any;
    /** (Optional) The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request. The default end date is 7 days from the current date. */
    valid_until?:                    any;
    /** (Optional) The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately. */
    valid_from?:                     any;
    /** (Optional) A map of tags to assign to the Spot Instance Request. These tags are not automatically applied to the launched Instance. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
}