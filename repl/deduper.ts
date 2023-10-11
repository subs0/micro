import { first } from '@thi.ng/associative'
import { isPlainObject } from '@thi.ng/checks'
import { deleteIn, deleteInUnsafe, getIn, getInUnsafe, setInUnsafe } from '@thi.ng/paths'
import { EquivMap } from '@thi.ng/associative'
import { get } from 'http'
const test = {
    args: {
        bucket: '(Optional, Forces new resource) Name of the bucket. If omitted, Terraform will assign a random, unique name. Must be lowercase and less than or equal to 63 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).',
        bucket_prefix:
            '(Optional, Forces new resource) Creates a unique bucket name beginning with the specified prefix. Conflicts with `bucket`. Must be lowercase and less than or equal to 37 characters in length. A full list of bucket naming rules [may be found here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).',
        force_destroy:
            '(Optional, Default:`false`) Boolean that indicates all objects (including any [locked objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html)) should be deleted from the bucket ',
        object_lock_enabled:
            '(Optional, Deprecated) Indicates whether this bucket has an Object Lock configuration enabled. Valid value is `Enabled`. Use the top-level argument `object_lock_enabled` instead.',
        tags: '(Optional)  A map of tags that identifies subset of objects to which the rule applies.\n  The rule applies only to objects having all the tags in its tagset.\n\n#### Destination\n\n',
        acceleration_status:
            '(Optional, Deprecated) Sets the accelerate configuration of an existing bucket. Can be `Enabled` or `Suspended`. Cannot be used in `cn-north-1` or `us-gov-west-1`. Terraform will only perform drift detection if a configuration value is provided.\n  Use the resource [`aws_s3_bucket_accelerate_configuration`](s3_bucket_accelerate_configuration.html) instead.',
        acl: '(Optional, Deprecated) The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`. Defaults to `private`.  Conflicts with `grant`. Terraform will only perform drift detection if a configuration value is provided. Use the resource [`aws_s3_bucket_acl`](s3_bucket_acl.html.markdown) instead.',
        grant: {
            id: '(Optional) Canonical user id to grant for. Used only when `type` is `CanonicalUser`.',
            'type!':
                '(Required) Type of grantee to apply for. Valid values are `CanonicalUser` and `Group`. `AmazonCustomerByEmail` is not supported.',
            'permissions!':
                '(Required) List of permissions to apply for grantee. Valid values are `READ`, `WRITE`, `READ_ACP`, `WRITE_ACP`, `FULL_CONTROL`.',
            uri: '(Optional) Uri address to grant for. Used only when `type` is `Group`.',
        },
        cors_rule: {
            allowed_headers: '(Optional) List of headers allowed.',
            'allowed_methods!':
                '(Required) One or more HTTP methods that you allow the origin to execute. Can be `GET`, `PUT`, `POST`, `DELETE` or `HEAD`.',
            'allowed_origins!':
                '(Required) One or more origins you want customers to be able to access the bucket from.',
            expose_headers:
                '(Optional) One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).',
            max_age_seconds:
                '(Optional) Specifies time in seconds that browser can cache the response for a preflight request.',
        },
        lifecycle_rule: {
            id: '(Optional) Unique identifier for the rule. Must be less than or equal to 255 characters in length.',
            prefix: '(Optional) Object key prefix identifying one or more objects to which the rule applies.',
            tags: '(Optional) Specifies object tags key and value.',
            'enabled!': '(Required) Specifies lifecycle rule status.',
            expiration:
                "(Optional) Specifies a period in the object's expire. See [Expiration](#expiration) below for details.",
            transition:
                "(Optional) Specifies a period in the object's transitions. See [Transition](#transition) below for details.",
            noncurrent_version_expiration:
                '(Optional) Specifies when noncurrent object versions expire. See [Noncurrent Version Expiration](#noncurrent-version-expiration) below for details.',
            noncurrent_version_transition:
                '(Optional) Specifies when noncurrent object versions transitions. See [Noncurrent Version Transition](#noncurrent-version-transition) below for details.',
        },
        logging: {
            'target_bucket!': '(Required) Name of the bucket that will receive the log objects.',
            target_prefix: '(Optional) To specify a key prefix for log objects.',
        },
        object_lock_configuration: {
            object_lock_enabled:
                '(Optional, Deprecated) Indicates whether this bucket has an Object Lock configuration enabled. Valid value is `Enabled`. Use the top-level argument `object_lock_enabled` instead.',
            rule: {
                'default_retention!':
                    '(Required) Default retention period that you want to apply to new objects placed in this bucket ([documented below](#default-retention)).',
            },
            'default_retention!': {
                'mode!':
                    '(Required) Default Object Lock retention mode you want to apply to new objects placed in this bucket. Valid values are `GOVERNANCE` and `COMPLIANCE`.',
                days: '(Optional) Number of days that you want to specify for the default retention period.',
                years: '(Optional) Number of years that you want to specify for the default retention period.',
            },
            'mode!':
                '(Required) Default Object Lock retention mode you want to apply to new objects placed in this bucket. Valid values are `GOVERNANCE` and `COMPLIANCE`.',
            days: '(Optional) Number of days that you want to specify for the default retention period.',
            years: '(Optional) Number of years that you want to specify for the default retention period.',
        },
        policy: '(Optional, Deprecated) Valid [bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html) JSON document. Note that if the policy document is not specific enough (but still valid), Terraform may view the policy as constantly changing in a `terraform plan`. In this case, please make sure you use the verbose/specific version of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy).\n  Terraform will only perform drift detection if a configuration value is provided.\n  Use the resource [`aws_s3_bucket_policy`](s3_bucket_policy.html) instead.',
        replication_configuration: {
            'role!':
                '(Required) ARN of the IAM role for Amazon S3 to assume when replicating the objects.',
            'rules!': {
                delete_marker_replication_status:
                    '(Optional) Whether delete markers are replicated. The only valid value is `Enabled`. To disable, omit this argument. This argument is only valid with V2 replication configurations (i.e., when `filter` is used).',
                'destination!':
                    '(Required) Specifies the destination for the rule ([documented below](#destination)).',
                filter: '(Optional, Conflicts with `prefix`) Filter that identifies subset of objects to which the replication rule applies ([documented below](#filter)).',
                id: '(Optional) Unique identifier for the rule. Must be less than or equal to 255 characters in length.',
                prefix: '(Optional, Conflicts with `filter`) Object keyname prefix identifying one or more objects to which the rule applies. Must be less than or equal to 1024 characters in length.',
                priority:
                    '(Optional) Priority associated with the rule. Priority should only be set if `filter` is configured. If not provided, defaults to `0`. Priority must be unique between multiple rules.',
                source_selection_criteria:
                    '(Optional) Specifies special object selection criteria ([documented below](#source-selection-criteria)).',
                'status!':
                    '(Required) Status of the rule. Either `Enabled` or `Disabled`. The rule is ignored if status is not Enabled.',
            },
            delete_marker_replication_status:
                '(Optional) Whether delete markers are replicated. The only valid value is `Enabled`. To disable, omit this argument. This argument is only valid with V2 replication configurations (i.e., when `filter` is used).',
            'destination!': {
                'bucket!':
                    '(Required) ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.',
                storage_class:
                    '(Optional) The [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Destination.html#AmazonS3-Type-Destination-StorageClass) used to store the object. By default, Amazon S3 uses the storage class of the source object to create the object replica.',
                replica_kms_key_id:
                    '(Optional) Destination KMS encryption key ARN for SSE-KMS replication. Must be used in conjunction with\n  `sse_kms_encrypted_objects` source selection criteria.',
                access_control_translation:
                    '(Optional) Specifies the overrides to use for object owners on replication. Must be used in conjunction with `account_id` owner override configuration.',
                account_id:
                    '(Optional) Account ID to use for overriding the object owner on replication. Must be used in conjunction with `access_control_translation` override configuration.',
                replication_time:
                    '(Optional) Enables S3 Replication Time Control (S3 RTC) ([documented below](#replication-time)).',
                'metrics!':
                    '(Optional) Enables replication metrics (required for S3 RTC) ([documented below](#metrics)).',
            },
            filter: {
                prefix: '(Optional) Object keyname prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length.',
                tags: '(Optional)  A map of tags that identifies subset of objects to which the rule applies.\n  The rule applies only to objects having all the tags in its tagset.',
            },
            id: '(Optional) Unique identifier for the rule. Must be less than or equal to 255 characters in length.',
            prefix: '(Optional) Object keyname prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length.',
            priority:
                '(Optional) Priority associated with the rule. Priority should only be set if `filter` is configured. If not provided, defaults to `0`. Priority must be unique between multiple rules.',
            source_selection_criteria: {
                sse_kms_encrypted_objects:
                    '(Optional) Match SSE-KMS encrypted objects ([documented below](#sse-kms-encrypted-objects)). If specified, `replica_kms_key_id`\n  in `destination` must be specified as well.',
            },
            'status!':
                '(Required) Status of the rule. Either `Enabled` or `Disabled`. The rule is ignored if status is not Enabled.\n\n#### Filter\n\nThe `filter` configuration block supports the following arguments:\n',
            tags: '(Optional)  A map of tags that identifies subset of objects to which the rule applies.\n  The rule applies only to objects having all the tags in its tagset.\n\n#### Destination\n\n',
            'bucket!':
                '(Required) ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.',
            storage_class:
                '(Optional) The [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Destination.html#AmazonS3-Type-Destination-StorageClass) used to store the object. By default, Amazon S3 uses the storage class of the source object to create the object replica.',
            replica_kms_key_id:
                '(Optional) Destination KMS encryption key ARN for SSE-KMS replication. Must be used in conjunction with\n  `sse_kms_encrypted_objects` source selection criteria.',
            access_control_translation:
                '(Optional) Specifies the overrides to use for object owners on replication. Must be used in conjunction with `account_id` owner override configuration.',
            account_id:
                '(Optional) Account ID to use for overriding the object owner on replication. Must be used in conjunction with `access_control_translation` override configuration.',
            replication_time: {
                status: '(Optional) Status of RTC. Either `Enabled` or `Disabled`.',
                minutes:
                    '(Optional) Threshold within which objects are to be replicated. The only valid value is `15`.',
            },
            'metrics!': {
                status: '(Optional) Status of replication metrics. Either `Enabled` or `Disabled`.',
                minutes:
                    '(Optional) Threshold within which objects are to be replicated. The only valid value is `15`.',
            },
            status: '(Optional) Status of replication metrics. Either `Enabled` or `Disabled`.',
            minutes:
                '(Optional) Threshold within which objects are to be replicated. The only valid value is `15`.\n\n#### Source Selection Criteria\n\nThe `source_selection_criteria` configuration block supports the following argument:\n',
            sse_kms_encrypted_objects: {
                'enabled!': '(Required) Boolean which indicates if this criteria is enabled.',
            },
            'enabled!': '(Required) Boolean which indicates if this criteria is enabled.',
        },
        request_payer:
            '(Optional, Deprecated) Specifies who should bear the cost of Amazon S3 data transfer.\n  Can be either `BucketOwner` or `Requester`. By default, the owner of the S3 bucket would incur the costs of any data transfer.\n  See [Requester Pays Buckets](http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) developer guide for more information.\n  Terraform will only perform drift detection if a configuration value is provided.\n  Use the resource [`aws_s3_bucket_request_payment_configuration`](s3_bucket_request_payment_configuration.html) instead.',
        server_side_encryption_configuration: {
            'rule!':
                '(Required) Single object for server-side encryption by default configuration. (documented below)\n\nThe `rule` configuration block supports the following arguments:\n',
            'apply_server_side_encryption_by_default!':
                '(Required) Single object for setting server-side encryption by default. (documented below)',
            bucket_key_enabled:
                '(Optional) Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.\n\nThe `apply_server_side_encryption_by_default` configuration block supports the following arguments:\n',
            'sse_algorithm!':
                '(Required) Server-side encryption algorithm to use. Valid values are `AES256` and `aws:kms`',
            kms_master_key_id:
                '(Optional) AWS KMS master key ID used for the SSE-KMS encryption. This can only be used when you set the value of `sse_algorithm` as `aws:kms`. The default `aws/s3` AWS KMS master key is used if this element is absent while the `sse_algorithm` is `aws:kms`.',
        },
        versioning: {
            enabled:
                '(Optional) Enable versioning. Once you version-enable a bucket, it can never return to an unversioned state. You can, however, suspend versioning on that bucket.',
            mfa_delete:
                '(Optional) Enable MFA delete for either `Change the versioning state of your bucket` or `Permanently delete an object version`. Default is `false`. This cannot be used to toggle this setting but is available to allow managed buckets to reflect the state in AWS',
        },
        website: {
            index_document:
                '(Required, unless using `redirect_all_requests_to`) Amazon S3 returns this index document when requests are made to the root domain or any of the subfolders.',
            error_document:
                '(Optional) Absolute path to the document to return in case of a 4XX error.',
            redirect_all_requests_to:
                '(Optional) Hostname to redirect all website requests for this bucket to. Hostname can optionally be prefixed with a protocol (`http://` or `https://`) to use when redirecting requests. The default is the protocol that is used in the original request.',
            routing_rules:
                '(Optional) JSON array containing [routing rules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html)\n  describing redirect behavior and when redirects are applied.',
        },
        allowed_headers: '(Optional) List of headers allowed.',
        'allowed_methods!':
            '(Required) One or more HTTP methods that you allow the origin to execute. Can be `GET`, `PUT`, `POST`, `DELETE` or `HEAD`.',
        'allowed_origins!':
            '(Required) One or more origins you want customers to be able to access the bucket from.',
        expose_headers:
            '(Optional) One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).',
        max_age_seconds:
            '(Optional) Specifies time in seconds that browser can cache the response for a preflight request.\n\n### Grant\n\n',
        id: '(Optional) Unique identifier for the rule. Must be less than or equal to 255 characters in length.',
        'type!':
            '(Required) Type of grantee to apply for. Valid values are `CanonicalUser` and `Group`. `AmazonCustomerByEmail` is not supported.',
        'permissions!':
            '(Required) List of permissions to apply for grantee. Valid values are `READ`, `WRITE`, `READ_ACP`, `WRITE_ACP`, `FULL_CONTROL`.',
        uri: '(Optional) Uri address to grant for. Used only when `type` is `Group`.\n\n### Lifecycle Rule\n\n',
        prefix: '(Optional) Object keyname prefix that identifies subset of objects to which the rule applies. Must be less than or equal to 1024 characters in length.',
        'enabled!':
            '(Required) Boolean which indicates if this criteria is enabled.\n\n### Server Side Encryption Configuration\n\n',
        expiration: {
            date: '(Optional) Specifies the date after which you want the corresponding action to take effect.',
            days: '(Optional) Specifies the number of days after object creation when the specific rule action takes effect.',
            expired_object_delete_marker:
                '(Optional) On a versioned bucket (versioning-enabled or versioning-suspended bucket), you can add this element in the lifecycle configuration to direct Amazon S3 to delete expired object delete markers. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.',
        },
        transition: {
            date: '(Optional) Specifies the date after which you want the corresponding action to take effect.',
            days: '(Optional) Specifies the number of days after object creation when the specific rule action takes effect.',
            'storage_class!':
                '(Required) Specifies the Amazon S3 [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Transition.html#AmazonS3-Type-Transition-StorageClass) to which you want the object to transition.',
        },
        noncurrent_version_expiration: {
            'days!': '(Required) Specifies the number of days noncurrent object versions expire.',
        },
        noncurrent_version_transition: {
            'days!':
                '(Required) Specifies the number of days noncurrent object versions transition.',
            'storage_class!':
                '(Required) Specifies the Amazon S3 [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Transition.html#AmazonS3-Type-Transition-StorageClass) to which you want the object to transition.',
        },
        date: '(Optional) Specifies the date after which you want the corresponding action to take effect.',
        days: '(Optional) Number of days that you want to specify for the default retention period.',
        expired_object_delete_marker:
            '(Optional) On a versioned bucket (versioning-enabled or versioning-suspended bucket), you can add this element in the lifecycle configuration to direct Amazon S3 to delete expired object delete markers. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.\n\n### Transition\n\nThe `transition` configuration block supports the following arguments:\n',
        'storage_class!':
            '(Required) Specifies the Amazon S3 [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Transition.html#AmazonS3-Type-Transition-StorageClass) to which you want the object to transition.\n\n### Logging\n\n',
        'days!': '(Required) Specifies the number of days noncurrent object versions transition.',
        'target_bucket!': '(Required) Name of the bucket that will receive the log objects.',
        target_prefix:
            '(Optional) To specify a key prefix for log objects.\n\n### Object Lock Configuration\n\n',
        rule: '(Optional) Object Lock rule in place for this bucket ([documented below](#rule)).\n\n#### Rule\n\nThe `rule` configuration block supports the following argument:\n',
        'default_retention!':
            '(Required) Default retention period that you want to apply to new objects placed in this bucket ([documented below](#default-retention)).\n\n#### Default Retention\n\nThe `default_retention` configuration block supports the following arguments:\n\n',
        'mode!':
            '(Required) Default Object Lock retention mode you want to apply to new objects placed in this bucket. Valid values are `GOVERNANCE` and `COMPLIANCE`.',
        years: '(Optional) Number of years that you want to specify for the default retention period.\n\n### Replication Configuration\n\n',
        'role!':
            '(Required) ARN of the IAM role for Amazon S3 to assume when replicating the objects.',
        'rules!':
            '(Required) Specifies the rules managing the replication ([documented below](#rules)).\n\n#### Rules\n\nThe `rules` configuration block supports the following arguments:\n\n',
        delete_marker_replication_status:
            '(Optional) Whether delete markers are replicated. The only valid value is `Enabled`. To disable, omit this argument. This argument is only valid with V2 replication configurations (i.e., when `filter` is used).',
        'destination!':
            '(Required) Specifies the destination for the rule ([documented below](#destination)).',
        filter: '(Optional, Conflicts with `prefix`) Filter that identifies subset of objects to which the replication rule applies ([documented below](#filter)).',
        priority:
            '(Optional) Priority associated with the rule. Priority should only be set if `filter` is configured. If not provided, defaults to `0`. Priority must be unique between multiple rules.',
        source_selection_criteria:
            '(Optional) Specifies special object selection criteria ([documented below](#source-selection-criteria)).',
        'status!':
            '(Required) Status of the rule. Either `Enabled` or `Disabled`. The rule is ignored if status is not Enabled.\n\n#### Filter\n\nThe `filter` configuration block supports the following arguments:\n',
        'bucket!':
            '(Required) ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.',
        storage_class:
            '(Optional) The [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Destination.html#AmazonS3-Type-Destination-StorageClass) used to store the object. By default, Amazon S3 uses the storage class of the source object to create the object replica.',
        replica_kms_key_id:
            '(Optional) Destination KMS encryption key ARN for SSE-KMS replication. Must be used in conjunction with\n  `sse_kms_encrypted_objects` source selection criteria.',
        access_control_translation:
            '(Optional) Specifies the overrides to use for object owners on replication. Must be used in conjunction with `account_id` owner override configuration.',
        account_id:
            '(Optional) Account ID to use for overriding the object owner on replication. Must be used in conjunction with `access_control_translation` override configuration.',
        replication_time:
            '(Optional) Enables S3 Replication Time Control (S3 RTC) ([documented below](#replication-time)).',
        'metrics!':
            '(Optional) Enables replication metrics (required for S3 RTC) ([documented below](#metrics)).\n\n#### Replication Time\n\nThe `replication_time` configuration block supports the following arguments:\n',
        status: '(Optional) Status of replication metrics. Either `Enabled` or `Disabled`.',
        minutes:
            '(Optional) Threshold within which objects are to be replicated. The only valid value is `15`.\n\n#### Source Selection Criteria\n\nThe `source_selection_criteria` configuration block supports the following argument:\n',
        sse_kms_encrypted_objects:
            '(Optional) Match SSE-KMS encrypted objects ([documented below](#sse-kms-encrypted-objects)). If specified, `replica_kms_key_id`\n  in `destination` must be specified as well.\n\n#### SSE KMS Encrypted Objects\n\nThe `sse_kms_encrypted_objects` configuration block supports the following argument:\n',
        'rule!':
            '(Required) Single object for server-side encryption by default configuration. (documented below)\n\nThe `rule` configuration block supports the following arguments:\n',
        'apply_server_side_encryption_by_default!':
            '(Required) Single object for setting server-side encryption by default. (documented below)',
        bucket_key_enabled:
            '(Optional) Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS.\n\nThe `apply_server_side_encryption_by_default` configuration block supports the following arguments:\n',
        'sse_algorithm!':
            '(Required) Server-side encryption algorithm to use. Valid values are `AES256` and `aws:kms`',
        kms_master_key_id:
            '(Optional) AWS KMS master key ID used for the SSE-KMS encryption. This can only be used when you set the value of `sse_algorithm` as `aws:kms`. The default `aws/s3` AWS KMS master key is used if this element is absent while the `sse_algorithm` is `aws:kms`.\n\n### Versioning\n\n',
        enabled:
            '(Optional) Enable versioning. Once you version-enable a bucket, it can never return to an unversioned state. You can, however, suspend versioning on that bucket.',
        mfa_delete:
            '(Optional) Enable MFA delete for either `Change the versioning state of your bucket` or `Permanently delete an object version`. Default is `false`. This cannot be used to toggle this setting but is available to allow managed buckets to reflect the state in AWS\n\n### Website\n\n',
        index_document:
            '(Required, unless using `redirect_all_requests_to`) Amazon S3 returns this index document when requests are made to the root domain or any of the subfolders.',
        error_document:
            '(Optional) Absolute path to the document to return in case of a 4XX error.',
        redirect_all_requests_to:
            '(Optional) Hostname to redirect all website requests for this bucket to. Hostname can optionally be prefixed with a protocol (`http://` or `https://`) to use when redirecting requests. The default is the protocol that is used in the original request.',
        routing_rules:
            '(Optional) JSON array containing [routing rules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html)\n  describing redirect behavior and when redirects are applied.',
    },
    attrs: {
        id: 'Name of the bucket.',
        arn: 'ARN of the bucket. Will be of format `arn:aws:s3:::bucketname`.',
        bucket_domain_name: 'Bucket domain name. Will be of format `bucketname.s3.amazonaws.com`.',
        bucket_regional_domain_name:
            'The bucket region-specific domain name. The bucket domain name including the region name. Please refer to the [S3 endpoints reference](https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_region) for format. Note: AWS CloudFront allows specifying an S3 region-specific endpoint when creating an S3 origin. This will prevent redirect issues from CloudFront to the S3 Origin URL. For more information, see the [Virtual Hosted-Style Requests for Other Regions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html#deprecated-global-endpoint) section in the AWS S3 User Guide.',
        hosted_zone_id:
            "[Route 53 Hosted Zone ID](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_website_region_endpoints) for this bucket's region.",
        region: 'AWS region this bucket resides in.',
        tags_all:
            'Map of tags assigned to the resource, including those inherited from the provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block).',
        website_endpoint:
            '(Deprecated) Website endpoint, if the bucket is configured with a website. If not, this will be an empty string. Use the resource [`aws_s3_bucket_website_configuration`](s3_bucket_website_configuration.html.markdown) instead.',
        website_domain:
            '(Deprecated) Domain of the website endpoint, if the bucket is configured with a website. If not, this will be an empty string. This is used to create Route 53 alias records. Use the resource [`aws_s3_bucket_website_configuration`](s3_bucket_website_configuration.html.markdown) instead.',
    },
}

