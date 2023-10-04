export interface SqsQueues {
    data: Datum[];
}

export interface Datum {
    sqs_queues: SqsQueuesClass;
}

export interface SqsQueuesClass {
    /** (Optional) A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned. Queue URLs and names are case-sensitive. */
    queue_name_prefix?: any;
}