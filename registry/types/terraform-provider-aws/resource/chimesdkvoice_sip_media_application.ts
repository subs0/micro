export interface ChimesdkvoiceSIPMediaApplication {
    resource: Resource[];
}

export interface Resource {
    chimesdkvoice_sip_media_application: ChimesdkvoiceSIPMediaApplicationClass;
}

export interface ChimesdkvoiceSIPMediaApplicationClass {
    /** (Required) The AWS Region in which the AWS Chime SDK Voice Sip Media Application is created. */
    aws_region: any;
    /** (Required)  List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported. See [`endpoints`](#endpoints). */
    endpoints:  any;
    /** (Required) The name of the AWS Chime SDK Voice Sip Media Application. */
    name:       any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:      any;
    /** (Required) Valid Amazon Resource Name (ARN) of the Lambda function, version, or alias. The function must be created in the same AWS Region as the SIP media application. */
    lambda_arn: any;
}