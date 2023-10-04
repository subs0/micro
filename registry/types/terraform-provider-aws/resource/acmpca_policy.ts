export interface AcmpcaPolicy {
    resource: Resource[];
}

export interface Resource {
    acmpca_policy: AcmpcaPolicyClass;
}

export interface AcmpcaPolicyClass {
    /** (Required) ARN of the private CA to associate with the policy. */
    resource_arn: any;
    /** (Required) JSON-formatted IAM policy to attach to the specified private CA resource. */
    policy:       any;
}