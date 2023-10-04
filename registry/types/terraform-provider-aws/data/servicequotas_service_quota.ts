export interface ServicequotasServiceQuota {
    data: Datum[];
}

export interface Datum {
    servicequotas_service_quota: ServicequotasServiceQuotaClass;
}

export interface ServicequotasServiceQuotaClass {
    /** (Required) Service code for the quota. Available values can be found with the [`aws_servicequotas_service` data source](/docs/providers/aws/d/servicequotas_service.html) or [AWS CLI service-quotas list-services command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-services.html). */
    service_code: any;
    /** (Optional) Quota code within the service. When configured, the data source directly looks up the service quota. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html). One of `quota_code` or `quota_name` must be specified. */
    quota_code?:  any;
    /** (Optional) Quota name within the service. When configured, the data source searches through all service quotas to find the matching quota name. Available values can be found with the [AWS CLI service-quotas list-service-quotas command](https://docs.aws.amazon.com/cli/latest/reference/service-quotas/list-service-quotas.html). One of `quota_name` or `quota_code` must be specified. */
    quota_name?:  any;
}