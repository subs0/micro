import { test } from 'quicktype-core/dist/MarkovChain'

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
// replace – with -
export const em_dash = /–/g
export const replace_em_dashes = (md: string) => md.replace(em_dash, '-')

// matches key - value (greedy) pairs in a terraform arg/attr list item
//export const tick_group = /\n\*\s`([^`]+?)`\s-\s([^\n]+)/g
// improve tick_group second group to exclude a newline followed by *
//export const tick_group = /\n\*\s`([^`]+?)`\s-\s([^*]+?(?=\n\*|$))/g

export const tick_group = /\*\s`([^`]+?)`\s-\s([^*]+?(?=\n?\*|~|$))/g

export const headRx = /#*?\s(.+)/

export const required = /\(required\)? /i
export const optional = /\(optional\)? /i

// replace **Deprecated** with Deprecated
export const deprecated = /deprecated/i
export const deprecated_bold = /\*\*deprecated\*\*/gi
export const required_optional = /\((required|optional)\)? -/gi
// replaces "\(required\) -" and "\(optional\) -" with "- \(required\)" and "- \(optional\)"
export const clean_flags = (md: string) => {
    const flipped = md.replace(required_optional, '- ($1)')
    const dashed = flipped.replace(deprecated_bold, 'Deprecated')
    const cleaned = replace_em_dashes(dashed)
    return cleaned
}
// groups key(?):value pairs from a typescript interface property
export const ts_interface_prop_K_V_groups = /(\w+?)\??:\s+(\w+?);/

let test_content = `
---
subcategory: \"EKS (Elastic Kubernetes)\"
layout: \"aws\"
page_title: \"AWS: aws_eks_addon\"
description: |-
  Retrieve information about an EKS add-on
---

# Data Source: aws_eks_addon

Retrieve information about an EKS add-on.

## Example Usage

\`\`\`terraform
data \"aws_eks_addon\" \"example\" {
      addon_name   = \"vpc-cni\"
  cluster_name = aws_eks_cluster.example.name
}

output \"eks_addon_outputs\" {
      value = aws_eks_addon.example
}
\`\`\`

## Argument Reference

* \`addon_name\` – (Required) Name of the EKS add-on. The name must match one of
  the names returned by [list-addon](https://docs.aws.amazon.com/cli/latest/reference/eks/list-addons.html).
* \`cluster_name\` – (Required) Name of the EKS Cluster. Must be between 1-100 characters in length. Must begin with an alphanumeric character, and must only contain alphanumeric characters, dashes and underscores (\`^[0-9A-Za-z][A-Za-z0-9\\-_]+$\`).

## Attribute Reference

This data source exports the following attributes in addition to the arguments above:

* \`arn\` - ARN of the EKS add-on.
* \`addon_version\` - Version of EKS add-on.
* \`configuration_values\` - Configuration values for the addon with a single JSON string.
* \`service_account_role_arn\` - ARN of IAM role used for EKS add-on. If value is empty -
  then add-on uses the IAM role assigned to the EKS Cluster node.
* \`id\` - EKS Cluster name and EKS add-on name separated by a colon (\`:\`).
* \`created_at\` - Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the EKS add-on was created.
* \`modified_at\` - Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the EKS add-on was updated.

`

// find headings
//const rxKVgroups = [...replace_em_dashes(test_content).matchAll(tick_group)].map((x) => ({
//    [x[1]]: x[2],
//})) //?
