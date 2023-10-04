export interface Lexv2ModelsBot {
    resource: Resource[];
}

export interface Resource {
    lexv2models_bot: Lexv2ModelsBotClass;
}

export interface Lexv2ModelsBotClass {
    /** Name of the bot. The bot name must be unique in the account that creates the bot. Type String. Length Constraints: Minimum length of 1. Maximum length of 100. */
    name?:                        any;
    /** Provides information on additional privacy protections Amazon Lex should use with the bot's data. See [`data_privacy`](#data-privacy) */
    data_privacy?:                any;
    /** Time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds. */
    idle_session_ttl_in_seconds?: any;
    /** ARN of an IAM role that has permission to access the bot. */
    role_arn?:                    any;
    /** List of bot members in a network to be created. See [`bot_members`](#bot-members). */
    members?:                     any;
    /** List of tags to add to the bot. You can only add tags when you create a bot. */
    bot_tags?:                    any;
    /** Type of a bot to create. */
    bot_type?:                    any;
    /** Description of the bot. It appears in lists to help you identify a particular bot. */
    description?:                 any;
    /** List of tags to add to the test alias for a bot. You can only add tags when you create a bot. */
    test_bot_alias_tags?:         any;
}