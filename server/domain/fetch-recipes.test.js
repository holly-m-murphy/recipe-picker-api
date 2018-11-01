import { fetchRecipes } from "./fetch-recipes"

describe("fetch-recipes", async () => {
    it("should return all recipes from db", async () => {
        const result = await fetchRecipes()
        console.log(result)
        expect(result.ok).toEqual(true)
        expect(result.recipes.length).toEqual(3)
        expect(result.recipes[0].title).toEqual({ "S": "Instant Pot Cauliflower and Butternut Thai Curry" })
        expect(result.recipes[0].author).toEqual({ "S": "OhSheGlows.com (Angela)" })

    })
})