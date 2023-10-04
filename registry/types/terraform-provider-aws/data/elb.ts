export interface Elb {
    data: Datum[];
}

export interface Datum {
    elb: ElbClass;
}

export interface ElbClass {
    /** (Required) Unique name of the load balancer. */
    name: any;
}