export interface ImagebuilderComponent {
    data: Datum[];
}

export interface Datum {
    imagebuilder_component: ImagebuilderComponentClass;
}

export interface ImagebuilderComponentClass {
    /** (Required) ARN of the component. */
    arn: any;
}