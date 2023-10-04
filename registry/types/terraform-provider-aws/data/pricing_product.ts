export interface PricingProduct {
    data: Datum[];
}

export interface Datum {
    pricing_product: PricingProductClass;
}

export interface PricingProductClass {
    /** (Required) Code of the service. Available service codes can be fetched using the DescribeServices pricing API call. */
    service_code: any;
    /** 

* `field` (Required) Product attribute name that you want to filter on.
* `value` (Required) Product attribute value that you want to filter on. */
    filters:      any;
}