import fs from 'fs';
import { isPlainObject } from '@thi.ng/checks';
import { Node } from './node';
import { namespace } from '../config';
import { groupByKey, pluck, provisionZone, configureTopicsForNode, configureBucketsForNode, provisionBuckets, provisionTopics, configureCWforNode, provisionCloudwatch, } from './payloads';
import { iamRoleModule } from '../modules/iam';
const updateDocker = ({ path, runtime, handler, docker }) => {
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
    return {
        dockerfile,
        platform,
    };
};
const configurations = ({ source, apex, tags, builder = '${path.root}/package.py', build_dir = '${path.root}/builds', }) => {
    let zones = {};
    const dirs = fs.readdirSync(source);
    const configs = dirs.reduce((a, d) => {
        const path = `${source}/${d}`;
        const isDir = fs.lstatSync(path).isDirectory();
        const isHidden = d.startsWith('.');
        if (isHidden) {
            console.log(`ignoring hidden directory: ${path}`);
            return a;
        }
        const microJson = `${path}/micro.json`;
        const hasConfig = fs.existsSync(microJson);
        if (hasConfig) {
            const micro = fs.readFileSync(microJson, 'utf8');
            const config = JSON.parse(micro);
            const { name, runtime, handler, memory_size = 128 * 8, timeout = 60, tmp_storage = 512, architectures = ['x86_64'], sns, s3, cloudwatch, api, docker, tags: _tags, } = config;
            const final_docker = docker ? updateDocker({ path, runtime, handler, docker }) : {};
            let final_tags = {
                ...(_tags || {}),
                ...tags,
            };
            const cloudwatch_config = configureCWforNode({
                path,
                lambda: name,
                cloudwatch,
                tags,
            });
            const api_config = isPlainObject(api) ? provisionZone({ api, apex, zones }) : null;
            const topics_config = configureTopicsForNode({ path, lambda: name, sns, tags });
            const buckets_config = configureBucketsForNode({ path, lambda: name, s3, tags });
            const final_config = {
                name,
                memory_size,
                architectures,
                timeout,
                tmp_storage,
                src_path: '${path.root}/' + path,
                package_py: builder,
                artifacts_dir: build_dir,
                api: api_config,
                s3: buckets_config,
                sns: topics_config,
                cloudwatch: cloudwatch_config,
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
        zones,
    };
};
export const micro = ({ name, source, tags, apex, region, profile, builder = '${path.root}package.py', build_dir = '${path.root}/builds', }) => {
    const { configs, zones } = configurations({
        source,
        apex,
        tags,
        builder,
        build_dir,
    });
    //console.log(`micro.ts#L209 configs: ${JSON.stringify(configs, null, 2)}`)
    const view = pluck(configs, ['s3', 'sns', 'cloudwatch']);
    //console.log(`micro.ts#L213 view: ${JSON.stringify(view, null, 2)}`)
    const creds = groupByKey(view, 'lambda');
    const filterByKey = (configs, key) => {
        return configs.reduce((acc, cur) => {
            const v = cur[key];
            return v ? [...acc, ...v] : acc;
        }, []);
    };
    const roles = {};
    const role_dict = Object.entries(creds).reduce((acc, cur) => {
        const [name, configs] = cur;
        //console.log({ role_name: name, role_configs: configs })
        if (!acc[name]) {
            console.log(`provisioning role: ${name}`);
            const [ROLE, ROLE_REFS] = iamRoleModule({
                name,
                configs,
                tags,
            });
            roles[name] = ROLE;
            const role_arn = ROLE_REFS[name]?.resource?.iam_role?.arn || '🔥';
            return {
                ...acc,
                [name]: role_arn,
            };
        }
        return acc;
    }, {});
    const bucket_configs = groupByKey(filterByKey(configs, 's3'), 'name');
    const buckets = provisionBuckets({ configs: bucket_configs, roles: role_dict, tags });
    const topic_configs = groupByKey(filterByKey(configs, 'sns'), 'name');
    const topics = provisionTopics({ configs: topic_configs, tags });
    const cloudwatch_configs = groupByKey(filterByKey(configs, 'cloudwatch'), 'name');
    const cloudwatch = provisionCloudwatch({ configs: cloudwatch_configs, tags });
    //console.log(`micro.ts#L270 cloudwatch: ${JSON.stringify(cloudwatch, null, 2)}`)
    const empty_role = (name) => {
        const [ROLE, ROLE_REFS] = iamRoleModule({
            name,
            configs: [],
            tags,
        });
        roles[name] = ROLE;
        const role_arn = ROLE_REFS[name]?.resource?.iam_role?.arn || '🔥';
        return role_arn;
    };
    // 📌 Add cloudwatch as a base config for all nodes (fixes malformed iam
    // policy for empty policies, e.g., nodes without s3 or sns configs)
    const nodes = configs.reduce((acc, { name, ...rest }) => {
        if (acc[`${name}_node`]) {
            console.warn(`node ${name} already exists`);
            return acc;
        }
        else {
            console.log(`provisioning node: ${name}`);
            return {
                ...acc,
                [`${name}_node`]: Node({
                    name,
                    ...rest,
                    role_arn: role_dict[name] || empty_role(name),
                }),
            };
        }
    }, {});
    const PROVIDER = {
        provider: {
            aws: {
                region,
                ...(profile ? { profile } : {}),
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
            ...cloudwatch,
            ...nodes,
            ...roles,
            ...buckets,
            PROVIDER,
            TERRAFORM,
        },
    });
    return compiled;
};
// write a test
// create a new microservice
//const test = () => {
//   const source = './lambdas'
//   const apex = 'example.com'
//   const tags = {
//      app: 'micro',
//      env: 'dev',
//   }
//   const configs = configurations({ source, apex, tags })
//   //console.log(JSON.stringify(configs, null, 2))
//   const compiled = micro({
//      name: 'micro',
//      source: 'lambdas',
//      profile: 'chopshop',
//      region: 'us-east-2',
//      tags: { env: 'test' },
//      apex: 'chopshop-test.net',
//      builder: 'package.py',
//      build_dir: 'builds',
//   })
//}
//test() //?
//# sourceMappingURL=micro.js.map