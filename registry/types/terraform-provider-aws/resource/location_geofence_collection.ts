export interface LocationGeofenceCollection {
    resource: Resource[];
}

export interface Resource {
    location_geofence_collection: LocationGeofenceCollectionClass;
}

export interface LocationGeofenceCollectionClass {
    /** (Required) The name of the geofence collection. */
    collection_name: any;
    /** (Optional) The optional description for the geofence collection. */
    description?:    any;
    /** (Optional) A key identifier for an AWS KMS customer managed key assigned to the Amazon Location resource. */
    kms_key_id?:     any;
    /** (Optional) Key-value tags for the geofence collection. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}