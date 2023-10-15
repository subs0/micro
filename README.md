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

## Using the TF JSON Compiler

Simply import the generated interface and start creating POJOs

```typescript
import { AWS } from '../registry/index'
import { flattenPreservingKeyPaths, compile } from 'src/xf-assets'

const policy_doc: AWS = {
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
        },
    },
}

compile({ policy_doc }, 'main.tf.json')
```

This should produce:

```json
{
    "data": {
        "aws_iam_policy_document": {
            "policy_doc": {
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
    "provider": [
        {
            "aws": {
                "region": "xx-xxxx-x",
                "profile": "xxxxxx"
            }
        }
    ]
}
```

#### 💡 The generated types will assist you in creating the POJOs by providing IDE hints.

### A More Realistic Example

```typescript
import { AWS } from '../registry/index'
import { compile } from 'src/xf-assets'

const policy_doc: AWS = {
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
        },
    },
}

const role: AWS = {
    resource: {
        iam_role: {
            name: 'throwaway-role',
            assume_role_policy: () => policy_doc.data?.iam_policy_document?.json,
        },
    },
}

const lambda: AWS = {
    resource: {
        lambda_function: {
            function_name: 'throwaway-lambda',
            role: () => role.resource?.iam_role?.arn,
            description: 'A throwaway lambda',
            filename: '${path.root}/lambdas/template/zipped/handler.py.zip',
            handler: 'handler.handler',
            runtime: 'python3.8',
            environment: {
                variables: {
                    FOO: 'bar',
                },
            },
        },
    },
}

const out = {
    policy_doc,
    role,
    lambda,
}

compile({ out }, 'main.tf.json')
```

Produces:

```json
{
    "data": {
        "aws_iam_policy_document": {
            "out_policy_doc": {
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
        "aws_iam_role": {
            "out_role": {
                "name": "throwaway-role",
                "assume_role_policy": "${data.aws_iam_policy_document.out_policy_doc.json}"
            }
        },
        "aws_lambda_function": {
            "out_lambda": {
                "function_name": "throwaway-lambda",
                "role": "${resource.aws_iam_role.out_role.arn}",
                "description": "A throwaway lambda",
                "filename": "${path.root}/lambdas/template/zipped/handler.py.zip",
                "handler": "handler.handler",
                "runtime": "python3.8",
                "environment": {
                    "variables": {
                        "FOO": "bar"
                    }
                }
            }
        }
    },
    "provider": [
        {
            "aws": {
                "region": "xx-xxxx-x",
                "profile": "xxxxxx"
            }
        }
    ]
}
```

You may notice how nested keys get concatenated with their parent's. Thus **you
should not change the name of keys** once you `terraform apply` them unless you
want to destroy the existing assets and create new ones in the cloud.

## Modules

To create modules, simply make a function that takes some arguments and returns
an object. The way god intended.

```typescript
import { AWS } from '../registry/index'
import { compile, aws_$ } from '../src/xf-assets'

const policy_doc: AWS = {
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
        },
    },
}
const gen_role = (name: string): { [key: string]: AWS } => ({
    [`${name}_role`]: {
        resource: {
            iam_role: {
                name: `${name}-role`,
                assume_role_policy: () => policy_doc.data?.iam_policy_document?.json,
            },
        },
    },
})

const lambda = ({
    name = 'throwaway',
    handler = 'handler.handler',
    path = 'lambdas/template/zipped/handler.py.zip',
    runtime = 'python3.8',
}): { [key: string]: AWS } => ({
    policy_doc,
    ...gen_role(name),
    [`${name}_lambda`]: {
        resource: {
            lambda_function: {
                function_name: name,
                role: aws_$('resource.iam_role.arn', gen_role, name),
                description: `A ${name.split('_').join(' ')} lambda`,
                filename: path,
                handler,
                runtime,
                environment: {
                    variables: {
                        FOO: 'bar',
                    },
                },
            },
        },
    },
})

compile(lambda({ name: 'pig' }), 'main.tf.json')
```

Produces:

```json
{
    "data": {
        "aws_iam_policy_document": {
            "policy_doc": {
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
        "aws_iam_role": {
            "pig_role": {
                "name": "pig-role",
                "assume_role_policy": "${data.aws_iam_policy_document.policy_doc.json}"
            }
        },
        "aws_lambda_function": {
            "pig_lambda": {
                "function_name": "pig",
                "role": "${resource.aws_iam_role.pig_role.arn}",
                "description": "A pig lambda",
                "filename": "lambdas/template/zipped/handler.py.zip",
                "handler": "handler.handler",
                "runtime": "python3.8",
                "environment": {
                    "variables": {
                        "FOO": "bar"
                    }
                }
            }
        }
    },
    "provider": [
        {
            "aws": {
                "region": "xx-xxxx-x",
                "profile": "xxxx"
            }
        }
    ]
}
```

### But, Will It `terraform apply`?

