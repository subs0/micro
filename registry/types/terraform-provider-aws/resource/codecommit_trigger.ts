export interface CodecommitTrigger {
    resource: Resource[];
}

export interface Resource {
    codecommit_trigger: CodecommitTriggerClass;
}

export interface CodecommitTriggerClass {
    /** (Required) The name for the repository. This needs to be less than 100 characters. */
    repository_name: any;
    /** (Required) The name of the trigger. */
    name:            any;
    /** (Required) The ARN of the resource that is the target for a trigger. For example, the ARN of a topic in Amazon Simple Notification Service (SNS). */
    destination_arn: any;
    /** (Optional) Any custom data associated with the trigger that will be included in the information sent to the target of the trigger. */
    custom_data?:    any;
    /** (Optional) The branches that will be included in the trigger configuration. If no branches are specified, the trigger will apply to all branches. */
    branches?:       any;
    /** (Required) The repository events that will cause the trigger to run actions in another service, such as sending a notification through Amazon Simple Notification Service (SNS). If no events are specified, the trigger will run for all repository events. Event types include: `all`, `updateReference`, `createReference`, `deleteReference`. */
    events:          any;
}