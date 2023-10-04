export interface Inspector2OrganizationConfiguration {
    resource: Resource[];
}

export interface Resource {
    inspector2_organization_configuration: Inspector2OrganizationConfigurationClass;
}

export interface Inspector2OrganizationConfigurationClass {
    /** (Required) Configuration block for auto enabling. See below. */
    auto_enable: any;
    /** (Required) Whether Amazon EC2 scans are automatically enabled for new members of your Amazon Inspector organization. */
    ec2:         any;
    /** (Required) Whether Amazon ECR scans are automatically enabled for new members of your Amazon Inspector organization. */
    ecr:         any;
    /** (Optional) Whether Lambda Function scans are automatically enabled for new members of your Amazon Inspector organization. */
    lambda?:     any;
}