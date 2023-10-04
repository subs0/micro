export interface DatasyncLocationAzureBlob {
    resource: Resource[];
}

export interface Resource {
    datasync_location_azure_blob: DatasyncLocationAzureBlobClass;
}

export interface DatasyncLocationAzureBlobClass {
    /** (Optional) The access tier that you want your objects or files transferred into. Valid values: `HOT`, `COOL` and `ARCHIVE`. Default: `HOT`. */
    access_tier?:        any;
    /** (Required) A list of DataSync Agent ARNs with which this location will be associated. */
    agent_arns:          any;
    /** (Required) The authentication method DataSync uses to access your Azure Blob Storage. Valid values: `SAS`. */
    authentication_type: any;
    /** (Optional) The type of blob that you want your objects or files to be when transferring them into Azure Blob Storage. Valid values: `BLOB`. Default: `BLOB`. */
    blob_type?:          any;
    /** (Required) The URL of the Azure Blob Storage container involved in your transfer. */
    container_url:       any;
    /** (Optional) The SAS configuration that allows DataSync to access your Azure Blob Storage. See configuration below. */
    sas_configuration?:  any;
    /** (Optional) Path segments if you want to limit your transfer to a virtual directory in the container. */
    subdirectory?:       any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Required) A SAS token that provides permissions to access your Azure Blob Storage. */
    token:               any;
}