```sh
terraform apply
data.aws_iam_policy_document.policy_doc: Reading...
data.aws_iam_policy_document.policy_doc: Read complete after 0s [id=2690255455]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_iam_role.pig_role will be created
  + resource "aws_iam_role" "pig_role" {
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
      + name                  = "pig-role"
      + name_prefix           = (known after apply)
      + path                  = "/"
      + tags_all              = (known after apply)
      + unique_id             = (known after apply)
    }

  # aws_lambda_function.pig_lambda will be created
  + resource "aws_lambda_function" "pig_lambda" {
      + architectures                  = (known after apply)
      + arn                            = (known after apply)
      + description                    = "A pig lambda"
      + filename                       = "lambdas/template/zipped/handler.py.zip"
      + function_name                  = "pig"
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
          + variables = {
              + "FOO" = "bar"
            }
        }
    }

Plan: 2 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_iam_role.pig_role: Creating...
aws_iam_role.pig_role: Creation complete after 0s [id=pig-role]
aws_lambda_function.pig_lambda: Creating...
aws_lambda_function.pig_lambda: Still creating... [10s elapsed]
aws_lambda_function.pig_lambda: Creation complete after 14s [id=pig]

Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
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

| service/dep   | μ name | r53 D | r53.D | agw | agw/ | topic |  λ  | s3  |
| ------------- | :----: | :---: | :---: | :-: | :--: | :---: | :-: | :-: |
| r53 domain    |        |       |       |     |      |       |     |     |
| λ             |   X    |       |       |     |      |       |     |     |
| s3 bucket     |   X    |       |       |     |      |       |     |     |
| s3 access     |   X    |       |       |     |      |       |  X  |  X  |
| r53 subdomain |        |   X   |       |     |      |       |     |     |
| apigw         |        |   X   |   X   |     |      |       |     |     |
| apigw route/  |   X    |   X   |   X   |  X  |      |       |     |     |
| sns topic     |        |   X   |   X   |  X  |  X   |       |     |     |
| λ route       |   X    |   X   |   X   |  X  |  X   |       |     |     |
| λ sub         |   X    |   X   |   X   |  X  |  X   |   X   |  X  |     |
| λ pub         |        |   X   |   X   |  X  |  X   |   X   |  X  |     |

## Topic Module

### Inputs

```json
[
    {
        "domain": "example.com",
        "subdomains": {
            "api": {                            // gateway is provisioned per subdomain
                "authorizers": {                // if not false (default) = api gateway
                    "cognito": {
                        "name"                      : "api-gw-authorizer-test",
                        "audience"                  : ["chopshop-auth-test"],
                        "issuer"                    : "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1234",
                        "identity_sources"          : ["$request.header.Authorization"],
                        "type"                      : "JWT"
                    }
                },
                "integrations":{                // if not false (default) = api gateway
                    // ultra short-hand
                    "GET /search": {
                        "module"                    : true,  // create bucket, topic and lambda with defaults
                    }
                    // short-hand
                    "POST /mp_upload": {
                        "name"                      : "api_example_com-POST-mp_upload",   // defaults to route
                    // 🥇 1st
                        "topic"                     : true,   // create default -> spread arn to env vars
                    // 🥈 2nd
                        "bucket"                    : true,  // create default -> spread name to env vars
                    // 🥉 3rd/last (to encapsulate all env vars)
                        "function"                  : true,  // create default -> merge all env vars
                        "use_authorizer"            : "cognito",                          // default false
                    },
                    // long-form
                    "POST /edit": {
                        "name"                      : "api_example_com-POST-edit",        // defaults to route (1)
                        "bucket": {      // if object, merge w/defaults
                            "name"                  : "api_example_com-POST-edit",        // defaults to (1)
                            "acl"                   : "private",                          // default
                            "force_destroy"         : false,                              // default
                            "tags": {                                                     // default
                                "Domain"            : "api_example_com"
                            }
                        },
                        "topic": {
                            "name"                  : "api_example_com-POST-edit",        // defaults to (1)
                            "tags": {                                                     // default
                                "Domain"            : "api_example_com"
                            }
                        }
                        "function": {
                            "name"                  : "api_example_com-POST-edit",        // defaults to (1)
                            "runtime"               : "python3.8",                        // default
                            "source_path"           : "{root}../lambdas/post-mp_upload/", // default
                            "payload_format_version": "2.0",                              // default
                            "handler"               : "index.handler",                    // default
                            "env_vars": {
                                "SNS_EVENT_TYPE"    : "uploaded",
                                "SNS_TOPIC_ARN"     : "this.topic.arn",   // split into [idx, component, key] (count)
                                "S3_BUCKET_NAME"    : "this.bucket.name", // split into [idx, component, key]
                            },
                            "tags": {                                                     // default
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

    "api_example_com-POST-mp_upload": {   // these can be spread in...
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
                "SNS_TOPIC_ARN"      : "this.topic.arn",   // split into [idx, component, key] (count)
                "S3_BUCKET_NAME"     : "this.bucket.name", // split into [idx, component, key]
            }
        },
        // these are new...
        "subscription": {
            "filter_policy"          : { "type": ["mp4"] },
            "filter_policy_scope"    : "MessageAttributes",
        },
        "fileservice": {
            "source_files": ["../lambdas/audio/"],
        }
    },
    "api_example_com-POST-edit": {   // these can be spread in...
        "topic": {
            "arn"                    : "arn:aws:sns:us-east-1:1234:api_example_com-POST-edit",
            "name"                   : "api_example_com-POST-edit",
        },
        // these are new...
        "bucket": {      // if object, merge w/defaults
            "name"                   : "api_example_com-POST-edit",             // defaults to (1)
            "acl"                    : "private",                               // default
            "force_destroy"          : false,                                   // default
            "env_vars": {                                                       // default
                "S3_BUCKET_NAME"     : "this.name"
            }
            "tags": {                                                           // default
                "Domain"             : "api_example_com"
            }
        },,
        "function" : { // build in place
            "source_path"            : "../lambdas/audio/",
            "payload_format_version" : "1.0",
            "handler"                : "index.handler",
            "runtime"                : "python3.8",
            "env_vars": {
                "SNS_EVENT_TYPE"     : "edited"
                "SNS_TOPIC_ARN"      : "this.topic.arn",   // split into [idx, component, key] (count)
                "S3_BUCKET_NAME"     : "this.bucket.name", // split into [idx, component, key]
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
