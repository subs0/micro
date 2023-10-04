export interface NetworkmanagerCoreNetworkPolicyDocument {
    data: Datum[];
}

export interface Datum {
    networkmanager_core_network_policy_document: NetworkmanagerCoreNetworkPolicyDocumentClass;
}

export interface NetworkmanagerCoreNetworkPolicyDocumentClass {
    "The following arguments are available:"?: any;
    "`attachment_policies`"?:                  any;
    "`action`"?:                               any;
    "`conditions`"?:                           any;
    "`core_network_configuration`"?:           any;
    "`edge_locations`"?:                       any;
    "`segments`"?:                             any;
    "`segment_actions`"?:                      any;
}