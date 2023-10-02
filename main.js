import { Configuration } from './tfbuilder/lib/index.js'
//import { Configuration } from '@vobarian/tfbuilder'
import fs from 'fs'

const config = Configuration()
const { resource, data, locals, merge, module, output, provider, variable } = config

const addProviders = (providers = [{ cloud: 'aws', region: 'us-east-2', alias: '' }]) => {
    providers.forEach(({ cloud, region, alias }) =>
        // @ts-ignore
        provider.add(cloud, { region, ...(alias && { alias }) })
    )
}

const lambdas = (parent) => {
    // read the parent directory and find all subdirectories in that root
    const directories = fs.readdirSync(parent).filter((f) => fs.statSync(f).isDirectory())
    console.log(directories)
}

const addLambda = ({ name, handler, runtime, memory, timeout, role, env, vpc, layers }) => {
    resource.add.aws_lambda_function = {
        function_name: name,
        handler,
        runtime,
        memory_size: memory,
        timeout,
        role,
        ...(env && { environment: env }),
        ...(vpc && { vpc_config: vpc }),
        ...(layers && { layers }),
    }
}

// @ts-ignore
provider.add('aws', { region: 'us-east-2' })
data.local_file.my_input = {
    filename: 'throwaway/input.txt',
}
resource.local_file.my_output = {
    filename: 'throwaway/output.txt',
    content: data.local_file.my_input.content + ' world',
}
config.writeTo('state.tf.json')
