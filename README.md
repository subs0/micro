# `micro`

## TODO
- [ ] fix API Gateway 
- [ ] Dynamo DB
- [ ] add `stage` to api input pipepline (all the way down dependency tree from `node`)
- [ ] add way to warn for unresolvable references, e.g., `my?.data?.x || "!"`
- [ ] add warnings about missing or inaccurate refs (none found at path in output)
- [ ] document convention that if the module accepts a name, it will be used as
       the root key for the module's output (names can contain only letters,
       numbers, underscores, and dashes)

### Fix API Gateway

Currently getting error in browser:

```
localhost/:1 Access to fetch at 'https://up.xxxxxxxx.xxx/mp-init' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
mp_request.ts?t=1699848991365:15 
        
        
       POST https://up.xxxxxxxxxx.net/mp-init net::ERR_FAILED 403 (Forbidden)
```

See [AWS DOCS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html)

mimic terraform aws modules

```tf

module "api_gateway" {
  source                      = "terraform-aws-modules/apigateway-v2/aws"
  protocol_type               = "HTTP"
  name                        = "chopshop-api-gateway"
  description                 = "chopshop api gateway to upload & search RFK Jr. videos"
  domain_name                 = "${local.subdomain}.${local.domain_name}"
  domain_name_certificate_arn = module.acm.acm_certificate_arn

  create = true
  create_api_domain_name = true
  create_default_stage   = true
  create_default_stage_api_mapping = true
  create_routes_and_integrations = true

  api_key_selection_expression = "$request.header.x-api-key"

  api_version = "0.1"

  cors_configuration = {
    allow_headers = [
      "content-type",
      "x-amz-date",
      "authorization",
      "x-api-key",
      "x-amz-security-token",
      "x-amz-user-agent"
    ]
    allow_origins = ["*"]
    #expose_headers = ["*"]
    max_age = 300
  }
   
  
  /* for IoT or B2B applications (not for public use)
  mutual_tls_authentication = {
    truststore_uri     = "s3://${aws_s3_bucket.truststore.bucket}/${aws_s3_object.truststore.id}"
    truststore_version = aws_s3_object.truststore.version_id
  }
  */

  default_stage_access_log_destination_arn = aws_cloudwatch_log_group.logs.arn
  default_stage_access_log_format          = "$context.identity.sourceIp - - [$context.requestTime] \"$context.httpMethod $context.routeKey $context.protocol\" $context.status $context.responseLength $context.requestId $context.integrationErrorMessage"

  default_route_settings = {
    detailed_metrics_enabled = true
    #logging_level = "INFO"
    throttling_burst_limit = 100
    throttling_rate_limit  = 100
  }

  /* for JWT auth provided by Cognito
  authorizers = {
    "cognito" = {
      authorizer_type  = "JWT"
      identity_sources = "$request.header.Authorization"
      name             = "cognito-authorizer-chopshop-api-gateway"
      audience         = ["chopshop-auth-test"]
      issuer           = "https://${aws_cognito_user_pool.this.endpoint}"
    }
  }
  */

  integrations = {
    "ANY /" = {
      lambda_arn = module.lambda_upload.lambda_function_arn
      # max payload size is 10MB for api gateway and 6MB for lambda
      payload_format_version = "2.0"
      # max is 29 seconds REST API, 30 seconds HTTP API
      timeout_milliseconds = 15000 
    }
    "POST /upload" = {
      lambda_arn             = module.lambda_upload.lambda_function_arn
      payload_format_version = "2.0"
      #authorization_type     = "JWT"
      #authorizer_key         = "cognito"
    }
    # TODO: consider separates for direct upload (e.g., .mp4) vs. YouTube (URL)
    "GET /search" = {
      # TODO: make real lambda
      lambda_arn             = module.lambda_upload.lambda_function_arn
      payload_format_version = "2.0"
      #authorization_type     = "JWT"
      #authorizer_key         = "cognito"
    }
    
    "$default" = {
      lambda_arn = module.lambda_upload.lambda_function_arn
      response_parameters = jsonencode([
        {
          status_code = "500"
          mappings = {
            "append:header.header1" = "$context.requestId"
            "overwrite:statuscode"  = "403"
          }
        },
        {
          status_code = "404"
          mappings = {
            "append:header.error" = "$stageVariables.environmentId"
          }
        }
      ])
    }
    
  }
}
```
## Overview

