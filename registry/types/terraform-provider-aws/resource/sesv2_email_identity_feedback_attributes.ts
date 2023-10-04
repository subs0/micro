export interface Sesv2EmailIdentityFeedbackAttributes {
    resource: Resource[];
}

export interface Resource {
    sesv2_email_identity_feedback_attributes: Sesv2EmailIdentityFeedbackAttributesClass;
}

export interface Sesv2EmailIdentityFeedbackAttributesClass {
    /** (Required) The email identity. */
    email_identity:            any;
    /** (Optional) Sets the feedback forwarding configuration for the identity. */
    email_forwarding_enabled?: any;
}