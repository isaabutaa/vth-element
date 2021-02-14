const express = require('express')
const aboutRouter = express.Router()
const User = require('../models/user.js')

// set about section in user obj
aboutRouter.put("/", (req, res, next) => {
    User.updateOne(
        { _id: req.user._id },
        { $set: { about: req.body.text } },
        (err, aboutData) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            const aboutObj = req.body
            return res.status(201).send(aboutObj)
        }
    )
})

// edit about me text
// aboutRouter.put("/aboutId", (req, res, next) => {
//     About.findOneAndUpdate(
//         { _id: req.params.aboutId, user: req.user._id },
//         req.body,
//         { new: true },
//         (err, updatedAbout) => {
//             if(err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(201).send(updatedAbout)
//         }
//     )
// })


module.exports = aboutRouter