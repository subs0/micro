export interface RedshiftserverlessResourcePolicy {
    resource: Resource[];
}

export interface Resource {
    redshiftserverless_resource_policy: RedshiftserverlessResourcePolicyClass;
}

export interface RedshiftserverlessResourcePolicyClass {
    /** (Required) The Amazon Resource Name (ARN) of the account to create or update a resource policy for. */
    resource_arn: any;
    /** (Required) The policy to create or update. For example, the following policy grants a user authorization to restore a snapshot. */
    policy:       any;
}