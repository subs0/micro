export interface LakeformationLFTag {
    resource: Resource[];
}

export interface Resource {
    lakeformation_lf_tag: LakeformationLFTagClass;
}

export interface LakeformationLFTagClass {
    /** (Optional) ID of the Data Catalog to create the tag in. If omitted, this defaults to the AWS Account ID. */
    catalog_id?: any;
    /** (Required) Key-name for the tag. */
    key:         any;
    /** (Required) List of possible values an attribute can take. */
    values:      any;
}