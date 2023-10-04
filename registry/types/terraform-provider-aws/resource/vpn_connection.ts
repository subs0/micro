export interface VPNConnection {
    resource: Resource[];
}

export interface Resource {
    vpn_connection: { [key: any]: string };
}