/*
cases: 
1. a nested reference needs to lookup a more shallow definition with a redundant 
   reference to the same definition at progressively shallower levels:
    - depth x+2: key: (optional) see [below](#key)  // lookup
    - depth x+1: key: { def1: "...", def2: "..." }  // grab this and assign to x+2
    - depth x+0: key: (optional) see [below](#key)  // redundant (omit)
2. a nested reference with a redundant reference at a shallower level:
    - depth x+1: key: (optional) no links here!     // keep this here
    - depth x+0: key: (optional) no links here!     // redundant (omit)
3. an incedentally included shallow reference at the root level:
    - depth x+0: key: (optional) see [below](#key)  // redundant (omit)
*/

const conundrum = {
    some: {
        nested: {
            key1: 'value 1',
        },
        deeper: {
            dive: {
                key4: 'value 4',
            },
            key4: 'value 4',
            key5: '#key5',
        },
        key5: {
            a: 'definition',
        },
    },
    another: {
        nested: {
            key2: 'value 2',
            key3: 'value 3',
        },
        key2: 'value 2',
    },
    nested: {
        key2: 'value 2',
        key3: 'value 3',
    },
    key1: 'value 1',
    key2: 'value 2',
    key3: 'value 3',
    key4: 'value 4',
    key5: '#key5',
}
type NestedObject = { [key: string]: NestedObject | string }

