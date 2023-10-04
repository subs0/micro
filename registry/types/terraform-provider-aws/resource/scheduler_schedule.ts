export interface SchedulerSchedule {
    resource: Resource[];
}

export interface Resource {
    scheduler_schedule: { [key: any]: string };
}