import { AWS, flag } from '../types'
// one per subdomain?
export const ecr_repo = ({ name, tags = {} }): AWS => ({
    resource: {
        // @ts-ignore: FIXME (src/types or regex)
        // image_scanning_configuration is qualified in place
        // instead of as separate section with heading
        ecr_repository: {
            name,
            tags: {
                ...flag,
                ...tags,
            },
        },
    },
})

export const isFile = (path: string) => {
    const parts = path.split('/')
    const [last] = parts.slice(-1)
    return last.includes('.')
}

const null_resource = ({ file_path }): AWS => {
    return {
        resource: {
            // @ts-ignore: FIXME (src/types) no null_resource in AWS (tf proper)
            // [1]
            null_resource: {
                triggers: isFile(file_path)
                    ? { diff: `\${md5(file(${file_path}))}` }
                    : {
                          diff: `\${sha1(join("", [for f in fileset(${file_path}, "**"): filesha1(f)]))}`,
                      },
            },
        },
    }
}

const image = ({ repo, image_tag }): AWS => ({
    data: {
        ecr_image: {
            repository_name: repo,
            image_tag,
            // @ts-ignore: FIXME (src/types) add depends_on to data
            depends_on: [`null_resource.$SCOPE`],
        },
    },
})

export const ecr_image = ({ repo, file_path, image_tag }): AWS => ({
    ...null_resource({ file_path }),
    ...image({ repo, image_tag }),
})

const current_region: AWS = {
    data: {
        region: {
            name: '-->',
        },
        caller_identity: {
            account_id: '-->',
        },
    },
}

// TODO: add docker_image type?
const docker_img = ({ name, src_dir, acct_id, region, repo, image_tag }) => {
    const dockerfile = `${src_dir}/Dockerfile`
    return {
        docker_image: {
            name,
            build: {
                //context: file_path,
                dockerfile,
            },
        },
    }
}
/**
 * References:
 *
 * [1] https://stackoverflow.com/a/66501021
 */