This module has Three primary components:

1. A very large set of Terraform Typescript Interfaces, which provide IDE
   suggestions for required, optional Arguments and output Attributes on TF
   Resources/Data
2. A `micro` compiler, which takes in POJOs and outputs terraform-compliant JSON
3. **For contributors**: A terrorm type generation tool the outputs typescript
   interfaces, which align with the specification for a given provider and
   version. This is not a necessary step if you just want to use interface that
   have already been generated. However, if you want to generate interfaces for
   a new provider or version, you'll need to use this tool.

> 🐉 🐉 🐉 (Dragons)
>
> This is a brand new project and the types are generated from the
> documentation, so the process is not perfect. There are some types that are
> not generated, but all terminal interfaces are set to `any` to allow maximum
> accommodation for missing parts.

#### 💡 The generated types will assist you in creating the POJOs by providing IDE hints.

## Installation

```
npm i @-0/micro
```

## Using Micro

### Example Lambdas Folder structure

```sh
functions
├── zip_example_py
│   ├── main.py
│   ├── micro.json # <-- microservice config
│   └── requirements.txt
├── zip_example_js
│   ├── index.js
│   ├── micro.json
│   └── package.json
└── docker_example
    ├── Dockerfile
    ├── main.py
    ├── micro.json
    └── requirements.txt
```

### Example `micro.json` microservice config

> NOTE: either `docker` or `runtime` + `handler` are mutually exclusive. I.e.,
> if a dockerfile is present, the `runtime` and `handler` will be ignored.

```jsonc
{
   "name": "docker_me",
   "handler": "main.handler",
   "runtime": "python3.8",
   // builds an AWS ECR image as lambda
   "docker": {
      "dockerfile": "Dockerfile", // path in the local dir to the dockerfile
      "platform": "linux/arm64"
   },
   "architectures": ["arm64"],
   "memory_size": 1024,
   "timeout": 120,
   "bucket": true, // dedicated bucket (`S3_BUCKET_NAME` env var in lambda)
   "tmp_storage": 512,
   "sns": {
      // if connecting lambda to sns
      "upstream": {
         // topic to subscribe to (creates subscription)
         "topic": "topic_a",
         "filter_policy": {
            "type": ["lambda"]
         }
      },
      "downstream": {
         // topic to publish to (`SNS_TOPIC_ARN` env var in lambda)
         "topic": "topic_a",
         "message_attrs": {
            // (`SNS_MESSAGE_ATTRS` env var in lambda)
            "type": {
               "DataType": "String",
               "StringValue": "lambda"
            }
         }
      }
   },
   // if connecting lambda to api gateway
   "api": {
      "subdomain": "api",
      "methods": ["GET", "POST"]
   },
   "tags": {
      "hello": "world"
   }
}
```

### `micro` compile Terraform JSON

```ts
import { micro } from '@-0/micro'
import fs from 'fs'

const compiled = micro({
   name: 'micro',
   source: './functions',
   tags: { env: 'test' },
   apex: 'example.com',
})

fs.writeFileSync('main.tf.json', JSON.stringify(compiled, null, 4))
```

This will provision three lambda functions with all the wiring needed to
properly connect the resources together. Just run `terraform plan` or `terraform
apply` to provision the resources.

## DIY Modules

Simply import the generated interface and start creating POJOs

