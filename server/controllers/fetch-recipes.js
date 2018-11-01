import * as domain from "./../domain/fetch-recipes"

export async function fetchRecipes() {
    const result = await domain.fetchRecipes();
    if (!result.ok) {
        return {
            status: 500,
            body: { message: result.reason }
        }
    }
    return {
        status: 200,
        body: { recipes: result.recipes }
    }

}









