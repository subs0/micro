export interface LightsailKeyPair {
    resource: Resource[];
}

export interface Resource {
    lightsail_key_pair: LightsailKeyPairClass;
}

export interface LightsailKeyPairClass {
    /** (Optional) The name of the Lightsail Key Pair. If omitted, a unique name will be generated by Terraform */
    name?:      any;
    /** (Required) The public key material. This public key will be imported into Lightsail */
    public_key: any;
    /** (Optional) A map of tags to assign to the collection. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:      any;
}