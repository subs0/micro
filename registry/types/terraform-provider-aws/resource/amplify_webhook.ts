export interface AmplifyWebhook {
    resource: Resource[];
}

export interface Resource {
    amplify_webhook: AmplifyWebhookClass;
}

export interface AmplifyWebhookClass {
    /** (Required) Unique ID for an Amplify app. */
    app_id:       any;
    /** (Required) Name for a branch that is part of the Amplify app. */
    branch_name:  any;
    /** (Optional) Description for a webhook. */
    description?: any;
}