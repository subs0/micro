export interface IotProvisioningTemplate {
    resource: Resource[];
}

export interface Resource {
    iot_provisioning_template: IotProvisioningTemplateClass;
}

export interface IotProvisioningTemplateClass {
    /** (Required) The name of the fleet provisioning template. */
    name:                   any;
    /** (Optional) The description of the fleet provisioning template. */
    description?:           any;
    /** (Optional) True to enable the fleet provisioning template, otherwise false. */
    enabled?:               any;
    pre_provisioning_hook?: PreProvisioningHook;
    /** (Required) The role ARN for the role associated with the fleet provisioning template. This IoT role grants permission to provision a device. */
    provisioning_role_arn:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Required) The JSON formatted contents of the fleet provisioning template. */
    template_body:          any;
}

export interface PreProvisioningHook {
    /** (Optional) The version of the payload that was sent to the target function. The only valid (and the default) payload version is `"2020-04-01"`. */
    payload_version: any;
    /** (Optional) The ARN of the target function. */
    target_arn:      any;
}