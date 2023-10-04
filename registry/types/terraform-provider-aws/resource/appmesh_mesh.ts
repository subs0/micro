export interface AppmeshMesh {
    resource: Resource[];
}

export interface Resource {
    appmesh_mesh: AppmeshMeshClass;
}

export interface AppmeshMeshClass {
    /** (Required) Name to use for the service mesh. Must be between 1 and 255 characters in length. */
    name:  any;
    /** (Optional) Service mesh specification to apply. */
    spec?: any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
    /** (Optional) Egress filter type. By default, the type is `DROP_ALL`. */
    type?: any;
}