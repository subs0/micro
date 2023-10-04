export interface NetworkmanagerSite {
    data: Datum[];
}

export interface Datum {
    networkmanager_site: NetworkmanagerSiteClass;
}

export interface NetworkmanagerSiteClass {
    /** (Required) ID of the Global Network of the site to retrieve. */
    global_network_id: any;
    /** (Required) ID of the specific site to retrieve. */
    site_id:           any;
}