```typescript
import { modulate, namespace, AWS, Provider, Terraform } from '@-0/micro'
import fs from 'fs'

const lambda_policy_doc: AWS = {
   data: {
      iam_policy_document: {
         statement: {
            effect: 'Allow',
            actions: ['sts:AssumeRole'],
            principals: {
               identifiers: ['lambda.amazonaws.com'],
               type: 'Service',
            },
         },
         json: '-->',
      },
   },
}

const lambda_role = ({ name, policy_json }): AWS => ({
   resource: {
      iam_role: {
         name: `${name}-role`,
         assume_role_policy: policy_json,
         arn: '-->',
      },
   },
})

const sns_topic = ({ name }): AWS => ({
   resource: {
      sns_topic: {
         name,
         arn: '-->',
      },
   },
})

const sns_sub_lambda = ({
   topic_arn,
   lambda_arn,
   filter_policy = {},
   filter_policy_scope = 'MessageAttributes',
}): AWS => ({
   resource: {
      sns_topic_subscription: {
         topic_arn,
         protocol: 'lambda',
         endpoint: lambda_arn,
         filter_policy: JSON.stringify(filter_policy, null, 2),
         filter_policy_scope,
         arn: '-->',
      },
   },
})

const s3 = (name): AWS => ({
   resource: {
      s3_bucket: {
         bucket: name,
      },
   },
})

const lambda = ({
   name,
   role_arn,
   file_path,
   env_vars = {},
   handler = 'handler.handler',
   runtime = 'python3.8',
}): AWS => ({
   resource: {
      lambda_function: {
         function_name: `lambda-${name}`,
         role: role_arn,
         runtime,
         handler,
         filename: file_path,
         environment: {
            variables: env_vars,
         },
         arn: '-->',
      },
   },
})

/**
 * Notice the `Output` interface. This is a best practice for ensuring that you
 * don't accidentally misspell a key when referring to my?...
 */
interface Output {
   lambda_policy_doc: AWS
   topic: AWS
   s3: AWS
   lambda_role: AWS
   lambda: AWS
   subscription: AWS
}

export const microservice = (
   {
      name = 'module',
      file_path = '${path.root}/lambdas/template/zipped/handler.py.zip',
      handler = 'handler.handler',
      env_vars = {},
      filter_policy = {},
   },
   my: Output,
): AWS => ({
   lambda_policy_doc,
   topic: sns_topic(name),
   s3: s3(name),
   lambda_role: lambda_role({
      name,
      policy_json: my?.lambda_policy_doc?.data?.iam_policy_document?.json,
   }),
   lambda: lambda({
      name,
      role_arn: my?.lambda_role?.resource?.iam_role?.arn,
      file_path,
      handler,
      env_vars: {
         S3_BUCKET_NAME: name,
         SNS_TOPIC_ARN: my?.topic?.resource?.sns_topic?.arn,
         ...env_vars,
      },
   }),
   subscription: sns_sub_lambda({
      topic_arn: my?.topic?.resource?.sns_topic?.arn,
      lambda_arn: my?.lambda?.resource?.lambda_function?.arn,
      filter_policy,
   }),
})

const provider = {
   provider: [
      {
         aws: {
            region: 'xx-xxxx-x',
            profile: 'xxxxxxxx',
         },
      },
   ],
}

const terraform: Terraform = {
   terraform: {
      required_providers: {
         aws: {
            source: 'hashicorp/aws',
            version: '5.20.0',
         },
      },
   },
}

const lambdaModule = modulate({ microservice })

const output = lambdaModule({ name: 'testing' })

const namespaced = { output, provider, terraform }

const out = namespace({ namespaced })

fs.writeFileSync('main.tf.json', JSON.stringify(out, null, 4))
```

Produces:

```json
{
   "data": {
      "aws_iam_policy_document": {
         "namespaced_microservice_lambda_policy_doc": {
            "statement": {
               "effect": "Allow",
               "actions": ["sts:AssumeRole"],
               "principals": {
                  "identifiers": ["lambda.amazonaws.com"],
                  "type": "Service"
               }
            }
         }
      }
   },
   "resource": {
      "aws_sns_topic": {
         "namespaced_microservice_topic": {
            "name": "testing-topic"
         }
      },
      "aws_s3_bucket": {
         "namespaced_microservice_s3": {
            "bucket": "testing"
         }
      },
      "aws_iam_role": {
         "namespaced_microservice_lambda_role": {
            "name": "testing-role",
            "assume_role_policy": "${data.aws_iam_policy_document.namespaced_microservice_lambda_policy_doc.json}"
         }
      },
      "aws_lambda_function": {
         "namespaced_microservice_lambda": {
            "function_name": "lambda-testing",
            "role": "${resource.aws_iam_role.namespaced_microservice_lambda_role.arn}",
            "runtime": "python3.8",
            "handler": "handler.handler",
            "filename": "${path.root}/lambdas/template/zipped/handler.py.zip",
            "environment": {
               "variables": {
                  "S3_BUCKET_NAME": "testing",
                  "SNS_TOPIC_ARN": "${resource.aws_sns_topic.namespaced_microservice_topic.arn}"
               }
            }
         }
      },
      "aws_sns_topic_subscription": {
         "namespaced_microservice_subscription": {
            "topic_arn": "${resource.aws_sns_topic.namespaced_microservice_topic.arn}",
            "protocol": "lambda",
            "endpoint": "${resource.aws_lambda_function.namespaced_microservice_lambda.arn}",
            "filter_policy": "{}",
            "filter_policy_scope": "MessageAttributes"
         }
      }
   },
   "terraform": {
      "required_providers": {
         "aws": {
            "source": "hashicorp/aws",
            "version": "5.20.0"
         }
      }
   },
   "provider": [
      {
         "aws": {
            "region": "us-east-2",
            "profile": "chopshop"
         }
      }
   ]
}
```

