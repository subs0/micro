export interface CodebuildProject {
    resource: Resource[];
}

export interface Resource {
    codebuild_project: CodebuildProjectClass;
}

export interface CodebuildProjectClass {
    artifacts:                 Artifacts;
    environment:               Environment;
    source:                    SecondarySources;
    /** (Optional) Generates a publicly-accessible URL for the projects build badge. Available as `badge_url` attribute when enabled. */
    badge_enabled?:            any;
    build_batch_config?:       BuildBatchConfig;
    /** (Optional) Number of minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes. */
    build_timeout?:            any;
    cache?:                    Cache;
    /** (Optional) Specify a maximum number of concurrent builds for the project. The value specified must be greater than 0 and less than the account concurrent running builds limit. */
    concurrent_build_limit?:   any;
    /** (Optional) Short description of the project. */
    description?:              any;
    file_system_locations?:    FileSystemLocations;
    /** (Optional) AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build project's build output artifacts. */
    encryption_key?:           any;
    logs_config?:              LogsConfig;
    /** (Optional) Specifies the visibility of the project's builds. Possible values are: `PUBLIC_READ` and `PRIVATE`. Default value is `PRIVATE`. */
    project_visibility?:       any;
    /** The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds. */
    resource_access_role?:     any;
    /** (Optional) Number of minutes, from 5 to 480 (8 hours), a build is allowed to be queued before it times out. The default is 8 hours. */
    queued_timeout?:           any;
    secondary_artifacts?:      Artifacts;
    secondary_sources?:        SecondarySources;
    secondary_source_version?: SecondarySourceVersion;
    /** (Optional) Version of the build input to be built for this project. If not specified, the latest version is used. */
    source_version?:           any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    vpc_config?:               VpcConfig;
}

export interface Artifacts {
    /** (Required) Artifact identifier. Must be the same specified inside the AWS CodeBuild build specification. */
    artifact_identifier?: any;
    /** (Optional) Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects. Valid values are `NONE`, `READ_ONLY`, and `FULL`. The CodeBuild service role must have the `s3:PutBucketAcl` permission. This permission allows CodeBuild to modify the access control list for the bucket. */
    bucket_owner_access?: any;
    /** (Optional) Whether to disable encrypting output artifacts. If `type` is set to `NO_ARTIFACTS`, this value is ignored. Defaults to `false`. */
    encryption_disabled?: any;
    /** (Optional) Location of the source code from git or s3. */
    location?:            any;
    /** (Required) Environment variable's name or key. */
    name?:                any;
    /** (Optional) Namespace to use in storing build artifacts. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, valid values are `BUILD_ID` or `NONE`. */
    namespace_type?:      any;
    /** (Optional) Type of build output artifact to create. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, valid values are `NONE` or `ZIP`. */
    packaging?:           any;
    /** (Optional) Along with `namespace_type` and `name`, the pattern that AWS CodeBuild uses to name and store the output artifact. If `type` is set to `CODEPIPELINE` or `NO_ARTIFACTS`, this value is ignored if specified. If `type` is set to `S3`, this is the path to the output artifact. */
    path?:                any;
    /** (Required) Type of repository that contains the source code to be built. Valid values: `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `BITBUCKET`, `S3`, `NO_SOURCE`. */
    type:                 any;
}

export interface BuildBatchConfig {
    /** (Optional) Specifies if the build artifacts for the batch build should be combined into a single artifact location. */
    combine_artifacts:      any;
    /** (Optional) Configuration block specifying the restrictions for the batch build. Detailed below. */
    restrictions:           any;
    /** (Required) Specifies the service role ARN for the batch build project. */
    service_role:           any;
    /** (Optional) Specifies the maximum amount of time, in minutes, that the batch build must be completed in. */
    timeout_in_mins:        any;
    /** (Optional) An array of strings that specify the compute types that are allowed for the batch build. See [Build environment compute types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) in the AWS CodeBuild User Guide for these values. */
    compute_types_allowed:  any;
    /** (Optional) Specifies the maximum number of builds allowed. */
    maximum_builds_allowed: any;
}

export interface Cache {
    /** (Optional) Location of the source code from git or s3. */
    location: any;
    /** (Required when cache type is `LOCAL`) Specifies settings that AWS CodeBuild uses to store and reuse build dependencies. Valid values:  `LOCAL_SOURCE_CACHE`, `LOCAL_DOCKER_LAYER_CACHE`, `LOCAL_CUSTOM_CACHE`. */
    modes:    any;
    /** (Required) Type of repository that contains the source code to be built. Valid values: `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `BITBUCKET`, `S3`, `NO_SOURCE`. */
    type:     any;
}

