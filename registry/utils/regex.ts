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
export const nn_h5 = /\n\n(?=##### )/
// matches double newlines above unmarked headings (non-whitespace strings)
export const nn_continuous_str_nn = /\n\n(?=\S+?\n)/
// match a triple newline with any trailing whitespace on each newline
export const n_n_n_ = /\n\s*?\n\s*?\n\s*?/
// matches double newlines above a line with no punctuation followed by a double newline
export const nn_no_punctuation_nn = /\n\n(?=[^.,:;!?*]+?\n\n)/
// replace – with -
export const em_dash = /–/g
export const replace_em_dashes = (md: string) => md.replace(em_dash, '-')

// matches key - value (greedy) pairs in a terraform arg/attr list item
//export const tick_group = /\n\*\s`([^`]+?)`\s-\s([^\n]+)/g
// improve tick_group second group to exclude a newline followed by *
//export const tick_group = /\n\*\s`([^`]+?)`\s-\s([^*]+?(?=\n\*|$))/g

// 🔥 skipping: registry/docs/terraform-provider-aws/43475/3226064.json
const testtickhead1 = '\n\n### `custom_key` Block\n\n'
const testtickhead2 = '\n\n### RateLimit `forwarded_ip` Block\n\n'
const testtickhead3 = '\n\n### RateLimit `header` Block\n\n'
// 🔥 due to issues with organization (Attributes intertwined with Arguments and
// code blocks in headings...)

export const head_rx = /#{1,6}\s([^\n]+)/
export const tick_group = /\* `([^`|.|[]+?)`\s-?\s?([^*]+?(?=\*|##))/g
// 🤯                            ^^^^^^^^^^^^          ^^^^^^^^^^^^^^^^^^^^^^^^
//                              key                     value
// match       * `(not ` || number || . )` [maybe '- ']...until *|##|$ (greedy)
export const required = /\(required\)?/i // fails on "(required for" in description
export const optional = /\(optional\)?/i
// replace **Deprecated** with Deprecated
export const deprecated = /deprecated/i

// groups key(?):value pairs from a typescript interface property
export const ts_interface_prop_K_V_groups = /(\w+?)\??:\s+(\w+?);/

// removes bold and italic markdown from text
const bold_text_rx = /(\*\*)([\S| ]*?)\1/g
const italic_text_rx = /(\*)([a-z|A-Z| ]*?)\1/g
const stripDecorations = (md: string) => {
    const debolded = md.replace(bold_text_rx, '$2')
    const undecorated = debolded.replace(italic_text_rx, '$2')
    return undecorated
}

// replaces "\(required\) -" and "\(optional\) -" with "- \(required\)" and "- \(optional\)"
export const inverted_qualifier_dash_rx = /\(([\S| ]*?)\) -/g
export const cleanBody = (md: string) => {
    const dash_paren = md.replace(inverted_qualifier_dash_rx, '- ($1)')
    const dedecorated = stripDecorations(dash_paren)
    const cleaned = replace_em_dashes(dedecorated)
    return cleaned + '\n' // add newline for tick_group at end of string
}
