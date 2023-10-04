export interface ElasticBeanstalkApplication {
    data: Datum[];
}

export interface Datum {
    elastic_beanstalk_application: ElasticBeanstalkApplicationClass;
}

export interface ElasticBeanstalkApplicationClass {
    /** (Required) Name of the application */
    name: any;
}