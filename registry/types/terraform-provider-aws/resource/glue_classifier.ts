export interface GlueClassifier {
    resource: Resource[];
}

export interface Resource {
    glue_classifier: GlueClassifierClass;
}

export interface GlueClassifierClass {
    csv_classifier?:  CSVClassifier;
    /** (Required) An identifier of the data format that the classifier matches. */
    classification:   any;
    /** (Optional) Custom grok patterns used by this classifier. */
    custom_patterns?: any;
    /** (Required) The grok pattern used by this classifier. */
    grok_pattern:     any;
    /** (Required) A `JsonPath` string defining the JSON data for the classifier to classify. AWS Glue supports a subset of `JsonPath`, as described in [Writing JsonPath Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json). */
    json_path:        any;
    /** (Required) The XML tag designating the element that contains each record in an XML document being parsed. Note that this cannot identify a self-closing element (closed by `/>`). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, `<row item_a="A" item_b="B"></row>` is okay, but `<row item_a="A" item_b="B" />` is not). */
    row_tag:          any;
}

export interface CSVClassifier {
    /** (Optional) Enables the processing of files that contain only one column. */
    allow_single_column:        any;
    /** (Optional) Indicates whether the CSV file contains a header. This can be one of "ABSENT", "PRESENT", or "UNKNOWN". */
    contains_header:            any;
    /** (Optional) A custom symbol to denote what combines content into a single column value. It must be different from the column delimiter. */
    custom_datatype_configured: any;
    /** (Optional) A list of supported custom datatypes. Valid values are `BINARY`, `BOOLEAN`, `DATE`, `DECIMAL`, `DOUBLE`, `FLOAT`, `INT`, `LONG`, `SHORT`, `STRING`, `TIMESTAMP`. */
    custom_datatypes:           any;
    /** (Optional) The delimiter used in the Csv to separate columns. */
    delimiter:                  any;
    /** (Optional) Specifies whether to trim column values. */
    disable_value_trimming:     any;
    /** (Optional) A list of strings representing column names. */
    header:                     any;
    /** (Optional) A custom symbol to denote what combines content into a single column value. It must be different from the column delimiter. */
    quote_symbol:               any;
}