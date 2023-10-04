export interface ConnectInstanceStorageConfig {
    data: Datum[];
}

export interface Datum {
    connect_instance_storage_config: ConnectInstanceStorageConfigClass;
}

export interface ConnectInstanceStorageConfigClass {
    /** (Required) The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID. */
    association_id: any;
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id:    any;
    /** (Required) A valid resource type. Valid Values: `AGENT_EVENTS` | `ATTACHMENTS` | `CALL_RECORDINGS` | `CHAT_TRANSCRIPTS` | `CONTACT_EVALUATIONS` | `CONTACT_TRACE_RECORDS` | `MEDIA_STREAMS` | `REAL_TIME_CONTACT_ANALYSIS_SEGMENTS` | `SCHEDULED_REPORTS` |  `SCREEN_RECORDINGS`. */
    resource_type:  any;
}