export interface LexBot {
    data: Datum[];
}

export interface Datum {
    lex_bot: LexBotClass;
}

export interface LexBotClass {
    /** (Required) Name of the bot. The name is case sensitive. */
    name:     any;
    /** (Optional) Version or alias of the bot. */
    version?: any;
}