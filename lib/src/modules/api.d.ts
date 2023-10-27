import { AWS } from '../constants';
interface RouteMethods {
    [key: string]: {
        [key: string]: {
            invoke_arn: string;
            function_name: string;
        };
    };
}
interface SubDomains {
    apex: string;
    zone_id: string;
    subdomainRoutes: RouteMethods;
    tags?: object;
}
/**
 * subdomains module
 *
 * @param apex - apex domain name
 * @param subdomains - array of subdomains
 * - name - name of the subdomain
 * - lambda_integration - lambda integration object
 *   - lambda_invoke_arn - arn of the lambda function to integrate
 * - routes - array of routes
 *   - route object
 *     - route_key - route key
 *     - integration_id - id of the integration to use
 * @param my - self reference for referencing other resources
 *
 */
export declare const api: ({ apex, zone_id, subdomainRoutes, tags, }: SubDomains, my: {
    [key: string]: import("../../registry").AWS05200;
}) => {};
export {};
//# sourceMappingURL=api.d.ts.map