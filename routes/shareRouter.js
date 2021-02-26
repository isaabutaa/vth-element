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

// like a share
shareRouter.put("/like/:shareId", (req, res, next) => {
    Share.findOneAndUpdate(
        { _id: req.params.shareId, likedUsers: { $nin: [ req.user._id ] } },
        { 
            $inc: { likes: 1 },
            $pull: { unlikedUsers: req.user._id },
            $addToSet: { likedUsers: req.user._id }
        },
        { new: true }).populate('user')
        .exec((err, likedShare) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(likedShare.removeUserPassword())
        }
    )
})

// unlike a share
shareRouter.put("/unlike/:shareId", (req, res, next) => {
    Share.findOneAndUpdate(
        { _id: req.params.shareId, likedUsers: { $in: [ req.user._id ] } },
        { 
            $inc: { likes: -1 },
            $pull: { likedUsers: req.user._id },
            $addToSet: { unlikedUsers: req.user._id }
        },
        { new: true }).populate('user')
        .exec((err, unLikedShare) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(unLikedShare.removeUserPassword())
        }
    )
})

module.exports = shareRouter