export interface DxMacsecKeyAssociation {
    resource: Resource[];
}

export interface Resource {
    dx_macsec_key_association: DxMacsecKeyAssociationClass;
}

export interface DxMacsecKeyAssociationClass {
    /** (Optional) The MAC Security (MACsec) CAK to associate with the dedicated connection. The valid values are 64 hexadecimal characters (0-9, A-E). Required if using `ckn`. */
    cak?:          any;
    /** (Optional) The MAC Security (MACsec) CKN to associate with the dedicated connection. The valid values are 64 hexadecimal characters (0-9, A-E). Required if using `cak`. */
    ckn?:          any;
    /** (Required) The ID of the dedicated Direct Connect connection. The connection must be a dedicated connection in the `AVAILABLE` state. */
    connection_id: any;
    /** (Optional) The Amazon Resource Name (ARN) of the MAC Security (MACsec) secret key to associate with the dedicated connection. */
    secret_arn?:   any;
}