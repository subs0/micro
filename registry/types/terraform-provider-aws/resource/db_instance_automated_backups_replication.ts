export interface DBInstanceAutomatedBackupsReplication {
    resource: Resource[];
}

export interface Resource {
    db_instance_automated_backups_replication: DBInstanceAutomatedBackupsReplicationClass;
}

export interface DBInstanceAutomatedBackupsReplicationClass {
    /** (Optional, Forces new resource) The AWS KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS Region, for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE`. */
    kms_key_id?:             any;
    /** (Optional, Forces new resource) A URL that contains a [Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) signed request for the [`StartDBInstanceAutomatedBackupsReplication`](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstanceAutomatedBackupsReplication.html) action to be called in the AWS Region of the source DB instance. */
    pre_signed_url?:         any;
    /** (Optional, Forces new resource) The retention period for the replicated automated backups, defaults to `7`. */
    retention_period?:       any;
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the source DB instance for the replicated automated backups, for example, `arn:aws:rds:us-west-2:123456789012:db:mydatabase`. */
    source_db_instance_arn?: any;
}