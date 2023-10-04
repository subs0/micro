export interface S3BucketACL {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_acl: S3BucketACLClass;
}

export interface S3BucketACLClass {
    /** (Optional, Conflicts with `access_control_policy`) Canned ACL to apply to the bucket. */
    acl?:                   any;
    access_control_policy?: AccessControlPolicy;
    /** (Required, Forces new resource) Name of the bucket. */
    bucket?:                any;
    /** (Optional, Forces new resource) Account ID of the expected bucket owner. */
    expected_bucket_owner?: any;
    /** (Required) Set of `grant` configuration blocks. [See below](#grant). */
    grant:                  Grant;
    /** (Required) Configuration block of the bucket owner's display name and ID. [See below](#owner). */
    owner:                  Owner;
    /** (Required) Configuration block for the person being granted permissions. [See below](#grantee). */
    grantee:                Grantee;
}

export interface AccessControlPolicy {
    /** (Required) Set of `grant` configuration blocks. [See below](#grant). */
    grant: any;
    /** (Required) Configuration block of the bucket owner's display name and ID. [See below](#owner). */
    owner: any;
}

export interface Grant {
    /** (Required) Configuration block for the person being granted permissions. [See below](#grantee). */
    grantee:    any;
    /** (Required) Logging permissions assigned to the grantee for the bucket. */
    permission: any;
}

export interface Grantee {
    /** (Optional) Email address of the grantee. See [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for supported AWS regions where this argument can be specified. */
    email_address?: any;
    /** (Required) ID of the owner. */
    id?:            any;
    /** (Required) Type of grantee. Valid values: `CanonicalUser`, `AmazonCustomerByEmail`, `Group`. */
    type:           any;
    /** (Optional) URI of the grantee group. */
    uri?:           any;
}

export interface Owner {
    /** (Required) ID of the owner. */
    id:            any;
    /** (Optional) Display name of the owner. */
    display_name?: any;
}