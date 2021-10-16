const { createNewUser, userLogin } = require("../services/authService")

const login = (req,res) => {
    const {email, password} = req.body
    userLogin(email, password).then(result => {
        if(result)
            res.send(result)
        else
            res.status(401).send("Incorrect login")
    }).catch(err => {
        res.status(500).send(err)
    })

}

const logout = (req,res) => {

}

const signup = (req, res) => {
    const { email, password } = req.body
    createNewUser(email, password).then(result => {
        res.send(result)
    }).catch(err => {
        res.status(400).send(err)
    })
}

module.exports = {
    login,
    logout,
    signup
}