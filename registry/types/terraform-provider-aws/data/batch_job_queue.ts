export interface BatchJobQueue {
    data: Datum[];
}

export interface Datum {
    batch_job_queue: BatchJobQueueClass;
}

export interface BatchJobQueueClass {
    /** (Required) Name of the job queue. */
    name: any;
}