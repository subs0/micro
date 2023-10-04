export interface LakeformationResource {
    resource: Resource[];
}

export interface Resource {
    lakeformation_resource: LakeformationResourceClass;
}

export interface LakeformationResourceClass {
    "* `arn` – (Required) Amazon Resource Name (ARN) of the resource, an S3 path."?: any;
}