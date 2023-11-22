import fs from 'fs'
import { isPlainObject } from '@thi.ng/checks'
import { Node, INode } from './node'
import { IProvider, ITerraform } from '../constants'
import { namespace } from '../config'
import { groupByKey, configTopics, configZone } from './payloads'
import { bucketModule } from '../modules/s3'
import { iamRoleModule } from '../modules/iam'

//                ,e,
//  888-~88e-~88e  "   e88~~\ 888-~\  e88~-_
//  888  888  888 888 d888    888    d888   i
//  888  888  888 888 8888    888    8888   |
//  888  888  888 888 Y888    888    Y888   '
//  888  888  888 888  "88__/ 888     "88_-~

interface IConfiguration {
   /** Path to the directory containing your lambda functions directories */
   source: string
   /** Tags to apply to all resources */
   tags: object
   /** Apex domain name (for APIs) */
   apex?: string
   /** path to package.py */
   builder?: string
   /** path to directory for builder files */
   build_dir?: string
}

interface ISnsConfiguration {
   [key: string]: {
      filter_policy?: object
      message_attrs?: object
   }
}

interface IS3Configuration {
   [key: string]: string[]
}

interface IDocker {
   dockerfile?: string
   platform?: string
}

interface IApi {
   [key: string]: {
      [key: string]: any
   }
}

interface IConfigFile {
   name: string
   runtime?: string
   handler?: string
   memory_size?: number
   timeout?: number
   tmp_storage?: number
   architectures?: string[]
   sns?: ISnsConfiguration
   s3?: IS3Configuration
   api?: object
   docker?: IDocker | boolean
   tags?: object
}

const updateDocker = ({ path, runtime, handler, docker }) => {
   if (runtime || handler) {
      const logs = [
         `\`runtime\` & \`handler\` are ignored when \`docker\` is used`,
         `Check ${path}/micro.json: docker\n`,
      ]
      logs.forEach((x) => console.warn(x))
   }
   const { dockerfile = 'Dockerfile', platform = 'linux/amd64' } = !isPlainObject(docker)
      ? { dockerfile: 'Dockerfile', platform: 'linux/amd64' }
      : docker

   if (!fs.existsSync(`${path}/${dockerfile}`)) {
      throw new Error(`no dockerfile found for ${path}/micro.json: "docker"`)
   }

   return {
      dockerfile,
      platform,
   }
}

const configurations = ({
   source,
   apex,
   tags,
   builder = '${path.root}package.py',
   build_dir = '${path.root}/builds',
}: IConfiguration) => {
   let topics = {}
   let zones = {}

   const dirs = fs.readdirSync(source)
   const configs = dirs.reduce((a: object[], d) => {
      const path = `${source}/${d}`
      const isDir = fs.lstatSync(path).isDirectory()
      const isHidden = d.startsWith('.')
      if (isHidden) {
         //console.log(`ignoring hidden directory: ${path}`)
         return a
      }
      const microJson = `${path}/micro.json`
      const hasConfig = fs.existsSync(microJson)
      if (hasConfig) {
         const micro = fs.readFileSync(microJson, 'utf8')
         const config = JSON.parse(micro) as IConfigFile
         const {
            name,
            runtime,
            handler,
            memory_size = 128 * 8,
            timeout = 60,
            tmp_storage = 512,
            architectures = ['x86_64'],
            sns,
            s3,
            api,
            docker,
            tags: _tags,
         } = config

         //console.log(`\n\n🤞 CONFIG for ${path}/micro.json:\n`, config, '\n\n')

         const final_docker = docker ? updateDocker({ path, runtime, handler, docker }) : {}

         let final_tags = {
            ...(_tags || {}),
            ...tags,
         }

         const api_config = isPlainObject(api) ? configZone({ api, apex, zones }) : null

         const topic_config = sns
            ? configTopics({
                 topics,
                 lambda: name,
                 sns,
                 tags: final_tags,
              })
            : []

         //console.log(`S3 before stuff is done 🐃: ${JSON.stringify(s3, null, 2)}`)
         //console.log(`\n\n🤞 TOPIC CONFIG for ${path}/micro.json:\n`, topic_config, '\n\n')

         const prep_s3 = s3
            ? Object.entries(s3).reduce((acc, cur) => {
                 const [bucket_key, actions] = cur
                 return [...acc, { lambda: name, bucket_key, actions, type: 's3' }]
              }, [] as object[])
            : []
         /*
         {
            lambda,
            ref: `<--${bucket}`,
            type: 's3',
            bucket_key,
            actions,
         },
         */
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
            s3: prep_s3,
            sns: topic_config,
            tags: final_tags,
            ...(docker ? { docker: final_docker } : { runtime, handler }),
         }

         //console.log(`\n\n🤞 FINAL CONFIG for ${path}/micro.json:\n`, final_config, '\n\n')
         return [...a, final_config]
      } else if (isDir) {
         console.warn(`no micro.json found in ${path}, not provisioning any resources`)
         return a
      } else {
         return a
      }
   }, [])
   return {
      configs,
      topics,
      zones,
   } as {
      configs: INode[]
      topics: object
      zones: object
   }
}

