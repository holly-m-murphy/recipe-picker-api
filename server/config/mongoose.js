import MongoClient from "mongodb"

const connect = async () => {
    const mc = await MongoClient.connect("mongodb://localhost:27017/recipe-picker")
    return { dbo: mc.db("recipes"), client: mc }
}

const closeDbConnection = async (dbo) => {
    return dbo.close()
}

const insertOneRecipe = async (dbo, recipe) => {
    return await dbo.collection("recipes").insertOne(recipe)
}

const removeOneRecipe = async (dbo, title) =>{
    return await dbo.collection("recipes").removeOne({"title":title})
}

const findAll = async (dbo) => {
    const result = await dbo.collection("recipes").find({}).toArray()
    return { ok: true, result }
}

export { connect, closeDbConnection, insertOneRecipe, findAll, removeOneRecipe }





