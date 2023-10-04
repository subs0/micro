export interface OpensearchPackage {
    resource: Resource[];
}

export interface Resource {
    opensearch_package: OpensearchPackageClass;
}

export interface OpensearchPackageClass {
    /** (Required, Forces new resource) Unique name for the package. */
    package_name?:        any;
    /** (Required, Forces new resource) The type of package. */
    package_type?:        any;
    package_source?:      PackageSource;
    /** (Optional, Forces new resource) Description of the package. */
    package_description?: any;
}

export interface PackageSource {
    /** (Required, Forces new resource) The name of the Amazon S3 bucket containing the package. */
    s3_bucket_name: any;
    /** (Required, Forces new resource) Key (file name) of the package. */
    s3_key:         any;
}