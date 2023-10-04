export interface AutoscalingTrafficSourceAttachment {
    resource: Resource[];
}

export interface Resource {
    autoscaling_traffic_source_attachment: AutoscalingTrafficSourceAttachmentClass;
}

export interface AutoscalingTrafficSourceAttachmentClass {
    "This resource supports the following arguments:"?: any;
}