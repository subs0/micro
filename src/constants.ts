import { AWS05200, AWS05210 } from 'registry'
export type AWS = AWS05200

export const flag = { BroughtToYouBy: '@-0/micro' }

export type NestedObject = { [key: string]: NestedObject }

export interface Provider {
    [key: string]: {
        region: string
        profile?: string
        alias?: string
    }
}

export interface Terraform {
    required_providers: {
        [key: string]: {
            source: string
            version: string
        }
    }
}

//        888             d8
//   e88~\888   /~~~8e  _d88__   /~~~8e
//  d888  888       88b  888         88b
//  8888  888  e88~-888  888    e88~-888
//  Y888  888 C888  888  888   C888  888
//   "88_/888  "88_-888  "88_/  "88_-888

/**
 * The following type customizations provide an example of how to modify a block
 * to allow for Array values in addition to default interfaces...
 *
 * reference blog [1]
 */
type Data = NonNullable<AWS['data']>
type IamPolicyDoc = NonNullable<Data['iam_policy_document']>
export type Statement = NonNullable<IamPolicyDoc['statement']>
export interface Statements extends Statement {
    [index: number]: Statement
}
interface IamPolicyDocs extends IamPolicyDoc {
    statement?: Statement | Statements
}
export interface DataColls extends Data {
    iam_policy_document?: IamPolicyDocs
}

//  888-~\  e88~~8e   d88~\  e88~-_  888  888 888-~\  e88~~\  e88~~8e
//  888    d888  88b C888   d888   i 888  888 888    d888    d888  88b
//  888    8888__888  Y88b  8888   | 888  888 888    8888    8888__888
//  888    Y888    ,   888D Y888   ' 888  888 888    Y888    Y888    ,
//  888     "88___/  \_88P   "88_-~  "88_-888 888     "88__/  "88___/

type Resource = NonNullable<AWS['resource']>
type AcmCertificate = NonNullable<Resource['acm_certificate']>
type DomainValidationOptions = NonNullable<AcmCertificate['domain_validation_options']>
interface ValidationOptions extends DomainValidationOptions {
    [index: number]: DomainValidationOptions
}
interface AcmCertificates extends AcmCertificate {
    domain_validation_options?: DomainValidationOptions | ValidationOptions
}
export interface ResourceColls extends Resource {
    acm_certificate?: AcmCertificates
}

//       e      Y88b         / ,d88~~\
//      d8b      Y88b       /  8888
//     /Y88b      Y88b  e  /   `Y88b
//    /  Y88b      Y88bd8b/     `Y88b,
//   /____Y88b      Y88Y8Y        8888
//  /      Y88b      Y  Y      \__88P'

export interface AWSColls extends AWS {
    data?: DataColls
    resource?: ResourceColls
}
