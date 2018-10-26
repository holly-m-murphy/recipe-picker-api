import { readAllFromDynamoDB } from "./aws-client"

describe("The aws-client", async () => {
    it("should add a record to the dynamo db in aws", async () => {
        const result = await readAllFromDynamoDB();
        console.log(`result: `, result)
    })
})