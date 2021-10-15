const express = require("express")
const router = express.Router()

const { getRestaurants, insertRestaurant } = require("../controllers/restaurantController");

router.post("/", insertRestaurant)

router.get("/", getRestaurants)

module.exports = router