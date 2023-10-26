import { AWS, flag } from './constants'

export const sns_topic = ({ name, tags = {} }): AWS => ({
    resource: {
        sns_topic: {
            name: `${name}-topic`,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
})
