export interface CloudfrontOriginAccessControl {
    resource: Resource[];
}

export interface Resource {
    cloudfront_origin_access_control: CloudfrontOriginAccessControlClass;
}

export interface CloudfrontOriginAccessControlClass {
    /** (Required) A name that identifies the Origin Access Control. */
    name:                              any;
    /** (Optional) The description of the Origin Access Control. Defaults to "Managed by Terraform" if omitted. */
    description?:                      any;
    /** (Required) The type of origin that this Origin Access Control is for. Valid values are `s3`, and `mediastore`. */
    origin_access_control_origin_type: any;
    /** (Required) Specifies which requests CloudFront signs. Specify `always` for the most common use case. Allowed values: `always`, `never`, and `no-override`. */
    signing_behavior:                  any;
    /** (Required) Determines how CloudFront signs (authenticates) requests. The only valid value is `sigv4`. */
    signing_protocol:                  any;
}