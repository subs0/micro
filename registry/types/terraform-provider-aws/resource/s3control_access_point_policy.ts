export interface S3ControlAccessPointPolicy {
    resource: Resource[];
}

export interface Resource {
    s3control_access_point_policy: S3ControlAccessPointPolicyClass;
}

export interface S3ControlAccessPointPolicyClass {
    /** (Required) The ARN of the access point that you want to associate with the specified policy. */
    access_point_arn: any;
    /** (Required) The policy that you want to apply to the specified access point. */
    policy:           any;
}