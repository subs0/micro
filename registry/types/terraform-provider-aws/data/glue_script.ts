export interface GlueScript {
    data: Datum[];
}

export interface Datum {
    glue_script: GlueScriptClass;
}

export interface GlueScriptClass {
    /** (Required) List of the edges in the DAG. Defined below. */
    dag_edge:          any;
    /** (Required) List of the nodes in the DAG. Defined below. */
    dag_node:          any;
    /** (Optional) Programming language of the resulting code from the DAG. Defaults to `PYTHON`. Valid values are `PYTHON` and `SCALA`. */
    language?:         any;
    /** (Required) ID of the node at which the edge starts. */
    source:            any;
    /** (Required) ID of the node at which the edge ends. */
    target:            any;
    /** (Optional) Target of the edge. */
    target_parameter?: any;
    /** (Required) Nested configuration an argument or property of a node. Defined below. */
    args:              any;
    /** (Required) Node identifier that is unique within the node's graph. */
    id:                any;
    /** (Required) Type of node this is. */
    node_type:         any;
    /** (Optional) Line number of the node. */
    line_number?:      any;
    /** (Required) Name of the argument or property. */
    name:              any;
    /** (Required) Value of the argument or property. */
    value:             any;
    /** (Optional) Boolean if the value is used as a parameter. Defaults to `false`. */
    param?:            any;
}