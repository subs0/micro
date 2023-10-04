export interface ConnectPrompt {
    data: Datum[];
}

export interface Datum {
    connect_prompt: ConnectPromptClass;
}

export interface ConnectPromptClass {
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id: any;
    /** (Required) Returns information on a specific Prompt by name */
    name:        any;
}