"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanBody = exports.inverted_qualifier_dash_rx = exports.ts_interface_prop_K_V_groups = exports.deprecated = exports.optional = exports.required = exports.tick_group = exports.head_rx = exports.replace_em_dashes = exports.em_dash = exports.nn_no_punctuation_nn = exports.n_n_n_ = exports.nn_continuous_str_nn = exports.nn_h5 = exports.nn_h4 = exports.nn_h3 = exports.nn_h2 = exports.nn_h1 = exports.md_tokens_rx = exports.count_tables = exports.md_table_rx = exports.above_table_rx = exports.numbered_nn_rx = exports.numbered_rx = exports.whitespace_regex = void 0;
// more than one whitespace or a newline
exports.whitespace_regex = /\s+?/;
exports.numbered_rx = /\s\d{1,3}\.\s/;
// matches a numbered list item without any indentation followed by a double newline
exports.numbered_nn_rx = /^\d{1,3}\.\s[^\n]+?\n\n/m;
// regex that matches the start of a double newline above a table
exports.above_table_rx = /(?=\n\n\|)/;
// matches a complete markdown table
exports.md_table_rx = /(([^\n]+?\|\n?)+(|$))/;
exports.count_tables = /\n\n\|/m;
exports.md_tokens_rx = /\\n|\n|#/;
// matches double newlines above markdown headings:
exports.nn_h1 = /\n\n(?=# )/;
exports.nn_h2 = /\n\n(?=## )/;
exports.nn_h3 = /\n\n(?=### )/;
exports.nn_h4 = /\n\n(?=#### )/;
exports.nn_h5 = /\n\n(?=##### )/;
// matches double newlines above unmarked headings (non-whitespace strings)
exports.nn_continuous_str_nn = /\n\n(?=\S+?\n)/;
// match a triple newline with any trailing whitespace on each newline
exports.n_n_n_ = /\n\s*?\n\s*?\n\s*?/;
// matches double newlines above a line with no punctuation followed by a double newline
exports.nn_no_punctuation_nn = /\n\n(?=[^.,:;!?*]+?\n\n)/;
// replace – with -
exports.em_dash = /–/g;
const replace_em_dashes = (md) => md.replace(exports.em_dash, '-');
exports.replace_em_dashes = replace_em_dashes;
// matches key - value (greedy) pairs in a terraform arg/attr list item
//export const tick_group = /\n\*\s`([^`]+?)`\s-\s([^\n]+)/g
// improve tick_group second group to exclude a newline followed by *
//export const tick_group = /\n\*\s`([^`]+?)`\s-\s([^*]+?(?=\n\*|$))/g
// 🔥 skipping: registry/docs/terraform-provider-aws/43475/3226064.json
const testtickhead1 = '\n\n### `custom_key` Block\n\n';
const testtickhead2 = '\n\n### RateLimit `forwarded_ip` Block\n\n';
const testtickhead3 = '\n\n### RateLimit `header` Block\n\n';
// 🔥 due to issues with organization (Attributes intertwined with Arguments and
// code blocks in headings...)
exports.head_rx = /#{1,6}\s([^\n]+)/;
exports.tick_group = /\*\s`([^`|[|.]+?)`\s-?\s?([^*]+?(?=\*|##|$))/g;
// 🤯                            ^^^^^^^^^^^^               ^^^^^^^^^^^^^^^^^^
//                               key                        value
// match       * `(not ` || number || . )` [maybe '- ']...until *|##|$ (greedy)
exports.required = /\(required\)?/i; // fails on "(required for" in description
exports.optional = /\(optional\)?/i;
// replace **Deprecated** with Deprecated
exports.deprecated = /deprecated/i;
// groups key(?):value pairs from a typescript interface property
exports.ts_interface_prop_K_V_groups = /(\w+?)\??:\s+(\w+?);/;
// removes bold and italic markdown from text
const bold_text_rx = /(\*\*)([\S| ]*?)\1/g;
const italic_text_rx = /(\*)([a-z|A-Z| ]*?)\1/g;
const stripDecorations = (md) => {
    const debolded = md.replace(bold_text_rx, '$2');
    const undecorated = debolded.replace(italic_text_rx, '$2');
    return undecorated;
};
// replaces "\(required\) -" and "\(optional\) -" with "- \(required\)" and "- \(optional\)"
exports.inverted_qualifier_dash_rx = /\(([\S| ]*?)\) -/g;
const cleanBody = (md) => {
    const dash_paren = md.replace(exports.inverted_qualifier_dash_rx, '- ($1)');
    const dedecorated = stripDecorations(dash_paren);
    const cleaned = (0, exports.replace_em_dashes)(dedecorated);
    return cleaned + '\n'; // add newline for tick_group at end of string
};
exports.cleanBody = cleanBody;
//# sourceMappingURL=regex.js.map