### But, Will It `terraform apply`?

```sh
terraform apply
data.aws_iam_policy_document.namespaced_microservice_lambda_policy_doc: Reading...
data.aws_iam_policy_document.namespaced_microservice_lambda_policy_doc: Read complete after 0s [id=2690255455]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_iam_role.namespaced_microservice_lambda_role will be created
  + resource "aws_iam_role" "namespaced_microservice_lambda_role" {
      + arn                   = (known after apply)
      + assume_role_policy    = jsonencode(
            {
              + Statement = [
                  + {
                      + Action    = "sts:AssumeRole"
                      + Effect    = "Allow"
                      + Principal = {
                          + Service = "lambda.amazonaws.com"
                        }
                    },
                ]
              + Version   = "2012-10-17"
            }
        )
      + create_date           = (known after apply)
      + force_detach_policies = false
      + id                    = (known after apply)
      + managed_policy_arns   = (known after apply)
      + max_session_duration  = 3600
      + name                  = "testing-role"
      + name_prefix           = (known after apply)
      + path                  = "/"
      + tags_all              = (known after apply)
      + unique_id             = (known after apply)
    }

  # aws_lambda_function.namespaced_microservice_lambda will be created
  + resource "aws_lambda_function" "namespaced_microservice_lambda" {
      + architectures                  = (known after apply)
      + arn                            = (known after apply)
      + filename                       = "./lambdas/template/zipped/handler.py.zip"
      + function_name                  = "lambda-testing"
      + handler                        = "handler.handler"
      + id                             = (known after apply)
      + invoke_arn                     = (known after apply)
      + last_modified                  = (known after apply)
      + memory_size                    = 128
      + package_type                   = "Zip"
      + publish                        = false
      + qualified_arn                  = (known after apply)
      + qualified_invoke_arn           = (known after apply)
      + reserved_concurrent_executions = -1
      + role                           = (known after apply)
      + runtime                        = "python3.8"
      + signing_job_arn                = (known after apply)
      + signing_profile_version_arn    = (known after apply)
      + skip_destroy                   = false
      + source_code_hash               = (known after apply)
      + source_code_size               = (known after apply)
      + tags_all                       = (known after apply)
      + timeout                        = 3
      + version                        = (known after apply)

      + environment {
          + variables = (known after apply)
        }
    }

  # aws_s3_bucket.namespaced_microservice_s3 will be created
  + resource "aws_s3_bucket" "namespaced_microservice_s3" {
      + acceleration_status         = (known after apply)
      + acl                         = (known after apply)
      + arn                         = (known after apply)
      + bucket                      = "testing"
      + bucket_domain_name          = (known after apply)
      + bucket_prefix               = (known after apply)
      + bucket_regional_domain_name = (known after apply)
      + force_destroy               = false
      + hosted_zone_id              = (known after apply)
      + id                          = (known after apply)
      + object_lock_enabled         = (known after apply)
      + policy                      = (known after apply)
      + region                      = (known after apply)
      + request_payer               = (known after apply)
      + tags_all                    = (known after apply)
      + website_domain              = (known after apply)
      + website_endpoint            = (known after apply)
    }

  # aws_sns_topic.namespaced_microservice_topic will be created
  + resource "aws_sns_topic" "namespaced_microservice_topic" {
      + arn                         = (known after apply)
      + content_based_deduplication = false
      + fifo_topic                  = false
      + id                          = (known after apply)
      + name                        = "testing-topic"
      + name_prefix                 = (known after apply)
      + owner                       = (known after apply)
      + policy                      = (known after apply)
      + signature_version           = (known after apply)
      + tags_all                    = (known after apply)
      + tracing_config              = (known after apply)
    }

  # aws_sns_topic_subscription.namespaced_microservice_subscription will be created
  + resource "aws_sns_topic_subscription" "namespaced_microservice_subscription" {
      + arn                             = (known after apply)
      + confirmation_timeout_in_minutes = 1
      + confirmation_was_authenticated  = (known after apply)
      + endpoint                        = (known after apply)
      + endpoint_auto_confirms          = false
      + filter_policy                   = jsonencode({})
      + filter_policy_scope             = "MessageAttributes"
      + id                              = (known after apply)
      + owner_id                        = (known after apply)
      + pending_confirmation            = (known after apply)
      + protocol                        = "lambda"
      + raw_message_delivery            = false
      + topic_arn                       = (known after apply)
    }

Plan: 5 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_iam_role.namespaced_microservice_lambda_role: Creating...
aws_sns_topic.namespaced_microservice_topic: Creating...
aws_s3_bucket.namespaced_microservice_s3: Creating...
aws_iam_role.namespaced_microservice_lambda_role: Creation complete after 0s [id=testing-role]
aws_sns_topic.namespaced_microservice_topic: Creation complete after 0s [id=arn:aws:sns:us-east-2:477330550029:testing-topic]
aws_lambda_function.namespaced_microservice_lambda: Creating...
aws_s3_bucket.namespaced_microservice_s3: Creation complete after 1s [id=testing]
aws_lambda_function.namespaced_microservice_lambda: Still creating... [10s elapsed]
aws_lambda_function.namespaced_microservice_lambda: Creation complete after 14s [id=lambda-testing]
aws_sns_topic_subscription.namespaced_microservice_subscription: Creating...
aws_sns_topic_subscription.namespaced_microservice_subscription: Creation complete after 0s [id=arn:aws:sns:us-east-2:477330550029:testing-topic:8732c088-cff1-4c1a-9077-b4bc02498548]

Apply complete! Resources: 5 added, 0 changed, 0 destroyed.
```

