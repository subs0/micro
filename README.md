# Microservice Schema

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

##  μService (w/Subscriptions) Module

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
            "arn"  : "arn:aws:sns:us-east-1:1234:api_example_com-POST-mp_upload",
            "name" : "api_example_com-POST-mp_upload",
        },
        "bucket": {
            "arn"  : "arn:aws:s3:::example-com-mp-upload",
            "name" : "example-com-mp-upload",
        },
        "function": {
            "arn"  : "arn:aws:lambda:us-east-1:1234:function:api_example_com-POST-mp_upload",
            "name" : "api_example_com-POST-mp_upload",
            "env_vars": {
                "SNS_EVENT_TYPE"    : "uploaded",
                "SNS_TOPIC_ARN"     : "arn:aws:sns:us-east-1:1234:api_example_com-POST-mp_upload",
                "S3_BUCKET_NAME"    : "example-com-mp-upload",
            }
        },
        "subscription": {
            "arn"  : "arn:aws:sns:us-east-1:1234:api_example_com-POST-mp_upload:1234",
            "filter_policy"          : { "type": ["mp4"] },
            "filter_policy_scope"    : "MessageAttributes",
        },
    },
    "api_example_com-POST-edit": {   
        "topic": {
            "arn"  : "arn:aws:sns:us-east-1:1234:api_example_com-POST-edit",
            "name" : "api_example_com-POST-edit",
        },
        "bucket": {
            "arn"  : "arn:aws:s3:::example-com-mp-upload",
            "name" : "example-com-mp-upload",
        },
        "function": {
            "arn"  : "arn:aws:lambda:us-east-1:1234:function:api_example_com-POST-edit",
            "name" : "api_example_com-POST-edit",
            "env_vars": {
                "SNS_EVENT_TYPE"    : "edited",
                "SNS_TOPIC_ARN"     : "arn:aws:sns:us-east-1:1234:api_example_com-POST-edit",
                "S3_BUCKET_NAME"    : "example-com-mp-upload",
            }
        },
        "subscription": {
            "arn"  : "arn:aws:sns:us-east-1:1234:api_example_com-POST-edit:1234",
            "filter_policy"          : { "type": ["mp3"] },
            "filter_policy_scope"    : "MessageAttributes",
        },
    },
    "shorthand": {
        "topic": {
            "name": "shorthand",
            "arn" : "arn:aws:sns:us-east-1:1234:shorthand",
        },
        "bucket": {
            "name": "shorthand",
            "arn" : "arn:aws:s3:::shorthand",
        },
        "function": {
            "name": "shorthand",
            "arn" : "arn:aws:lambda:us-east-1:1234:function:shorthand",
            "env_vars": {
                "SNS_EVENT_TYPE"    : "shorthand",
                "SNS_TOPIC_ARN"     : "arn:aws:sns:us-east-1:1234:shorthand",
                "S3_BUCKET_NAME"    : "shorthand",
            }
        },
        "subscription": {
            "arn"  : "arn:aws:sns:us-east-1:1234:shorthand:1234",
            "filter_policy"          : { "type": ["mp3"] },
            "filter_policy_scope"    : "MessageAttributes",
        },
    }
}
```
<!--References-->

[topic]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html
[authorizer]: https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/apigatewayv2_authorizer
[API Gateway]: https://github.com/terraform-aws-modules/terraform-aws-apigateway-v2/blob/master/examples/complete-http/main.tf