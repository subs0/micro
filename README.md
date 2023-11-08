# TFTS

## Overview

This module has Three primary components:

1. A very large set of Terraform Typescript Interfaces, which provide IDE
   suggestions for required, optional Arguments and output Attributes on TF
   Resources/Data
2. A compiler, which takes in POJOs and outputs terraform-compliant JSON
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

## Example

Simply import the generated interface and start creating POJOs

```typescript
import {  modulate, namespace, AWS, Provider, Terraform } from '@-0/micro'
import fs from "fs"

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

const lambda_role = ({ name, policy_json }) =>
    ({
        resource: {
            iam_role: {
                name: `${name}-role`,
                assume_role_policy: policy_json,
                arn: '-->',
            },
        },
    } as AWS)

const sns_topic = (name) =>
    ({
        resource: {
            sns_topic: {
                name: `${name}-topic`,
                arn: '-->',
            },
        },
    } as AWS)

const sns_sub_lambda = ({
    topic_arn,
    lambda_arn,
    filter_policy = {},
    filter_policy_scope = 'MessageAttributes',
}) =>
    ({
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
    } as AWS)

const s3 = (name) =>
    ({
        resource: {
            s3_bucket: {
                bucket: name,
            },
        },
    } as AWS)

const lambda = ({
    name,
    role_arn,
    file_path,
    env_vars = {},
    handler = 'handler.handler',
    runtime = 'python3.8',
}) =>
    ({
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
    } as AWS)

interface Output {
    lambda_policy_doc: AWS
    topic: AWS
    s3: AWS
    lambda_role: AWS
    lambda: AWS
    subscription: AWS
}

/**
 * 👋 NOTE: 
 * when referencing other resources, you can use the following syntax:
 * ```
 * reference: my?.local_key?.data_or_resource?.resource_type?.attribute[?...]
 * 
 * ```
 *  * you must use the optional chaining operator `?.` throughout the entire chain
 * for the first step in compilation to allow undefined values until they are 
 * established. See the source for `config` for more details.
 * 
 * Notice the `Output` interface. This is a best practice for ensuring that you 
 * don't accidentally misspell a key when referring to my?...
 */
export const microServiceModule = (
    {
        name = 'module',
        file_path = '${path.root}/lambdas/template/zipped/handler.py.zip',
        handler = 'handler.handler',
        env_vars = {},
        filter_policy = {},
    },
    my: Output
) => ({
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

const provider = { provider: [
    {
        aws: {
            region: 'us-east-2',
            profile: 'chopshop',
        },
    }
]}

const terraform: Terraform = {
    terraform: {
        required_providers: {
            aws: {
                source: 'hashicorp/aws',
                version: '5.20.0',
            },
        }
    }
}

const module = modulate({ ms: microServiceModule })
const output = module({ name: 'throwaway-test' })
const namespaced = { output, provider, terraform }
const out = namespace({ namespaced })
fs.writeFileSync('main.tf.json', JSON.stringify(out, null, 4))
```

Produces:

