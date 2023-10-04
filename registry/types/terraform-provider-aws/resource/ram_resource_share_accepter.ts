export interface RAMResourceShareAccepter {
    resource: Resource[];
}

export interface Resource {
    ram_resource_share_accepter: RAMResourceShareAccepterClass;
}

export interface RAMResourceShareAccepterClass {
    /** (Required) The ARN of the resource share. */
    share_arn: any;
}