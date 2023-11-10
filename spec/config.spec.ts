import * as c from '../src/config'
import { setInUnsafe } from '@thi.ng/paths'

const TEST_PATH_exportArrow = [
    'api',
    'cert',
    'test1',
    'resource',
    'acm_certificate',
    'domain_validation_options',
    0,
    'resource_record_type',
]
const TEST_OUTPUT_exportArrow =
    '${one(resource.aws_acm_certificate.api_cert_test1.domain_validation_options).resource_record_type}'

const STUBBIES = ['aws_region', 'aws_caller_identity', 'aws_ecr_authorization_token']

const TEST_OUTPUT_modulator = c.fold({
    target: TEST_TARGET_modulator,
    provider: 'aws',
    refs: false,
})
const TEST_JSON_modulator = JSON.stringify(TEST_OUTPUT_modulator, null, 4)
const TEST_modulator =
    TEST_JSON_modulator ===
    JSON.stringify(
        setInUnsafe(TEST_TARGET_modulator, TEST_PATH_exportArrow, TEST_OUTPUT_exportArrow)
    ) //?

const TEST_DATA_namespace = {
    bleep: {
        bloop: TEST_OUTPUT_modulator,
        beep: TEST_OUTPUT_modulator,
    },
    ferp: {
        bloop: TEST_OUTPUT_modulator,
        beep: TEST_OUTPUT_modulator,
    },
}
const TEST_OUTPUT_namespace = c.namespace(TEST_DATA_namespace)
const TEST_JSON_namespace = JSON.stringify(TEST_OUTPUT_namespace, null, 4) //?
