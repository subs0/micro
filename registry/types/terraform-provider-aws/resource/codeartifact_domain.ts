export interface CodeartifactDomain {
    resource: Resource[];
}

export interface Resource {
    codeartifact_domain: CodeartifactDomainClass;
}

export interface CodeartifactDomainClass {
    /** (Required) The name of the domain to create. All domain names in an AWS Region that are in the same AWS account must be unique. The domain name is used as the prefix in DNS hostnames. Do not use sensitive information in a domain name because it is publicly discoverable. */
    domain:          any;
    /** (Optional) The encryption key for the domain. This is used to encrypt content stored in a domain. The KMS Key Amazon Resource Name (ARN). The default aws/codeartifact AWS KMS master key is used if this element is absent. */
    encryption_key?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}