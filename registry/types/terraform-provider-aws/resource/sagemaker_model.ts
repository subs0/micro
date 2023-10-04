export interface SagemakerModel {
    resource: Resource[];
}

export interface Resource {
    sagemaker_model: SagemakerModelClass;
}

export interface SagemakerModelClass {
    /** (Optional) The name of the model (must be unique). If omitted, Terraform will assign a random, unique name. */
    name?:                               any;
    /** (Optional) The primary docker image containing inference code that is used when the model is deployed for predictions.  If not specified, the `container` argument is required. Fields are documented below. */
    primary_container?:                  any;
    /** (Required) A role that SageMaker can assume to access model artifacts and docker images for deployment. */
    execution_role_arn:                  any;
    /** (Optional) Specifies details of how containers in a multi-container endpoint are called. see [Inference Execution Config](#inference-execution-config). */
    inference_execution_config?:         any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
    /** (Optional) The registry path where the inference code image is stored in Amazon ECR. */
    image?:                              any;
    /** (Optional) The container hosts value `SingleModel/MultiModel`. The default value is `SingleModel`. */
    mode?:                               any;
    /** (Optional) The URL for the S3 location where model artifacts are stored. */
    model_data_url?:                     any;
    /** (Optional) The Amazon Resource Name (ARN) of the model package to use to create the model. */
    model_package_name?:                 any;
    /** (Optional) The DNS host name for the container. */
    container_hostname?:                 any;
    /** (Optional) Environment variables for the Docker container. */
    environment?:                        any;
    /** (Optional) Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). For more information see [Using a Private Docker Registry for Real-Time Inference Containers](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-containers-inference-private.html). see [Image Config](#image-config). */
    image_config?:                       any;
    /** (Required) Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). Allowed values are: `Platform` and `Vpc`. */
    repository_access_mode:              any;
    /** (Optional) Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified Vpc as the value for the RepositoryAccessMode field, and the private Docker registry where the model image is hosted requires authentication. see [Repository Auth Config](#repository-auth-config). */
    repository_auth_config?:             any;
    /** (Required) The Amazon Resource Name (ARN) of an AWS Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted. For information about how to create an AWS Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the _AWS Lambda Developer Guide_. */
    repository_credentials_provider_arn: any;
}