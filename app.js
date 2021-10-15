const express = require("express")
const app = express()
const mongoose = require("mongoose")

const restaurantRoutes = require("./routes/restaurantRoute")

const dbURI = "mongodb+srv://root:root@minibackend.i5vcu.mongodb.net/expressBe?retryWrites=true&w=majority"


mongoose.connect(dbURI).then(() => {
    console.log("Connection to database completed!")
    app.listen(3000)
    app.use('/restaurant', restaurantRoutes)
}).catch(err => {
    console.error(err)
})






