export interface CustomerGateway {
    data: Datum[];
}

export interface Datum {
    customer_gateway: CustomerGatewayClass;
}

export interface CustomerGatewayClass {
    /** (Optional) ID of the gateway. */
    id?:     any;
    /** (Optional) One or more [name-value pairs][dcg-filters] to filter by. */
    filter?: any;
}