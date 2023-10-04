export interface WafregionalWebACLAssociation {
    resource: Resource[];
}

export interface Resource {
    wafregional_web_acl_association: WafregionalWebACLAssociationClass;
}

export interface WafregionalWebACLAssociationClass {
    /** (Required) The ID of the WAF Regional WebACL to create an association. */
    web_acl_id:   any;
    /** (Required) ARN of the resource to associate with. For example, an Application Load Balancer or API Gateway Stage. */
    resource_arn: any;
}