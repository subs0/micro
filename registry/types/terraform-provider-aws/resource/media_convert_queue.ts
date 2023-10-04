export interface MediaConvertQueue {
    resource: Resource[];
}

export interface Resource {
    media_convert_queue: MediaConvertQueueClass;
}

export interface MediaConvertQueueClass {
    /** (Required) A unique identifier describing the queue */
    name:                       any;
    /** (Optional) A description of the queue */
    description?:               any;
    /** (Optional) Specifies whether the pricing plan for the queue is on-demand or reserved. Valid values are `ON_DEMAND` or `RESERVED`. Default to `ON_DEMAND`. */
    pricing_plan?:              any;
    /** (Optional) A detail pricing plan of the  reserved queue. See below. */
    reservation_plan_settings?: any;
    /** (Optional) A status of the queue. Valid values are `ACTIVE` or `RESERVED`. Default to `PAUSED`. */
    status?:                    any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Required) The length of the term of your reserved queue pricing plan commitment. Valid value is `ONE_YEAR`. */
    commitment:                 any;
    /** (Required) Specifies whether the term of your reserved queue pricing plan. Valid values are `AUTO_RENEW` or `EXPIRE`. */
    renewal_type:               any;
    /** (Required) Specifies the number of reserved transcode slots (RTS) for queue. */
    reserved_slots:             any;
}