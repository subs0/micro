export interface NetworkmanagerAttachmentAccepter {
    resource: Resource[];
}

export interface Resource {
    networkmanager_attachment_accepter: NetworkmanagerAttachmentAccepterClass;
}

export interface NetworkmanagerAttachmentAccepterClass {
    "The following arguments are required:"?: any;
}