export interface Ec2Tag {
    resource: Resource[];
}

export interface Resource {
    ec2_tag: Ec2TagClass;
}

export interface Ec2TagClass {
    /** (Required) The ID of the EC2 resource to manage the tag for. */
    resource_id: any;
    /** (Required) The tag name. */
    key:         any;
    /** (Required) The value of the tag. */
    value:       any;
}