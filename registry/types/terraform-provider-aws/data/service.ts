export interface Service {
    data: Datum[];
}

export interface Datum {
    service: ServiceClass;
}

export interface ServiceClass {
    /** (Optional) DNS name of the service (_e.g.,_ `rds.us-east-1.amazonaws.com`). One of `dns_name`, `reverse_dns_name`, or `service_id` is required. */
    dns_name?:           any;
    /** (Optional) Partition corresponding to the region. */
    partition?:          any;
    /** (Optional) Region of the service (_e.g.,_ `us-west-2`, `ap-northeast-1`). */
    region?:             any;
    /** (Optional) Reverse DNS name of the service (_e.g.,_ `com.amazonaws.us-west-2.s3`). One of `dns_name`, `reverse_dns_name`, or `service_id` is required. */
    reverse_dns_name?:   any;
    /** (Optional) Prefix of the service (_e.g.,_ `com.amazonaws` in AWS Commercial, `cn.com.amazonaws` in AWS China). */
    reverse_dns_prefix?: any;
    /** (Optional) Service (_e.g.,_ `s3`, `rds`, `ec2`). One of `dns_name`, `reverse_dns_name`, or `service_id` is required. */
    service_id?:         any;
}