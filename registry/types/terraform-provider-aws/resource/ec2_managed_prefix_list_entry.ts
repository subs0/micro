export interface Ec2ManagedPrefixListEntry {
    resource: Resource[];
}

export interface Resource {
    ec2_managed_prefix_list_entry: Ec2ManagedPrefixListEntryClass;
}

export interface Ec2ManagedPrefixListEntryClass {
    /** (Required) CIDR block of this entry. */
    cidr:           any;
    /** (Optional) Description of this entry. Please note that due to API limitations, updating only the description of an entry will require recreating the entry. */
    description?:   any;
    /** (Required) CIDR block of this entry. */
    prefix_list_id: any;
}