```json
{
    "data": {
        "aws_iam_policy_document": {
            "namespaced_ms_lambda_policy_doc": {
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
            "namespaced_ms_topic": {
                "name": "throwaway-test-topic"
            }
        },
        "aws_s3_bucket": {
            "namespaced_ms_s3": {
                "bucket": "throwaway-test"
            }
        },
        "aws_iam_role": {
            "namespaced_ms_lambda_role": {
                "name": "throwaway-test-role",
                "assume_role_policy": "${data.aws_iam_policy_document.namespaced_ms_lambda_policy_doc.json}"
            }
        },
        "aws_lambda_function": {
            "namespaced_ms_lambda": {
                "function_name": "lambda-throwaway-test",
                "role": "${resource.aws_iam_role.namespaced_ms_lambda_role.arn}",
                "runtime": "python3.8",
                "handler": "handler.handler",
                "filename": "${path.root}/lambdas/template/zipped/handler.py.zip",
                "environment": {
                    "variables": {
                        "S3_BUCKET_NAME": "throwaway-test",
                        "SNS_TOPIC_ARN": "${resource.aws_sns_topic.namespaced_ms_topic.arn}"
                    }
                }
            }
        },
        "aws_sns_topic_subscription": {
            "namespaced_ms_subscription": {
                "topic_arn": "${resource.aws_sns_topic.namespaced_ms_topic.arn}",
                "protocol": "lambda",
                "endpoint": "${resource.aws_lambda_function.namespaced_ms_lambda.arn}",
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
data.aws_iam_policy_document.namespaced_ms_lambda_policy_doc: Reading...
data.aws_iam_policy_document.namespaced_ms_lambda_policy_doc: Read complete after 0s [id=2690255455]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_iam_role.namespaced_ms_lambda_role will be created
  + resource "aws_iam_role" "namespaced_ms_lambda_role" {
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
      + name                  = "throwaway-test-role"
      + name_prefix           = (known after apply)
      + path                  = "/"
      + tags_all              = (known after apply)
      + unique_id             = (known after apply)
    }

  # aws_lambda_function.namespaced_ms_lambda will be created
  + resource "aws_lambda_function" "namespaced_ms_lambda" {
      + architectures                  = (known after apply)
      + arn                            = (known after apply)
      + filename                       = "./lambdas/template/zipped/handler.py.zip"
      + function_name                  = "lambda-throwaway-test"
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

  # aws_s3_bucket.namespaced_ms_s3 will be created
  + resource "aws_s3_bucket" "namespaced_ms_s3" {
      + acceleration_status         = (known after apply)
      + acl                         = (known after apply)
      + arn                         = (known after apply)
      + bucket                      = "throwaway-test"
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

  # aws_sns_topic.namespaced_ms_topic will be created
  + resource "aws_sns_topic" "namespaced_ms_topic" {
      + arn                         = (known after apply)
      + content_based_deduplication = false
      + fifo_topic                  = false
      + id                          = (known after apply)
      + name                        = "throwaway-test-topic"
      + name_prefix                 = (known after apply)
      + owner                       = (known after apply)
      + policy                      = (known after apply)
      + signature_version           = (known after apply)
      + tags_all                    = (known after apply)
      + tracing_config              = (known after apply)
    }

  # aws_sns_topic_subscription.namespaced_ms_subscription will be created
  + resource "aws_sns_topic_subscription" "namespaced_ms_subscription" {
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

aws_iam_role.namespaced_ms_lambda_role: Creating...
aws_sns_topic.namespaced_ms_topic: Creating...
aws_s3_bucket.namespaced_ms_s3: Creating...
aws_iam_role.namespaced_ms_lambda_role: Creation complete after 0s [id=throwaway-test-role]
aws_sns_topic.namespaced_ms_topic: Creation complete after 0s [id=arn:aws:sns:us-east-2:477330550029:throwaway-test-topic]
aws_lambda_function.namespaced_ms_lambda: Creating...
aws_s3_bucket.namespaced_ms_s3: Creation complete after 1s [id=throwaway-test]
aws_lambda_function.namespaced_ms_lambda: Still creating... [10s elapsed]
aws_lambda_function.namespaced_ms_lambda: Creation complete after 14s [id=lambda-throwaway-test]
aws_sns_topic_subscription.namespaced_ms_subscription: Creating...
aws_sns_topic_subscription.namespaced_ms_subscription: Creation complete after 0s [id=arn:aws:sns:us-east-2:477330550029:throwaway-test-topic:8732c088-cff1-4c1a-9077-b4bc02498548]

Apply complete! Resources: 5 added, 0 changed, 0 destroyed.
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

-   API Gateway
-   Lambda
    -   Elastic File System
-   S3
-   SNS

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

## Topic Module

### Inputs

#### Example with three forms

- `GET /search` ultra short-hand
- `POST /mp_upload` short-hand
- `POST /edit` long-hand

```json
[
    {
        "domain": "example.com",
        "subdomains": {
            "api": {
                "authorizers": {
                    "cognito": {
                        "name"                      : "api-gw-authorizer-test",
                        "audience"                  : ["xxxxxx-auth-test"],
                        "issuer"                    : "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1234",
                        "identity_sources"          : ["$request.header.Authorization"],
                        "type"                      : "JWT"
                    }
                },
                "integrations":{
                    "GET /search":                  : true,
                    "POST /mp_upload": {
                        "name"                      : "api_example_com-POST-mp_upload",
                        "topic"                     : true,
                        "bucket"                    : true,
                        "function"                  : true, 
                        "use_authorizer"            : "cognito",                          
                    },
                    "POST /edit": {
                        "name"                      : "api_example_com-POST-edit",      
                        "bucket": {
                            "name"                  : "api_example_com-POST-edit",
                            "acl"                   : "private",
                            "force_destroy"         : false,
                            "tags": {
                                "Domain"            : "api_example_com"
                            }
                        },
                        "topic": {
                            "name"                  : "api_example_com-POST-edit",        
                            "tags": {                                                     
                                "Domain"            : "api_example_com"
                            }
                        }
                        "function": {
                            "name"                  : "api_example_com-POST-edit",        
                            "runtime"               : "python3.8",                        
                            "source_path"           : "{root}../lambdas/post-mp_upload/", 
                            "payload_format_version": "2.0",                              
                            "handler"               : "index.handler",                    
                            "env_vars": {
                                "SNS_EVENT_TYPE"    : "uploaded",
                                "SNS_TOPIC_ARN"     : "this.topic.arn",   
                                "S3_BUCKET_NAME"    : "this.bucket.name", 
                            },
                            "tags": {                                     
                                "Domain"            : "api_example_com"
                            }
                        },
                    },
                }
            }
        }
    }
]
```
#### Structure
- `domain`: the apex domain
- `subdomains`
    - [subdomain name]: api gateway is provisioned per subdomain
        - `authorizers`: if not false (default) = initialize api gateway
            - [authorizer name]
                - `name`
                - `audience`
                - `issuer`
                - `identity_sources`
                - `type`
        - `integrations`: if not false (default) = initialize api gateway
            - [method] /[route]: if `true`, (ultra short-hand) then create defaults:
                - `name` (defaults to route)
                - if `topic` is `true` (default), then create defaults (short-hand) for:
                    - `name`: [subdomain]-[method]-[route]
                    - `tags`
                - if `bucket` is `true` (default), then create defaults (short-hand) for:
                    - `name`: [subdomain]-[method]-[route]
                    - `acl`
                    - `force_destroy`
                    - `tags`
                - if `function` is `true` (default), then create defaults (short-hand) for:
                    - `name`: [subdomain]-[method]-[route]
                    - `runtime`
                    - `source_path`
                    - `payload_format_version`
                    - `handler`
                    - `env_vars`
                        - `SNS_EVENT_TYPE`
                        - `SNS_TOPIC_ARN`
                        - `S3_BUCKET_NAME`
                    - `tags`
                - `use_authorizer`: 
                    - if `false` (default), then use api gateway, 
                    - else reference settings from [authorizer name]

### Functionality

1. Builds resources
    - buckets
    - topics
    - lambdas
    - subscriptions to topics
2. Builds an [API Gateway] via aws terraform module using resources
    - takes outputs from step 1 and conforms them to [API Gateway] module

### Outputs

```json
{
    "POST /mp_upload": {
        "apigw": {
            "domain"        : "example.com",
            "subdomain"     : "api",
            "method"        : "POST",
            "route"         : "/mp_upload",
            "arn"           : "arn:aws:apigateway:us-east-1::/restapis/1234",
            "id"            : "1234",
            "execution_arn" : "arn:aws:apigateway:us-east-1::/restapis/1234/*",
        },
        "topic": {
            "arn"           : "arn:aws:sns:us-east-1:1234:api_example_com-POST-mp_upload",
            "name"          : "api_example_com-POST-mp_upload",
        },
        "function": {
            "arn"           : "arn:aws:lambda:us-east-1:1234:function:api_example_com-POST-mp_upload",
            "name"          : "api_example_com-POST-mp_upload",
            "env_vars": {
                "SNS_EVENT_TYPE"    : "uploaded",
                "SNS_TOPIC_ARN"     : "arn:aws:sns:us-east-1:1234:api_example_com-POST-mp_upload",
                "S3_BUCKET_NAME"    : "example-com-mp-upload",
            }
        },
        "bucket": {
            "arn"           : "arn:aws:s3:::example-com-mp-upload",
            "name"          : "example-com-mp-upload",
        },
    },
    "POST /edit":{
        "apigw": {
            "domain"        : "example.com",
            "subdomain"     : "api",
            "method"        : "POST",
            "route"         : "/edit",
            "arn"           : "arn:aws:apigateway:us-east-1::/restapis/1234",
            "id"            : "1234",
            "execution_arn" : "arn:aws:apigateway:us-east-1::/restapis/1234/*",
        },
        "topic": {
            "arn"           : "arn:aws:sns:us-east-1:1234:api_example_com-POST-edit",
            "name"          : "api_example_com-POST-edit",
        },
        "function": {
            "arn"           : "arn:aws:lambda:us-east-1:1234:function:api_example_com-POST-edit",
            "name"          : "api_example_com-POST-edit",
            "env_vars": {
                "SNS_EVENT_TYPE"    : "edited",
                "SNS_TOPIC_ARN"     : "arn:aws:sns:us-east-1:1234:api_example_com-POST-edit",
                "S3_BUCKET_NAME"    : "example-com-mp-upload",
            }
        },
        "bucket": {
            "arn"           : "arn:aws:s3:::example-com-mp-upload",
            "name"          : "example-com-mp-upload",
        },
    },
    ...
}
```

These outputs are then accepted as inputs to create subscriptions and/or direct
integrations with the API Gateway.

## μService (w/Subscriptions) Module

Start building here. The functions used in this module will be reused in the
higher-level module.

### Inputs

```json

