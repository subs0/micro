import { ts_interface_prop_K_V_groups } from './regex'
import { getInUnsafe } from '@thi.ng/paths'
// for testing:
//import { typeLines, test_json } from '../../repl/typelines-test'

/**
 * Quicktype produces code along with type definitions. This function grabs only
 * the type definitions from the output by:
 * 1. targetting the lines starting after the last line that starts with '//'
 * 2. keeps following lines that don't start with '//' (first section = types)
 * 3. stops at the first line that follows the kept lines that starts with '//'
 */
const pullTypeLines = (lines: string[]): string[] => {
    let procede = true
    const firstNonComment = lines.findIndex((l) => !l.startsWith('//'))
    const todo = lines.slice(firstNonComment + 1)
    return todo.reduce((a, c) => {
        if (procede) {
            if (c.startsWith('//')) {
                procede = false
                return a
            } else return [...a, c]
        } else return a
    }, [] as string[])
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
    let dict = {} as { [key: string]: string[] }
    let scope = ''
    const augmentedLines = lines.reduce((a, c) => {
        if (c.trim() === '') return [...a, c]
        if (c.startsWith('export')) {
            // lookup the value in the dict
            const interface_name = /export interface (\w+)/
            const groups = c.match(interface_name)
            const [_, name] = groups ? [...groups] : []
            if (name) {
                scope = name
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
                    const path = [...(dict[scope] || []), key.trim()]
                    const doc = getInUnsafe(json, path)
                    const [root, type] = path
                    const lookup = {
                        resource: 'resources',
                        data: 'data-sources',
                    }[root]
                    const attr = path.reverse()[0]
                    const href = `https://registry.terraform.io/providers/hashicorp/aws/latest/docs/${lookup}/${type}#${attr}`
                    const comment = (doc && doc.replace(/\n/g, ' ').trim()) || 'Docs Not Found'
                    return [
                        ...a,
                        `${' '.repeat(indent)}/** ${comment} [DOCS 🔗](${href})*/`,
                        c.replace('string', 'any'),
                    ]
                } else {
                    // value is an interface
                    dict[value] = [...(dict[scope] || []), key.trim()]
                    return [...a, c]
                }
            } else {
                console.log(`Skipping ${scope}: bad key in: ${c}`)
                return a
            }
        } else return [...a, c]
    }, [] as string[])
    return augmentedLines
}

// TEST:
//const test = typeLinesAugmenter(typeLines, test_json) //?