const isEmpty = (obj: NestedObject) => Object.keys(obj).length === 0

/**
 * for linked entries, this function recursively looks up the path (until
 * reaching the root) to find the definition of the linked entry. Once found,
 * the the definition and the path to it is returned.
 */
const librarian = (
    input: NestedObject = {},
    path: string[] = [],
    query: string = '',
    match: null | object = null,
    aisles: string[][] = []
): [object | null, string[][] | []] => {
    const [key, ...parent] = [...path].reverse()
    if (!parent.length) return [match, aisles]
    const [_, ...grandparent] = parent
    const stack = [...grandparent.reverse(), key]
    const definition = getInUnsafe(input, stack)
    if (isPlainObject(definition)) {
        if (!isEmpty(definition) && !match) {
            // first found definition wins (assumed to be closest to the reference)
            return librarian(input, stack, query, definition, [...aisles, stack])
        } else if (match) {
            const [key1, val1] = Object.entries(definition)[0]
            const [key2, val2] = Object.entries(match)[0]
            if (key1 === key2 && val1 === val2) {
                return librarian(input, stack, query, match, [...aisles, stack])
            } else {
                return librarian(input, stack, query, match, aisles)
            }
        } else {
            return librarian(input, stack, query, match, aisles)
        }
    } else if (typeof definition === 'string' && definition.slice(0, 50) === query.slice(0, 50)) {
        return librarian(input, stack, query, match, [...aisles, stack])
    } else {
        return librarian(input, stack, query, match, aisles)
    }
}

