export interface S3ControlMultiRegionAccessPoint {
    data: Datum[];
}

export interface Datum {
    s3control_multi_region_access_point: S3ControlMultiRegionAccessPointClass;
}

export interface S3ControlMultiRegionAccessPointClass {
    /** (Optional) The AWS account ID of the S3 Multi-Region Access Point. Defaults to automatically determined account ID of the Terraform AWS provider. */
    account_id?: any;
    /** (Required) The name of the Multi-Region Access Point. */
    name:        any;
}