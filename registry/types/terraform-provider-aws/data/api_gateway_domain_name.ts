export interface APIGatewayDomainName {
    data: Datum[];
}

export interface Datum {
    api_gateway_domain_name: APIGatewayDomainNameClass;
}

export interface APIGatewayDomainNameClass {
    /** (Required) Fully-qualified domain name to look up. If no domain name is found, an error will be returned. */
    domain_name: any;
}