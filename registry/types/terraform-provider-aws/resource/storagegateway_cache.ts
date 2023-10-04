export interface StoragegatewayCache {
    resource: Resource[];
}

export interface Resource {
    storagegateway_cache: StoragegatewayCacheClass;
}

export interface StoragegatewayCacheClass {
    /** (Required) Local disk identifier. For example, `pci-0000:03:00.0-scsi-0:0:0:0`. */
    disk_id:     any;
    /** (Required) The Amazon Resource Name (ARN) of the gateway. */
    gateway_arn: any;
}