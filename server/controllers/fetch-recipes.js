import db from "./../config/mongoose"
import AWS from "aws-sdk"

export function fetchRecipes(req, res, dbo, cb) {
    // Set the region 
    AWS.config.update({ region: 'us-east-1' });

    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

    const params = {
        TableName: 'recipes'
    };

    ddb.scan(params, cb)

}
// module.exports = {
//     fetchRecipes: async function (req, res, dbo) {
//         const fetchResult = await db.findAll(dbo)
//         // await db.closeDbConnection(dbo)
//         return { ok: true, recipes: fetchResult.result }
//     }
// }







// export async function fetchRecipes() {


//     ddb.scan(params, function (err, data) {
//         if (err) {
//             return { ok: false, reason: err }
//         } else {
//             // console.log(`data: `, data.Items)
//             return { ok: true, recipes: data.Items }
//         }
//     })
// }








