import * as db from "./../config/mongoose"

const addRecipe = async (req, res, dbo) => {
    const recipe = req.body
    const insert = await db.insertOneRecipe(dbo, recipe)
    return { status: 200, data: insert.ops }
}

export { addRecipe }









