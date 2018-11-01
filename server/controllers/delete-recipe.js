import * as domain from "./../domain/remove-recipe"

const removeRecipe = async (req) => {
    const title = req.body.title
    const removeResponse = await domain.removeRecipe(title)
    if(!removeResponse.ok){
        return {
            status: 500,
            reason: removeResponse.reason
        }
    }

    return { 
        status: 200
    }
}

export { removeRecipe }