const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    about: {
        type: String
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// pre-save hook to encrypt user password on signup
userSchema.pre("save", function(next) {
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})



// method to verify encrypted password on login
userSchema.methods.verifyPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        return callback(null, isMatch)
    })
}

// method to delete user's password from db & server response
userSchema.methods.hidePassword = function() {
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)