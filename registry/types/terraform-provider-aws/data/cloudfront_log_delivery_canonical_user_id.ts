export interface CloudfrontLogDeliveryCanonicalUserID {
    data: Datum[];
}

export interface Datum {
    cloudfront_log_delivery_canonical_user_id: CloudfrontLogDeliveryCanonicalUserIDClass;
}

export interface CloudfrontLogDeliveryCanonicalUserIDClass {
    /** (Optional) Region you'd like the zone for. By default, fetches the current region. */
    region?: any;
}