import fs from 'fs'
import { getIn, getInUnsafe } from '@thi.ng/paths'
import { md2json } from './md2json'

const registryURL = 'https://registry.terraform.io'
const awsProviderRoot = '/v2/provider-versions/43126?include=provider-docs%2Chas-cdktf-docs'
const getRootSpec = async (
    provider = 'terraform-provider-aws',
    URL = registryURL + awsProviderRoot,
    docPath = 'registry/docs'
) => {
    const res = await fetch(URL)
    const json = await res.json()
    fs.writeFileSync(`${docPath}/${provider}.json`, JSON.stringify(json, null, 4))
    return json
}

//getRootSpec('terraform-provider-aws') //?

type Included = {
    attributes: {
        category: string
        title: string
        slug: string
    }
    links: { self: string }
}

export const saveJsonDocForRootSpec = async (
    provider = 'terraform-provider-aws',
    refresh = false,
    docPath = 'registry/docs',
    accessor = ['data', 'attributes', 'content'],
    reload = false
) => {
    const inputFileName = `${docPath}/${provider}.json`
    const inputFile = await fs.promises.readFile(inputFileName, 'utf8')
    const rootJson = JSON.parse(inputFile)
    const {
        data: {
            attributes: { description = provider },
        },
        included,
    } = rootJson as {
        data: { attributes: { description: string } }
        included: Included[]
    }
    const outputFile = `registry/json/${description}.json`
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
        let { category, title, slug } = attributes
        if (category === 'guides' || category === 'overview') return acc
        if (category === 'resources') category = 'resource'
        if (category === 'data-sources') category = 'data'

        const self_id = self.split('/').reverse()[0]
        const self_path = `${docPath}/${description}/${self_id}.json`

        const out = (md: string): { [key: string]: any } => ({
            ...acc,
            [category]: {
                ...acc[category],
                [title]: md2json(md),
            },
        })
        if (!reload && fs.existsSync(self_path)) {
            //console.log('Reading from storage:', self_path)
            const file = fs.readFileSync(self_path, 'utf8')
            const payload = JSON.parse(file)
            const md = getInUnsafe(payload, accessor)
            return out(md)
        } else {
            console.log('Fetching from registry:', self_id)
            const self_link = `https://registry.terraform.io/v2/provider-docs/${self_id}`
            const payload = await fetch(self_link)
                .then((res) => res.json())
                .catch((e) => (console.error(e), {}))
            fs.writeFileSync(self_path, JSON.stringify(payload, null, 2))
            const md = getInUnsafe(payload, accessor)
            return out(md)
        }
    }, Promise.resolve({} as { [key: string]: any }))

    console.log('Writing JSON doc for root spec to:', outputFile)
    fs.writeFileSync(outputFile, JSON.stringify(allSpecsForProvider, null, 4))
    return allSpecsForProvider
}
