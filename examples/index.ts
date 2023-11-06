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
const my_name = 'throwaway-test-123'

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

const repo_name = `${my_name.split('.').reverse().join('/')}/${subdomain}` //

const repoMod = modulate({ repo: ecr_repository })
const [Repo, out_repo] = repoMod({
    name: repo_name,
    tags,
})

JSON.stringify(Repo, null, 4) //
JSON.stringify(out_repo, null, 4) //

const dockerMod = modulate({ docker: dockerize }, ['docker_image', 'docker_registry_image'])
const repo = out_repo?.ecr_repo?.resource?.ecr_repository?.name //?

const [Docker, out_docker] = dockerMod({
    name: my_name,
    src_path: './src/docker',
    runtime: 'python3.11',
    artifacts_dir: 'builds',
    builder: '${path.root}/src/utils/package.py',
    docker: {
        dockerfile: 'Dockerfile',
        repo,
        platform: 'linux/amd64',
    },
})
//JSON.stringify(Docker, null, 4) //?
//JSON.stringify(out_docker, null, 4) //?

const image_uri = out_docker?.registry_img?.resource?.docker_registry_image?.name //?

// ======= LAMBDA =======

const lambdaMod = modulate({ ms1: lambda })
const [Lambda, out_lambda] = lambdaMod({
    name: my_name,
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

JSON.stringify(Lambda, null, 4) //
JSON.stringify(out_lambda, null, 4) //

const functionInvokeArn = out_lambda?.lambda?.resource?.lambda_function?.invoke_arn //
const functionName = out_lambda?.lambda?.resource?.lambda_function?.function_name //

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
JSON.stringify(out_api, null, 4) //
JSON.stringify(Api, null, 4) //

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

const json = JSON.stringify(compiled, null, 4) //?

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

/*

Error: creating ECR Lifecycle Policy (throwaway-test-123/test1):
RepositoryNotFoundException: The repository with name 'throwaway-test-123/test1'
does not exist in the registry with id '477330550029'

with aws_ecr_lifecycle_policy.micro_repo_lifecycle_policy, on micro.tf.json line
148, in resource.aws_ecr_lifecycle_policy.micro_repo_lifecycle_policy: 148:
}

======================

Error: local-exec provisioner error

with null_resource.micro_docker_archive, on micro.tf.json line 174, in
resource.null_resource.micro_docker_archive.provisioner.local-exec: 174:
}

======================

Error running command
'builds/2a3e6758b1b727b68b919fdd32e5ce2618f7cc9c74c7135a18709c7176e8b464.plan.json':
exec: "python": executable file not found in $PATH. Output:

======================

Error: process "/bin/sh -c python3.8 -m pip install -r requirements.txt" did not
complete successfully: exit code: 1

with docker_image.micro_docker_docker_img, on micro.tf.json line 185, in
resource.docker_image.micro_docker_docker_img: 185:             }

======================

Error: Error pushing docker image: Error pushing image: An image does not exist
locally with the tag:
477330550029.dkr.ecr.us-east-2.amazonaws.com/throwaway-test-123/test1

with docker_registry_image.micro_docker_registry_img, on micro.tf.json line 191,
in resource.docker_registry_image.micro_docker_registry_img: 191:             }

*/

/**
 * References:
 * [1]: https://dev.to/madflanderz/how-to-get-parts-of-an-typescript-interface-3mko
 * [2]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_route#argument-reference
 * [3]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_integration#response_parameters
 * [4]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function#lambda-file-systems
 */
