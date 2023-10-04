export interface ImagebuilderImage {
    data: Datum[];
}

export interface Datum {
    imagebuilder_image: ImagebuilderImageClass;
}

export interface ImagebuilderImageClass {
    /** (Required) ARN of the image. The suffix can either be specified with wildcards (`x.x.x`) to fetch the latest build version or a full build version (e.g., `2020.11.26/1`) to fetch an exact version. */
    arn: any;
}