export interface CloudformationExport {
    data: Datum[];
}

export interface Datum {
    cloudformation_export: CloudformationExportClass;
}

export interface CloudformationExportClass {
    /** (Required) Name of the export as it appears in the console or from [list-exports](http://docs.aws.amazon.com/cli/latest/reference/cloudformation/list-exports.html) */
    name: any;
}