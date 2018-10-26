import { fetchRecipes } from "./fetch-recipes"

describe("fetch-recipes", async () => {
    it("should return all recipes from db", async () => {
        const huhcb = (err, data) => {
            expect(data.Items.length).toEqual(3)
            expect(data.Items[0].title).toEqual({ "S": "Instant Pot Cauliflower and Butternut Thai Curry" })
            expect(data.Items[0].author).toEqual({ "S": "OhSheGlows.com (Angela)" })

        }
        const result = fetchRecipes({}, {}, {}, huhcb)

    })
})