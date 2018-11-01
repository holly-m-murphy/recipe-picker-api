import AWS from "aws-sdk"

export async function addRecipe(recipe) {
    // Set the region 
    AWS.config.update({ region: 'us-east-1' });

    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

    var params = {
        Item: {
            'title': { S: recipe.title },
            'preparations': { S: recipe.preparations },
            'ingredients': { S: recipe.ingredients },
            'title': { S: recipe.title },
            'author': { S: recipe.author}
        },
        TableName: "recipes"
    };

    return new Promise((resolve, reject) => {
        ddb.putItem(params, (err, data) => {
            if (err) {
                console.log(`The dynamo putItem resulted in an error: `, err)
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


