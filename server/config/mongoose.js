// var mongoose = require('mongoose')
// var path = require('path')
// var fs = require('fs')
// var models_path = path.join(__dirname + './../models')
var MongoClient = require('mongodb').MongoClient

module.exports = {
    connect: async function () {
        const mc = await MongoClient.connect("mongodb://localhost:27017/recipe-picker")
        return { dbo: mc.db("recipes"), client: mc }
    },
    closeDbConnection: async function (dbo) {
        return dbo.close()
    },
    insertOneRecipe: async function (dbo, recipe) {
        return await dbo.collection("recipes").insertOne(recipe)

        // dbo.collection("recipes").insertOne(recipe, function (err, res) {
        //     if (err) throw err;
        //     console.log(`1 document inserted`)
        // })
    }
}


