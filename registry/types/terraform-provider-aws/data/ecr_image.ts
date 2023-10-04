export interface EcrImage {
    data: Datum[];
}

export interface Datum {
    ecr_image: EcrImageClass;
}

export interface EcrImageClass {
    /** (Optional) ID of the Registry where the repository resides. */
    registry_id?:    any;
    /** (Required) Name of the ECR Repository. */
    repository_name: any;
    /** (Optional) Sha256 digest of the image manifest. At least one of `image_digest`, `image_tag`, or `most_recent` must be specified. */
    image_digest?:   any;
    /** (Optional) Tag associated with this image. At least one of `image_digest`, `image_tag`, or `most_recent` must be specified. */
    image_tag?:      any;
    /** (Optional) Return the most recently pushed image. At least one of `image_digest`, `image_tag`, or `most_recent` must be specified. */
    most_recent?:    any;
}