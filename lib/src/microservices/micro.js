import { isPlainObject } from '@thi.ng/checks';
import fs from 'fs';
import { namespace } from '../config';
import { topicModule, zoneModule } from '../modules/index';
import { Node } from './node';
const configurations = ({ source, apex, tags, builder = '${path.root}/src/utils/package.py', build_dir = '${path.root}/builds', }) => {
    let topics = {};
    let zones = {};
    const dirs = fs.readdirSync(source);
    const configs = dirs.reduce((a, d) => {
        const path = `${source}/${d}`;
        const isDir = fs.lstatSync(path).isDirectory();
        const microJson = `${path}/micro.json`;
        const hasConfig = fs.existsSync(microJson);
        if (hasConfig) {
            const micro = fs.readFileSync(microJson, 'utf8');
            const config = JSON.parse(micro);
            const { name, runtime, handler, memory_size = 128 * 8, timeout = 60, bucket = false, tmp_storage = 512, architectures = ['x86_64'], sns, api, docker, tags: _tags, } = config;
            let final_docker = {};
            if (docker) {
                if (runtime || handler) {
                    const logs = [
                        `\`runtime\` & \`handler\` are ignored when \`docker\` is used`,
                        `Check ${path}/micro.json: docker\n`,
                    ];
                    logs.forEach((x) => console.warn(x));
                }
                const { dockerfile = 'Dockerfile', platform = 'linux/amd64' } = !isPlainObject(docker)
                    ? { dockerfile: 'Dockerfile', platform: 'linux/amd64' }
                    : docker;
                if (!fs.existsSync(`${path}/${dockerfile}`)) {
                    throw new Error(`no dockerfile found for ${path}/micro.json: "docker"`);
                }
                final_docker = {
                    dockerfile,
                    platform,
                };
            }
            let final_tags = {
                ...(_tags || {}),
                ...tags,
            };
            let final_sns = {};
            if (sns) {
                const provisionTopic = (name) => {
                    const [TOPIC, TOPIC_REFS] = topicModule({ name, tags: final_tags });
                    const arn = TOPIC_REFS[name]?.resource?.sns_topic?.arn || '🔥';
                    if (!topics[name]) {
                        console.log('provisioning topic:', name, arn);
                        topics[name] = TOPIC;
                    }
                    return arn;
                };
                const ports = ['upstream', 'downstream'];
                ports.forEach((port) => {
                    const { topic, ...rest } = sns[port];
                    if (!topic) {
                        throw new Error(`missing \`topic\` for ${path}.micro.json: sns.${port}`);
                    }
                    else {
                        let topic_arn = provisionTopic(topic);
                        final_sns = {
                            ...final_sns,
                            [port]: {
                                ...rest,
                                topic_arn,
                            },
                        };
                    }
                });
            }
            let final_api = {};
            if (api) {
                const { methods = ['ANY'], subdomain, ...rest } = api;
                const [ZONE, ZONE_REFS] = zoneModule({ apex });
                const zone_id = ZONE_REFS?.route53?.data?.route53_zone?.zone_id;
                zones[`${subdomain}.${apex}`] = ZONE;
                final_api = {
                    apex,
                    subdomain,
                    zone_id,
                    methods,
                    ...rest,
                };
            }
            const final_config = {
                name,
                memory_size,
                architectures,
                timeout,
                bucket,
                tmp_storage,
                src_path: '${path.root}/' + path,
                package_py: builder,
                artifacts_dir: build_dir,
                sns: final_sns,
                api: final_api,
                tags: final_tags,
                ...(docker ? { docker: final_docker } : { runtime, handler }),
            };
            return [...a, final_config];
        }
        else if (isDir) {
            console.warn(`no micro.json found in ${path}, not provisioning any resources`);
            return a;
        }
        else {
            return a;
        }
    }, []);
    return {
        configs,
        topics,
        zones,
    };
};
export const micro = ({ name, source, tags, apex, builder = '${path.root}/src/utils/package.py', build_dir = '${path.root}/builds', }) => {
    const { configs, topics, zones } = configurations({ source, apex, tags, builder, build_dir });
    const nodes = configs.reduce((acc, cur) => ({
        ...acc,
        [cur.name]: Node(cur),
    }), {});
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
    const compiled = namespace({
        [name]: {
            ...zones,
            ...topics,
            ...nodes,
            PROVIDER,
            TERRAFORM,
        },
    });
    return compiled;
};
//# sourceMappingURL=micro.js.map