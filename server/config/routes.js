

var addCntrl = require('./../controllers/add-recipe')


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send("hello world")

    })
    app.post('/add-recipe', async function (req, res) {
        const response = await addCntrl.addRecipe(req, res, app.locals.db.dbo)
        console.log(`response in routes`, response.data)
        await app.locals.db.client.close((err, res) => {
            console.log(`mongodb is closed!`)
        })

    })

}