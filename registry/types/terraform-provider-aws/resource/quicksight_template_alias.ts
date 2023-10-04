export interface QuicksightTemplateAlias {
    resource: Resource[];
}

export interface Resource {
    quicksight_template_alias: QuicksightTemplateAliasClass;
}

export interface QuicksightTemplateAliasClass {
    /** (Required, Forces new resource) Display name of the template alias. */
    alias_name?:             any;
    /** (Required, Forces new resource) ID of the template. */
    template_id?:            any;
    /** (Required) Version number of the template. */
    template_version_number: any;
    /** (Optional, Forces new resource) AWS account ID. */
    aws_account_id?:         any;
}