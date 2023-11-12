const dynamoDBTable = ({}) => ({
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
});
export {};
/**
 * TODO:
 * - [ ] Add a DynamoDB table
 * - [ ] Connect a Lambda to a DynamoDB table
 */
//# sourceMappingURL=dynamodb.todo.js.map