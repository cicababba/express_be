const express = require("express")
const {getRestaurants, insertRestaurant} = require("../controllers/restaurantController");
const router = express.Router()

router.post("/", insertRestaurant)

router.get("/", getRestaurants)

module.exports = router