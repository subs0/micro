export interface DirectoryServiceRegion {
    resource: Resource[];
}

export interface Resource {
    directory_service_region: DirectoryServiceRegionClass;
}

export interface DirectoryServiceRegionClass {
    /** (Optional) The number of domain controllers desired in the replicated directory. Minimum value of `2`. */
    desired_number_of_domain_controllers?: any;
    /** (Required) The identifier of the directory to which you want to add Region replication. */
    directory_id:                          any;
    /** (Required) The name of the Region where you want to add domain controllers for replication. */
    region_name:                           any;
    /** (Optional) Map of tags to assign to this resource. If configured with a provider [`default_tags` configuration block](https://www.terraform.io/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
    /** (Required) VPC information in the replicated Region. Detailed below. */
    vpc_settings:                          any;
    /** (Required) The identifiers of the subnets for the directory servers. */
    subnet_ids:                            any;
    /** (Optional) The identifier of the VPC in which to create the directory. */
    vpc_id?:                               any;
}