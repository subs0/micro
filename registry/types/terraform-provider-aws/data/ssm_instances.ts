export interface SsmInstances {
    data: Datum[];
}

export interface Datum {
    ssm_instances: SsmInstancesClass;
}

export interface SsmInstancesClass {
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?: any;
    /** (Required) Name of the filter field. Valid values can be found in the [SSM InstanceInformationStringFilter API Reference](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_InstanceInformationStringFilter.html). */
    name:    any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:  any;
}