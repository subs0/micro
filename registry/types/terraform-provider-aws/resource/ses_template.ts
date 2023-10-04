export interface SesTemplate {
    resource: Resource[];
}

export interface Resource {
    ses_template: SesTemplateClass;
}

export interface SesTemplateClass {
    /** (Required) The name of the template. Cannot exceed 64 characters. You will refer to this name when you send email. */
    name:     any;
    /** (Optional) The HTML body of the email. Must be less than 500KB in size, including both the text and HTML parts. */
    html?:    any;
    /** (Optional) The subject line of the email. */
    subject?: any;
    /** (Optional) The email body that will be visible to recipients whose email clients do not display HTML. Must be less than 500KB in size, including both the text and HTML parts. */
    text?:    any;
}