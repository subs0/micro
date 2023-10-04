export interface CodebuildResourcePolicy {
    resource: Resource[];
}

export interface Resource {
    codebuild_resource_policy: CodebuildResourcePolicyClass;
}

export interface CodebuildResourcePolicyClass {
    /** (Required) The ARN of the Project or ReportGroup resource you want to associate with a resource policy. */
    resource_arn: any;
    /** (Required) A JSON-formatted resource policy. For more information, see [Sharing a Projec](https://docs.aws.amazon.com/codebuild/latest/userguide/project-sharing.html#project-sharing-share) and [Sharing a Report Group](https://docs.aws.amazon.com/codebuild/latest/userguide/report-groups-sharing.html#report-groups-sharing-share). */
    policy:       any;
}