## Port Syntax

Any reference you wish to grab from a resource must be exported. This is done
with one of the `-->` arrows as described here.

There are three arrows that produce special effects:

-  `-->`: EXPORT
   -  stand-alone: basic export syntax. This will export the value of the given
      key so that it can be referenced by other resources.
   -  with `export` key: when prepended to the value of the `export` key as a
      sister to `resource`: this currently is used to support the `depends_on`
      terraform meta-argument. See **Exports Example** below.
-  `-->*`: EXPORT `one(...)`
   -  this is a special case to handle terraform sets with a single item. This
      export will produce a `one(...)` function call, grabbing a single member
      of a set. You must pair this syntax with a array wrapper around the object
      containing the keys you want to export. See **Exports Example** below.
-  `<--`: IMPORT
   -  This syntax is used when referencing shared resources that are created
      outside a module/namespace, but are referenced within a modules. This is
      only necessary prevent a namespace from being added within the module
      See **Imports Example** below.

### Exports Example

```ts
const archive_plan = ({
    build_plan,
    build_plan_filename
}): AWS => {
    return {
        resource: {
            local_file: {
                content: build_plan,
                filename: `-->${build_plan_filename}`, // --> reference filename
            },
            export: '-->local_file', // --><the attribute for depends_on>
        },
    }
}

const archive = ({
    filename,
    depends_on,
}): AWS => {
    return {
        resource: {
            null_resource: {
                triggers: {
                    filename,
                },
                depends_on,
            },
        },
    }
}

const acm_certificate = ({ domain_name }): AWS => ({
    resource: {
        acm_certificate: {
            domain_name,
            validation_method: 'DNS',
            domain_validation_options: [ // 👀 must wrap in [] for proper export
                {
                    resource_record_name: '-->*',
                    resource_record_type: '-->*',
                    resource_record_value: '-->*',
                },
            ],
            arn: '-->',
        },
    },
})

const route53_record = ({
    domain_name,
    type = 'A',
    records = [],
}: Route53Record): AWS => {
    return {
        resource: {
            route53_record: {
                name: domain_name,
                type,
                records
                ttl: 60,
            },
        },
    }
}

export const module = (
    {
        build_plan,
        domain_name,
        build_plan_filename,
        builder = '${path.root}/src/utils/package.py',
    },
    /**
     * this is a self-reference to the module's output
     * before it's converted to terraform-compliant JSON,
     * so that exported values can be referenced within the module
     */
    my // 👀 See `./src/config.ts` : `modulate` for details
): AWS => {
    return {
        plan: archive_plan({
            build_plan,
            build_plan_filename,
        }),
        archive: archive({
            build_plan_filename,
            filename: my?.plan?.resource?.local_file?.filename,
            depends_on: [my?.plan?.resource?.export],
            //=> "depends_on": ["local_file.<namespace>"]
            builder,
        }),
        acm: acm_certificate({
            domain_name,
        }),
        route53_record: route53_record({
            domain_name: my?.acm?.resource?.acm_certificate?.domain_validation_options?.[0]?.resource_record_name,
            //=> "name": "${one(resource.aws_acm_certificate.<namespace>.domain_validation_options).resource_record_name}"

            records: [my?.acm?.resource?.acm_certificate?.domain_validation_options?.[0]?.resource_record_value],
            //=> "records": ["${one(resource.aws_acm_certificate.<namespace>.domain_validation_options).resource_record_value}"]

            type: my?.acm?.resource?.acm_certificate?.domain_validation_options?.[0]?.resource_record_type,
            //=> "type": "${one(resource.aws_acm_certificate.<namespace>.domain_validation_options).resource_record_type}"
        }),
    }
```

