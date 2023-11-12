import { AWS, flag } from '../constants'

//  ,e,
//   "    /~~~8e  888-~88e-~88e
//  888       88b 888  888  888
//  888  e88~-888 888  888  888
//  888 C888  888 888  888  888
//  888  "88_-888 888  888  888

export const iamRole = ({ name, policy_json, tags = {} }): AWS => ({
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

export const iamRolePolicyAttachment = ({ role_name, policy_arn }): AWS => ({
   resource: {
      iam_role_policy_attachment: {
         role: role_name,
         policy_arn,
      },
   },
})

export const iamPolicy = ({ name, policy_json, tags = {} }): AWS => ({
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
