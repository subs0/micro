import { micro } from '../src/microservices/micro'
import fs from 'fs'

const compiled = micro({
   name: 'micro',
   profile: 'chopshop',
   region: 'us-east-2',
   source: './lambdas',
   tags: { env: 'test' },
   apex: 'chopshop-test.net',
})

const plan = JSON.stringify(compiled, null, 2)

fs.writeFileSync('./example.tf.json', plan)
