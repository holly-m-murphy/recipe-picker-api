import * as domain from "./../domain/add-recipe"

export async function addRecipe (req) {
    const recipe = req.body
    const insertResult = await domain.addRecipe(recipe)
    if(!insertResult.ok){
        return {
            status: 500
        }
    }
    return { status: 200 }
}










