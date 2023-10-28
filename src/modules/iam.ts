import { AWS, Statement, flag } from '../types'

//  ,e,
//   "    /~~~8e  888-~88e-~88e
//  888       88b 888  888  888
//  888  e88~-888 888  888  888
//  888 C888  888 888  888  888
//  888  "88_-888 888  888  888

export const iam_policy_doc: AWS = {
    data: {
        iam_policy_document: {
            statement: {
                effect: 'Allow',
                actions: ['sts:AssumeRole'],
                principals: {
                    identifiers: ['lambda.amazonaws.com', 'apigateway.amazonaws.com'],
                    type: 'Service',
                },
            },
            json: '-->',
        },
    },
}

export const iam_role = ({ name, policy_json, tags = {} }): AWS => ({
    resource: {
        iam_role: {
            name: `-->${name}-role`,
            assume_role_policy: policy_json,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
})

const bucket_policy_statement = ({ bucket_name, lambda_role_arn = '' }): Statement => ({
    ...(lambda_role_arn ? { principals: { identifiers: [lambda_role_arn], type: 'AWS' } } : {}),
    effect: 'Allow',
    actions: [
        's3:AbortMultipartUpload',
        's3:ListMultipartUploadParts',
        's3:ListBucketMultipartUploads',
        's3:PutObject',
        's3:GetObject',
        's3:DeleteObject',
    ],
    resources: [`arn:aws:s3:::${bucket_name}`, `arn:aws:s3:::${bucket_name}/*`],
})

export const multi_stmt_policy_doc = ({
    bucket_name = '',
    topic_arn = '',
    cloudwatch_arn = '',
    lambda_role_arn = '',
}): AWS => ({
    data: {
        iam_policy_document: {
            statement: [
                ...(bucket_name
                    ? ([bucket_policy_statement({ bucket_name, lambda_role_arn })] as Statement[])
                    : []),
                ...(topic_arn
                    ? ([
                          {
                              effect: 'Allow',
                              actions: ['sns:Publish', 'sns:Subscribe'],
                              resources: [topic_arn],
                          },
                      ] as Statement[])
                    : []),
                ...(cloudwatch_arn
                    ? ([
                          {
                              effect: 'Allow',
                              actions: [
                                  'logs:CreateLogGroup',
                                  'logs:CreateLogStream',
                                  'logs:PutLogEvents',
                              ],
                              resources: [`${cloudwatch_arn}:*`, `${cloudwatch_arn}:*:*`],
                          },
                      ] as Statement[])
                    : []),
            ],
            json: '-->',
        },
    },
})

export const iam_role_policy_attachment = ({ role_name, policy_arn }): AWS => ({
    resource: {
        iam_role_policy_attachment: {
            role: role_name,
            policy_arn,
        },
    },
})

export const iam_policy = ({ name, policy_json, tags = {} }): AWS => ({
    resource: {
        iam_policy: {
            name: `-->${name}-policy`,
            policy: policy_json,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
})
