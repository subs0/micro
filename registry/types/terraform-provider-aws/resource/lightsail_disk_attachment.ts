export interface LightsailDiskAttachment {
    resource: Resource[];
}

export interface Resource {
    lightsail_disk_attachment: LightsailDiskAttachmentClass;
}

export interface LightsailDiskAttachmentClass {
    /** (Required) The name of the Lightsail Disk. */
    disk_name:     any;
    /** (Required) The name of the Lightsail Instance to attach to. */
    instance_name: any;
    /** (Required) The disk path to expose to the instance. */
    disk_path:     any;
}