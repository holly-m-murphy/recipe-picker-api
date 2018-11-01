import { fetchRecipes } from "./fetch-recipes"

describe("fetch-recipes", async () => {
    it("should return a 200 for a successful response with the recipes", async () => {
        const result = await fetchRecipes();
        expect(result.status).toEqual(200);
        expect(result.body.recipes.length).toBeGreaterThan(2);
    })
})

