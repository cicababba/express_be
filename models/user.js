const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { isEmail } = require("validator")
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter the email"],
        validate: [isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
        minlength: 6
    }
}, { timestamps: true })

userSchema.pre("save", function(next) {
    const salt = bcrypt.genSaltSync()
    this.password = bcrypt.hashSync(this.password, salt)
    next()
})

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email })
    return (user && bcrypt.compareSync(password,user.password)) ? user._id:  null
}

const User = mongoose.model("User", userSchema)

module.exports = User