export interface ServicequotasServiceQuota {
    resource: Resource[];
}

export interface Resource {
    servicequotas_service_quota: ServicequotasServiceQuotaClass;
}

export interface ServicequotasServiceQuotaClass {
    /** (Required) Code of the service quota to track. For example: `L-F678F1CE`. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html). */
    quota_code:   any;
    /** (Required) Code of the service to track. For example: `vpc`. Available values can be found with the [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html). */
    service_code: any;
    /** (Required) Float specifying the desired value for the service quota. If the desired value is higher than the current value, a quota increase request is submitted. When a known request is submitted and pending, the value reflects the desired value of the pending request. */
    value:        any;
}