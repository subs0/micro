export interface TransferServer {
    data: Datum[];
}

export interface Datum {
    transfer_server: TransferServerClass;
}

export interface TransferServerClass {
    /** (Required) ID for an SFTP server. */
    server_id: any;
}