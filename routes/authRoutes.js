const express = require("express")
const router = express.Router()
const { validateToken } = require("../middlewares/authMiddleware")

const { login, signup, logout } = require("../controllers/authController")

router.post("/login", login)
router.post("/logout", validateToken, logout)
router.post("/signup", signup)

module.exports = router