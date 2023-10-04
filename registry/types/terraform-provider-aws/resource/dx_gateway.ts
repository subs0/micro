export interface DxGateway {
    resource: Resource[];
}

export interface Resource {
    dx_gateway: DxGatewayClass;
}

export interface DxGatewayClass {
    /** (Required) The name of the connection. */
    name:            any;
    /** (Required) The ASN to be configured on the Amazon side of the connection. The ASN must be in the private range of 64,512 to 65,534 or 4,200,000,000 to 4,294,967,294. */
    amazon_side_asn: any;
}