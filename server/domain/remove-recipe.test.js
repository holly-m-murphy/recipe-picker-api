import { removeRecipe } from "./remove-recipe"
import { addRecipe } from "./add-recipe"

describe("remove-recipe", async () =>{
    it("should return the number of rows removed upon success", async () =>{
        const title="domain-remove-recipe.test"
        // add a recipe to remove
        const addResult = await addRecipe({ title })
        expect(addResult.ok).toEqual(true)
        const removeResult = await removeRecipe(title)
        expect(removeResult.ok).toEqual(true)
    })
})