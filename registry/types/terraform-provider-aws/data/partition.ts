export interface Partition {
    data: Datum[];
}

export interface Datum {
    partition: PartitionClass;
}

export interface PartitionClass {
    "There are no arguments available for this data source."?: any;
}