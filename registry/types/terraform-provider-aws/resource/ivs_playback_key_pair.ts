export interface IvsPlaybackKeyPair {
    resource: Resource[];
}

export interface Resource {
    ivs_playback_key_pair: IvsPlaybackKeyPairClass;
}

export interface IvsPlaybackKeyPairClass {
    /** (Required) Public portion of a customer-generated key pair. Must be an ECDSA public key in PEM format. */
    public_key: any;
    /** (Optional) Playback Key Pair name. */
    name?:      any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:      any;
}