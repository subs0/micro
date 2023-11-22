export const s3 = {
   's3:AbortMultipartUpload': {
      permits: 'abort a multipart upload',
      resource_type: 'object*',
      access_level: 'Write',
   },
   's3:BypassGovernanceRetention': {
      permits: 'allow circumvention of governance-mode object retention settings',
      resource_type: 'object*',
      access_level: 'Permissions management',
   },
   's3:CreateAccessPoint': {
      permits: 'create a new access point',
      resource_type: 'accesspoint*',
      access_level: 'Write',
   },
   's3:CreateAccessPointForObjectLambda': {
      permits: 'create an object lambda enabled accesspoint',
      resource_type: 'objectlambdaaccesspoint*',
      access_level: 'Write',
   },
   's3:CreateBucket': {
      permits: 'create a new bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:CreateJob': {
      permits: 'create a new Amazon S3 Batch Operations job',
      resource_type: '',
      access_level: 'Write',
   },
   's3:CreateMultiRegionAccessPoint': {
      permits: 'create a new Multi-Region Access Point',
      resource_type: 'multiregionaccesspoint*',
      access_level: 'Write',
   },
   's3:CreateStorageLensGroup': {
      permits: 'create an Amazon S3 Storage Lens group',
      resource_type: '',
      access_level: 'Write',
   },
   's3:DeleteAccessPoint': {
      permits: 'delete the access point named in the URI',
      resource_type: 'accesspoint*',
      access_level: 'Write',
   },
   's3:DeleteAccessPointForObjectLambda': {
      permits: 'delete the object lambda enabled access point named in the URI',
      resource_type: 'objectlambdaaccesspoint*',
      access_level: 'Write',
   },
   's3:DeleteAccessPointPolicy': {
      permits: 'delete the policy on a specified access point',
      resource_type: 'accesspoint*',
      access_level: 'Permissions management',
   },
   's3:DeleteAccessPointPolicyForObjectLambda': {
      permits: 'delete the policy on a specified object lambda enabled access point',
      resource_type: 'objectlambdaaccesspoint*',
      access_level: 'Permissions management',
   },
   's3:DeleteBucket': {
      permits: 'delete the bucket named in the URI',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:DeleteBucketPolicy': {
      permits: 'delete the policy on a specified bucket',
      resource_type: 'bucket*',
      access_level: 'Permissions management',
   },
   's3:DeleteBucketWebsite': {
      permits: 'remove the website configuration for a bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:DeleteJobTagging': {
      permits: 'remove tags from an existing Amazon S3 Batch Operations job',
      resource_type: 'job*',
      access_level: 'Tagging',
   },
   's3:DeleteMultiRegionAccessPoint': {
      permits: 'delete the Multi-Region Access Point named in the URI',
      resource_type: 'multiregionaccesspoint*',
      access_level: 'Write',
   },
   's3:DeleteObject': {
      permits:
         'remove the null version of an object and insert a delete marker, which becomes the current version of the object',
      resource_type: 'object*',
      access_level: 'Write',
   },
   's3:DeleteObjectTagging': {
      permits: 'use the tagging subresource to remove the entire tag set from the specified object',
      resource_type: 'object*',
      access_level: 'Tagging',
   },
   's3:DeleteObjectVersion': {
      permits: 'remove a specific version of an object',
      resource_type: 'object*',
      access_level: 'Write',
   },
   's3:DeleteObjectVersionTagging': {
      permits: 'remove the entire tag set for a specific version of the object',
      resource_type: 'object*',
      access_level: 'Tagging',
   },
   's3:DeleteStorageLensConfiguration': {
      permits: 'delete an existing Amazon S3 Storage Lens configuration',
      resource_type: 'storagelensconfiguration*',
      access_level: 'Write',
   },
   's3:DeleteStorageLensConfigurationTagging': {
      permits: 'remove tags from an existing Amazon S3 Storage Lens configuration',
      resource_type: 'storagelensconfiguration*',
      access_level: 'Tagging',
   },
   's3:DeleteStorageLensGroup': {
      permits: 'delete an existing S3 Storage Lens group',
      resource_type: 'storagelensgroup*',
      access_level: 'Write',
   },
   's3:DescribeJob': {
      permits: 'retrieve the configuration parameters and status for a batch operations job',
      resource_type: 'job*',
      access_level: 'Read',
   },
   's3:DescribeMultiRegionAccessPointOperation': {
      permits: 'retrieve the configurations for a Multi-Region Access Point',
      resource_type: 'multiregionaccesspointrequestarn*',
      access_level: 'Read',
   },
   's3:GetAccelerateConfiguration': {
      permits:
         'uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetAccessPoint': {
      permits: 'return configuration information about the specified access point',
      resource_type: '',
      access_level: 'Read',
   },
   's3:GetAccessPointConfigurationForObjectLambda': {
      permits: 'retrieve the configuration of the object lambda enabled access point',
      resource_type: 'objectlambdaaccesspoint*',
      access_level: 'Read',
   },
   's3:GetAccessPointForObjectLambda': {
      permits: 'create an object lambda enabled accesspoint',
      resource_type: 'objectlambdaaccesspoint*',
      access_level: 'Read',
   },
   's3:GetAccessPointPolicy': {
      permits: 'returns the access point policy associated with the specified access point',
      resource_type: 'accesspoint*',
      access_level: 'Read',
   },
   's3:GetAccessPointPolicyForObjectLambda': {
      permits:
         'returns the access point policy associated with the specified object lambda enabled access point',
      resource_type: 'objectlambdaaccesspoint*',
      access_level: 'Read',
   },
   's3:GetAccessPointPolicyStatus': {
      permits: 'return the policy status for a specific access point policy',
      resource_type: 'accesspoint*',
      access_level: 'Read',
   },
   's3:GetAccessPointPolicyStatusForObjectLambda': {
      permits: 'return the policy status for a specific object lambda access point policy',
      resource_type: 'objectlambdaaccesspoint*',
      access_level: 'Read',
   },
   's3:GetAccountPublicAccessBlock': {
      permits: 'retrieve the PublicAccessBlock configuration for an AWS account',
      resource_type: '',
      access_level: 'Read',
   },
   's3:GetAnalyticsConfiguration': {
      permits:
         'get an analytics configuration from an Amazon S3 bucket, identified by the analytics configuration ID',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketAcl': {
      permits:
         'use the acl subresource to return the access control list (ACL) of an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketCORS': {
      permits: 'return the CORS configuration information set for an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketLocation': {
      permits: 'return the Region that an Amazon S3 bucket resides in',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketLogging': {
      permits:
         'return the logging status of an Amazon S3 bucket and the permissions users have to view or modify that status',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketNotification': {
      permits: 'get the notification configuration of an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketObjectLockConfiguration': {
      permits: 'get the Object Lock configuration of an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketOwnershipControls': {
      permits: 'retrieve ownership controls on a bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketPolicy': {
      permits: 'return the policy of the specified bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketPolicyStatus': {
      permits:
         'retrieve the policy status for a specific Amazon S3 bucket, which indicates whether the bucket is public',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketPublicAccessBlock': {
      permits: 'retrieve the PublicAccessBlock configuration for an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketRequestPayment': {
      permits: 'return the request payment configuration for an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketTagging': {
      permits: 'return the tag set associated with an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketVersioning': {
      permits: 'return the versioning state of an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetBucketWebsite': {
      permits: 'return the website configuration for an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetEncryptionConfiguration': {
      permits: 'return the default encryption configuration an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetIntelligentTieringConfiguration': {
      permits: 'get an or list all Amazon S3 Intelligent Tiering configuration in a S3 Bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetInventoryConfiguration': {
      permits:
         'return an inventory configuration from an Amazon S3 bucket, identified by the inventory configuration ID',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetJobTagging': {
      permits: 'return the tag set of an existing Amazon S3 Batch Operations job',
      resource_type: 'job*',
      access_level: 'Read',
   },
   's3:GetLifecycleConfiguration': {
      permits: 'return the lifecycle configuration information set on an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetMetricsConfiguration': {
      permits: 'get a metrics configuration from an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetMultiRegionAccessPoint': {
      permits: 'return configuration information about the specified Multi-Region Access Point',
      resource_type: 'multiregionaccesspoint*',
      access_level: 'Read',
   },
   's3:GetMultiRegionAccessPointPolicy': {
      permits:
         'returns the access point policy associated with the specified Multi-Region Access Point',
      resource_type: 'multiregionaccesspoint*',
      access_level: 'Read',
   },
   's3:GetMultiRegionAccessPointPolicyStatus': {
      permits: 'return the policy status for a specific Multi-Region Access Point policy',
      resource_type: 'multiregionaccesspoint*',
      access_level: 'Read',
   },
   's3:GetMultiRegionAccessPointRoutes': {
      permits: 'return the route configuration for a Multi-Region Access Point',
      resource_type: 'multiregionaccesspoint*',
      access_level: 'Read',
   },
   's3:GetObject': {
      permits: 'retrieve objects from Amazon S3',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectAcl': {
      permits: 'return the access control list (ACL) of an object',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectAttributes': {
      permits: 'retrieve attributes related to a specific object',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectLegalHold': {
      permits: "get an object's current Legal Hold status",
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectRetention': {
      permits: 'retrieve the retention settings for an object',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectTagging': {
      permits: 'return the tag set of an object',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectTorrent': {
      permits: 'return torrent files from an Amazon S3 bucket',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectVersion': {
      permits: 'retrieve a specific version of an object',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectVersionAcl': {
      permits: 'return the access control list (ACL) of a specific object version',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectVersionAttributes': {
      permits: 'retrieve attributes related to a specific version of an object',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectVersionForReplication': {
      permits: 'replicate both unencrypted objects and objects encrypted with SSE-S3 or SSE-KMS',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectVersionTagging': {
      permits: 'return the tag set for a specific version of the object',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetObjectVersionTorrent': {
      permits: 'get Torrent files about a different version using the versionId subresource',
      resource_type: 'object*',
      access_level: 'Read',
   },
   's3:GetReplicationConfiguration': {
      permits: 'get the replication configuration information set on an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Read',
   },
   's3:GetStorageLensConfiguration': {
      permits: 'get an Amazon S3 Storage Lens configuration',
      resource_type: 'storagelensconfiguration*',
      access_level: 'Read',
   },
   's3:GetStorageLensConfigurationTagging': {
      permits: 'get the tag set of an existing Amazon S3 Storage Lens configuration',
      resource_type: 'storagelensconfiguration*',
      access_level: 'Read',
   },
   's3:GetStorageLensDashboard': {
      permits: 'get an Amazon S3 Storage Lens dashboard',
      resource_type: 'storagelensconfiguration*',
      access_level: 'Read',
   },
   's3:GetStorageLensGroup': {
      permits: 'get an Amazon S3 Storage Lens group',
      resource_type: 'storagelensgroup*',
      access_level: 'Read',
   },
   's3:InitiateReplication': {
      permits:
         'initiate the replication process by setting replication status of an object to pending',
      resource_type: 'object*',
      access_level: 'Write',
   },
   's3:ListAccessPoints': {
      permits: 'list access points',
      resource_type: '',
      access_level: 'List',
   },
   's3:ListAccessPointsForObjectLambda': {
      permits: 'list object lambda enabled accesspoints',
      resource_type: '',
      access_level: 'List',
   },
   's3:ListAllMyBuckets': {
      permits: 'list all buckets owned by the authenticated sender of the request',
      resource_type: '',
      access_level: 'List',
   },
   's3:ListBucket': {
      permits: 'list some or all of the objects in an Amazon S3 bucket (up to 1000)',
      resource_type: 'bucket*',
      access_level: 'List',
   },
   's3:ListBucketMultipartUploads': {
      permits: 'list in-progress multipart uploads',
      resource_type: 'bucket*',
      access_level: 'List',
   },
   's3:ListBucketVersions': {
      permits: 'list metadata about all the versions of objects in an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'List',
   },
   's3:ListJobs': {
      permits: 'list current jobs and jobs that have ended recently',
      resource_type: '',
      access_level: 'List',
   },
   's3:ListMultiRegionAccessPoints': {
      permits: 'list Multi-Region Access Points',
      resource_type: '',
      access_level: 'List',
   },
   's3:ListMultipartUploadParts': {
      permits: 'list the parts that have been uploaded for a specific multipart upload',
      resource_type: 'object*',
      access_level: 'List',
   },
   's3:ListStorageLensConfigurations': {
      permits: 'list Amazon S3 Storage Lens configurations',
      resource_type: '',
      access_level: 'List',
   },
   's3:ListStorageLensGroups': {
      permits: 'list S3 Storage Lens groups',
      resource_type: '',
      access_level: 'List',
   },
   's3:ListTagsForResource': {
      permits: 'list the tags attached to the specified resource',
      resource_type: 'storagelensgroup',
      access_level: 'List',
   },
   's3:ObjectOwnerOverrideToBucketOwner': {
      permits: 'change replica ownership',
      resource_type: 'object*',
      access_level: 'Permissions management',
   },
   's3:PutAccelerateConfiguration': {
      permits:
         'use the accelerate subresource to set the Transfer Acceleration state of an existing S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutAccessPointConfigurationForObjectLambda': {
      permits: 'set the configuration of the object lambda enabled access point',
      resource_type: 'objectlambdaaccesspoint*',
      access_level: 'Write',
   },
   's3:PutAccessPointPolicy': {
      permits: 'associate an access policy with a specified access point',
      resource_type: 'accesspoint*',
      access_level: 'Permissions management',
   },
   's3:PutAccessPointPolicyForObjectLambda': {
      permits: 'associate an access policy with a specified object lambda enabled access point',
      resource_type: 'objectlambdaaccesspoint*',
      access_level: 'Permissions management',
   },
   's3:PutAccessPointPublicAccessBlock': {
      permits:
         'associate public access block configurations with a specified access point, while creating a access point',
      resource_type: '',
      access_level: 'Permissions management',
   },
   's3:PutAccountPublicAccessBlock': {
      permits: 'Grcreate or modify the PublicAccessBlock configuration for an AWS account',
      resource_type: '',
      access_level: '',
   },
   's3:PutAnalyticsConfiguration': {
      permits:
         'set an analytics configuration for the bucket, specified by the analytics configuration ID',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutBucketAcl': {
      permits: 'set the permissions on an existing bucket using access control lists (ACLs)',
      resource_type: 'bucket*',
      access_level: 'Permissions management',
   },
   's3:PutBucketCORS': {
      permits: 'set the CORS configuration for an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutBucketLogging': {
      permits: 'set the logging parameters for an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutBucketNotification': {
      permits: 'receive notifications when certain events happen in an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutBucketObjectLockConfiguration': {
      permits: 'put Object Lock configuration on a specific bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutBucketOwnershipControls': {
      permits: 'add, replace or delete ownership controls on a bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutBucketPolicy': {
      permits: 'add or replace a bucket policy on a bucket',
      resource_type: 'bucket*',
      access_level: 'Permissions management',
   },
   's3:PutBucketPublicAccessBlock': {
      permits:
         'create or modify the PublicAccessBlock configuration for a specific Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Permissions management',
   },
   's3:PutBucketRequestPayment': {
      permits: 'set the request payment configuration of a bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutBucketTagging': {
      permits: 'add a set of tags to an existing Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Tagging',
   },
   's3:PutBucketVersioning': {
      permits: 'set the versioning state of an existing Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutBucketWebsite': {
      permits: 'set the configuration of the website that is specified in the website subresource',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutEncryptionConfiguration': {
      permits: 'set the encryption configuration for an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutIntelligentTieringConfiguration': {
      permits:
         'create new or update or delete an existing Amazon S3 Intelligent Tiering configuration',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutInventoryConfiguration': {
      permits: 'add an inventory configuration to the bucket, identified by the inventory ID',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutJobTagging': {
      permits: 'replace tags on an existing Amazon S3 Batch Operations job',
      resource_type: 'job*',
      access_level: 'Tagging',
   },
   's3:PutLifecycleConfiguration': {
      permits:
         'create a new lifecycle configuration for the bucket or replace an existing lifecycle configuration',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutMetricsConfiguration': {
      permits:
         'set or update a metrics configuration for the CloudWatch request metrics from an Amazon S3 bucket',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutMultiRegionAccessPointPolicy': {
      permits: 'associate an access policy with a specified Multi-Region Access Point',
      resource_type: 'multiregionaccesspoint*',
      access_level: 'Permissions management',
   },
   's3:PutObject': {
      permits: 'add an object to a bucket',
      resource_type: 'object*',
      access_level: 'Write',
   },
   's3:PutObjectAcl': {
      permits:
         'set the access control list (ACL) permissions for new or existing objects in an S3 bucket',
      resource_type: 'object*',
      access_level: 'Permissions management',
   },
   's3:PutObjectLegalHold': {
      permits: 'apply a Legal Hold configuration to the specified object',
      resource_type: 'object*',
      access_level: 'Write',
   },
   's3:PutObjectRetention': {
      permits: 'place an Object Retention configuration on an object',
      resource_type: 'object*',
      access_level: 'Write',
   },
   's3:PutObjectTagging': {
      permits: 'set the supplied tag-set to an object that already exists in a bucket',
      resource_type: 'object*',
      access_level: 'Tagging',
   },
   's3:PutObjectVersionAcl': {
      permits:
         'use the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket',
      resource_type: 'object*',
      access_level: 'Permissions management',
   },
   's3:PutObjectVersionTagging': {
      permits: 'set the supplied tag-set for a specific version of an object',
      resource_type: 'object*',
      access_level: 'Tagging',
   },
   's3:PutReplicationConfiguration': {
      permits: 'create a new replication configuration or replace an existing one',
      resource_type: 'bucket*',
      access_level: 'Write',
   },
   's3:PutStorageLensConfiguration': {
      permits: 'create or update an Amazon S3 Storage Lens configuration',
      resource_type: '',
      access_level: 'Write',
   },
   's3:PutStorageLensConfigurationTagging': {
      permits: 'put or replace tags on an existing Amazon S3 Storage Lens configuration',
      resource_type: 'storagelensconfiguration*',
      access_level: 'Tagging',
   },
   's3:ReplicateDelete': {
      permits: 'replicate delete markers to the destination bucket',
      resource_type: 'object*',
      access_level: 'Write',
   },
   's3:ReplicateObject': {
      permits: 'replicate objects and object tags to the destination bucket',
      resource_type: 'object*',
      access_level: 'Write',
   },
   's3:ReplicateTags': {
      permits: 'replicate object tags to the destination bucket',
      resource_type: 'object*',
      access_level: 'Tagging',
   },
   's3:RestoreObject': {
      permits: 'restore an archived copy of an object back into Amazon S3',
      resource_type: 'object*',
      access_level: 'Write',
   },
   's3:SubmitMultiRegionAccessPointRoutes': {
      permits: 'submit a route configuration update for a Multi-Region Access Point',
      resource_type: 'multiregionaccesspoint*',
      access_level: 'Write',
   },
   's3:TagResource': {
      permits: 'add tags to the specified resource',
      resource_type: 'storagelensgroup',
      access_level: 'Tagging',
   },
   's3:UntagResource': {
      permits: 'remove tags from the specified resource',
      resource_type: 'storagelensgroup',
      access_level: 'Tagging',
   },
   's3:UpdateJobPriority': {
      permits: 'update the priority of an existing job',
      resource_type: 'job*',
      access_level: 'Write',
   },
   's3:UpdateJobStatus': {
      permits: 'update the status for the specified job',
      resource_type: 'job*',
      access_level: 'Write',
   },
   's3:UpdateStorageLensGroup': {
      permits: 'update an existing S3 Storage Lens group',
      resource_type: 'storagelensgroup*',
      access_level: 'Write',
   },
}
