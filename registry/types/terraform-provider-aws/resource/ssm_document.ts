export interface SsmDocument {
    resource: Resource[];
}

export interface Resource {
    ssm_document: SsmDocumentClass;
}

export interface SsmDocumentClass {
    /** (Required) The name of the document. */
    name:                any;
    /** (Optional) One or more configuration blocks describing attachments sources to a version of a document. Defined below. */
    attachments_source?: any;
    /** (Required) The JSON or YAML content of the document. */
    content:             any;
    /** (Optional, defaults to JSON) The format of the document. Valid document types include: `JSON` and `YAML` */
    document_format?:    any;
    /** (Required) The type of the document. Valid document types include: `Automation`, `Command`, `Package`, `Policy`, and `Session` */
    document_type:       any;
    /** (Optional) Additional Permissions to attach to the document. See [Permissions](#permissions) below for details. */
    permissions?:        any;
    /** (Optional) The target type which defines the kinds of resources the document can run on. For example, /AWS::EC2::Instance. For a list of valid resource types, see AWS Resource Types Reference (http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) */
    target_type?:        any;
    /** (Optional) A map of tags to assign to the object. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Optional) A field specifying the version of the artifact you are creating with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document and cannot be changed for an existing document version. */
    version_name?:       any;
}