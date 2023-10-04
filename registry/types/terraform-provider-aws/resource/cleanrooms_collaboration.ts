export interface CleanroomsCollaboration {
    resource: Resource[];
}

export interface Resource {
    cleanrooms_collaboration: CleanroomsCollaborationClass;
}

export interface CleanroomsCollaborationClass {
    /** (Required) - The name of the collaboration.  Collaboration names do not need to be unique. */
    name:                                                                    any;
    /** (Required) - A description for a collaboration. */
    description:                                                             any;
    /** (Required - Forces new resource) - The list of member abilities for the creator of the collaboration.  Valid values [may be found here](https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html#API-CreateCollaboration-request-creatorMemberAbilities). */
    creator_member_abilities?:                                               any;
    /** (Required - Forces new resource) - The name for the member record for the collaboration creator. */
    creator_display_name?:                                                   any;
    /** (Required - Forces new resource) - Determines if members of the collaboration can enable query logs within their own. */
    query_log_status?:                                                       any;
    /** (Required - Forces new resource) - a collection of settings which determine how the [c3r client](https://docs.aws.amazon.com/clean-rooms/latest/userguide/crypto-computing.html) will encrypt data for use within this collaboration. */
    data_encryption_metadata?:                                               any;
    "data_encryption_metadata.allow_clear_text"?:                            any;
    "data_encryption_metadata.allow_duplicates"?:                            any;
    "data_encryption_metadata.allow_joins_on_columns_with_different_names"?: any;
    "data_encryption_metadata.preserve_nulls"?:                              any;
    /** (Optional - Forces new resource) - Additional members of the collaboration which will be invited to join the collaboration. */
    member?:                                                                 any;
    "member.account_id"?:                                                    any;
    "member.display_name"?:                                                  any;
    "member.member_abilities"?:                                              any;
    /** (Optional) - Key value pairs which tag the collaboration. */
    tags?:                                                                   any;
}