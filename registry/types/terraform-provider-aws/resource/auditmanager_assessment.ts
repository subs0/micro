export interface AuditmanagerAssessment {
    resource: Resource[];
}

export interface Resource {
    auditmanager_assessment: AuditmanagerAssessmentClass;
}

export interface AuditmanagerAssessmentClass {
    /** (Required) Name of the assessment. */
    name:                           any;
    assessment_reports_destination: AssessmentReportsDestination;
    /** (Required) Unique identifier of the framework the assessment will be created from. */
    framework_id:                   any;
    roles:                          Roles;
    scope?:                         Scope;
    /** (Optional) Description of the assessment. */
    description?:                   any;
    /** (Optional) A map of tags to assign to the assessment. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
    /** Amazon Web Services accounts that are in scope for the assessment. See [`aws_accounts`](#aws_accounts) below. */
    aws_accounts?:                  AwsAccounts;
    /** Amazon Web Services services that are included in the scope of the assessment. See [`aws_services`](#aws_services) below. */
    aws_services?:                  AwsServices;
}

export interface AssessmentReportsDestination {
    /** (Required) Destination of the assessment report. This value be in the form `s3://{bucket_name}`. */
    destination:      any;
    /** (Required) Destination type. Currently, `S3` is the only valid value. */
    destination_type: any;
}

export interface AwsAccounts {
    /** (Required) Identifier for the Amazon Web Services account. */
    id: any;
}

export interface AwsServices {
    /** (Required) Name of the Amazon Web Service. */
    service_name: any;
}

export interface Roles {
    /** (Required) Amazon Resource Name (ARN) of the IAM role. */
    role_arn:  any;
    /** (Required) Type of customer persona. For assessment creation, type must always be `PROCESS_OWNER`. */
    role_type: any;
}

export interface Scope {
    /** Amazon Web Services accounts that are in scope for the assessment. See [`aws_accounts`](#aws_accounts) below. */
    aws_accounts: any;
    /** Amazon Web Services services that are included in the scope of the assessment. See [`aws_services`](#aws_services) below. */
    aws_services: any;
}