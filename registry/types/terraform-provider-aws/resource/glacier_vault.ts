export interface GlacierVault {
    resource: Resource[];
}

export interface Resource {
    glacier_vault: GlacierVaultClass;
}

export interface GlacierVaultClass {
    /** (Required) The name of the Vault. Names can be between 1 and 255 characters long and the valid characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period). */
    name:           any;
    /** (Optional) The policy document. This is a JSON formatted string. */
    access_policy?: any;
    /** (Optional) The notifications for the Vault. Fields documented below. */
    notification?:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
    /** (Required) You can configure a vault to publish a notification for `ArchiveRetrievalCompleted` and `InventoryRetrievalCompleted` events. */
    events:         any;
    /** (Required) The SNS Topic ARN. */
    sns_topic:      any;
}