const mongoose = require("mongoose")
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
}, { timestamps: true })

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant
