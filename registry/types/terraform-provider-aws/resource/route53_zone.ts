export interface Route53Zone {
    resource: Resource[];
}

export interface Resource {
    route53_zone: Route53ZoneClass;
}

export interface Route53ZoneClass {
    /** (Required) This is the name of the hosted zone. */
    name:               any;
    /** (Optional) A comment for the hosted zone. Defaults to 'Managed by Terraform'. */
    comment?:           any;
    /** (Optional) The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` as delegation sets can only be used for public zones. */
    delegation_set_id?: any;
    /** (Optional) Whether to destroy all records (possibly managed outside of Terraform) in the zone when destroying the zone. */
    force_destroy?:     any;
    /** (Optional) A map of tags to assign to the zone. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
    /** (Optional) Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with the `delegation_set_id` argument in this resource and any [`aws_route53_zone_association` resource](/docs/providers/aws/r/route53_zone_association.html) specifying the same zone ID. Detailed below. */
    vpc?:               any;
    /** (Required) ID of the VPC to associate. */
    vpc_id:             any;
    /** (Optional) Region of the VPC to associate. Defaults to AWS provider region. */
    vpc_region?:        any;
}