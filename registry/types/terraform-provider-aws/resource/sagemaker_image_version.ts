export interface SagemakerImageVersion {
    resource: Resource[];
}

export interface Resource {
    sagemaker_image_version: SagemakerImageVersionClass;
}

export interface SagemakerImageVersionClass {
    /** (Required) The name of the image. Must be unique to your account. */
    image_name: any;
    /** (Required) The registry path of the container image on which this image version is based. */
    base_image: any;
}