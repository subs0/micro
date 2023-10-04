export interface TransferConnector {
    resource: Resource[];
}

export interface Resource {
    transfer_connector: TransferConnectorClass;
}

export interface TransferConnectorClass {
    /** (Required) The IAM Role which provides read and write access to the parent directory of the file location mentioned in the StartFileTransfer request. */
    access_role:            any;
    /** (Optional) Either SFTP or AS2 is configured.The parameters to configure for the connector object. Fields documented below. */
    as2_config?:            any;
    /** (Optional) The IAM Role which is required for allowing the connector to turn on CloudWatch logging for Amazon S3 events. */
    logging_role?:          any;
    /** (Optional) Either SFTP or AS2 is configured.The parameters to configure for the connector object. Fields documented below. */
    sftp_config?:           any;
    /** (Required) The URL of the partners AS2 endpoint or SFTP endpoint. */
    url:                    any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Required) Specifies weather AS2 file is compressed. The valud values are ZLIB and  DISABLED. */
    compression:            any;
    /** (Required) The algorithm that is used to encrypt the file. The valid values are AES128_CBC | AES192_CBC | AES256_CBC | NONE. */
    encryption_algorithm:   any;
    /** (Required) The unique identifier for the AS2 local profile. */
    local_profile_id:       any;
    /** (Required) Used for outbound requests to determine if a partner response for transfers is synchronous or asynchronous. The valid values are SYNC and NONE. */
    mdn_response:           any;
    /** (Optional) The signing algorithm for the Mdn response. The valid values are SHA256 | SHA384 | SHA512 | SHA1 | NONE | DEFAULT. */
    mdn_signing_algorithm?: any;
    /** (Optional) Used as the subject HTTP header attribute in AS2 messages that are being sent with the connector. */
    message_subject?:       any;
    /** (Required) The unique identifier for the AS2 partner profile. */
    partner_profile_id:     any;
    /** (Required) The algorithm that is used to sign AS2 messages sent with the connector. The valid values are SHA256 | SHA384 | SHA512 | SHA1 | NONE . */
    signing_algorithm:      any;
    /** (Required) A list of public portion of the host key, or keys, that are used to authenticate the user to the external server to which you are connecting.(https://docs.aws.amazon.com/transfer/latest/userguide/API_SftpConnectorConfig.html) */
    trusted_host_keys:      any;
    /** (Required) The identifier for the secret (in AWS Secrets Manager) that contains the SFTP user's private key, password, or both. The identifier can be either the Amazon Resource Name (ARN) or the name of the secret. */
    user_secret_id:         any;
}