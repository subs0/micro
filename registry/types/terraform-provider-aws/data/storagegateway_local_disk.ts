export interface StoragegatewayLocalDisk {
    data: Datum[];
}

export interface Datum {
    storagegateway_local_disk: StoragegatewayLocalDiskClass;
}

export interface StoragegatewayLocalDiskClass {
    /** (Required) ARN of the gateway. */
    gateway_arn: any;
    /** (Optional) Device node of the local disk to retrieve. For example, `/dev/sdb`. */
    disk_node?:  any;
    /** (Optional) Device path of the local disk to retrieve. For example, `/dev/xvdb` or `/dev/nvme1n1`. */
    disk_path?:  any;
}