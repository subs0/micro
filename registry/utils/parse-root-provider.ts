import fs from 'fs'
import { getIn, getInUnsafe } from '@thi.ng/paths'
import { typifyTfPayload } from './typify-tf-payload'
import { md2json } from './md2json'
const registryURL = 'https://registry.terraform.io'
const awsRoute = '/v2/provider-versions/43126?include=provider-docs%2Chas-cdktf-docs'

const target = 'root-stub'
const rootSpec = JSON.parse(
    fs.readFileSync(`registry/docs/terraform-provider-aws/${target}.json`, 'utf8')
)

export const saveJsonDocsForRootSpec = async (
    provider = 'terraform-provider-aws',
    refresh = false,
    docPath = 'registry/docs',
    accessor = ['data', 'attributes', 'content']
) => {
    const inputFileName = `${docPath}/${provider}/root.json`
    const inputFile = await fs.promises.readFile(inputFileName, 'utf8')
    const rootJson = JSON.parse(inputFile)
    const {
        data: {
            attributes: { description },
        },
        included,
    } = rootJson
    const outputFile = `${docPath.split('/').slice(0, -1).join('/')}/json/${description}.json`
    if (!refresh && fs.existsSync(outputFile)) {
        console.log('Exists:', outputFile)
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

        const out = (md: string) => ({
            ...acc,
            [category]: {
                ...acc[category],
                [title]: md2json(md),
            },
        })
        if (!refresh && fs.existsSync(self_path)) {
            console.log('Reading from storage:', self_path)
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
    }, Promise.resolve({}))

    fs.writeFileSync(outputFile, JSON.stringify(allSpecsForProvider, null, 2))
    return allSpecsForProvider
}

/*
const test2 = saveJsonDocsForRootSpec()
    .then((x) => (
        console.log(`data: ${Object.keys(x["data"]).length} | resources: ${Object.keys(x["resource"]).length}`),
    x)) //?
*/

/**
 * Deprecated: instead of generating types for each resource/data type, use
 * typify-provider.ts to generate types for the entire provider in a single file.
 */
export const saveTypesForProvider = async (payload, provider, refresh = false) => {
    const categories = Object.keys(payload) // ['data', 'resource']
    const zoom = async (category: string) =>
        await Object.entries(payload[category]).reduce(async (a, c) => {
            const acc = await a
            const [typeName, argsAndAttrs] = c as [string, object]
            const outputFile = `registry/types/${provider}/${category}/${typeName}.ts`
            // ensure parent directories exist, if not create them
            const dir = outputFile.split('/').slice(0, -1).join('/')
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

            if (!refresh && fs.existsSync(outputFile)) {
                console.log('Exists:', outputFile)
                return { ...acc, [typeName]: outputFile }
            } else {
                const lines = await typifyTfPayload(argsAndAttrs, typeName, category)
                await fs.promises.writeFile(outputFile, lines)
                console.log('Wrote:', outputFile)
                return { ...acc, [typeName]: outputFile }
            }
        }, Promise.resolve({}))
    return await categories.reduce(async (a, c) => {
        const acc = await a
        const types = await zoom(c)
        return { ...acc, [c]: types }
    }, {})
}

const testFile = `registry/json/terraform-provider-aws.json`
//saveTypesForProvider(JSON.parse(fs.readFileSync(testFile, 'utf8')), 'terraform-provider-aws').then(
//    (x) => console.log('DONE AND DONE:', x)
//)