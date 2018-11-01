import { addRecipe } from "./add-recipe"

describe("addRecipe", async () => {
    it("should add a new recipe", async () => {
        const result = await addRecipe({ title: 'domain-add-recipe.test' })
        expect(result.ok).toEqual(true)
    })
})