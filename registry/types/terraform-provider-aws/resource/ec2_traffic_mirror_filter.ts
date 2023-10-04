export interface Ec2TrafficMirrorFilter {
    resource: Resource[];
}

export interface Resource {
    ec2_traffic_mirror_filter: Ec2TrafficMirrorFilterClass;
}

export interface Ec2TrafficMirrorFilterClass {
    /** (Optional, Forces new resource) A description of the filter. */
    description?:      any;
    /** (Optional) List of amazon network services that should be mirrored. Valid values: `amazon-dns`. */
    network_services?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}