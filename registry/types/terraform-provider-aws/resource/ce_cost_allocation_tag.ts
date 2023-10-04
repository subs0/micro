export interface CeCostAllocationTag {
    resource: Resource[];
}

export interface Resource {
    ce_cost_allocation_tag: CeCostAllocationTagClass;
}

export interface CeCostAllocationTagClass {
    /** (Required) The key for the cost allocation tag. */
    tag_key: any;
    /** (Required) The status of a cost allocation tag. Valid values are `Active` and `Inactive`. */
    status:  any;
}