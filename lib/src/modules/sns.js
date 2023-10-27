import { flag } from '../constants';
export const topic = ({ name, tags = {} }) => ({
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
});
//# sourceMappingURL=sns.js.map