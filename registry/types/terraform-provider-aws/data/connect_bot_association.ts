export interface ConnectBotAssociation {
    data: Datum[];
}

export interface Datum {
    connect_bot_association: ConnectBotAssociationClass;
}

export interface ConnectBotAssociationClass {
    /** (Required) Identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance. */
    instance_id: any;
    lex_bot:     LexBot;
}

export interface LexBot {
    /** (Required) Name of the Amazon Lex (V1) bot. */
    name:        any;
    /** (Optional) Region that the Amazon Lex (V1) bot was created in. */
    lex_region?: any;
}