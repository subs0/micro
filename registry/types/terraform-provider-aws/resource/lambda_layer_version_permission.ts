export interface LambdaLayerVersionPermission {
    resource: Resource[];
}

export interface Resource {
    lambda_layer_version_permission: LambdaLayerVersionPermissionClass;
}

export interface LambdaLayerVersionPermissionClass {
    /** (Required) Action, which will be allowed. `lambda:GetLayerVersion` value is suggested by AWS documantation. */
    action:           any;
    /** (Optional) An identifier of AWS Organization, which should be able to use your Lambda Layer. `principal` should be equal to `*` if `organization_id` provided. */
    organization_id?: any;
    /** (Required) AWS account ID which should be able to use your Lambda Layer. `*` can be used here, if you want to share your Lambda Layer widely. */
    principal:        any;
    /** (Required) The name of Lambda Layer Permission, for example `dev-account` - human readable note about what is this permission for. */
    statement_id:     any;
    /** (Optional) Whether to retain the old version of a previously deployed Lambda Layer. Default is `false`. When this is not set to `true`, changing any of `compatible_architectures`, `compatible_runtimes`, `description`, `filename`, `layer_name`, `license_info`, `s3_bucket`, `s3_key`, `s3_object_version`, or `source_code_hash` forces deletion of the existing layer version and creation of a new layer version. */
    skip_destroy?:    any;
}