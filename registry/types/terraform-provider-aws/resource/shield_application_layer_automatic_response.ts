export interface ShieldApplicationLayerAutomaticResponse {
    resource: Resource[];
}

export interface Resource {
    shield_application_layer_automatic_response: ShieldApplicationLayerAutomaticResponseClass;
}

export interface ShieldApplicationLayerAutomaticResponseClass {
    /** (Required) ARN of the resource to protect (Cloudfront Distributions and ALBs only at this time). */
    resource_arn: any;
    /** (Required) One of `COUNT` or `BLOCK` */
    action:       any;
}