var db = require("./../config/mongoose")


module.exports = {
    addRecipe: async function (req, res, dbo) {
        const recipe = req.body

        const insert = await db.insertOneRecipe(dbo, recipe)
        // await db.closeDbConnection(dbo)

        return { ok: insert.result.ok, data: insert.ops }
    }
}
// addRecipe = (req, res) => {
//     const recipe = req.body

//     db.connect()
//     db.insertOneRecipe()
//     db.close()

//     return { ok: true }

// }






