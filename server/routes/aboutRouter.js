const express = require('express')
const aboutRouter = express.Router()
const About = require('../models/about.js')

// get about me text by user
aboutRouter.get("/user-about", (req, res, next) => {
    About.find({ user: req.user._id }, (err, aboutText) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(aboutText)
    })
})

// add about me text
aboutRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newAbout = new About(req.body)
    newAbout.save((err, savedAbout) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedAbout)
    })
})

// edit about me text
aboutRouter.put("/aboutId", (req, res, next) => {
    About.findOneAndUpdate(
        { _id: req.params.aboutId, user: req.user._id },
        req.body,
        { new: true },
        (err, updatedAbout) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedAbout)
        }
    )
})


module.exports = aboutRouter