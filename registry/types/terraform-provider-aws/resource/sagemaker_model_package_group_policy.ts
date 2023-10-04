export interface SagemakerModelPackageGroupPolicy {
    resource: Resource[];
}

export interface Resource {
    sagemaker_model_package_group_policy: SagemakerModelPackageGroupPolicyClass;
}

export interface SagemakerModelPackageGroupPolicyClass {
    /** (Required) The name of the model package group. */
    model_package_group_name: any;
}