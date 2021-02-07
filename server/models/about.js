const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User", 
        required: true
    }
})

module.exports = mongoose.model("About", aboutSchema)