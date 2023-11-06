import { AWS, flag } from '../types'

/**
 * Create an ECR repository.
 * One repository can be used for multiple Lambda function images.
 *
 * @param { string } name - name of the repository
 * @param { string } mutability - image tag = `MUTABLE` or `IMMUTABLE`
 * @param { boolean } force_delete - delete the repository even if it contains images.
 * @param { boolean } scan - scan the repository for vulnerabilities after pushing the image.
 * @param { object } tags - A mapping of tags to assign to the resource.
 */
export const ecr_repo = ({
    name,
    mutability = 'MUTABLE',
    force_delete = true,
    scan = false,
    tags = {},
}): AWS => ({
    resource: {
        // @ts-ignore: FIXME (src/types or regex)
        // image_scanning_configuration is qualified in place
        // instead of as separate section with heading
        ecr_repository: {
            force_delete,
            name: `-->${name}`,
            image_tag_mutability: mutability,
            image_scanning_configuration: {
                scan_on_push: scan,
            },
            tags: {
                ...flag,
                ...tags,
            },
        },
    },
})

/**
 * See [rules documentation]
 *
 * [rules documentation]: https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters
 */
const default_policy = {
    rules: [
        {
            rulePriority: 1,
            description: 'Keep only the last 2 images',
            selection: {
                tagStatus: 'any',
                countType: 'imageCountMoreThan',
                countNumber: 2,
            },
            action: {
                type: 'expire',
            },
        },
    ],
}

/**
 * A JSON formatted ECR lifecycle policy to automate the cleaning up of unused
 * images.
 *
 * @param { string } policy - JSON formatted ECR lifecycle policy. See [docs]
 *
 * [docs]: https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters
 */
export const lifecycle_policy = ({ policy = default_policy, repo }): AWS => ({
    resource: {
        ecr_lifecycle_policy: {
            repository: repo,
            policy: JSON.stringify(policy),
        },
    },
})

export const ecr_repository = (
    {
        name,
        mutability = 'MUTABLE',
        force_delete = true,
        scan = false,
        policy = default_policy,
        tags = {},
    },
    my: { [key: string]: AWS }
) => {
    return {
        ecr_repo: ecr_repo({
            name,
            mutability,
            force_delete,
            scan,
            tags,
        }),
        lifecycle_policy: lifecycle_policy({
            repo: my?.ecr_repo?.resource?.ecr_repository?.name,
            policy,
        }),
    }
}
