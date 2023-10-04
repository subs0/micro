export interface LexBotAlias {
    resource: Resource[];
}

export interface Resource {
    lex_bot_alias: LexBotAliasClass;
}

export interface LexBotAliasClass {
    /** (Required) The name of the bot. */
    bot_name:           any;
    /** (Required) The name of the bot. */
    bot_version:        any;
    conversation_logs?: ConversationLogs;
    /** (Optional) A description of the alias. Must be less than or equal to 200 characters in length. */
    description?:       any;
    /** (Required) The name of the alias. The name is not case sensitive. Must be less than or equal to 100 characters in length. */
    name:               any;
    /** (Optional) The settings for your conversation logs. You can log text, audio, or both. Attributes are documented under [log_settings](#log_settings). */
    log_settings?:      LogSettings;
}

export interface ConversationLogs {
    /** (Required) The Amazon Resource Name (ARN) of the IAM role used to write your logs to CloudWatch Logs or an S3 bucket. Must be between 20 and 2048 characters in length. */
    iam_role_arn: any;
    /** (Optional) The settings for your conversation logs. You can log text, audio, or both. Attributes are documented under [log_settings](#log_settings). */
    log_settings: any;
}

export interface LogSettings {
    /** (Required) The destination where logs are delivered. Options are `CLOUDWATCH_LOGS` or `S3`. */
    destination:     any;
    /** (Optional) The Amazon Resource Name (ARN) of the key used to encrypt audio logs in an S3 bucket. This can only be specified when `destination` is set to `S3`. Must be between 20 and 2048 characters in length. */
    kms_key_arn:     any;
    /** (Required) The type of logging that is enabled. Options are `AUDIO` or `TEXT`. */
    log_type:        any;
    /** (Required) The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs are delivered. Must be less than or equal to 2048 characters in length. */
    resource_arn:    any;
    /** (Computed) The prefix of the S3 object key for `AUDIO` logs or the log stream name for `TEXT` logs. */
    resource_prefix: any;
}