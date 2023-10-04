export interface StoragegatewayUploadBuffer {
    resource: Resource[];
}

export interface Resource {
    storagegateway_upload_buffer: StoragegatewayUploadBufferClass;
}

export interface StoragegatewayUploadBufferClass {
    /** (Optional) Local disk identifier. For example, `pci-0000:03:00.0-scsi-0:0:0:0`. */
    disk_id?:    any;
    /** (Optional) Local disk path. For example, `/dev/nvme1n1`. */
    disk_path?:  any;
    /** (Required) The Amazon Resource Name (ARN) of the gateway. */
    gateway_arn: any;
}