/**
 * for (un)linked entries, this function recursively looks up the path (until
 * reaching the root) to find any redundant references to the entry.
 * Once found, the path to the redundant reference is included in a list to be
 * deleted.
 */
const housekeeper = (
    input: NestedObject = {},
    match = {},
    path: string[] = [],
    halls: string[][] = []
): string[][] => {
    const [key, ...parent] = [...path].reverse()
    if (!parent.length) return halls
    const { val, type } = match as { val: string; type: string }
    const [_, ...grandparent] = parent
    const hallway = [...grandparent.reverse(), key]
    const def_obj = getInUnsafe(input, hallway)
    if (def_obj) {
        switch (type) {
            case 'link':
            case 'string':
                if (typeof def_obj === 'string' && def_obj.slice(0, 50) === val.slice(0, 50)) {
                    return housekeeper(input, match, hallway, [...halls, hallway])
                }
                break
            case 'object':
                if (isPlainObject(def_obj) && !isEmpty(def_obj)) {
                    const [key1, val1] = Object.entries(val)[0]
                    const [key2, val2] = Object.entries(def_obj)[0]
                    if (key1 === key2 && val1 === val2) {
                        return housekeeper(input, match, hallway, [...halls, hallway])
                    }
                }
                break
            default:
                console.error(`housekeeper needs direction for type ${type}`)
                return housekeeper(input, match, hallway, halls)
        }
        return housekeeper(input, match, hallway, halls)
    } else {
        return housekeeper(input, match, hallway, halls)
    }
}
const kabobbed = (k: string) => k.toLowerCase().replace(/ |_/g, '-')
const isLinked = (key: string, val: string) => {
    const kabob = kabobbed(key.replace('!', ''))
    return val.includes(`#${kabob}`)
}
/**
 * Recursively traverses a nested object, looking for:
 * - duplicate definitions for the same key
 * - linked references to other definitions of the same key
 *
 * It then removes any redundant references and returns the deduped object.
 */
