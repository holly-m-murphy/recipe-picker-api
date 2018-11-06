var express = require('express')
//import express from "express"
var app = express()
var bp = require('body-parser')
var path = require('path')
//var db = require('./server/config/mongoose.js')
app.use(express.static(path.join(__dirname + '/client')))
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
// app.use(async (req, res, next) => {
//     app.locals.db = await db.connect()
//     next()
// })

app.set('views', path.join(__dirname + '/client/templates'))
app.set('view engine', 'ejs')




require('./server/config/routes.js')(app)


app.listen(8081, function () {

    console.log('server listening on 8081')

})

