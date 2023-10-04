export interface Ec2PublicIpv4Pool {
    data: Datum[];
}

export interface Datum {
    ec2_public_ipv4_pool: Ec2PublicIpv4PoolClass;
}

export interface Ec2PublicIpv4PoolClass {
    /** (Required) AWS resource IDs of a public IPv4 pool (as a string) for which this data source will fetch detailed information. */
    pool_id: any;
}