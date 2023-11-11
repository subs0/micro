import { namespace } from '../config'
import { AWS, IProvider, ITerraform } from 'src/constants'
import { topicModule, zoneModule } from '../modules/index'
import { Node } from './node'
import fs from 'fs'

const name = 'test2'

const tags = { env: 'test' }

const apex = 'chopshop-test.net'

const payload = {
   name: 'lambda_function',
   runtime: 'python3.11',
   handler: 'index.handler',
   memory_size: 128,
   timeout: 3,
   bucket: true,
   tmp_storage: 50,
   docker: {
      dockerfile: 'Dockerfile',
      platform: 'linux/amd64',
   },
   sns: {
      upstream: {
         filter_policy: {
            type: ['lambda'],
         },
         topic_arn: '${resource.aws_sns_topic.topic_sns.arn}',
      },
      downstream: {
         message_attrs: {
            type: {
               DataType: 'String',
               StringValue: 'lambda',
            },
         },
         topic_arn: '${resource.aws_sns_topic.topic_sns.arn}',
      },
   },
   api: {
      apex: 'chopshop-test.net',
      subdomain: 'a-sd',
      zone_id: '${data.aws_route53_zone.zone_zone.zone_id}',
      methods: ['GET', 'POST'],
   },
   tags: {
      hello: 'world',
   },
}

interface IConfig {
   source: string
   apex?: string
   topics?: object
   tags?: object
}
const configurations = ({ source, apex, topics, tags }: IConfig) => {
   let TOPICS: { [key: string]: { sns: AWS } } = {}
   let ZONES = {}
   const dirs = fs.readdirSync(source)
   const configs = dirs.reduce((a: object[], d) => {
      const path = `${source}/${d}`
      const isDir = fs.lstatSync(path).isDirectory()
      const isDocker = fs.existsSync(`${path}/Dockerfile`)
      const hasConfig = fs.existsSync(`${path}/micro.json`)
      if (hasConfig) {
         const micro = fs.readFileSync(`${path}/micro.json`, 'utf8')
         const config = JSON.parse(micro)

         const {
            memory_size = 512,
            timeout = 60,
            bucket = false,
            tmp_storage = 512,
            sns,
            api,
            docker,
            runtime,
            handler,
            tags: _tags,
            ...original
         } = config

         if (docker) {
            if (runtime || handler) {
               const logs = [
                  `\`runtime\` & \`handler\` are ignored when \`docker\` is used`,
                  `Check ${path}/micro.json: docker\n`,
               ]
               logs.forEach((x) => console.warn(x))
            }
            const { dockerfile = 'Dockerfile', platform = 'linux/amd64' } = docker
            // check to see if dockerfile exists at path
            if (!fs.existsSync(`${path}/${dockerfile}`)) {
               throw new Error(`no dockerfile found at ${path}/${dockerfile}\n`)
            }
         }
         let sns_tags = {
            ...tags,
            ...(_tags || {}),
         }

         let final_sns = sns

         if (sns) {
            const sharedTopics = topics || {}
            const ports = ['upstream', 'downstream']
            const warnAndProvision = (stream, topic) => {
               const logs = [
                  `No existing ${stream} \`topic\` for key "${topic}"`,
                  `"${topic}" will be provisioned by micro internally`,
                  `Check ${path}/micro.json: sns.${stream}.topic\n`,
               ]
               logs.forEach((x) => console.log(x))

               const [TOPIC, TOPIC_REFS] = topicModule({ name: topic, tags: sns_tags })
               TOPICS[topic] = TOPIC
               const arn = TOPIC_REFS?.sns?.resource?.sns_topic?.arn
               sharedTopics[topic] = arn
               return arn
            }

            ports.forEach((port) => {
               const { topic, ...rest } = sns?.[port]
               if (!topic) {
                  throw new Error(`missing \`topic\` for ${path}.micro.json: sns.${port}`)
               } else {
                  let topic_arn = sharedTopics?.[topic]
                  if (!topic_arn) {
                     topic_arn = warnAndProvision(port, topic)
                  }
                  final_sns = {
                     ...final_sns,
                     [port]: {
                        ...rest,
                        topic_arn,
                     },
                  }
               }
            })
         }

         let final_api = api

         if (api) {
            const { methods = ['ANY'], subdomain, ...rest } = api
            const [ZONE, ZONE_REFS] = zoneModule({ apex })
            const zone_id = ZONE_REFS?.zone?.data?.route53_zone?.zone_id
            ZONES[`${subdomain}.${apex}`] = ZONE

            final_api = {
               apex,
               subdomain,
               zone_id,
               methods,
               ...rest,
            }
         }

         let final_config = {
            runtime,
            handler,
            memory_size,
            timeout,
            bucket,
            tmp_storage,
            docker,
            sns: final_sns,
            api: final_api,
            tags: sns_tags,
            package_py: '${path.root}/src/utils/package.py',
            // if docker...
            src_path: '${path.root}/' + path,
            artifacts_dir: '${path.root}/builds',
            ...original,
         }

         return [...a, final_config]
      } else if (isDir) {
         console.warn(`no micro.json found for ${path}, not provisioning any resources`)
         return a
      } else {
         return a
      }
   }, [])
   return { configs, TOPICS, ZONES }
}

const micro = ({ source, name, tags, apex }) => {
   const { configs, TOPICS, ZONES } = configurations({ source, apex, tags })

   const NODES = configs.reduce((acc, cur) => {
      const NODE = Node(cur)

      return {
         ...acc,
         [cur.name]: NODE,
      }
   }, {})

   //const NODE1 = Node({
   //   name,
   //   tags,
   //   api: {
   //      apex,
   //      zone_id,
   //      methods: ['ANY'],
   //      subdomain: name,
   //   },
   //   sns,
   //   bucket: true,
   //   memory_size: 3000, // See above
   //   tmp_storage: 1024,
   //   timeout: 60,
   //   package_py: '${path.root}/src/utils/package.py',
   //   // if zip...
   //   src_path: '${path.root}/throwaway/ML/lambdas/multipart_upload',
   //   handler: 'index.handler',
   //   runtime: 'python3.11',
   //})

   //const NODE2 = Node({
   //   name: name + 'b',
   //   tags,
   //   api: {
   //      zone_id,
   //      apex,
   //      methods: ['ANY'],
   //      subdomain: name + 'b',
   //   },
   //   sns,
   //   bucket: true,
   //   memory_size: 3000, // See above
   //   tmp_storage: 1024,
   //   timeout: 60,
   //   package_py: '${path.root}/src/utils/package.py',
   //   // if docker...
   //   src_path: '${path.root}/src/docker',
   //   artifacts_dir: '${path.root}/builds',
   //   docker: {
   //      dockerfile: 'Dockerfile',
   //      platform: 'linux/amd64',
   //   },
   //})

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
         ...ZONES,
         ...TOPICS,
         ...NODES,
         PROVIDER,
         TERRAFORM,
      },
   })

   return MERGED
}

const out = JSON.stringify(micro({ source: './functions', name, tags, apex }), null, 4) //?

fs.writeFileSync('./example.tf.json', out)
