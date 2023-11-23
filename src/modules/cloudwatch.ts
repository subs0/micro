import { modulate } from '../config'
import { AWS, flag } from '../constants'

export const cloudwatch = ({ name, retention_in_days = 7, tags = {} }): AWS => ({
   resource: {
      cloudwatch_log_group: {
         name: `/aws/lambda/function-${name}`, // required name format for proper connection to lambda
         retention_in_days,
         tags: { ...flag, ...tags },
         arn: '-->',
      },
   },
})

const CloudWatch = ({ name, retention_in_days = 7, tags = {} }) => ({
   [name]: cloudwatch({ name, retention_in_days, tags }),
})

/**
 * NOTE:
 * The name of the topic will be used as the key. e.g.,
 * ```js
 * const { example } = topicModule({ name: 'example' })
 * ```
 */
export const cloudwatchModule = modulate({ cloudwatch: CloudWatch })
