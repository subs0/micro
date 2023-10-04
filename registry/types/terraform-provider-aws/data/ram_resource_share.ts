export interface RAMResourceShare {
    data: Datum[];
}

export interface Datum {
    ram_resource_share: RAMResourceShareClass;
}

export interface RAMResourceShareClass {
    /** (Required) Name of the tag key to filter on. */
    name:    any;
    /** (Optional) Filter used to scope the list e.g., by tags. See [related docs] (https://docs.aws.amazon.com/ram/latest/APIReference/API_TagFilter.html). */
    filter?: any;
    /** (Required) Value of the tag key. */
    values:  any;
}