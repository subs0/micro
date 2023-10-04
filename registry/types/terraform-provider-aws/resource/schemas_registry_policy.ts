export interface SchemasRegistryPolicy {
    resource: Resource[];
}

export interface Resource {
    schemas_registry_policy: SchemasRegistryPolicyClass;
}

export interface SchemasRegistryPolicyClass {
    /** (Required) Name of EventBridge Schema Registry */
    registry_name: any;
    /** (Required) Resource Policy for EventBridge Schema Registry */
    policy:        any;
}