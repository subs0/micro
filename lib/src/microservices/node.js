import { namespace } from '../config';
import { isPlainObject } from '@thi.ng/checks';
import { apiModule, ecrRepoModule, lambdaModule, buildModule, topicModule, zoneModule, } from '../modules/index';
import fs from 'fs';
export const node = ({ name, tags, api, src_path = '${path.root}/src', artifacts_dir = '${path.root}/builds', package_py = '${path.root}/src/utils/package.py', memory_size = 512, env_vars = {}, handler = 'index.handler', runtime = 'python3.11', tmp_storage = 1024, timeout = 60, sns, docker, }) => {
    const [ECR_REPO, ECR_REPO_REFS] = ecrRepoModule({ name, tags });
    const repo_name = ECR_REPO_REFS?.ecr_repo?.resource?.ecr_repository?.name;
    let file_path = '';
    let archive = '';
    let build = {};
    if (docker) {
        const docker_defaults = {
            platform: 'linux/arm64',
            dockerfile: 'Dockerfile',
            repo: repo_name,
        };
        const docker_opts = isPlainObject(docker)
            ? {
                ...docker_defaults,
                ...docker,
            }
            : docker_defaults;
        const [BUILD, BUILD_REFS] = buildModule({
            name,
            src_path,
            runtime,
            artifacts_dir,
            builder: package_py,
            docker: docker_opts,
        });
        build = BUILD;
        file_path = BUILD_REFS?.registry_image?.resource?.docker_registry_image?.name;
        archive = BUILD_REFS?.archive?.resource?.export;
    }
    else {
        const [BUILD, BUILD_REFS] = buildModule({
            name,
            src_path,
            runtime,
            artifacts_dir,
            builder: package_py,
        });
        build = BUILD;
        file_path = BUILD_REFS?.prepare?.data?.external?.result?.filename;
        archive = BUILD_REFS?.archive?.resource?.export;
    }
    const [LAMBDA, LAMBDA_REFS] = lambdaModule({
        name,
        file_path,
        depends_on: [archive],
        memory_size,
        architectures: docker ? ['arm64'] : ['x86_64'],
        env_vars,
        timeout,
        tmp_storage,
        ...(!docker ? { handler, runtime } : {}),
        sns,
        tags,
    });
    const functionInvokeArn = LAMBDA_REFS?.function?.resource?.lambda_function?.invoke_arn;
    const functionArn = LAMBDA_REFS?.function?.resource?.lambda_function?.arn;
    //const functionName = LAMBDA_REFS?.function?.resource?.lambda_function?.function_name
    let zone = {};
    let endpoint = {};
    if (api) {
        const { apex, subdomain, methods } = api;
        const [ZONE, ZONE_REFS] = zoneModule({ apex: apex });
        const zone_id = ZONE_REFS?.zone?.data?.route53_zone?.zone_id;
        const [API] = apiModule({
            apex: apex,
            zone_id,
            subdomainRoutes: {
                [subdomain]: methods.reduce((a, c) => ({
                    ...a,
                    [`${c} /`]: {
                        invoke_arn: functionInvokeArn,
                        function_arn: functionArn,
                    },
                }), {}),
            },
            tags,
        });
        zone = ZONE;
        endpoint = API;
    }
    const nodeNamespace = {
        ...(api ? { zone, endpoint } : {}),
        ...(docker ? { ECR_REPO } : {}),
        build,
        LAMBDA,
    };
    return namespace({ [name]: nodeNamespace });
};
const name = 'test2';
const tags = { env: 'test' };
const [TOPIC, TOPIC_REFS] = topicModule({ name, tags });
const topic_arn = TOPIC_REFS?.sns?.resource?.sns_topic?.arn;
const Topic = { TOPIC };
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
};
/**
 * Lambda functions with memory configuration greater than 3GB are currently
 * unavailable for first time use in multiple regions. We are working on
 * restoring this feature and mitigations are in progress. If you urgently
 * require to use your function with memory greater than 3GB, please provide
 * your account and region details so we can expedite access internally.
 *
 * [reference]
 */
const Node1 = node({
    name,
    tags,
    api: {
        apex: 'chopshop-test.net',
        methods: ['ANY'],
        subdomain: name,
    },
    sns,
    memory_size: 3000,
    tmp_storage: 1024,
    timeout: 60,
    package_py: '${path.root}/src/utils/package.py',
    // if docker...
    //src_path: '${path.root}/src/docker',
    //artifacts_dir: '${path.root}/builds',
    //docker: {
    //    dockerfile: 'Dockerfile',
    //    platform: 'linux/amd64',
    //},
    // if zip...
    src_path: '${path.root}/throwaway/ML/lambdas/multipart_upload',
    handler: 'index.handler',
    runtime: 'python3.11',
});
JSON.stringify(Node1, null, 3); //
const Node2 = node({
    name: name + 'b',
    tags,
    api: {
        apex: 'chopshop-test.net',
        methods: ['ANY'],
        subdomain: name + 'b',
    },
    sns,
    memory_size: 3000,
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
    // if zip...
    //src_path: '${path.root}/throwaway/ML/lambdas/multipart_upload',
    //handler: 'index.handler',
    //runtime: 'python3.11',
});
const provider = {
    provider: {
        aws: {
            region: 'us-east-2',
            profile: 'chopshop',
        },
    },
};
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
            random: {
                source: 'hashicorp/random',
                version: '>= 3.0',
            },
        },
    },
};
const merged = namespace({
    merged: {
        TOPIC,
        Node1,
        Node2,
        provider,
        terraform,
    },
});
const out = JSON.stringify(merged, null, 4); //?
fs.writeFileSync('./example.tf.json', out);
/**
 * [reference]: https://stackoverflow.com/questions/70943739/aws-lambda-memorysize-value-failed-to-satisfy-constraint
 */
//# sourceMappingURL=node.js.map