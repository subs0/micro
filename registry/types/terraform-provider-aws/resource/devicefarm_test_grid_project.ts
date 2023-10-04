export interface DevicefarmTestGridProject {
    resource: Resource[];
}

export interface Resource {
    devicefarm_test_grid_project: DevicefarmTestGridProjectClass;
}

export interface DevicefarmTestGridProjectClass {
    /** (Required) The name of the Selenium testing project. */
    name:               any;
    /** (Optional) Human-readable description of the project. */
    description?:       any;
    /** (Required) The VPC security groups and subnets that are attached to a project. See [VPC Config](#vpc-config) below. */
    vpc_config:         any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
    /** (Required) A list of VPC security group IDs in your Amazon VPC. */
    security_group_ids: any;
    /** (Required) A list of VPC subnet IDs in your Amazon VPC. */
    subnet_ids:         any;
    /** (Required) The ID of the Amazon VPC. */
    vpc_id:             any;
}