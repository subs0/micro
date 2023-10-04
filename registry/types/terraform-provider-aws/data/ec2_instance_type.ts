export interface Ec2InstanceType {
    data: Datum[];
}

export interface Datum {
    ec2_instance_type: Ec2InstanceTypeClass;
}

export interface Ec2InstanceTypeClass {
    /** (Required) Instance */
    instance_type: any;
}