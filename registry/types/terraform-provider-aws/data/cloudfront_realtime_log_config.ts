export interface CloudfrontRealtimeLogConfig {
    data: Datum[];
}

export interface Datum {
    cloudfront_realtime_log_config: CloudfrontRealtimeLogConfigClass;
}

export interface CloudfrontRealtimeLogConfigClass {
    /** (Required) Unique name to identify this real-time log configuration. */
    name: any;
}