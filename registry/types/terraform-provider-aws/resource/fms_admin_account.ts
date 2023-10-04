export interface FmsAdminAccount {
    resource: Resource[];
}

export interface Resource {
    fms_admin_account: FmsAdminAccountClass;
}

export interface FmsAdminAccountClass {
    /** (Optional) The AWS account ID to associate with AWS Firewall Manager as the AWS Firewall Manager administrator account. This can be an AWS Organizations master account or a member account. Defaults to the current account. Must be configured to perform drift detection. */
    account_id?: any;
}