export interface OpensearchserverlessVpcEndpoint {
    data: Datum[];
}

export interface Datum {
    opensearchserverless_vpc_endpoint: OpensearchserverlessVpcEndpointClass;
}

export interface OpensearchserverlessVpcEndpointClass {
    /** (Required) The unique identifier of the endpoint. */
    vpc_endpoint_id: any;
}