export interface Environment {
    /** (Optional) ARN of the S3 bucket, path prefix and object key that contains the PEM-encoded certificate. */
    certificate?:                 any;
    /** (Required) Information about the compute resources the build project will use. Valid values: `BUILD_GENERAL1_SMALL`, `BUILD_GENERAL1_MEDIUM`, `BUILD_GENERAL1_LARGE`, `BUILD_GENERAL1_2XLARGE`. `BUILD_GENERAL1_SMALL` is only valid if `type` is set to `LINUX_CONTAINER`. When `type` is set to `LINUX_GPU_CONTAINER`, `compute_type` must be `BUILD_GENERAL1_LARGE`. */
    compute_type:                 any;
    /** (Optional) Configuration block. Detailed below. */
    environment_variable?:        any;
    /** (Optional) Type of credentials AWS CodeBuild uses to pull images in your build. Valid values: `CODEBUILD`, `SERVICE_ROLE`. When you use a cross-account or private registry image, you must use SERVICE_ROLE credentials. When you use an AWS CodeBuild curated image, you must use CodeBuild credentials. Defaults to `CODEBUILD`. */
    image_pull_credentials_type?: any;
    /** (Required) Docker image to use for this build project. Valid values include [Docker images provided by CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-available.html) (e.g `aws/codebuild/amazonlinux2-x86_64-standard:4.0`), [Docker Hub images](https://hub.docker.com/) (e.g., `hashicorp/terraform:latest`), and full Docker repository URIs such as those for ECR (e.g., `137112412989.dkr.ecr.us-west-2.amazonaws.com/amazonlinux:latest`). */
    image:                        any;
    /** (Optional) Whether to enable running the Docker daemon inside a Docker container. Defaults to `false`. */
    privileged_mode?:             any;
    /** (Optional) Configuration block. Detailed below. */
    registry_credential?:         any;
    /** (Required) Type of repository that contains the source code to be built. Valid values: `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `BITBUCKET`, `S3`, `NO_SOURCE`. */
    type:                         any;
    /** (Required) Environment variable's name or key. */
    name:                         any;
    /** (Required) Environment variable's value. */
    value:                        any;
    /** (Required) ARN or name of credentials created using AWS Secrets Manager. */
    credential:                   any;
    /** (Required) Service that created the credentials to access a private Docker registry. Valid value: `SECRETS_MANAGER` (AWS Secrets Manager). */
    credential_provider:          any;
}

export interface FileSystemLocations {
    /** (Optional) The name used to access a file system created by Amazon EFS. CodeBuild creates an environment variable by appending the identifier in all capital letters to CODEBUILD\_. For example, if you specify my-efs for identifier, a new environment variable is create named CODEBUILD_MY-EFS. */
    identifier:    any;
    /** (Optional) Location of the source code from git or s3. */
    location:      any;
    /** (Optional) The mount options for a file system created by AWS EFS. */
    mount_options: any;
    /** (Optional) The location in the container where you mount the file system. */
    mount_point:   any;
    /** (Required) Type of repository that contains the source code to be built. Valid values: `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `BITBUCKET`, `S3`, `NO_SOURCE`. */
    type:          any;
}

export interface LogsConfig {
    /** (Optional) Configuration block. Detailed below. */
    cloudwatch_logs:     any;
    /** (Optional) Configuration block. Detailed below. */
    s3_logs:             any;
    /** (Optional) Group name of the logs in CloudWatch Logs. */
    group_name:          any;
    /** (Optional) Current status of logs in S3 for a build project. Valid values: `ENABLED`, `DISABLED`. Defaults to `DISABLED`. */
    status:              any;
    /** (Optional) Stream name of the logs in CloudWatch Logs. */
    stream_name:         any;
    /** (Optional) Whether to disable encrypting output artifacts. If `type` is set to `NO_ARTIFACTS`, this value is ignored. Defaults to `false`. */
    encryption_disabled: any;
    /** (Optional) Location of the source code from git or s3. */
    location:            any;
    /** (Optional) Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects. Valid values are `NONE`, `READ_ONLY`, and `FULL`. The CodeBuild service role must have the `s3:PutBucketAcl` permission. This permission allows CodeBuild to modify the access control list for the bucket. */
    bucket_owner_access: any;
}

export interface SecondarySourceVersion {
    /** (Required) An identifier for a source in the build project. */
    source_identifier: any;
    /** (Optional) Version of the build input to be built for this project. If not specified, the latest version is used. */
    source_version:    any;
}

export interface SecondarySources {
    /** (Optional) The build spec declaration to use for this build project's related builds. This must be set when `type` is `NO_SOURCE`. It can either be a path to a file residing in the repository to be built or a local file path leveraging the `file()` built-in. */
    buildspec?:             any;
    /** (Optional) Truncate git history to this many commits. Use `0` for a `Full` checkout which you need to run commands like `git branch --show-current`. See [AWS CodePipeline User Guide: Tutorial: Use full clone with a GitHub pipeline source](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-github-gitclone.html) for details. */
    git_clone_depth?:       any;
    /** (Optional) Configuration block. Detailed below. */
    git_submodules_config?: any;
    /** (Optional) Ignore SSL warnings when connecting to source control. */
    insecure_ssl?:          any;
    /** (Optional) Location of the source code from git or s3. */
    location?:              any;
    /** (Optional) Whether to report the status of a build's start and finish to your source provider. This option is only valid when your source provider is `GITHUB`, `BITBUCKET`, or `GITHUB_ENTERPRISE`. */
    report_build_status?:   any;
    /** (Optional) Configuration block that contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is `GITHUB`, `GITHUB_ENTERPRISE`, or `BITBUCKET`. `build_status_config` blocks are documented below. */
    build_status_config?:   any;
    /** (Required) An identifier for a source in the build project. */
    source_identifier?:     any;
    /** (Required) Type of repository that contains the source code to be built. Valid values: `CODECOMMIT`, `CODEPIPELINE`, `GITHUB`, `GITHUB_ENTERPRISE`, `BITBUCKET`, `S3`, `NO_SOURCE`. */
    type:                   any;
    /** (Required) Whether to fetch Git submodules for the AWS CodeBuild build project. */
    fetch_submodules:       any;
    /** (Optional) Specifies the context of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider. */
    context?:               any;
    /** (Optional) Specifies the target url of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider. */
    target_url?:            any;
}

export interface VpcConfig {
    /** (Required) Security group IDs to assign to running builds. */
    security_group_ids: any;
    /** (Required) Subnet IDs within which to run builds. */
    subnets:            any;
    /** (Required) ID of the VPC within which to run builds. */
    vpc_id:             any;
}