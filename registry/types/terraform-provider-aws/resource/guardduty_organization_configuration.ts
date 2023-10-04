export interface GuarddutyOrganizationConfiguration {
    resource: Resource[];
}

export interface Resource {
    guardduty_organization_configuration: GuarddutyOrganizationConfigurationClass;
}

export interface GuarddutyOrganizationConfigurationClass {
    /** (Required) If true, enables [Malware Protection](https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html) for all new accounts joining the organization. */
    auto_enable:                       any;
    /** (Optional) Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. Valid values are `ALL`, `NEW`, `NONE`. */
    auto_enable_organization_members?: any;
    /** (Required) The detector ID of the GuardDuty account. */
    detector_id:                       any;
    /** (Optional) Configuration for the collected datasources. */
    datasources?:                      any;
    /** (Optional) Enable S3 Protection automatically for new member accounts. */
    s3_logs?:                          any;
    /** (Optional) Enable Kubernetes Audit Logs Monitoring automatically for new member accounts. */
    kubernetes?:                       any;
    /** (Optional) Enable Malware Protection automatically for new member accounts. */
    malware_protection?:               any;
    /** (Required) Enable Kubernetes Audit Logs Monitoring automatically for new member accounts. [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html). */
    audit_logs:                        any;
    /** (Required) If true, enables Kubernetes audit logs as a data source for [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html). */
    enable:                            any;
    /** (Required) Configure whether [Malware Protection](https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html) for EC2 instances with findings should be auto-enabled for new members joining the organization. */
    scan_ec2_instance_with_findings:   any;
    /** (Required) Configure whether scanning EBS volumes should be auto-enabled for new members joining the organization */
    ebs_volumes:                       any;
}