### Import Example

Once a module has been `modulate`d or `namespaced`, it can not be `modulate`d
again. This is because those functions reconfigure the object to be
[Terraform-compliant JSON] and - thus - are no longer amenable to the `my?.`
access pattern, which enables references to be shared within the module.

In order to share resources that are manipulated within a module but passed in
from outside of it, you must use a special syntax to prevent them from being
namespaced within. This is done with the `<--` arrow syntax.

Let's extrapolate on the **Basic Example**, so that we _aren't_ creating a
separate SNS topic for every lambda we create and, _instead_, share a topic
between the lambdas.

Since the lambda module internally references the topic's `arn`, we want to
prevent that reference from being namespaced within the lambda module (the
default behavior), so that a single topic reference is created for each lambda
rather than internally namespaced references to the topic.

```ts
//...continued from Basic Example

const snsTopic = ({ name }): AWS => ({
   resource: {
      sns_topic: {
         name,
         arn: '-->',
      },
   },
})

const sns_sub_lambda = ({
   topic_arn,
   lambda_arn,
   filter_policy = {},
   filter_policy_scope = 'MessageAttributes',
}): AWS => ({
   resource: {
      sns_topic_subscription: {
         topic_arn,
         protocol: 'lambda',
         endpoint: lambda_arn,
         filter_policy: JSON.stringify(filter_policy, null, 2),
         filter_policy_scope,
         arn: '-->',
      },
   },
})

const s3 = (name): AWS => ({
   resource: {
      s3_bucket: {
         bucket: name,
      },
   },
})

const lambda = ({
   name,
   role_arn,
   file_path,
   env_vars = {},
   handler = 'handler.handler',
   runtime = 'python3.8',
}): AWS => ({
   resource: {
      lambda_function: {
         function_name: `lambda-${name}`,
         role: role_arn,
         runtime,
         handler,
         filename: file_path,
         environment: {
            variables: env_vars,
         },
         arn: '-->',
      },
   },
})

//...
// NEW! very tiny module :: module syntax = { [key: string]: (args) => { [key: string]: AWS } }
export const topicModule = modulate({ topic: ({ name }) => ({ sns: snsTopic({ name }) }) })

export const microservice = (
   {
      name = 'module',
      file_path = '${path.root}/lambdas/template/zipped/handler.py.zip',
      handler = 'handler.handler',
      env_vars = {},
      filter_policy = {},
      topic_arn, // NEW!
   },
   my: Output,
): AWS => ({
   //...
   lambda: lambda({
      name,
      role_arn: my?.lambda_role?.resource?.iam_role?.arn,
      file_path,
      handler,
      env_vars: {
         S3_BUCKET_NAME: name,
         SNS_TOPIC_ARN: `<--${topic_arn}`, // 👀 import reference (prevent namespace)
         ...env_vars,
      },
   }),
   subscription: sns_sub_lambda({
      topic_arn: `<--${topic_arn}`, //  👀  import reference (prevent namespace)
      lambda_arn: my?.lambda?.resource?.lambda_function?.arn,
      filter_policy,
   }),
})

//...
// for the the topicModule provided herein, the name is snake-cased
// and used as the root key
const [topic, topic_refs] = topicModule({ name: 'my-topic' })

const topic_arn = topic_refs['my_topic']?.resource?.sns_topic?.arn

const lambdaModule = modulate({ microservice })

const lambda1 = lambdaModule({ name: 'testing1', topic_arn })

const lambda2 = lambdaModule({ name: 'testing2', topic_arn })

const module = {
   topic,
   lambda1,
   lambda2,
}

const output = namespace({ module })

fs.writeFileSync('main.tf.json', JSON.stringify(output, null, 4))
```

