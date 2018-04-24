var db = require("./../config/mongoose")


module.exports = {
    findById: async function (req, res, dbo) {
        console.log(`id: `, req.body)
        const id = req.body.id

        const searchResult = await db.findById(dbo, id)

        return { ok: true }
    },
    findAll: async function (req, res, dbo) {
        const result = await db.findAll(dbo)
        return { ok: true, data: result }
    }
}






