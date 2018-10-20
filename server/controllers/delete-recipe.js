import { removeOneRecipe } from "./../config/mongoose"

const removeRecipe = async (req, res, dbo) => {
    const title = req.body.title
    const removeResponse = await removeOneRecipe(dbo, title)
    return { status: 200 }
}

export { removeRecipe }