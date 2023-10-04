export interface IamServiceLinkedRole {
    resource: Resource[];
}

export interface Resource {
    iam_service_linked_role: IamServiceLinkedRoleClass;
}

export interface IamServiceLinkedRoleClass {
    /** (Required, Forces new resource) The AWS service to which this role is attached. You use a string similar to a URL but without the `http://` in front. For example: `elasticbeanstalk.amazonaws.com`. To find the full list of services that support service-linked roles, check [the docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html). */
    aws_service_name?: any;
    /** (Optional, forces new resource) Additional string appended to the role name. Not all AWS services support custom suffixes. */
    custom_suffix?:    any;
    /** (Optional) The description of the role. */
    description?:      any;
    /** Key-value mapping of tags for the IAM role. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}