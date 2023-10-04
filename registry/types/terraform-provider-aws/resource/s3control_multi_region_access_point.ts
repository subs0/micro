export interface S3ControlMultiRegionAccessPoint {
    resource: Resource[];
}

export interface Resource {
    s3control_multi_region_access_point: S3ControlMultiRegionAccessPointClass;
}

export interface S3ControlMultiRegionAccessPointClass {
    /** (Optional) The AWS account ID for the owner of the buckets for which you want to create a Multi-Region Access Point. Defaults to automatically determined account ID of the Terraform AWS provider. */
    account_id?: any;
    /** (Required) A configuration block containing details about the Multi-Region Access Point. See [Details Configuration Block](#details-configuration) below for more details */
    details:     any;
}