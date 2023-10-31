import { AWS } from '../types';
interface RouteMethods {
    /** route */
    [key: string]: {
        /** method */
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
    [key: string]: AWS;
}) => {};
export {};
//# sourceMappingURL=api.d.ts.map