import { AWS } from '../constants';
export declare const route53Zone: ({ apex }: {
    apex?: string | undefined;
}) => AWS;
/**
 *
 */
export declare const zoneModule: (args_0: {
    apex?: string | undefined;
}, ...args_1: [({
    apex?: string | undefined;
} | undefined)?][]) => [{
    route53: AWS;
}, {
    route53: AWS;
}];
export declare const acmCertificate: ({ full_domain, tags }: {
    full_domain?: string | undefined;
    tags?: {} | undefined;
}) => AWS;
export declare const acmCertificateValidation: ({ cert_arn, fqdns }: {
    cert_arn: any;
    fqdns: any;
}) => AWS;
interface Route53Record {
    /** <subdomain if any>[.]<apex domain> (e.g., 'api.example.com') */
    full_domain: string;
    route53_zone_id: string;
    api_domain_name?: string;
    api_hosted_zone_id?: string;
    type?: string;
    records?: string[];
}
export declare const route53Record: ({ full_domain, route53_zone_id, api_domain_name, api_hosted_zone_id, type, records, }: Route53Record) => AWS;
export {};
//# sourceMappingURL=route53.d.ts.map