import * as db from "./../config/mongoose"
import * as add from "./add-recipe"

describe("add-recipe controller: ", async () => {

    it("should return a status of 200 when successfully able to add a recipe", async () => {

        db.insertOneRecipe = () => {
            return { ok: true, ops: "something is returned" }
        }

        const req = {
            body: {
                keyOne: "keyOneValue"
            }
        }
        const dbo = "something", res = "something-else"

        const result = await add.addRecipe(req, res, dbo)
        console.log(`result: `, result)

        expect(result.status).toEqual(200)
        expect(result.data).toEqual("something is returned")
    })
    it.skip("should return a status of 403 if no recipe is provided", async () => {

    })
})