export interface NetworkmanagerLink {
    data: Datum[];
}

export interface Datum {
    networkmanager_link: NetworkmanagerLinkClass;
}

export interface NetworkmanagerLinkClass {
    /** (Required) ID of the Global Network of the link to retrieve. */
    global_network_id: any;
    /** (Required) ID of the specific link to retrieve. */
    link_id:           any;
}