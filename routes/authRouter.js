const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

// signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne(
        {username: req.body.username}, 
        (err, user) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            if(user) {
                res.status(403)
                return next(new Error("That username is taken"))
            }
            const newUser = new User(req.body)
            newUser.save((err, savedUser) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                const token = jwt.sign(savedUser.hidePassword(), process.env.MY_SECRET)
                return res.status(201).send({ token, user: savedUser.hidePassword() })
            })
        }
    )
})

// login
authRouter.post("/login", (req, res, next) => {
    User.findOne(
        { username: req.body.username }, 
        (err, user) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            if(!user) {
                console.log(user)
                res.status(500)
                return next(new Error("Check: Incorrect username or password"))
            }
            user.verifyPassword(req.body.password, (err, isMatch) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                if(!isMatch) {
                    res.status(403)
                    return next(new Error("Username or Password is incorrect"))
                }
                const token = jwt.sign(user.hidePassword(), process.env.MY_SECRET)
                return res.status(200).send({ token, user: user.hidePassword() })
            })
        })
})

module.exports = authRouter