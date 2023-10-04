export interface SsoadminInstanceAccessControlAttributes {
    resource: Resource[];
}

export interface Resource {
    ssoadmin_instance_access_control_attributes: SsoadminInstanceAccessControlAttributesClass;
}

export interface SsoadminInstanceAccessControlAttributesClass {
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the SSO Instance. */
    instance_arn?: any;
    /** (Required) See [AccessControlAttribute](#accesscontrolattribute) for more details. */
    attribute:     any;
    /** (Required) The name of the attribute associated with your identities in your identity source. This is used to map a specified attribute in your identity source with an attribute in AWS SSO. */
    key:           any;
    /** (Required) The value used for mapping a specified attribute to an identity source. See [AccessControlAttributeValue](#accesscontrolattributevalue) */
    value:         any;
    /** (Required) The identity source to use when mapping a specified attribute to AWS SSO. */
    source:        any;
}