export interface GameliftScript {
    resource: Resource[];
}

export interface Resource {
    gamelift_script: GameliftScriptClass;
}

export interface GameliftScriptClass {
    /** (Required) Name of the script */
    name:              any;
    /** (Optional) Information indicating where your game script files are stored. See below. */
    storage_location?: any;
    /** (Optional) Version that is associated with this script. */
    version?:          any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
    /** (Optional) A data object containing your Realtime scripts and dependencies as a zip  file. The zip file can have one or multiple files. Maximum size of a zip file is 5 MB. */
    zip_file?:         any;
    /** (Required) Name of your S3 bucket. */
    bucket:            any;
    /** (Required) Name of the zip file containing your script files. */
    key:               any;
    /** (Required) ARN of the access role that allows Amazon GameLift to access your S3 bucket. */
    role_arn:          any;
    /** (Optional) A specific version of the file. If not set, the latest version of the file is retrieved. */
    object_version?:   any;
}