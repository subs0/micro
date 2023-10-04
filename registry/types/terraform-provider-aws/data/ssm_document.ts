export interface SsmDocument {
    data: Datum[];
}

export interface Datum {
    ssm_document: SsmDocumentClass;
}

export interface SsmDocumentClass {
    /** (Required) Name of the Systems Manager document. */
    name:              any;
    /** (Optional) Returns the document in the specified format. The document format can be either `JSON`, `YAML` and `TEXT`. JSON is the default format. */
    document_format?:  any;
    /** (Optional) Document version for which you want information. */
    document_version?: any;
}