interface IMicro extends IConfiguration {
   /** Namespace of the microservices */
   name: string
   region: string
   profile?: string
}

export const micro = ({
   name,
   source,
   tags,
   apex,
   region,
   profile,
   builder = '${path.root}package.py',
   build_dir = '${path.root}/builds',
}: IMicro) => {
   const { configs, topics, zones } = configurations({
      source,
      apex,
      tags,
      builder,
      build_dir,
   })

   const pluck = (configs, keys) =>
      configs.reduce((acc, cur) => {
         const plucked = keys.reduce((a, k) => {
            const v = cur[k]
            return v ? [...a, ...v] : a
         }, [])
         if (plucked) return [...acc, ...plucked]
         else return acc
      }, [])

   const augmentConfig = (configs) =>
      configs.map((config) => {
         const s3 = config.s3
         if (s3.length) {
            return {
               ...config,
               s3: s3.map((s3_config) => {
                  const { lambda, bucket_key, actions, type } = s3_config
                  const [BUCKET1, BUCKET_REFS] = bucketModule({
                     name: bucket_key,
                     configs: [],
                     tags: {},
                  })
                  const bucket = BUCKET_REFS[`${bucket_key}_bucket`]?.resource?.s3_bucket?.bucket
                  return {
                     lambda,
                     bucket_key,
                     actions,
                     type,
                     ref: bucket,
                  }
               }),
            }
         } else {
            return config
         }
      })

   const config_augmd = augmentConfig(configs)

   //console.log(`🔥 FINAL CONFIGS:\n ${JSON.stringify(config_augmd, null, 2)}\n\n`)

   const creds = groupByKey(pluck(config_augmd, ['s3', 'sns']), 'lambda')

   //console.log(`🔥 creds:\n ${JSON.stringify(creds, null, 2)}\n\n`)

   const filterByKey = (configs, key) => {
      return configs.reduce((acc, cur) => {
         const v = cur[key]
         return v ? [...acc, ...v] : acc
      }, [])
   }

   const bucket_configs = groupByKey(filterByKey(config_augmd, 's3'), 'bucket_key')

   const buckets = Object.entries(bucket_configs).reduce((acc, cur) => {
      const [bucket_key, configs] = cur as [
         string,
         { lambda: string; type: string; actions: string[] }[],
      ]

      const [BUCKET, BUCKET_REFS] = bucketModule({
         name: bucket_key,
         configs,
         tags,
      })

      if (!acc[bucket_key]) {
         const bucket = BUCKET_REFS[`${bucket_key}_bucket`]?.resource?.s3_bucket?.bucket

         console.log('provisioning bucket:', bucket_key, bucket)
         return { ...acc, [bucket_key]: BUCKET }
      } else {
         return acc
      }
   }, {})

   const roles = {}

   const role_dict = Object.entries(creds).reduce((acc, cur) => {
      const [name, configs] = cur
      const [ROLE, ROLE_REFS] = iamRoleModule({
         name,
         configs,
         tags,
      })
      if (!roles[name]) {
         console.log(`provisioning role: ${name}`)
         roles[name] = ROLE
      }
      const role_arn = ROLE_REFS[`${name}_role`]?.resource?.iam_role?.arn
      return {
         ...acc,
         [name]: role_arn,
      }
   }, {})

   const nodes = config_augmd.reduce(
      (acc, cur) => ({
         ...acc,

         [`${cur.name}_node`]: Node({
            ...cur,
            role_arn: role_dict[cur.name],
            bucket_env: cur.s3,
         }),
      }),
      {},
   )

   const PROVIDER: IProvider = {
      provider: {
         aws: {
            region,
            ...(profile ? { profile } : {}),
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
   }

   const compiled = namespace({
      [name]: {
         ...zones,
         ...topics,
         ...nodes,
         ...roles,
         ...buckets,
         PROVIDER,
         TERRAFORM,
      },
   })

   return compiled
}

// write a test
// create a new microservice

const test = () => {
   const source = './lambdas'
   const apex = 'jamespicone.com'
   const tags = {
      app: 'micro',
      env: 'dev',
   }
   const configs = configurations({ source, apex, tags })
   //console.log(JSON.stringify(configs, null, 2))

   const compiled = micro({
      name: 'micro',
      source: 'lambdas',
      profile: 'chopshop',
      region: 'us-east-2',
      tags: { env: 'test' },
      apex: 'chopshop-test.net',
      builder: 'package.py',
      build_dir: 'builds',
   })
}

test() //?
