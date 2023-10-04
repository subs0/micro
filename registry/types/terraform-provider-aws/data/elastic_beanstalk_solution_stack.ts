export interface ElasticBeanstalkSolutionStack {
    data: Datum[];
}

export interface Datum {
    elastic_beanstalk_solution_stack: ElasticBeanstalkSolutionStackClass;
}

export interface ElasticBeanstalkSolutionStackClass {
    /** (Optional) If more than one result is returned, use the most */
    most_recent?: any;
    /** Regex string to apply to the solution stack list returned */
    name_regex?:  any;
}