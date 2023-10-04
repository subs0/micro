export interface SfnAlias {
    resource: Resource[];
}

export interface Resource {
    sfn_alias: SfnAliasClass;
}

export interface SfnAliasClass {
    /** (Required) Name for the alias you are creating. */
    name:                      any;
    /** (Optional) Description of the alias. */
    description?:              any;
    /** (Required) The StateMachine alias' route configuration settings. Fields documented below */
    routing_configuration:     any;
    /** (Required) The Amazon Resource Name (ARN) of the state machine version. */
    state_machine_version_arn: any;
    /** (Required) Percentage of traffic routed to the state machine version. */
    weight:                    any;
}