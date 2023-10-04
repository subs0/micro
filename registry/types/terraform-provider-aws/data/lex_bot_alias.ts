export interface LexBotAlias {
    data: Datum[];
}

export interface Datum {
    lex_bot_alias: LexBotAliasClass;
}

export interface LexBotAliasClass {
    /** (Required) Name of the bot. */
    bot_name: any;
    /** (Required) Name of the bot alias. The name is case sensitive. */
    name:     any;
}