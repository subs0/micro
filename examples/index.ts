import { modulate, config, lambda, api, topic, zone, Provider, Terraform } from '../src/index'
import { namespace } from '../src/config'
import { dockerize } from '../src/modules/docker'
import { ecr_repository } from '../src/modules/ecr'
import { setInUnsafe } from '@thi.ng/paths'
import fs from 'fs'

const test = {}
const proof = [
    {
        docker: {
            registry_auth: {
                a: 1,
                b: 2,
            },
        },
    },
]

//setInUnsafe(test, ['provider'], proof) //

const tags = { Moms: 'Spaghetti' }
const apex = 'chopshop-test.net'
const subdomain = 'test1'
const name = 'throwaway-test-123'
// ======= DOMAIN =======

const route53zone = ({ apex }) => ({
    zone: zone({ apex }),
})

const [Zone, out_zone] = modulate({ domain: route53zone })({ apex })
const zone_id = out_zone?.zone?.data?.route53_zone?.zone_id //

// ======= TOPIC =======

const snsTopic = ({ name, tags }) => ({
    sns: topic({ name, tags }),
})

const [Topic, out_topic] = modulate({ topic: snsTopic })({ name, tags })
const topic_arn = out_topic?.sns?.resource?.sns_topic?.arn //

// ======= DOCKER =======

const repo_name = `${name.split('.').reverse().join('/')}/${subdomain}` //?
const repoMod = modulate({ repo: ecr_repository })
const [Repo, out_repo] = repoMod({
    name: repo_name,
    tags,
})

JSON.stringify(Repo, null, 4) //?
JSON.stringify(out_repo, null, 4) //?

const dockerMod = modulate({ docker: dockerize }, ['docker_image', 'docker_registry_image'])

const [Docker, out_docker] = dockerMod({
    name,
    src_path: '${path.root}/src/docker',
    runtime: 'python3.8',
    artifacts_dir: 'builds',
    builder: '${path.root}/src/utils/package.py',
    docker: {
        dockerfile: 'Dockerfile',
        repo: repo_name,
    },
})

//JSON.stringify(Docker, null, 4) //?
//JSON.stringify(out_docker, null, 4) //?

const image_uri = out_docker?.registry_img?.resource?.docker_registry_image?.name //?

// ======= LAMBDA =======

const lambdaMod = modulate({ ms1: lambda })
const [Lambda, out_lambda] = lambdaMod({
    name,
    //file_path: '${path.root}/lambdas/template/zipped/handler.py.zip',
    file_path: image_uri,
    handler: 'handler.handler',
    sns: {
        upstream: {
            topic_arn,
            filter_policy: {
                type: ['video'],
            },
        },
        downstream: {
            topic_arn,
            message_attrs: {
                type: {
                    DataType: 'String',
                    StringValue: 'audio',
                },
            },
        },
    },
    tags,
})

JSON.stringify(Lambda, null, 4) //?
JSON.stringify(out_lambda, null, 4) //?

const functionInvokeArn = out_lambda?.lambda?.resource?.lambda_function?.invoke_arn //
const functionName = out_lambda?.lambda?.resource?.lambda_function?.function_name

// ======= API =======

const [Api, out_api] = modulate({ api })({
    apex,
    zone_id,
    subdomainRoutes: {
        [subdomain]: {
            'ANY /': {
                invoke_arn: functionInvokeArn,
                function_name: functionName,
            },
        },
    },
    tags,
})
//JSON.stringify(out_api, null, 4)

// ======= COMPILE =======

// Type = Provider
const provider = {
    provider: [
        {
            aws: {
                region: 'us-east-2',
                profile: 'chopshop',
            },
        },
    ],
}

// Type = Terraform
const terraform = {
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
        },
    },
}

const micro = {
    Zone,
    Topic,
    Repo,
    Docker,
    Lambda,
    Api,
    provider,
    terraform,
}

const compiled = namespace({ micro })
const json = JSON.stringify(compiled, null, 2) //?

fs.writeFileSync('micro.tf.json', json)

// ~~~888~~~   ,88~-_   888~-_     ,88~-_
//    888     d888   \  888   \   d888   \
//    888    88888    | 888    | 88888    |
//    888    88888    | 888    | 88888    |
//    888     Y888   /  888   /   Y888   /
//    888      `88_-~   888_-~     `88_-~

// - Resolve FIXMEs
// - JIT lambda compilation for:
//   - zipped lambdas
//   - image lambdas
// - README: add note about naming files the same as your modules, so they can
//   be identified from payload

/**
 * Outline of microservice module:
 * - s3
 *   - bucket
 * - sns
 *   - upstream topic (subscribed to by lambda)
 *   - downstream topic (published to by lambda)
 * - lambda
 *   - environment variables
 *     - S3_BUCKET_NAME (for functions that need to read/write to s3)
 *     - SNS_TOPIC_ARN (downstream topic to publish to sns)
 *   - sns subscription (upstream topic)
 *     - filter policy
 *   - elastic file system (optional)
 *     - access point
 *     - mount target
 * - api gateway (optional)
 *   - domain
 *     - subdomain
 *       - routes
 *         - methods
 * - required iam permissions
 *   - lambda
 *     - s3
 *       - read/write
 *     - sns
 *       - publish
 *       - subscribe
 *     - cloudwatch
 *       - logs
 *       - metrics
 *   - sns
 *     - lambda (via AllowExecutionFromSNS)
 *   - api gateway (optional)
 *     - lambda (via AllowExecutionFromAPIGateway)
 */

/**
 * References:
 * [1]: https://dev.to/madflanderz/how-to-get-parts-of-an-typescript-interface-3mko
 * [2]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_route#argument-reference
 * [3]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_integration#response_parameters
 * [4]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function#lambda-file-systems
 */
