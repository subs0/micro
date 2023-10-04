export interface ServicecatalogServiceAction {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_service_action: ServicecatalogServiceActionClass;
}

export interface ServicecatalogServiceActionClass {
    /** (Required) Self-service action definition configuration block. Detailed below. */
    definition:       any;
    /** (Required) Name of the SSM document. For example, `AWS-RestartEC2Instance`. If you are using a shared SSM document, you must provide the ARN instead of the name. */
    name:             any;
    /** (Optional) Language code. Valid values are `en` (English), `jp` (Japanese), and `zh` (Chinese). Default is `en`. */
    accept_language?: any;
    /** (Optional) Self-service action description. */
    description?:     any;
    /** (Optional) ARN of the role that performs the self-service actions on your behalf. For example, `arn:aws:iam::12345678910:role/ActionRole`. To reuse the provisioned product launch role, set to `LAUNCH_ROLE`. */
    assume_role?:     any;
    /** (Optional) List of parameters in JSON format. For example: `[{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"}]` or `[{\"Name\":\"InstanceId\",\"Type\":\"TEXT_VALUE\"}]`. */
    parameters?:      any;
    /** (Optional) Service action definition type. Valid value is `SSM_AUTOMATION`. Default is `SSM_AUTOMATION`. */
    type?:            any;
    /** (Required) SSM document version. For example, `1`. */
    version:          any;
}