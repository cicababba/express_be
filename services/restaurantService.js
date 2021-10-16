const Restaurant = require("../models/restaurant");

const getRestaurants = () => {
    return new Promise((res, rej) => {
        Restaurant.find().then((result) => {
            res(result)
        }).catch(err => {
            rej(err)
        })
    })
}

const createRestaurant = () => {
    let restaurant = new Restaurant({
        name: "Test"
    })
    return new Promise((res,rej) => {
        restaurant.save().then((result) => {
            res(result)
        }).catch(err => {
            rej(err)
        })
    })
}

module.exports = {
    getRestaurants,
    createRestaurant
}