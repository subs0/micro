export interface KeyPair {
    resource: Resource[];
}

export interface Resource {
    key_pair: KeyPairClass;
}

export interface KeyPairClass {
    /** (Optional) The name for the key pair. If neither `key_name` nor `key_name_prefix` is provided, Terraform will create a unique key name using the prefix `terraform-`. */
    key_name?:        any;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `key_name`. If neither `key_name` nor `key_name_prefix` is provided, Terraform will create a unique key name using the prefix `terraform-`. */
    key_name_prefix?: any;
    /** (Required) The public key material. */
    public_key:       any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
}