export interface AmiFromInstance {
    resource: Resource[];
}

export interface Resource {
    ami_from_instance: AmiFromInstanceClass;
}

export interface AmiFromInstanceClass {
    /** (Required) Region-unique name for the AMI. */
    name:                     any;
    /** (Required) ID of the instance to use as the basis of the AMI. */
    source_instance_id:       any;
    /** (Optional) Boolean that overrides the behavior of stopping */
    snapshot_without_reboot?: any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
}