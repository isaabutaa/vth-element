const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJWT = require('express-jwt')
const port = process.env.PORT
const secret = process.env.MY_SECRET
const path = require('path')

// middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'client', 'build')))

// connect to database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

// routes
app.use("/auth", require('./routes/authRouter.js'))
app.use("/protected", expressJWT({ secret, algorithms: ['HS256'] }))
app.use("/protected/shares", require('./routes/shareRouter.js'))
app.use("/protected/about-me", require('./routes/aboutRouter.js'))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// for deployment and having express serve up the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

// listen to server
app.listen(port, () => console.log(`Server is running on Port ${port}`))