# Contributors

## Using the Typescript Interface Generator (CLI)

> NOTE
> While building the library, I used [bun]. This proved to be very fast and
> didn't require me to compile the typescript before executing it. If you'd like
> to use another JS runtime that doesn't natively support typescript, you'll
> need to compile the typescript first.

With native typescript support, you can simply run:

```bash
bun run src/cli.ts '<terraform-provider-name>' '<version>'
```

Example:

```bash
bun run src/cli.ts 'terraform-provider-aws' '5.20.0'
```

This will generate the typescript interfaces for the given provider and version

[bun]: https://bun.sh/

# Initial Use

Building microservices with serverless technologies on AWS

-  API Gateway
-  Lambda
-  S3
-  SNS
-  DynamoDB (TODO)

## Microservice Schema

### Provisioning Dependency Tree

```diff
+ SEQUENCE             000 001 002 003 004 005 006 007 008
- μservice              .   .   .   .   .   .   .   .   .
  - name                I-->O   .   .   .   .   .   .   .
- S3                        |   .   .   .   .   .   .   .
  - name                    I-->O   .   .   .   .   .   .
  - arn                     |   I-->O   .   .   .   .   .
- SNS                       |       |   .   .   .   .   .
  - topic name              I-->O   |   .   .   .   .   .
  - topic arn                   I-->O   .   .   .   .   .
  - subscription                    |   .   I   .   .   .
- λ                                 |   .   |   .   .   .
  - env vars                        I-->O   |   .   .   .
  - name                                I   |   .   .   .
  - arn                                 I-->O   .   .   .
- API Gateway                               |   .   .   .
  - route                                   I-->O   .   .
  - authorizers                             I-->O   .   .
  - api arn                                     I-->O   .
- Route53                                           |   .
  - subdomain                                       I-->O
```

## Dependency matrix

| service/dep   | μs name | r53 D | r53.D | agw | agw/ | topic |  λ  | s3  |
| ------------- | :-----: | :---: | :---: | :-: | :--: | :---: | :-: | :-: |
| r53 domain    |         |       |       |     |      |       |     |     |
| λ             |    X    |       |       |     |      |       |     |     |
| s3 bucket     |    X    |       |       |     |      |       |     |     |
| s3 access     |    X    |       |       |     |      |       |  X  |  X  |
| r53 subdomain |    X    |   X   |       |     |      |       |     |     |
| apigw         |         |   X   |   X   |     |      |       |     |     |
| apigw route/  |    X    |   X   |   X   |  X  |      |       |     |     |
| sns topic     |         |   X   |   X   |  X  |  X   |       |     |     |
| λ route       |    X    |   X   |   X   |  X  |  X   |       |     |     |
| λ sub         |    X    |   X   |   X   |  X  |  X   |   X   |  X  |     |
| λ pub         |         |   X   |   X   |  X  |  X   |   X   |  X  |     |

<!--References-->

[topic]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html
[authorizer]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_authorizer
[API Gateway]: https://github.com/terraform-aws-modules/terraform-aws-apigateway-v2/blob/master/examples/complete-http/main.tf
[Terraform-compliant JSON]: https://developer.hashicorp.com/terraform/language/syntax/json