{

    "api_example_com-POST-mp_upload": {
        "topic": {
            "arn"                    : "arn:aws:sns:us-east-1:1234:api_example_com-POST-mp_upload",
            "name"                   : "api_example_com-POST-mp_upload",
        },
        "bucket": {
            "arn"                    : "arn:aws:s3:::example-com-mp-upload",
            "name"                   : "example-com-mp-upload",
        },
        "function": {
            "arn"                    : "arn:aws:lambda:us-east-1:1234:function:api_example_com-POST-mp_upload",
            "name"                   : "api_example_com-POST-mp_upload",
            "env_vars": {
                "SNS_EVENT_TYPE"     : "uploaded",
                "SNS_TOPIC_ARN"      : "this.topic.arn",   
                "S3_BUCKET_NAME"     : "this.bucket.name",
            }
        },
        "subscription": {
            "filter_policy"          : { "type": ["mp4"] },
            "filter_policy_scope"    : "MessageAttributes",
        }
    },
    "api_example_com-POST-edit": {
        "topic": {
            "arn"                    : "arn:aws:sns:us-east-1:1234:api_example_com-POST-edit",
            "name"                   : "api_example_com-POST-edit",
        },
        "bucket": {     
            "name"                   : "api_example_com-POST-edit",             
            "acl"                    : "private",                               
            "force_destroy"          : false,                                   
            "env_vars": {                                                       
                "S3_BUCKET_NAME"     : "this.name"
            }
            "tags": {
                "Domain"             : "api_example_com"
            }
        },,
        "function" : {
            "source_path"            : "../lambdas/audio/",
            "payload_format_version" : "1.0",
            "handler"                : "index.handler",
            "runtime"                : "python3.8",
            "env_vars": {
                "SNS_EVENT_TYPE"     : "edited"
                "SNS_TOPIC_ARN"      : "this.topic.arn",   
                "S3_BUCKET_NAME"     : "this.bucket.name",
            },
        },
        "subscription": {
            "filter_policy"          : { "type": ["mp3"] },
            "filter_policy_scope"    : "MessageAttributes",
        }
    },
    "shorthand": {
        "topic": true,
        "bucket": true,
        "function": true,
        "subscription": {
            "filter_policy"          : { "type": ["mp3"] },
            "filter_policy_scope"    : "MessageAttributes",
        }
    }
}
```

### Functionality

1. Builds resources, if needed (no `arn`)
    - buckets
    - topics
    - lambdas
    - subscriptions to topics

### Outputs

```json
{
    "api_example_com-POST-mp_upload": {
        "topic": {
            "arn": "arn:aws:sns:us-east-1:1234:api_example_com-POST-mp_upload",
            "name": "api_example_com-POST-mp_upload"
        },
        "bucket": {
            "arn": "arn:aws:s3:::example-com-mp-upload",
            "name": "example-com-mp-upload"
        },
        "function": {
            "arn": "arn:aws:lambda:us-east-1:1234:function:api_example_com-POST-mp_upload",
            "name": "api_example_com-POST-mp_upload",
            "env_vars": {
                "SNS_EVENT_TYPE": "uploaded",
                "SNS_TOPIC_ARN": "arn:aws:sns:us-east-1:1234:api_example_com-POST-mp_upload",
                "S3_BUCKET_NAME": "example-com-mp-upload"
            }
        },
        "subscription": {
            "arn": "arn:aws:sns:us-east-1:1234:api_example_com-POST-mp_upload:1234",
            "filter_policy": { "type": ["mp4"] },
            "filter_policy_scope": "MessageAttributes"
        }
    },
    "api_example_com-POST-edit": {
        "topic": {
            "arn": "arn:aws:sns:us-east-1:1234:api_example_com-POST-edit",
            "name": "api_example_com-POST-edit"
        },
        "bucket": {
            "arn": "arn:aws:s3:::example-com-mp-upload",
            "name": "example-com-mp-upload"
        },
        "function": {
            "arn": "arn:aws:lambda:us-east-1:1234:function:api_example_com-POST-edit",
            "name": "api_example_com-POST-edit",
            "env_vars": {
                "SNS_EVENT_TYPE": "edited",
                "SNS_TOPIC_ARN": "arn:aws:sns:us-east-1:1234:api_example_com-POST-edit",
                "S3_BUCKET_NAME": "example-com-mp-upload"
            }
        },
        "subscription": {
            "arn": "arn:aws:sns:us-east-1:1234:api_example_com-POST-edit:1234",
            "filter_policy": { "type": ["mp3"] },
            "filter_policy_scope": "MessageAttributes"
        }
    },
    "shorthand": {
        "topic": {
            "name": "shorthand",
            "arn": "arn:aws:sns:us-east-1:1234:shorthand"
        },
        "bucket": {
            "name": "shorthand",
            "arn": "arn:aws:s3:::shorthand"
        },
        "function": {
            "name": "shorthand",
            "arn": "arn:aws:lambda:us-east-1:1234:function:shorthand",
            "env_vars": {
                "SNS_EVENT_TYPE": "shorthand",
                "SNS_TOPIC_ARN": "arn:aws:sns:us-east-1:1234:shorthand",
                "S3_BUCKET_NAME": "shorthand"
            }
        },
        "subscription": {
            "arn": "arn:aws:sns:us-east-1:1234:shorthand:1234",
            "filter_policy": { "type": ["mp3"] },
            "filter_policy_scope": "MessageAttributes"
        }
    }
}
```

<!--References-->

[topic]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html
[authorizer]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_authorizer
[API Gateway]: https://github.com/terraform-aws-modules/terraform-aws-apigateway-v2/blob/master/examples/complete-http/main.tf
