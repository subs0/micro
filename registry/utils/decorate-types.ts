import { ts_interface_prop_K_V_groups } from './regex'
import { getInUnsafe } from '@thi.ng/paths'
// testing
import { typeLines, test_json } from '../../repl/typelines-test'
/**
 * Quicktype produces code along with type definitions. This function grabs only
 * the type definitions from the output by:
 * 1. targetting the lines starting after the last line that starts with '//'
 * 2. keeps following lines that don't start with '//' (first section = types)
 * 3. stops at the first line that follows the kept lines that starts with '//'
 */
const pullTypeLines = (lines: string[]) => {
    let procede = true
    const firstNonComment = lines.findIndex((l) => !l.startsWith('//'))
    const todo = lines.slice(firstNonComment + 1)
    return todo.reduce(
        (a, c) => {
            if (procede) {
                if (c.startsWith('//')) {
                    procede = false
                    return a
                } else return [...a, c]
            } else return a
        },
        ['']
    )
}

/**
 * Iterates through the type lines and adds comments from the JSON payload.
 * Keeps track of the current interface name as a cursor into a dict, whose
 * values are arrays of keys that lead to the property in the JSON payload.
 * These values are aggregated as we traverse the type lines.
 *
 * checks:
 * - if the line starts with export, it's an interface definition
 * - if the line starts with 4 spaces, it's a property (key - value pair)
 *      - if the value is a string, it's terminal (add comment above line)
 */
export const typeLinesAugmenter = (typeLines: string[], json: {}, indent = 4): string[] => {
    const lines = pullTypeLines(typeLines)
    let dict = {}
    let here = ''
    // @ts-ignore
    return lines.reduce((a, c) => {
        if (c.trim() === '') return [...a, c]
        if (c.startsWith('export')) {
            // lookup the value in the dict
            const interface_name = /export interface (\w+)/
            const groups = c.match(interface_name)
            const [_, Interface] = groups ? [...groups] : []
            if (Interface) {
                here = Interface
                return [...a, c]
            } else {
                console.log('No Interface found for `export`:', c)
                return [...a, c]
            }
        } else if (c.startsWith(' '.repeat(indent))) {
            const groups = c.match(ts_interface_prop_K_V_groups)
            const [key, value] = groups ? [...groups].slice(1) : []
            if (key && value) {
                if (value === 'string') {
                    // done; lookup in json doc and inject comment
                    const path = [...(dict[here] || []), key.trim()]
                    const target = getInUnsafe(json, path)
                    const comment =
                        (target && target.replace(/\n/g, ' ').trim()) || 'Docs Not Found'
                    //const value = 'PLACEHOLDER UNTIL JSDOC XFMR'
                    if (value) {
                        return [
                            ...a,
                            `${' '.repeat(indent)}/** ${comment} */`,
                            c.replace('string', 'any'),
                        ]
                    }
                } else {
                    // value is an interface
                    dict[value] = [...(dict[here] || []), key.trim()]
                    return [...a, c]
                }
            } else {
                console.log(`Skipping ${here}: bad key in: ${c}`)
                return a
            }
        } else return [...a, c]
    }, [] as string[])
}

// TEST:
//const test = typeLinesAugmenter(typeLines, test_json) //?
// TODO:
//const escapedTfTemplateEx = (name) => `\${data.lambda_function.${name}.function_arn}`
//console.log(escapedTfTemplateEx('name')) //? => works

/* SKIPPED PROP LINES... 

Skipping ResourceAuditmanagerControl         : bad key in:     "control_mapping_sources.*.source_id"?: string; 
Skipping AuditmanagerFramework               : bad key in:     "control_sets[*].id"?: string; 
Skipping CleanroomsCollaboration             : bad key in:     "data_encryption_metadata.allow_clear_text":                            string; 
Skipping CleanroomsCollaboration             : bad key in:     "data_encryption_metadata.allow_duplicates":                            string; 
Skipping CleanroomsCollaboration             : bad key in:     "data_encryption_metadata.allow_joins_on_columns_with_different_names": string; 
Skipping CleanroomsCollaboration             : bad key in:     "data_encryption_metadata.preserve_nulls":                              string; 
Skipping CleanroomsCollaboration             : bad key in:     "member.account_id":                                                    string; 
Skipping CleanroomsCollaboration             : bad key in:     "member.display_name":                                                  string; 
Skipping CleanroomsCollaboration             : bad key in:     "member.member_abilities":                                              string; 
Skipping CleanroomsConfiguredTable           : bad key in:     "table_reference.database_name": string; 
Skipping CleanroomsConfiguredTable           : bad key in:     "table_reference.table_name":    string; 
Skipping ResourceDynamodbTable               : bad key in:     "replica.*.arn"?:             string; 
Skipping ResourceDynamodbTable               : bad key in:     "replica.*.stream_arn"?:      string; 
Skipping ResourceDynamodbTable               : bad key in:     "replica.*.stream_label"?:    string; 
Skipping EFSReplicationConfiguration         : bad key in:     "destination[0].file_system_id"?: string; 
Skipping EFSReplicationConfiguration         : bad key in:     "destination[0].status"?:         string; 
Skipping ResourceEksCluster                  : bad key in:     "kubernetes_network_config.service_ipv6_cidr"?: string; 
Skipping ResourceElasticsearchDomain         : bad key in:     "vpc_options.0.availability_zones"?: string; 
Skipping ResourceElasticsearchDomain         : bad key in:     "vpc_options.0.vpc_id"?:             string; 
Skipping EmrCluster                          : bad key in:     "core_instance_group.0.id"?:        string; 
Skipping EmrCluster                          : bad key in:     "master_instance_group.0.id"?:      string; 
Skipping ResourceLambdaFunction              : bad key in:     "snap_start.optimization_status"?: string; 
Skipping ResourceLambdaFunction              : bad key in:     "vpc_config.vpc_id"?:              string; 
Skipping ResourceLB                          : bad key in:     "subnet_mapping.*.outpost_id"?:               string; 
Skipping ResourceMskCluster                  : bad key in:     "encryption_info.0.encryption_at_rest_kms_key_arn"?: string; 
Skipping MwaaEnvironment                     : bad key in:     "logging_configuration[0].<LOG_CONFIGURATION_TYPE>[0].cloud_watch_log_group_arn"?: string; 
Skipping ResourceOpensearchDomain            : bad key in:     "vpc_options.0.availability_zones"?: string; 
Skipping ResourceOpensearchDomain            : bad key in:     "vpc_options.0.vpc_id"?:             string; 
Skipping Route53RecoveryreadinessResourceSet : bad key in:     "resources.#.component_id"?: string; 
Skipping SagemakerWorkforce                  : bad key in:     "workforce_vpc_config.0.vpc_endpoint_id"?: string; 
 */