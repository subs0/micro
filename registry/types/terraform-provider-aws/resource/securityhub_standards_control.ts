export interface SecurityhubStandardsControl {
    resource: Resource[];
}

export interface Resource {
    securityhub_standards_control: SecurityhubStandardsControlClass;
}

export interface SecurityhubStandardsControlClass {
    /** (Required) The standards control ARN. See the AWS documentation for how to list existing controls using [`get-enabled-standards`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/securityhub/get-enabled-standards.html) and [`describe-standards-controls`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/securityhub/describe-standards-controls.html). */
    standards_control_arn: any;
}