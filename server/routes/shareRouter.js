const express = require('express')
const shareRouter = express.Router()
const Share = require('../models/share.js')

// get all shares & post one
shareRouter.route("/")
    .get((req, res, next) => {
        Share.find().populate('user').exec((err, shares) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(shares.map(share => share.removeUserPassword()))
        })
    })
    .post((req, res, next) => {
        req.body.user = req.user._id
        const newShare = new Share(req.body)
        newShare.save((err, savedShare) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedShare)
        })
    })

// get shares by user
shareRouter.get("/userShares", (req, res, next) => {
    Share.find(
        { user: req.user._id },
        (err, shares) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(shares)
        }
    )
})

// edit & delete
shareRouter.route("/:shareId")
    .put((req, res, next) => {
        Share.findOneAndUpdate(
            { _id: req.params.shareId, user: req.user._id },
            req.body,
            { new: true },
            (err, updatedShare) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedShare)
            }
        )
    })
    .delete((req, res, next) => {
        Share.findOneAndDelete(
            { _id: req.params.shareId, user: req.user._id },
            (err, deletedShare) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Deleted ${deletedShare.shareText}`)
            }
        )
    })


module.exports = shareRouter