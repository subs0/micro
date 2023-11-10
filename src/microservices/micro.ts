import { namespace } from '../config'
import { IProvider, ITerraform } from 'src/constants'
import { topicModule, zoneModule } from '../modules/index'
import { Node } from './node'
import fs from 'fs'

const name = 'test2'

const tags = { env: 'test' }

const apex = 'chopshop-test.net'

const [ZONE, ZONE_REFS] = zoneModule({ apex })
const zone_id = ZONE_REFS?.zone?.data?.route53_zone?.zone_id

const [TOPIC, TOPIC_REFS] = topicModule({ name, tags })

const topic_arn = TOPIC_REFS?.sns?.resource?.sns_topic?.arn

const sns = {
    upstream: {
        topic_arn: `<--${topic_arn}`,
        filter_policy: {
            type: ['video'],
        },
    },
    downstream: {
        topic_arn: `<--${topic_arn}`,
        message_attrs: {
            type: {
                DataType: 'String',
                StringValue: 'audio',
            },
        },
    },
}


const NODE1 = Node({
    name,
    tags,
    api: {
        apex,
        zone_id: `<--${zone_id}`,
        methods: ['ANY'],
        subdomain: name,
    },
    sns,
    bucket: true,
    memory_size: 3000, // See above
    tmp_storage: 1024,
    timeout: 60,
    package_py: '${path.root}/src/utils/package.py',
    // if zip...
    src_path: '${path.root}/throwaway/ML/lambdas/multipart_upload',
    handler: 'index.handler',
    runtime: 'python3.11',
})

const NODE2 = Node({
    name: name + 'b',
    tags,
    api: {
        zone_id: `<--${zone_id}`,
        apex,
        methods: ['ANY'],
        subdomain: name + 'b',
    },
    sns,
    bucket: true,
    memory_size: 3000, // See above
    tmp_storage: 1024,
    timeout: 60,
    package_py: '${path.root}/src/utils/package.py',
    // if docker...
    src_path: '${path.root}/src/docker',
    artifacts_dir: '${path.root}/builds',
    docker: {
        dockerfile: 'Dockerfile',
        platform: 'linux/amd64',
    },
})

const PROVIDER: IProvider = {
    provider: {
        aws: {
            region: 'us-east-2',
            profile: 'chopshop',
        },
    },
}

const TERRAFORM: ITerraform = {
    terraform: {
        required_providers: {
            aws: {
                source: 'hashicorp/aws',
                version: '>= 5.20',
            },
            // for docker
            docker: {
                source: 'kreuzwerker/docker',
                version: '>= 3.0',
            },
            // for null resources
            null: {
                source: 'hashicorp/null',
                version: '>= 2.0',
            },
            random: {
                source: 'hashicorp/random',
                version: '>= 3.0',
            },
        },
    },
}

const MERGED = namespace({
    merged: {
        ZONE,
        NODE1,
        NODE2,
        TOPIC,
        PROVIDER,
        TERRAFORM,
    },
})

const out = JSON.stringify(MERGED, null, 4) //?

fs.writeFileSync('./example.tf.json', out)
