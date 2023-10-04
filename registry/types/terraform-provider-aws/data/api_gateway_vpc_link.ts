export interface APIGatewayVpcLink {
    data: Datum[];
}

export interface Datum {
    api_gateway_vpc_link: APIGatewayVpcLinkClass;
}

export interface APIGatewayVpcLinkClass {
    /** (Required) Name of the API Gateway VPC Link to look up. If no API Gateway VPC Link is found with this name, an error will be returned. */
    name: any;
}