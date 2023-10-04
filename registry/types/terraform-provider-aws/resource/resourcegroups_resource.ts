export interface ResourcegroupsResource {
    resource: Resource[];
}

export interface Resource {
    resourcegroups_resource: ResourcegroupsResourceClass;
}

export interface ResourcegroupsResourceClass {
    /** (Required) The name or the ARN of the resource group to add resources to. */
    group_arn:    any;
    /** (Required) The ARN of the resource to be added to the group. */
    resource_arn: any;
}