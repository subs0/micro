export interface GameliftGameSessionQueue {
    resource: Resource[];
}

export interface Resource {
    gamelift_game_session_queue: GameliftGameSessionQueueClass;
}

export interface GameliftGameSessionQueueClass {
    /** (Required) Name of the session queue. */
    name:                                           any;
    /** (Required) Maximum time a game session request can remain in the queue. */
    timeout_in_seconds:                             any;
    /** (Optional) Information to be added to all events that are related to this game session queue. */
    custom_event_data?:                             any;
    /** (Optional) List of fleet/alias ARNs used by session queue for placing game sessions. */
    destinations?:                                  any;
    /** (Optional) An SNS topic ARN that is set up to receive game session placement notifications. */
    notification_target?:                           any;
    /** (Optional) One or more policies used to choose fleet based on player latency. See below. */
    player_latency_policy?:                         any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                          any;
    /** (Required) Maximum latency value that is allowed for any player. */
    maximum_individual_player_latency_milliseconds: any;
    /** (Optional) Length of time that the policy is enforced while placing a new game session. Absence of value for this attribute means that the policy is enforced until the queue times out. */
    policy_duration_seconds?:                       any;
}