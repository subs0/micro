export interface NetworkmanagerSites {
    data: Datum[];
}

export interface Datum {
    networkmanager_sites: NetworkmanagerSitesClass;
}

export interface NetworkmanagerSitesClass {
    /** (Required) ID of the Global Network of the sites to retrieve. */
    global_network_id: any;
    /** (Optional) Restricts the list to the sites with these tags. */
    tags?:             any;
}