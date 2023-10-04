// more than one whitespace or a newline
export const whitespace_regex = /\s+?/
export const numbered_rx = /\s\d{1,3}\.\s/
// matches a numbered list item without any indentation followed by a double newline
export const numbered_nn_rx = /^\d{1,3}\.\s[^\n]+?\n\n/m
// regex that matches the start of a double newline above a table
export const above_table_rx = /(?=\n\n\|)/
// matches a complete markdown table
export const md_table_rx = /(([^\n]+?\|\n?)+(|$))/
export const count_tables = /\n\n\|/m
export const md_tokens_rx = /\\n|\n|#/

// matches double newlines above markdown headings:
export const nn_h1 = /\n\n(?=# )/
export const nn_h2 = /\n\n(?=## )/
export const nn_h3 = /\n\n(?=### )/
export const nn_h4 = /\n\n(?=#### )/
// matches double newlines above unmarked headings (non-whitespace strings)
export const nn_continuous_str_nn = /\n\n(?=\S+?\n)/
// match a triple newline with any trailing whitespace on each newline
export const n_n_n_ = /\n\s*?\n\s*?\n\s*?/
// matches double newlines above a line with no punctuation followed by a double newline
export const nn_no_punctuation_nn = /\n\n(?=[^.,:;!?*]+?\n\n)/
export const tick_group = /\*\s`([^`]+?)`\s-\s([^\n]+)/g
export const headRx = /#*?\s(.+)/

export const required = /\(required\) /i
export const optional = /\(optional\) /i
// groups key(?):value pairs from a typescript interface property
export const ts_interface_prop_K_V_groups = /(\w+?)\??:\s+(\w+?);/