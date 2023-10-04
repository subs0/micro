export interface LexIntent {
    resource: Resource[];
}

export interface Resource {
    lex_intent: LexIntentClass;
}

export interface LexIntentClass {
    /** (Optional) The statement that you want Amazon Lex to convey to the user */
    conclusion_statement?:    any;
    /** (Optional) Prompts the user to confirm the intent. This question should */
    confirmation_prompt?:     any;
    /** (Optional) Determines if a new slot type version is created when the initial */
    create_version?:          any;
    /** (Optional) Specifies a Lambda function to invoke for each user input. You can */
    dialog_code_hook?:        any;
    follow_up_prompt?:        FollowUpPrompt;
    fulfillment_activity:     FulfillmentActivity;
    /** (Optional) A unique identifier for the built-in intent to base this */
    parent_intent_signature?: any;
    slot?:                    Slot;
    /** (Required) Prompts for information from the user. Attributes are documented under [prompt](#prompt). */
    prompt:                   Prompt;
    /** (Optional) A description of the Lambda function that is run to fulfill the intent. */
    code_hook?:               CodeHook;
    /** (Required) A set of messages, each of which provides a message string and its type. */
    message:                  Message;
}

export interface CodeHook {
    /** (Required) The version of the request-response that you want Amazon Lex to use */
    message_version: any;
    /** (Required) The Amazon Resource Name (ARN) of the Lambda function. */
    uri:             any;
}

export interface FollowUpPrompt {
    /** (Required) Prompts for information from the user. Attributes are documented under [prompt](#prompt). */
    prompt:              any;
    /** (Optional) If the user answers "no" to the question defined in the prompt field, */
    rejection_statement: any;
}

export interface FulfillmentActivity {
    /** (Required) How the intent should be fulfilled, either by running a Lambda function or by */
    type:       any;
    /** (Optional) A description of the Lambda function that is run to fulfill the intent. */
    code_hook?: any;
}

export interface Message {
    /** (Required) The text of the message. Must be less than or equal to 1000 characters in length. */
    content:       any;
    /** (Required) The content type of the message string. */
    content_type:  any;
    /** (Optional) Identifies the message group that the message belongs to. When a group */
    group_number?: any;
}

export interface Prompt {
    /** (Required) The number of times to prompt the user for information. Must be a number between 1 and 5 (inclusive). */
    max_attempts:   any;
    /** (Required) A set of messages, each of which provides a message string and its type. */
    message:        any;
    /** (Optional) The response card. Amazon Lex will substitute session attributes and */
    response_card?: any;
}

export interface Slot {
    /** (Required) The name of the intent slot that you want to create. The name is case sensitive. Must be less than or equal to 100 characters in length. */
    name:                     any;
    /** (Required) Specifies whether the slot is required or optional. */
    slot_constraint:          any;
    /** (Optional) A description of the bot. Must be less than or equal to 200 characters in length. */
    description:              any;
    /** (Optional) Directs Lex the order in which to elicit this slot value from the user. */
    priority:                 any;
    /** (Optional) The response card. Amazon Lex will substitute session attributes and */
    response_card:            any;
    /** (Optional) If you know a specific pattern with which users might respond to */
    sample_utterances:        any;
    /** (Optional) The type of the slot, either a custom slot type that you defined or one of */
    slot_type:                any;
    /** (Optional) The version of the slot type. Must be less than or equal to 64 characters in length. */
    slot_type_version:        any;
    /** (Optional) The prompt that Amazon Lex uses to elicit the slot value */
    value_elicitation_prompt: any;
}