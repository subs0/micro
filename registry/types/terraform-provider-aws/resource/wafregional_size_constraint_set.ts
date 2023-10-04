export interface WafregionalSizeConstraintSet {
    resource: Resource[];
}

export interface Resource {
    wafregional_size_constraint_set: WafregionalSizeConstraintSetClass;
}

export interface WafregionalSizeConstraintSetClass {
    /** (Required) The name or description of the Size Constraint Set. */
    name:              any;
    /** (Optional) Specifies the parts of web requests that you want to inspect the size of. */
    size_constraints?: any;
}