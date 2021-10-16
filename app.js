const express = require("express")
const app = express()
const mongoose = require("mongoose")

const restaurantRoutes = require("./routes/restaurantRoute")
const authRoutes = require("./routes/authRoutes")

const dbURI = "mongodb+srv://root:root@minibackend.i5vcu.mongodb.net/expressBe?retryWrites=true&w=majority"


mongoose.connect(dbURI).then(() => {
    console.log("Connection to database completed!")
    app.listen(3000)
    app.use(express.json())
    app.use('/restaurant', restaurantRoutes)
    app.use('/auth', authRoutes)
}).catch(err => {
    console.error(err)
})

//TODO implementare JWT con middlewares
//TODO db uri in .env
//TODO definire model
//TODO finire le api
//TODO README
//TODO postman collection






