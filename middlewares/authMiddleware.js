const jwt = require("jsonwebtoken")

const validateToken = (req, res, next) => {
    let token = req.headers["auth"]
    if (token)
        jwt.verify(token, "viromarquantebell", (err, decodedToken) => {
            if (err)
                res.status(401).send("You should not be here")
        })
    next()
}

module.exports = {
    validateToken
}