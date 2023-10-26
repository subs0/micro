import { AWS05200 as AWS } from '../registry/index'

//                             d8              /~~~~~~ _-~88e
//  888-~\  e88~-_  888  888 _d88__  e88~~8e  /           888b
//  888    d888   i 888  888  888   d888  88b `-~~88e   __888"
//  888    8888   | 888  888  888   8888__888  /  888b    888e
//  888    Y888   ' 888  888  888   Y888    , |   888P    888P
//  888     "88_-~  "88_-888  "88_/  "88___/   \__88"  ~-_88"

export const rout53_zone = ({ apex = 'chopshop-test.net' }): AWS => ({
    data: {
        route53_zone: {
            name: apex,
            zone_id: '-->',
        },
    },
})

export const acm_cert = ({ subdomain, apex = 'chopshop-test.net' }): AWS => ({
    resource: {
        acm_certificate: {
            domain_name: apex,
            validation_method: 'DNS',
            subject_alternative_names: [`${subdomain}.${apex}`],
            tags: {
                BroughtToYouBy: '@-0/micro',
            },
            // @ts-ignore -> terraform meta argument (not in docs)
            lifecycle: {
                create_before_destroy: true,
            },
            domain_validation_options: [
                {
                    resource_record_name: '-->*',
                    resource_record_type: '-->*',
                    resource_record_value: '-->*',
                },
            ],
            arn: '-->',
        },
    },
})

export const route53_record = ({
    name,
    route53_zone_id,
    api_domain_name,
    api_hosted_zone_id,
    type = 'A',
    records = [],
}: {
    name: string
    route53_zone_id: string
    api_domain_name?: string
    api_hosted_zone_id?: string
    type?: string
    records?: string[]
}): AWS => ({
    resource: {
        route53_record: {
            name,
            // @ts-ignore 🐛 missing docs
            type,
            zone_id: route53_zone_id,
            allow_overwrite: true,
            ...((records.length && { records }) || {}),
            ...((!api_domain_name && { ttl: 60 }) || {}),
            // 🐛 missing docs
            ...((api_domain_name && {
                alias: {
                    name: api_domain_name,
                    zone_id: api_hosted_zone_id,
                    evaluate_target_health: false,
                },
            }) ||
                {}),
            fqdn: '-->', // TODO test exclusion
        },
    },
})

export const acm_validation = ({ cert_arn, fqdns }): AWS => ({
    resource: {
        acm_certificate_validation: {
            certificate_arn: `-->${cert_arn}`,
            validation_record_fqdns: fqdns,
        },
    },
})
