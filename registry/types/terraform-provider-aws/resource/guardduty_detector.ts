export interface GuarddutyDetector {
    resource: Resource[];
}

export interface Resource {
    guardduty_detector: GuarddutyDetectorClass;
}

export interface GuarddutyDetectorClass {
    /** (Required) If true, enables [Malware Protection](https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html) as data source for the detector. */
    enable:                          any;
    /** (Optional) Specifies the frequency of notifications sent for subsequent finding occurrences. If the detector is a GuardDuty member account, the value is determined by the GuardDuty primary account and cannot be modified, otherwise defaults to `SIX_HOURS`. For standalone and GuardDuty primary accounts, it must be configured in Terraform to enable drift detection. Valid values for standalone and primary accounts: `FIFTEEN_MINUTES`, `ONE_HOUR`, `SIX_HOURS`. See [AWS Documentation](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html#guardduty_findings_cloudwatch_notification_frequency) for more information. */
    finding_publishing_frequency?:   any;
    /** (Optional) Describes which data sources will be enabled for the detector. See [Data Sources](#data-sources) below for more details. */
    datasources?:                    any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Optional) Configures [S3 protection](https://docs.aws.amazon.com/guardduty/latest/ug/s3-protection.html). */
    s3_logs?:                        any;
    /** (Optional) Configures [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html). */
    kubernetes?:                     any;
    /** (Optional) Configures [Malware Protection](https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html). */
    malware_protection?:             any;
    /** (Required) Configures Kubernetes audit logs as a data source for [Kubernetes protection](https://docs.aws.amazon.com/guardduty/latest/ug/kubernetes-protection.html). */
    audit_logs:                      any;
    /** (Required) Configure whether [Malware Protection](https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html) is enabled as data source for EC2 instances with findings for the detector. */
    scan_ec2_instance_with_findings: any;
    /** (Required) Configure whether scanning EBS volumes is enabled as data source for the detector for instances with findings. */
    ebs_volumes:                     any;
}