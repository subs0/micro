export interface ElasticBeanstalkHostedZone {
    data: Datum[];
}

export interface Datum {
    elastic_beanstalk_hosted_zone: ElasticBeanstalkHostedZoneClass;
}

export interface ElasticBeanstalkHostedZoneClass {
    /** (Optional) Region you'd like the zone for. By default, fetches the current region. */
    region?: any;
}