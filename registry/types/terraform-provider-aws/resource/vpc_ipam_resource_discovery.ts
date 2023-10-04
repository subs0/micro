export interface VpcIPAMResourceDiscovery {
    resource: Resource[];
}

export interface Resource {
    vpc_ipam_resource_discovery: VpcIPAMResourceDiscoveryClass;
}

export interface VpcIPAMResourceDiscoveryClass {
    /** (Optional) A description for the IPAM Resource Discovery. */
    description?:      any;
    operating_regions: OperatingRegions;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}

export interface OperatingRegions {
    /** (Required) The name of the Region you want to add to the IPAM. */
    region_name: any;
}