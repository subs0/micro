export interface NetworkmanagerLinks {
    data: Datum[];
}

export interface Datum {
    networkmanager_links: NetworkmanagerLinksClass;
}

export interface NetworkmanagerLinksClass {
    /** (Required) ID of the Global Network of the links to retrieve. */
    global_network_id: any;
    /** (Optional) Link provider to retrieve. */
    provider_name?:    any;
    /** (Optional) ID of the site of the links to retrieve. */
    site_id?:          any;
    /** (Optional) Restricts the list to the links with these tags. */
    tags?:             any;
    /** (Optional) Link type to retrieve. */
    type?:             any;
}