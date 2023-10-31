import { AWS } from '../types';
export declare const ecr_repo: ({ name, tags }: {
    name: any;
    tags?: {} | undefined;
}) => AWS;
export declare const isFile: (path: string) => boolean;
export declare const ecr_image: ({ repo, file_path, image_tag }: {
    repo: any;
    file_path: any;
    image_tag: any;
}) => AWS;
/**
 * References:
 *
 * [1] https://stackoverflow.com/a/66501021
 */
//# sourceMappingURL=ecr.d.ts.map