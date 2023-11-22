import { AWS } from '../constants'

const dynamoDBTable = ({}): AWS => ({
   resource: {
      dynamodb_table: {
         attribute: {
            hash_key: 'id',
            range_key: 'created_at',
            type: 'S',
         },
         billing_mode: 'PAY_PER_REQUEST',
         deletion_protection_enabled: true,
      },
   },
})

/**
 * TODO:
 * - [ ] Add a DynamoDB table
 * - [ ] Connect a Lambda to a DynamoDB table
 */
