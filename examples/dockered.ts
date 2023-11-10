import { modulate, namespace, IProvider, ITerraform } from '../src/index'
import { api, build, ecr_repository, lambda, topic, zone } from '../src/modules/index'
import fs from 'fs'

const tags = { Moms: 'Spaghetti' }
const apex = 'chopshop-test.net'
const subdomain = 'test1'
const my_name = 'throwaway-test-123'

// ======= TOPIC =======

const snsTopic = ({ name, tags }) => ({
    sns: topic({ name, tags }),
})

const [Topic, topic_refs] = modulate({ topic: snsTopic })({ name: my_name, tags })
const topic_arn = topic_refs?.sns?.resource?.sns_topic?.arn //

// ======= DOCKER =======

const repo_name = `${my_name}/${subdomain}` //

const repoMod = modulate({ ecr_repository })
const [Repo, repo_refs] = repoMod({
    name: repo_name,
    tags,
})

//JSON.stringify(Repo, null, 4) //
//JSON.stringify(repo_refs, null, 4) //

const repo = repo_refs?.ecr_repo?.resource?.ecr_repository?.name //?

const dockerMod = modulate({ build }, ['docker_image', 'docker_registry_image'])

const [Docker, docker_refs] = dockerMod({
    name: my_name,
    src_path: './src/docker',
    runtime: 'python3.11',
    artifacts_dir: 'builds',
    builder: '${path.root}/src/utils/package.py',
    docker: {
        repo,
        dockerfile: 'Dockerfile',
        platform: 'linux/amd64',
    },
})

//JSON.stringify(Docker, null, 4) //?
//JSON.stringify(docker_refs, null, 4) //?
const image_uri = docker_refs?.registry_image?.resource?.docker_registry_image?.name //?

// ======= LAMBDA =======

const lambdaMod = modulate({ lambda })
const [Lambda, lambda_refs] = lambdaMod({
    name: my_name,
    //file_path: '${path.root}/lambdas/template/zipped/handler.py.zip',
    file_path: image_uri,
    //handler: 'handler.handler',
    runtime: 'python3.11',
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

JSON.stringify(Lambda, null, 4) //
JSON.stringify(lambda_refs, null, 4) //

const functionInvokeArn = lambda_refs?.function?.resource?.lambda_function?.invoke_arn //?
const functionArn = lambda_refs?.function?.resource?.lambda_function?.arn //?
const functionName = lambda_refs?.function?.resource?.lambda_function?.function_name //?

// ======= DOMAIN =======

const route53zone = ({ apex }) => ({
    zone: zone({ apex }),
})

const [Zone, zone_refs] = modulate({ zone: route53zone })({ apex })
const zone_id = zone_refs?.zone?.data?.route53_zone?.zone_id //

// ======= API =======

const [Api, api_refs] = modulate({ api })({
    apex,
    zone_id,
    subdomainRoutes: {
        [subdomain]: {
            'ANY /': {
                invoke_arn: functionInvokeArn,
                function_arn: functionArn,
            },
        },
    },
    tags,
})

JSON.stringify(api_refs, null, 4) //
JSON.stringify(Api, null, 4) //

// ======= COMPILE =======

// Type = Provider
const provider: IProvider = {
    provider: [
        {
            aws: {
                region: 'us-east-2',
                profile: 'chopshop',
            },
        },
    ],
}

const terraform: ITerraform = {
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

const example = {
    Zone,
    Topic,
    Repo,
    Docker,
    Lambda,
    Api,
    provider,
    terraform,
}

const compiled = namespace({ example })

const json = JSON.stringify(compiled, null, 4) //

console.log(json)
fs.writeFileSync('example.tf.json', json)

// ~~~888~~~   ,88~-_   888~-_     ,88~-_
//    888     d888   \  888   \   d888   \
//    888    88888    | 888    | 88888    |
//    888    88888    | 888    | 88888    |
//    888     Y888   /  888   /   Y888   /
//    888      `88_-~   888_-~     `88_-~

// - Resolve FIXMEs
// - JIT lambda compilation for:
//   - zipped lambdas
// - move archive to it's own module
// - add warnings to any missing dependencies (e.g., Lambda?.function?.resource?.lambda_function?.invoke_arn)
// - README: add note about naming files the same as your modules, so they can
//   be identified from payload
// https://github.com/terraform-aws-modules/terraform-aws-lambda/blob/v6.0.0/examples/build-package/main.tf

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
