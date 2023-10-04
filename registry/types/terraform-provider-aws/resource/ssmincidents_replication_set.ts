export interface SsmincidentsReplicationSet {
    resource: Resource[];
}

export interface Resource {
    ssmincidents_replication_set: SsmincidentsReplicationSetClass;
}

export interface SsmincidentsReplicationSetClass {
    /** (Required) The name of the Region, such as `ap-southeast-2`. */
    name:         any;
    /** (Optional) The Amazon Resource name (ARN) of the customer managed key. If omitted, AWS manages the AWS KMS keys for you, using an AWS owned key, as indicated by a default value of `DefaultKey`. */
    kms_key_arn?: any;
    /** Tags applied to the replication set. */
    tags?:        any;
}