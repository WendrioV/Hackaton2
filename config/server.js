const express = require("express")
const app = express()

//const session require ("express-session")

//motor de views
app.set("view engine","ejs")

// seta a pasta views
app.set("views","./app/views")

// seta a pasta public
app.use(express.static('./app/public'))

// configuração de bodyparse expres
app.use(express.urlencoded({extended: true}))

module.exports = app