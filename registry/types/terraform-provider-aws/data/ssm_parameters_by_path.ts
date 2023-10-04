export interface SsmParametersByPath {
    data: Datum[];
}

export interface Datum {
    ssm_parameters_by_path: SsmParametersByPathClass;
}

export interface SsmParametersByPathClass {
    /** (Required) Prefix path of the parameter. */
    path:             any;
    /** (Optional) Whether to return decrypted `SecureString` value. Defaults to `true`. */
    with_decryption?: any;
    /** (Optional) Whether to recursively return parameters under `path`. Defaults to `false`. */
    recursive?:       any;
    /** ARNs of the parameters. */
    arns?:            any;
    /** Names of the parameters. */
    names?:           any;
    /** Types of the parameters. */
    types?:           any;
    /** Value of the parameters. */
    values?:          any;
}