import { AWS } from '../types';
export declare const zone: ({ apex }: {
    apex?: string | undefined;
}) => AWS;
export declare const acm_certificate: ({ full_domain, tags }: {
    full_domain?: string | undefined;
    tags?: {} | undefined;
}) => AWS;
export declare const acm_certificate_validation: ({ cert_arn, fqdns }: {
    cert_arn: any;
    fqdns: any;
}) => AWS;
interface Route53Record {
    full_domain: string;
    route53_zone_id: string;
    api_domain_name?: string;
    api_hosted_zone_id?: string;
    type?: string;
    records?: string[];
}
export declare const route53_record: ({ full_domain, route53_zone_id, api_domain_name, api_hosted_zone_id, type, records, }: Route53Record) => AWS;
export {};
//# sourceMappingURL=route53.d.ts.map