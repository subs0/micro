export interface ImagebuilderImageRecipe {
    data: Datum[];
}

export interface Datum {
    imagebuilder_image_recipe: ImagebuilderImageRecipeClass;
}

export interface ImagebuilderImageRecipeClass {
    /** (Required) ARN of the image recipe. */
    arn: any;
}