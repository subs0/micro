export interface GameliftBuild {
    resource: Resource[];
}

export interface Resource {
    gamelift_build: GameliftBuildClass;
}

export interface GameliftBuildClass {
    /** (Required) Name of the build */
    name:             any;
    /** (Required) Operating system that the game server binaries are built to run onE.g., `WINDOWS_2012`, `AMAZON_LINUX` or `AMAZON_LINUX_2`. */
    operating_system: any;
    /** (Required) Information indicating where your game build files are stored. See below. */
    storage_location: any;
    /** (Optional) Version that is associated with this build. */
    version?:         any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
    /** (Required) Name of your S3 bucket. */
    bucket:           any;
    /** (Required) Name of the zip file containing your build files. */
    key:              any;
    /** (Required) ARN of the access role that allows Amazon GameLift to access your S3 bucket. */
    role_arn:         any;
    /** (Optional) A specific version of the file. If not set, the latest version of the file is retrieved. */
    object_version?:  any;
}