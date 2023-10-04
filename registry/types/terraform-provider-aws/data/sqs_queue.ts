export interface SqsQueue {
    data: Datum[];
}

export interface Datum {
    sqs_queue: SqsQueueClass;
}

export interface SqsQueueClass {
    /** (Required) Name of the queue to match. */
    name: any;
}