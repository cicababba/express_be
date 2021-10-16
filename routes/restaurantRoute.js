const express = require("express")
const router = express.Router()

const { validateToken } = require("../middlewares/authMiddleware")
const { getRestaurants, insertRestaurant } = require("../controllers/restaurantController");

router.post("/", validateToken, insertRestaurant)
router.get("/", validateToken, getRestaurants)

module.exports = router