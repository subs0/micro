export interface RDSClusterEndpoint {
    resource: Resource[];
}

export interface Resource {
    rds_cluster_endpoint: RDSClusterEndpointClass;
}

export interface RDSClusterEndpointClass {
    /** (Required, Forces new resources) The cluster identifier. */
    cluster_identifier?:          any;
    /** (Required, Forces new resources) The identifier to use for the new endpoint. This parameter is stored as a lowercase string. */
    cluster_endpoint_identifier?: any;
    /** (Required) The type of the endpoint. One of: READER , ANY . */
    custom_endpoint_type:         any;
    /** (Optional) List of DB instance identifiers that are part of the custom endpoint group. Conflicts with `excluded_members`. */
    static_members?:              any;
    /** (Optional) List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Conflicts with `static_members`. */
    excluded_members?:            any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
}