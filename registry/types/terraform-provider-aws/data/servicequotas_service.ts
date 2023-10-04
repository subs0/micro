export interface ServicequotasService {
    data: Datum[];
}

export interface Datum {
    servicequotas_service: ServicequotasServiceClass;
}

export interface ServicequotasServiceClass {
    /** (Required) Service name to lookup within Service Quotas. Available values can be found with the [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html). */
    service_name: any;
}