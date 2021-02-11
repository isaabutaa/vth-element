const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shareSchema = new Schema({
    shareText: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

shareSchema.methods.removeUserPassword = function() {
    const share = this.toObject()
    delete share.user.password
    return share
}

module.exports = mongoose.model("Share", shareSchema)