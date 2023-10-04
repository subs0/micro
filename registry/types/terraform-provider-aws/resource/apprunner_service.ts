export interface ApprunnerService {
    resource: Resource[];
}

export interface Resource {
    apprunner_service: ApprunnerServiceClass;
}

export interface ApprunnerServiceClass {
    /** (Forces new resource) Name of the service. */
    service_name?:                    any;
    /** The source to deploy to the App Runner service. Can be a code or an image repository. See [Source Configuration](#source-configuration) below for more details. */
    source_configuration?:            any;
    /** ARN of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner associates the latest revision of a default auto scaling configuration. */
    auto_scaling_configuration_arn?:  any;
    /** (Forces new resource) An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default, App Runner uses an AWS managed CMK. See [Encryption Configuration](#encryption-configuration) below for more details. */
    encryption_configuration?:        any;
    /** (Forces new resource) Settings of the health check that AWS App Runner performs to monitor the health of your service. See [Health Check Configuration](#health-check-configuration) below for more details. */
    health_check_configuration?:      any;
    /** The runtime configuration of instances (scaling units) of the App Runner service. See [Instance Configuration](#instance-configuration) below for more details. */
    instance_configuration?:          any;
    /** Configuration settings related to network traffic of the web application that the App Runner service runs. See [Network Configuration](#network-configuration) below for more details. */
    network_configuration?:           any;
    /** The observability configuration of your service. See [Observability Configuration](#observability-configuration) below for more details. */
    observability_configuration?:     any;
    /** Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
    /** (Required) ARN of the KMS key used for encryption. */
    kms_key:                          any;
    /** (Optional) Number of consecutive checks that must succeed before App Runner decides that the service is healthy. Defaults to 1. Minimum value of 1. Maximum value of 20. */
    healthy_threshold?:               any;
    /** (Optional) Time interval, in seconds, between health checks. Defaults to 5. Minimum value of 1. Maximum value of 20. */
    interval?:                        any;
    /** (Optional) URL to send requests to for health checks. Defaults to `/`. Minimum length of 0. Maximum length of 51200. */
    path?:                            any;
    /** (Optional) IP protocol that App Runner uses to perform health checks for your service. Valid values: `TCP`, `HTTP`. Defaults to `TCP`. If you set protocol to `HTTP`, App Runner sends health check requests to the HTTP path specified by `path`. */
    protocol?:                        any;
    /** (Optional) Time, in seconds, to wait for a health check response before deciding it failed. Defaults to 2. Minimum value of  1. Maximum value of 20. */
    timeout?:                         any;
    /** (Optional) Number of consecutive checks that must fail before App Runner decides that the service is unhealthy. Defaults to 5. Minimum value of  1. Maximum value of 20. */
    unhealthy_threshold?:             any;
    /** (Optional) Number of CPU units reserved for each instance of your App Runner service represented as a String. Defaults to `1024`. Valid values: `256|512|1024|2048|4096|(0.25|0.5|1|2|4) vCPU`. */
    cpu?:                             any;
    /** (Optional) ARN of an IAM role that provides permissions to your App Runner service. These are permissions that your code needs when it calls any AWS APIs. */
    instance_role_arn?:               any;
    /** (Optional) Amount of memory, in MB or GB, reserved for each instance of your App Runner service. Defaults to `2048`. Valid values: `512|1024|2048|3072|4096|6144|8192|10240|12288|(0.5|1|2|3|4|6|8|10|12) GB`. */
    memory?:                          any;
    /** (Optional) Describes resources needed to authenticate access to some source repositories. See [Authentication Configuration](#authentication-configuration) below for more details. */
    authentication_configuration?:    any;
    /** (Optional) Whether continuous integration from the source repository is enabled for the App Runner service. If set to `true`, each repository change (source code commit or new image version) starts a deployment. Defaults to `true`. */
    auto_deployments_enabled?:        any;
    /** (Optional) Description of a source code repository. See [Code Repository](#code-repository) below for more details. */
    code_repository?:                 any;
    /** (Optional) Description of a source image repository. See [Image Repository](#image-repository) below for more details. */
    image_repository?:                any;
    /** (Optional) ARN of the IAM role that grants the App Runner service access to a source repository. Required for ECR image repositories (but not for ECR Public) */
    access_role_arn?:                 any;
    /** (Optional) ARN of the App Runner connection that enables the App Runner service to connect to a source repository. Required for GitHub code repositories. */
    connection_arn?:                  any;
    /** (Optional) Network configuration settings for inbound network traffic. See [Ingress Configuration](#ingress-configuration) below for more details. */
    ingress_configuration?:           any;
    /** (Optional) Network configuration settings for outbound message traffic. See [Egress Configuration](#egress-configuration) below for more details. */
    egress_configuration?:            any;
    /** The type of egress configuration. Valid values are: `DEFAULT` and `VPC`. */
    egress_type?:                     any;
    /** The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to associate with your App Runner service. Only valid when `EgressType = VPC`. */
    vpc_connector_arn?:               any;
    /** (Required) Specifies whether your App Runner service is publicly accessible. To make the service publicly accessible set it to True. To make the service privately accessible, from only within an Amazon VPC set it to False. */
    is_publicly_accessible:           any;
    /** (Required) When `true`, an observability configuration resource is associated with the service. */
    observability_enabled:            any;
    /** (Optional) ARN of the observability configuration that is associated with the service. Specified only when `observability_enabled` is `true`. */
    observability_configuration_arn?: any;
    /** (Optional) Configuration for building and running the service from a source code repository. See [Code Configuration](#code-configuration) below for more details. */
    code_configuration?:              any;
    /** (Required) Location of the repository that contains the source code. */
    repository_url:                   any;
    /** (Required) Version that should be used within the source code repository. See [Source Code Version](#source-code-version) below for more details. */
    source_code_version:              any;
    /** (Optional) Configuration for running the identified image. See [Image Configuration](#image-configuration) below for more details. */
    image_configuration?:             any;
    /** (Required) Identifier of an image. For an image in Amazon Elastic Container Registry (Amazon ECR), this is an image name. For the */
    image_identifier:                 any;
    /** (Required) Type of the image repository. This reflects the repository provider and whether the repository is private or public. Valid values: `ECR` , `ECR_PUBLIC`. */
    image_repository_type:            any;
    /** (Optional) Basic configuration for building and running the App Runner service. Use this parameter to quickly launch an App Runner service without providing an apprunner.yaml file in the source code repository (or ignoring the file if it exists). See [Code Configuration Values](#code-configuration-values) below for more details. */
    code_configuration_values?:       any;
    /** (Required) Source of the App Runner configuration. Valid values: `REPOSITORY`, `API`. Values are interpreted as follows: */
    configuration_source:             any;
    /** App Runner reads configuration values from the apprunner.yaml file in the */
    REPOSITORY?:                      any;
    /** App Runner uses configuration values provided in the CodeConfigurationValues */
    API?:                             any;
    /** (Optional) Command App Runner runs to build your application. */
    build_command?:                   any;
    /** (Optional) Port that your application listens to in the container. Defaults to `"8080"`. */
    port?:                            any;
    /** (Required) Runtime environment type for building and running an App Runner service. Represents a programming language runtime. Valid values: `PYTHON_3`, `NODEJS_12`, `NODEJS_14`, `NODEJS_16`, `CORRETTO_8`, `CORRETTO_11`, `GO_1`, `DOTNET_6`, `PHP_81`, `RUBY_31`. */
    runtime:                          any;
    /** (Optional) Secrets and parameters available to your service as environment variables. A map of key/value pairs, where the key is the desired name of the Secret in the environment (i.e. it does not have to match the name of the secret in Secrets Manager or SSM Parameter Store), and the value is the ARN of the secret from AWS Secrets Manager or the ARN of the parameter in AWS SSM Parameter Store. */
    runtime_environment_secrets?:     any;
    /** (Optional) Environment variables available to your running App Runner service. A map of key/value pairs. Keys with a prefix of `AWSAPPRUNNER` are reserved for system use and aren't valid. */
    runtime_environment_variables?:   any;
    /** (Optional) Command App Runner runs to start the application in the source image. If specified, this command overrides the Docker image’s default start command. */
    start_command?:                   any;
    /** (Required) Type of version identifier. For a git-based repository, branches represent versions. Valid values: `BRANCH`. */
    type:                             any;
}