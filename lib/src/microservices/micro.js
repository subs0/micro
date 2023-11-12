import { namespace } from '../config';
import { topicModule, zoneModule } from '../modules/index';
import { Node } from './node';
import fs from 'fs';
const configurations = ({ source, apex, tags, builder = '${path.root}/src/utils/package.py', build_dir = '${path.root}/builds', }) => {
    let TOPICS = {};
    let ZONES = {};
    const dirs = fs.readdirSync(source);
    const configs = dirs.reduce((a, d) => {
        const path = `${source}/${d}`;
        const isDir = fs.lstatSync(path).isDirectory();
        const isDocker = fs.existsSync(`${path}/Dockerfile`);
        const hasConfig = fs.existsSync(`${path}/micro.json`);
        if (hasConfig) {
            const micro = fs.readFileSync(`${path}/micro.json`, 'utf8');
            const config = JSON.parse(micro);
            const { memory_size = 512, timeout = 60, bucket = false, tmp_storage = 512, sns, api, docker, runtime, handler, tags: _tags, name, } = config;
            let final_docker = docker;
            if (docker) {
                if (runtime || handler) {
                    const logs = [
                        `\`runtime\` & \`handler\` are ignored when \`docker\` is used`,
                        `Check ${path}/micro.json: docker\n`,
                    ];
                    logs.forEach((x) => console.warn(x));
                }
                const { dockerfile = 'Dockerfile', platform = 'linux/amd64' } = docker;
                // check to see if dockerfile exists at path
                if (!fs.existsSync(`${path}/${dockerfile}`)) {
                    throw new Error(`no dockerfile found at ${path}/${dockerfile}\n`);
                }
                final_docker = {
                    dockerfile,
                    platform,
                };
            }
            let sns_tags = {
                ...tags,
                ...(_tags || {}),
            };
            let final_sns = sns;
            if (sns) {
                const ports = ['upstream', 'downstream'];
                const provisionTopic = (stream, topic) => {
                    const [TOPIC, TOPIC_REFS] = topicModule({ name: topic, tags: sns_tags });
                    const arn = TOPIC_REFS[topic]?.resource?.sns_topic?.arn || '🔥';
                    TOPICS[topic] = TOPIC;
                    return arn;
                };
                ports.forEach((port) => {
                    const { topic, ...rest } = sns?.[port];
                    if (!topic) {
                        throw new Error(`missing \`topic\` for ${path}.micro.json: sns.${port}`);
                    }
                    else {
                        let topic_arn = provisionTopic(port, topic);
                        final_sns = {
                            ...final_sns,
                            [port]: {
                                ...rest,
                                topic_arn,
                            },
                        };
                    }
                });
                // rewrite above so that sharedTopics is updated between iterations
            }
            let final_api = api;
            if (api) {
                const { methods = ['ANY'], subdomain, ...rest } = api;
                const [ZONE, ZONE_REFS] = zoneModule({ apex });
                const zone_id = ZONE_REFS?.route53?.data?.route53_zone?.zone_id;
                ZONES[`${subdomain}.${apex}`] = ZONE;
                final_api = {
                    apex,
                    subdomain,
                    zone_id,
                    methods,
                    ...rest,
                };
            }
            let final_config = {
                name,
                memory_size,
                timeout,
                bucket,
                tmp_storage,
                ...(docker ? { docker: final_docker } : { runtime, handler }),
                sns: final_sns,
                api: final_api,
                package_py: builder,
                // if docker...
                src_path: '${path.root}/' + path,
                artifacts_dir: build_dir,
                tags: sns_tags,
            };
            return [...a, final_config];
        }
        else if (isDir) {
            console.warn(`no micro.json found for ${path}, not provisioning any resources`);
            return a;
        }
        else {
            return a;
        }
    }, []);
    return {
        configs,
        TOPICS,
        ZONES,
    };
};
export const micro = ({ source, tags, apex }) => {
    const { configs, TOPICS, ZONES } = configurations({ source, apex, tags });
    const NODES = configs.reduce((acc, cur) => {
        const NODE = Node(cur);
        return {
            ...acc,
            [cur.name]: NODE,
        };
    }, {});
    const PROVIDER = {
        provider: {
            aws: {
                region: 'us-east-2',
                profile: 'chopshop',
            },
        },
    };
    const TERRAFORM = {
        terraform: {
            required_providers: {
                aws: {
                    source: 'hashicorp/aws',
                    version: '>= 5.20',
                },
                docker: {
                    source: 'kreuzwerker/docker',
                    version: '>= 3.0',
                },
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
    const MERGED = namespace({
        merged: {
            ...ZONES,
            ...TOPICS,
            ...NODES,
            PROVIDER,
            TERRAFORM,
        },
    });
    return MERGED;
};
const compiled = micro({
    source: './functions',
    tags: { env: 'test' },
    apex: 'chopshop-test.net',
});
const out = JSON.stringify(compiled, null, 4); //?
fs.writeFileSync('./example.tf.json', out);
//# sourceMappingURL=micro.js.map