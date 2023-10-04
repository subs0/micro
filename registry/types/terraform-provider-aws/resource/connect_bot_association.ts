export interface ConnectBotAssociation {
    resource: Resource[];
}

export interface Resource {
    connect_bot_association: ConnectBotAssociationClass;
}

export interface ConnectBotAssociationClass {
    /** (Required) The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance. */
    instance_id: any;
    lex_bot:     LexBot;
}

export interface LexBot {
    /** (Required) The name of the Amazon Lex (V1) bot. */
    name:        any;
    /** (Optional) The Region that the Amazon Lex (V1) bot was created in. Defaults to current region. */
    lex_region?: any;
}