"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveJsonDocForRootSpec = exports.getRootSpec = void 0;
const fs_1 = require("fs");
const paths_1 = require("@thi.ng/paths");
const md2json_1 = require("./md2json");
const constants_1 = require("./constants");
const awsProviderRootURL = (provider = 'terraform-provider-aws', version = '5.20.0') => `https://registry.terraform.io/v2/provider-versions/${constants_1.VERSIONS[provider][version]}?include=provider-docs%2Chas-cdktf-docs`;
const getRootSpec = async (provider = 'terraform-provider-aws', version = '5.20.0', // "43475" is the latest version as of 2021-09-01
docPath = 'registry/docs') => {
    const URL = awsProviderRootURL(provider, version);
    const path = `${docPath}/${provider}/${version}.json`;
    // check if file exists
    if ((0, fs_1.existsSync)(path)) {
        const res = (0, fs_1.readFileSync)(path, 'utf8');
        return JSON.parse(res);
    }
    const res = await fetch(URL);
    const json = await res.json();
    (0, fs_1.writeFileSync)(path, JSON.stringify(json, null, 4));
    return json;
};
exports.getRootSpec = getRootSpec;
//getRootSpec('terraform-provider-aws', '5.19.0') //?
const saveJsonDocForRootSpec = async (provider = 'terraform-provider-aws', version = '5.20.0', refresh = false, reload = false, skips = [], docPath = 'registry/docs', accessor = ['data', 'attributes', 'content']) => {
    const rootJson = await (0, exports.getRootSpec)(provider, version, docPath);
    const { data: { attributes: { description }, }, included, } = rootJson;
    const outputFile = `registry/json/${description}/${version}.json`;
    if (!refresh && (0, fs_1.existsSync)(outputFile)) {
        console.log('JSON doc for root spec exists:', outputFile);
        return JSON.parse((0, fs_1.readFileSync)(outputFile, 'utf8'));
    }
    console.log('Parsing', description);
    const allSpecsForProvider = await included.reduce(async (a, c) => {
        const acc = await a;
        const { attributes, links: { self }, } = c;
        let { category, title, slug } = attributes;
        if (category === 'guides' || category === 'overview')
            return acc;
        if (category === 'resources')
            category = 'resource';
        if (category === 'data-sources')
            category = 'data';
        const self_id = self.split('/').reverse()[0];
        if (skips.includes(self_id)) {
            console.log(`Skipping Known Problematic Docs for ${self_id} (${self_id}) : \`${title}\` (${category})`);
            return acc;
        }
        const self_path = `${docPath}/${description}/${version}/${self_id}.json`;
        const out = (md) => ({
            ...acc,
            [category]: {
                // @ts-ignore
                ...acc[category],
                [title]: (0, md2json_1.md2json)(md),
            },
        });
        if (reload || !(0, fs_1.existsSync)(self_path)) {
            // ensure directory exists
            const dir = `${docPath}/${description}/${version}`;
            if (!(0, fs_1.existsSync)(dir))
                (0, fs_1.mkdirSync)(dir, { recursive: true });
            console.log('Fetching from registry:', self_id);
            const self_link = `https://registry.terraform.io/v2/provider-docs/${self_id}`;
            const payload = await fetch(self_link)
                .then((res) => res.json())
                .catch((e) => (console.error(e), {}));
            (0, fs_1.writeFileSync)(self_path, JSON.stringify(payload, null, 2));
            const md = (0, paths_1.getInUnsafe)(payload, accessor);
            return out(md);
        }
        else {
            //console.log('Reading from storage:', self_path)
            const file = (0, fs_1.readFileSync)(self_path, 'utf8');
            const payload = JSON.parse(file);
            const md = (0, paths_1.getInUnsafe)(payload, accessor);
            return out(md);
        }
    }, Promise.resolve({}));
    console.log('Writing JSON doc for root spec to:', outputFile);
    (0, fs_1.writeFileSync)(outputFile, JSON.stringify(allSpecsForProvider, null, 4));
    return allSpecsForProvider;
};
exports.saveJsonDocForRootSpec = saveJsonDocForRootSpec;
//# sourceMappingURL=parse-root-provider.js.map