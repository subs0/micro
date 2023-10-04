export interface ImagebuilderContainerRecipe {
    data: Datum[];
}

export interface Datum {
    imagebuilder_container_recipe: ImagebuilderContainerRecipeClass;
}

export interface ImagebuilderContainerRecipeClass {
    /** (Required) ARN of the container recipe. */
    arn: any;
}