/* SKIPPED PROP LINES... 
Skipping DataAcmpcaCertificateAuthority: bad key in:     "revocation_configuration.0.crl_configuration"?:                      string; 
Skipping DataAcmpcaCertificateAuthority: bad key in:     "revocation_configuration.0.crl_configuration.0.custom_cname"?:       string; 
Skipping DataAcmpcaCertificateAuthority: bad key in:     "revocation_configuration.0.crl_configuration.0.enabled"?:            string; 
Skipping DataAcmpcaCertificateAuthority: bad key in:     "revocation_configuration.0.crl_configuration.0.expiration_in_days"?: string; 
Skipping DataAcmpcaCertificateAuthority: bad key in:     "revocation_configuration.0.crl_configuration.0.s3_bucket_name"?:     string; 
Skipping DataAcmpcaCertificateAuthority: bad key in:     "revocation_configuration.0.crl_configuration.0.s3_object_acl"?:      string; 
Skipping DataAcmpcaCertificateAuthority: bad key in:     "revocation_configuration.0.ocsp_configuration.0.enabled"?:           string; 
Skipping DataAcmpcaCertificateAuthority: bad key in:     "revocation_configuration.0.ocsp_configuration.0.ocsp_custom_cname"?: string; 
Skipping DataAmi: bad key in:     "product_codes.#.product_code_id"?:   string; 
Skipping DataAmi: bad key in:     "product_codes.#.product_code_type"?: string; 
Skipping DataAmi: bad key in:     "state_reason.code"?:                 string; 
Skipping DataAmi: bad key in:     "state_reason.message"?:              string; 
Skipping DataAmi: bad key in:     "tags.#.key"?:                        string; 
Skipping DataAmi: bad key in:     "tags.#.value"?:                      string; 
Skipping DataBatchJobQueue: bad key in:     "compute_environment_order.#.order"?:               string; 
Skipping DataBatchJobQueue: bad key in:     "compute_environment_order.#.compute_environment"?: string; 
Skipping DataCloudhsmV2Cluster: bad key in:     "cluster_certificates.0.cluster_certificate"?:               string; 
Skipping DataCloudhsmV2Cluster: bad key in:     "cluster_certificates.0.cluster_csr"?:                       string; 
Skipping DataCloudhsmV2Cluster: bad key in:     "cluster_certificates.0.aws_hardware_certificate"?:          string; 
Skipping DataCloudhsmV2Cluster: bad key in:     "cluster_certificates.0.hsm_certificate"?:                   string; 
Skipping DataCloudhsmV2Cluster: bad key in:     "cluster_certificates.0.manufacturer_hardware_certificate"?: string; 
Skipping Ec2InstanceType: bad key in:     "fpgas.#.count"?:                         string; 
Skipping Ec2InstanceType: bad key in:     "fpgas.#.manufacturer"?:                  string; 
Skipping Ec2InstanceType: bad key in:     "fpgas.#.memory_size"?:                   string; 
Skipping Ec2InstanceType: bad key in:     "fpgas.#.name"?:                          string; 
Skipping Ec2InstanceType: bad key in:     "gpus.#.count"?:                          string; 
Skipping Ec2InstanceType: bad key in:     "gpus.#.manufacturer"?:                   string; 
Skipping Ec2InstanceType: bad key in:     "gpus.#.memory_size"?:                    string; 
Skipping Ec2InstanceType: bad key in:     "gpus.#.name"?:                           string; 
Skipping Ec2InstanceType: bad key in:     "inference_accelerators.#.count"?:        string; 
Skipping Ec2InstanceType: bad key in:     "inference_accelerators.#.manufacturer"?: string; 
Skipping Ec2InstanceType: bad key in:     "inference_accelerators.#.name"?:         string; 
Skipping Ec2InstanceType: bad key in:     "instance_disks.#.count"?:                string; 
Skipping Ec2InstanceType: bad key in:     "instance_disks.#.size"?:                 string; 
Skipping Ec2InstanceType: bad key in:     "instance_disks.#.type"?:                 string; 
Skipping DataSsmincidentsResponsePlan: bad key in:     "1"?:                 string; 
Skipping DataSsmincidentsResponsePlan: bad key in:     "2"?:                 string; 
Skipping DataSsmincidentsResponsePlan: bad key in:     "3"?:                 string; 
Skipping DataSsmincidentsResponsePlan: bad key in:     "4"?:                 string; 
Skipping DataSsmincidentsResponsePlan: bad key in:     "5"?:                 string; 
Skipping ResourceAuditmanagerControl: bad key in:     "control_mapping_sources.*.source_id"?: string; 
Skipping AuditmanagerFramework: bad key in:     "control_sets[*].id"?: string; 
Skipping CleanroomsCollaboration: bad key in:     "data_encryption_metadata.allow_clear_text":                            string; 
Skipping CleanroomsCollaboration: bad key in:     "data_encryption_metadata.allow_duplicates":                            string; 
Skipping CleanroomsCollaboration: bad key in:     "data_encryption_metadata.allow_joins_on_columns_with_different_names": string; 
Skipping CleanroomsCollaboration: bad key in:     "data_encryption_metadata.preserve_nulls":                              string; 
Skipping CleanroomsCollaboration: bad key in:     "member.account_id":                                                    string; 
Skipping CleanroomsCollaboration: bad key in:     "member.display_name":                                                  string; 
Skipping CleanroomsCollaboration: bad key in:     "member.member_abilities":                                              string; 
Skipping CleanroomsConfiguredTable: bad key in:     "table_reference.database_name": string; 
Skipping CleanroomsConfiguredTable: bad key in:     "table_reference.table_name":    string; 
Skipping ResourceCloudhsmV2Cluster: bad key in:     "cluster_certificates.0.cluster_certificate"?:               string; 
Skipping ResourceCloudhsmV2Cluster: bad key in:     "cluster_certificates.0.cluster_csr"?:                       string; 
Skipping ResourceCloudhsmV2Cluster: bad key in:     "cluster_certificates.0.aws_hardware_certificate"?:          string; 
Skipping ResourceCloudhsmV2Cluster: bad key in:     "cluster_certificates.0.hsm_certificate"?:                   string; 
Skipping ResourceCloudhsmV2Cluster: bad key in:     "cluster_certificates.0.manufacturer_hardware_certificate"?: string; 
Skipping ResourceDynamodbTable: bad key in:     "replica.*.arn"?:             string; 
Skipping ResourceDynamodbTable: bad key in:     "replica.*.stream_arn"?:      string; 
Skipping ResourceDynamodbTable: bad key in:     "replica.*.stream_label"?:    string; 
Skipping EFSReplicationConfiguration: bad key in:     "destination[0].file_system_id"?: string; 
Skipping EFSReplicationConfiguration: bad key in:     "destination[0].status"?:         string; 
Skipping ResourceEksCluster: bad key in:     "kubernetes_network_config.service_ipv6_cidr"?: string; 
Skipping ResourceElasticsearchDomain: bad key in:     "vpc_options.0.availability_zones"?: string; 
Skipping ResourceElasticsearchDomain: bad key in:     "vpc_options.0.vpc_id"?:             string; 
Skipping EmrCluster: bad key in:     "core_instance_group.0.id"?:        string; 
Skipping EmrCluster: bad key in:     "master_instance_group.0.id"?:      string; 
Skipping ResourceLambdaFunction: bad key in:     "snap_start.optimization_status"?:   string; 
Skipping ResourceLambdaFunction: bad key in:     "vpc_config.vpc_id"?:                string; 
Skipping ResourceLB: bad key in:     "subnet_mapping.*.outpost_id"?:               string; 
Skipping ResourceMqBroker: bad key in:     "instances.0.console_url"?:     string; 
Skipping ResourceMqBroker: bad key in:     "instances.0.ip_address"?:      string; 
Skipping ResourceMqBroker: bad key in:     "instances.0.endpoints"?:       string; 
Skipping ResourceMskCluster: bad key in:     "encryption_info.0.encryption_at_rest_kms_key_arn"?: string; 
Skipping MwaaEnvironment: bad key in:     "logging_configuration[0].<LOG_CONFIGURATION_TYPE>[0].cloud_watch_log_group_arn"?: string; 
Skipping ResourceOpensearchDomain: bad key in:     "vpc_options.0.availability_zones"?: string; 
Skipping ResourceOpensearchDomain: bad key in:     "vpc_options.0.vpc_id"?:             string; 
Skipping Route53RecoveryreadinessResourceSet: bad key in:     "resources.#.component_id"?: string; 
Skipping SagemakerWorkforce: bad key in:     "workforce_vpc_config.0.vpc_endpoint_id"?: string; 
Skipping ResourceSsmincidentsResponsePlan: bad key in:     "1"?:                 string; 
Skipping ResourceSsmincidentsResponsePlan: bad key in:     "2"?:                 string; 
Skipping ResourceSsmincidentsResponsePlan: bad key in:     "3"?:                 string; 
Skipping ResourceSsmincidentsResponsePlan: bad key in:     "4"?:                 string; 
Skipping ResourceSsmincidentsResponsePlan: bad key in:     "5"?:                 string; 
 */