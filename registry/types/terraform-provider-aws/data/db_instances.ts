export interface DBInstances {
    data: Datum[];
}

export interface Datum {
    db_instances: DBInstancesClass;
}

export interface DBInstancesClass {
    /** (Optional) Configuration block(s) used to filter instances with AWS supported attributes, such as `engine`, `db-cluster-id` or `db-instance-id` for example. Detailed below. */
    filter?: any;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired instances. */
    tags?:   any;
    /** (Required) Name of the filter field. Valid values can be found in the [RDS DescribeDBClusters API Reference](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html) or [RDS DescribeDBInstances API Reference](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html). */
    name:    any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:  any;
}