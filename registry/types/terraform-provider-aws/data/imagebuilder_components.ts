export interface ImagebuilderComponents {
    data: Datum[];
}

export interface Datum {
    imagebuilder_components: ImagebuilderComponentsClass;
}

export interface ImagebuilderComponentsClass {
    /** (Optional) Owner of the image recipes. Valid values are `Self`, `Shared` and `Amazon`. Defaults to `Self`. */
    owner?:  any;
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?: any;
    /** (Required) Name of the filter field. Valid values can be found in the [Image Builder ListComponents API Reference](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponents.html). */
    name:    any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:  any;
}