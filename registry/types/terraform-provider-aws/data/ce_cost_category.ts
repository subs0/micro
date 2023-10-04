export interface CeCostCategory {
    data: Datum[];
}

export interface Datum {
    ce_cost_category: CeCostCategoryClass;
}

export interface CeCostCategoryClass {
    /** (Required) Unique name for the Cost Category. */
    cost_category_arn: any;
}