const butler = (input: NestedObject = {}, path: string[] = []) => {
    const focused = getInUnsafe(input, path)
    Object.entries(focused).forEach((entry) => {
        const [key, val] = entry
        const path_here = [...path, key]
        if (typeof val === 'string') {
            if (isLinked(key, val)) {
                /**
                 * Linked:
                 * 1. lookup the definition of the linked entry
                 * 2. assign the definition to the current entry
                 * 3. recursively lookup any redundant references to the current entry
                 * 4. replace any redundant references with the empty object {}
                 */
                const [definition, aisles] = librarian(input, path_here, val)
                if (definition) {
                    input = setInUnsafe(input, path_here, definition)
                    const halls = housekeeper(input, { val, type: 'link' }, path_here)
                    const todos = [...halls, ...aisles]
                    todos.forEach((hallway) => {
                        // 📌 clean up {}s later...
                        input = setInUnsafe(input, hallway, {})
                    })
                }
            } else {
                /**
                 * Unlinked:
                 * 1. recursively lookup any redundant references to the current entry
                 * 2. delete any redundant references (no recursive lookup needed)
                 */
                const halls = housekeeper(input, { val, type: 'string' }, path_here)
                halls.forEach((hallway) => {
                    input = deleteInUnsafe(input, hallway)
                })
            }
        } else if (isPlainObject(val)) {
            /**
             * Object:
             * 1. recursively lookup any redundant references to the current entry
             * 2. replace any redundant references with the empty object {}
             * 3. recurse down into the object for further deduping
             */
            const [definition, aisles] = librarian(input, path_here)
            if (definition) {
                const halls = housekeeper(input, { val, type: 'object' }, path_here)
                const todos = [...halls, ...aisles]
                todos.forEach((hallway) => {
                    // 📌 clean up {}s later...
                    input = setInUnsafe(input, hallway, {})
                })
            }
            input = butler(input, path_here)
        } else {
            console.error(`butler needs direction for typeof ${key}: ${typeof val}`)
        }
    })
    return input
}

const deduper = (input: NestedObject = {}) => {
    const doubleButler = butler(butler(input))
    // recursively clean out any keys with empty objects and
    // remove any isLinked in root
    const clean = (obj: NestedObject = {}) => {
        Object.entries(obj).forEach(([key, val]) => {
            if (isPlainObject(val)) {
                if (isEmpty(val)) {
                    delete obj[key]
                } else {
                    clean(val)
                }
            } else if (typeof val === 'string' && isLinked(key, val)) {
                delete obj[key]
            }
        })
        return obj
    }
    return clean(doubleButler)
}

//JSON.stringify(butler(conundrum), null, 4) //?
JSON.stringify(deduper(test), null, 4) //?
