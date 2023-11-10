import { AWS } from '../types';
interface RouteMethods {
    /** route */
    [key: string]: {
        /** method */
        [key: string]: {
            invoke_arn: string;
            function_arn: string;
        };
    };
}
export interface IApi {
    apex: string;
    zone_id: string;
    subdomainRoutes: RouteMethods;
    tags?: object;
}
/**
 * subdomains module
 *
 * provides a set of resources for a subdomain, methods and routes via a simple
 * object notation under the key `subdomainRoutes`.
 *
 */
export declare const api: ({ apex, zone_id, subdomainRoutes, tags, }: IApi, my: {
    [key: string]: AWS;
}) => {};
export declare const apiModule: (args_0: IApi, ...args_1: [(IApi | undefined)?, ({
    [key: string]: AWS;
} | undefined)?][]) => [{}, {}];
export {};
//# sourceMappingURL=api.d.ts.map