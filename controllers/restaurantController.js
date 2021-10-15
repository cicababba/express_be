const restaurantService = require("../services/restaurantService")


const insertRestaurant = (req,res) => {
    //inserire logica della response
    restaurantService.createRestaurant().then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
}

const getRestaurants = (req, res) => {
    restaurantService.getRestaurants().then((result) => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    })
}

module.exports = {
    getRestaurants,
    insertRestaurant
}