export interface VpcIPAM {
    resource: Resource[];
}

export interface Resource {
    vpc_ipam: VpcIPAMClass;
}

export interface VpcIPAMClass {
    /** (Optional) A description for the IPAM. */
    description?:      any;
    operating_regions: OperatingRegions;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
    /** (Optional) Enables you to quickly delete an IPAM, private scopes, pools in private scopes, and any allocations in the pools in private scopes. */
    cascade?:          any;
}

export interface OperatingRegions {
    /** (Required) The name of the Region you want to add to the IPAM. */
    region_name: any;
}