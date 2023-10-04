export interface EmrStudioSessionMapping {
    resource: Resource[];
}

export interface Resource {
    emr_studio_session_mapping: EmrStudioSessionMappingClass;
}

export interface EmrStudioSessionMappingClass {
    /** (Optional) The name of the user or group from the Amazon Web Services SSO Identity Store. */
    identity_name?:     any;
    /** (Required) Specifies whether the identity to map to the Amazon EMR Studio is a `USER` or a `GROUP`. */
    identity_type:      any;
    /** (Required) The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. You should specify the ARN for the session policy that you want to apply, not the ARN of your user role. */
    session_policy_arn: any;
    /** (Required) The ID of the Amazon EMR Studio to which the user or group will be mapped. */
    studio_id:          any;
}