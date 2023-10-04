export interface ShieldDrtAccessLogBucketAssociation {
    resource: Resource[];
}

export interface Resource {
    shield_drt_access_log_bucket_association: ShieldDrtAccessLogBucketAssociationClass;
}

export interface ShieldDrtAccessLogBucketAssociationClass {
    /** (Required) The Amazon S3 bucket that contains the logs that you want to share. */
    log_bucket:              any;
    /** (Required) The ID of the Role Arn association used for allowing Shield DRT Access. */
    role_arn_association_id: any;
}