export interface LexBot {
    resource: Resource[];
}

export interface Resource {
    lex_bot: LexBotClass;
}

export interface LexBotClass {
    /** (Required) The message that Amazon Lex uses to abort a conversation. Attributes are documented under [statement](#statement). */
    abort_statement:                  any;
    /** (Required) By specifying true, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. For more information see the [Amazon Lex FAQ](https://aws.amazon.com/lex/faqs#data-security) and the [Amazon Lex PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-childDirected). */
    child_directed:                   any;
    /** (Required) The message that Amazon Lex uses when it doesn't understand the user's request. Attributes are documented under [prompt](#prompt). */
    clarification_prompt:             any;
    /** (Optional) Determines if a new bot version is created when the initial resource is created and on each update. Defaults to `false`. */
    create_version?:                  any;
    /** (Optional) A description of the bot. Must be less than or equal to 200 characters in length. */
    description?:                     any;
    /** (Optional) When set to true user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify detectSentiment, the default is `false`. */
    detect_sentiment?:                any;
    /** (Optional) Set to `true` to enable access to natural language understanding improvements. When you set the `enable_model_improvements` parameter to true you can use the `nlu_intent_confidence_threshold` parameter to configure confidence scores. For more information, see [Confidence Scores](https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html). You can only set the `enable_model_improvements` parameter in certain Regions. If you set the parameter to true, your bot has access to accuracy improvements. For more information see the [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-enableModelImprovements). */
    enable_model_improvements?:       any;
    /** (Optional) The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. Default is `300`. Must be a number between 60 and 86400 (inclusive). */
    idle_session_ttl_in_seconds?:     any;
    /** (Optional) Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. For available locales, see [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-locale). Default is `en-US`. */
    locale?:                          any;
    intent:                           Intent;
    /** (Required) The name of the bot that you want to create, case sensitive. Must be between 2 and 50 characters in length. */
    name:                             any;
    /** (Optional) Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents in a PostContent or PostText response. AMAZON.FallbackIntent and AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. For more information see [Amazon Lex Bot PutBot API Docs](https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html#lex-PutBot-request-nluIntentConfidenceThreshold) This value requires `enable_model_improvements` to be set to `true` and the default is `0`. Must be a float between 0 and 1. */
    nlu_intent_confidence_threshold?: any;
    /** (Optional) If you set the `process_behavior` element to `BUILD`, Amazon Lex builds the bot so that it can be run. If you set the element to `SAVE` Amazon Lex saves the bot, but doesn't build it. Default is `SAVE`. */
    process_behavior?:                any;
    /** (Optional) The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see [Available Voices](http://docs.aws.amazon.com/polly/latest/dg/voicelist.html) in the Amazon Polly Developer Guide. */
    voice_id?:                        any;
    /** (Required) The number of times to prompt the user for information. */
    max_attempts:                     any;
    message:                          Message;
    /** (Optional) The response card. Amazon Lex will substitute session attributes and */
    response_card?:                   any;
}

export interface Intent {
    /** (Required) The name of the intent. Must be less than or equal to 100 characters in length. */
    intent_name:    any;
    /** (Required) The version of the intent. Must be less than or equal to 64 characters in length. */
    intent_version: any;
}

export interface Message {
    /** (Required) The text of the message. */
    content:       any;
    /** (Required) The content type of the message string. */
    content_type:  any;
    /** (Optional) Identifies the message group that the message belongs to. When a group */
    group_number?: any;
}