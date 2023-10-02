import fs from 'fs'
import { getIn, setIn } from '@thi.ng/paths'
import { md2json } from './md2json'

const registryURL = 'https://registry.terraform.io'
const awsRoute = '/v2/provider-versions/43126?include=provider-docs%2Chas-cdktf-docs'

const target = 'root-stub'
const rootSpec = JSON.parse(
    fs.readFileSync(`registry/terraform-provider-aws/${target}.json`, 'utf8')
)

export const parseRootProvider = async (
    json = rootSpec,
    mdPath = ['data', 'attributes', 'content']
) => {
    const {
        data: {
            attributes: { description },
        },
        included,
    } = json
    console.log('parsing', description)
    return included.reduce(async (a, c) => {
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
        const self_path = `registry/${description}/${self_id}.json`

        const out = (payload) => ({
            ...acc,
            [category]: {
                ...acc[category],
                // @ts-ignore
                [title]: md2json(getIn(payload, mdPath)),
            },
        })
        if (fs.existsSync(self_path)) {
            const file = fs.readFileSync(self_path, 'utf8')
            const payload = JSON.parse(file)
            return out(payload)
        } else {
            const self_link = `https://registry.terraform.io/v2/provider-docs/${self_id}`
            const payload = await fetch(self_link)
                .then((res) => res.json())
                .catch((e) => (console.error(e), {}))
            fs.writeFileSync(self_path, JSON.stringify(payload, null, 2))
            return out(payload)
        }
    }, Promise.resolve({}))
}

const testFile = `registry/repl/${target}.json`
//parseRootProvider().then((x) => fs.writeFileSync(testFile, JSON.stringify(x, null, 2)))
