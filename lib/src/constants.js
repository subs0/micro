export const PIVOT_POINTS = ['resource', 'data', 'locals'];
export const ROOT_MEMBERS = ['provider', 'terraform'];
export const GLOBALS = ['null_resource', 'external', 'local_file', 'random_pet'];
export const flag = { BroughtToYouBy: '@-0/micro' };
//        888                                      ,e,
//   e88~\888 888  888 888-~88e-~88e 888-~88e-~88e  "   e88~~8e   d88~\
//  d888  888 888  888 888  888  888 888  888  888 888 d888  88b C888
//  8888  888 888  888 888  888  888 888  888  888 888 8888__888  Y88b
//  Y888  888 888  888 888  888  888 888  888  888 888 Y888    ,   888D
//   "88_/888 "88_-888 888  888  888 888  888  888 888  "88___/  \_88P
const dumtest = !!'';
const externalEx = {
    program: ['prepare'],
    query: {
        paths: JSON.stringify({
            module: '${path.module}',
            root: '${path.root}',
            cwd: '${path.cwd}',
        }),
        docker: dumtest
            ? JSON.stringify({
                docker_pip_cache: 'pip_cache',
                docker_build_root: 'build_root',
                docker_file: 'filepath',
                docker_image: 'image',
                with_ssh_agent: true,
                docker_additional_options: ['additional_options'],
                docker_entrypoint: 'entrypoint',
            })
            : null,
        artifacts_dir: '',
        runtime: '',
        source_path: '',
        hash_extra: '',
        hash_extra_paths: JSON.stringify([]),
        recreate_missing_package: true,
    },
    result: {
        build_plan: '-->',
        build_plan_filename: '-->',
        filename: '-->',
        timestamp: '-->',
    },
};
const localFileEx = {
    content: 'build_plan',
    filename: 'build_file_name',
    directory_permission: '0755',
    file_permission: '0644',
};
const nullResourceEx = {
    triggers: {
        filename: 'file_path',
        timestamp: 'timestamp',
    },
    provisioner: {
        'local-exec': {
            interpreter: ['python', './src/package.py', 'build', '--timestamp', ''],
            command: 'build_plan_filename',
        },
    },
    depends_on: ['local_file.build_plan'],
};
//# sourceMappingURL=constants.js.map