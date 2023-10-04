export interface Sesv2ContactList {
    resource: Resource[];
}

export interface Resource {
    sesv2_contact_list: Sesv2ContactListClass;
}

export interface Sesv2ContactListClass {
    /** (Required) The name of the contact list. */
    contact_list_name: any;
    /** (Optional) Key-value map of resource tags for the contact list. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
    topic?:            Topic;
}

export interface Topic {
    /** (Required) The default subscription status to be applied to a contact if the contact has not noted their preference for subscribing to a topic. */
    default_subscription_status: any;
    /** (Required) The name of the topic the contact will see. */
    display_name:                any;
    /** (Required) The name of the topic. */
    topic_name:                  any;
    /** (Optional) A description of what the topic is about, which the contact will see. */
    description:                 any;
}