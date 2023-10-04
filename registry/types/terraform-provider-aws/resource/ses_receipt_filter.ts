export interface SesReceiptFilter {
    resource: Resource[];
}

export interface Resource {
    ses_receipt_filter: SesReceiptFilterClass;
}

export interface SesReceiptFilterClass {
    /** (Required) The name of the filter */
    name:   any;
    /** (Required) The IP address or address range to filter, in CIDR notation */
    cidr:   any;
    /** (Required) Block or Allow */
    policy: any;
}