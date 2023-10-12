import fs from 'fs'
import { test } from 'quicktype-core/dist/MarkovChain'

const file = fs.readFileSync('./repl/debug_md2json.md', 'utf8')

const testSnippet = `
### \`statement\`

~> **NOTE:** Even though the [IAM Documentation]

The following arguments are optional:

* \`actions\` (Optional) - List of actions that this statement either allows or denies. For example, \`[\"ec2:RunInstances\", \"s3:*\"]\`.
* \`condition\` (Optional) - Configuration block for a condition. Detailed below.
* \`effect\` (Optional) - Whether this statement allows or denies the given actions. Valid values are \`Allow\` and \`Deny\`. Defaults to \`Allow\`.
* \`not_actions\` (Optional) - List of actions that this statement does *not* apply to. Use to apply a policy statement to all actions *except* those listed.
* \`not_principals\` (Optional) - Like \`principals\` except these are principals that the statement does *not* apply to.
* \`not_resources\` (Optional) - List of resource ARNs that this statement does *not* apply to. Use to apply a policy statement to all resources *except* those listed. Conflicts with \`resources\`.
* \`principals\` (Optional) - Configuration block for principals. Detailed below.
* \`resources\` (Optional) - List of resource ARNs that this statement applies to. This is required by AWS if used for an IAM policy. Conflicts with \`not_resources\`.
* \`sid\` (Optional) - Sid (statement ID) is an identifier for a policy statement.

### \`condition\`

A \`condition\` constrains **BOLD** a statement applies in a particular situation. Conditions can be specific to an AWS service. When using multiple \`condition\` blocks, they must **all bold text** evaluate to true for the policy statement to apply. In other words, AWS evaluates the conditions as though with an \"AND\" boolean operation.

The following arguments are required:

* \`test\` (Required) Name of the [IAM condition operator](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html) to evaluate.
* \`values\` (Required) Values to evaluate the condition against. If multiple values are provided, the condition matches if at least one of them applies. That is, AWS evaluates multiple values as though using an \"OR\" boolean operation.
* \`variable\` (Required) Name of a [Context Variable](http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#AvailableKeys) to apply the condition to. Context variables may either be standard AWS variables starting with \`aws:\` or service-specific variables prefixed with the service name.

* \`replace_security_groups_on_destroy\` - (Optional, **Deprecated**) **AWS no longer supports this operation. This attribute now has no effect and will be removed in a future major version.** Whether to replace the security groups on associated lambda network interfaces upon destruction. Removing these security groups from orphaned network interfaces can speed up security group deletion times by avoiding a dependency on AWS's internal cleanup operations. By default, the ENI security groups will be replaced with the \`default\` security group in the function's VPC. Set the \`replacement_security_group_ids\` attribute to use a custom list of security groups for replacement.
* \`replacement_security_group_ids\` - (Optional, **Deprecated**) List of security group IDs to assign to orphaned Lambda function network interfaces upon destruction. \`replace_security_groups_on_destroy\` must be set to \`true\` to use this attribute.

`

// debolding md regex
const decorated_text_rx = /(\*){1,2}([a-z|A-Z| ]*?)\1/g
// The above regex doesn't grab the last straggling * in a string like:
// **this is some bold text** and some *italics* text
// which currently ends up as:
// this is some bold text* and some italics text

const bold_text_rx = /(\*\*)([\S| ]*?)\1/g
const italic_text_rx = /(\*)([a-z|A-Z| ]*?)\1/g

// removes bold and italic markdown from text
const strip_decorations_rx = (md: string) => {
    const debolded = md.replace(bold_text_rx, '$2')
    const deitalicized = debolded.replace(italic_text_rx, '$2')
    return deitalicized
}
//strip_decorations_rx(testSnippet) //?
//testSnippet.match(/(detailed|documented) below/i) //?
