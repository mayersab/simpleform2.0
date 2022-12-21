require('dotenv').config()
const port = process.env.PORT

const express = require('express')
const messageRoutes = require('./routes/messages')
const mongoose = require('mongoose')

// express app
const app = express()

app.use(express.json())

// routes
app.use('/messages', messageRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for requests
    app.listen(port, () => {
        console.log(`Conencted to DB and listening to requests on port ${port}`)
    })
})
.catch((error) => {
    console.log(error)
})


