export interface TransferWorkflow {
    resource: Resource[];
}

export interface Resource {
    transfer_workflow: TransferWorkflowClass;
}

export interface TransferWorkflowClass {
    /** (Optional) A textual description for the workflow. */
    description?:               any;
    /** (Optional) Specifies the steps (actions) to take if errors are encountered during execution of the workflow. See Workflow Steps below. */
    on_exception_steps?:        any;
    /** (Required) Specifies the details for the steps that are in the specified workflow. See Workflow Steps below. */
    steps:                      any;
    /** (Optional) Array that contains from 1 to 10 key/value pairs. See S3 Tags below. */
    tags?:                      any;
    /** (Optional) Details for a step that performs a file copy. See Copy Step Details below. */
    copy_step_details?:         any;
    /** (Optional) Details for a step that invokes a lambda function. */
    custom_step_details?:       any;
    /** (Optional) Details for a step that decrypts the file. */
    decrypt_step_details?:      any;
    /** (Optional) Details for a step that deletes the file. */
    delete_step_details?:       any;
    /** (Optional) Details for a step that creates one or more tags. */
    tag_step_details?:          any;
    /** (Required) The type of encryption used. Currently, this value must be `"PGP"`. */
    type:                       any;
    /** (Optional) Specifies the location for the file being copied. Use ${Transfer:username} in this field to parametrize the destination prefix by username. */
    destination_file_location?: any;
    /** (Optional) The name of the step, used as an identifier. */
    name?:                      any;
    /** (Optional) A flag that indicates whether or not to overwrite an existing file of the same name. The default is `FALSE`. Valid values are `TRUE` and `FALSE`. */
    overwrite_existing?:        any;
    /** (Optional) Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow. Enter ${previous.file} to use the previous file as the input. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value. Enter ${original.file} to use the originally-uploaded file location as input for this step. */
    source_file_location?:      any;
    /** (Optional) The ARN for the lambda function that is being called. */
    target?:                    any;
    /** (Optional) Timeout, in seconds, for the step. */
    timeout_seconds?:           any;
    /** (Optional) Specifies the details for the EFS file being copied. */
    efs_file_location?:         any;
    /** (Optional) Specifies the details for the S3 file being copied. */
    s3_file_location?:          any;
    /** (Optional) The ID of the file system, assigned by Amazon EFS. */
    file_system_id?:            any;
    /** (Optional) The pathname for the folder being used by a workflow. */
    path?:                      any;
    /** (Optional) Specifies the S3 bucket for the customer input file. */
    bucket?:                    any;
    /** (Required) The name assigned to the tag that you create. */
    key:                        any;
    /** (Required) The value that corresponds to the key. */
    value:                      any;
}