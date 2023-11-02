import { AWS, flag } from '../types'

//                             d8              /~~~~~~ _-~88e
//  888-~\  e88~-_  888  888 _d88__  e88~~8e  /           888b
//  888    d888   i 888  888  888   d888  88b `-~~88e   __888"
//  888    8888   | 888  888  888   8888__888  /  888b    888e
//  888    Y888   ' 888  888  888   Y888    , |   888P    888P
//  888     "88_-~  "88_-888  "88_/  "88___/   \__88"  ~-_88"

export const zone = ({ apex = 'chopshop-test.net' }): AWS => ({
    data: {
        route53_zone: {
            name: apex,
            zone_id: '-->',
        },
    },
})

export const acm_certificate = ({ full_domain = 'chopshop-test.net', tags = {} }): AWS => ({
    resource: {
        acm_certificate: {
            domain_name: full_domain,
            validation_method: 'DNS',
            // @ts-ignore -> terraform meta argument (not in docs)
            lifecycle: {
                create_before_destroy: true,
            },
            domain_validation_options: {
                resource_record_name: '-->*',
                resource_record_type: '-->*',
                resource_record_value: '-->*',
            },
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
})

export const acm_certificate_validation = ({ cert_arn, fqdns }): AWS => ({
    resource: {
        acm_certificate_validation: {
            certificate_arn: `-->${cert_arn}`,
            validation_record_fqdns: fqdns,
        },
    },
})

interface Route53Record {
    full_domain: string
    route53_zone_id: string
    api_domain_name?: string
    api_hosted_zone_id?: string
    type?: string
    records?: string[]
}

export const route53_record = ({
    full_domain,
    route53_zone_id,
    api_domain_name,
    api_hosted_zone_id,
    type = 'A',
    records = [],
}: Route53Record): AWS => {
    if (records.length && api_domain_name) {
        console.error(
            'Error in route53_record:\n' +
                "'records' and 'api_domain_name' ('alias') are mutually exclusive"
        )
    }
    return {
        resource: {
            route53_record: {
                name: full_domain,
                // @ts-ignore 🐛 missing docs
                type,
                zone_id: route53_zone_id,
                allow_overwrite: true,
                ...((records.length && { records }) || {}),
                // 🐛 missing docs
                ...((api_domain_name && {
                    alias: {
                        name: api_domain_name,
                        // TODO? force error for missing exports by defaulting to 'null'
                        zone_id: api_hosted_zone_id || 'null',
                        evaluate_target_health: false,
                    },
                }) || { ttl: 60 }),
                fqdn: '-->',
            },
        },
    }
}
