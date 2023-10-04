export interface S3ControlMultiRegionAccessPointPolicy {
    resource: Resource[];
}

export interface Resource {
    s3control_multi_region_access_point_policy: S3ControlMultiRegionAccessPointPolicyClass;
}

export interface S3ControlMultiRegionAccessPointPolicyClass {
    /** (Optional) The AWS account ID for the owner of the Multi-Region Access Point. Defaults to automatically determined account ID of the Terraform AWS provider. */
    account_id?: any;
    /** (Required) A configuration block containing details about the policy for the Multi-Region Access Point. See [Details Configuration Block](#details-configuration) below for more details */
    details:     any;
    /** (Required) The name of the Multi-Region Access Point. */
    name:        any;
    /** (Required) A valid JSON document that specifies the policy that you want to associate with this Multi-Region Access Point. Once applied, the policy can be edited, but not deleted. For more information, see the documentation on [Multi-Region Access Point Permissions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointPermissions.html). */
    policy:      any;
}