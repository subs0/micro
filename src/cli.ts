import { compileTypes } from '../registry/utils/typify-provider'
/**
 * this is a thin CLI wrapper around compile types, which can be
 * run as a node script
 */
const [provider, version] = process.argv.slice(2)
if (!provider || !version) {
    console.error('Please provide a provider and version')
    process.exit(1)
}
compileTypes(provider, version)
