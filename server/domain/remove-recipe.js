import AWS from "aws-sdk"

export async function removeRecipe(title) {
    // Set the region 
    AWS.config.update({ region: 'us-east-1' });

    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

    var params = {
        Key: {
            "title": {
                S: title
            }
        },
        TableName: "recipes"
    };

    return new Promise((resolve, reject) => {
        ddb.deleteItem(params, (err, data) => {
            if (err) {
                console.log(`The dynamo deleteItem resulted in an error: `, err)
                resolve({
                    ok: false,
                    reason: err
                })
            } else {
                resolve({
                    ok: true
                })
            }
        })
    })
}


