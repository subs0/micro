import { micro } from '../src/microservices/micro'
import fs from 'fs'

const compiled = micro({
   name: 'micro',
   source: './lambdas',
   tags: { env: 'test' },
   apex: 'chopshop-test.net',
})

const plan = JSON.stringify(compiled, null, 2)

fs.writeFileSync('./example.tf.json', plan)
