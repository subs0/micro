export interface AmiCopy {
    resource: Resource[];
}

export interface Resource {
    ami_copy: AmiCopyClass;
}

export interface AmiCopyClass {
    /** (Required) Region-unique name for the AMI. */
    name:                     any;
    /** (Required) Id of the AMI to copy. This id must be valid in the region */
    source_ami_id:            any;
    /** (Required) Region from which the AMI will be copied. This may be the */
    source_ami_region:        any;
    /** (Optional) ARN of the Outpost to which to copy the AMI. */
    destination_outpost_arn?: any;
    /** (Optional) Whether the destination snapshots of the copied image should be encrypted. Defaults to `false` */
    encrypted?:               any;
    /** (Optional) Full ARN of the KMS Key to use when encrypting the snapshots of an image during a copy operation. If not specified, then the default AWS KMS Key will be used */
    kms_key_id?:              any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
}