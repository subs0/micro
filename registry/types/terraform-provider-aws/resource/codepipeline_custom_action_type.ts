export interface CodepipelineCustomActionType {
    resource: Resource[];
}

export interface Resource {
    codepipeline_custom_action_type: CodepipelineCustomActionTypeClass;
}

export interface CodepipelineCustomActionTypeClass {
    /** (Required) The category of the custom action. Valid values: `Source`, `Build`, `Deploy`, `Test`, `Invoke`, `Approval` */
    category:                       any;
    /** (Optional) The configuration properties for the custom action. Max 10 items. */
    configuration_property?:        any;
    /** (Optional) The description of the action configuration property. */
    description?:                   any;
    /** (Required) Whether the configuration property is a key. */
    key:                            any;
    /** (Required) The name of the action configuration property. */
    name:                           any;
    /** (Optional) Indicates that the property will be used in conjunction with PollForJobs. */
    queryable?:                     any;
    /** (Required) Whether the configuration property is a required value. */
    required:                       any;
    /** (Required) The details of the input artifact for the action. */
    input_artifact_details:         any;
    /** (Required) The maximum number of artifacts allowed for the action type. Min: 0, Max: 5 */
    maximum_count:                  any;
    /** (Required) The minimum number of artifacts allowed for the action type. Min: 0, Max: 5 */
    minimum_count:                  any;
    /** (Required) The details of the output artifact of the action. */
    output_artifact_details:        any;
    /** (Required) The provider of the service used in the custom action */
    provider_name:                  any;
    /** (Optional) The settings for an action type. */
    settings?:                      any;
    /** (Optional) The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system. */
    entity_url_template?:           any;
    /** (Optional) The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system. */
    execution_url_template?:        any;
    /** (Optional) The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action. */
    revision_url_template?:         any;
    /** (Optional) The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service. */
    third_party_configuration_url?: any;
    /** (Optional) Map of tags to assign to this resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
    /** (Required) The version identifier of the custom action. */
    version:                        any;
}