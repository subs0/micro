export interface LakeformationResource {
    data: Datum[];
}

export interface Datum {
    lakeformation_resource: LakeformationResourceClass;
}

export interface LakeformationResourceClass {
    "* `arn` – (Required) ARN of the resource, an S3 path."?: any;
}