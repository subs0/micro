export interface VolumeAttachment {
    resource: Resource[];
}

export interface Resource {
    volume_attachment: VolumeAttachmentClass;
}

export interface VolumeAttachmentClass {
    /** (Required) The device name to expose to the instance (for */
    device_name:                     any;
    /** (Required) ID of the Instance to attach to */
    instance_id:                     any;
    /** (Required) ID of the Volume to be attached */
    volume_id:                       any;
    /** (Optional, Boolean) Set to `true` if you want to force the */
    force_detach?:                   any;
    /** (Optional, Boolean) Set this to true if you do not wish */
    skip_destroy?:                   any;
    /** (Optional, Boolean) Set this to true to ensure that the target instance is stopped */
    stop_instance_before_detaching?: any;
}