export interface SsmcontactsContactChannel {
    resource: Resource[];
}

export interface Resource {
    ssmcontacts_contact_channel: SsmcontactsContactChannelClass;
}

export interface SsmcontactsContactChannelClass {
    "~> **NOTE:** The contact channel needs to be activated in the AWS Systems Manager console, otherwise it can't be used to engage the contact. See the [Contacts section of the Incident Manager User Guide](https://docs.aws.amazon.com/incident-manager/latest/userguide/contacts.html) for more information."?: any;
    /** 

- `simple_address` - (Required) Details to engage this contact channel. The expected format depends on the contact channel type and is described in the [`ContactChannelAddress` section of the SSM Contacts API Reference](https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ContactChannelAddress.html). */
    delivery_address?:                                                                                                                                                                                                                                                                                                any;
}