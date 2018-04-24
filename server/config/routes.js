

var addCntrl = require('./../controllers/add-recipe')
var findCntrl = require('./../controllers/find-recipe')


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send("hello world")

    })
    app.post('/add-recipe', async function (req, res) {
        const response = await addCntrl.addRecipe(req, res, app.locals.db.dbo)
        console.log(`response in routes -- add res.send()`, response.data)
        await app.locals.db.client.close((err, res) => {
            console.log(`mongodb is closed!`)
        })

    }),
        app.get('/find-all', async function (req, res) {
            const response = await findCntrl.findAll(req, res, app.locals.db.dbo)


            await app.locals.db.client.close((err, res) => {
                console.log(`mongodb is closed!`)


            })
            res.send(response)
        })

}