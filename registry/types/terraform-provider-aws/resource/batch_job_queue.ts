export interface BatchJobQueue {
    resource: Resource[];
}

export interface Resource {
    batch_job_queue: BatchJobQueueClass;
}

export interface BatchJobQueueClass {
    /** (Required) Specifies the name of the job queue. */
    name:                   any;
    /** (Required) List of compute environment ARNs mapped to a job queue. */
    compute_environments:   any;
    /** (Required) The priority of the job queue. Job queues with a higher priority */
    priority:               any;
    /** (Optional) The ARN of the fair share scheduling policy. If this parameter is specified, the job queue uses a fair share scheduling policy. If this parameter isn't specified, the job queue uses a first in, first out (FIFO) scheduling policy. After a job queue is created, you can replace but can't remove the fair share scheduling policy. */
    scheduling_policy_arn?: any;
    /** (Required) The state of the job queue. Must be one of: `ENABLED` or `DISABLED` */
    state:                  any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
}