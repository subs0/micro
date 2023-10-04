export interface Wafv2WebACLAssociation {
    resource: Resource[];
}

export interface Resource {
    wafv2_web_acl_association: Wafv2WebACLAssociationClass;
}

export interface Wafv2WebACLAssociationClass {
    /** (Required) The Amazon Resource Name (ARN) of the resource to associate with the web ACL. This must be an ARN of an Application Load Balancer, an Amazon API Gateway stage, an Amazon Cognito User Pool, an Amazon AppSync GraphQL API, an Amazon App Runner service, or an Amazon Verified Access instance. */
    resource_arn: any;
    /** (Required) The Amazon Resource Name (ARN) of the Web ACL that you want to associate with the resource. */
    web_acl_arn:  any;
}