interface IConfiguration {
    /** Path to the directory containing your lambda functions directories */
    source: string;
    /** Tags to apply to all resources */
    tags: object;
    /** Apex domain name (for APIs) */
    apex?: string;
    /** path to package.py */
    builder?: string;
    /** path to directory for builder files */
    build_dir?: string;
}
interface IMicro extends IConfiguration {
    /** Namespace of the microservices */
    name: string;
}
export declare const micro: ({ name, source, tags, apex, builder, build_dir, }: IMicro) => any;
export {};
//# sourceMappingURL=micro.d.ts.map