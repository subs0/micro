export interface GlueCrawler {
    resource: Resource[];
}

export interface Resource {
    glue_crawler: GlueCrawlerClass;
}

export interface GlueCrawlerClass {
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Required) The path of the Amazon DocumentDB or MongoDB target (database/collection). */
    path:                            any;
    /** (Optional) Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table. Default value is `true`. */
    scan_all?:                       any;
    /** (Optional) The percentage of the configured read capacity units to use by the AWS Glue crawler. The valid values are null or a value between 0.1 to 1.5. */
    scan_rate?:                      any;
    /** (Required) The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target. */
    connection_name:                 any;
    /** (Optional) A list of glob patterns used to exclude from the crawl. */
    exclusions?:                     any;
    /** (Optional) Specify a value of `RAWTYPES` or `COMMENTS` to enable additional metadata intable responses. `RAWTYPES` provides the native-level datatype. `COMMENTS` provides comments associated with a column or table in the database. */
    enable_additional_metadata?:     any;
    /** (Optional) Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249. */
    sample_size?:                    any;
    /** (Optional)  A valid Amazon SQS ARN. */
    event_queue_arn?:                any;
    /** (Optional)  A valid Amazon SQS ARN. */
    dlq_event_queue_arn?:            any;
    /** (Required) The name of the Glue database to be synchronized. */
    database_name:                   any;
    /** (Required) A list of catalog tables to be synchronized. */
    tables:                          any;
    /** (Required) One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix. */
    paths:                           any;
    /** (Required) The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. Used to limit the crawler run time. Valid values are between `1` and `20`. */
    maximum_traversal_depth:         any;
    /** (Required) A list of the Amazon S3 paths to the Delta tables. */
    delta_tables:                    any;
    /** (Required) Specifies whether to write the manifest files to the Delta table path. */
    write_manifest:                  any;
    /** (Optional) The deletion behavior when the crawler finds a deleted object. Valid values: `LOG`, `DELETE_FROM_DATABASE`, or `DEPRECATE_IN_DATABASE`. Defaults to `DEPRECATE_IN_DATABASE`. */
    delete_behavior?:                any;
    /** (Optional) The update behavior when the crawler finds a changed schema. Valid values: `LOG` or `UPDATE_IN_DATABASE`. Defaults to `UPDATE_IN_DATABASE`. */
    update_behavior?:                any;
    /** (Optional) Required for cross account crawls. For same account crawls as the target data, this can omitted. */
    account_id?:                     any;
    /** (Optional) Specifies whether to use Lake Formation credentials for the crawler instead of the IAM role credentials. */
    use_lake_formation_credentials?: any;
    /** (Optional) Specifies whether data lineage is enabled for the crawler. Valid values are: `ENABLE` and `DISABLE`. Default value is `DISABLE`. */
    crawler_lineage_settings?:       any;
    /** (Optional) Specifies whether to crawl the entire dataset again, crawl only folders that were added since the last crawler run, or crawl what S3 notifies the crawler of via SQS. Valid Values are: `CRAWL_EVENT_MODE`, `CRAWL_EVERYTHING` and `CRAWL_NEW_FOLDERS_ONLY`. Default value is `CRAWL_EVERYTHING`. */
    recrawl_behavior?:               any;
}