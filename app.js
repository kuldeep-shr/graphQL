const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// create our Express app
const app = express()

app.use(bodyParser.json())
//app.use(bodyParser)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

// After all that above middleware, we finally handle our own routes!

module.exports = app