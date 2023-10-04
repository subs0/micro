export interface AppflowConnectorProfile {
    resource: Resource[];
}

export interface Resource {
    appflow_connector_profile: AppflowConnectorProfileClass;
}

export interface AppflowConnectorProfileClass {
    "The AppFlow connector profile argument layout is a complex structure. The following top-level arguments are supports:"?: any;
    "Connector Profile Config"?:                                                                                              any;
    "Connector Profile Credentials"?:                                                                                         any;
    "Connector Profile Properties"?:                                                                                          any;
}