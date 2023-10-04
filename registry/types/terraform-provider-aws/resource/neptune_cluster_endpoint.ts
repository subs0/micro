export interface NeptuneClusterEndpoint {
    resource: Resource[];
}

export interface Resource {
    neptune_cluster_endpoint: NeptuneClusterEndpointClass;
}

export interface NeptuneClusterEndpointClass {
    /** (Required, Forces new resources) The DB cluster identifier of the DB cluster associated with the endpoint. */
    cluster_identifier?:          any;
    /** (Required, Forces new resources) The identifier of the endpoint. */
    cluster_endpoint_identifier?: any;
    /** (Required) The type of the endpoint. One of: `READER`, `WRITER`, `ANY`. */
    endpoint_type:                any;
    /** (Optional) List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. */
    excluded_members?:            any;
    /** (Optional) List of DB instance identifiers that are part of the custom endpoint group. */
    static_members?:              any;
    /** (Optional) A map of tags to assign to the Neptune cluster. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
}