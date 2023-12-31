export declare const whitespace_regex: RegExp;
export declare const numbered_rx: RegExp;
export declare const numbered_nn_rx: RegExp;
export declare const above_table_rx: RegExp;
export declare const md_table_rx: RegExp;
export declare const count_tables: RegExp;
export declare const md_tokens_rx: RegExp;
export declare const nn_h1: RegExp;
export declare const nn_h2: RegExp;
export declare const nn_h3: RegExp;
export declare const nn_h4: RegExp;
export declare const nn_h5: RegExp;
export declare const nn_continuous_str_nn: RegExp;
export declare const n_n_n_: RegExp;
export declare const nn_no_punctuation_nn: RegExp;
export declare const em_dash: RegExp;
export declare const replace_em_dashes: (md: string) => string;
export declare const head_rx: RegExp;
export declare const tick_group: RegExp;
export declare const required: RegExp;
export declare const optional: RegExp;
export declare const deprecated: RegExp;
export declare const ts_interface_prop_K_V_groups: RegExp;
export declare const inverted_qualifier_dash_rx: RegExp;
export declare const cleanBody: (md: string) => string;
/**
 * uses regex to parse the first object (exclusively) from a function's default
 * arguments
 *
 * @example
 * ```ts
 * const myFunction = ({ foo = 'bar', baz = 'qux' }, ...rest) => {...}
 * const parsed = parseFirstArgObj(myFunction)
 * console.log(parsed) // { foo: 'bar', baz: 'qux' }
 * ```
 */
export declare const parseFirstArgObj: (fn: any) => any;
//# sourceMappingURL=regex.d.ts.map