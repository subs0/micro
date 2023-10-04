export interface GameliftAlias {
    resource: Resource[];
}

export interface Resource {
    gamelift_alias: GameliftAliasClass;
}

export interface GameliftAliasClass {
    /** (Required) Name of the alias. */
    name:             any;
    /** (Optional) Description of the alias. */
    description?:     any;
    /** (Required) Specifies the fleet and/or routing type to use for the alias. */
    routing_strategy: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
    /** (Optional) ID of the GameLift Fleet to point the alias to. */
    fleet_id?:        any;
    /** (Optional) Message text to be used with the `TERMINAL` routing strategy. */
    message?:         any;
    /** (Required) Type of routing strategyE.g., `SIMPLE` or `TERMINAL` */
    type:             any;
}