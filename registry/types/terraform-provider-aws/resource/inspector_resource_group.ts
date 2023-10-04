export interface InspectorResourceGroup {
    resource: Resource[];
}

export interface Resource {
    inspector_resource_group: InspectorResourceGroupClass;
}

export interface InspectorResourceGroupClass {
    /** (Required) Key-value map of tags that are used to select the EC2 instances to be included in an [Amazon Inspector assessment target](/docs/providers/aws/r/inspector_assessment_target.html). */
    tags: any;
}