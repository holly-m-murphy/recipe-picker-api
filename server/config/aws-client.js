import AWS from "aws-sdk"

// Set the region 
AWS.config.update({ region: 'us-east-1' });

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

const params = {
    //   ExpressionAttributeValues: {
    //     ':s': {N: '2'},
    //     ':e' : {N: '09'},
    //     ':topic' : {S: 'PHRASE'}
    //    },
    //  KeyConditionExpression: 'Season = :s and Episode > :e',
    //  ProjectionExpression: 'Title, Subtitle',
    //  FilterExpression: 'contains (Subtitle, :topic)',
    TableName: 'recipes'
};



export async function readAllFromDynamoDB() {
    ddb.scan(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            // data.Items.forEach(function (element, index, array) {
            //     console.log(element.Title.S + " (" + element.Subtitle.S + ")");
            // });
            console.log(`data: `, data)
        }
    })
}
