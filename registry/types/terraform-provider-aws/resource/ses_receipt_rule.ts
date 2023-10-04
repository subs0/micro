export interface SesReceiptRule {
    resource: Resource[];
}

export interface Resource {
    ses_receipt_rule: SesReceiptRuleClass;
}

export interface SesReceiptRuleClass {
    /** (Required) The name of the rule */
    name:               any;
    /** (Required) The name of the rule set */
    rule_set_name:      any;
    /** (Optional) The name of the rule to place this rule after */
    after?:             any;
    /** (Optional) If true, the rule will be enabled */
    enabled?:           any;
    /** (Optional) A list of email addresses */
    recipients?:        any;
    /** (Optional) If true, incoming emails will be scanned for spam and viruses */
    scan_enabled?:      any;
    /** (Optional) `Require` or `Optional` */
    tls_policy?:        any;
    /** (Optional) A list of Add Header Action blocks. Documented below. */
    add_header_action?: any;
    /** (Optional) A list of Bounce Action blocks. Documented below. */
    bounce_action?:     any;
    /** (Optional) A list of Lambda Action blocks. Documented below. */
    lambda_action?:     any;
    /** (Optional) A list of S3 Action blocks. Documented below. */
    s3_action?:         any;
    /** (Optional) A list of SNS Action blocks. Documented below. */
    sns_action?:        any;
    /** (Optional) A list of Stop Action blocks. Documented below. */
    stop_action?:       any;
    /** (Optional) A list of WorkMail Action blocks. Documented below. */
    workmail_action?:   any;
    /** (Required) The name of the header to add */
    header_name:        any;
    /** (Required) The value of the header to add */
    header_value:       any;
    /** (Required) The position of the action in the receipt rule */
    position:           any;
    /** (Required) The message to send */
    message:            any;
    /** (Required) The email address of the sender */
    sender:             any;
    /** (Required) The RFC 5321 SMTP reply code */
    smtp_reply_code:    any;
    /** (Optional) The RFC 3463 SMTP enhanced status code */
    status_code?:       any;
    /** (Required) The ARN of an SNS topic to notify */
    topic_arn:          any;
    /** (Required) The ARN of the Lambda function to invoke */
    function_arn:       any;
    /** (Optional) `Event` or `RequestResponse` */
    invocation_type?:   any;
    /** (Required) The name of the S3 bucket */
    bucket_name:        any;
    /** (Optional) The ARN of the KMS key */
    kms_key_arn?:       any;
    /** (Optional) The key prefix of the S3 bucket */
    object_key_prefix?: any;
    /** (Optional) The encoding to use for the email within the Amazon SNS notification. Default value is `UTF-8`. */
    encoding?:          any;
    /** (Required) The scope to apply. The only acceptable value is `RuleSet`. */
    scope:              any;
    /** (Required) The ARN of the WorkMail organization */
    organization_arn:   any;
}