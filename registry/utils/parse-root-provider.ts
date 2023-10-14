import fs from 'fs'
import { getIn, getInUnsafe } from '@thi.ng/paths'
import { md2json } from './md2json'
import { NestedObject, ProviderJson, TFJsonDocPayload, Category, versions } from './constants'

const awsProviderRootURL = (provider = 'terraform-provider-aws', version = '5.20.0') =>
    `https://registry.terraform.io/v2/provider-versions/${versions[provider][version]}?include=provider-docs%2Chas-cdktf-docs`

const getRootSpec = async (
    provider = 'terraform-provider-aws',
    version = '5.20.0', // "43475" is the latest version as of 2021-09-01
    docPath = 'registry/docs'
) => {
    const URL = awsProviderRootURL(provider, version)
    //console.log({ URL })
    const res = await fetch(URL)
    const json = await res.json()
    fs.writeFileSync(`${docPath}/${provider}/${version}.json`, JSON.stringify(json, null, 4))
    return json
}

//getRootSpec('terraform-provider-aws', '5.19.0') //?

export const saveJsonDocForRootSpec = async (
    provider = 'terraform-provider-aws',
    version = '5.20.0',
    refresh = false,
    reload = false,
    skips: string[] = [],
    docPath = 'registry/docs',
    accessor = ['data', 'attributes', 'content']
): Promise<ProviderJson> => {
    const inputFileName = `${docPath}/${provider}/${version}.json`
    const inputFile = await fs.promises.readFile(inputFileName, 'utf8')
    const rootJson = JSON.parse(inputFile)
    const {
        data: {
            attributes: { description = provider },
        },
        included,
    } = rootJson as {
        data: { attributes: { description: string } }
        included: TFJsonDocPayload[]
    }
    const outputFile = `registry/json/${description}/${version}.json`
    if (!refresh && fs.existsSync(outputFile)) {
        console.log('JSON doc for root spec exists:', outputFile)
        return JSON.parse(fs.readFileSync(outputFile, 'utf8'))
    }
    console.log('Parsing', description)
    const allSpecsForProvider = await included.reduce(async (a, c) => {
        const acc = await a
        const {
            attributes,
            links: { self },
        } = c
        let { category, title, slug } = attributes as {
            category: Category
            title: string
            slug: string
        }
        if (category === 'guides' || category === 'overview') return acc
        if (category === 'resources') category = 'resource' as Category.resource
        if (category === 'data-sources') category = 'data' as Category.data

        const self_id = self.split('/').reverse()[0]
        if (skips.includes(self_id)) {
            console.log(
                `Skipping Known Problematic Docs for ${self_id} (${self_id}) : \`${title}\` (${category})`
            )
            return acc
        }
        const self_path = `${docPath}/${description}/${version}/${self_id}.json`

        const out = (md: string) => ({
            ...acc,
            [category]: {
                // @ts-ignore
                ...acc[category],
                [title]: md2json(md),
            },
        })
        if (reload || !fs.existsSync(self_path)) {
            // ensure directory exists
            const dir = `${docPath}/${description}/${version}`
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
            console.log('Fetching from registry:', self_id)
            const self_link = `https://registry.terraform.io/v2/provider-docs/${self_id}`
            const payload = await fetch(self_link)
                .then((res) => res.json())
                .catch((e) => (console.error(e), {}))
            fs.writeFileSync(self_path, JSON.stringify(payload, null, 2))
            const md = getInUnsafe(payload, accessor)
            return out(md)
        } else {
            //console.log('Reading from storage:', self_path)
            const file = fs.readFileSync(self_path, 'utf8')
            const payload = JSON.parse(file)
            const md = getInUnsafe(payload, accessor)
            return out(md)
        }
    }, Promise.resolve({} as ProviderJson))

    console.log('Writing JSON doc for root spec to:', outputFile)
    fs.writeFileSync(outputFile, JSON.stringify(allSpecsForProvider, null, 4))
    return allSpecsForProvider
}
