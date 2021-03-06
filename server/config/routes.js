

var addCntrl = require('./../controllers/add-recipe')
var findCntrl = require('./../controllers/find-recipe')
var recipesCntrl = require('./../controllers/fetch-recipes')
var removeRecipeCntrl = require('./../controllers/delete-recipe')


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send("hello world")

    })
    app.post('/add-recipe', async function (req, res) {
        const response = await addCntrl.addRecipe(req)
        res.send(response)

    }),
        app.get('/find-all', async function (req, res) {
            const response = await findCntrl.findAll(req, res, app.locals.db.dbo)
            res.send(response)
        }),
        app.get('/fetch-recipes', async function (req, res) {
            const response = await recipesCntrl.fetchRecipes(req, res)
            console.log(`response in routes: `, response.body)
            res.send(response)
        }),
        app.delete('/remove-recipe', async function (req, res) {
            const response = await removeRecipeCntrl.removeRecipe(req, res, app.locals.db.dbo)
            console.log(`response in routes! `, response)
            res.send(response)
        })

}