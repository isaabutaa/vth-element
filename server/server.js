const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJWT = require('express-jwt')

// middleware
app.use(express.json())
app.use(morgan('dev'))

// connect to database
mongoose.connect("mongodb://localhost:27017/vth-element", 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the vth-element db!!!")
)

// routes
app.use("/auth", require('./routes/authRouter.js'))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// listen to server
app.listen(9000, () => console.log("Server is running on Port 9000"))