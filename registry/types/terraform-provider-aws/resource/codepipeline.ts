export interface Codepipeline {
    resource: Resource[];
}

export interface Resource {
    codepipeline: CodepipelineClass;
}

export interface CodepipelineClass {
    /** (Required) The action declaration's name. */
    name:              any;
    /** (Required) A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf. */
    role_arn:          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
    /** (Required) The location where AWS CodePipeline stores artifacts for a pipeline; currently only `S3` is supported. */
    location:          any;
    /** (Required) The type of key; currently only `KMS` is supported */
    type:              any;
    /** (Optional) The encryption key block AWS CodePipeline uses to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If you don't specify a key, AWS CodePipeline uses the default key for Amazon Simple Storage Service (Amazon S3). An `encryption_key` block is documented below. */
    encryption_key?:   any;
    /** (Optional) The region in which to run the action. */
    region?:           any;
    /** (Required) The KMS key ARN or ID */
    id:                any;
    /** (Required) The action(s) to include in the stage. Defined as an `action` block below */
    action:            any;
    /** (Required) A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Possible values are `Approval`, `Build`, `Deploy`, `Invoke`, `Source` and `Test`. */
    category:          any;
    /** (Required) The creator of the action being called. Possible values are `AWS`, `Custom` and `ThirdParty`. */
    owner:             any;
    /** (Required) The provider of the service being called by the action. Valid providers are determined by the action category. Provider names are listed in the [Action Structure Reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) documentation. */
    provider:          any;
    /** (Required) A string that identifies the action type. */
    version:           any;
    /** (Optional) A map of the action declaration's configuration. Configurations options for action types and providers can be found in the [Pipeline Structure Reference](http://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements) and [Action Structure Reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) documentation. */
    configuration?:    any;
    /** (Optional) A list of artifact names to be worked on. */
    input_artifacts?:  any;
    /** (Optional) A list of artifact names to output. Output artifact names must be unique within a pipeline. */
    output_artifacts?: any;
    /** (Optional) The order in which actions are run. */
    run_order?:        any;
    /** (Optional) The namespace all output variables will be accessed from. */
    namespace?:        any;
}