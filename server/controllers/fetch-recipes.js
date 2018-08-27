var db = require("./../config/mongoose")


module.exports = {
    fetchRecipes: async function (req, res, dbo) {
        const fetchResult = await db.findAll(dbo)
        // await db.closeDbConnection(dbo)
        console.log(`fetchResult in controller: `, fetchResult)
        return { ok: true, recipes: fetchResult.result }
    }
}
// addRecipe = (req, res) => {
//     const recipe = req.body

//     db.connect()
//     db.insertOneRecipe()
//     db.close()

//     return { ok: true }

// }






