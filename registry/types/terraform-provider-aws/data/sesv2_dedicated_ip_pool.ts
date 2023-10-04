export interface Sesv2DedicatedIPPool {
    data: Datum[];
}

export interface Datum {
    sesv2_dedicated_ip_pool: Sesv2DedicatedIPPoolClass;
}

export interface Sesv2DedicatedIPPoolClass {
    /** (Required) Name of the dedicated IP pool. */
    pool_name: any;
}