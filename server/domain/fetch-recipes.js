import db from "./../config/mongoose"
import AWS from "aws-sdk"

export async function fetchRecipes() {
    // Set the region 
    AWS.config.update({ region: 'us-east-1' });

    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

    const params = {
        TableName: 'recipes'
    };

    return new Promise((resolve, reject) => {
        ddb.scan(params, (err, data) => {
            if (err) {
                console.log(`The dynamo scan resulted in an error: `, err)
                resolve({
                    ok: false,
                    reason: err
                })
            } else {
                resolve({
                    ok: true, recipes: data.Items
                })
            }
        })
    })

}


