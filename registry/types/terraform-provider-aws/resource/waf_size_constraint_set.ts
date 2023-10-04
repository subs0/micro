export interface WafSizeConstraintSet {
    resource: Resource[];
}

export interface Resource {
    waf_size_constraint_set: WafSizeConstraintSetClass;
}

export interface WafSizeConstraintSetClass {
    /** (Required) The name or description of the Size Constraint Set. */
    name:              any;
    /** (Optional) Specifies the parts of web requests that you want to inspect the size of. */
    size_constraints?: any;
}